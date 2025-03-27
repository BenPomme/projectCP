var zp=Object.defineProperty;var Su=n=>{throw TypeError(n)};var Gp=(n,e,t)=>e in n?zp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ru=(n,e,t)=>Gp(n,typeof e!="symbol"?e+"":e,t),xa=(n,e,t)=>e.has(n)||Su("Cannot "+t);var D=(n,e,t)=>(xa(n,e,"read from private field"),t?t.call(n):e.get(n)),ae=(n,e,t)=>e.has(n)?Su("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),J=(n,e,t,r)=>(xa(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),We=(n,e,t)=>(xa(n,e,"access private method"),t);var ki=(n,e,t,r)=>({set _(s){J(n,e,s,t)},get _(){return D(n,e,r)}});import{r as k,a as Kp,g as Qp,R as Pe,u as At,L as re,O as Yp,b as Xs,B as Xp,c as Jp,d as we,N as Vh}from"./vendor-Dfm89uXP.js";import{A as ba,q as gs,a as Zp}from"./ui-4osAbc78.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Mh={exports:{}},xo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey=k,ty=Symbol.for("react.element"),ny=Symbol.for("react.fragment"),ry=Object.prototype.hasOwnProperty,sy=ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iy={key:!0,ref:!0,__self:!0,__source:!0};function Lh(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)ry.call(e,r)&&!iy.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:ty,type:n,key:i,ref:a,props:s,_owner:sy.current}}xo.Fragment=ny;xo.jsx=Lh;xo.jsxs=Lh;Mh.exports=xo;var c=Mh.exports,Fh,Nu=Kp;Fh=Nu.createRoot,Nu.hydrateRoot;var bo=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Eo=typeof window>"u"||"Deno"in globalThis;function vt(){}function oy(n,e){return typeof n=="function"?n(e):n}function ay(n){return typeof n=="number"&&n>=0&&n!==1/0}function cy(n,e){return Math.max(n+(e||0)-Date.now(),0)}function Cu(n,e){return typeof n=="function"?n(e):n}function ly(n,e){return typeof n=="function"?n(e):n}function ku(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:l}=n;if(a){if(r){if(e.queryHash!==yc(a,e.options))return!1}else if(!Vs(e.queryKey,a))return!1}if(t!=="all"){const u=e.isActive();if(t==="active"&&!u||t==="inactive"&&u)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||s&&s!==e.state.fetchStatus||i&&!i(e))}function ju(n,e){const{exact:t,status:r,predicate:s,mutationKey:i}=n;if(i){if(!e.options.mutationKey)return!1;if(t){if(Os(e.options.mutationKey)!==Os(i))return!1}else if(!Vs(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function yc(n,e){return((e==null?void 0:e.queryKeyHashFn)||Os)(n)}function Os(n){return JSON.stringify(n,(e,t)=>Wa(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function Vs(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!Vs(n[t],e[t])):!1}function Uh(n,e){if(n===e)return n;const t=Du(n)&&Du(e);if(t||Wa(n)&&Wa(e)){const r=t?n:Object.keys(n),s=r.length,i=t?e:Object.keys(e),a=i.length,l=t?[]:{};let u=0;for(let h=0;h<a;h++){const m=t?h:i[h];(!t&&r.includes(m)||t)&&n[m]===void 0&&e[m]===void 0?(l[m]=void 0,u++):(l[m]=Uh(n[m],e[m]),l[m]===n[m]&&n[m]!==void 0&&u++)}return s===a&&u===s?n:l}return e}function Du(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Wa(n){if(!Ou(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!Ou(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Ou(n){return Object.prototype.toString.call(n)==="[object Object]"}function uy(n){return new Promise(e=>{setTimeout(e,n)})}function dy(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?Uh(n,e):e}function hy(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function fy(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var _c=Symbol();function Bh(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===_c?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var Kn,bn,Cr,Sh,my=(Sh=class extends bo{constructor(){super();ae(this,Kn);ae(this,bn);ae(this,Cr);J(this,Cr,e=>{if(!Eo&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){D(this,bn)||this.setEventListener(D(this,Cr))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,bn))==null||e.call(this),J(this,bn,void 0))}setEventListener(e){var t;J(this,Cr,e),(t=D(this,bn))==null||t.call(this),J(this,bn,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){D(this,Kn)!==e&&(J(this,Kn,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof D(this,Kn)=="boolean"?D(this,Kn):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Kn=new WeakMap,bn=new WeakMap,Cr=new WeakMap,Sh),$h=new my,kr,En,jr,Rh,gy=(Rh=class extends bo{constructor(){super();ae(this,kr,!0);ae(this,En);ae(this,jr);J(this,jr,e=>{if(!Eo&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){D(this,En)||this.setEventListener(D(this,jr))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,En))==null||e.call(this),J(this,En,void 0))}setEventListener(e){var t;J(this,jr,e),(t=D(this,En))==null||t.call(this),J(this,En,e(this.setOnline.bind(this)))}setOnline(e){D(this,kr)!==e&&(J(this,kr,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return D(this,kr)}},kr=new WeakMap,En=new WeakMap,jr=new WeakMap,Rh),Ji=new gy;function py(){let n,e;const t=new Promise((s,i)=>{n=s,e=i});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}function yy(n){return Math.min(1e3*2**n,3e4)}function qh(n){return(n??"online")==="online"?Ji.isOnline():!0}var Wh=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function Ea(n){return n instanceof Wh}function Hh(n){let e=!1,t=0,r=!1,s;const i=py(),a=b=>{var v;r||(g(new Wh(b)),(v=n.abort)==null||v.call(n))},l=()=>{e=!0},u=()=>{e=!1},h=()=>$h.isFocused()&&(n.networkMode==="always"||Ji.isOnline())&&n.canRun(),m=()=>qh(n.networkMode)&&n.canRun(),y=b=>{var v;r||(r=!0,(v=n.onSuccess)==null||v.call(n,b),s==null||s(),i.resolve(b))},g=b=>{var v;r||(r=!0,(v=n.onError)==null||v.call(n,b),s==null||s(),i.reject(b))},x=()=>new Promise(b=>{var v;s=j=>{(r||h())&&b(j)},(v=n.onPause)==null||v.call(n)}).then(()=>{var b;s=void 0,r||(b=n.onContinue)==null||b.call(n)}),A=()=>{if(r)return;let b;const v=t===0?n.initialPromise:void 0;try{b=v??n.fn()}catch(j){b=Promise.reject(j)}Promise.resolve(b).then(y).catch(j=>{var W;if(r)return;const I=n.retry??(Eo?0:3),V=n.retryDelay??yy,F=typeof V=="function"?V(t,j):V,B=I===!0||typeof I=="number"&&t<I||typeof I=="function"&&I(t,j);if(e||!B){g(j);return}t++,(W=n.onFail)==null||W.call(n,t,j),uy(F).then(()=>h()?void 0:x()).then(()=>{e?g(j):A()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:l,continueRetry:u,canStart:m,start:()=>(m()?A():x().then(A),i)}}function _y(){let n=[],e=0,t=l=>{l()},r=l=>{l()},s=l=>setTimeout(l,0);const i=l=>{e?n.push(l):s(()=>{t(l)})},a=()=>{const l=n;n=[],l.length&&s(()=>{r(()=>{l.forEach(u=>{t(u)})})})};return{batch:l=>{let u;e++;try{u=l()}finally{e--,e||a()}return u},batchCalls:l=>(...u)=>{i(()=>{l(...u)})},schedule:i,setNotifyFunction:l=>{t=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{s=l}}}var tt=_y(),Qn,Nh,zh=(Nh=class{constructor(){ae(this,Qn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),ay(this.gcTime)&&J(this,Qn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(Eo?1/0:5*60*1e3))}clearGcTimeout(){D(this,Qn)&&(clearTimeout(D(this,Qn)),J(this,Qn,void 0))}},Qn=new WeakMap,Nh),Dr,Or,ft,Yn,ze,Qs,Xn,wt,Qt,Ch,vy=(Ch=class extends zh{constructor(t){super();ae(this,wt);ae(this,Dr);ae(this,Or);ae(this,ft);ae(this,Yn);ae(this,ze);ae(this,Qs);ae(this,Xn);J(this,Xn,!1),J(this,Qs,t.defaultOptions),this.setOptions(t.options),this.observers=[],J(this,Yn,t.client),J(this,ft,D(this,Yn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,J(this,Dr,xy(this.options)),this.state=t.state??D(this,Dr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=D(this,ze))==null?void 0:t.promise}setOptions(t){this.options={...D(this,Qs),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,ft).remove(this)}setData(t,r){const s=dy(this.state.data,t,this.options);return We(this,wt,Qt).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){We(this,wt,Qt).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,i;const r=(s=D(this,ze))==null?void 0:s.promise;return(i=D(this,ze))==null||i.cancel(t),r?r.then(vt).catch(vt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(D(this,Dr))}isActive(){return this.observers.some(t=>ly(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===_c||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!cy(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=D(this,ze))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=D(this,ze))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),D(this,ft).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(D(this,ze)&&(D(this,Xn)?D(this,ze).cancel({revert:!0}):D(this,ze).cancelRetry()),this.scheduleGc()),D(this,ft).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||We(this,wt,Qt).call(this,{type:"invalidate"})}fetch(t,r){var h,m,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(D(this,ze))return D(this,ze).continueRetry(),D(this,ze).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(x=>x.options.queryFn);g&&this.setOptions(g.options)}const s=new AbortController,i=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(J(this,Xn,!0),s.signal)})},a=()=>{const g=Bh(this.options,r),x={client:D(this,Yn),queryKey:this.queryKey,meta:this.meta};return i(x),J(this,Xn,!1),this.options.persister?this.options.persister(g,x,this):g(x)},l={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:D(this,Yn),state:this.state,fetchFn:a};i(l),(h=this.options.behavior)==null||h.onFetch(l,this),J(this,Or,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=l.fetchOptions)==null?void 0:m.meta))&&We(this,wt,Qt).call(this,{type:"fetch",meta:(y=l.fetchOptions)==null?void 0:y.meta});const u=g=>{var x,A,b,v;Ea(g)&&g.silent||We(this,wt,Qt).call(this,{type:"error",error:g}),Ea(g)||((A=(x=D(this,ft).config).onError)==null||A.call(x,g,this),(v=(b=D(this,ft).config).onSettled)==null||v.call(b,this.state.data,g,this)),this.scheduleGc()};return J(this,ze,Hh({initialPromise:r==null?void 0:r.initialPromise,fn:l.fetchFn,abort:s.abort.bind(s),onSuccess:g=>{var x,A,b,v;if(g===void 0){u(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(j){u(j);return}(A=(x=D(this,ft).config).onSuccess)==null||A.call(x,g,this),(v=(b=D(this,ft).config).onSettled)==null||v.call(b,g,this.state.error,this),this.scheduleGc()},onError:u,onFail:(g,x)=>{We(this,wt,Qt).call(this,{type:"failed",failureCount:g,error:x})},onPause:()=>{We(this,wt,Qt).call(this,{type:"pause"})},onContinue:()=>{We(this,wt,Qt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),D(this,ze).start()}},Dr=new WeakMap,Or=new WeakMap,ft=new WeakMap,Yn=new WeakMap,ze=new WeakMap,Qs=new WeakMap,Xn=new WeakMap,wt=new WeakSet,Qt=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...wy(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Ea(i)&&i.revert&&D(this,Or)?{...D(this,Or),fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),tt.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),D(this,ft).notify({query:this,type:"updated",action:t})})},Ch);function wy(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:qh(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function xy(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var Nt,kh,by=(kh=class extends bo{constructor(e={}){super();ae(this,Nt);this.config=e,J(this,Nt,new Map)}build(e,t,r){const s=t.queryKey,i=t.queryHash??yc(s,t);let a=this.get(i);return a||(a=new vy({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){D(this,Nt).has(e.queryHash)||(D(this,Nt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=D(this,Nt).get(e.queryHash);t&&(e.destroy(),t===e&&D(this,Nt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){tt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return D(this,Nt).get(e)}getAll(){return[...D(this,Nt).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>ku(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>ku(e,r)):t}notify(e){tt.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){tt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){tt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Nt=new WeakMap,kh),Ct,et,Jn,kt,gn,jh,Ey=(jh=class extends zh{constructor(t){super();ae(this,kt);ae(this,Ct);ae(this,et);ae(this,Jn);this.mutationId=t.mutationId,J(this,et,t.mutationCache),J(this,Ct,[]),this.state=t.state||Ty(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){D(this,Ct).includes(t)||(D(this,Ct).push(t),this.clearGcTimeout(),D(this,et).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){J(this,Ct,D(this,Ct).filter(r=>r!==t)),this.scheduleGc(),D(this,et).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){D(this,Ct).length||(this.state.status==="pending"?this.scheduleGc():D(this,et).remove(this))}continue(){var t;return((t=D(this,Jn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,l,u,h,m,y,g,x,A,b,v,j,I,V,F,B,W,P,_;J(this,Jn,Hh({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(w,T)=>{We(this,kt,gn).call(this,{type:"failed",failureCount:w,error:T})},onPause:()=>{We(this,kt,gn).call(this,{type:"pause"})},onContinue:()=>{We(this,kt,gn).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,et).canRun(this)}));const r=this.state.status==="pending",s=!D(this,Jn).canStart();try{if(!r){We(this,kt,gn).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=D(this,et).config).onMutate)==null?void 0:a.call(i,t,this));const T=await((u=(l=this.options).onMutate)==null?void 0:u.call(l,t));T!==this.state.context&&We(this,kt,gn).call(this,{type:"pending",context:T,variables:t,isPaused:s})}const w=await D(this,Jn).start();return await((m=(h=D(this,et).config).onSuccess)==null?void 0:m.call(h,w,t,this.state.context,this)),await((g=(y=this.options).onSuccess)==null?void 0:g.call(y,w,t,this.state.context)),await((A=(x=D(this,et).config).onSettled)==null?void 0:A.call(x,w,null,this.state.variables,this.state.context,this)),await((v=(b=this.options).onSettled)==null?void 0:v.call(b,w,null,t,this.state.context)),We(this,kt,gn).call(this,{type:"success",data:w}),w}catch(w){try{throw await((I=(j=D(this,et).config).onError)==null?void 0:I.call(j,w,t,this.state.context,this)),await((F=(V=this.options).onError)==null?void 0:F.call(V,w,t,this.state.context)),await((W=(B=D(this,et).config).onSettled)==null?void 0:W.call(B,void 0,w,this.state.variables,this.state.context,this)),await((_=(P=this.options).onSettled)==null?void 0:_.call(P,void 0,w,t,this.state.context)),w}finally{We(this,kt,gn).call(this,{type:"error",error:w})}}finally{D(this,et).runNext(this)}}},Ct=new WeakMap,et=new WeakMap,Jn=new WeakMap,kt=new WeakSet,gn=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),tt.batch(()=>{D(this,Ct).forEach(s=>{s.onMutationUpdate(t)}),D(this,et).notify({mutation:this,type:"updated",action:t})})},jh);function Ty(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Yt,xt,Ys,Dh,Iy=(Dh=class extends bo{constructor(e={}){super();ae(this,Yt);ae(this,xt);ae(this,Ys);this.config=e,J(this,Yt,new Set),J(this,xt,new Map),J(this,Ys,0)}build(e,t,r){const s=new Ey({mutationCache:this,mutationId:++ki(this,Ys)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){D(this,Yt).add(e);const t=ji(e);if(typeof t=="string"){const r=D(this,xt).get(t);r?r.push(e):D(this,xt).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(D(this,Yt).delete(e)){const t=ji(e);if(typeof t=="string"){const r=D(this,xt).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&D(this,xt).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=ji(e);if(typeof t=="string"){const r=D(this,xt).get(t),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=ji(e);if(typeof t=="string"){const s=(r=D(this,xt).get(t))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){tt.batch(()=>{D(this,Yt).forEach(e=>{this.notify({type:"removed",mutation:e})}),D(this,Yt).clear(),D(this,xt).clear()})}getAll(){return Array.from(D(this,Yt))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>ju(t,r))}findAll(e={}){return this.getAll().filter(t=>ju(e,t))}notify(e){tt.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return tt.batch(()=>Promise.all(e.map(t=>t.continue().catch(vt))))}},Yt=new WeakMap,xt=new WeakMap,Ys=new WeakMap,Dh);function ji(n){var e;return(e=n.options.scope)==null?void 0:e.id}function Vu(n){return{onFetch:(e,t)=>{var m,y,g,x,A;const r=e.options,s=(g=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:g.direction,i=((x=e.state.data)==null?void 0:x.pages)||[],a=((A=e.state.data)==null?void 0:A.pageParams)||[];let l={pages:[],pageParams:[]},u=0;const h=async()=>{let b=!1;const v=V=>{Object.defineProperty(V,"signal",{enumerable:!0,get:()=>(e.signal.aborted?b=!0:e.signal.addEventListener("abort",()=>{b=!0}),e.signal)})},j=Bh(e.options,e.fetchOptions),I=async(V,F,B)=>{if(b)return Promise.reject();if(F==null&&V.pages.length)return Promise.resolve(V);const W={client:e.client,queryKey:e.queryKey,pageParam:F,direction:B?"backward":"forward",meta:e.options.meta};v(W);const P=await j(W),{maxPages:_}=e.options,w=B?fy:hy;return{pages:w(V.pages,P,_),pageParams:w(V.pageParams,F,_)}};if(s&&i.length){const V=s==="backward",F=V?Ay:Mu,B={pages:i,pageParams:a},W=F(r,B);l=await I(B,W,V)}else{const V=n??i.length;do{const F=u===0?a[0]??r.initialPageParam:Mu(r,l);if(u>0&&F==null)break;l=await I(l,F),u++}while(u<V)}return l};e.options.persister?e.fetchFn=()=>{var b,v;return(v=(b=e.options).persister)==null?void 0:v.call(b,h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=h}}}function Mu(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function Ay(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var xe,Tn,In,Vr,Mr,An,Lr,Fr,Oh,Py=(Oh=class{constructor(n={}){ae(this,xe);ae(this,Tn);ae(this,In);ae(this,Vr);ae(this,Mr);ae(this,An);ae(this,Lr);ae(this,Fr);J(this,xe,n.queryCache||new by),J(this,Tn,n.mutationCache||new Iy),J(this,In,n.defaultOptions||{}),J(this,Vr,new Map),J(this,Mr,new Map),J(this,An,0)}mount(){ki(this,An)._++,D(this,An)===1&&(J(this,Lr,$h.subscribe(async n=>{n&&(await this.resumePausedMutations(),D(this,xe).onFocus())})),J(this,Fr,Ji.subscribe(async n=>{n&&(await this.resumePausedMutations(),D(this,xe).onOnline())})))}unmount(){var n,e;ki(this,An)._--,D(this,An)===0&&((n=D(this,Lr))==null||n.call(this),J(this,Lr,void 0),(e=D(this,Fr))==null||e.call(this),J(this,Fr,void 0))}isFetching(n){return D(this,xe).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return D(this,Tn).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=D(this,xe).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=D(this,xe).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(Cu(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return D(this,xe).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=D(this,xe).get(r.queryHash),i=s==null?void 0:s.state.data,a=oy(e,i);if(a!==void 0)return D(this,xe).build(this,r).setData(a,{...t,manual:!0})}setQueriesData(n,e,t){return tt.batch(()=>D(this,xe).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=D(this,xe).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=D(this,xe);tt.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=D(this,xe);return tt.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=tt.batch(()=>D(this,xe).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(vt).catch(vt)}invalidateQueries(n,e={}){return tt.batch(()=>(D(this,xe).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=tt.batch(()=>D(this,xe).findAll(n).filter(s=>!s.isDisabled()).map(s=>{let i=s.fetch(void 0,t);return t.throwOnError||(i=i.catch(vt)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(vt)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=D(this,xe).build(this,e);return t.isStaleByTime(Cu(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(vt).catch(vt)}fetchInfiniteQuery(n){return n.behavior=Vu(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(vt).catch(vt)}ensureInfiniteQueryData(n){return n.behavior=Vu(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Ji.isOnline()?D(this,Tn).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,xe)}getMutationCache(){return D(this,Tn)}getDefaultOptions(){return D(this,In)}setDefaultOptions(n){J(this,In,n)}setQueryDefaults(n,e){D(this,Vr).set(Os(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...D(this,Vr).values()],t={};return e.forEach(r=>{Vs(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){D(this,Mr).set(Os(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...D(this,Mr).values()],t={};return e.forEach(r=>{Vs(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...D(this,In).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=yc(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===_c&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...D(this,In).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){D(this,xe).clear(),D(this,Tn).clear()}},xe=new WeakMap,Tn=new WeakMap,In=new WeakMap,Vr=new WeakMap,Mr=new WeakMap,An=new WeakMap,Lr=new WeakMap,Fr=new WeakMap,Oh),Sy=k.createContext(void 0),Ry=({client:n,children:e})=>(k.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),c.jsx(Sy.Provider,{value:n,children:e})),Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ny=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,x=h&63;u||(x=64,a||(g=64)),r.push(t[m],t[y],t[g],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ny(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new Cy;const g=i<<2|l>>4;if(r.push(g),h!==64){const x=l<<4&240|h>>2;if(r.push(x),y!==64){const A=h<<6&192|y;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(n){const e=Gh(n);return Kh.encodeByteArray(e,!0)},Zi=function(n){return ky(n).replace(/\./g,"")},Qh=function(n){try{return Kh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dy=()=>jy().__FIREBASE_DEFAULTS__,Oy=()=>{if(typeof process>"u"||typeof Lu>"u")return;const n=Lu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},To=()=>{try{return Dy()||Oy()||Vy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yh=n=>{var e,t;return(t=(e=To())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xh=n=>{const e=Yh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Jh=()=>{var n;return(n=To())===null||n===void 0?void 0:n.config},Zh=n=>{var e;return(e=To())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ef(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zi(JSON.stringify(t)),Zi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ly(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Fy(){var n;const e=(n=To())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Uy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function By(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $y(){const n=Ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qy(){return!Fy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nf(){try{return typeof indexedDB=="object"}catch{return!1}}function rf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Wy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hy,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?zy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yt(s,l,r)}}function zy(n,e){return n.replace(Gy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gy=/\{\$([^}]+)}/g;function Ky(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ms(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Fu(i)&&Fu(a)){if(!Ms(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Fu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qy(n,e){const t=new Yy(n,e);return t.subscribe.bind(t)}class Yy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ta),s.error===void 0&&(s.error=Ta),s.complete===void 0&&(s.complete=Ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ta(){}/**
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
 */const Jy=1e3,Zy=2,e0=4*60*60*1e3,t0=.5;function Uu(n,e=Jy,t=Zy){const r=e*Math.pow(t,n),s=Math.round(t0*r*(Math.random()-.5)*2);return Math.min(e0,r+s)}/**
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
 */const qn="[DEFAULT]";/**
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
 */class n0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new My;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s0(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r0(n){return n===qn?void 0:n}function s0(n){return n.instantiationMode==="EAGER"}/**
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
 */class i0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new n0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const o0={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},a0=se.INFO,c0={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},l0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=c0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Io{constructor(e){this.name=e,this._logLevel=a0,this._logHandler=l0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const u0=(n,e)=>e.some(t=>n instanceof t);let Bu,$u;function d0(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h0(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sf=new WeakMap,Ha=new WeakMap,of=new WeakMap,Ia=new WeakMap,vc=new WeakMap;function f0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Sn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sf.set(t,n)}).catch(()=>{}),vc.set(e,n),e}function m0(n){if(Ha.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ha.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ha.get(n);if(e==="objectStoreNames")return n.objectStoreNames||of.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function g0(n){za=n(za)}function p0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Aa(this),e,...t);return of.set(r,e.sort?e.sort():[e]),Sn(r)}:h0().includes(n)?function(...e){return n.apply(Aa(this),e),Sn(sf.get(this))}:function(...e){return Sn(n.apply(Aa(this),e))}}function y0(n){return typeof n=="function"?p0(n):(n instanceof IDBTransaction&&m0(n),u0(n,d0())?new Proxy(n,za):n)}function Sn(n){if(n instanceof IDBRequest)return f0(n);if(Ia.has(n))return Ia.get(n);const e=y0(n);return e!==n&&(Ia.set(n,e),vc.set(e,n)),e}const Aa=n=>vc.get(n);function af(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Sn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Sn(a.result),u.oldVersion,u.newVersion,Sn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _0=["get","getKey","getAll","getAllKeys","count"],v0=["put","add","delete","clear"],Pa=new Map;function qu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=v0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_0.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&u.done]))[0]};return Pa.set(e,i),i}g0(n=>({...n,get:(e,t,r)=>qu(e,t)||n.get(e,t,r),has:(e,t)=>!!qu(e,t)||n.has(e,t)}));/**
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
 */class w0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(x0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function x0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",Wu="0.10.13";/**
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
 */const nn=new Io("@firebase/app"),b0="@firebase/app-compat",E0="@firebase/analytics-compat",T0="@firebase/analytics",I0="@firebase/app-check-compat",A0="@firebase/app-check",P0="@firebase/auth",S0="@firebase/auth-compat",R0="@firebase/database",N0="@firebase/data-connect",C0="@firebase/database-compat",k0="@firebase/functions",j0="@firebase/functions-compat",D0="@firebase/installations",O0="@firebase/installations-compat",V0="@firebase/messaging",M0="@firebase/messaging-compat",L0="@firebase/performance",F0="@firebase/performance-compat",U0="@firebase/remote-config",B0="@firebase/remote-config-compat",$0="@firebase/storage",q0="@firebase/storage-compat",W0="@firebase/firestore",H0="@firebase/vertexai-preview",z0="@firebase/firestore-compat",G0="firebase",K0="10.14.1";/**
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
 */const Ka="[DEFAULT]",Q0={[Ga]:"fire-core",[b0]:"fire-core-compat",[T0]:"fire-analytics",[E0]:"fire-analytics-compat",[A0]:"fire-app-check",[I0]:"fire-app-check-compat",[P0]:"fire-auth",[S0]:"fire-auth-compat",[R0]:"fire-rtdb",[N0]:"fire-data-connect",[C0]:"fire-rtdb-compat",[k0]:"fire-fn",[j0]:"fire-fn-compat",[D0]:"fire-iid",[O0]:"fire-iid-compat",[V0]:"fire-fcm",[M0]:"fire-fcm-compat",[L0]:"fire-perf",[F0]:"fire-perf-compat",[U0]:"fire-rc",[B0]:"fire-rc-compat",[$0]:"fire-gcs",[q0]:"fire-gcs-compat",[W0]:"fire-fst",[z0]:"fire-fst-compat",[H0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
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
 */const eo=new Map,Y0=new Map,Qa=new Map;function Hu(n,e){try{n.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(Qa.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,n);for(const t of eo.values())Hu(t,n);for(const t of Y0.values())Hu(t,n);return!0}function On(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bt(n){return n.settings!==void 0}/**
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
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new lr("app","Firebase",X0);/**
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
 */class J0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=K0;function cf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ka,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rn.create("bad-app-name",{appName:String(s)});if(t||(t=Jh()),!t)throw Rn.create("no-options");const i=eo.get(s);if(i){if(Ms(t,i.options)&&Ms(r,i.config))return i;throw Rn.create("duplicate-app",{appName:s})}const a=new i0(s);for(const u of Qa.values())a.addComponent(u);const l=new J0(t,r,a);return eo.set(s,l),l}function Ao(n=Ka){const e=eo.get(n);if(!e&&n===Ka&&Jh())return cf();if(!e)throw Rn.create("no-app",{appName:n});return e}function it(n,e,t){var r;let s=(r=Q0[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(l.join(" "));return}Et(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Z0="firebase-heartbeat-database",e_=1,Ls="firebase-heartbeat-store";let Sa=null;function lf(){return Sa||(Sa=af(Z0,e_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function t_(n){try{const t=(await lf()).transaction(Ls),r=await t.objectStore(Ls).get(uf(n));return await t.done,r}catch(e){if(e instanceof yt)nn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(t.message)}}}async function zu(n,e){try{const r=(await lf()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,uf(n)),await r.done}catch(t){if(t instanceof yt)nn.warn(t.message);else{const r=Rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(r.message)}}}function uf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const n_=1024,r_=30*24*60*60*1e3;class s_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new o_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=r_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gu(),{heartbeatsToSend:r,unsentEntries:s}=i_(this._heartbeatsCache.heartbeats),i=Zi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nn.warn(t),""}}}function Gu(){return new Date().toISOString().substring(0,10)}function i_(n,e=n_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ku(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ku(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class o_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?rf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await t_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return zu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ku(n){return Zi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function a_(n){Et(new mt("platform-logger",e=>new w0(e),"PRIVATE")),Et(new mt("heartbeat",e=>new s_(e),"PRIVATE")),it(Ga,Wu,n),it(Ga,Wu,"esm2017"),it("fire-js","")}a_("");function wc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function df(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c_=df,hf=new lr("auth","Firebase",df());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Io("@firebase/auth");function l_(n,...e){to.logLevel<=se.WARN&&to.warn(`Auth (${ur}): ${n}`,...e)}function $i(n,...e){to.logLevel<=se.ERROR&&to.error(`Auth (${ur}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,...e){throw bc(n,...e)}function Ot(n,...e){return bc(n,...e)}function xc(n,e,t){const r=Object.assign(Object.assign({},c_()),{[e]:t});return new lr("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return xc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function u_(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&gt(n,"argument-error"),xc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hf.create(n,...e)}function z(n,e,...t){if(!n)throw bc(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $i(e),new Error(e)}function rn(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function d_(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||tf()||"connection"in navigator)?navigator.onLine:!0}function f_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,rn(t>e,"Short delay should be less than long delay!"),this.isMobile=Ly()||By()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n,e){rn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new Zs(3e4,6e4);function ln(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Bt(n,e,t,r,s={}){return mf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Js(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return Uy()||(h.referrerPolicy="no-referrer"),ff.fetch()(gf(n,n.config.apiHost,t,l),h)})}async function mf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},m_),e);try{const s=new y_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Di(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Di(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Di(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw xc(n,m,h);gt(n,m)}}catch(s){if(s instanceof yt)throw s;gt(n,"network-request-failed",{message:String(s)})}}async function ei(n,e,t,r,s={}){const i=await Bt(n,e,t,r,s);return"mfaPendingCredential"in i&&gt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function gf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ec(n.config,s):`${n.config.apiScheme}://${s}`}function p_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class y_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),g_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ot(n,e,r);return s.customData._tokenResponse=t,s}function Yu(n){return n!==void 0&&n.enterprise!==void 0}class __{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return p_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function v_(n,e){return Bt(n,"GET","/v2/recaptchaConfig",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(n,e){return Bt(n,"POST","/v1/accounts:delete",e)}async function pf(n,e){return Bt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x_(n,e=!1){const t=me(n),r=await t.getIdToken(e),s=Tc(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ss(Ra(s.auth_time)),issuedAtTime:Ss(Ra(s.iat)),expirationTime:Ss(Ra(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ra(n){return Number(n)*1e3}function Tc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):($i("Failed to decode base64 JWT payload"),null)}catch(s){return $i("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xu(n){const e=Tc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yt&&b_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function b_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function no(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ur(n,pf(t,{idToken:r}));z(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yf(i.providerUserInfo):[],l=I_(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Xa(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function T_(n){const e=me(n);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yf(n){return n.map(e=>{var{providerId:t}=e,r=wc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(n,e){const t=await mf(n,{},async()=>{const r=Js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=gf(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ff.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P_(n,e){return Bt(n,"POST","/v2/accounts:revokeToken",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Xu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await A_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Pr;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new E_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return x_(this,e)}reload(){return T_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await no(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Ur(this,w_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,h,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,x=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,b=(l=t.tenantId)!==null&&l!==void 0?l:void 0,v=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,I=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:V,emailVerified:F,isAnonymous:B,providerData:W,stsTokenManager:P}=t;z(V&&P,e,"internal-error");const _=Pr.fromJSON(this.name,P);z(typeof V=="string",e,"internal-error"),fn(y,e.name),fn(g,e.name),z(typeof F=="boolean",e,"internal-error"),z(typeof B=="boolean",e,"internal-error"),fn(x,e.name),fn(A,e.name),fn(b,e.name),fn(v,e.name),fn(j,e.name),fn(I,e.name);const w=new Jt({uid:V,auth:e,email:g,emailVerified:F,displayName:y,isAnonymous:B,photoURL:A,phoneNumber:x,tenantId:b,stsTokenManager:_,createdAt:j,lastLoginAt:I});return W&&Array.isArray(W)&&(w.providerData=W.map(T=>Object.assign({},T))),v&&(w._redirectEventId=v),w}static async _fromIdTokenResponse(e,t,r=!1){const s=new Pr;s.updateFromServerResponse(t);const i=new Jt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await no(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Pr;l.updateFromIdToken(r);const u=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map;function Zt(n){rn(n instanceof Function,"Expected a class definition");let e=Ju.get(n);return e?(rn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ju.set(n,e),e)}/**
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
 */class _f{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_f.type="NONE";const Zu=_f;/**
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
 */function qi(n,e,t){return`firebase:${n}:${e}:${t}`}class Sr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qi(this.userKey,s.apiKey,i),this.fullPersistenceKey=qi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Sr(Zt(Zu),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Zt(Zu);const a=qi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const m=await h._get(a);if(m){const y=Jt._fromJSON(e,m);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Sr(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Sr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tf(e))return"Blackberry";if(If(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||xf(e))&&!e.includes("edge/"))return"Chrome";if(Ef(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vf(n=Ye()){return/firefox\//i.test(n)}function wf(n=Ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xf(n=Ye()){return/crios\//i.test(n)}function bf(n=Ye()){return/iemobile/i.test(n)}function Ef(n=Ye()){return/android/i.test(n)}function Tf(n=Ye()){return/blackberry/i.test(n)}function If(n=Ye()){return/webos/i.test(n)}function Ic(n=Ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function S_(n=Ye()){var e;return Ic(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R_(){return $y()&&document.documentMode===10}function Af(n=Ye()){return Ic(n)||Ef(n)||If(n)||Tf(n)||/windows phone/i.test(n)||bf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n,e=[]){let t;switch(n){case"Browser":t=ed(Ye());break;case"Worker":t=`${ed(Ye())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ur}/${r}`}/**
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
 */class N_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function C_(n,e={}){return Bt(n,"GET","/v2/passwordPolicy",ln(n,e))}/**
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
 */const k_=6;class j_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:k_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new N_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Sr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pf(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(Vt(this));const t=e?me(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C_(this),t=new j_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await P_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Sr.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&l_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $t(n){return me(n)}class td{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qy(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function O_(n){Po=n}function Sf(n){return Po.loadJS(n)}function V_(){return Po.recaptchaEnterpriseScript}function M_(){return Po.gapiScript}function L_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const F_="recaptcha-enterprise",U_="NO_RECAPTCHA";class B_{constructor(e){this.type=F_,this.auth=$t(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{v_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new __(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Yu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(U_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Yu(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=V_();u.length!==0&&(u+=l),Sf(u).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function nd(n,e,t,r=!1){const s=new B_(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ro(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await nd(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nd(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n,e){const t=On(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ms(i,e??{}))return s;gt(s,"already-initialized")}return t.initialize({options:e})}function q_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function W_(n,e,t){const r=$t(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Rf(e),{host:a,port:l}=H_(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),z_()}function Rf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function H_(n){const e=Rf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:rd(a)}}}function rd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function z_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function G_(n,e){return Bt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e){return ei(n,"POST","/v1/accounts:signInWithPassword",ln(n,e))}async function Q_(n,e){return Bt(n,"POST","/v1/accounts:sendOobCode",ln(n,e))}async function Y_(n,e){return Q_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e){return ei(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}async function J_(n,e){return ei(n,"POST","/v1/accounts:signInWithEmailLink",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ac{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Fs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(e,t,"signInWithPassword",K_);case"emailLink":return X_(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(e,r,"signUpPassword",G_);case"emailLink":return J_(e,{idToken:t,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(n,e){return ei(n,"POST","/v1/accounts:signInWithIdp",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="http://localhost";class tr extends Ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=wc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new tr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rr(e,t)}buildRequest(){const e={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Js(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tv(n){const e=xs(bs(n)).link,t=e?xs(bs(e)).deep_link_id:null,r=xs(bs(n)).deep_link_id;return(r?xs(bs(r)).link:null)||r||t||e||n}class Pc{constructor(e){var t,r,s,i,a,l;const u=xs(bs(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=ev((s=u.mode)!==null&&s!==void 0?s:null);z(h&&m&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=tv(e);try{return new Pc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,t){return Fs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pc.parseLink(t);return z(r,"argument-error"),Fs._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ti extends Sc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ti{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ti{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ti{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(n,e){return ei(n,"POST","/v1/accounts:signUp",ln(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),a=sd(r);return new nr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=sd(r);return new nr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function sd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends yt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new so(e,t,r,s)}}function Nf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(n,i,e,r):i})}async function rv(n,e,t=!1){const r=await Ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nr._forOperation(n,"link",r)}/**
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
 */async function sv(n,e,t=!1){const{auth:r}=n;if(bt(r.app))return Promise.reject(Vt(r));const s="reauthenticate";try{const i=await Ur(n,Nf(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=Tc(i.idToken);z(a,r,"internal-error");const{sub:l}=a;return z(n.uid===l,r,"user-mismatch"),nr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(n,e,t=!1){if(bt(n.app))return Promise.reject(Vt(n));const r="signIn",s=await Nf(n,r,e),i=await nr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function iv(n,e){return Cf($t(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(n){const e=$t(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ov(n,e,t){const r=$t(n);await ro(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Y_)}async function av(n,e,t){if(bt(n.app))return Promise.reject(Vt(n));const r=$t(n),a=await ro(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kf(n),u}),l=await nr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function cv(n,e,t){return bt(n.app)?Promise.reject(Vt(n)):iv(me(n),Qr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n,e){return Bt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=me(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Ur(r,lv(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function dv(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function hv(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function fv(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}const io="__sak";/**
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
 */class jf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1e3,gv=10;class Df extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);R_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Df.type="LOCAL";const pv=Df;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Of.type="SESSION";const Vf=Of;/**
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
 */function yv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class So{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new So(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),u=await yv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}So.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _v{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const h=Rc("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const g=y;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function vv(n){Mt().location.href=n}/**
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
 */function Mf(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bv(){return Mf()?self:null}/**
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
 */const Lf="firebaseLocalStorageDb",Ev=1,oo="firebaseLocalStorage",Ff="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ro(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function Tv(){const n=indexedDB.deleteDatabase(Lf);return new ni(n).toPromise()}function Ja(){const n=indexedDB.open(Lf,Ev);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oo,{keyPath:Ff})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oo)?e(r):(r.close(),await Tv(),e(await Ja()))})})}async function id(n,e,t){const r=Ro(n,!0).put({[Ff]:e,value:t});return new ni(r).toPromise()}async function Iv(n,e){const t=Ro(n,!1).get(e),r=await new ni(t).toPromise();return r===void 0?null:r.value}function od(n,e){const t=Ro(n,!0).delete(e);return new ni(t).toPromise()}const Av=800,Pv=3;class Uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Pv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=So._getInstance(bv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new _v(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await id(e,io,"1"),await od(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>id(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Iv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>od(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ro(s,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uf.type="LOCAL";const Sv=Uf;new Zs(3e4,6e4);/**
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
 */function Bf(n,e){return e?Zt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nc extends Ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rv(n){return Cf(n.auth,new Nc(n),n.bypassAuthState)}function Nv(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),sv(t,new Nc(n),n.bypassAuthState)}async function Cv(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),rv(t,new Nc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rv;case"linkViaPopup":case"linkViaRedirect":return Cv;case"reauthViaPopup":case"reauthViaRedirect":return Nv;default:gt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=new Zs(2e3,1e4);class Ar extends $f{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kv.get())};e()}}Ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="pendingRedirect",Wi=new Map;class Dv extends $f{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const r=await Ov(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ov(n,e){const t=Wf(e),r=qf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Vv(n,e){return qf(n)._set(Wf(e),"true")}function Mv(n,e){Wi.set(n._key(),e)}function qf(n){return Zt(n._redirectPersistence)}function Wf(n){return qi(jv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n,e,t){return Fv(n,e,t)}async function Fv(n,e,t){if(bt(n.app))return Promise.reject(Vt(n));const r=$t(n);u_(n,e,Sc),await r._initializationPromise;const s=Bf(r,t);return await Vv(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Uv(n,e){return await $t(n)._initializationPromise,Hf(n,e,!1)}async function Hf(n,e,t=!1){if(bt(n.app))return Promise.reject(Vt(n));const r=$t(n),s=Bf(r,e),a=await new Dv(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=10*60*1e3;class $v{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ad(e))}saveEventToCache(e){this.cachedEventUids.add(ad(e)),this.lastProcessedEventTime=Date.now()}}function ad(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e={}){return Bt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zv=/^https?/;async function Gv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Wv(n);for(const t of e)try{if(Kv(t))return}catch{}gt(n,"unauthorized-domain")}function Kv(n){const e=Ya(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!zv.test(t))return!1;if(Hv.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qv=new Zs(3e4,6e4);function cd(){const n=Mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yv(n){return new Promise((e,t)=>{var r,s,i;function a(){cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cd(),t(Ot(n,"network-request-failed"))},timeout:Qv.get()})}if(!((s=(r=Mt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mt().gapi)===null||i===void 0)&&i.load)a();else{const l=L_("iframefcb");return Mt()[l]=()=>{gapi.load?a():t(Ot(n,"network-request-failed"))},Sf(`${M_()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function Xv(n){return Hi=Hi||Yv(n),Hi}/**
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
 */const Jv=new Zs(5e3,15e3),Zv="__/auth/iframe",ew="emulator/auth/iframe",tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ec(e,ew):`https://${n.config.authDomain}/${Zv}`,r={apiKey:e.apiKey,appName:n.name,v:ur},s=nw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Js(r).slice(1)}`}async function sw(n){const e=await Xv(n),t=Mt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:rw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(n,"network-request-failed"),l=Mt().setTimeout(()=>{i(a)},Jv.get());function u(){Mt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ow=500,aw=600,cw="_blank",lw="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uw(n,e,t,r=ow,s=aw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},iw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=Ye().toLowerCase();t&&(l=xf(h)?cw:t),vf(h)&&(e=e||lw,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[x,A])=>`${g}${x}=${A},`,"");if(S_(h)&&l!=="_self")return dw(e||"",l),new ld(null);const y=window.open(e||"",l,m);z(y,n,"popup-blocked");try{y.focus()}catch{}return new ld(y)}function dw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const hw="__/auth/handler",fw="emulator/auth/handler",mw=encodeURIComponent("fac");async function ud(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ur,eventId:s};if(e instanceof Sc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ky(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof ti){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),h=u?`#${mw}=${encodeURIComponent(u)}`:"";return`${gw(n)}?${Js(l).slice(1)}${h}`}function gw({config:n}){return n.emulator?Ec(n,fw):`https://${n.authDomain}/${hw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="webStorageSupport";class pw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vf,this._completeRedirectFn=Hf,this._overrideRedirectResult=Mv}async _openPopup(e,t,r,s){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ud(e,t,r,Ya(),s);return uw(e,a,Rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ud(e,t,r,Ya(),s);return vv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sw(e),r=new $v(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Na,{type:Na},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Na];a!==void 0&&t(!!a),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Af()||wf()||Ic()}}const yw=pw;var dd="@firebase/auth",hd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ww(n){Et(new mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pf(n)},h=new D_(r,s,i,u);return q_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Et(new mt("auth-internal",e=>{const t=$t(e.getProvider("auth").getImmediate());return(r=>new _w(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(dd,hd,vw(n)),it(dd,hd,"esm2017")}/**
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
 */const xw=5*60,bw=Zh("authIdTokenMaxAge")||xw;let fd=null;const Ew=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bw)return;const s=t==null?void 0:t.token;fd!==s&&(fd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tw(n=Ao()){const e=On(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$_(n,{popupRedirectResolver:yw,persistence:[Sv,pv,Vf]}),r=Zh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Ew(i.toString());hv(t,a,()=>a(t.currentUser)),dv(t,l=>a(l))}}const s=Yh("auth");return s&&W_(t,`http://${s}`),t}function Iw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}O_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Iw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ww("Browser");var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,Gf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,_){function w(){}w.prototype=_.prototype,P.D=_.prototype,P.prototype=new w,P.prototype.constructor=P,P.C=function(T,S,R){for(var E=Array(arguments.length-2),De=2;De<arguments.length;De++)E[De-2]=arguments[De];return _.prototype[S].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)T[S]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(S=0;16>S;++S)T[S]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=P.g[0],w=P.g[1],S=P.g[2];var R=P.g[3],E=_+(R^w&(S^R))+T[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=R+(S^_&(w^S))+T[1]+3905402710&4294967295,R=_+(E<<12&4294967295|E>>>20),E=S+(w^R&(_^w))+T[2]+606105819&4294967295,S=R+(E<<17&4294967295|E>>>15),E=w+(_^S&(R^_))+T[3]+3250441966&4294967295,w=S+(E<<22&4294967295|E>>>10),E=_+(R^w&(S^R))+T[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(S^_&(w^S))+T[5]+1200080426&4294967295,R=_+(E<<12&4294967295|E>>>20),E=S+(w^R&(_^w))+T[6]+2821735955&4294967295,S=R+(E<<17&4294967295|E>>>15),E=w+(_^S&(R^_))+T[7]+4249261313&4294967295,w=S+(E<<22&4294967295|E>>>10),E=_+(R^w&(S^R))+T[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(S^_&(w^S))+T[9]+2336552879&4294967295,R=_+(E<<12&4294967295|E>>>20),E=S+(w^R&(_^w))+T[10]+4294925233&4294967295,S=R+(E<<17&4294967295|E>>>15),E=w+(_^S&(R^_))+T[11]+2304563134&4294967295,w=S+(E<<22&4294967295|E>>>10),E=_+(R^w&(S^R))+T[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(S^_&(w^S))+T[13]+4254626195&4294967295,R=_+(E<<12&4294967295|E>>>20),E=S+(w^R&(_^w))+T[14]+2792965006&4294967295,S=R+(E<<17&4294967295|E>>>15),E=w+(_^S&(R^_))+T[15]+1236535329&4294967295,w=S+(E<<22&4294967295|E>>>10),E=_+(S^R&(w^S))+T[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^S&(_^w))+T[6]+3225465664&4294967295,R=_+(E<<9&4294967295|E>>>23),E=S+(_^w&(R^_))+T[11]+643717713&4294967295,S=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(S^R))+T[0]+3921069994&4294967295,w=S+(E<<20&4294967295|E>>>12),E=_+(S^R&(w^S))+T[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^S&(_^w))+T[10]+38016083&4294967295,R=_+(E<<9&4294967295|E>>>23),E=S+(_^w&(R^_))+T[15]+3634488961&4294967295,S=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(S^R))+T[4]+3889429448&4294967295,w=S+(E<<20&4294967295|E>>>12),E=_+(S^R&(w^S))+T[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^S&(_^w))+T[14]+3275163606&4294967295,R=_+(E<<9&4294967295|E>>>23),E=S+(_^w&(R^_))+T[3]+4107603335&4294967295,S=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(S^R))+T[8]+1163531501&4294967295,w=S+(E<<20&4294967295|E>>>12),E=_+(S^R&(w^S))+T[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^S&(_^w))+T[2]+4243563512&4294967295,R=_+(E<<9&4294967295|E>>>23),E=S+(_^w&(R^_))+T[7]+1735328473&4294967295,S=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(S^R))+T[12]+2368359562&4294967295,w=S+(E<<20&4294967295|E>>>12),E=_+(w^S^R)+T[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^S)+T[8]+2272392833&4294967295,R=_+(E<<11&4294967295|E>>>21),E=S+(R^_^w)+T[11]+1839030562&4294967295,S=R+(E<<16&4294967295|E>>>16),E=w+(S^R^_)+T[14]+4259657740&4294967295,w=S+(E<<23&4294967295|E>>>9),E=_+(w^S^R)+T[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^S)+T[4]+1272893353&4294967295,R=_+(E<<11&4294967295|E>>>21),E=S+(R^_^w)+T[7]+4139469664&4294967295,S=R+(E<<16&4294967295|E>>>16),E=w+(S^R^_)+T[10]+3200236656&4294967295,w=S+(E<<23&4294967295|E>>>9),E=_+(w^S^R)+T[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^S)+T[0]+3936430074&4294967295,R=_+(E<<11&4294967295|E>>>21),E=S+(R^_^w)+T[3]+3572445317&4294967295,S=R+(E<<16&4294967295|E>>>16),E=w+(S^R^_)+T[6]+76029189&4294967295,w=S+(E<<23&4294967295|E>>>9),E=_+(w^S^R)+T[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^S)+T[12]+3873151461&4294967295,R=_+(E<<11&4294967295|E>>>21),E=S+(R^_^w)+T[15]+530742520&4294967295,S=R+(E<<16&4294967295|E>>>16),E=w+(S^R^_)+T[2]+3299628645&4294967295,w=S+(E<<23&4294967295|E>>>9),E=_+(S^(w|~R))+T[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~S))+T[7]+1126891415&4294967295,R=_+(E<<10&4294967295|E>>>22),E=S+(_^(R|~w))+T[14]+2878612391&4294967295,S=R+(E<<15&4294967295|E>>>17),E=w+(R^(S|~_))+T[5]+4237533241&4294967295,w=S+(E<<21&4294967295|E>>>11),E=_+(S^(w|~R))+T[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~S))+T[3]+2399980690&4294967295,R=_+(E<<10&4294967295|E>>>22),E=S+(_^(R|~w))+T[10]+4293915773&4294967295,S=R+(E<<15&4294967295|E>>>17),E=w+(R^(S|~_))+T[1]+2240044497&4294967295,w=S+(E<<21&4294967295|E>>>11),E=_+(S^(w|~R))+T[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~S))+T[15]+4264355552&4294967295,R=_+(E<<10&4294967295|E>>>22),E=S+(_^(R|~w))+T[6]+2734768916&4294967295,S=R+(E<<15&4294967295|E>>>17),E=w+(R^(S|~_))+T[13]+1309151649&4294967295,w=S+(E<<21&4294967295|E>>>11),E=_+(S^(w|~R))+T[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~S))+T[11]+3174756917&4294967295,R=_+(E<<10&4294967295|E>>>22),E=S+(_^(R|~w))+T[2]+718787259&4294967295,S=R+(E<<15&4294967295|E>>>17),E=w+(R^(S|~_))+T[9]+3951481745&4294967295,P.g[0]=P.g[0]+_&4294967295,P.g[1]=P.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,P.g[2]=P.g[2]+S&4294967295,P.g[3]=P.g[3]+R&4294967295}r.prototype.u=function(P,_){_===void 0&&(_=P.length);for(var w=_-this.blockSize,T=this.B,S=this.h,R=0;R<_;){if(S==0)for(;R<=w;)s(this,P,R),R+=this.blockSize;if(typeof P=="string"){for(;R<_;)if(T[S++]=P.charCodeAt(R++),S==this.blockSize){s(this,T),S=0;break}}else for(;R<_;)if(T[S++]=P[R++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=_},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var _=1;_<P.length-8;++_)P[_]=0;var w=8*this.o;for(_=P.length-8;_<P.length;++_)P[_]=w&255,w/=256;for(this.u(P),P=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)P[w++]=this.g[_]>>>T&255;return P};function i(P,_){var w=l;return Object.prototype.hasOwnProperty.call(w,P)?w[P]:w[P]=_(P)}function a(P,_){this.h=_;for(var w=[],T=!0,S=P.length-1;0<=S;S--){var R=P[S]|0;T&&R==_||(w[S]=R,T=!1)}this.g=w}var l={};function u(P){return-128<=P&&128>P?i(P,function(_){return new a([_|0],0>_?-1:0)}):new a([P|0],0>P?-1:0)}function h(P){if(isNaN(P)||!isFinite(P))return y;if(0>P)return v(h(-P));for(var _=[],w=1,T=0;P>=w;T++)_[T]=P/w|0,w*=4294967296;return new a(_,0)}function m(P,_){if(P.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P.charAt(0)=="-")return v(m(P.substring(1),_));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),T=y,S=0;S<P.length;S+=8){var R=Math.min(8,P.length-S),E=parseInt(P.substring(S,S+R),_);8>R?(R=h(Math.pow(_,R)),T=T.j(R).add(h(E))):(T=T.j(w),T=T.add(h(E)))}return T}var y=u(0),g=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(b(this))return-v(this).m();for(var P=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);P+=(0<=T?T:4294967296+T)*_,_*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(A(this))return"0";if(b(this))return"-"+v(this).toString(P);for(var _=h(Math.pow(P,6)),w=this,T="";;){var S=F(w,_).g;w=j(w,S.j(_));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(P);if(w=S,A(w))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function A(P){if(P.h!=0)return!1;for(var _=0;_<P.g.length;_++)if(P.g[_]!=0)return!1;return!0}function b(P){return P.h==-1}n.l=function(P){return P=j(this,P),b(P)?-1:A(P)?0:1};function v(P){for(var _=P.g.length,w=[],T=0;T<_;T++)w[T]=~P.g[T];return new a(w,~P.h).add(g)}n.abs=function(){return b(this)?v(this):this},n.add=function(P){for(var _=Math.max(this.g.length,P.g.length),w=[],T=0,S=0;S<=_;S++){var R=T+(this.i(S)&65535)+(P.i(S)&65535),E=(R>>>16)+(this.i(S)>>>16)+(P.i(S)>>>16);T=E>>>16,R&=65535,E&=65535,w[S]=E<<16|R}return new a(w,w[w.length-1]&-2147483648?-1:0)};function j(P,_){return P.add(v(_))}n.j=function(P){if(A(this)||A(P))return y;if(b(this))return b(P)?v(this).j(v(P)):v(v(this).j(P));if(b(P))return v(this.j(v(P)));if(0>this.l(x)&&0>P.l(x))return h(this.m()*P.m());for(var _=this.g.length+P.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<P.g.length;S++){var R=this.i(T)>>>16,E=this.i(T)&65535,De=P.i(S)>>>16,Oe=P.i(S)&65535;w[2*T+2*S]+=E*Oe,I(w,2*T+2*S),w[2*T+2*S+1]+=R*Oe,I(w,2*T+2*S+1),w[2*T+2*S+1]+=E*De,I(w,2*T+2*S+1),w[2*T+2*S+2]+=R*De,I(w,2*T+2*S+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new a(w,0)};function I(P,_){for(;(P[_]&65535)!=P[_];)P[_+1]+=P[_]>>>16,P[_]&=65535,_++}function V(P,_){this.g=P,this.h=_}function F(P,_){if(A(_))throw Error("division by zero");if(A(P))return new V(y,y);if(b(P))return _=F(v(P),_),new V(v(_.g),v(_.h));if(b(_))return _=F(P,v(_)),new V(v(_.g),_.h);if(30<P.g.length){if(b(P)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,T=_;0>=T.l(P);)w=B(w),T=B(T);var S=W(w,1),R=W(T,1);for(T=W(T,2),w=W(w,2);!A(T);){var E=R.add(T);0>=E.l(P)&&(S=S.add(w),R=E),T=W(T,1),w=W(w,1)}return _=j(P,S.j(_)),new V(S,_)}for(S=y;0<=P.l(_);){for(w=Math.max(1,Math.floor(P.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(w),E=R.j(_);b(E)||0<E.l(P);)w-=T,R=h(w),E=R.j(_);A(R)&&(R=g),S=S.add(R),P=j(P,E)}return new V(S,P)}n.A=function(P){return F(this,P).h},n.and=function(P){for(var _=Math.max(this.g.length,P.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&P.i(T);return new a(w,this.h&P.h)},n.or=function(P){for(var _=Math.max(this.g.length,P.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|P.i(T);return new a(w,this.h|P.h)},n.xor=function(P){for(var _=Math.max(this.g.length,P.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^P.i(T);return new a(w,this.h^P.h)};function B(P){for(var _=P.g.length+1,w=[],T=0;T<_;T++)w[T]=P.i(T)<<1|P.i(T-1)>>>31;return new a(w,P.h)}function W(P,_){var w=_>>5;_%=32;for(var T=P.g.length-w,S=[],R=0;R<T;R++)S[R]=0<_?P.i(R+w)>>>_|P.i(R+w+1)<<32-_:P.i(R+w);return new a(S,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Zn=a}).apply(typeof md<"u"?md:typeof self<"u"?self:typeof window<"u"?window:{});var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kf,Es,Qf,zi,Za,Yf,Xf,Jf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,f){return o==Array.prototype||o==Object.prototype||(o[d]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oi=="object"&&Oi];for(var d=0;d<o.length;++d){var f=o[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,d){if(d)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var N=o[p];if(!(N in f))break e;f=f[N]}o=o[o.length-1],p=f[o],d=d(p),d!=p&&d!=null&&e(f,o,{configurable:!0,writable:!0,value:d})}}function i(o,d){o instanceof String&&(o+="");var f=0,p=!1,N={next:function(){if(!p&&f<o.length){var C=f++;return{value:d(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(o){return o||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function h(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function m(o,d,f){return o.call.apply(o.bind,arguments)}function y(o,d,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,p),o.apply(d,N)}}return function(){return o.apply(d,arguments)}}function g(o,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function x(o,d){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,d){function f(){}f.prototype=d.prototype,o.aa=d.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,N,C){for(var L=Array(arguments.length-2),he=2;he<arguments.length;he++)L[he-2]=arguments[he];return d.prototype[N].apply(p,L)}}function b(o){const d=o.length;if(0<d){const f=Array(d);for(let p=0;p<d;p++)f[p]=o[p];return f}return[]}function v(o,d){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const N=o.length||0,C=p.length||0;o.length=N+C;for(let L=0;L<C;L++)o[N+L]=p[L]}else o.push(p)}}class j{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function I(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var B=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function W(o,d,f){for(const p in o)d.call(f,o[p],p,o)}function P(o,d){for(const f in o)d.call(void 0,o[f],f,o)}function _(o){const d={};for(const f in o)d[f]=o[f];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,d){let f,p;for(let N=1;N<arguments.length;N++){p=arguments[N];for(f in p)o[f]=p[f];for(let C=0;C<w.length;C++)f=w[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function S(o){var d=1;o=o.split(":");const f=[];for(;0<d&&o.length;)f.push(o.shift()),d--;return o.length&&f.push(o.join(":")),f}function R(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Wt;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class De{constructor(){this.h=this.g=null}add(d,f){const p=Oe.get();p.set(d,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Oe=new j(()=>new G,o=>o.reset());class G{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ee=!1,Wt=new De,mr=()=>{const o=l.Promise.resolve(void 0);le=()=>{o.then(es)}};var es=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){R(f)}var d=Oe;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}ee=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Ht=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,d),l.removeEventListener("test",f,d)}catch{}return o}();function St(o,d){if(te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(B){e:{try{F(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else f=="mouseover"?d=o.fromElement:f=="mouseout"&&(d=o.toElement);this.relatedTarget=d,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&St.aa.h.call(this)}}A(St,te);var $={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),zt=0;function ct(o,d,f,p,N){this.listener=o,this.proxy=null,this.src=d,this.type=f,this.capture=!!p,this.ha=N,this.key=++zt,this.da=this.fa=!1}function gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function pr(o){this.src=o,this.g={},this.h=0}pr.prototype.add=function(o,d,f,p,N){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=Rt(o,d,p,N);return-1<L?(d=o[L],f||(d.fa=!1)):(d=new ct(d,this.src,C,!!p,N),d.fa=f,o.push(d)),d};function ts(o,d){var f=d.type;if(f in o.g){var p=o.g[f],N=Array.prototype.indexOf.call(p,d,void 0),C;(C=0<=N)&&Array.prototype.splice.call(p,N,1),C&&(gr(d),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Rt(o,d,f,p){for(var N=0;N<o.length;++N){var C=o[N];if(!C.da&&C.listener==d&&C.capture==!!f&&C.ha==p)return N}return-1}var ea="closure_lm_"+(1e6*Math.random()|0),ta={};function Rl(o,d,f,p,N){if(Array.isArray(d)){for(var C=0;C<d.length;C++)Rl(o,d[C],f,p,N);return null}return f=kl(f),o&&o[Z]?o.K(d,f,h(p)?!!p.capture:!1,N):yp(o,d,f,!1,p,N)}function yp(o,d,f,p,N,C){if(!d)throw Error("Invalid event type");var L=h(N)?!!N.capture:!!N,he=ra(o);if(he||(o[ea]=he=new pr(o)),f=he.add(d,f,p,L,C),f.proxy)return f;if(p=_p(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)Ht||(N=L),N===void 0&&(N=!1),o.addEventListener(d.toString(),p,N);else if(o.attachEvent)o.attachEvent(Cl(d.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function _p(){function o(f){return d.call(o.src,o.listener,f)}const d=vp;return o}function Nl(o,d,f,p,N){if(Array.isArray(d))for(var C=0;C<d.length;C++)Nl(o,d[C],f,p,N);else p=h(p)?!!p.capture:!!p,f=kl(f),o&&o[Z]?(o=o.i,d=String(d).toString(),d in o.g&&(C=o.g[d],f=Rt(C,f,p,N),-1<f&&(gr(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[d],o.h--)))):o&&(o=ra(o))&&(d=o.g[d.toString()],o=-1,d&&(o=Rt(d,f,p,N)),(f=-1<o?d[o]:null)&&na(f))}function na(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Z])ts(d.i,o);else{var f=o.type,p=o.proxy;d.removeEventListener?d.removeEventListener(f,p,o.capture):d.detachEvent?d.detachEvent(Cl(f),p):d.addListener&&d.removeListener&&d.removeListener(p),(f=ra(d))?(ts(f,o),f.h==0&&(f.src=null,d[ea]=null)):gr(o)}}}function Cl(o){return o in ta?ta[o]:ta[o]="on"+o}function vp(o,d){if(o.da)o=!0;else{d=new St(d,this);var f=o.listener,p=o.ha||o.src;o.fa&&na(o),o=f.call(p,d)}return o}function ra(o){return o=o[ea],o instanceof pr?o:null}var sa="__closure_events_fn_"+(1e9*Math.random()>>>0);function kl(o){return typeof o=="function"?o:(o[sa]||(o[sa]=function(d){return o.handleEvent(d)}),o[sa])}function Be(){ye.call(this),this.i=new pr(this),this.M=this,this.F=null}A(Be,ye),Be.prototype[Z]=!0,Be.prototype.removeEventListener=function(o,d,f,p){Nl(this,o,d,f,p)};function Xe(o,d){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=d.type||d,typeof d=="string")d=new te(d,o);else if(d instanceof te)d.target=d.target||o;else{var N=d;d=new te(p,o),T(d,N)}if(N=!0,f)for(var C=f.length-1;0<=C;C--){var L=d.g=f[C];N=pi(L,p,!0,d)&&N}if(L=d.g=o,N=pi(L,p,!0,d)&&N,N=pi(L,p,!1,d)&&N,f)for(C=0;C<f.length;C++)L=d.g=f[C],N=pi(L,p,!1,d)&&N}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var f=o.g[d],p=0;p<f.length;p++)gr(f[p]);delete o.g[d],o.h--}}this.F=null},Be.prototype.K=function(o,d,f,p){return this.i.add(String(o),d,!1,f,p)},Be.prototype.L=function(o,d,f,p){return this.i.add(String(o),d,!0,f,p)};function pi(o,d,f,p){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,C=0;C<d.length;++C){var L=d[C];if(L&&!L.da&&L.capture==f){var he=L.listener,Ve=L.ha||L.src;L.fa&&ts(o.i,L),N=he.call(Ve,p)!==!1&&N}}return N&&!p.defaultPrevented}function jl(o,d,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(o,d||0)}function Dl(o){o.g=jl(()=>{o.g=null,o.i&&(o.i=!1,Dl(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class wp extends ye{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Dl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(o){ye.call(this),this.h=o,this.g={}}A(ns,ye);var Ol=[];function Vl(o){W(o.g,function(d,f){this.g.hasOwnProperty(f)&&na(d)},o),o.g={}}ns.prototype.N=function(){ns.aa.N.call(this),Vl(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ia=l.JSON.stringify,xp=l.JSON.parse,bp=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function oa(){}oa.prototype.h=null;function Ml(o){return o.h||(o.h=o.i())}function Ll(){}var rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function aa(){te.call(this,"d")}A(aa,te);function ca(){te.call(this,"c")}A(ca,te);var Ln={},Fl=null;function yi(){return Fl=Fl||new Be}Ln.La="serverreachability";function Ul(o){te.call(this,Ln.La,o)}A(Ul,te);function ss(o){const d=yi();Xe(d,new Ul(d))}Ln.STAT_EVENT="statevent";function Bl(o,d){te.call(this,Ln.STAT_EVENT,o),this.stat=d}A(Bl,te);function Je(o){const d=yi();Xe(d,new Bl(d,o))}Ln.Ma="timingevent";function $l(o,d){te.call(this,Ln.Ma,o),this.size=d}A($l,te);function is(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},d)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function Ep(o,d,f,p,N,C){o.info(function(){if(o.g)if(C)for(var L="",he=C.split("&"),Ve=0;Ve<he.length;Ve++){var oe=he[Ve].split("=");if(1<oe.length){var $e=oe[0];oe=oe[1];var qe=$e.split("_");L=2<=qe.length&&qe[1]=="type"?L+($e+"="+oe+"&"):L+($e+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+p+") [attempt "+N+"]: "+d+`
`+f+`
`+L})}function Tp(o,d,f,p,N,C,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+N+"]: "+d+`
`+f+`
`+C+" "+L})}function yr(o,d,f,p){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ap(o,f)+(p?" "+p:"")})}function Ip(o,d){o.info(function(){return"TIMEOUT: "+d})}os.prototype.info=function(){};function Ap(o,d){if(!o.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var N=p[1];if(Array.isArray(N)&&!(1>N.length)){var C=N[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<N.length;L++)N[L]=""}}}}return ia(f)}catch{return d}}var _i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},la;function vi(){}A(vi,oa),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},la=new vi;function un(o,d,f,p){this.j=o,this.i=d,this.l=f,this.R=p||1,this.U=new ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var Hl={},ua={};function da(o,d,f){o.L=1,o.v=Ei(Gt(d)),o.m=f,o.P=!0,zl(o,null)}function zl(o,d){o.F=Date.now(),wi(o),o.A=Gt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ou(f.i,"t",p),o.C=0,f=o.j.J,o.h=new Wl,o.g=Tu(o.j,f?d:null,!o.m),0<o.O&&(o.M=new wp(g(o.Y,o,o.g),o.O)),d=o.U,f=o.g,p=o.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ol[0]=N.toString()),N=Ol);for(var C=0;C<N.length;C++){var L=Rl(f,N[C],p||d.handleEvent,!1,d.h||d);if(!L)break;d.g[L.key]=L}d=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),ss(),Ep(o.i,o.u,o.A,o.l,o.R,o.m)}un.prototype.ca=function(o){o=o.target;const d=this.M;d&&Kt(o)==3?d.j():this.Y(o)},un.prototype.Y=function(o){try{if(o==this.g)e:{const qe=Kt(this.g);var d=this.g.Ba();const wr=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||fu(this.g)))){this.J||qe!=4||d==7||(d==8||0>=wr?ss(3):ss(2)),ha(this);var f=this.g.Z();this.X=f;t:if(Gl(this)){var p=fu(this.g);o="";var N=p.length,C=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),as(this);var L="";break t}this.h.i=new l.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,o+=this.h.i.decode(p[d],{stream:!(C&&d==N-1)});p.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=f==200,Tp(this.i,this.u,this.A,this.l,this.R,qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Ve=this.g;if((he=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(he)){var oe=he;break t}}oe=null}if(f=oe)yr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fa(this,f);else{this.o=!1,this.s=3,Je(12),Fn(this),as(this);break e}}if(this.P){f=!0;let _t;for(;!this.J&&this.C<L.length;)if(_t=Pp(this,L),_t==ua){qe==4&&(this.s=4,Je(14),f=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Hl){this.s=4,Je(15),yr(this.i,this.l,L,"[Invalid Chunk]"),f=!1;break}else yr(this.i,this.l,_t,null),fa(this,_t);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||L.length!=0||this.h.h||(this.s=1,Je(16),f=!1),this.o=this.o&&f,!f)yr(this.i,this.l,L,"[Invalid Chunked Response]"),Fn(this),as(this);else if(0<L.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),va($e),$e.M=!0,Je(11))}}else yr(this.i,this.l,L,null),fa(this,L);qe==4&&Fn(this),this.o&&!this.J&&(qe==4?wu(this.j,this):(this.o=!1,wi(this)))}else Wp(this.g),f==400&&0<L.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),Fn(this),as(this)}}}catch{}finally{}};function Gl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Pp(o,d){var f=o.C,p=d.indexOf(`
`,f);return p==-1?ua:(f=Number(d.substring(f,p)),isNaN(f)?Hl:(p+=1,p+f>d.length?ua:(d=d.slice(p,p+f),o.C=p+f,d)))}un.prototype.cancel=function(){this.J=!0,Fn(this)};function wi(o){o.S=Date.now()+o.I,Kl(o,o.I)}function Kl(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=is(g(o.ba,o),d)}function ha(o){o.B&&(l.clearTimeout(o.B),o.B=null)}un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ip(this.i,this.A),this.L!=2&&(ss(),Je(17)),Fn(this),this.s=2,as(this)):Kl(this,this.S-o)};function as(o){o.j.G==0||o.J||wu(o.j,o)}function Fn(o){ha(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Vl(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function fa(o,d){try{var f=o.j;if(f.G!=0&&(f.g==o||ma(f.h,o))){if(!o.K&&ma(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(d)}catch{p=null}if(Array.isArray(p)&&p.length==3){var N=p;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ri(f),Pi(f);else break e;_a(f),Je(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=is(g(f.Za,f),6e3));if(1>=Xl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Bn(f,11)}else if((o.K||f.g==o)&&Ri(f),!I(d))for(N=f.Da.g.parse(d),d=0;d<N.length;d++){let oe=N[d];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const $e=oe[3];$e!=null&&(f.la=$e,f.j.info("VER="+f.la));const qe=oe[4];qe!=null&&(f.Aa=qe,f.j.info("SVER="+f.Aa));const wr=oe[5];wr!=null&&typeof wr=="number"&&0<wr&&(p=1.5*wr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const _t=o.g;if(_t){const Ci=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ci){var C=p.h;C.g||Ci.indexOf("spdy")==-1&&Ci.indexOf("quic")==-1&&Ci.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ga(C,C.h),C.h=null))}if(p.D){const wa=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;wa&&(p.ya=wa,ge(p.I,p.D,wa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var L=o;if(p.qa=Eu(p,p.J?p.ia:null,p.W),L.K){Jl(p.h,L);var he=L,Ve=p.L;Ve&&(he.I=Ve),he.B&&(ha(he),wi(he)),p.g=L}else _u(p);0<f.i.length&&Si(f)}else oe[0]!="stop"&&oe[0]!="close"||Bn(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Bn(f,7):ya(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}ss(4)}catch{}}var Sp=class{constructor(o,d){this.g=o,this.map=d}};function Ql(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xl(o){return o.h?1:o.g?o.g.size:0}function ma(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function ga(o,d){o.g?o.g.add(d):o.h=d}function Jl(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}Ql.prototype.cancel=function(){if(this.i=Zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Zl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const f of o.g.values())d=d.concat(f.D);return d}return b(o.i)}function Rp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var d=[],f=o.length,p=0;p<f;p++)d.push(o[p]);return d}d=[],f=0;for(p in o)d[f++]=o[p];return d}function Np(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var d=[];o=o.length;for(var f=0;f<o;f++)d.push(f);return d}d=[],f=0;for(const p in o)d[f++]=p;return d}}}function eu(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var f=Np(o),p=Rp(o),N=p.length,C=0;C<N;C++)d.call(void 0,p[C],f&&f[C],o)}var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cp(o,d){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),N=null;if(0<=p){var C=o[f].substring(0,p);N=o[f].substring(p+1)}else C=o[f];d(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Un){this.h=o.h,xi(this,o.j),this.o=o.o,this.g=o.g,bi(this,o.s),this.l=o.l;var d=o.i,f=new us;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),nu(this,f),this.m=o.m}else o&&(d=String(o).match(tu))?(this.h=!1,xi(this,d[1]||"",!0),this.o=cs(d[2]||""),this.g=cs(d[3]||"",!0),bi(this,d[4]),this.l=cs(d[5]||"",!0),nu(this,d[6]||"",!0),this.m=cs(d[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Un.prototype.toString=function(){var o=[],d=this.j;d&&o.push(ls(d,ru,!0),":");var f=this.g;return(f||d=="file")&&(o.push("//"),(d=this.o)&&o.push(ls(d,ru,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ls(f,f.charAt(0)=="/"?Dp:jp,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ls(f,Vp)),o.join("")};function Gt(o){return new Un(o)}function xi(o,d,f){o.j=f?cs(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function bi(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function nu(o,d,f){d instanceof us?(o.i=d,Mp(o.i,o.h)):(f||(d=ls(d,Op)),o.i=new us(d,o.h))}function ge(o,d,f){o.i.set(d,f)}function Ei(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function cs(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ls(o,d,f){return typeof o=="string"?(o=encodeURI(o).replace(d,kp),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function kp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ru=/[#\/\?@]/g,jp=/[#\?:]/g,Dp=/[#\?]/g,Op=/[#\?@]/g,Vp=/#/g;function us(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&Cp(o.i,function(d,f){o.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=us.prototype,n.add=function(o,d){dn(this),this.i=null,o=_r(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(d),this.h+=1,this};function su(o,d){dn(o),d=_r(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function iu(o,d){return dn(o),d=_r(o,d),o.g.has(d)}n.forEach=function(o,d){dn(this),this.g.forEach(function(f,p){f.forEach(function(N){o.call(d,N,p,this)},this)},this)},n.na=function(){dn(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let p=0;p<d.length;p++){const N=o[p];for(let C=0;C<N.length;C++)f.push(d[p])}return f},n.V=function(o){dn(this);let d=[];if(typeof o=="string")iu(this,o)&&(d=d.concat(this.g.get(_r(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)d=d.concat(o[f])}return d},n.set=function(o,d){return dn(this),this.i=null,o=_r(this,o),iu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function ou(o,d,f){su(o,d),0<f.length&&(o.i=null,o.g.set(_r(o,d),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var p=d[f];const C=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var N=C;L[p]!==""&&(N+="="+encodeURIComponent(String(L[p]))),o.push(N)}}return this.i=o.join("&")};function _r(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Mp(o,d){d&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(f,p){var N=p.toLowerCase();p!=N&&(su(this,p),ou(this,N,f))},o)),o.j=d}function Lp(o,d){const f=new os;if(l.Image){const p=new Image;p.onload=x(hn,f,"TestLoadImage: loaded",!0,d,p),p.onerror=x(hn,f,"TestLoadImage: error",!1,d,p),p.onabort=x(hn,f,"TestLoadImage: abort",!1,d,p),p.ontimeout=x(hn,f,"TestLoadImage: timeout",!1,d,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else d(!1)}function Fp(o,d){const f=new os,p=new AbortController,N=setTimeout(()=>{p.abort(),hn(f,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(N),C.ok?hn(f,"TestPingServer: ok",!0,d):hn(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),hn(f,"TestPingServer: error",!1,d)})}function hn(o,d,f,p,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),p(f)}catch{}}function Up(){this.g=new bp}function Bp(o,d,f){const p=f||"";try{eu(o,function(N,C){let L=N;h(N)&&(L=ia(N)),d.push(p+C+"="+encodeURIComponent(L))})}catch(N){throw d.push(p+"type="+encodeURIComponent("_badmap")),N}}function Ti(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Ti,oa),Ti.prototype.g=function(){return new Ii(this.l,this.j)},Ti.prototype.i=function(o){return function(){return o}}({});function Ii(o,d){Be.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ii,Be),n=Ii.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,hs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;au(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function au(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?ds(this):hs(this),this.readyState==3&&au(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ds(this))},n.Qa=function(o){this.g&&(this.response=o,ds(this))},n.ga=function(){this.g&&ds(this)};function ds(o){o.readyState=4,o.l=null,o.j=null,o.v=null,hs(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=d.next();return o.join(`\r
`)};function hs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cu(o){let d="";return W(o,function(f,p){d+=p,d+=":",d+=f,d+=`\r
`}),d}function pa(o,d,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=cu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ge(o,d,f))}function ve(o){Be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ve,Be);var $p=/^https?$/i,qp=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():la.g(),this.v=this.o?Ml(this.o):Ml(la),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(C){lu(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var N in p)f.set(N,p[N]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),N=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qp,d,void 0))||p||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of f)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){lu(this,C)}};function lu(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,uu(o),Ai(o)}function uu(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?du(this):this.bb())},n.bb=function(){du(this)};function du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Kt(o)!=4||o.Z()!=2)){if(o.u&&Kt(o)==4)jl(o.Ea,0,o);else if(Xe(o,"readystatechange"),Kt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var p;if(p=L===0){var N=String(o.D).match(tu)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),p=!$p.test(N?N.toLowerCase():"")}f=p}if(f)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var C=2<Kt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",uu(o)}}finally{Ai(o)}}}}function Ai(o,d){if(o.g){hu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||Xe(o,"ready");try{f.onreadystatechange=p}catch{}}}function hu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Kt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),xp(d)}};function fu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wp(o){const d={};o=(o.g&&2<=Kt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(I(o[p]))continue;var f=S(o[p]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=d[N]||[];d[N]=C,C.push(f)}P(d,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fs(o,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||d}function mu(o){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fs("baseRetryDelayMs",5e3,o),this.cb=fs("retryDelaySeedMs",1e4,o),this.Wa=fs("forwardChannelMaxRetries",2,o),this.wa=fs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ql(o&&o.concurrentRequestLimit),this.Da=new Up,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=mu.prototype,n.la=8,n.G=1,n.connect=function(o,d,f,p){Je(0),this.W=o,this.H=d||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Eu(this,null,this.W),Si(this)};function ya(o){if(gu(o),o.G==3){var d=o.U++,f=Gt(o.I);if(ge(f,"SID",o.K),ge(f,"RID",d),ge(f,"TYPE","terminate"),ms(o,f),d=new un(o,o.j,d),d.L=2,d.v=Ei(Gt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=d.v,f=!0),f||(d.g=Tu(d.j,null),d.g.ea(d.v)),d.F=Date.now(),wi(d)}bu(o)}function Pi(o){o.g&&(va(o),o.g.cancel(),o.g=null)}function gu(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Si(o){if(!Yl(o.h)&&!o.s){o.s=!0;var d=o.Ga;le||mr(),ee||(le(),ee=!0),Wt.add(d,o),o.B=0}}function Hp(o,d){return Xl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=is(g(o.Ga,o,d),xu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const N=new un(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(N.H=C,C=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(d+=p,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=yu(this,N,d),f=Gt(this.I),ge(f,"RID",o),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),ms(this,f),C&&(this.O?d="headers="+encodeURIComponent(String(cu(C)))+"&"+d:this.m&&pa(f,this.m,C)),ga(this.h,N),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",d),ge(f,"SID","null"),N.T=!0,da(N,f,null)):da(N,f,d),this.G=2}}else this.G==3&&(o?pu(this,o):this.i.length==0||Yl(this.h)||pu(this))};function pu(o,d){var f;d?f=d.l:f=o.U++;const p=Gt(o.I);ge(p,"SID",o.K),ge(p,"RID",f),ge(p,"AID",o.T),ms(o,p),o.m&&o.o&&pa(p,o.m,o.o),f=new un(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),d&&(o.i=d.D.concat(o.i)),d=yu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ga(o.h,f),da(f,p,d)}function ms(o,d){o.H&&W(o.H,function(f,p){ge(d,p,f)}),o.l&&eu({},function(f,p){ge(d,p,f)})}function yu(o,d,f){f=Math.min(o.i.length,f);var p=o.l?g(o.l.Na,o.l,o):null;e:{var N=o.i;let C=-1;for(;;){const L=["count="+f];C==-1?0<f?(C=N[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let he=!0;for(let Ve=0;Ve<f;Ve++){let oe=N[Ve].g;const $e=N[Ve].map;if(oe-=C,0>oe)C=Math.max(0,N[Ve].g-100),he=!1;else try{Bp($e,L,"req"+oe+"_")}catch{p&&p($e)}}if(he){p=L.join("&");break e}}}return o=o.i.splice(0,f),d.D=o,p}function _u(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;le||mr(),ee||(le(),ee=!0),Wt.add(d,o),o.v=0}}function _a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=is(g(o.Fa,o),xu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=is(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),Pi(this),vu(this))};function va(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function vu(o){o.g=new un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=Gt(o.qa);ge(d,"RID","rpc"),ge(d,"SID",o.K),ge(d,"AID",o.T),ge(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(d,"TO",o.ja),ge(d,"TYPE","xmlhttp"),ms(o,d),o.m&&o.o&&pa(d,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ei(Gt(d)),f.m=null,f.P=!0,zl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Pi(this),_a(this),Je(19))};function Ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function wu(o,d){var f=null;if(o.g==d){Ri(o),va(o),o.g=null;var p=2}else if(ma(o.h,d))f=d.D,Jl(o.h,d),p=1;else return;if(o.G!=0){if(d.o)if(p==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var N=o.B;p=yi(),Xe(p,new $l(p,f)),Si(o)}else _u(o);else if(N=d.s,N==3||N==0&&0<d.X||!(p==1&&Hp(o,d)||p==2&&_a(o)))switch(f&&0<f.length&&(d=o.h,d.i=d.i.concat(f)),N){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function xu(o,d){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*d}function Bn(o,d){if(o.j.info("Error code "+d),d==2){var f=g(o.fb,o),p=o.Xa;const N=!p;p=new Un(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xi(p,"https"),Ei(p),N?Lp(p.toString(),f):Fp(p.toString(),f)}else Je(2);o.G=0,o.l&&o.l.sa(d),bu(o),gu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function bu(o){if(o.G=0,o.ka=[],o.l){const d=Zl(o.h);(d.length!=0||o.i.length!=0)&&(v(o.ka,d),v(o.ka,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.ra()}}function Eu(o,d,f){var p=f instanceof Un?Gt(f):new Un(f);if(p.g!="")d&&(p.g=d+"."+p.g),bi(p,p.s);else{var N=l.location;p=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var C=new Un(null);p&&xi(C,p),d&&(C.g=d),N&&bi(C,N),f&&(C.l=f),p=C}return f=o.D,d=o.ya,f&&d&&ge(p,f,d),ge(p,"VER",o.la),ms(o,p),p}function Tu(o,d,f){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new ve(new Ti({eb:f})):new ve(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}n=Iu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ni(){}Ni.prototype.g=function(o,d){return new lt(o,d)};function lt(o,d){Be.call(this),this.g=new mu(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!I(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new vr(this)}A(lt,Be),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){ya(this.g)},lt.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=ia(o),o=f);d.i.push(new Sp(d.Ya++,o)),d.G==3&&Si(d)},lt.prototype.N=function(){this.g.l=null,delete this.j,ya(this.g),delete this.g,lt.aa.N.call(this)};function Au(o){aa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const f in d){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}A(Au,aa);function Pu(){ca.call(this),this.status=1}A(Pu,ca);function vr(o){this.g=o}A(vr,Iu),vr.prototype.ua=function(){Xe(this.g,"a")},vr.prototype.ta=function(o){Xe(this.g,new Au(o))},vr.prototype.sa=function(o){Xe(this.g,new Pu)},vr.prototype.ra=function(){Xe(this.g,"b")},Ni.prototype.createWebChannel=Ni.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Jf=function(){return new Ni},Xf=function(){return yi()},Yf=Ln,Za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,zi=_i,ql.COMPLETE="complete",Qf=ql,Ll.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Be.prototype.listen=Be.prototype.K,Es=Ll,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,Kf=ve}).apply(typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{});const gd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Io("@firebase/firestore");function ps(){return rr.logLevel}function q(n,...e){if(rr.logLevel<=se.DEBUG){const t=e.map(Cc);rr.debug(`Firestore (${Yr}): ${n}`,...t)}}function sn(n,...e){if(rr.logLevel<=se.ERROR){const t=e.map(Cc);rr.error(`Firestore (${Yr}): ${n}`,...t)}}function Br(n,...e){if(rr.logLevel<=se.WARN){const t=e.map(Cc);rr.warn(`Firestore (${Yr}): ${n}`,...t)}}function Cc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+n;throw sn(e),new Error(e)}function de(n,e){n||K()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Aw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ge.UNAUTHENTICATED))}shutdown(){}}class Pw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sw{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new Zf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Ge(e)}}class Rw{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Rw(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){de(this.o===void 0);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new Cw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=jw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function $r(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new fe(0,0))}static max(){return new Q(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pe extends Us{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const Dw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Us{construct(e,t,r){return new Le(e,t,r)}static isValidIdentifier(e){return Dw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(pe.fromString(e))}static fromName(e){return new H(pe.fromString(e).popFirst(5))}static empty(){return new H(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new pe(e.slice()))}}function Ow(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Cn(s,H.empty(),e)}function Vw(n){return new Cn(n.readTime,n.key,-1)}class Cn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Cn(Q.min(),H.empty(),-1)}static max(){return new Cn(Q.max(),H.empty(),-1)}}function Mw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Lw)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(m=>{a[h]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Uw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function si(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kc.oe=-1;function No(n){return n==null}function ao(n){return n===0&&1/n==-1/0}function Bw(n){return typeof n=="number"&&Number.isInteger(n)&&!ao(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function dr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Me.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Me.RED,this.left=s??Me.EMPTY,this.right=i??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Fe(Le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $r(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nm("Invalid base64 string: "+i):i}}(e);return new Ue(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const $w=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(de(!!n),typeof n=="string"){let e=0;const t=$w.exec(n);if(de(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Dc(n){const e=n.mapValue.fields.__previous_value__;return jc(e)?Dc(e):e}function Bs(n){const e=kn(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t,r,s,i,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class $s{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={mapValue:{}};function ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jc(n)?4:Hw(n)?9007199254740991:Ww(n)?10:11:K()}function Ut(n,e){if(n===e)return!0;const t=ir(n);if(t!==ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bs(n).isEqual(Bs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=kn(s.timestampValue),l=kn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ie(s.geoPointValue.latitude)===Ie(i.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ie(s.integerValue)===Ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ie(s.doubleValue),l=Ie(i.doubleValue);return a===l?ao(a)===ao(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return $r(n.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(pd(a)!==pd(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ut(a[u],l[u])))return!1;return!0}(n,e);default:return K()}}function qs(n,e){return(n.values||[]).find(t=>Ut(t,e))!==void 0}function qr(n,e){if(n===e)return 0;const t=ir(n),r=ir(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ie(i.integerValue||i.doubleValue),u=Ie(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return _d(n.timestampValue,e.timestampValue);case 4:return _d(Bs(n),Bs(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(i,a){const l=sr(i),u=sr(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const m=ce(l[h],u[h]);if(m!==0)return m}return ce(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(Ie(i.latitude),Ie(a.latitude));return l!==0?l:ce(Ie(i.longitude),Ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return vd(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,h,m;const y=i.fields||{},g=a.fields||{},x=(l=y.value)===null||l===void 0?void 0:l.arrayValue,A=(u=g.value)===null||u===void 0?void 0:u.arrayValue,b=ce(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((m=A==null?void 0:A.values)===null||m===void 0?void 0:m.length)||0);return b!==0?b:vd(x,A)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Mi.mapValue&&a===Mi.mapValue)return 0;if(i===Mi.mapValue)return 1;if(a===Mi.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const g=ce(u[y],m[y]);if(g!==0)return g;const x=qr(l[u[y]],h[m[y]]);if(x!==0)return x}return ce(u.length,m.length)}(n.mapValue,e.mapValue);default:throw K()}}function _d(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=kn(n),r=kn(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function vd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=qr(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Wr(n){return ec(n)}function ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ec(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ec(t.fields[a])}`;return s+"}"}(n.mapValue):K()}function wd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tc(n){return!!n&&"integerValue"in n}function Oc(n){return!!n&&"arrayValue"in n}function xd(n){return!!n&&"nullValue"in n}function bd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gi(n){return!!n&&"mapValue"in n}function Ww(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Rs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return dr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Rs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Hw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=Le.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Rs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){dr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new st(Rs(this.value))}}function rm(n){const e=[];return dr(n.fields,(t,r)=>{const s=new Le([t]);if(Gi(r)){const i=rm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ke(e,0,Q.min(),Q.min(),Q.min(),st.empty(),0)}static newFoundDocument(e,t,r,s){return new Ke(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Ke(e,2,t,Q.min(),Q.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Ke(e,3,t,Q.min(),Q.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class co{constructor(e,t){this.position=e,this.inclusive=t}}function Ed(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=qr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ws{constructor(e,t="asc"){this.field=e,this.dir=t}}function zw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sm{}class Re extends sm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Kw(e,t,r):t==="array-contains"?new Xw(e,r):t==="in"?new Jw(e,r):t==="not-in"?new Zw(e,r):t==="array-contains-any"?new ex(e,r):new Re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Qw(e,r):new Yw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qr(t,this.value)):t!==null&&ir(this.value)===ir(t)&&this.matchesComparison(qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tt extends sm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tt(e,t)}matches(e){return im(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function im(n){return n.op==="and"}function om(n){return Gw(n)&&im(n)}function Gw(n){for(const e of n.filters)if(e instanceof Tt)return!1;return!0}function nc(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(om(n))return n.filters.map(e=>nc(e)).join(",");{const e=n.filters.map(t=>nc(t)).join(",");return`${n.op}(${e})`}}function am(n,e){return n instanceof Re?function(r,s){return s instanceof Re&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)}(n,e):n instanceof Tt?function(r,s){return s instanceof Tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&am(a,s.filters[l]),!0):!1}(n,e):void K()}function cm(n){return n instanceof Re?function(t){return`${t.field.canonicalString()} ${t.op} ${Wr(t.value)}`}(n):n instanceof Tt?function(t){return t.op.toString()+" {"+t.getFilters().map(cm).join(" ,")+"}"}(n):"Filter"}class Kw extends Re{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qw extends Re{constructor(e,t){super(e,"in",t),this.keys=lm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Yw extends Re{constructor(e,t){super(e,"not-in",t),this.keys=lm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class Xw extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oc(t)&&qs(t.arrayValue,this.value)}}class Jw extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class Zw extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qs(this.value.arrayValue,t)}}class ex extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class tx{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Id(n,e=null,t=[],r=[],s=null,i=null,a=null){return new tx(n,e,t,r,s,i,a)}function Vc(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>nc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wr(r)).join(",")),e.ue=t}return e.ue}function Mc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!am(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Td(n.startAt,e.startAt)&&Td(n.endAt,e.endAt)}function rc(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nx(n,e,t,r,s,i,a,l){return new Xr(n,e,t,r,s,i,a,l)}function Lc(n){return new Xr(n)}function Ad(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function um(n){return n.collectionGroup!==null}function Ns(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Fe(Le.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ws(i,r))}),t.has(Le.keyField().canonicalString())||e.ce.push(new Ws(Le.keyField(),r))}return e.ce}function Lt(n){const e=Y(n);return e.le||(e.le=rx(e,Ns(n))),e.le}function rx(n,e){if(n.limitType==="F")return Id(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ws(s.field,i)});const t=n.endAt?new co(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new co(n.startAt.position,n.startAt.inclusive):null;return Id(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function sc(n,e){const t=n.filters.concat([e]);return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lo(n,e,t){return new Xr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Co(n,e){return Mc(Lt(n),Lt(e))&&n.limitType===e.limitType}function dm(n){return`${Vc(Lt(n))}|lt:${n.limitType}`}function Er(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>cm(s)).join(", ")}]`),No(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Wr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(Lt(n))}; limitType=${n.limitType})`}function ko(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=Ed(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ns(r),s)||r.endAt&&!function(a,l,u){const h=Ed(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ns(r),s))}(n,e)}function sx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hm(n){return(e,t)=>{let r=!1;for(const s of Ns(n)){const i=ix(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ix(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qr(u,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new _e(H.comparator);function on(){return ox}const fm=new _e(H.comparator);function Ts(...n){let e=fm;for(const t of n)e=e.insert(t.key,t);return e}function mm(n){let e=fm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Hn(){return Cs()}function gm(){return Cs()}function Cs(){return new Jr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ax=new _e(H.comparator),cx=new Fe(H.comparator);function ne(...n){let e=cx;for(const t of n)e=e.add(t);return e}const lx=new Fe(ce);function ux(){return lx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ao(e)?"-0":e}}function pm(n){return{integerValue:""+n}}function dx(n,e){return Bw(e)?pm(e):Fc(n,e)}/**
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
 */class jo{constructor(){this._=void 0}}function hx(n,e,t){return n instanceof uo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&jc(i)&&(i=Dc(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Hs?_m(n,e):n instanceof zs?vm(n,e):function(s,i){const a=ym(s,i),l=Pd(a)+Pd(s.Pe);return tc(a)&&tc(s.Pe)?pm(l):Fc(s.serializer,l)}(n,e)}function fx(n,e,t){return n instanceof Hs?_m(n,e):n instanceof zs?vm(n,e):t}function ym(n,e){return n instanceof ho?function(r){return tc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class uo extends jo{}class Hs extends jo{constructor(e){super(),this.elements=e}}function _m(n,e){const t=wm(e);for(const r of n.elements)t.some(s=>Ut(s,r))||t.push(r);return{arrayValue:{values:t}}}class zs extends jo{constructor(e){super(),this.elements=e}}function vm(n,e){let t=wm(e);for(const r of n.elements)t=t.filter(s=>!Ut(s,r));return{arrayValue:{values:t}}}class ho extends jo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Pd(n){return Ie(n.integerValue||n.doubleValue)}function wm(n){return Oc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mx(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Hs&&s instanceof Hs||r instanceof zs&&s instanceof zs?$r(r.elements,s.elements,Ut):r instanceof ho&&s instanceof ho?Ut(r.Pe,s.Pe):r instanceof uo&&s instanceof uo}(n.transform,e.transform)}class gx{constructor(e,t){this.version=e,this.transformResults=t}}class ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ki(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Do{}function xm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uc(n.key,ot.none()):new ii(n.key,n.data,ot.none());{const t=n.data,r=st.empty();let s=new Fe(Le.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vn(n.key,r,new ut(s.toArray()),ot.none())}}function px(n,e,t){n instanceof ii?function(s,i,a){const l=s.value.clone(),u=Rd(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Vn?function(s,i,a){if(!Ki(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Rd(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(bm(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ks(n,e,t,r){return n instanceof ii?function(i,a,l,u){if(!Ki(i.precondition,a))return l;const h=i.value.clone(),m=Nd(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vn?function(i,a,l,u){if(!Ki(i.precondition,a))return l;const h=Nd(i.fieldTransforms,u,a),m=a.data;return m.setAll(bm(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,l){return Ki(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function yx(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ym(r.transform,s||null);i!=null&&(t===null&&(t=st.empty()),t.set(r.field,i))}return t||null}function Sd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$r(r,s,(i,a)=>mx(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ii extends Do{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vn extends Do{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Rd(n,e,t){const r=new Map;de(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,fx(a,l,t[s]))}return r}function Nd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,hx(i,a,e))}return r}class Uc extends Do{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _x extends Do{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&px(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ks(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ks(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=xm(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&$r(this.mutations,e.mutations,(t,r)=>Sd(t,r))&&$r(this.baseMutations,e.baseMutations,(t,r)=>Sd(t,r))}}class Bc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){de(e.mutations.length===r.length);let s=function(){return ax}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Bc(e,t,r,s)}}/**
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
 */class wx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ie;function bx(n){switch(n){default:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Em(n){if(n===void 0)return sn("GRPC error has no .code"),O.UNKNOWN;switch(n){case Ae.OK:return O.OK;case Ae.CANCELLED:return O.CANCELLED;case Ae.UNKNOWN:return O.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return O.INTERNAL;case Ae.UNAVAILABLE:return O.UNAVAILABLE;case Ae.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ae.NOT_FOUND:return O.NOT_FOUND;case Ae.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ae.ABORTED:return O.ABORTED;case Ae.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ae.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(ie=Ae||(Ae={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ex(){return new TextEncoder}/**
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
 */const Tx=new Zn([4294967295,4294967295],0);function Cd(n){const e=Ex().encode(n),t=new Gf;return t.update(e),new Uint8Array(t.digest())}function kd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zn([t,r],0),new Zn([s,i],0)]}class $c{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Is(`Invalid padding: ${t}`);if(r<0)throw new Is(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Is(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Is(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Zn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Zn.fromNumber(r)));return s.compare(Tx)===1&&(s=new Zn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Cd(e),[r,s]=kd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new $c(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Cd(e),[r,s]=kd(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oo(Q.min(),s,new _e(ce),on(),ne())}}class oi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new oi(r,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Tm{constructor(e,t){this.targetId=e,this.me=t}}class Im{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class jd{constructor(){this.fe=0,this.ge=Od(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),t=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K()}}),new oi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Od()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ix{constructor(e){this.Le=e,this.Be=new Map,this.ke=on(),this.qe=Dd(),this.Qe=new _e(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(rc(i))if(r===0){const a=new H(i.path);this.Ue(t,a,Ke.newNoDocument(a,Q.min()))}else de(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=sr(r).toUint8Array()}catch(u){if(u instanceof nm)return Br("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $c(a,s,i)}catch(u){return Br(u instanceof Is?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&rc(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ke.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Oo(e,t,this.Qe,this.ke,r);return this.ke=on(),this.qe=Dd(),this.Qe=new _e(ce),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new jd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Fe(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Dd(){return new _e(H.comparator)}function Od(){return new _e(H.comparator)}const Ax={asc:"ASCENDING",desc:"DESCENDING"},Px={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sx={and:"AND",or:"OR"};class Rx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ic(n,e){return n.useProto3Json||No(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nx(n,e){return fo(n,e.toTimestamp())}function Ft(n){return de(!!n),Q.fromTimestamp(function(t){const r=kn(t);return new fe(r.seconds,r.nanos)}(n))}function qc(n,e){return oc(n,e).canonicalString()}function oc(n,e){const t=function(s){return new pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pm(n){const e=pe.fromString(n);return de(km(e)),e}function ac(n,e){return qc(n.databaseId,e.path)}function Ca(n,e){const t=Pm(e);if(t.get(1)!==n.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Rm(t))}function Sm(n,e){return qc(n.databaseId,e)}function Cx(n){const e=Pm(n);return e.length===4?pe.emptyPath():Rm(e)}function cc(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rm(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Vd(n,e,t){return{name:ac(n,e),fields:t.value.mapValue.fields}}function kx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(de(m===void 0||typeof m=="string"),Ue.fromBase64String(m||"")):(de(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ue.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const m=h.code===void 0?O.UNKNOWN:Em(h.code);return new U(m,h.message||"")}(a);t=new Im(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ca(n,r.document.name),i=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):Q.min(),l=new st({mapValue:{fields:r.document.fields}}),u=Ke.newFoundDocument(s,i,a,l),h=r.targetIds||[],m=r.removedTargetIds||[];t=new Qi(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ca(n,r.document),i=r.readTime?Ft(r.readTime):Q.min(),a=Ke.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Qi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ca(n,r.document),i=r.removedTargetIds||[];t=new Qi([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new xx(s,i),l=r.targetId;t=new Tm(l,a)}}return t}function jx(n,e){let t;if(e instanceof ii)t={update:Vd(n,e.key,e.value)};else if(e instanceof Uc)t={delete:ac(n,e.key)};else if(e instanceof Vn)t={update:Vd(n,e.key,e.data),updateMask:$x(e.fieldMask)};else{if(!(e instanceof _x))return K();t={verify:ac(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof uo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ho)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Nx(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(n,e.precondition)),t}function Dx(n,e){return n&&n.length>0?(de(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Ft(s.updateTime):Ft(i);return a.isEqual(Q.min())&&(a=Ft(i)),new gx(a,s.transformResults||[])}(t,e))):[]}function Ox(n,e){return{documents:[Sm(n,e.path)]}}function Vx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Sm(n,s);const i=function(h){if(h.length!==0)return Cm(Tt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(m=>function(g){return{field:Tr(g.field),direction:Fx(g.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ic(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function Mx(n){let e=Cx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){de(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const g=Nm(y);return g instanceof Tt&&om(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(g=>function(A){return new Ws(Ir(A.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(y){let g;return g=typeof y=="object"?y.value:y,No(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(y){const g=!!y.before,x=y.values||[];return new co(x,g)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const g=!y.before,x=y.values||[];return new co(x,g)}(t.endAt)),nx(e,s,a,i,l,"F",u,h)}function Lx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ir(t.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ir(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ir(t.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ir(t.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Re.create(Ir(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Tt.create(t.compositeFilter.filters.map(r=>Nm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function Fx(n){return Ax[n]}function Ux(n){return Px[n]}function Bx(n){return Sx[n]}function Tr(n){return{fieldPath:n.canonicalString()}}function Ir(n){return Le.fromServerFormat(n.fieldPath)}function Cm(n){return n instanceof Re?function(t){if(t.op==="=="){if(bd(t.value))return{unaryFilter:{field:Tr(t.field),op:"IS_NAN"}};if(xd(t.value))return{unaryFilter:{field:Tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bd(t.value))return{unaryFilter:{field:Tr(t.field),op:"IS_NOT_NAN"}};if(xd(t.value))return{unaryFilter:{field:Tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(t.field),op:Ux(t.op),value:t.value}}}(n):n instanceof Tt?function(t){const r=t.getFilters().map(s=>Cm(s));return r.length===1?r[0]:{compositeFilter:{op:Bx(t.op),filters:r}}}(n):K()}function $x(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function km(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,r,s,i=Q.min(),a=Q.min(),l=Ue.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.ct=e}}function Wx(n){const e=Mx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(e,e.limit,"L"):e}/**
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
 */class Hx{constructor(){this.un=new zx}addToCollectionParentIndex(e,t){return this.un.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Cn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class zx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Fe(pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hr(0)}static kn(){return new Hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.changes=new Jr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ks(r.mutation,s,ut.empty(),fe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=Hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ts();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=on();const a=Cs(),l=function(){return Cs()}();return t.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof Vn)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),ks(m.mutation,h,m.mutation.getFieldMask(),fe.now())):a.set(h.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>a.set(h,m)),t.forEach((h,m)=>{var y;return l.set(h,new Kx(m,(y=a.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Cs();let s=new _e((a,l)=>a-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let m=r.get(u)||ut.empty();m=l.applyToLocalView(h,m),r.set(u,m);const y=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,y=gm();m.forEach(g=>{if(!i.has(g)){const x=xm(t.get(g),r.get(g));x!==null&&y.set(g,x),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):um(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(Hn());let l=-1,u=i;return a.next(h=>M.forEach(h,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?M.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ne())).next(m=>({batchId:l,changes:mm(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let s=Ts();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ts();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(y,g){return new Xr(g,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((y,g)=>{a=a.insert(y,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Ke.newInvalidDocument(m)))});let l=Ts();return a.forEach((u,h)=>{const m=i.get(u);m!==void 0&&ks(m.mutation,h,ut.empty(),fe.now()),ko(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return M.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Wx(s.bundledQuery),readTime:Ft(s.readTime)}}(t)),M.resolve()}}/**
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
 */class Xx{constructor(){this.overlays=new _e(H.comparator),this.Ir=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Hn();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Hn(),i=t.length+1,a=new H(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new _e((h,m)=>h-m);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=Hn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=Hn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>l.set(h,m)),!(l.size()>=s)););return M.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new wx(t,r));let i=this.Ir.get(t);i===void 0&&(i=ne(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Jx{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.Tr=new Fe(Ce.Er),this.dr=new Fe(Ce.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ce(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new H(new pe([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new H(new pe([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=ne();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return H.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Fe(Ce.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vx(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Ce(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Fe(ce);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new H(i),0);let l=new Fe(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},a),M.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){de(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ce(t,0),s=this.br.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.Mr=e,this.docs=function(){return new _e(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(t))}getEntries(e,t){let r=on();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ke.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=on();const a=t.path,l=new H(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Mw(Vw(m),r)<=0||(s.has(m.key)||ko(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K()}Or(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new tb(this)}getSize(e){return M.resolve(this.size)}}class tb extends Gx{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.persistence=e,this.Nr=new Jr(t=>Vc(t),Mc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wc,this.targetCount=0,this.kr=Hr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),M.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Hr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Kn(t),M.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new kc(0),this.Kr=!1,this.Kr=!0,this.$r=new Jx,this.referenceDelegate=e(this),this.Ur=new nb(this),this.indexManager=new Hx,this.remoteDocumentCache=function(s){return new eb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qx(t),this.Gr=new Yx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Zx(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new sb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class sb extends Fw{constructor(e){super(),this.currentSequenceNumber=e}}class Hc{constructor(e){this.persistence=e,this.Jr=new Wc,this.Yr=null}static Zr(e){return new Hc(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),M.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=H.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return M.or([()=>M.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zc(e,t.fromCache,r,s)}}/**
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
 */class ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ob{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return qy()?8:Uw(Ye())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ib;return this.Xi(e,t,a).next(l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ps()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(ps()<=se.DEBUG&&q("QueryEngine","Query:",Er(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ps()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):M.resolve())}Yi(e,t){if(Ad(t))return M.resolve(null);let r=Lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=lo(t,null,"F"),r=Lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(t,l);return this.ns(t,h,a,u.readTime)?this.Yi(e,lo(t,null,"F")):this.rs(e,h,t,u)}))})))}Zi(e,t,r,s){return Ad(t)||s.isEqual(Q.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?M.resolve(null):(ps()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Er(t)),this.rs(e,a,t,Ow(s,-1)).next(l=>l))})}ts(e,t){let r=new Fe(hm(e));return t.forEach((s,i)=>{ko(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ps()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Er(t)),this.Ji.getDocumentsMatchingQuery(e,t,Cn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new _e(ce),this._s=new Jr(i=>Vc(i),Mc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function cb(n,e,t,r){return new ab(n,e,t,r)}async function jm(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ne();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function lb(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,m){const y=h.batch,g=y.keys();let x=M.resolve();return g.forEach(A=>{x=x.next(()=>m.getEntry(u,A)).next(b=>{const v=h.docVersions.get(A);de(v!==null),b.version.compareTo(v)<0&&(y.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),m.addEntry(b)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Dm(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function ub(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((m,y)=>{const g=s.get(y);if(!g)return;l.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,y)));let x=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?x=x.withResumeToken(Ue.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(m.resumeToken,r)),s=s.insert(y,x),function(b,v,j){return b.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,x,m)&&l.push(t.Ur.updateTargetData(i,x))});let u=on(),h=ne();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(db(i,a,e.documentUpdates).next(m=>{u=m.Ps,h=m.Is})),!r.isEqual(Q.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.os=s,i))}function db(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=on();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function hb(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fb(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new Pn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function lc(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!si(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Md(n,e,t){const r=Y(n);let s=Q.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,m){const y=Y(u),g=y._s.get(m);return g!==void 0?M.resolve(y.os.get(g)):y.Ur.getTargetData(h,m)}(r,a,Lt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:ne())).next(l=>(mb(r,sx(e),l),{documents:l,Ts:i})))}function mb(n,e,t){let r=n.us.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Ld{constructor(){this.activeTargetIds=ux()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gb{constructor(){this.so=new Ld,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ld,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pb{_o(e){}shutdown(){}}/**
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
 */class Fd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Li=null;function ka(){return Li===null?Li=function(){return 268435456+Math.round(2147483648*Math.random())}():Li++,"0x"+Li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class vb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=ka(),u=this.xo(t,r.toUriEncodedString());q("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(t,u,h,s).then(m=>(q("RestConnection",`Received RPC '${t}' ${l}: `,m),m),m=>{throw Br("RestConnection",`RPC '${t}' ${l} failed with error: `,m,"url: ",u,"request:",s),m})}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=yb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ka();return new Promise((a,l)=>{const u=new Kf;u.setWithCredentials(!0),u.listenOnce(Qf.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zi.NO_ERROR:const m=u.getResponseJson();q(He,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case zi.TIMEOUT:q(He,`RPC '${e}' ${i} timed out`),l(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const y=u.getStatus();if(q(He,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const A=function(v){const j=v.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(j)>=0?j:O.UNKNOWN}(x.status);l(new U(A,x.message))}else l(new U(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new U(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(He,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);q(He,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=ka(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Jf(),l=Xf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");q(He,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);let g=!1,x=!1;const A=new _b({Io:v=>{x?q(He,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(g||(q(He,`Opening RPC '${e}' stream ${s} transport.`),y.open(),g=!0),q(He,`RPC '${e}' stream ${s} sending:`,v),y.send(v))},To:()=>y.close()}),b=(v,j,I)=>{v.listen(j,V=>{try{I(V)}catch(F){setTimeout(()=>{throw F},0)}})};return b(y,Es.EventType.OPEN,()=>{x||(q(He,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),b(y,Es.EventType.CLOSE,()=>{x||(x=!0,q(He,`RPC '${e}' stream ${s} transport closed`),A.So())}),b(y,Es.EventType.ERROR,v=>{x||(x=!0,Br(He,`RPC '${e}' stream ${s} transport errored:`,v),A.So(new U(O.UNAVAILABLE,"The operation could not be completed")))}),b(y,Es.EventType.MESSAGE,v=>{var j;if(!x){const I=v.data[0];de(!!I);const V=I,F=V.error||((j=V[0])===null||j===void 0?void 0:j.error);if(F){q(He,`RPC '${e}' stream ${s} received error:`,F);const B=F.status;let W=function(w){const T=Ae[w];if(T!==void 0)return Em(T)}(B),P=F.message;W===void 0&&(W=O.INTERNAL,P="Unknown error status: "+B+" with message "+F.message),x=!0,A.So(new U(W,P)),y.close()}else q(He,`RPC '${e}' stream ${s} received:`,I),A.bo(I)}}),b(l,Yf.STAT_EVENT,v=>{v.stat===Za.PROXY?q(He,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Za.NOPROXY&&q(He,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){return new Rx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,r,s,i,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Om(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(sn(t.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wb extends Vm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=kx(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?Ft(a.readTime):Q.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=cc(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=rc(u)?{documents:Ox(i,u)}:{query:Vx(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Am(i,a.resumeToken);const h=ic(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=fo(i,a.snapshotVersion.toTimestamp());const h=ic(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Lx(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=cc(this.serializer),t.removeTarget=e,this.a_(t)}}class xb extends Vm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Dx(e.writeResults,e.commitTime),r=Ft(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=cc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>jx(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,oc(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(O.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,oc(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(O.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Eb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sn(t),this.D_=!1):q("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{hr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await ai(h),h.q_.set("Unknown"),h.L_.delete(4),await Mo(h)}(this))})}),this.q_=new Eb(r,s)}}async function Mo(n){if(hr(n))for(const e of n.B_)await e(!0)}async function ai(n){for(const e of n.B_)await e(!1)}function Mm(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Yc(t)?Qc(t):Zr(t).r_()&&Kc(t,e))}function Gc(n,e){const t=Y(n),r=Zr(t);t.N_.delete(e),r.r_()&&Lm(t,e),t.N_.size===0&&(r.r_()?r.o_():hr(t)&&t.q_.set("Unknown"))}function Kc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zr(n).A_(e)}function Lm(n,e){n.Q_.xe(e),Zr(n).R_(e)}function Qc(n){n.Q_=new Ix({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Zr(n).start(),n.q_.v_()}function Yc(n){return hr(n)&&!Zr(n).n_()&&n.N_.size>0}function hr(n){return Y(n).L_.size===0}function Fm(n){n.Q_=void 0}async function Ib(n){n.q_.set("Online")}async function Ab(n){n.N_.forEach((e,t)=>{Kc(n,e)})}async function Pb(n,e){Fm(n),Yc(n)?(n.q_.M_(e),Qc(n)):n.q_.set("Unknown")}async function Sb(n,e,t){if(n.q_.set("Online"),e instanceof Im&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mo(n,r)}else if(e instanceof Qi?n.Q_.Ke(e):e instanceof Tm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Q.min()))try{const r=await Dm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.N_.get(h);m&&i.N_.set(h,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const m=i.N_.get(u);if(!m)return;i.N_.set(u,m.withResumeToken(Ue.EMPTY_BYTE_STRING,m.snapshotVersion)),Lm(i,u);const y=new Pn(m.target,u,h,m.sequenceNumber);Kc(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await mo(n,r)}}async function mo(n,e,t){if(!si(e))throw e;n.L_.add(1),await ai(n),n.q_.set("Offline"),t||(t=()=>Dm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Mo(n)})}function Um(n,e){return e().catch(t=>mo(n,t,e))}async function Lo(n){const e=Y(n),t=jn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Rb(e);)try{const s=await hb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Nb(e,s)}catch(s){await mo(e,s)}Bm(e)&&$m(e)}function Rb(n){return hr(n)&&n.O_.length<10}function Nb(n,e){n.O_.push(e);const t=jn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Bm(n){return hr(n)&&!jn(n).n_()&&n.O_.length>0}function $m(n){jn(n).start()}async function Cb(n){jn(n).p_()}async function kb(n){const e=jn(n);for(const t of n.O_)e.m_(t.mutations)}async function jb(n,e,t){const r=n.O_.shift(),s=Bc.from(r,e,t);await Um(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lo(n)}async function Db(n,e){e&&jn(n).V_&&await async function(r,s){if(function(a){return bx(a)&&a!==O.ABORTED}(s.code)){const i=r.O_.shift();jn(r).s_(),await Um(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lo(r)}}(n,e),Bm(n)&&$m(n)}async function Ud(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=hr(t);t.L_.add(3),await ai(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Mo(t)}async function Ob(n,e){const t=Y(n);e?(t.L_.delete(2),await Mo(t)):e||(t.L_.add(2),await ai(t),t.q_.set("Unknown"))}function Zr(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new wb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Ib.bind(null,n),Ro:Ab.bind(null,n),mo:Pb.bind(null,n),d_:Sb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Yc(n)?Qc(n):n.q_.set("Unknown")):(await n.K_.stop(),Fm(n))})),n.K_}function jn(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new xb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Cb.bind(null,n),mo:Db.bind(null,n),f_:kb.bind(null,n),g_:jb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Lo(n)):(await n.U_.stop(),n.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Xc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jc(n,e){if(sn("AsyncQueue",`${e}: ${n}`),si(n))return new U(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Ts(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.W_=new _e(H.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class zr{constructor(e,t,r,s,i,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new zr(e,t,Nr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Mb{constructor(){this.queries=$d(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=$d(),i.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function $d(){return new Jr(n=>dm(n),Co)}async function qm(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Vb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Jc(a,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Zc(t)}async function Wm(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Lb(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Zc(t)}function Fb(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Zc(n){n.Y_.forEach(e=>{e.next()})}var uc,qd;(qd=uc||(uc={})).ea="default",qd.Cache="cache";class Hm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==uc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.key=e}}class Gm{constructor(e){this.key=e}}class Ub{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=hm(e),this.Ra=new Nr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Bd,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const g=s.get(m),x=ko(this.query,y)?y:null,A=!!g&&this.mutatedKeys.has(g.key),b=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let v=!1;g&&x?g.data.isEqual(x.data)?A!==b&&(r.track({type:3,doc:x}),v=!0):this.ga(g,x)||(r.track({type:2,doc:x}),v=!0,(u&&this.Aa(x,u)>0||h&&this.Aa(x,h)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),v=!0):g&&!x&&(r.track({type:1,doc:g}),v=!0,(u||h)&&(l=!0)),v&&(x?(a=a.add(x),i=b?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,y)=>function(x,A){const b=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return b(x)-b(A)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,a.length!==0||h?{snapshot:new zr(this.query,e.Ra,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Gm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new zm(r))}),t}ba(e){this.Ta=e.Ts,this.da=ne();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return zr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Bb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $b{constructor(e){this.key=e,this.va=!1}}class qb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Jr(l=>dm(l),Co),this.Ma=new Map,this.xa=new Set,this.Oa=new _e(H.comparator),this.Na=new Map,this.La=new Wc,this.Ba={},this.ka=new Map,this.qa=Hr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Wb(n,e,t=!0){const r=Zm(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Km(r,e,t,!0),s}async function Hb(n,e){const t=Zm(n);await Km(t,e,!0,!1)}async function Km(n,e,t,r){const s=await fb(n.localStore,Lt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await zb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Mm(n.remoteStore,s),l}async function zb(n,e,t,r,s){n.Ka=(y,g,x)=>async function(b,v,j,I){let V=v.view.ma(j);V.ns&&(V=await Md(b.localStore,v.query,!1).then(({documents:P})=>v.view.ma(P,V)));const F=I&&I.targetChanges.get(v.targetId),B=I&&I.targetMismatches.get(v.targetId)!=null,W=v.view.applyChanges(V,b.isPrimaryClient,F,B);return Hd(b,v.targetId,W.wa),W.snapshot}(n,y,g,x);const i=await Md(n.localStore,e,!0),a=new Ub(e,i.Ts),l=a.ma(i.documents),u=oi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,u);Hd(n,t,h.wa);const m=new Bb(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Gb(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!Co(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await lc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Gc(r.remoteStore,s.targetId),dc(r,s.targetId)}).catch(ri)):(dc(r,s.targetId),await lc(r.localStore,s.targetId,!0))}async function Kb(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Gc(t.remoteStore,r.targetId))}async function Qb(n,e,t){const r=nE(n);try{const s=await function(a,l){const u=Y(a),h=fe.now(),m=l.reduce((x,A)=>x.add(A.key),ne());let y,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let A=on(),b=ne();return u.cs.getEntries(x,m).next(v=>{A=v,A.forEach((j,I)=>{I.isValidDocument()||(b=b.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,A)).next(v=>{y=v;const j=[];for(const I of l){const V=yx(I,y.get(I.key).overlayedDocument);V!=null&&j.push(new Vn(I.key,V,rm(V.value.mapValue),ot.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,j,l)}).next(v=>{g=v;const j=v.applyToLocalDocumentSet(y,b);return u.documentOverlayCache.saveOverlays(x,v.batchId,j)})}).then(()=>({batchId:g.batchId,changes:mm(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new _e(ce)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,t),await ci(r,s.changes),await Lo(r.remoteStore)}catch(s){const i=Jc(s,"Failed to persist write");t.reject(i)}}async function Qm(n,e){const t=Y(n);try{const r=await ub(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?de(a.va):s.removedDocuments.size>0&&(de(a.va),a.va=!1))}),await ci(t,r,e)}catch(r){await ri(r)}}function Wd(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Y(a);u.onlineState=l;let h=!1;u.queries.forEach((m,y)=>{for(const g of y.j_)g.Z_(l)&&(h=!0)}),h&&Zc(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Yb(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new _e(H.comparator);a=a.insert(i,Ke.newNoDocument(i,Q.min()));const l=ne().add(i),u=new Oo(Q.min(),new Map,new _e(ce),a,l);await Qm(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),el(r)}else await lc(r.localStore,e,!1).then(()=>dc(r,e,t)).catch(ri)}async function Xb(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await lb(t.localStore,e);Xm(t,r,null),Ym(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ci(t,s)}catch(s){await ri(s)}}async function Jb(n,e,t){const r=Y(n);try{const s=await function(a,l){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(de(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);Xm(r,e,t),Ym(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ci(r,s)}catch(s){await ri(s)}}function Ym(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Xm(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function dc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Jm(n,r)})}function Jm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Gc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),el(n))}function Hd(n,e,t){for(const r of t)r instanceof zm?(n.La.addReference(r.key,e),Zb(n,r)):r instanceof Gm?(q("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Jm(n,r.key)):K()}function Zb(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(q("SyncEngine","New document in limbo: "+t),n.xa.add(r),el(n))}function el(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new H(pe.fromString(e)),r=n.qa.next();n.Na.set(r,new $b(t)),n.Oa=n.Oa.insert(t,r),Mm(n.remoteStore,new Pn(Lt(Lc(t.path)),r,"TargetPurposeLimboResolution",kc.oe))}}async function ci(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(h=>{var m;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=zc.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,h){const m=Y(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>M.forEach(h,g=>M.forEach(g.$i,x=>m.persistence.referenceDelegate.addReference(y,g.targetId,x)).next(()=>M.forEach(g.Ui,x=>m.persistence.referenceDelegate.removeReference(y,g.targetId,x)))))}catch(y){if(!si(y))throw y;q("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const g=y.targetId;if(!y.fromCache){const x=m.os.get(g),A=x.snapshotVersion,b=x.withLastLimboFreeSnapshotVersion(A);m.os=m.os.insert(g,b)}}}(r.localStore,i))}async function eE(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await jm(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new U(O.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ci(t,r.hs)}}function tE(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Zm(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yb.bind(null,e),e.Ca.d_=Lb.bind(null,e.eventManager),e.Ca.$a=Fb.bind(null,e.eventManager),e}function nE(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jb.bind(null,e),e}class go{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vo(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return cb(this.persistence,new ob,e.initialUser,this.serializer)}Ga(e){return new rb(Hc.Zr,this.serializer)}Wa(e){return new gb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}go.provider={build:()=>new go};class hc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eE.bind(null,this.syncEngine),await Ob(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Mb}()}createDatastore(e){const t=Vo(e.databaseInfo.databaseId),r=function(i){return new vb(i)}(e.databaseInfo);return function(i,a,l,u){return new bb(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Tb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Wd(this.syncEngine,t,0),function(){return Fd.D()?new Fd:new pb}())}createSyncEngine(e,t){return function(s,i,a,l,u,h,m){const y=new qb(s,i,a,l,u,h);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ai(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hc.provider={build:()=>new hc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Jc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Da(n,e){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function zd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sE(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ud(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ud(e.remoteStore,s)),n._onlineComponents=e}async function sE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Br("Error using user provided cache. Falling back to memory cache: "+t),await Da(n,new go)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Da(n,new go);return n._offlineComponents}async function tg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await zd(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await zd(n,new hc))),n._onlineComponents}function iE(n){return tg(n).then(e=>e.syncEngine)}async function ng(n){const e=await tg(n),t=e.eventManager;return t.onListen=Wb.bind(null,e.syncEngine),t.onUnlisten=Gb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Hb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Kb.bind(null,e.syncEngine),t}function oE(n,e,t={}){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const m=new eg({next:g=>{m.Za(),a.enqueueAndForget(()=>Wm(i,y));const x=g.docs.has(l);!x&&g.fromCache?h.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&g.fromCache&&u&&u.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),y=new Hm(Lc(l.path),m,{includeMetadataChanges:!0,_a:!0});return qm(i,y)}(await ng(n),n.asyncQueue,e,t,r)),r.promise}function aE(n,e,t={}){const r=new tn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,h){const m=new eg({next:g=>{m.Za(),a.enqueueAndForget(()=>Wm(i,y)),g.fromCache&&u.source==="server"?h.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),y=new Hm(l,m,{includeMetadataChanges:!0,_a:!0});return qm(i,y)}(await ng(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function rg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n,e,t){if(!t)throw new U(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cE(n,e,t,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Kd(n){if(!H.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qd(n){if(H.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fo(n);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Aw;switch(r.type){case"firstParty":return new Nw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Gd.get(t);r&&(q("ComponentProvider","Removing Datastore"),Gd.delete(t),r.terminate())}(this),Promise.resolve()}}function lE(n,e,t,r={}){var s;const i=(n=It(n,Uo))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ge.MOCK_USER;else{l=ef(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ge(h)}n._authCredentials=new Pw(new Zf(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mn(this.firestore,e,this._query)}}class nt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}}class Nn extends Mn{constructor(e,t,r){super(e,t,Lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new H(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function be(n,e,...t){if(n=me(n),sg("collection","path",e),n instanceof Uo){const r=pe.fromString(e,...t);return Qd(r),new Nn(n,null,r)}{if(!(n instanceof nt||n instanceof Nn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Qd(r),new Nn(n.firestore,null,r)}}function Ne(n,e,...t){if(n=me(n),arguments.length===1&&(e=em.newId()),sg("doc","path",e),n instanceof Uo){const r=pe.fromString(e,...t);return Kd(r),new nt(n,null,new H(r))}{if(!(n instanceof nt||n instanceof Nn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return Kd(r),new nt(n.firestore,n instanceof Nn?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Om(this,"async_queue_retry"),this.Vu=()=>{const r=ja();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!si(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw sn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Xc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class fr extends Uo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xd(e),this._firestoreClient=void 0,await e}}}function uE(n,e){const t=typeof n=="object"?n:Ao(),r=typeof n=="string"?n:"(default)",s=On(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xh("firestore");i&&lE(s,...i)}return s}function Bo(n){if(n._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||dE(n),n._firestoreClient}function dE(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,h,m){return new qw(l,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,rg(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new rE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(Ue.fromBase64String(e))}catch(t){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gr(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class rl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=/^__.*__$/;class fE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ii(e,this.data,t,this.fieldTransforms)}}class ig{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function og(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class sl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return po(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(og(this.Cu)&&hE.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Vo(e)}Qu(e,t,r,s=!1){return new sl({Cu:e,methodName:t,qu:r,path:Le.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ui(n){const e=n._freezeSettings(),t=Vo(n._databaseId);return new mE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function il(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);ol("Data must be an object, but it was:",a,r);const l=lg(r,a);let u,h;if(i.merge)u=new ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const g=fc(e,y,t);if(!a.contains(g))throw new U(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dg(m,g)||m.push(g)}u=new ut(m),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new fE(new st(l),u,h)}class $o extends tl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $o}}function ag(n,e,t,r){const s=n.Qu(1,e,t);ol("Data must be an object, but it was:",s,r);const i=[],a=st.empty();dr(r,(u,h)=>{const m=al(e,u,t);h=me(h);const y=s.Nu(m);if(h instanceof $o)i.push(m);else{const g=di(h,y);g!=null&&(i.push(m),a.set(m,g))}});const l=new ut(i);return new ig(a,l,s.fieldTransforms)}function cg(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[fc(e,r,t)],u=[s];if(i.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(fc(e,i[g])),u.push(i[g+1]);const h=[],m=st.empty();for(let g=l.length-1;g>=0;--g)if(!dg(h,l[g])){const x=l[g];let A=u[g];A=me(A);const b=a.Nu(x);if(A instanceof $o)h.push(x);else{const v=di(A,b);v!=null&&(h.push(x),m.set(x,v))}}const y=new ut(h);return new ig(m,y,a.fieldTransforms)}function gE(n,e,t,r=!1){return di(t,n.Qu(r?4:3,e))}function di(n,e){if(ug(n=me(n)))return ol("Unsupported field value:",e,n),lg(n,e);if(n instanceof tl)return function(r,s){if(!og(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=di(l,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:fo(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fo(s.serializer,i)}}if(r instanceof nl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gr)return{bytesValue:Am(s.serializer,r._byteString)};if(r instanceof nt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof rl)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Fc(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Fo(r)}`)}(n,e)}function lg(n,e){const t={};return tm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(n,(r,s)=>{const i=di(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ug(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof nl||n instanceof Gr||n instanceof nt||n instanceof tl||n instanceof rl)}function ol(n,e,t){if(!ug(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Fo(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function fc(n,e,t){if((e=me(e))instanceof li)return e._internalPath;if(typeof e=="string")return al(n,e);throw po("Field path arguments must be of type string or ",n,!1,void 0,t)}const pE=new RegExp("[~\\*/\\[\\]]");function al(n,e,t){if(e.search(pE)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new li(...e.split("."))._internalPath}catch{throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function po(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(O.INVALID_ARGUMENT,l+n+u)}function dg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yE extends hg{data(){return super.data()}}function qo(n,e){return typeof e=="string"?al(n,e):e instanceof li?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cl{}class ll extends cl{}function Qe(n,e,...t){let r=[];e instanceof cl&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof ul).length,l=i.filter(u=>u instanceof Wo).length;if(a>1||a>0&&l>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Wo extends ll{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){const t=this._parse(e);return fg(e._query,t),new Mn(e.firestore,e.converter,sc(e._query,t))}_parse(e){const t=ui(e.firestore);return function(i,a,l,u,h,m,y){let g;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Zd(y,m);const x=[];for(const A of y)x.push(Jd(u,i,A));g={arrayValue:{values:x}}}else g=Jd(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Zd(y,m),g=gE(l,a,y,m==="in"||m==="not-in");return Re.create(h,m,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ke(n,e,t){const r=e,s=qo("where",n);return Wo._create(s,r,t)}class ul extends cl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ul(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)fg(a,u),a=sc(a,u)}(e._query,t),new Mn(e.firestore,e.converter,sc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dl extends ll{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new dl(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ws(i,a)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Xr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function zn(n,e="asc"){const t=e,r=qo("orderBy",n);return dl._create(r,t)}class hl extends ll{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new hl(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,lo(e._query,this._limit,this._limitType))}}function vE(n){return hl._create("limit",n,"F")}function Jd(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!um(e)&&t.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(pe.fromString(t));if(!H.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wd(n,new H(r))}if(t instanceof nt)return wd(n,t._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fo(t)}.`)}function Zd(n,e){if(!Array.isArray(n)||n.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fg(n,e){const t=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wE{convertValue(e,t="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return dr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ie(a.doubleValue));return new rl(i)}convertGeoPoint(e){return new nl(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const t=kn(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);de(km(r));const s=new $s(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(t)||sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mg extends hg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(qo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Yi extends mg{data(e={}){return super.data(e)}}class xE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new As(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Yi(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Yi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new As(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Yi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new As(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:bE(l.type),doc:u,oldIndex:h,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n){n=It(n,nt);const e=It(n.firestore,fr);return oE(Bo(e),n._key).then(t=>EE(e,n,t))}class gg extends wE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nt(this.firestore,null,t)}}function rt(n){n=It(n,Mn);const e=It(n.firestore,fr),t=Bo(e),r=new gg(e);return _E(n._query),aE(t,n._query).then(s=>new xE(e,r,n,s))}function ml(n,e,t){n=It(n,nt);const r=It(n.firestore,fr),s=fl(n.converter,e,t);return zo(r,[il(ui(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ot.none())])}function hi(n,e,t,...r){n=It(n,nt);const s=It(n.firestore,fr),i=ui(s);let a;return a=typeof(e=me(e))=="string"||e instanceof li?cg(i,"updateDoc",n._key,e,t,r):ag(i,"updateDoc",n._key,e),zo(s,[a.toMutation(n._key,ot.exists(!0))])}function Ho(n,e){const t=It(n.firestore,fr),r=Ne(n),s=fl(n.converter,e);return zo(t,[il(ui(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ot.exists(!1))]).then(()=>r)}function zo(n,e){return function(r,s){const i=new tn;return r.asyncQueue.enqueueAndForget(async()=>Qb(await iE(r),s,i)),i.promise}(Bo(n),e)}function EE(n,e,t){const r=t.docs.get(e._key),s=new gg(n);return new mg(n,s,e._key,r,new As(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ui(e)}set(e,t,r){this._verifyNotCommitted();const s=Oa(e,this._firestore),i=fl(s.converter,t,r),a=il(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,ot.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Oa(e,this._firestore);let a;return a=typeof(t=me(t))=="string"||t instanceof li?cg(this._dataReader,"WriteBatch.update",i._key,t,r,s):ag(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,ot.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Oa(e,this._firestore);return this._mutations=this._mutations.concat(new Uc(t._key,ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Oa(n,e){if((n=me(n)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n){return Bo(n=It(n,fr)),new TE(n,e=>zo(n,e))}(function(e,t=!0){(function(s){Yr=s})(ur),Et(new mt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new fr(new Sw(r.getProvider("auth-internal")),new kw(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $s(h.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),it(gd,"4.7.3",e),it(gd,"4.7.3","esm2017")})();var AE="firebase",PE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(AE,PE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="firebasestorage.googleapis.com",yg="storageBucket",SE=2*60*1e3,RE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends yt{constructor(e,t,r=0){super(Va(e),`Firebase Storage: ${t} (${Va(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Va(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function Va(n){return"storage/"+n}function gl(){const n="An unknown error occurred, please check the error payload for server response.";return new Te(Ee.UNKNOWN,n)}function NE(n){return new Te(Ee.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function CE(n){return new Te(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kE(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ee.UNAUTHENTICATED,n)}function jE(){return new Te(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function DE(n){return new Te(Ee.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function OE(){return new Te(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VE(){return new Te(Ee.CANCELED,"User canceled the upload/download.")}function ME(n){return new Te(Ee.INVALID_URL,"Invalid URL '"+n+"'.")}function LE(n){return new Te(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function FE(){return new Te(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yg+"' property when initializing the app?")}function UE(){return new Te(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BE(){return new Te(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $E(n){return new Te(Ee.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mc(n){return new Te(Ee.INVALID_ARGUMENT,n)}function _g(){return new Te(Ee.APP_DELETED,"The Firebase app was deleted.")}function qE(n){return new Te(Ee.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function js(n,e){return new Te(Ee.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ys(n){throw new Te(Ee.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=dt.makeFromUrl(e,t)}catch{return new dt(e,"")}if(r.path==="")return r;throw LE(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(F){F.path_=decodeURIComponent(F.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",x=new RegExp(`^https?://${y}/${m}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},b=t===pg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",j=new RegExp(`^https?://${b}/${s}/${v}`,"i"),V=[{regex:l,indices:u,postModify:i},{regex:x,indices:A,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let F=0;F<V.length;F++){const B=V[F],W=B.regex.exec(e);if(W){const P=W[B.indices.bucket];let _=W[B.indices.path];_||(_=""),r=new dt(P,_),B.postModify(r);break}}if(r==null)throw ME(e);return r}}class WE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let h=!1;function m(...v){h||(h=!0,e.apply(null,v))}function y(v){s=setTimeout(()=>{s=null,n(x,u())},v)}function g(){i&&clearTimeout(i)}function x(v,...j){if(h){g();return}if(v){g(),m.call(null,v,...j);return}if(u()||a){g(),m.call(null,v,...j);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,y(V)}let A=!1;function b(v){A||(A=!0,g(),!h&&(s!==null?(v||(l=2),clearTimeout(s),y(0)):v||(l=1)))}return y(0),i=setTimeout(()=>{a=!0,b(!0)},t),b}function zE(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){return n!==void 0}function KE(n){return typeof n=="object"&&!Array.isArray(n)}function pl(n){return typeof n=="string"||n instanceof String}function eh(n){return yl()&&n instanceof Blob}function yl(){return typeof Blob<"u"}function th(n,e,t,r){if(r<e)throw mc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw mc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function vg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var er;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(er||(er={}));/**
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
 */function QE(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,r,s,i,a,l,u,h,m,y,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=y,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,A)=>{this.resolve_=x,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Fi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===er.NO_ERROR,u=i.getStatus();if(!l||QE(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===er.ABORT;r(!1,new Fi(!1,null,m));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Fi(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());GE(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=gl();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?_g():VE();a(u)}else{const u=OE();a(u)}};this.canceled_?t(!1,new Fi(!1,null,!0)):this.backoffId_=HE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function XE(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function JE(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function eT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tT(n,e,t,r,s,i,a=!0){const l=vg(n.urlParams),u=n.url+l,h=Object.assign({},n.headers);return ZE(h,e),XE(h,t),JE(h,i),eT(h,r),new YE(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rT(...n){const e=nT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(yl())return new Blob(n);throw new Te(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function iT(n){if(typeof atob>"u")throw $E("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ma{constructor(e,t){this.data=e,this.contentType=t||null}}function oT(n,e){switch(n){case Dt.RAW:return new Ma(wg(e));case Dt.BASE64:case Dt.BASE64URL:return new Ma(xg(n,e));case Dt.DATA_URL:return new Ma(cT(e),lT(e))}throw gl()}function wg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aT(n){let e;try{e=decodeURIComponent(n)}catch{throw js(Dt.DATA_URL,"Malformed data URL.")}return wg(e)}function xg(n,e){switch(n){case Dt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw js(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw js(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=iT(e)}catch(s){throw s.message.includes("polyfill")?s:js(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class bg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw js(Dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=uT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cT(n){const e=new bg(n);return e.base64?xg(Dt.BASE64,e.rest):aT(e.rest)}function lT(n){return new bg(n).contentType}function uT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){let r=0,s="";eh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(eh(this.data_)){const r=this.data_,s=sT(r,e,t);return s===null?null:new wn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new wn(r,!0)}}static getBlob(...e){if(yl()){const t=e.map(r=>r instanceof wn?r.data_:r);return new wn(rT.apply(null,t))}else{const t=e.map(a=>pl(a)?oT(Dt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new wn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){let e;try{e=JSON.parse(n)}catch{return null}return KE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function hT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Tg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(n,e){return e}class Ze{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||fT}}let Ui=null;function mT(n){return!pl(n)||n.length<2?n:Tg(n)}function Ig(){if(Ui)return Ui;const n=[];n.push(new Ze("bucket")),n.push(new Ze("generation")),n.push(new Ze("metageneration")),n.push(new Ze("name","fullPath",!0));function e(i,a){return mT(a)}const t=new Ze("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Ze("size");return s.xform=r,n.push(s),n.push(new Ze("timeCreated")),n.push(new Ze("updated")),n.push(new Ze("md5Hash",null,!0)),n.push(new Ze("cacheControl",null,!0)),n.push(new Ze("contentDisposition",null,!0)),n.push(new Ze("contentEncoding",null,!0)),n.push(new Ze("contentLanguage",null,!0)),n.push(new Ze("contentType",null,!0)),n.push(new Ze("metadata","customMetadata",!0)),Ui=n,Ui}function gT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function pT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return gT(r,n),r}function Ag(n,e,t){const r=Eg(e);return r===null?null:pT(n,r,t)}function yT(n,e,t,r){const s=Eg(e);if(s===null||!pl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(h=>{const m=n.bucket,y=n.fullPath,g="/b/"+a(m)+"/o/"+a(y),x=Go(g,t,r),A=vg({alt:"media",token:h});return x+A})[0]}function _T(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class _l{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n){if(!n)throw gl()}function vT(n,e){function t(r,s){const i=Ag(n,s,e);return Pg(i!==null),i}return t}function wT(n,e){function t(r,s){const i=Ag(n,s,e);return Pg(i!==null),yT(i,s,n.host,n._protocol)}return t}function Sg(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=jE():s=kE():t.getStatus()===402?s=CE(n.bucket):t.getStatus()===403?s=DE(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Rg(n){const e=Sg(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=NE(n.path)),i.serverResponse=s.serverResponse,i}return t}function xT(n,e,t){const r=e.fullServerUrl(),s=Go(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new _l(s,i,wT(n,t),a);return l.errorHandler=Rg(e),l}function bT(n,e){const t=e.fullServerUrl(),r=Go(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function a(u,h){}const l=new _l(r,s,a,i);return l.successCodes=[200,204],l.errorHandler=Rg(e),l}function ET(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function TT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=ET(null,e)),r}function IT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let V="";for(let F=0;F<2;F++)V=V+Math.random().toString().slice(2);return V}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const h=TT(e,r,s),m=_T(h,t),y="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",x=wn.getBlob(y,r,g);if(x===null)throw UE();const A={name:h.fullPath},b=Go(i,n.host,n._protocol),v="POST",j=n.maxUploadRetryTime,I=new _l(b,v,vT(n,t),j);return I.urlParams=A,I.headers=a,I.body=x.uploadData(),I.errorHandler=Sg(e),I}class AT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=er.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=er.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=er.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ys("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PT extends AT{initXhr(){this.xhr_.responseType="text"}}function vl(){return new PT}/**
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
 */class or{constructor(e,t){this._service=e,t instanceof dt?this._location=t:this._location=dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new or(e,t)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tg(this._location.path)}get storage(){return this._service}get parent(){const e=dT(this._location.path);if(e===null)return null;const t=new dt(this._location.bucket,e);return new or(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw qE(e)}}function ST(n,e,t){n._throwIfRoot("uploadBytes");const r=IT(n.storage,n._location,Ig(),new wn(e,!0),t);return n.storage.makeRequestWithTokens(r,vl).then(s=>({metadata:s,ref:n}))}function RT(n){n._throwIfRoot("getDownloadURL");const e=xT(n.storage,n._location,Ig());return n.storage.makeRequestWithTokens(e,vl).then(t=>{if(t===null)throw BE();return t})}function NT(n){n._throwIfRoot("deleteObject");const e=bT(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vl)}function CT(n,e){const t=hT(n._location.path,e),r=new dt(n._location.bucket,t);return new or(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){return/^[A-Za-z]+:\/\//.test(n)}function jT(n,e){return new or(n,e)}function Ng(n,e){if(n instanceof wl){const t=n;if(t._bucket==null)throw FE();const r=new or(t,t._bucket);return e!=null?Ng(r,e):r}else return e!==void 0?CT(n,e):n}function DT(n,e){if(e&&kT(e)){if(n instanceof wl)return jT(n,e);throw mc("To use ref(service, url), the first argument must be a Storage instance.")}else return Ng(n,e)}function nh(n,e){const t=e==null?void 0:e[yg];return t==null?null:dt.makeFromBucketSpec(t,n)}function OT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:ef(s,n.app.options.projectId))}class wl{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=pg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SE,this._maxUploadRetryTime=RE,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=nh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=nh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){th("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){th("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new or(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new WE(_g());{const a=tT(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const rh="@firebase/storage",sh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="storage";function VT(n,e,t){return n=me(n),ST(n,e,t)}function MT(n){return n=me(n),RT(n)}function LT(n){return n=me(n),NT(n)}function kg(n,e){return n=me(n),DT(n,e)}function FT(n=Ao(),e){n=me(n);const r=On(n,Cg).getImmediate({identifier:e}),s=Xh("storage");return s&&UT(r,...s),r}function UT(n,e,t,r={}){OT(n,e,t,r)}function BT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new wl(t,r,s,e,ur)}function $T(){Et(new mt(Cg,BT,"PUBLIC").setMultipleInstances(!0)),it(rh,sh,""),it(rh,sh,"esm2017")}$T();const jg="@firebase/installations",xl="0.6.9";/**
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
 */const Dg=1e4,Og=`w:${xl}`,Vg="FIS_v2",qT="https://firebaseinstallations.googleapis.com/v1",WT=60*60*1e3,HT="installations",zT="Installations";/**
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
 */const GT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new lr(HT,zT,GT);function Mg(n){return n instanceof yt&&n.code.includes("request-failed")}/**
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
 */function Lg({projectId:n}){return`${qT}/projects/${n}/installations`}function Fg(n){return{token:n.token,requestStatus:2,expiresIn:QT(n.expiresIn),creationTime:Date.now()}}async function Ug(n,e){const r=(await e.json()).error;return ar.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bg({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function KT(n,{refreshToken:e}){const t=Bg(n);return t.append("Authorization",YT(e)),t}async function $g(n){const e=await n();return e.status>=500&&e.status<600?n():e}function QT(n){return Number(n.replace("s","000"))}function YT(n){return`${Vg} ${n}`}/**
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
 */async function XT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Lg(n),s=Bg(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Vg,appId:n.appId,sdkVersion:Og},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await $g(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Fg(h.authToken)}}else throw await Ug("Create Installation",u)}/**
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
 */function qg(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function JT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ZT=/^[cdef][\w-]{21}$/,gc="";function eI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=tI(n);return ZT.test(t)?t:gc}catch{return gc}}function tI(n){return JT(n).substr(0,22)}/**
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
 */function Ko(n){return`${n.appName}!${n.appId}`}/**
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
 */const Wg=new Map;function Hg(n,e){const t=Ko(n);zg(t,e),nI(t,e)}function zg(n,e){const t=Wg.get(n);if(t)for(const r of t)r(e)}function nI(n,e){const t=rI();t&&t.postMessage({key:n,fid:e}),sI()}let Gn=null;function rI(){return!Gn&&"BroadcastChannel"in self&&(Gn=new BroadcastChannel("[Firebase] FID Change"),Gn.onmessage=n=>{zg(n.data.key,n.data.fid)}),Gn}function sI(){Wg.size===0&&Gn&&(Gn.close(),Gn=null)}/**
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
 */const iI="firebase-installations-database",oI=1,cr="firebase-installations-store";let La=null;function bl(){return La||(La=af(iI,oI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(cr)}}})),La}async function yo(n,e){const t=Ko(n),s=(await bl()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Hg(n,e.fid),e}async function Gg(n){const e=Ko(n),r=(await bl()).transaction(cr,"readwrite");await r.objectStore(cr).delete(e),await r.done}async function Qo(n,e){const t=Ko(n),s=(await bl()).transaction(cr,"readwrite"),i=s.objectStore(cr),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await s.done,l&&(!a||a.fid!==l.fid)&&Hg(n,l.fid),l}/**
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
 */async function El(n){let e;const t=await Qo(n.appConfig,r=>{const s=aI(r),i=cI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===gc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function aI(n){const e=n||{fid:eI(),registrationStatus:0};return Kg(e)}function cI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ar.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uI(n)}:{installationEntry:e}}async function lI(n,e){try{const t=await XT(n,e);return yo(n.appConfig,t)}catch(t){throw Mg(t)&&t.customData.serverCode===409?await Gg(n.appConfig):await yo(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function uI(n){let e=await ih(n.appConfig);for(;e.registrationStatus===1;)await qg(100),e=await ih(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await El(n);return r||t}return e}function ih(n){return Qo(n,e=>{if(!e)throw ar.create("installation-not-found");return Kg(e)})}function Kg(n){return dI(n)?{fid:n.fid,registrationStatus:0}:n}function dI(n){return n.registrationStatus===1&&n.registrationTime+Dg<Date.now()}/**
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
 */async function hI({appConfig:n,heartbeatServiceProvider:e},t){const r=fI(n,t),s=KT(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Og,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await $g(()=>fetch(r,l));if(u.ok){const h=await u.json();return Fg(h)}else throw await Ug("Generate Auth Token",u)}function fI(n,{fid:e}){return`${Lg(n)}/${e}/authTokens:generate`}/**
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
 */async function Tl(n,e=!1){let t;const r=await Qo(n.appConfig,i=>{if(!Qg(i))throw ar.create("not-registered");const a=i.authToken;if(!e&&pI(a))return i;if(a.requestStatus===1)return t=mI(n,e),i;{if(!navigator.onLine)throw ar.create("app-offline");const l=_I(i);return t=gI(n,l),l}});return t?await t:r.authToken}async function mI(n,e){let t=await oh(n.appConfig);for(;t.authToken.requestStatus===1;)await qg(100),t=await oh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Tl(n,e):r}function oh(n){return Qo(n,e=>{if(!Qg(e))throw ar.create("not-registered");const t=e.authToken;return vI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gI(n,e){try{const t=await hI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await yo(n.appConfig,r),t}catch(t){if(Mg(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gg(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yo(n.appConfig,r)}throw t}}function Qg(n){return n!==void 0&&n.registrationStatus===2}function pI(n){return n.requestStatus===2&&!yI(n)}function yI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WT}function _I(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function vI(n){return n.requestStatus===1&&n.requestTime+Dg<Date.now()}/**
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
 */async function wI(n){const e=n,{installationEntry:t,registrationPromise:r}=await El(e);return r?r.catch(console.error):Tl(e).catch(console.error),t.fid}/**
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
 */async function xI(n,e=!1){const t=n;return await bI(t),(await Tl(t,e)).token}async function bI(n){const{registrationPromise:e}=await El(n);e&&await e}/**
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
 */function EI(n){if(!n||!n.options)throw Fa("App Configuration");if(!n.name)throw Fa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Fa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fa(n){return ar.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="installations",TI="installations-internal",II=n=>{const e=n.getProvider("app").getImmediate(),t=EI(e),r=On(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AI=n=>{const e=n.getProvider("app").getImmediate(),t=On(e,Yg).getImmediate();return{getId:()=>wI(t),getToken:s=>xI(t,s)}};function PI(){Et(new mt(Yg,II,"PUBLIC")),Et(new mt(TI,AI,"PRIVATE"))}PI();it(jg,xl);it(jg,xl,"esm2017");/**
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
 */const _o="analytics",SI="firebase_id",RI="origin",NI=60*1e3,CI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Il="https://www.googletagmanager.com/gtag/js";/**
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
 */const at=new Io("@firebase/analytics");/**
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
 */const kI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ht=new lr("analytics","Analytics",kI);/**
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
 */function jI(n){if(!n.startsWith(Il)){const e=ht.create("invalid-gtag-resource",{gtagURL:n});return at.warn(e.message),""}return n}function Xg(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function DI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function OI(n,e){const t=DI("firebase-js-sdk-policy",{createScriptURL:jI}),r=document.createElement("script"),s=`${Il}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function VI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function MI(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Xg(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(l){at.error(l)}n("config",s,i)}async function LI(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Xg(t);for(const u of a){const h=l.find(y=>y.measurementId===u),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){at.error(i)}}function FI(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[l,u]=a;await LI(n,e,t,l,u)}else if(i==="config"){const[l,u]=a;await MI(n,e,t,r,l,u)}else if(i==="consent"){const[l,u]=a;n("consent",l,u)}else if(i==="get"){const[l,u,h]=a;n("get",l,u,h)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){at.error(l)}}return s}function UI(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=FI(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function BI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Il)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=30,qI=1e3;class WI{constructor(e={},t=qI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jg=new WI;function HI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function zI(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:HI(r)},i=CI.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function GI(n,e=Jg,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw ht.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ht.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new YI;return setTimeout(async()=>{l.abort()},NI),Zg({appId:r,apiKey:s,measurementId:i},a,l,e)}async function Zg(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Jg){var i;const{appId:a,measurementId:l}=n;try{await KI(r,e)}catch(u){if(l)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await zI(n);return s.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!QI(h)){if(s.deleteThrottleMetadata(a),l)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const m=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?Uu(t,s.intervalMillis,$I):Uu(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(a,y),at.debug(`Calling attemptFetch again in ${m} millis`),Zg(n,y,r,s)}}function KI(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QI(n){if(!(n instanceof yt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class YI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(){if(nf())try{await rf()}catch(n){return at.warn(ht.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return at.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZI(n,e,t,r,s,i,a){var l;const u=GI(n);u.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>at.error(x)),e.push(u);const h=JI().then(x=>{if(x)return r.getId()}),[m,y]=await Promise.all([u,h]);BI(i)||OI(i,m.measurementId),s("js",new Date);const g=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return g[RI]="firebase",g.update=!0,y!=null&&(g[SI]=y),s("config",m.measurementId,g),m.measurementId}/**
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
 */class eA{constructor(e){this.app=e}_delete(){return delete Ds[this.app.options.appId],Promise.resolve()}}let Ds={},ah=[];const ch={};let Ua="dataLayer",tA="gtag",lh,ep,uh=!1;function nA(){const n=[];if(tf()&&n.push("This is a browser extension environment."),Wy()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=ht.create("invalid-analytics-context",{errorInfo:e});at.warn(t.message)}}function rA(n,e,t){nA();const r=n.options.appId;if(!r)throw ht.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(Ds[r]!=null)throw ht.create("already-exists",{id:r});if(!uh){VI(Ua);const{wrappedGtag:i,gtagCore:a}=UI(Ds,ah,ch,Ua,tA);ep=i,lh=a,uh=!0}return Ds[r]=ZI(n,ah,ch,e,lh,Ua,t),new eA(n)}function sA(n=Ao()){n=me(n);const e=On(n,_o);return e.isInitialized()?e.getImmediate():iA(n)}function iA(n,e={}){const t=On(n,_o);if(t.isInitialized()){const s=t.getImmediate();if(Ms(e,t.getOptions()))return s;throw ht.create("already-initialized")}return t.initialize({options:e})}function tp(n,e,t,r){n=me(n),XI(ep,Ds[n.app.options.appId],e,t,r).catch(s=>at.error(s))}const dh="@firebase/analytics",hh="0.10.8";function oA(){Et(new mt(_o,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return rA(r,s,t)},"PUBLIC")),Et(new mt("analytics-internal",n,"PRIVATE")),it(dh,hh),it(dh,hh,"esm2017");function n(e){try{const t=e.getProvider(_o).getImmediate();return{logEvent:(r,s,i)=>tp(t,r,s,i)}}catch(t){throw ht.create("interop-component-reg-failed",{reason:t})}}}oA();const aA={apiKey:"AIzaSyBqeebps7CNCQw_xis2DKiGHMRYmurj_B4",authDomain:"kingcp-a0065.firebaseapp.com",projectId:"kingcp-a0065",storageBucket:"kingcp-a0065.firebasestorage.app",messagingSenderId:"550768863932",appId:"1:550768863932:web:acabd2d2584b8165a7beb9",measurementId:"G-QRVT5F6VGR"};let Ps;try{Ps=cf(aA),console.log("Firebase initialized successfully")}catch(n){throw console.error("Error initializing Firebase:",n),n}let qt,X,Al,pc;try{qt=Tw(Ps),X=uE(Ps),Al=FT(Ps),pc=sA(Ps),console.log("Firebase services initialized successfully")}catch(n){throw console.error("Error initializing Firebase services:",n),n}const cA=new jt;cA.setCustomParameters({client_id:"123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com"});const an=(n,e)=>{pc&&tp(pc,n,e)},Dn={USER_SIGNED_UP:"user_signed_up",USER_SIGNED_IN:"user_signed_in",USER_SIGNED_OUT:"user_signed_out",ENTRY_CREATED:"entry_created",ENTRY_UPDATED:"entry_updated",ENTRY_DELETED:"entry_deleted",ENTRY_VIEWED:"entry_viewed",VOTE_CAST:"vote_cast",VOTE_REMOVED:"vote_removed",PAGE_VIEW:"page_view",ERROR_OCCURRED:"error_occurred"},lA={},fh=n=>{let e;const t=new Set,r=(m,y)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const x=e;e=y??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(A=>A(e,x))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m)),destroy:()=>{(lA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},h=e=n(r,s,u);return u},uA=n=>n?fh(n):fh;var np={exports:{}},rp={},sp={exports:{}},ip={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=k;function dA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hA=typeof Object.is=="function"?Object.is:dA,fA=Kr.useState,mA=Kr.useEffect,gA=Kr.useLayoutEffect,pA=Kr.useDebugValue;function yA(n,e){var t=e(),r=fA({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return gA(function(){s.value=t,s.getSnapshot=e,Ba(s)&&i({inst:s})},[n,t,e]),mA(function(){return Ba(s)&&i({inst:s}),n(function(){Ba(s)&&i({inst:s})})},[n]),pA(t),t}function Ba(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hA(n,t)}catch{return!0}}function _A(n,e){return e()}var vA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_A:yA;ip.useSyncExternalStore=Kr.useSyncExternalStore!==void 0?Kr.useSyncExternalStore:vA;sp.exports=ip;var wA=sp.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=k,xA=wA;function bA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var EA=typeof Object.is=="function"?Object.is:bA,TA=xA.useSyncExternalStore,IA=Yo.useRef,AA=Yo.useEffect,PA=Yo.useMemo,SA=Yo.useDebugValue;rp.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=IA(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=PA(function(){function u(x){if(!h){if(h=!0,m=x,x=r(x),s!==void 0&&a.hasValue){var A=a.value;if(s(A,x))return y=A}return y=x}if(A=y,EA(m,x))return A;var b=r(x);return s!==void 0&&s(A,b)?(m=x,A):(m=x,y=b)}var h=!1,m,y,g=t===void 0?null:t;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,t,r,s]);var l=TA(n,i[0],i[1]);return AA(function(){a.hasValue=!0,a.value=l},[l]),SA(l),l};np.exports=rp;var RA=np.exports;const NA=Qp(RA),op={},{useDebugValue:CA}=Pe,{useSyncExternalStoreWithSelector:kA}=NA;let mh=!1;const jA=n=>n;function DA(n,e=jA,t){(op?"production":void 0)!=="production"&&t&&!mh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),mh=!0);const r=kA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return CA(r),r}const OA=n=>{(op?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?uA(n):n,t=(r,s)=>DA(e,r,s);return Object.assign(t,e),t},VA=n=>OA,MA={};function LA(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=u=>u===null?null:JSON.parse(u,void 0),l=(i=t.getItem(s))!=null?i:null;return l instanceof Promise?l.then(a):a(l)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const Gs=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return Gs(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return Gs(r)(t)}}}},FA=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,j)=>({...j,...v}),...e},a=!1;const l=new Set,u=new Set;let h;try{h=i.getStorage()}catch{}if(!h)return n((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...v)},r,s);const m=Gs(i.serialize),y=()=>{const v=i.partialize({...r()});let j;const I=m({state:v,version:i.version}).then(V=>h.setItem(i.name,V)).catch(V=>{j=V});if(j)throw j;return I},g=s.setState;s.setState=(v,j)=>{g(v,j),y()};const x=n((...v)=>{t(...v),y()},r,s);let A;const b=()=>{var v;if(!h)return;a=!1,l.forEach(I=>I(r()));const j=((v=i.onRehydrateStorage)==null?void 0:v.call(i,r()))||void 0;return Gs(h.getItem.bind(h))(i.name).then(I=>{if(I)return i.deserialize(I)}).then(I=>{if(I)if(typeof I.version=="number"&&I.version!==i.version){if(i.migrate)return i.migrate(I.state,I.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return I.state}).then(I=>{var V;return A=i.merge(I,(V=r())!=null?V:x),t(A,!0),y()}).then(()=>{j==null||j(A,void 0),a=!0,u.forEach(I=>I(A))}).catch(I=>{j==null||j(void 0,I)})};return s.persist={setOptions:v=>{i={...i,...v},v.getStorage&&(h=v.getStorage())},clearStorage:()=>{h==null||h.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>b(),hasHydrated:()=>a,onHydrate:v=>(l.add(v),()=>{l.delete(v)}),onFinishHydration:v=>(u.add(v),()=>{u.delete(v)})},b(),A||x},UA=(n,e)=>(t,r,s)=>{let i={storage:LA(()=>localStorage),partialize:b=>b,version:0,merge:(b,v)=>({...v,...b}),...e},a=!1;const l=new Set,u=new Set;let h=i.storage;if(!h)return n((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...b)},r,s);const m=()=>{const b=i.partialize({...r()});return h.setItem(i.name,{state:b,version:i.version})},y=s.setState;s.setState=(b,v)=>{y(b,v),m()};const g=n((...b)=>{t(...b),m()},r,s);s.getInitialState=()=>g;let x;const A=()=>{var b,v;if(!h)return;a=!1,l.forEach(I=>{var V;return I((V=r())!=null?V:g)});const j=((v=i.onRehydrateStorage)==null?void 0:v.call(i,(b=r())!=null?b:g))||void 0;return Gs(h.getItem.bind(h))(i.name).then(I=>{if(I)if(typeof I.version=="number"&&I.version!==i.version){if(i.migrate)return[!0,i.migrate(I.state,I.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,I.state];return[!1,void 0]}).then(I=>{var V;const[F,B]=I;if(x=i.merge(B,(V=r())!=null?V:g),t(x,!0),F)return m()}).then(()=>{j==null||j(x,void 0),x=r(),a=!0,u.forEach(I=>I(x))}).catch(I=>{j==null||j(void 0,I)})};return s.persist={setOptions:b=>{i={...i,...b},b.storage&&(h=b.storage)},clearStorage:()=>{h==null||h.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>A(),hasHydrated:()=>a,onHydrate:b=>(l.add(b),()=>{l.delete(b)}),onFinishHydration:b=>(u.add(b),()=>{u.delete(b)})},i.skipHydration||A(),x||g},BA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((MA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),FA(n,e)):UA(n,e),$A=BA,fi=VA()($A(n=>({user:null,token:null,isAuthenticated:!1,login:(e,t)=>{localStorage.setItem("token",t),n({user:e,token:t,isAuthenticated:!0})},logout:()=>{localStorage.removeItem("token"),n({user:null,token:null,isAuthenticated:!1})}}),{name:"auth-storage"})),ap=async(n,e,t)=>{try{if(!n||!n.includes("@"))throw new Error("Invalid email format");if(!e||e.length<6)throw new Error("Password must be at least 6 characters long");const r=await av(qt,n,e);t&&await uv(r.user,{displayName:t});const s={id:r.user.uid,email:r.user.email,displayName:r.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date};r.user.photoURL&&(s.photoURL=r.user.photoURL);try{console.log("Creating user document in Firestore:",s),await ml(Ne(X,"users",s.id),s),console.log("User document created successfully")}catch(i){console.error("Error creating user document:",i)}try{const i=await r.user.getIdToken();console.log("Got ID token for new user"),fi.getState().login(s,i),console.log("Updated auth store after registration")}catch(i){console.error("Error getting token:",i)}return an(Dn.USER_SIGNED_UP),s}catch(r){console.error("Registration error:",r);let s="Failed to register";switch(r.code){case"auth/email-already-in-use":s="This email is already registered";break;case"auth/invalid-email":s="Invalid email format";break;case"auth/operation-not-allowed":s="Email/password accounts are not enabled. Please contact support.";break;case"auth/weak-password":s="Password should be at least 6 characters";break;default:s=r.message||"Failed to register"}throw an(Dn.ERROR_OCCURRED,{error_message:s,error_code:r.code}),new Error(s)}},cp=async(n,e)=>{try{console.log("Attempting to login with email:",n);const t=await cv(qt,n,e);console.log("Login successful, fetching user data");let r;try{const i=await pt(Ne(X,"users",t.user.uid));i.exists()?(console.log("User document found"),r=i.data()):(console.log("User document not found, creating one"),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},t.user.photoURL&&(r.photoURL=t.user.photoURL),await ml(Ne(X,"users",r.id),r))}catch(i){console.error("Error fetching/creating user document:",i),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,photoURL:t.user.photoURL||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date}}const s=await t.user.getIdToken();return console.log("Got ID token"),fi.getState().login(r,s),console.log("Updated auth store"),an(Dn.USER_SIGNED_IN),r}catch(t){console.error("Login error:",t);let r="Failed to login";switch(t.code){case"auth/invalid-email":r="Invalid email format";break;case"auth/user-disabled":r="This account has been disabled";break;case"auth/user-not-found":r="No account found with this email";break;case"auth/wrong-password":r="Incorrect password";break;case"auth/too-many-requests":r="Too many failed login attempts. Please try again later.";break;default:r=t.message||"Failed to login"}throw an(Dn.ERROR_OCCURRED,{error_message:r,error_code:t.code}),new Error(r)}},lp=async()=>{try{const n=new jt;return n.setCustomParameters({prompt:"select_account",login_hint:"user@gmail.com"}),n.addScope("https://www.googleapis.com/auth/userinfo.email"),n.addScope("https://www.googleapis.com/auth/userinfo.profile"),await Lv(qt,n),null}catch(n){console.error("Google login error:",n);let e="Failed to login with Google";throw n.code==="auth/popup-closed-by-user"?e="Login was cancelled":n.code==="auth/popup-blocked"?e="Login popup was blocked. Please allow popups for this site.":n.code==="auth/cancelled-popup-request"&&(e="Another login attempt is in progress"),an(Dn.ERROR_OCCURRED,{method:"google",error:e}),new Error(e)}},qA=async()=>{try{const n=await Uv(qt);if(n){const e=n.user,t=await e.getIdToken(),r=await pt(Ne(X,"users",e.uid));let s;return r.exists()?s=r.data():(s={id:e.uid,email:e.email,displayName:e.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},e.photoURL&&(s.photoURL=e.photoURL),await ml(Ne(X,"users",s.id),s),an(Dn.USER_SIGNED_UP,{method:"google"})),fi.getState().login(s,t),an(Dn.USER_SIGNED_IN,{method:"google"}),window.location.href="/dashboard",s}return null}catch(n){return console.error("Error handling redirect result:",n),null}},WA=async n=>{try{await ov(qt,n)}catch(e){throw an(Dn.ERROR_OCCURRED,{error_message:e.message,error_code:e.code}),e}},HA=n=>fv(qt,n);function Pt(){const[n,e]=k.useState(null),[t,r]=k.useState(!0),[s,i]=k.useState(null);k.useEffect(()=>{const l=HA(async u=>{try{if(u){console.log("Firebase user authenticated:",u.uid);const h=await pt(Ne(X,"users",u.uid));if(h.exists()){const m=h.data();console.log("User data from Firestore:",m),console.log("isAdmin status:",m.isAdmin),e(m)}else console.log("User document not found in Firestore"),e(null)}else console.log("No Firebase user authenticated"),e(null)}catch(h){console.error("Error in auth state change:",h),i(h)}finally{r(!1)}});return()=>l()},[]);const a={user:n,loading:t,error:s,isAuthenticated:!!n,isAdmin:(n==null?void 0:n.isAdmin)||!1};return console.log("useAuth hook returning:",a),a}function zA({title:n,titleId:e,...t},r){return k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?k.createElement("title",{id:e},n):null,k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const GA=k.forwardRef(zA);function KA({title:n,titleId:e,...t},r){return k.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?k.createElement("title",{id:e},n):null,k.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const QA=k.forwardRef(KA),YA="/projectCP/assets/Kinglogo-DK-YDYIt.png",XA=[{name:"Home",href:"/",public:!0},{name:"Submit Design",href:"/submit",public:!1},{name:"Vote",href:"/vote",public:!1},{name:"Winners",href:"/winners",public:!0}];function gh(...n){return n.filter(Boolean).join(" ")}function JA(){const{user:n,isAuthenticated:e,logout:t}=fi(),r=At(),s=()=>{t(),r("/")},i=XA.filter(a=>a.public||e);return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(ba,{as:"nav",className:"bg-white shadow",children:({open:a})=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex h-16 justify-between",children:[c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex flex-shrink-0 items-center",children:c.jsxs(re,{to:"/",className:"flex items-center",children:[c.jsx("img",{src:YA,alt:"King Logo",className:"h-8 w-auto mr-2"}),c.jsx("span",{className:"text-xl font-bold text-primary-600",children:"King Ideation Platform"})]})}),c.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[i.map(l=>c.jsx(re,{to:l.href,className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:l.name},l.name)),(n==null?void 0:n.isAdmin)&&c.jsx(re,{to:"/admin",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:"Admin"})]})]}),c.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e?c.jsxs(gs,{as:"div",className:"relative ml-3",children:[c.jsxs(gs.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:[c.jsx("span",{className:"sr-only",children:"Open user menu"}),c.jsx("div",{className:"h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-primary-800",children:n==null?void 0:n.email.charAt(0).toUpperCase()})})]}),c.jsx(Zp,{as:k.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:c.jsxs(gs.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[c.jsx(gs.Item,{children:({active:l})=>c.jsx(re,{to:"/profile",className:gh(l?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Profile"})}),c.jsx(gs.Item,{children:({active:l})=>c.jsx("button",{onClick:s,className:gh(l?"bg-gray-100":"","block w-full text-left px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})]})})]}):c.jsxs("div",{className:"space-x-4",children:[c.jsx(re,{to:"/login",className:"text-gray-500 hover:text-gray-700",children:"Sign in"}),c.jsx(re,{to:"/register",className:"btn btn-primary",children:"Sign up"})]})}),c.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:c.jsxs(ba.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500",children:[c.jsx("span",{className:"sr-only",children:"Open main menu"}),a?c.jsx(QA,{className:"block h-6 w-6","aria-hidden":"true"}):c.jsx(GA,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),c.jsxs(ba.Panel,{className:"sm:hidden",children:[c.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[i.map(l=>c.jsx(re,{to:l.href,className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:l.name},l.name)),(n==null?void 0:n.isAdmin)&&c.jsx(re,{to:"/admin",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:"Admin"})]}),c.jsx("div",{className:"border-t border-gray-200 pb-3 pt-4",children:e?c.jsxs("div",{className:"space-y-1",children:[c.jsx(re,{to:"/profile",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Profile"}),c.jsx("button",{onClick:s,className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign out"})]}):c.jsxs("div",{className:"space-y-1",children:[c.jsx(re,{to:"/login",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign in"}),c.jsx(re,{to:"/register",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign up"})]})})]})]})}),c.jsx("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:c.jsx(Yp,{})})]})}function ZA(){const[n,e]=k.useState(""),[t,r]=k.useState(""),[s,i]=k.useState(""),[a,l]=k.useState(!1),u=At(),h=async y=>{if(y.preventDefault(),!n||!t){i("Please enter both email and password");return}try{l(!0),i(""),console.log("Attempting login with email:",n),await cp(n,t),console.log("Login successful, navigating to dashboard"),u("/dashboard")}catch(g){console.error("Login form error:",g),i(g.message||"Failed to login")}finally{l(!1)}},m=async()=>{i("");try{console.log("Attempting Google login"),await lp()}catch(y){console.error("Google login error:",y),i(y.message||"Failed to login with Google")}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(re,{to:"/register",className:"font-medium text-primary-600 hover:text-primary-500",children:"create a new account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:h,children:[s&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:s})}),c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:y=>e(y.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:y=>r(y.target.value)})]})]}),c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("div",{className:"text-sm",children:c.jsx(re,{to:"/reset-password",className:"font-medium text-primary-600 hover:text-primary-500",children:"Forgot your password?"})})}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Signing in...":"Sign in"})})]}),c.jsxs("div",{className:"mt-6",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-gray-300"})}),c.jsx("div",{className:"relative flex justify-center text-sm",children:c.jsx("span",{className:"px-2 bg-gray-50 text-gray-500",children:"Or continue with"})})]}),c.jsx("div",{className:"mt-6",children:c.jsxs("button",{onClick:m,disabled:a,className:"w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:[c.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Sign in with Google"]})})]})]})})}function eP(){const[n,e]=k.useState(""),[t,r]=k.useState(""),[s,i]=k.useState(""),[a,l]=k.useState(""),[u,h]=k.useState(""),[m,y]=k.useState(!1),g=At(),x=async b=>{if(b.preventDefault(),!n||!t||!s){h("Please fill out all required fields");return}if(t!==s){h("Passwords do not match");return}if(t.length<6){h("Password must be at least 6 characters long");return}try{y(!0),h(""),console.log("Attempting registration with email:",n);try{await ap(n,t,a||void 0),console.log("Registration successful, navigating to dashboard"),g("/dashboard")}catch(v){console.error("Registration error:",v),v.message&&v.message.includes("already registered")?h("This email is already registered. Please log in instead."):h(v.message||"Failed to register")}}finally{y(!1)}},A=b=>{const{name:v,value:j}=b.target;switch(v){case"email":e(j);break;case"password":r(j);break;case"confirmPassword":i(j);break;case"displayName":l(j);break}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(re,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:x,children:[u&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:u})}),c.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"display-name",className:"sr-only",children:"Display Name"}),c.jsx("input",{id:"display-name",name:"displayName",type:"text",autoComplete:"name",className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Display Name",value:a,onChange:A})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:A})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),c.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:A})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"confirm-password",className:"sr-only",children:"Confirm Password"}),c.jsx("input",{id:"confirm-password",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password",value:s,onChange:A})]})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:m,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",children:m?"Creating account...":"Create account"})})]})]})})}function tP(){const[n,e]=k.useState(""),[t,r]=k.useState(null),[s,i]=k.useState(!1),[a,l]=k.useState(!1),u=async h=>{h.preventDefault(),r(null),i(!1),l(!0);try{await WA(n),i(!0)}catch(m){r(m.message||"Failed to send reset email")}finally{l(!1)}};return c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Reset your password"}),c.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",c.jsx(re,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),c.jsxs("form",{className:"mt-8 space-y-6",onSubmit:u,children:[t&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:t})}),s&&c.jsx("div",{className:"rounded-md bg-green-50 p-4",children:c.jsx("div",{className:"text-sm text-green-700",children:"Password reset email sent! Please check your inbox."})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),c.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:h=>e(h.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Sending...":"Send reset link"})})]})]})})}function nP(){var l,u;const{user:n}=Pt(),[e,t]=k.useState(null),[r,s]=k.useState(!0),[i,a]=k.useState(null);return k.useEffect(()=>{(async()=>{if(n)try{const m=Qe(be(X,"entries"),ke("userId","==",n.id)),g=(await rt(m)).docs.map(v=>({id:v.id,...v.data()}));let x=0,A=0,b=[];if(g.length>0){const v=Qe(be(X,"votes"),ke("entryId","in",g.map(I=>I.id)));b=(await rt(v)).docs.map(I=>({id:I.id,...I.data()})),x=b.length,A=x>0?b.reduce((I,V)=>I+(V.rating||0),0)/x:0}t({totalEntries:g.length,totalVotes:x,averageRating:A,entries:g})}catch(m){a(m.message||"Failed to fetch user statistics")}finally{s(!1)}})()},[n]),r?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):i?c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:i})})}):c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsxs("div",{className:"flex items-center space-x-4",children:[n!=null&&n.photoURL?c.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):c.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-2xl text-primary-600",children:((l=n==null?void 0:n.displayName)==null?void 0:l[0])||((u=n==null?void 0:n.email)==null?void 0:u[0])||"?"})}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),c.jsx("p",{className:"text-gray-500",children:n==null?void 0:n.email})]})]}),c.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3",children:[c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Entries"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalEntries)||0})]})}),c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Votes Received"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalVotes)||0})]})}),c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Average Rating"}),c.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.averageRating.toFixed(1))||"0.0"})]})})]}),c.jsxs("div",{className:"mt-8",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Your Entries"}),c.jsx("div",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:e==null?void 0:e.entries.map(h=>c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[c.jsx("img",{src:h.imageUrl,alt:h.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:h.title}),h.description&&c.jsx("p",{className:"mt-2 text-sm text-gray-500",children:h.description}),c.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[c.jsxs("div",{className:"text-sm text-gray-500",children:[h.voteCount," votes"]}),c.jsxs("div",{className:"text-sm font-medium text-primary-600",children:["Rating: ",h.voteCount>0?(h.voteCount/e.totalVotes*100).toFixed(1):"0.0","%"]})]})]})]},h.id))})]})]})})}const rP=async n=>{const e={...n,createdAt:fe.now(),updatedAt:fe.now(),voteCount:0,averageRating:0};return{id:(await Ho(be(X,"entries"),e)).id,...e}},Pl=async n=>{try{console.log(`Fetching entries for tournament ${n}...`);const e=Qe(be(X,"entries"),ke("tournamentId","==",n)),r=(await rt(e)).docs.map(s=>({id:s.id,...s.data(),createdAt:Se(s.data().createdAt),updatedAt:Se(s.data().updatedAt)}));return r.sort((s,i)=>i.createdAt.getTime()-s.createdAt.getTime()),console.log(`Found ${r.length} entries for tournament ${n}`),r}catch(e){return console.error(`Error getting entries for tournament ${n}:`,e),[]}},sP=async(n,e)=>{try{console.log(`Fetching entries for user ${e} in tournament ${n}...`);const t=be(X,"entries"),r=Qe(t,ke("tournamentId","==",n),ke("userId","==",e)),i=(await rt(r)).docs.map(a=>{const l=a.data();return{id:a.id,...l,createdAt:l.createdAt instanceof fe?l.createdAt.toDate():l.createdAt,updatedAt:l.updatedAt instanceof fe?l.updatedAt.toDate():l.updatedAt}});return console.log(`Found ${i.length} entries for user ${e} in tournament ${n}`),i}catch(t){throw console.error("Error fetching user entries:",t),t}},iP=async n=>{console.log("Creating vote with data:",n);try{const e=Qe(be(X,"votes"),ke("userId","==",n.userId),ke("entryId","==",n.entryId));if(!(await rt(e)).empty)throw console.log("User already voted for this entry"),new Error("You have already voted for this entry");const r={...n,createdAt:fe.now()},s=Ne(X,"entries",n.entryId),i=await pt(s);if(!i.exists())throw console.error("Entry not found:",n.entryId),new Error("Entry does not exist");const a=i.data();console.log("Entry before update:",JSON.stringify(a,null,2));const l=a.voteCount||0,u=(a.averageRating||0)*l,h=l+1,m=u+n.rating,y=m/h;console.log("Vote calculation:",{currentVoteCount:l,currentTotalPoints:u,newVoteCount:h,newTotalPoints:m,newAverageRating:y,newRating:n.rating});const g=await Ho(be(X,"votes"),r),x={voteCount:h,averageRating:y,updatedAt:fe.now()};await hi(s,x),console.log("Entry updated with new vote stats:",x);const A=await pt(s);return A.exists()&&console.log("Updated entry data:",JSON.stringify(A.data(),null,2)),{id:g.id,...r}}catch(e){throw console.error("Error in createVote:",e),e}},up=async n=>{try{console.log(`Fetching votes for tournament ${n}...`);const e=Qe(be(X,"votes"),ke("tournamentId","==",n)),r=(await rt(e)).docs.map(s=>({id:s.id,...s.data()}));return console.log(`Found ${r.length} votes for tournament ${n}`),r}catch(e){return console.error(`Error getting votes for tournament ${n}:`,e),[]}};async function oP(n,e){try{console.log(`Fetching votes for user ${e} in tournament ${n}...`);const t=be(X,"votes"),r=Qe(t,ke("tournamentId","==",n),ke("userId","==",e)),i=(await rt(r)).docs.map(a=>{const l=a.data();return{id:a.id,...l,createdAt:l.createdAt instanceof fe?l.createdAt.toDate():l.createdAt}});return console.log(`Found ${i.length} votes by user for tournament ${n}`),i}catch(t){throw console.error("Error fetching user votes:",t),t}}const aP=async(n,e,t)=>{try{const r=qt.currentUser;if(!r)throw new Error("You must be logged in to vote");console.log(`Submitting vote for entry ${n} with rating ${e} in tournament ${t}`);const s=await iP({userId:r.uid,entryId:n,tournamentId:t,rating:e});console.log(`Vote created successfully for entry ${n}:`,s)}catch(r){throw console.error("Error submitting vote:",r),r}},cP=async(n,e)=>{const t=kg(Al,e);return await VT(t,n),await MT(t)},lP=async n=>{const e=kg(Al,n);await LT(e)},uP=async({title:n,description:e,image:t,userId:r,tournamentId:s})=>{try{const a=(await pt(Ne(X,"users",r))).data(),l=`entries/${s}/${r}/${Date.now()}_${t.name}`,u=await cP(t,l);return await rP({userId:r,tournamentId:s,title:n,description:e,imageUrl:u,userDisplayName:(a==null?void 0:a.displayName)||"Anonymous",userPhotoURL:(a==null?void 0:a.photoURL)||null,status:"approved"})}catch(i){throw console.error("Error submitting entry:",i),i}},Se=n=>n?n instanceof Date?n:n!=null&&n.toDate?n.toDate():new Date(n):new Date,dp=async()=>{try{console.log("Fetching all tournaments...");const e=(await rt(be(X,"tournaments"))).docs.map(t=>{const r=t.data();return{...r,id:t.id,submissionPhaseStart:Se(r.submissionPhaseStart),submissionPhaseEnd:Se(r.submissionPhaseEnd),votingPhaseStart:Se(r.votingPhaseStart),votingPhaseEnd:Se(r.votingPhaseEnd),createdAt:Se(r.createdAt),updatedAt:Se(r.updatedAt)}});return e.sort((t,r)=>r.createdAt.getTime()-t.createdAt.getTime()),console.log(`Found ${e.length} tournaments`),e}catch(n){return console.error("Error getting tournaments:",n),[]}},mi=async n=>{try{console.log(`Fetching tournament with ID ${n}...`);const e=await pt(Ne(X,"tournaments",n));if(!e.exists())return console.log(`Tournament with ID ${n} not found`),null;const t=e.data(),r={...t,id:e.id,submissionPhaseStart:Se(t.submissionPhaseStart),submissionPhaseEnd:Se(t.submissionPhaseEnd),votingPhaseStart:Se(t.votingPhaseStart),votingPhaseEnd:Se(t.votingPhaseEnd),createdAt:Se(t.createdAt),updatedAt:Se(t.updatedAt)};return console.log("Tournament found:",r),r}catch(e){throw console.error(`Error getting tournament with ID ${n}:`,e),e}},Xo=async()=>{try{const e=(await dp()).filter(r=>r.currentPhase==="submission"||r.currentPhase==="voting");if(e.length>0)return e.sort((r,s)=>s.createdAt.getTime()-r.createdAt.getTime()),e[0];console.log("No active tournaments found in 'tournaments' collection, checking legacy location");const t=await pt(Ne(X,"tournament","state"));if(t.exists()){console.log("Found tournament state in legacy location");const r=t.data(),s={...r,id:"state",tournamentId:"legacy",name:"Legacy Tournament",ownerId:"admin",submissionPhaseStart:Se(r.submissionPhaseStart),submissionPhaseEnd:Se(r.submissionPhaseEnd),votingPhaseStart:Se(r.votingPhaseStart),votingPhaseEnd:Se(r.votingPhaseEnd),createdAt:Se(r.createdAt||new Date),updatedAt:Se(r.updatedAt||new Date)};console.log("Migrating legacy tournament to new collection...");const i=await Ho(be(X,"tournaments"),s);return{...s,id:i.id}}return console.log("No tournament state found"),null}catch(n){throw console.error("Error getting tournament state:",n),n}},xr=async n=>{try{if(!n.id)throw new Error("Tournament ID is required for updates");const e=n.id;console.log(`Updating tournament ${e} with:`,n);const{id:t,...r}=n;await hi(Ne(X,"tournaments",e),{...r,updatedAt:new Date}),console.log(`Tournament ${e} updated successfully`)}catch(e){throw console.error("Error updating tournament:",e),e}},dP=async(n,e,t=7,r=7)=>{try{console.log(`Creating new tournament "${n}" for user ${e}`);const s=new Date,i=new Date(s.getTime()+t*24*60*60*1e3),a=new Date(i.getTime()+r*24*60*60*1e3),l={name:n,ownerId:e,tournamentId:`tournament_${Date.now()}`,currentPhase:"submission",submissionPhaseStart:s,submissionPhaseEnd:i,votingPhaseStart:i,votingPhaseEnd:a,maxEntriesPerUser:null,maxVotesPerUser:null,votingQuestion:"How would you rate this entry?",createdAt:s,updatedAt:s,isPasswordProtected:!1,password:null};console.log("Tournament data:",l);const u=await Ho(be(X,"tournaments"),l);return await hi(Ne(X,"users",e),{isAdmin:!0,updatedAt:s}),console.log(`User ${e} has been granted admin rights as tournament creator`),{...l,id:u.id}}catch(s){throw console.error("Error creating tournament:",s),s}},hP=async n=>{try{console.log(`Deleting tournament with ID: ${n}`);const e=qt.currentUser;if(!e)throw new Error("You must be logged in to delete a tournament");const t=Ne(X,"tournaments",n),r=await pt(t);if(!r.exists())throw new Error("Tournament not found");const s=r.data(),i=(await pt(Ne(X,"users",e.uid))).data();if(s.ownerId!==e.uid&&!(i!=null&&i.isAdmin))throw new Error("You do not have permission to delete this tournament");const a=await Pl(n),l=await up(n),u=IE(X);for(const h of l)u.delete(Ne(X,"votes",h.id));for(const h of a)if(u.delete(Ne(X,"entries",h.id)),h.imageUrl)try{const m=h.imageUrl.split("/").slice(3).join("/").split("?")[0],y=decodeURIComponent(m);await lP(`entries/${n}/${h.userId}/${y.split("/").pop()}`)}catch(m){console.error(`Failed to delete image for entry ${h.id}:`,m)}u.delete(t),await u.commit(),console.log(`Successfully deleted tournament ${n} with ${a.length} entries and ${l.length} votes`)}catch(e){throw console.error("Error deleting tournament:",e),e}},fP=async(n,e,t)=>{try{console.log(`Updating password for tournament ${n}`);const r=qt.currentUser;if(!r)throw new Error("You must be logged in to update tournament settings");const s=Ne(X,"tournaments",n),i=await pt(s);if(!i.exists())throw new Error("Tournament not found");const a=i.data(),l=(await pt(Ne(X,"users",r.uid))).data();if(a.ownerId!==r.uid&&!(l!=null&&l.isAdmin))throw new Error("You do not have permission to update this tournament");await hi(s,{isPasswordProtected:e,password:e?t:null,updatedAt:fe.now()}),console.log(`Successfully updated password protection for tournament ${n}`)}catch(r){throw console.error("Error updating tournament password:",r),r}},mP=async(n,e)=>{try{console.log(`Checking password for tournament ${n}...`);const t=await mi(n);if(!t)return console.error("Tournament not found"),!1;if(console.log(`Tournament found: ${t.name}, isPasswordProtected: ${t.isPasswordProtected}`),!t.isPasswordProtected)return console.log("Tournament is not password protected"),!0;const r=t.password===e;return console.log(`Password comparison result: ${r}`),r}catch(t){return console.error("Error checking tournament password:",t),!1}},pn=n=>{try{return n?n instanceof Date?n:typeof n=="object"?typeof n.toDate=="function"?n.toDate():typeof n.toMillis=="function"?new Date(n.toMillis()):new Date(n):typeof n=="number"?new Date(n):typeof n=="string"?new Date(n):new Date:new Date}catch(e){return console.error("Error converting timestamp to Date:",e),new Date}};async function Sl(n){try{console.log(`Fetching approved entries for tournament ${n}...`);const e=be(X,"entries"),t=Qe(e,ke("tournamentId","==",n),ke("status","==","approved")),s=(await rt(t)).docs.map(i=>{const a=i.data();return{id:i.id,...a,createdAt:pn(a.createdAt),updatedAt:pn(a.updatedAt)}});return console.log(`Found ${s.length} approved entries for tournament ${n}`),s}catch(e){throw console.error("Error fetching approved entries:",e),e}}async function gP(){try{console.log("Fetching all tournaments...");const n=be(X,"tournaments"),t=(await rt(n)).docs.map(r=>{const s=r.data();return{id:r.id,...s,createdAt:pn(s.createdAt),updatedAt:pn(s.updatedAt),submissionPhaseStart:pn(s.submissionPhaseStart),submissionPhaseEnd:pn(s.submissionPhaseEnd),votingPhaseStart:pn(s.votingPhaseStart),votingPhaseEnd:pn(s.votingPhaseEnd)}});return console.log(`Found ${t.length} tournaments`),t}catch(n){throw console.error("Error fetching tournaments:",n),n}}const hp=6048e5,pP=864e5,Bi=43200,ph=1440,yh=Symbol.for("constructDateFrom");function cn(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&yh in n?n[yh](e):n instanceof Date?new n.constructor(e):new Date(e)}function je(n,e){return cn(e||n,n)}let yP={};function gi(){return yP}function Ks(n,e){var l,u,h,m;const t=gi(),r=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,s=je(n,e==null?void 0:e.in),i=s.getDay(),a=(i<r?7:0)+i-r;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function vo(n,e){return Ks(n,{...e,weekStartsOn:1})}function fp(n,e){const t=je(n,e==null?void 0:e.in),r=t.getFullYear(),s=cn(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=vo(s),a=cn(t,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);const l=vo(a);return t.getTime()>=i.getTime()?r+1:t.getTime()>=l.getTime()?r:r-1}function wo(n){const e=je(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Jo(n,...e){const t=cn.bind(null,n||e.find(r=>typeof r=="object"));return e.map(t)}function _h(n,e){const t=je(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function _P(n,e,t){const[r,s]=Jo(t==null?void 0:t.in,n,e),i=_h(r),a=_h(s),l=+i-wo(i),u=+a-wo(a);return Math.round((l-u)/pP)}function vP(n,e){const t=fp(n,e),r=cn(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),vo(r)}function Xi(n,e){const t=+je(n)-+je(e);return t<0?-1:t>0?1:t}function wP(n){return cn(n,Date.now())}function xP(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function bP(n){return!(!xP(n)&&typeof n!="number"||isNaN(+je(n)))}function EP(n,e,t){const[r,s]=Jo(t==null?void 0:t.in,n,e),i=r.getFullYear()-s.getFullYear(),a=r.getMonth()-s.getMonth();return i*12+a}function TP(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function IP(n,e){return+je(n)-+je(e)}function AP(n,e){const t=je(n,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function PP(n,e){const t=je(n,e==null?void 0:e.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function SP(n,e){const t=je(n,e==null?void 0:e.in);return+AP(t,e)==+PP(t,e)}function RP(n,e,t){const[r,s,i]=Jo(t==null?void 0:t.in,n,n,e),a=Xi(s,i),l=Math.abs(EP(s,i));if(l<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-a*l);let u=Xi(s,i)===-a;SP(r)&&l===1&&Xi(r,i)===1&&(u=!1);const h=a*(l-+u);return h===0?0:h}function NP(n,e,t){const r=IP(n,e)/1e3;return TP(t==null?void 0:t.roundingMethod)(r)}function CP(n,e){const t=je(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const kP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},jP=(n,e,t)=>{let r;const s=kP[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function $a(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const DP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},OP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},VP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},MP={date:$a({formats:DP,defaultWidth:"full"}),time:$a({formats:OP,defaultWidth:"full"}),dateTime:$a({formats:VP,defaultWidth:"full"})},LP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},FP=(n,e,t,r)=>LP[n];function _s(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,l=t!=null&&t.width?String(t.width):a;s=n.formattingValues[l]||n.formattingValues[a]}else{const a=n.defaultWidth,l=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[l]||n.values[a]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const UP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},BP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$P={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},qP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},WP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},HP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},zP=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},GP={ordinalNumber:zP,era:_s({values:UP,defaultWidth:"wide"}),quarter:_s({values:BP,defaultWidth:"wide",argumentCallback:n=>n-1}),month:_s({values:$P,defaultWidth:"wide"}),day:_s({values:qP,defaultWidth:"wide"}),dayPeriod:_s({values:WP,defaultWidth:"wide",formattingValues:HP,defaultFormattingWidth:"wide"})};function vs(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const a=i[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(l)?QP(l,y=>y.test(a)):KP(l,y=>y.test(a));let h;h=n.valueCallback?n.valueCallback(u):u,h=t.valueCallback?t.valueCallback(h):h;const m=e.slice(a.length);return{value:h,rest:m}}}function KP(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function QP(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function YP(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let a=n.valueCallback?n.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const XP=/^(\d+)(th|st|nd|rd)?/i,JP=/\d+/i,ZP={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eS={any:[/^b/i,/^(a|c)/i]},tS={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nS={any:[/1/i,/2/i,/3/i,/4/i]},rS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sS={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},iS={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},oS={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},aS={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},cS={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},lS={ordinalNumber:YP({matchPattern:XP,parsePattern:JP,valueCallback:n=>parseInt(n,10)}),era:vs({matchPatterns:ZP,defaultMatchWidth:"wide",parsePatterns:eS,defaultParseWidth:"any"}),quarter:vs({matchPatterns:tS,defaultMatchWidth:"wide",parsePatterns:nS,defaultParseWidth:"any",valueCallback:n=>n+1}),month:vs({matchPatterns:rS,defaultMatchWidth:"wide",parsePatterns:sS,defaultParseWidth:"any"}),day:vs({matchPatterns:iS,defaultMatchWidth:"wide",parsePatterns:oS,defaultParseWidth:"any"}),dayPeriod:vs({matchPatterns:aS,defaultMatchWidth:"any",parsePatterns:cS,defaultParseWidth:"any"})},mp={code:"en-US",formatDistance:jP,formatLong:MP,formatRelative:FP,localize:GP,match:lS,options:{weekStartsOn:0,firstWeekContainsDate:1}};function uS(n,e){const t=je(n,e==null?void 0:e.in);return _P(t,CP(t))+1}function dS(n,e){const t=je(n,e==null?void 0:e.in),r=+vo(t)-+vP(t);return Math.round(r/hp)+1}function gp(n,e){var m,y,g,x;const t=je(n,e==null?void 0:e.in),r=t.getFullYear(),s=gi(),i=(e==null?void 0:e.firstWeekContainsDate)??((y=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(g=s.locale)==null?void 0:g.options)==null?void 0:x.firstWeekContainsDate)??1,a=cn((e==null?void 0:e.in)||n,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const l=Ks(a,e),u=cn((e==null?void 0:e.in)||n,0);u.setFullYear(r,0,i),u.setHours(0,0,0,0);const h=Ks(u,e);return+t>=+l?r+1:+t>=+h?r:r-1}function hS(n,e){var l,u,h,m;const t=gi(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=gp(n,e),i=cn((e==null?void 0:e.in)||n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Ks(i,e)}function fS(n,e){const t=je(n,e==null?void 0:e.in),r=+Ks(t,e)-+hS(t,e);return Math.round(r/hp)+1}function ue(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const mn={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return ue(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):ue(t+1,2)},d(n,e){return ue(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return ue(n.getHours()%12||12,e.length)},H(n,e){return ue(n.getHours(),e.length)},m(n,e){return ue(n.getMinutes(),e.length)},s(n,e){return ue(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return ue(s,e.length)}},br={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},vh={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return mn.y(n,e)},Y:function(n,e,t,r){const s=gp(n,r),i=s>0?s:1-s;if(e==="YY"){const a=i%100;return ue(a,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):ue(i,e.length)},R:function(n,e){const t=fp(n);return ue(t,e.length)},u:function(n,e){const t=n.getFullYear();return ue(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ue(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ue(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return mn.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return ue(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=fS(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):ue(s,e.length)},I:function(n,e,t){const r=dS(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):ue(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):mn.d(n,e)},D:function(n,e,t){const r=uS(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):ue(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ue(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ue(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return ue(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=br.noon:r===0?s=br.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=br.evening:r>=12?s=br.afternoon:r>=4?s=br.morning:s=br.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return mn.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):mn.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):ue(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):ue(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):mn.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):mn.s(n,e)},S:function(n,e){return mn.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return xh(r);case"XXXX":case"XX":return Wn(r);case"XXXXX":case"XXX":default:return Wn(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return xh(r);case"xxxx":case"xx":return Wn(r);case"xxxxx":case"xxx":default:return Wn(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+wh(r,":");case"OOOO":default:return"GMT"+Wn(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+wh(r,":");case"zzzz":default:return"GMT"+Wn(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return ue(r,e.length)},T:function(n,e,t){return ue(+n,e.length)}};function wh(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+ue(i,2)}function xh(n,e){return n%60===0?(n>0?"-":"+")+ue(Math.abs(n)/60,2):Wn(n,e)}function Wn(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=ue(Math.trunc(r/60),2),i=ue(r%60,2);return t+s+e+i}const bh=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},pp=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},mS=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return bh(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",bh(r,e)).replace("{{time}}",pp(s,e))},gS={p:pp,P:mS},pS=/^D+$/,yS=/^Y+$/,_S=["D","DD","YY","YYYY"];function vS(n){return pS.test(n)}function wS(n){return yS.test(n)}function xS(n,e,t){const r=bS(n,e,t);if(console.warn(r),_S.includes(n))throw new RangeError(r)}function bS(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ES=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,TS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,IS=/^'([^]*?)'?$/,AS=/''/g,PS=/[a-zA-Z]/;function en(n,e,t){var m,y,g,x;const r=gi(),s=r.locale??mp,i=r.firstWeekContainsDate??((y=(m=r.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??1,a=r.weekStartsOn??((x=(g=r.locale)==null?void 0:g.options)==null?void 0:x.weekStartsOn)??0,l=je(n,t==null?void 0:t.in);if(!bP(l))throw new RangeError("Invalid time value");let u=e.match(TS).map(A=>{const b=A[0];if(b==="p"||b==="P"){const v=gS[b];return v(A,s.formatLong)}return A}).join("").match(ES).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const b=A[0];if(b==="'")return{isToken:!1,value:SS(A)};if(vh[b])return{isToken:!0,value:A};if(b.match(PS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const h={firstWeekContainsDate:i,weekStartsOn:a,locale:s};return u.map(A=>{if(!A.isToken)return A.value;const b=A.value;(wS(b)||vS(b))&&xS(b,e,String(n));const v=vh[b[0]];return v(l,b,s.localize,h)}).join("")}function SS(n){const e=n.match(IS);return e?e[1].replace(AS,"'"):n}function RS(n,e,t){const r=gi(),s=(t==null?void 0:t.locale)??r.locale??mp,i=2520,a=Xi(n,e);if(isNaN(a))throw new RangeError("Invalid time value");const l=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:a}),[u,h]=Jo(t==null?void 0:t.in,...a>0?[e,n]:[n,e]),m=NP(h,u),y=(wo(h)-wo(u))/1e3,g=Math.round((m-y)/60);let x;if(g<2)return t!=null&&t.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,l):m<10?s.formatDistance("lessThanXSeconds",10,l):m<20?s.formatDistance("lessThanXSeconds",20,l):m<40?s.formatDistance("halfAMinute",0,l):m<60?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",1,l):g===0?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",g,l);if(g<45)return s.formatDistance("xMinutes",g,l);if(g<90)return s.formatDistance("aboutXHours",1,l);if(g<ph){const A=Math.round(g/60);return s.formatDistance("aboutXHours",A,l)}else{if(g<i)return s.formatDistance("xDays",1,l);if(g<Bi){const A=Math.round(g/ph);return s.formatDistance("xDays",A,l)}else if(g<Bi*2)return x=Math.round(g/Bi),s.formatDistance("aboutXMonths",x,l)}if(x=RP(h,u),x<12){const A=Math.round(g/Bi);return s.formatDistance("xMonths",A,l)}else{const A=x%12,b=Math.trunc(x/12);return A<3?s.formatDistance("aboutXYears",b,l):A<9?s.formatDistance("overXYears",b,l):s.formatDistance("almostXYears",b+1,l)}}function xn(n,e){return RS(n,wP(n),e)}function NS(){const n=At(),[e,t]=k.useState("tournaments"),[r,s]=k.useState(null),[i,a]=k.useState(!0);k.useEffect(()=>{(async()=>{try{const y=await Xo();s(y)}catch(y){console.error("Error fetching tournament state:",y)}finally{a(!1)}})()},[]);const l=()=>{if(!r)return"Unknown";switch(r.currentPhase){case"submission":return"Submission Phase";case"voting":return"Voting Phase";case"completed":return"Completed";default:return"Unknown"}},u=()=>{if(!r)return"Unknown";const m=new Date;let y;if(r.currentPhase==="submission")y=r.submissionPhaseEnd;else if(r.currentPhase==="voting")y=r.votingPhaseEnd;else return"Tournament completed";const g=y.getTime()-m.getTime();if(g<=0)return"Ended";const x=Math.floor(g/(1e3*60*60*24)),A=Math.floor(g%(1e3*60*60*24)/(1e3*60*60));return`${x}d ${A}h remaining`},h=()=>{r&&r.id?n(`/admin/tournament/${r.id}/settings`):(console.error("No tournament ID available for navigation"),n("/admin/settings"))};return c.jsx("div",{className:"min-h-screen bg-gray-100",children:c.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"px-4 py-6 sm:px-0",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Admin Dashboard"}),c.jsx("div",{className:"border-b border-gray-200 mt-6",children:c.jsxs("nav",{className:"-mb-px flex space-x-8",children:[c.jsx("button",{onClick:()=>t("tournaments"),className:`${e==="tournaments"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Tournament Management"}),c.jsx("button",{onClick:()=>t("entries"),className:`${e==="entries"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Entries"}),c.jsx("button",{onClick:()=>t("users"),className:`${e==="users"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Users"})]})}),c.jsxs("div",{className:"mt-6",children:[e==="tournaments"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Tournament Management"}),i?c.jsx("div",{className:"flex justify-center py-4",children:c.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Current Phase"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:l()})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Status"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:u()})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Last Updated"}),c.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:r!=null&&r.updatedAt?en(r.updatedAt,"PPp"):"Never"})]})]})}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:c.jsx("button",{onClick:h,className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Manage Tournament Settings"})})]})]}),e==="entries"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("div",{className:"flex justify-between items-center mb-6",children:c.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Entry Management"})}),c.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:c.jsx("button",{onClick:()=>n("/admin/entries"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Review Submissions"})})]}),e==="users"&&c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Users"}),c.jsx("div",{className:"text-gray-500",children:"User management features coming soon."})]})]})]})})})}class CS extends k.Component{constructor(){super(...arguments);Ru(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("Uncaught error:",t,r)}render(){var t;return this.state.hasError?this.props.fallback||c.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"max-w-md w-full space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"})]}),c.jsxs("div",{className:"mt-8 space-y-6",children:[c.jsx("button",{onClick:()=>window.location.reload(),className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Reload Page"}),c.jsx("button",{onClick:()=>window.location.href="/",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Go to Home"})]})]})}):this.props.children}}function Zo({tournamentId:n,tournamentName:e,onPasswordSuccess:t}){const{user:r}=Pt(),[s,i]=k.useState(""),[a,l]=k.useState(null),[u,h]=k.useState(!1),[m,y]=k.useState(!1),[g,x]=k.useState(!1),A=async(v,j)=>{try{return await mP(v,j)}catch(I){return console.error("Error verifying password:",I),!1}},b=async v=>{if(v.preventDefault(),!r){l("You must be logged in to access this tournament");return}if(!s.trim()){l("Please enter a password");return}h(!0);try{console.log(`Verifying password for tournament ${n}`);const j=await A(n,s);if(console.log("Password verification result:",j),j){const I=`tournament_access_${n}_${r.id}`;console.log("Setting localStorage key:",I),localStorage.setItem(I,"true"),t&&t()}else l("Incorrect password. Please try again.")}catch(j){console.error("Error during password verification:",j),l("An error occurred. Please try again.")}finally{h(!1)}};return r?c.jsxs("div",{className:"max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md",children:[c.jsx("h2",{className:"text-xl font-bold mb-2",children:"Password Required"}),c.jsxs("p",{className:"text-gray-600 mb-4",children:["This tournament is password protected. Please enter the password to access ",e,"."]}),a&&c.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 rounded-md",children:a}),c.jsxs("form",{onSubmit:b,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Tournament Password"}),c.jsxs("div",{className:"relative rounded-md shadow-sm",children:[c.jsx("input",{type:m?"text":"password",id:"password",value:s,onChange:v=>i(v.target.value),className:"focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10",placeholder:"Enter password",autoComplete:"off"}),c.jsx("button",{type:"button",onClick:()=>y(!m),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",children:m?c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),c.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}):c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),c.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})})]})]}),c.jsx("div",{className:"flex justify-center",children:c.jsx("button",{type:"submit",className:"w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",disabled:u,children:u?c.jsxs(c.Fragment,{children:[c.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Checking..."]}):"Submit Password"})})]}),c.jsx("div",{className:"mt-4 text-center",children:c.jsx("a",{href:"/",className:"text-sm text-primary-600 hover:text-primary-500",children:"Back to Home"})})]}):c.jsxs("div",{className:"max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md",children:[c.jsx("p",{className:"text-red-600 mb-4",children:"You must be logged in to access this tournament."}),c.jsx(re,{to:"/login",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Log In"})]})}function Eh(){const{user:n}=Pt(),{tournamentId:e}=Xs(),t=At(),[r,s]=k.useState(null),[i,a]=k.useState(!0),[l,u]=k.useState(!0),[h,m]=k.useState(null),[y,g]=k.useState(null),[x,A]=k.useState(""),[b,v]=k.useState({totalEntries:0,pendingEntries:0,approvedEntries:0,rejectedEntries:0,totalVotes:0,totalUsers:0}),[j,I]=k.useState(!1),[V,F]=k.useState(""),[B,W]=k.useState(!1),[P,_]=k.useState(!1),[w,T]=k.useState(""),[S,R]=k.useState(!1),[E,De]=k.useState(!1);k.useEffect(()=>{(async()=>{try{if(!e){m("No tournament ID provided");return}await Oe(),await G()}catch(Z){console.error("Error fetching data:",Z),m(Z.message||"An error occurred while fetching data")}})()},[e,n]),k.useEffect(()=>{(r==null?void 0:r.votingQuestion)!==void 0&&A(r.votingQuestion),(r==null?void 0:r.isPasswordProtected)!==void 0&&(I(r.isPasswordProtected),r.password&&F(r.password))},[r]);const Oe=async()=>{try{if(a(!0),!e){m("No tournament ID provided");return}const $=await mi(e);if(!$){m("Tournament not found");return}if(console.log("Current user:",n),console.log("Tournament ownerId:",$.ownerId),console.log("User ID matches owner?",$.ownerId===(n==null?void 0:n.id)),console.log("User is admin?",(n==null?void 0:n.isAdmin)===!0),n&&!(n.id===$.ownerId)){m("You do not have permission to access this tournament settings. Only the tournament creator can modify settings.");return}s($),De(!0)}catch($){console.error("Error fetching tournament:",$),m("Failed to load tournament data")}finally{a(!1)}},G=async()=>{try{if(!e)return;u(!0);const $=await Pl(e),Z=$.filter(Rt=>Rt.status==="pending"||!Rt.status).length,zt=$.filter(Rt=>Rt.status==="approved").length,ct=$.filter(Rt=>Rt.status==="rejected").length,gr=await up(e),pr=Qe(be(X,"users")),ts=await rt(pr);v({totalEntries:$.length,pendingEntries:Z,approvedEntries:zt,rejectedEntries:ct,totalVotes:gr.length,totalUsers:ts.docs.length})}catch($){console.error("Error fetching stats:",$)}finally{u(!1)}},le=async $=>{try{if(!r)return;m(null),g(null);const Z=new Date;let zt=r.submissionPhaseEnd||new Date,ct=r.votingPhaseEnd||new Date;$==="submission"?(zt=new Date(Z.getTime()+7*24*60*60*1e3),ct=new Date(zt.getTime()+7*24*60*60*1e3)):$==="voting"&&$!==r.currentPhase&&(ct=new Date(Z.getTime()+7*24*60*60*1e3)),await xr({id:r.id,currentPhase:$,submissionPhaseEnd:zt,votingPhaseEnd:ct}),g(`Tournament phase updated to ${$}`),await Oe()}catch(Z){console.error("Error updating tournament phase:",Z),m(Z.message||"Failed to update tournament phase")}},ee=async($,Z,zt)=>{try{if(!r)return;m(null),g(null);const ct={id:r.id};ct[`${$}Phase${Z}`]=zt,await xr(ct),g(`${$} phase ${Z.toLowerCase()} time updated`),await Oe()}catch(ct){console.error(`Error updating ${$} phase ${Z.toLowerCase()} time:`,ct),m(ct.message||`Failed to update ${$} phase ${Z.toLowerCase()} time`)}},Wt=async $=>{try{if(!r)return;m(null),g(null);const Z=$===""?null:parseInt($);await xr({id:r.id,maxEntriesPerUser:Z}),g("Entry limit updated successfully"),await Oe()}catch(Z){console.error("Error updating entry limit:",Z),m(Z.message||"Failed to update entry limit")}},mr=async $=>{try{if(!r)return;m(null),g(null);const Z=$===""?null:parseInt($);await xr({id:r.id,maxVotesPerUser:Z}),g("Vote limit updated successfully"),await Oe()}catch(Z){console.error("Error updating vote limit:",Z),m(Z.message||"Failed to update vote limit")}},es=async $=>{try{if(!r)return;m(null),g(null),await xr({id:r.id,votingQuestion:$}),g("Voting question updated successfully"),await Oe()}catch(Z){console.error("Error updating voting question:",Z),m(Z.message||"Failed to update voting question")}},ye=async $=>{try{if(!r)return;m(null),g(null),await xr({id:r.id,name:$}),g("Tournament name updated successfully"),await Oe()}catch(Z){console.error("Error updating tournament name:",Z),m(Z.message||"Failed to update tournament name")}},te=async()=>{try{if(!r)return;if(m(null),g(null),j&&!V.trim()){m("Please enter a password");return}await fP(r.id,j,j?V:null),g("Password protection settings updated successfully"),await Oe()}catch($){console.error("Error updating password protection:",$),m($.message||"Failed to update password protection")}},Ht=async()=>{try{if(!r)return;if(m(null),w!==r.name){m("Please enter the tournament name to confirm deletion");return}a(!0),await hP(r.id),t("/dashboard")}catch($){console.error("Error deleting tournament:",$),m($.message||"Failed to delete tournament"),a(!1)}},St=()=>{R(!1),De(!0)};return i?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):h?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:h})})]})}),c.jsx("button",{className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>t("/"),children:"Return to Home"})]}):r?S&&!E?c.jsx(Zo,{tournamentId:e,tournamentName:r.name,onPasswordSuccess:St}):c.jsxs("div",{className:"container mx-auto px-4 py-8",children:[c.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Tournament Settings"}),c.jsxs("p",{className:"text-gray-600 mb-8",children:["ID: ",r.id]}),h&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:h}),y&&c.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:y}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Details"}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Tournament Name"}),c.jsx("div",{className:"mt-1 flex rounded-md shadow-sm",children:c.jsx("input",{type:"text",id:"name",className:"focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300",value:r.name,onChange:$=>ye($.target.value)})}),c.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Owner: ",r.ownerId===(n==null?void 0:n.id)?"You":r.ownerId]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Phase Management"}),c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Current Phase"}),c.jsxs("div",{className:"flex flex-wrap gap-4",children:[c.jsx("button",{onClick:()=>le("submission"),className:`px-4 py-2 rounded-md ${r.currentPhase==="submission"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Submission Phase"}),c.jsx("button",{onClick:()=>le("voting"),className:`px-4 py-2 rounded-md ${r.currentPhase==="voting"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Voting Phase"}),c.jsx("button",{onClick:()=>le("completed"),className:`px-4 py-2 rounded-md ${r.currentPhase==="completed"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]}),c.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:[r.currentPhase==="submission"&&"Users can submit designs during this phase.",r.currentPhase==="voting"&&"Submissions are closed. Users can vote on designs during this phase.",r.currentPhase==="completed"&&"The tournament is over. No new submissions or votes are accepted."]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Phase Timing"}),c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Submission Phase"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"submissionStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),c.jsx("input",{type:"datetime-local",id:"submissionStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:en(r.submissionPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:$=>ee("submission","Start",new Date($.target.value))})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"submissionEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),c.jsx("input",{type:"datetime-local",id:"submissionEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:en(r.submissionPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:$=>ee("submission","End",new Date($.target.value))})]})]})]}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-700 mb-2",children:"Voting Phase"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"votingStart",className:"block text-sm font-medium text-gray-700",children:"Start Date"}),c.jsx("input",{type:"datetime-local",id:"votingStart",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:en(r.votingPhaseStart,"yyyy-MM-dd'T'HH:mm"),onChange:$=>ee("voting","Start",new Date($.target.value))})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"votingEnd",className:"block text-sm font-medium text-gray-700",children:"End Date"}),c.jsx("input",{type:"datetime-local",id:"votingEnd",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm",value:en(r.votingPhaseEnd,"yyyy-MM-dd'T'HH:mm"),onChange:$=>ee("voting","End",new Date($.target.value))})]})]})]})]})]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Entry & Voting Limits"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"maxEntries",className:"block text-sm font-medium text-gray-700",children:"Maximum Entries per User"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"number",id:"maxEntries",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxEntriesPerUser===null?"":r.maxEntriesPerUser,onChange:$=>Wt($.target.value),min:"1",placeholder:"Leave empty for unlimited"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited entries"})]})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"maxVotes",className:"block text-sm font-medium text-gray-700",children:"Maximum Votes per User"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"number",id:"maxVotes",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r.maxVotesPerUser===null?"":r.maxVotesPerUser,onChange:$=>mr($.target.value),min:"1",placeholder:"Leave empty for unlimited"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Leave empty for unlimited votes"})]})]}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{htmlFor:"votingQuestion",className:"block text-sm font-medium text-gray-700",children:"Voting Question"}),c.jsxs("div",{className:"mt-1",children:[c.jsx("input",{type:"text",id:"votingQuestion",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:x,onChange:$=>A($.target.value),placeholder:"How would you rate this entry?"}),c.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"This question will be displayed above the voting scale"})]}),c.jsx("div",{className:"mt-2",children:c.jsx("button",{onClick:()=>es(x),className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Update Voting Question"})})]})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Password Protection"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Enable password protection to restrict who can submit entries and vote in your tournament. Users will need to enter the password before they can participate."}),c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx("input",{type:"checkbox",id:"passwordProtection",checked:j,onChange:$=>I($.target.checked),className:"h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"}),c.jsx("label",{htmlFor:"passwordProtection",className:"ml-2 block text-sm text-gray-900",children:"Enable password protection"})]}),j&&c.jsxs("div",{className:"mt-2",children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Tournament Password"}),c.jsxs("div",{className:"mt-1 relative rounded-md shadow-sm",children:[c.jsx("input",{type:B?"text":"password",id:"password",value:V,onChange:$=>F($.target.value),className:"focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10",placeholder:"Enter password"}),c.jsx("button",{type:"button",onClick:()=>W(!B),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500",children:B?c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),c.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}):c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:[c.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}),c.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})})]})]}),c.jsx("div",{className:"mt-4",children:c.jsx("button",{onClick:te,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Save Password Settings"})})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 border border-red-200",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4 text-red-600",children:"Danger Zone"}),c.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Permanently delete this tournament and all its data. This action cannot be undone. All entries, votes, and settings will be permanently removed."}),c.jsx("div",{children:P?c.jsxs("div",{className:"border border-red-300 rounded-md p-4 bg-red-50",children:[c.jsxs("p",{className:"text-sm text-red-700 mb-2",children:["To confirm deletion, please type ",c.jsx("strong",{children:r.name})," below:"]}),c.jsx("input",{type:"text",value:w,onChange:$=>T($.target.value),className:"focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md mb-4",placeholder:"Enter tournament name to confirm"}),c.jsxs("div",{className:"flex space-x-3",children:[c.jsx("button",{onClick:Ht,disabled:w!==r.name,className:`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${w===r.name?"bg-red-600 hover:bg-red-700":"bg-gray-400 cursor-not-allowed"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`,children:"Permanently Delete"}),c.jsx("button",{onClick:()=>{_(!1),T("")},className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Cancel"})]})]}):c.jsx("button",{onClick:()=>_(!0),className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Delete Tournament"})})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Tournament Statistics"}),l?c.jsxs("div",{className:"animate-pulse py-4",children:[c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/4 mb-4"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2 mb-4"}),c.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3"})]}):c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Entries"}),c.jsx("p",{className:"text-3xl font-bold",children:b.totalEntries}),c.jsxs("div",{className:"mt-2 text-sm text-gray-500",children:[c.jsxs("div",{children:["Pending: ",b.pendingEntries]}),c.jsxs("div",{children:["Approved: ",b.approvedEntries]}),c.jsxs("div",{children:["Rejected: ",b.rejectedEntries]})]})]}),c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Votes"}),c.jsx("p",{className:"text-3xl font-bold",children:b.totalVotes}),c.jsx("div",{className:"mt-2 text-sm text-gray-500",children:c.jsxs("div",{children:["Avg. per entry: ",b.totalEntries>0?(b.totalVotes/b.totalEntries).toFixed(1):"0"]})})]}),c.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[c.jsx("h3",{className:"font-semibold text-lg text-gray-700",children:"Users"}),c.jsx("p",{className:"text-3xl font-bold",children:b.totalUsers}),c.jsx("div",{className:"mt-2 text-sm text-gray-500",children:c.jsxs("div",{children:["Contributors: ",b.totalEntries>0||b.totalVotes>0?"Various":"0"]})})]})]})]})]}):null}function Th(){const{tournamentId:n}=Xs();At();const[e,t]=k.useState([]),[r,s]=k.useState(!0),[i,a]=k.useState(null),[l,u]=k.useState(null),[h,m]=k.useState("all"),[y,g]=k.useState(n);k.useEffect(()=>{n!==y&&(g(n),t([])),x()},[h,n]);const x=async()=>{try{s(!0),a(null),console.log(`Fetching entries${n?` for tournament ${n}`:""}, filter: ${h}`);let b;n?h==="all"?b=Qe(be(X,"entries"),ke("tournamentId","==",n),zn("createdAt","desc")):b=Qe(be(X,"entries"),ke("tournamentId","==",n),ke("status","==",h),zn("createdAt","desc")):h==="all"?b=Qe(be(X,"entries"),zn("createdAt","desc")):b=Qe(be(X,"entries"),ke("status","==",h),zn("createdAt","desc"));const j=(await rt(b)).docs.map(I=>({id:I.id,...I.data(),status:I.data().status||"pending"}));console.log(`Found ${j.length} entries`),t(j)}catch(b){console.error("Error fetching entries:",b),a(b.message||"Failed to load entries")}finally{s(!1)}},A=async(b,v)=>{try{u(null),a(null);const j=Ne(X,"entries",b);await hi(j,{status:v}),t(e.map(I=>I.id===b?{...I,status:v}:I)),u(`Entry status updated to ${v}`)}catch(j){console.error("Error updating entry status:",j),a(j.message||"Failed to update entry status")}};return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Manage Entries"}),c.jsx("div",{className:"mt-3 sm:mt-0",children:c.jsxs("div",{className:"flex rounded-md shadow-sm",children:[c.jsx("button",{onClick:()=>m("all"),className:`px-4 py-2 text-sm font-medium rounded-l-md ${h==="all"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"All"}),c.jsx("button",{onClick:()=>m("pending"),className:`px-4 py-2 text-sm font-medium ${h==="pending"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Pending"}),c.jsx("button",{onClick:()=>m("approved"),className:`px-4 py-2 text-sm font-medium ${h==="approved"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Approved"}),c.jsx("button",{onClick:()=>m("rejected"),className:`px-4 py-2 text-sm font-medium rounded-r-md ${h==="rejected"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"Rejected"})]})})]}),i&&c.jsx("div",{className:"mb-4 p-4 bg-red-50 rounded-md",children:c.jsx("p",{className:"text-sm text-red-700",children:i})}),l&&c.jsx("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:c.jsx("p",{className:"text-sm text-green-700",children:l})}),r?c.jsx("div",{className:"flex justify-center py-12",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e.length===0?c.jsx("div",{className:"text-center py-12",children:c.jsx("p",{className:"text-gray-500",children:"No entries found."})}):c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[c.jsx("thead",{className:"bg-gray-50",children:c.jsxs("tr",{children:[c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitted By"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),c.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),c.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:e.map(b=>c.jsxs("tr",{children:[c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c.jsx("div",{className:"h-20 w-20 bg-gray-100 rounded overflow-hidden",children:c.jsx("img",{src:b.imageUrl,alt:b.title,className:"h-full w-full object-cover"})})}),c.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[c.jsx("div",{className:"text-sm font-medium text-gray-900",children:b.title}),c.jsx("div",{className:"text-sm text-gray-500 max-w-xs truncate",children:b.description})]}),c.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[c.jsx("div",{className:"text-sm text-gray-900",children:b.userDisplayName||"Unknown User"}),c.jsx("div",{className:"text-sm text-gray-500",children:b.userId})]}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:c.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${b.status==="approved"?"bg-green-100 text-green-800":b.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:b.status})}),c.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("button",{onClick:()=>A(b.id,"approved"),disabled:b.status==="approved",className:`${b.status==="approved"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-green-50 text-green-700 hover:bg-green-100"} px-3 py-1 rounded-md text-sm`,children:"Approve"}),c.jsx("button",{onClick:()=>A(b.id,"rejected"),disabled:b.status==="rejected",className:`${b.status==="rejected"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-red-50 text-red-700 hover:bg-red-100"} px-3 py-1 rounded-md text-sm`,children:"Reject"}),c.jsx("button",{onClick:()=>A(b.id,"pending"),disabled:b.status==="pending",className:`${b.status==="pending"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-yellow-50 text-yellow-700 hover:bg-yellow-100"} px-3 py-1 rounded-md text-sm`,children:"Pending"})]})})]},b.id))})]})})]})})}function kS(){const{user:n}=Pt(),e=At(),[t,r]=k.useState([]),[s,i]=k.useState([]),[a,l]=k.useState(!0),[u,h]=k.useState(!1),[m,y]=k.useState(null),[g,x]=k.useState([]),[A,b]=k.useState(!0),v=s.filter(I=>I.currentPhase!=="completed"),j=s.filter(I=>I.currentPhase==="completed");return k.useEffect(()=>{(async()=>{console.log("Fetching tournaments for HomePage..."),l(!0);try{const V=await gP();i(V);const F=V.find(B=>B.currentPhase!=="completed")||V[0];if(F){console.log(`Fetching recent entries for showcase tournament ${F.id}...`);const P=(await Sl(F.id)).map(_=>{let w;try{_.createdAt?typeof _.createdAt.getTime=="function"?w=_.createdAt.getTime():typeof _.createdAt.toMillis=="function"?w=_.createdAt.toMillis():typeof _.createdAt.toDate=="function"?w=_.createdAt.toDate().getTime():typeof _.createdAt=="number"?w=_.createdAt:w=new Date(_.createdAt).getTime():w=0}catch(T){console.error("Error processing date:",T),w=0}return{..._,_safeSortTimestamp:w}}).sort((_,w)=>w._safeSortTimestamp-_._safeSortTimestamp).slice(0,3);x(P)}}catch(V){console.error("Error fetching tournaments:",V),y("Failed to load tournaments")}finally{l(!1),b(!1)}})()},[]),a?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):m?c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})]})}),c.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>window.location.reload(),children:"Refresh Page"})]}):c.jsxs("div",{className:"container mx-auto px-4 py-8",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h1",{className:"text-4xl font-extrabold text-gray-900 mb-4",children:"Welcome to King Ideation Platform"}),c.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Share ideas, submit your best designs, and collaborate on innovative solutions."}),n&&c.jsx("div",{className:"mt-8",children:c.jsx("button",{onClick:()=>e("/create-tournament"),className:"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Create New Tournament"})})]}),g.length>0&&c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Featured Designs"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:g.map(I=>{var V;return c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[c.jsx("img",{src:I.imageUrl,alt:I.title,className:"w-full h-48 object-cover"}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"font-semibold text-lg mb-1",children:I.title}),c.jsxs("p",{className:"text-gray-600 text-sm mb-2",children:["By ",I.authorName||"Anonymous"]}),c.jsxs("p",{className:"text-gray-500 text-sm",children:[(V=I.description)==null?void 0:V.substring(0,100),"..."]})]})]},I.id)})})]}),c.jsxs("div",{className:"mb-12",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Active Tournaments"}),a?c.jsx("div",{className:"animate-pulse",children:[...Array(3)].map((I,V)=>c.jsx("div",{className:"bg-gray-200 h-32 rounded-lg mb-4"},V))}):m?c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4",children:c.jsx("div",{className:"flex",children:c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})})}):v.length===0?c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-6 text-center",children:[c.jsx("p",{className:"text-gray-600",children:"No active tournaments found."}),n&&c.jsx("button",{onClick:()=>e("/create-tournament"),className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Create Tournament"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map(I=>c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:I.name}),c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("span",{className:`px-2 py-1 text-xs rounded-full ${I.currentPhase==="submission"?"bg-blue-100 text-blue-800":I.currentPhase==="voting"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:I.currentPhase==="submission"?"Submission":I.currentPhase==="voting"?"Voting":"Completed"}),I.isPasswordProtected&&c.jsxs("span",{className:"px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Private"]})]})]}),c.jsx("p",{className:"mt-2 text-sm text-gray-600 line-clamp-2",children:I.description||"No description provided."}),c.jsxs("div",{className:"mt-4 text-sm text-gray-500 space-y-1",children:[I.currentPhase==="submission"&&c.jsxs("div",{children:[c.jsx("span",{children:"Submission ends: "}),c.jsx("span",{children:en(I.submissionPhaseEnd,"PPP")})]}),I.currentPhase==="voting"&&c.jsxs("div",{children:[c.jsx("span",{children:"Voting ends: "}),c.jsx("span",{children:en(I.votingPhaseEnd,"PPP")})]})]}),c.jsxs("div",{className:"mt-6 flex space-x-3",children:[I.currentPhase==="submission"&&c.jsx(re,{to:`/tournament/${I.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),I.currentPhase==="voting"&&c.jsx(re,{to:`/tournament/${I.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),c.jsx(re,{to:`/tournament/${I.id}`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Details"}),I.ownerId===(n==null?void 0:n.id)&&c.jsx(re,{to:`/admin/tournament/${I.id}/settings`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage"})]})]})},I.id))})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Closed Tournaments"}),a?c.jsx("div",{className:"animate-pulse",children:[...Array(2)].map((I,V)=>c.jsx("div",{className:"bg-gray-200 h-32 rounded-lg mb-4"},V))}):j.length===0?c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg p-6 text-center",children:c.jsx("p",{className:"text-gray-600",children:"No closed tournaments found."})}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:j.map(I=>c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:I.name}),c.jsxs("div",{className:"flex space-x-1",children:[c.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800",children:"Completed"}),I.isPasswordProtected&&c.jsxs("span",{className:"px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3 w-3 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Private"]})]})]}),c.jsx("p",{className:"mt-2 text-sm text-gray-600 line-clamp-2",children:I.description||"No description provided."}),c.jsx("div",{className:"mt-4 text-sm text-gray-500 space-y-1",children:c.jsxs("div",{children:[c.jsx("span",{children:"Completed on: "}),c.jsx("span",{children:en(I.votingPhaseEnd,"PPP")})]})}),c.jsxs("div",{className:"mt-6 flex space-x-3",children:[c.jsx(re,{to:`/tournament/${I.id}/results`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"View Results"}),c.jsx(re,{to:`/tournament/${I.id}`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Details"}),I.ownerId===(n==null?void 0:n.id)&&c.jsx(re,{to:`/admin/tournament/${I.id}/settings`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage"})]})]})},I.id))})]})]})}function jS(){var A,b,v,j;const{user:n}=Pt(),[e,t]=k.useState([]),[r,s]=k.useState(0),[i,a]=k.useState(null),[l,u]=k.useState(!0),[h,m]=k.useState(null);k.useEffect(()=>{n&&(g(),x(),y())},[n]);const y=async()=>{try{const I=await Xo();a(I)}catch(I){console.error("Error fetching tournament state:",I)}},g=async()=>{try{const I=Qe(be(X,"entries"),ke("userId","==",n.id),zn("createdAt","desc")),F=(await rt(I)).docs.map(B=>({id:B.id,...B.data()}));t(F)}catch(I){console.error("Error fetching user entries:",I),m(I.message||"Failed to load your submissions.")}finally{u(!1)}},x=async()=>{try{const I=Qe(be(X,"votes"),ke("userId","==",n.id)),F=(await rt(I)).size;s(Math.max(0,10-F))}catch(I){console.error("Error fetching votes:",I)}};return l?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),h&&c.jsx("div",{className:"mt-4 rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:h})}),c.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2",children:[c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Tournament Status"}),i?c.jsxs("div",{children:[c.jsx("div",{className:"mb-4",children:c.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:i.currentPhase==="submission"?"Submission Phase":i.currentPhase==="voting"?"Voting Phase":"Completed"})}),i.currentPhase==="submission"&&c.jsxs("div",{className:"text-sm text-gray-500",children:[c.jsx("p",{className:"mb-1",children:"Submission deadline:"}),c.jsx("p",{className:"font-medium text-gray-900",children:xn(i.submissionPhaseEnd,{addSuffix:!0})})]}),i.currentPhase==="voting"&&c.jsxs("div",{className:"text-sm text-gray-500",children:[c.jsx("p",{className:"mb-1",children:"Voting ends:"}),c.jsx("p",{className:"font-medium text-gray-900",children:xn(i.votingPhaseEnd,{addSuffix:!0})}),c.jsx("p",{className:"mt-4 mb-1",children:"Your remaining votes:"}),c.jsxs("p",{className:"font-medium text-gray-900",children:[r," of 10"]})]}),c.jsxs("div",{className:"mt-6",children:[i.currentPhase==="submission"&&c.jsx(re,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit a Design"}),i.currentPhase==="voting"&&c.jsx(re,{to:"/vote",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Vote on Designs"}),i.currentPhase==="completed"&&c.jsx(re,{to:"/winners",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"View Winners"})]})]}):c.jsx("p",{className:"text-gray-500",children:"Loading tournament information..."})]}),c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Profile"}),c.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[n!=null&&n.photoURL?c.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):c.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:c.jsx("span",{className:"text-2xl font-medium text-primary-600",children:((b=(A=n==null?void 0:n.displayName)==null?void 0:A[0])==null?void 0:b.toUpperCase())||((j=(v=n==null?void 0:n.email)==null?void 0:v[0])==null?void 0:j.toUpperCase())||"?"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-md font-medium text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),c.jsx("p",{className:"text-sm text-gray-500",children:n==null?void 0:n.email})]})]}),c.jsx(re,{to:"/profile",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Full Profile"})]})]}),c.jsxs("div",{className:"mt-8",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Submissions"}),e.length>0?c.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:e.map(I=>{var V;return c.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:I.imageUrl,alt:I.title,className:"w-full h-48 object-contain bg-gray-50"}),c.jsx("div",{className:`
                    absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
                    ${I.status==="approved"?"bg-green-100 text-green-800":I.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}
                  `,children:I.status==="approved"?"Approved":I.status==="rejected"?"Rejected":"Pending"})]}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:I.title}),I.description&&c.jsx("p",{className:"mt-1 text-sm text-gray-500",children:I.description}),c.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[c.jsxs("div",{className:"text-gray-500",children:["Submitted ",xn(I.createdAt instanceof Date?I.createdAt:typeof((V=I.createdAt)==null?void 0:V.toDate)=="function"?I.createdAt.toDate():new Date(I.createdAt),{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)!=="submission"&&I.status==="approved"&&c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-gray-600",children:[I.voteCount," votes"]})]})]})]})]},I.id)})}):c.jsxs("div",{className:"bg-white shadow rounded-lg p-10 text-center",children:[c.jsx("p",{className:"text-gray-500",children:"You haven't submitted any designs yet."}),(i==null?void 0:i.currentPhase)==="submission"&&c.jsx("div",{className:"mt-4",children:c.jsx(re,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit Your First Design"})})]})]})]})}function Ih(){const{user:n,loading:e}=Pt(),{tournamentId:t}=Xs(),r=At(),[s,i]=k.useState(""),[a,l]=k.useState(""),[u,h]=k.useState(null),[m,y]=k.useState(null),[g,x]=k.useState(!1),[A,b]=k.useState(0),[v,j]=k.useState(null),[I,V]=k.useState([]),[F,B]=k.useState(!0),[W,P]=k.useState(!1),[_,w]=k.useState(null),T=k.useRef(null),[S,R]=k.useState(!1),[E,De]=k.useState(!1),[Oe,G]=k.useState(!1),le=t;k.useEffect(()=>{if(!e&&!n){console.log("User not authenticated, redirecting to login"),r("/login");return}n&&(async()=>{B(!0);try{if(!le){y("Tournament ID is required");return}const te=await mi(le);if(!te){y("Tournament not found");return}if(j(te),te.currentPhase!=="submission"){y("This tournament is not currently accepting submissions");return}if(te.isPasswordProtected){console.log("Tournament is password protected");const Ht=(n==null?void 0:n.id)===te.ownerId;if(console.log("Is user owner?",Ht),!Ht){const St=localStorage.getItem(`tournament_access_${le}_${n==null?void 0:n.id}`);if(console.log("Has access from localStorage?",!!St),!St){console.log("Setting passwordRequired to true"),R(!0);return}}}if(De(!0),n!=null&&n.id){const Ht=await sP(le,n.id);V(Ht),te.maxEntriesPerUser!==null&&Ht.length>=te.maxEntriesPerUser&&G(!0)}}catch(te){console.error("Error fetching tournament data:",te),y(te.message||"Failed to load tournament data")}finally{B(!1)}})()},[le,n]);const ee=()=>{R(!1),De(!0),(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=v.maxEntriesPerUser&&G(!0)},Wt=async ye=>{if(ye.preventDefault(),!n){y("You must be logged in to submit a design");return}if(!v){y("Tournament data not available");return}if(!E){y("You do not have permission to submit to this tournament");return}if(v.currentPhase!=="submission"){y("This tournament is not currently accepting submissions");return}if(v.maxEntriesPerUser!==null&&I.length>=v.maxEntriesPerUser){y(`You have reached the maximum number of entries (${v.maxEntriesPerUser}) for this tournament`);return}if(!s.trim()){y("Please enter a title for your design");return}if(!u){y("Please upload an image of your design");return}try{y(null),x(!0),await uP({title:s,description:a.trim(),image:u,userId:n.id,tournamentId:v.id}),console.log("Design submitted successfully"),an("design_submitted",{title:s,tournamentId:v.id}),r(`/tournament/${v.id}`)}catch(te){console.error("Submit error:",te),y(te.message||"Failed to submit design. Please try again."),x(!1)}},mr=ye=>{if(ye.target.files&&ye.target.files[0]){const te=ye.target.files[0];if(!te.type.startsWith("image/")){y("Please upload an image file (JPEG, PNG, etc.)");return}if(te.size>5*1024*1024){y("Image size must be less than 5MB");return}h(te),y(null)}};if(F)return c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});if(S&&!E&&v)return c.jsx(Zo,{tournamentId:v.id,tournamentName:v.name,onPasswordSuccess:ee});if(!v)return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h1",{className:"text-xl font-bold text-red-600",children:"Tournament Not Available"}),c.jsx("p",{className:"text-gray-700 mt-2",children:m||"No tournament is available for submissions."}),c.jsx("button",{onClick:()=>r("/"),className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Return to Home"})]})});const es=(v==null?void 0:v.maxEntriesPerUser)===null?"Unlimited":(v==null?void 0:v.maxEntriesPerUser)-I.length;return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[c.jsx("div",{className:"md:col-span-1",children:c.jsxs("div",{className:"px-4 sm:px-0",children:[c.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Submit Your Design"}),c.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:["Submit your design for ",(v==null?void 0:v.name)||"the current competition",". Please make sure your image clearly shows your concept."]}),v&&c.jsxs("div",{className:"mt-4",children:[c.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Tournament Details"}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Submission Phase Ends: ",v.submissionPhaseEnd.toLocaleDateString()]}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Your Entries: ",I.length," / ",v.maxEntriesPerUser===null?"∞":v.maxEntriesPerUser]}),c.jsxs("p",{className:"text-sm text-gray-600",children:["Remaining Entries: ",es]})]})]})}),c.jsx("div",{className:"mt-5 md:mt-0 md:col-span-2",children:c.jsx("form",{onSubmit:Wt,children:c.jsxs("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[c.jsxs("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[m&&c.jsx("div",{className:"rounded-md bg-red-50 p-4",children:c.jsx("div",{className:"text-sm text-red-700",children:m})}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),c.jsx("div",{className:"mt-1",children:c.jsx("input",{type:"text",id:"title",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:s,onChange:ye=>i(ye.target.value),required:!0,disabled:g||(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=(v==null?void 0:v.maxEntriesPerUser)})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description (optional)"}),c.jsx("div",{className:"mt-1",children:c.jsx("textarea",{id:"description",rows:3,className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:a,onChange:ye=>l(ye.target.value),disabled:g||(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=(v==null?void 0:v.maxEntriesPerUser)})})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Design Image"}),c.jsxs("div",{className:"mt-1 flex items-center",children:[c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:()=>{var ye;return(ye=T.current)==null?void 0:ye.click()},disabled:g||(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=(v==null?void 0:v.maxEntriesPerUser),children:"Choose file"}),c.jsx("input",{type:"file",ref:T,className:"hidden",accept:"image/*",onChange:mr,disabled:g||(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=(v==null?void 0:v.maxEntriesPerUser)}),c.jsx("span",{className:"ml-2 text-sm text-gray-500",children:u?u.name:"No file chosen"})]}),u&&c.jsx("div",{className:"mt-2",children:c.jsx("img",{src:URL.createObjectURL(u),alt:"Preview",className:"h-40 object-contain"})})]}),g&&c.jsx("div",{children:c.jsxs("div",{className:"relative pt-1",children:[c.jsxs("div",{className:"flex mb-2 items-center justify-between",children:[c.jsx("div",{children:c.jsx("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200",children:A<100?"Uploading":"Processing"})}),c.jsx("div",{className:"text-right",children:c.jsxs("span",{className:"text-xs font-semibold inline-block text-primary-600",children:[Math.round(A),"%"]})})]}),c.jsx("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200",children:c.jsx("div",{style:{width:`${A}%`},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-300"})})]})})]}),c.jsx("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:c.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",disabled:g||!u||!s.trim()||(v==null?void 0:v.maxEntriesPerUser)!==null&&I.length>=(v==null?void 0:v.maxEntriesPerUser),children:g?"Submitting...":"Submit"})})]})})})]})})}function DS({entryId:n,onVote:e,currentRating:t,tournamentState:r}){const[s,i]=Pe.useState(null),[a,l]=Pe.useState(!r),[u,h]=Pe.useState(null),[m,y]=Pe.useState("Rate this design:");if(Pe.useEffect(()=>{if(r){console.log("Tournament state from props:",r),console.log("Voting question from props:",r.votingQuestion),i(r),r.votingQuestion&&y(r.votingQuestion),l(!1);return}(async()=>{try{const A=await Xo();console.log("Fetched tournament state:",A),console.log("Fetched voting question:",A==null?void 0:A.votingQuestion),i(A),A!=null&&A.votingQuestion&&y(A.votingQuestion)}catch(A){h("Failed to load tournament settings"),console.error("Error fetching tournament state:",A)}finally{l(!1)}})()},[r]),a)return c.jsx("div",{className:"animate-pulse",children:"Loading voting options..."});if(u)return c.jsx("div",{className:"text-red-500",children:u});const g=t!=null;return c.jsxs("div",{className:"space-y-4",children:[c.jsx("p",{className:"text-lg font-medium text-gray-900",children:m}),c.jsx("div",{className:"flex items-center space-x-4",children:[1,2,3,4,5].map(x=>c.jsx("button",{onClick:()=>!g&&e(x),disabled:g,className:`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors
              ${t===x?"bg-indigo-600 text-white":g?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,title:g?"You've already voted for this entry":`Rate this entry ${x}/5`,children:x},x))}),g&&c.jsx("p",{className:"text-sm text-gray-500",children:"You've already rated this entry"})]})}function Ah(){const{tournamentId:n}=Xs(),{user:e}=Pt(),t=At(),[r,s]=Pe.useState(null),[i,a]=Pe.useState([]),[l,u]=Pe.useState([]),[h,m]=Pe.useState(0),[y,g]=Pe.useState(null),[x,A]=Pe.useState(!0),[b,v]=Pe.useState(!1),[j,I]=Pe.useState(!1),[V,F]=Pe.useState(!1),[B,W]=Pe.useState(!1),[P,_]=Pe.useState(!0),[w,T]=Pe.useState([]),S=n;Pe.useEffect(()=>{(async()=>{try{A(!0);const ee=(await dp()).filter(Wt=>Wt.currentPhase==="voting");console.log(`Found ${ee.length} tournaments in voting phase`),T(ee),S?R():A(!1)}catch(le){console.error("Error fetching voting tournaments:",le),g("Failed to load available tournaments"),A(!1)}})()},[]);const R=async()=>{A(!0);try{if(!S){g("Tournament ID is required");return}const G=await mi(S);if(console.log("Tournament found:",G),!G){g("Tournament not found");return}if(s(G),G.currentPhase!=="voting"){g("This tournament is not currently in the voting phase");return}if(G.isPasswordProtected){console.log("Tournament is password protected");const le=(e==null?void 0:e.id)===G.ownerId;if(console.log("Is user owner?",le),!le){const ee=localStorage.getItem(`tournament_access_${S}_${e==null?void 0:e.id}`);if(console.log("Has access from localStorage?",!!ee),!ee){console.log("Setting passwordRequired to true"),I(!0);return}}}F(!0),await E()}catch(G){console.error("Error fetching tournament data:",G),g(G.message||"Failed to load tournament data")}finally{A(!1)}},E=async()=>{try{if(_(!0),!S){console.error("No tournament ID provided to load entries");return}const G=await Sl(S);if(console.log(`Found ${G.length} approved entries for tournament ${S}`),e!=null&&e.id){const ee=await oP(S,e.id);console.log(`Found ${ee.length} votes by user for tournament ${S}`),u(ee),r&&r.maxVotesPerUser!==null&&ee.length>=r.maxVotesPerUser&&W(!0)}const le=[...G].sort(()=>Math.random()-.5);a(le)}catch(G){console.error("Error loading entries and votes:",G),g(G.message||"Failed to load entries")}finally{_(!1)}};Pe.useEffect(()=>{e&&S&&R()},[S,e]);const De=async()=>{I(!1),F(!0),await E()},Oe=async(G,le)=>{if(!(e!=null&&e.id)){g("You must be logged in to vote");return}if(!r){g("Tournament data not available");return}try{if(l.some(ee=>ee.entryId===G)){g("You have already voted for this entry");return}if((r==null?void 0:r.maxVotesPerUser)!==null&&(r==null?void 0:r.maxVotesPerUser)!==void 0&&l.length>=r.maxVotesPerUser){g(`You have reached the maximum number of votes (${r.maxVotesPerUser})`);return}console.log(`Submitting vote: Entry ID ${G}, Rating ${le}, Tournament ID ${r.id}`),v(!0);try{await aP(G,le,r.id),console.log("Vote submitted successfully"),u(ee=>[...ee,{entryId:G,rating:le}]),console.log("Reloading data after vote..."),await R(),g(null)}catch(ee){console.error("Error during vote submission:",ee),g(`Failed to submit vote: ${ee.message}`)}finally{v(!1)}}catch(ee){g("Failed to submit vote"),console.error("Error submitting vote:",ee)}};return x?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):S?j&&!V&&r?c.jsx(Zo,{tournamentId:r.id,tournamentName:r.name,onPasswordSuccess:De}):y||!r?c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-md p-4",children:[c.jsx("p",{className:"text-red-700",children:y||"Tournament data not available"}),c.jsx("button",{className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>t("/vote"),children:"Return to Voting Page"})]})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("h1",{className:"text-3xl font-bold mb-8",children:["Vote on Entries ",r!=null&&r.name?`- ${r.name}`:""]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[c.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Your Voting Status"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-600",children:"Votes Cast:"}),c.jsx("p",{className:"text-2xl font-bold text-primary-600",children:l.length})]}),c.jsxs("div",{children:[c.jsx("p",{className:"text-gray-600",children:"Vote Limit:"}),c.jsx("p",{className:"text-2xl font-bold text-primary-600",children:(r==null?void 0:r.maxVotesPerUser)===null||(r==null?void 0:r.maxVotesPerUser)===void 0?"Unlimited":r.maxVotesPerUser})]})]}),c.jsx("div",{className:"mt-4 text-sm text-gray-500",children:c.jsxs("p",{children:["Voting Question: ",c.jsx("span",{className:"font-medium text-gray-900",children:(r==null?void 0:r.votingQuestion)||"How would you rate this entry?"})]})}),c.jsx("div",{className:"mt-4 text-sm text-gray-500",children:c.jsxs("p",{children:["Voting Ends: ",c.jsx("span",{className:"font-medium text-gray-900",children:r==null?void 0:r.votingPhaseEnd.toLocaleDateString()})]})})]}),i.length>0?c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(G=>{var le;return c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("div",{className:"aspect-w-16 aspect-h-9 mb-4",children:c.jsx("img",{src:G.imageUrl,alt:G.title,className:"object-cover rounded-lg"})}),c.jsx("h3",{className:"text-lg font-semibold mb-2",children:G.title}),c.jsx("p",{className:"text-gray-600 mb-4",children:G.description}),c.jsx("div",{className:"flex justify-between items-center mb-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-800",children:[G.averageRating?G.averageRating.toFixed(1):"0.0"," (",G.voteCount||0," votes)"]})]})}),c.jsx(DS,{entryId:G.id,onVote:ee=>Oe(G.id,ee),currentRating:(le=l.find(ee=>ee.entryId===G.id))==null?void 0:le.rating,tournamentState:r})]},G.id)})}):c.jsx("div",{className:"bg-white rounded-lg shadow-md p-6 text-center",children:c.jsx("p",{className:"text-gray-600",children:"No entries available for voting."})})]}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Vote on Tournaments"}),w.length>0?c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:w.map(G=>c.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:c.jsxs("div",{className:"p-5",children:[c.jsxs("div",{className:"flex justify-between items-start",children:[c.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:G.name}),c.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-green-100 text-green-800",children:"Voting"})]}),c.jsx("p",{className:"mt-2 text-sm text-gray-600 line-clamp-2",children:G.description||"No description provided."}),c.jsx("div",{className:"mt-4 text-sm text-gray-500 space-y-1",children:c.jsxs("div",{children:[c.jsx("span",{children:"Voting ends: "}),c.jsx("span",{children:en(G.votingPhaseEnd,"PPP")})]})}),c.jsxs("div",{className:"mt-6 flex space-x-3",children:[c.jsx(re,{to:`/tournament/${G.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),c.jsx(re,{to:`/tournament/${G.id}`,className:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Details"})]})]})},G.id))}):c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 text-center",children:[c.jsx("p",{className:"text-gray-600",children:"No tournaments currently in the voting phase."}),c.jsx(re,{to:"/",className:"mt-4 inline-block text-primary-600 hover:underline",children:"Return to Home"})]})]})}function Ph(){var m;const[n,e]=k.useState([]),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,l]=k.useState("");k.useEffect(()=>{h(),u()},[]);const u=async()=>{try{const y=await Xo();y&&l(y.currentPhase)}catch(y){console.error("Error fetching tournament state:",y)}},h=async()=>{try{r(!0),i(null),console.log("Fetching winners...");const y=Qe(be(X,"entries"),zn("averageRating","desc"),zn("voteCount","desc"),vE(10)),x=(await rt(y)).docs.map(A=>{const b=A.data();return console.log(`Entry ${A.id}:`,b),{id:A.id,...b}});console.log("Winners data:",x),e(x)}catch(y){console.error("Error fetching winners:",y),i(y.message||"Failed to load winners. Please try again later.")}finally{r(!1)}};return t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Competition Winners"}),a!=="completed"&&c.jsx("div",{className:"mt-4 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto",children:c.jsx("div",{className:"text-sm text-yellow-700",children:a==="submission"?"The competition is still in the submission phase. Winners will be announced after voting is complete.":a==="voting"?"Voting is currently in progress. Final winners will be announced after the voting phase ends.":"The competition results are not yet finalized."})})]}),s&&c.jsx("div",{className:"rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8",children:c.jsx("div",{className:"text-sm text-red-700",children:s})}),n.length>0?c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{className:"bg-gradient-to-r from-amber-100 to-yellow-100 shadow-xl rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsx("div",{className:"absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold",children:"1st Place"}),c.jsx("img",{src:n[0].imageUrl,alt:n[0].title,className:"w-full h-96 object-contain bg-white"})]}),c.jsxs("div",{className:"p-6 text-center",children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:n[0].title}),n[0].description&&c.jsx("p",{className:"mt-2 text-gray-600",children:n[0].description}),c.jsx("div",{className:"mt-4 flex items-center justify-center",children:c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-sm font-medium text-gray-500",children:"By"}),n[0].userPhotoURL?c.jsx("img",{src:n[0].userPhotoURL,alt:n[0].userDisplayName,className:"h-6 w-6 rounded-full"}):c.jsx("div",{className:"h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center",children:c.jsx("span",{className:"text-xs text-gray-600",children:((m=n[0].userDisplayName)==null?void 0:m[0])||"?"})}),c.jsx("span",{className:"text-sm font-medium text-gray-900",children:n[0].userDisplayName})]})}),c.jsx("div",{className:"mt-4 flex items-center justify-center space-x-4",children:c.jsxs("div",{className:"flex items-center",children:[c.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-900",children:[(n[0].averageRating||0).toFixed(1)," (",n[0].voteCount||0," votes)"]})]})})]})]}),c.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:n.slice(1).map((y,g)=>c.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("div",{className:"absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold",children:[g+2,OS(g+2)," Place"]}),c.jsx("img",{src:y.imageUrl,alt:y.title,className:"w-full h-48 object-contain bg-gray-50"})]}),c.jsxs("div",{className:"p-4",children:[c.jsx("h3",{className:"text-lg font-medium text-gray-900",children:y.title}),c.jsxs("div",{className:"mt-2 flex items-center text-sm",children:[c.jsx("span",{className:"text-gray-500 mr-1",children:"By"}),c.jsx("span",{className:"font-medium text-gray-900",children:y.userDisplayName})]}),c.jsxs("div",{className:"mt-2 flex items-center",children:[c.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),c.jsxs("span",{className:"ml-1 text-sm text-gray-600",children:[(y.averageRating||0).toFixed(1)," (",y.voteCount||0," votes)"]})]})]})]},y.id))})]}):c.jsx("div",{className:"text-center py-12",children:c.jsx("p",{className:"text-gray-500",children:"No entries found. Winners will be displayed after the voting phase is complete."})})]})}function OS(n){const e=n%10,t=n%100;return e===1&&t!==11?"st":e===2&&t!==12?"nd":e===3&&t!==13?"rd":"th"}const qa={async testLogin(n,e){console.log(`Attempting to login with email: ${n}`);try{const t=await cp(n,e);return console.log("Login result:",t),t}catch(t){throw console.error("Login error:",t),t}},async testRegister(n,e,t){console.log(`Attempting to register with email: ${n}${t?`, name: ${t}`:""}`);try{const r=await ap(n,e,t);return console.log("Registration result:",r),r}catch(r){throw console.error("Registration error:",r),r}},async testGoogleLogin(){console.log("Attempting to login with Google");try{const n=await lp();return console.log("Google login result:",n),n}catch(n){throw console.error("Google login error:",n),n}}};function VS(){const{user:n}=Pt(),[e,t]=k.useState(""),[r,s]=k.useState(""),[i,a]=k.useState(""),[l,u]=k.useState(!1),[h,m]=k.useState(""),[y,g]=k.useState(""),[x,A]=k.useState(""),[b,v]=k.useState(""),[j,I]=k.useState(!1),[V,F]=k.useState(""),[B,W]=k.useState(!1),P=async()=>{if(!e||!r){a("Please enter both email and password");return}u(!0),a("");try{const T=await qa.testLogin(e,r);a(`Login successful! User: ${JSON.stringify(T,null,2)}`)}catch(T){a(`Login failed: ${T.message}`)}finally{u(!1)}},_=async()=>{if(!h||!y){v("Please enter email and password");return}I(!0),v("");try{const T=await qa.testRegister(h,y,x||void 0);v(`Registration successful! User: ${JSON.stringify(T,null,2)}`)}catch(T){v(`Registration failed: ${T.message}`)}finally{I(!1)}},w=async()=>{W(!0),F("");try{await qa.testGoogleLogin(),F("Google sign-in initiated. You should be redirected to Google for authentication.")}catch(T){F(`Google login failed: ${T.message}`)}finally{W(!1)}};return c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[c.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Authentication Debug"}),n?c.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:[c.jsx("h2",{className:"text-lg font-medium text-green-700",children:"Logged In"}),c.jsx("pre",{className:"mt-2 text-sm text-gray-800 overflow-auto p-2 bg-gray-100 rounded",children:JSON.stringify(n,null,2)})]}):c.jsx("div",{className:"mb-4 p-4 bg-yellow-50 rounded-md",children:c.jsx("p",{className:"text-sm text-yellow-700",children:"Not logged in"})}),c.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:[c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Login"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-login-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),c.jsx("input",{id:"debug-login-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:e,onChange:T=>t(T.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-login-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsx("input",{id:"debug-login-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:r,onChange:T=>s(T.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:P,disabled:l,children:l?"Testing...":"Test Login"})}),i&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:i})})]})]}),c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Registration"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),c.jsx("input",{id:"debug-register-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:h,onChange:T=>m(T.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),c.jsx("input",{id:"debug-register-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:y,onChange:T=>g(T.target.value)})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"debug-register-name",className:"block text-sm font-medium text-gray-700",children:"Display Name (optional)"}),c.jsx("input",{id:"debug-register-name",type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:x,onChange:T=>A(T.target.value)})]}),c.jsx("div",{children:c.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:_,disabled:j,children:j?"Testing...":"Test Registration"})}),b&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:b})})]})]}),c.jsxs("div",{className:"border rounded-lg p-4",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Google Login"}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("div",{children:c.jsx("button",{type:"button",className:"w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:w,disabled:B,children:B?c.jsxs("span",{className:"flex items-center",children:[c.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):c.jsxs("span",{className:"flex items-center",children:[c.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:[c.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),c.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),c.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),c.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),c.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Sign in with Google"]})})}),V&&c.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:c.jsx("pre",{children:V})})]})]})]})]})})}function MS(){const{user:n}=fi(),e=At(),[t,r]=k.useState(""),[s,i]=k.useState(7),[a,l]=k.useState(7),[u,h]=k.useState(null),[m,y]=k.useState(!1),[g,x]=k.useState(!1),A=async b=>{if(b.preventDefault(),!n){h("You must be logged in to create a tournament");return}if(!t.trim()){h("Tournament name is required");return}try{y(!0),h(null);const v=await dP(t,n.id,s,a);console.log("Tournament created:",v),x(!0),setTimeout(()=>{e(`/admin/tournament/${v.id}/settings`)},1500)}catch(v){console.error("Error creating tournament:",v),h(v.message||"Failed to create tournament")}finally{y(!1)}};return c.jsx("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden",children:c.jsxs("div",{className:"px-6 py-4",children:[c.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4",children:"Create New Tournament"}),u&&c.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4",children:u}),g&&c.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4",children:"Tournament created successfully! Redirecting to settings..."}),c.jsxs("form",{onSubmit:A,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"name",className:"block text-gray-700 font-medium mb-2",children:"Tournament Name"}),c.jsx("input",{type:"text",id:"name",value:t,onChange:b=>r(b.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",placeholder:"Enter tournament name",disabled:m||g})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"submissionDays",className:"block text-gray-700 font-medium mb-2",children:"Submission Phase Duration (days)"}),c.jsx("input",{type:"number",id:"submissionDays",value:s,onChange:b=>i(parseInt(b.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{htmlFor:"votingDays",className:"block text-gray-700 font-medium mb-2",children:"Voting Phase Duration (days)"}),c.jsx("input",{type:"number",id:"votingDays",value:a,onChange:b=>l(parseInt(b.target.value,10)),min:1,max:30,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",disabled:m||g})]}),c.jsx("div",{className:"mt-6",children:c.jsx("button",{type:"submit",className:"w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:m||g,children:m?"Creating...":"Create Tournament"})})]})]})})}function LS(){return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Create New Tournament"}),c.jsx("div",{className:"max-w-3xl mx-auto",children:c.jsx("div",{className:"bg-white shadow-md rounded-lg overflow-hidden",children:c.jsxs("div",{className:"px-6 py-6",children:[c.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-6",children:"Tournament Details"}),c.jsx("p",{className:"text-gray-600 mb-6",children:"Create your own tournament and invite participants to submit entries and vote. As the tournament creator, you'll have admin privileges to manage the tournament."}),c.jsx(MS,{})]})})})]})}function FS(){const{tournamentId:n}=Xs(),e=n,{user:t}=Pt(),r=At(),[s,i]=k.useState(null),[a,l]=k.useState([]),[u,h]=k.useState(!0),[m,y]=k.useState(null),[g,x]=k.useState(!1),[A,b]=k.useState(!1),v=async()=>{try{if(!e)return;console.log("Fetching entries for tournament:",e);const B=await Pl(e);l(B)}catch(B){console.error("Error fetching entries:",B),y("Failed to load entries")}},j=async()=>{try{if(!e)return;console.log("Fetching results for tournament:",e);const B=await Sl(e);l(B)}catch(B){console.error("Error fetching results:",B),y("Failed to load results")}};k.useEffect(()=>{e&&(async()=>{try{if(h(!0),!e){console.error("No tournament ID provided");return}const W=await mi(e);if(console.log("Tournament found:",W),!W){console.error("Tournament not found");return}if(i(W),W.isPasswordProtected){console.log("Tournament is password protected");const P=(t==null?void 0:t.id)===W.ownerId;if(console.log("Is user owner?",P),!P){const _=localStorage.getItem(`tournament_access_${e}_${t==null?void 0:t.id}`);if(console.log("Has access from localStorage?",!!_),!_){console.log("Setting passwordRequired to true"),x(!0);return}}}b(!0),W.currentPhase==="completed"?j():v()}catch(W){console.error("Error fetching tournament:",W)}finally{h(!1)}})()},[e,t]);const I=()=>{x(!1),b(!0),(s==null?void 0:s.currentPhase)==="completed"?j():v()};if(u)return c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})});if(m)return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 mb-6",children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"flex-shrink-0",children:c.jsx("svg",{className:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),c.jsx("div",{className:"ml-3",children:c.jsx("p",{className:"text-sm text-red-700",children:m})})]})}),c.jsx("button",{className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",onClick:()=>r("/"),children:"Return to Home"})]});if(!s)return null;if(g&&!A)return c.jsx(Zo,{tournamentId:e,tournamentName:s.name,onPasswordSuccess:I});const F=(t==null?void 0:t.id)===s.ownerId||(t==null?void 0:t.isAdmin);return c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:c.jsxs("div",{className:"px-4 py-5 sm:px-6 flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:s.name}),c.jsxs("p",{className:"mt-1 text-sm text-gray-500",children:["Phase: ",s.currentPhase==="submission"?"Submission":s.currentPhase==="voting"?"Voting":"Completed"]})]}),s.isPasswordProtected&&c.jsxs("span",{className:"px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-800 flex items-center",children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:c.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),"Password Protected"]})]})}),c.jsxs("div",{className:"mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6",children:[c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-1/3",children:[c.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Tournament Details"}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Current Phase: "}),c.jsx("span",{className:"text-sm font-medium capitalize",children:s.currentPhase})]}),s.currentPhase==="submission"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Submission Started: "}),c.jsx("span",{className:"text-sm font-medium",children:xn(s.submissionPhaseStart,{addSuffix:!0})})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Submission Ends: "}),c.jsx("span",{className:"text-sm font-medium",children:xn(s.submissionPhaseEnd,{addSuffix:!0})})]})]}),s.currentPhase==="voting"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Voting Started: "}),c.jsx("span",{className:"text-sm font-medium",children:xn(s.votingPhaseStart,{addSuffix:!0})})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Voting Ends: "}),c.jsx("span",{className:"text-sm font-medium",children:xn(s.votingPhaseEnd,{addSuffix:!0})})]})]}),s.maxEntriesPerUser!==null&&c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Max Entries Per User: "}),c.jsx("span",{className:"text-sm font-medium",children:s.maxEntriesPerUser})]}),s.maxVotesPerUser!==null&&c.jsxs("div",{children:[c.jsx("span",{className:"text-sm text-gray-500",children:"Max Votes Per User: "}),c.jsx("span",{className:"text-sm font-medium",children:s.maxVotesPerUser})]})]}),c.jsxs("div",{className:"mt-6",children:[s.currentPhase==="submission"&&c.jsx(re,{to:`/tournament/${s.id}/submit`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Submit Design"}),s.currentPhase==="voting"&&c.jsx(re,{to:`/tournament/${s.id}/vote`,className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Vote Now"}),F&&c.jsx(re,{to:`/admin/tournament/${s.id}/settings`,className:"ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Manage Tournament"})]})]}),c.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg p-4 md:w-2/3",children:[c.jsxs("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:["Entries (",a.length,")"]}),a.length===0?c.jsx("p",{className:"text-sm text-gray-500",children:"No entries have been submitted yet."}):c.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:a.map(B=>c.jsxs("div",{className:"border border-gray-200 rounded-md p-3",children:[B.imageUrl&&c.jsx("img",{src:B.imageUrl,alt:B.title,className:"w-full h-32 object-cover rounded-md mb-2"}),c.jsx("h3",{className:"text-sm font-medium text-gray-900",children:B.title}),B.description&&c.jsx("p",{className:"mt-1 text-xs text-gray-500 line-clamp-2",children:B.description}),c.jsxs("div",{className:"mt-2 flex justify-between items-center text-xs text-gray-500",children:[c.jsxs("span",{children:[B.voteCount||0," votes"]}),c.jsx("span",{children:xn(B.createdAt instanceof Date?B.createdAt:B.createdAt.toDate(),{addSuffix:!0})})]})]},B.id))})]})]})]}),c.jsx(re,{to:"/",className:"inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 hover:text-primary-800",children:"← Back to tournaments"})]})}const US=new Py,$n=({children:n})=>{const{user:e,loading:t}=Pt();return k.useEffect(()=>{!t&&!e&&console.log("User not authenticated in PrivateRoute, redirecting to login")},[e,t]),t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?c.jsx(c.Fragment,{children:n}):c.jsx(Vh,{to:"/login"})},ws=({children:n})=>{const{user:e,loading:t}=Pt();return t?c.jsx("div",{className:"flex justify-center items-center min-h-screen",children:c.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?c.jsx(c.Fragment,{children:n}):c.jsx(Vh,{to:"/"})};function BS(){return k.useEffect(()=>{qA(),document.title="King Ideation Platform"},[]),c.jsx(CS,{children:c.jsx(Ry,{client:US,children:c.jsx(Xp,{basename:"/projectCP",children:c.jsx(Jp,{children:c.jsxs(we,{path:"/",element:c.jsx(JA,{}),children:[c.jsx(we,{index:!0,element:c.jsx(kS,{})}),c.jsx(we,{path:"login",element:c.jsx(ZA,{})}),c.jsx(we,{path:"register",element:c.jsx(eP,{})}),c.jsx(we,{path:"reset-password",element:c.jsx(tP,{})}),c.jsx(we,{path:"winners",element:c.jsx(Ph,{})}),c.jsx(we,{path:"debug-auth",element:c.jsx(VS,{})}),c.jsx(we,{path:"tournament/:tournamentId",element:c.jsx(FS,{})}),c.jsx(we,{path:"tournament/:tournamentId/submit",element:c.jsx($n,{children:c.jsx(Ih,{})})}),c.jsx(we,{path:"tournament/:tournamentId/vote",element:c.jsx($n,{children:c.jsx(Ah,{})})}),c.jsx(we,{path:"tournament/:tournamentId/winners",element:c.jsx(Ph,{})}),c.jsx(we,{path:"submit",element:c.jsx($n,{children:c.jsx(Ih,{})})}),c.jsx(we,{path:"vote",element:c.jsx($n,{children:c.jsx(Ah,{})})}),c.jsx(we,{path:"profile",element:c.jsx($n,{children:c.jsx(nP,{})})}),c.jsx(we,{path:"dashboard",element:c.jsx($n,{children:c.jsx(jS,{})})}),c.jsx(we,{path:"create-tournament",element:c.jsx($n,{children:c.jsx(LS,{})})}),c.jsx(we,{path:"admin",element:c.jsx(ws,{children:c.jsx(NS,{})})}),c.jsx(we,{path:"admin/entries",element:c.jsx(ws,{children:c.jsx(Th,{})})}),c.jsx(we,{path:"admin/settings",element:c.jsx(ws,{children:c.jsx(Eh,{})})}),c.jsx(we,{path:"admin/tournament/:tournamentId/settings",element:c.jsx(ws,{children:c.jsx(Eh,{})})}),c.jsx(we,{path:"admin/tournament/:tournamentId/entries",element:c.jsx(ws,{children:c.jsx(Th,{})})}),c.jsx(we,{path:"*",element:c.jsx("div",{children:"404 Not Found"})})]})})})})})}Fh(document.getElementById("root")).render(c.jsx(k.StrictMode,{children:c.jsx(BS,{})}));
//# sourceMappingURL=index-CNtKHJDK.js.map
