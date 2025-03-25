var qg=Object.defineProperty;var gu=n=>{throw TypeError(n)};var $g=(n,e,t)=>e in n?qg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var yu=(n,e,t)=>$g(n,typeof e!="symbol"?e+"":e,t),ua=(n,e,t)=>e.has(n)||gu("Cannot "+t);var k=(n,e,t)=>(ua(n,e,"read from private field"),t?t.call(n):e.get(n)),ee=(n,e,t)=>e.has(n)?gu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Q=(n,e,t,r)=>(ua(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),Ne=(n,e,t)=>(ua(n,e,"access private method"),t);var yi=(n,e,t,r)=>({set _(s){Q(n,e,s,t)},get _(){return k(n,e,r)}});import{r as M,a as Wg,g as zg,m as Hg,u as js,L as oe,O as Gg,B as Kg,R as Qg,b as Le,N as bd}from"./vendor-AUpUDmyy.js";import{A as ha,q as es,a as Yg}from"./ui-BhRZFa8j.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ed={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=M,Jg=Symbol.for("react.element"),Zg=Symbol.for("react.fragment"),ey=Object.prototype.hasOwnProperty,ty=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ny={key:!0,ref:!0,__self:!0,__source:!0};function Td(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)ey.call(e,r)&&!ny.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Jg,type:n,key:i,ref:a,props:s,_owner:ty.current}}ao.Fragment=Zg;ao.jsx=Td;ao.jsxs=Td;Ed.exports=ao;var u=Ed.exports,xd,_u=Wg;xd=_u.createRoot,_u.hydrateRoot;var co=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},lo=typeof window>"u"||"Deno"in globalThis;function it(){}function ry(n,e){return typeof n=="function"?n(e):n}function sy(n){return typeof n=="number"&&n>=0&&n!==1/0}function iy(n,e){return Math.max(n+(e||0)-Date.now(),0)}function vu(n,e){return typeof n=="function"?n(e):n}function oy(n,e){return typeof n=="function"?n(e):n}function wu(n,e){const{type:t="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:c}=n;if(a){if(r){if(e.queryHash!==cc(a,e.options))return!1}else if(!ws(e.queryKey,a))return!1}if(t!=="all"){const l=e.isActive();if(t==="active"&&!l||t==="inactive"&&l)return!1}return!(typeof c=="boolean"&&e.isStale()!==c||s&&s!==e.state.fetchStatus||i&&!i(e))}function bu(n,e){const{exact:t,status:r,predicate:s,mutationKey:i}=n;if(i){if(!e.options.mutationKey)return!1;if(t){if(vs(e.options.mutationKey)!==vs(i))return!1}else if(!ws(e.options.mutationKey,i))return!1}return!(r&&e.state.status!==r||s&&!s(e))}function cc(n,e){return((e==null?void 0:e.queryKeyHashFn)||vs)(n)}function vs(n){return JSON.stringify(n,(e,t)=>Oa(t)?Object.keys(t).sort().reduce((r,s)=>(r[s]=t[s],r),{}):t)}function ws(n,e){return n===e?!0:typeof n!=typeof e?!1:n&&e&&typeof n=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!ws(n[t],e[t])):!1}function Id(n,e){if(n===e)return n;const t=Eu(n)&&Eu(e);if(t||Oa(n)&&Oa(e)){const r=t?n:Object.keys(n),s=r.length,i=t?e:Object.keys(e),a=i.length,c=t?[]:{};let l=0;for(let d=0;d<a;d++){const m=t?d:i[d];(!t&&r.includes(m)||t)&&n[m]===void 0&&e[m]===void 0?(c[m]=void 0,l++):(c[m]=Id(n[m],e[m]),c[m]===n[m]&&n[m]!==void 0&&l++)}return s===a&&l===s?n:c}return e}function Eu(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function Oa(n){if(!Tu(n))return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(!Tu(t)||!t.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(n)!==Object.prototype)}function Tu(n){return Object.prototype.toString.call(n)==="[object Object]"}function ay(n){return new Promise(e=>{setTimeout(e,n)})}function cy(n,e,t){return typeof t.structuralSharing=="function"?t.structuralSharing(n,e):t.structuralSharing!==!1?Id(n,e):e}function ly(n,e,t=0){const r=[...n,e];return t&&r.length>t?r.slice(1):r}function uy(n,e,t=0){const r=[e,...n];return t&&r.length>t?r.slice(0,-1):r}var lc=Symbol();function Ad(n,e){return!n.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!n.queryFn||n.queryFn===lc?()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)):n.queryFn}var Pn,sn,dr,fd,hy=(fd=class extends co{constructor(){super();ee(this,Pn);ee(this,sn);ee(this,dr);Q(this,dr,e=>{if(!lo&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}})}onSubscribe(){k(this,sn)||this.setEventListener(k(this,dr))}onUnsubscribe(){var e;this.hasListeners()||((e=k(this,sn))==null||e.call(this),Q(this,sn,void 0))}setEventListener(e){var t;Q(this,dr,e),(t=k(this,sn))==null||t.call(this),Q(this,sn,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){k(this,Pn)!==e&&(Q(this,Pn,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){var e;return typeof k(this,Pn)=="boolean"?k(this,Pn):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Pn=new WeakMap,sn=new WeakMap,dr=new WeakMap,fd),Rd=new hy,fr,on,mr,md,dy=(md=class extends co{constructor(){super();ee(this,fr,!0);ee(this,on);ee(this,mr);Q(this,mr,e=>{if(!lo&&window.addEventListener){const t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}})}onSubscribe(){k(this,on)||this.setEventListener(k(this,mr))}onUnsubscribe(){var e;this.hasListeners()||((e=k(this,on))==null||e.call(this),Q(this,on,void 0))}setEventListener(e){var t;Q(this,mr,e),(t=k(this,on))==null||t.call(this),Q(this,on,e(this.setOnline.bind(this)))}setOnline(e){k(this,fr)!==e&&(Q(this,fr,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return k(this,fr)}},fr=new WeakMap,on=new WeakMap,mr=new WeakMap,md),Li=new dy;function fy(){let n,e;const t=new Promise((s,i)=>{n=s,e=i});t.status="pending",t.catch(()=>{});function r(s){Object.assign(t,s),delete t.resolve,delete t.reject}return t.resolve=s=>{r({status:"fulfilled",value:s}),n(s)},t.reject=s=>{r({status:"rejected",reason:s}),e(s)},t}function my(n){return Math.min(1e3*2**n,3e4)}function Sd(n){return(n??"online")==="online"?Li.isOnline():!0}var Pd=class extends Error{constructor(n){super("CancelledError"),this.revert=n==null?void 0:n.revert,this.silent=n==null?void 0:n.silent}};function da(n){return n instanceof Pd}function Nd(n){let e=!1,t=0,r=!1,s;const i=fy(),a=x=>{var T;r||(g(new Pd(x)),(T=n.abort)==null||T.call(n))},c=()=>{e=!0},l=()=>{e=!1},d=()=>Rd.isFocused()&&(n.networkMode==="always"||Li.isOnline())&&n.canRun(),m=()=>Sd(n.networkMode)&&n.canRun(),y=x=>{var T;r||(r=!0,(T=n.onSuccess)==null||T.call(n,x),s==null||s(),i.resolve(x))},g=x=>{var T;r||(r=!0,(T=n.onError)==null||T.call(n,x),s==null||s(),i.reject(x))},w=()=>new Promise(x=>{var T;s=j=>{(r||d())&&x(j)},(T=n.onPause)==null||T.call(n)}).then(()=>{var x;s=void 0,r||(x=n.onContinue)==null||x.call(n)}),A=()=>{if(r)return;let x;const T=t===0?n.initialPromise:void 0;try{x=T??n.fn()}catch(j){x=Promise.reject(j)}Promise.resolve(x).then(y).catch(j=>{var q;if(r)return;const S=n.retry??(lo?0:3),O=n.retryDelay??my,F=typeof O=="function"?O(t,j):O,$=S===!0||typeof S=="number"&&t<S||typeof S=="function"&&S(t,j);if(e||!$){g(j);return}t++,(q=n.onFail)==null||q.call(n,t,j),ay(F).then(()=>d()?void 0:w()).then(()=>{e?g(j):A()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:c,continueRetry:l,canStart:m,start:()=>(m()?A():w().then(A),i)}}function py(){let n=[],e=0,t=c=>{c()},r=c=>{c()},s=c=>setTimeout(c,0);const i=c=>{e?n.push(c):s(()=>{t(c)})},a=()=>{const c=n;n=[],c.length&&s(()=>{r(()=>{c.forEach(l=>{t(l)})})})};return{batch:c=>{let l;e++;try{l=c()}finally{e--,e||a()}return l},batchCalls:c=>(...l)=>{i(()=>{c(...l)})},schedule:i,setNotifyFunction:c=>{t=c},setBatchNotifyFunction:c=>{r=c},setScheduler:c=>{s=c}}}var Be=py(),Nn,pd,Cd=(pd=class{constructor(){ee(this,Nn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),sy(this.gcTime)&&Q(this,Nn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(n){this.gcTime=Math.max(this.gcTime||0,n??(lo?1/0:5*60*1e3))}clearGcTimeout(){k(this,Nn)&&(clearTimeout(k(this,Nn)),Q(this,Nn,void 0))}},Nn=new WeakMap,pd),pr,gr,Ze,Cn,ke,Ds,kn,ot,Ct,gd,gy=(gd=class extends Cd{constructor(t){super();ee(this,ot);ee(this,pr);ee(this,gr);ee(this,Ze);ee(this,Cn);ee(this,ke);ee(this,Ds);ee(this,kn);Q(this,kn,!1),Q(this,Ds,t.defaultOptions),this.setOptions(t.options),this.observers=[],Q(this,Cn,t.client),Q(this,Ze,k(this,Cn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Q(this,pr,_y(this.options)),this.state=t.state??k(this,pr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=k(this,ke))==null?void 0:t.promise}setOptions(t){this.options={...k(this,Ds),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&k(this,Ze).remove(this)}setData(t,r){const s=cy(this.state.data,t,this.options);return Ne(this,ot,Ct).call(this,{data:s,type:"success",dataUpdatedAt:r==null?void 0:r.updatedAt,manual:r==null?void 0:r.manual}),s}setState(t,r){Ne(this,ot,Ct).call(this,{type:"setState",state:t,setStateOptions:r})}cancel(t){var s,i;const r=(s=k(this,ke))==null?void 0:s.promise;return(i=k(this,ke))==null||i.cancel(t),r?r.then(it).catch(it):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(k(this,pr))}isActive(){return this.observers.some(t=>oy(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===lc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!iy(this.state.dataUpdatedAt,t)}onFocus(){var r;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(r=k(this,ke))==null||r.continue()}onOnline(){var r;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(r=k(this,ke))==null||r.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),k(this,Ze).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(r=>r!==t),this.observers.length||(k(this,ke)&&(k(this,kn)?k(this,ke).cancel({revert:!0}):k(this,ke).cancelRetry()),this.scheduleGc()),k(this,Ze).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ne(this,ot,Ct).call(this,{type:"invalidate"})}fetch(t,r){var d,m,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(r!=null&&r.cancelRefetch))this.cancel({silent:!0});else if(k(this,ke))return k(this,ke).continueRetry(),k(this,ke).promise}if(t&&this.setOptions(t),!this.options.queryFn){const g=this.observers.find(w=>w.options.queryFn);g&&this.setOptions(g.options)}const s=new AbortController,i=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>(Q(this,kn,!0),s.signal)})},a=()=>{const g=Ad(this.options,r),w={client:k(this,Cn),queryKey:this.queryKey,meta:this.meta};return i(w),Q(this,kn,!1),this.options.persister?this.options.persister(g,w,this):g(w)},c={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:k(this,Cn),state:this.state,fetchFn:a};i(c),(d=this.options.behavior)==null||d.onFetch(c,this),Q(this,gr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=c.fetchOptions)==null?void 0:m.meta))&&Ne(this,ot,Ct).call(this,{type:"fetch",meta:(y=c.fetchOptions)==null?void 0:y.meta});const l=g=>{var w,A,x,T;da(g)&&g.silent||Ne(this,ot,Ct).call(this,{type:"error",error:g}),da(g)||((A=(w=k(this,Ze).config).onError)==null||A.call(w,g,this),(T=(x=k(this,Ze).config).onSettled)==null||T.call(x,this.state.data,g,this)),this.scheduleGc()};return Q(this,ke,Nd({initialPromise:r==null?void 0:r.initialPromise,fn:c.fetchFn,abort:s.abort.bind(s),onSuccess:g=>{var w,A,x,T;if(g===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(g)}catch(j){l(j);return}(A=(w=k(this,Ze).config).onSuccess)==null||A.call(w,g,this),(T=(x=k(this,Ze).config).onSettled)==null||T.call(x,g,this.state.error,this),this.scheduleGc()},onError:l,onFail:(g,w)=>{Ne(this,ot,Ct).call(this,{type:"failed",failureCount:g,error:w})},onPause:()=>{Ne(this,ot,Ct).call(this,{type:"pause"})},onContinue:()=>{Ne(this,ot,Ct).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),k(this,ke).start()}},pr=new WeakMap,gr=new WeakMap,Ze=new WeakMap,Cn=new WeakMap,ke=new WeakMap,Ds=new WeakMap,kn=new WeakMap,ot=new WeakSet,Ct=function(t){const r=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...yy(s.data,this.options),fetchMeta:t.meta??null};case"success":return{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return da(i)&&i.revert&&k(this,gr)?{...k(this,gr),fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=r(this.state),Be.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),k(this,Ze).notify({query:this,type:"updated",action:t})})},gd);function yy(n,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Sd(e.networkMode)?"fetching":"paused",...n===void 0&&{error:null,status:"pending"}}}function _y(n){const e=typeof n.initialData=="function"?n.initialData():n.initialData,t=e!==void 0,r=t?typeof n.initialDataUpdatedAt=="function"?n.initialDataUpdatedAt():n.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"pending",fetchStatus:"idle"}}var ft,yd,vy=(yd=class extends co{constructor(e={}){super();ee(this,ft);this.config=e,Q(this,ft,new Map)}build(e,t,r){const s=t.queryKey,i=t.queryHash??cc(s,t);let a=this.get(i);return a||(a=new gy({client:e,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(s)}),this.add(a)),a}add(e){k(this,ft).has(e.queryHash)||(k(this,ft).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=k(this,ft).get(e.queryHash);t&&(e.destroy(),t===e&&k(this,ft).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Be.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return k(this,ft).get(e)}getAll(){return[...k(this,ft).values()]}find(e){const t={exact:!0,...e};return this.getAll().find(r=>wu(t,r))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter(r=>wu(e,r)):t}notify(e){Be.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){Be.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Be.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},ft=new WeakMap,yd),mt,Ue,Dn,pt,Jt,_d,wy=(_d=class extends Cd{constructor(t){super();ee(this,pt);ee(this,mt);ee(this,Ue);ee(this,Dn);this.mutationId=t.mutationId,Q(this,Ue,t.mutationCache),Q(this,mt,[]),this.state=t.state||by(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){k(this,mt).includes(t)||(k(this,mt).push(t),this.clearGcTimeout(),k(this,Ue).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Q(this,mt,k(this,mt).filter(r=>r!==t)),this.scheduleGc(),k(this,Ue).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){k(this,mt).length||(this.state.status==="pending"?this.scheduleGc():k(this,Ue).remove(this))}continue(){var t;return((t=k(this,Dn))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,c,l,d,m,y,g,w,A,x,T,j,S,O,F,$,q,I,_;Q(this,Dn,Nd({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(v,b)=>{Ne(this,pt,Jt).call(this,{type:"failed",failureCount:v,error:b})},onPause:()=>{Ne(this,pt,Jt).call(this,{type:"pause"})},onContinue:()=>{Ne(this,pt,Jt).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>k(this,Ue).canRun(this)}));const r=this.state.status==="pending",s=!k(this,Dn).canStart();try{if(!r){Ne(this,pt,Jt).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=k(this,Ue).config).onMutate)==null?void 0:a.call(i,t,this));const b=await((l=(c=this.options).onMutate)==null?void 0:l.call(c,t));b!==this.state.context&&Ne(this,pt,Jt).call(this,{type:"pending",context:b,variables:t,isPaused:s})}const v=await k(this,Dn).start();return await((m=(d=k(this,Ue).config).onSuccess)==null?void 0:m.call(d,v,t,this.state.context,this)),await((g=(y=this.options).onSuccess)==null?void 0:g.call(y,v,t,this.state.context)),await((A=(w=k(this,Ue).config).onSettled)==null?void 0:A.call(w,v,null,this.state.variables,this.state.context,this)),await((T=(x=this.options).onSettled)==null?void 0:T.call(x,v,null,t,this.state.context)),Ne(this,pt,Jt).call(this,{type:"success",data:v}),v}catch(v){try{throw await((S=(j=k(this,Ue).config).onError)==null?void 0:S.call(j,v,t,this.state.context,this)),await((F=(O=this.options).onError)==null?void 0:F.call(O,v,t,this.state.context)),await((q=($=k(this,Ue).config).onSettled)==null?void 0:q.call($,void 0,v,this.state.variables,this.state.context,this)),await((_=(I=this.options).onSettled)==null?void 0:_.call(I,void 0,v,t,this.state.context)),v}finally{Ne(this,pt,Jt).call(this,{type:"error",error:v})}}finally{k(this,Ue).runNext(this)}}},mt=new WeakMap,Ue=new WeakMap,Dn=new WeakMap,pt=new WeakSet,Jt=function(t){const r=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=r(this.state),Be.batch(()=>{k(this,mt).forEach(s=>{s.onMutationUpdate(t)}),k(this,Ue).notify({mutation:this,type:"updated",action:t})})},_d);function by(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var kt,at,Os,vd,Ey=(vd=class extends co{constructor(e={}){super();ee(this,kt);ee(this,at);ee(this,Os);this.config=e,Q(this,kt,new Set),Q(this,at,new Map),Q(this,Os,0)}build(e,t,r){const s=new wy({mutationCache:this,mutationId:++yi(this,Os)._,options:e.defaultMutationOptions(t),state:r});return this.add(s),s}add(e){k(this,kt).add(e);const t=_i(e);if(typeof t=="string"){const r=k(this,at).get(t);r?r.push(e):k(this,at).set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(k(this,kt).delete(e)){const t=_i(e);if(typeof t=="string"){const r=k(this,at).get(t);if(r)if(r.length>1){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}else r[0]===e&&k(this,at).delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=_i(e);if(typeof t=="string"){const r=k(this,at).get(t),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===e}else return!0}runNext(e){var r;const t=_i(e);if(typeof t=="string"){const s=(r=k(this,at).get(t))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Be.batch(()=>{k(this,kt).forEach(e=>{this.notify({type:"removed",mutation:e})}),k(this,kt).clear(),k(this,at).clear()})}getAll(){return Array.from(k(this,kt))}find(e){const t={exact:!0,...e};return this.getAll().find(r=>bu(t,r))}findAll(e={}){return this.getAll().filter(t=>bu(e,t))}notify(e){Be.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(t=>t.state.isPaused);return Be.batch(()=>Promise.all(e.map(t=>t.continue().catch(it))))}},kt=new WeakMap,at=new WeakMap,Os=new WeakMap,vd);function _i(n){var e;return(e=n.options.scope)==null?void 0:e.id}function xu(n){return{onFetch:(e,t)=>{var m,y,g,w,A;const r=e.options,s=(g=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:g.direction,i=((w=e.state.data)==null?void 0:w.pages)||[],a=((A=e.state.data)==null?void 0:A.pageParams)||[];let c={pages:[],pageParams:[]},l=0;const d=async()=>{let x=!1;const T=O=>{Object.defineProperty(O,"signal",{enumerable:!0,get:()=>(e.signal.aborted?x=!0:e.signal.addEventListener("abort",()=>{x=!0}),e.signal)})},j=Ad(e.options,e.fetchOptions),S=async(O,F,$)=>{if(x)return Promise.reject();if(F==null&&O.pages.length)return Promise.resolve(O);const q={client:e.client,queryKey:e.queryKey,pageParam:F,direction:$?"backward":"forward",meta:e.options.meta};T(q);const I=await j(q),{maxPages:_}=e.options,v=$?uy:ly;return{pages:v(O.pages,I,_),pageParams:v(O.pageParams,F,_)}};if(s&&i.length){const O=s==="backward",F=O?Ty:Iu,$={pages:i,pageParams:a},q=F(r,$);c=await S($,q,O)}else{const O=n??i.length;do{const F=l===0?a[0]??r.initialPageParam:Iu(r,c);if(l>0&&F==null)break;c=await S(c,F),l++}while(l<O)}return c};e.options.persister?e.fetchFn=()=>{var x,T;return(T=(x=e.options).persister)==null?void 0:T.call(x,d,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},t)}:e.fetchFn=d}}}function Iu(n,{pages:e,pageParams:t}){const r=e.length-1;return e.length>0?n.getNextPageParam(e[r],e,t[r],t):void 0}function Ty(n,{pages:e,pageParams:t}){var r;return e.length>0?(r=n.getPreviousPageParam)==null?void 0:r.call(n,e[0],e,t[0],t):void 0}var pe,an,cn,yr,_r,ln,vr,wr,wd,xy=(wd=class{constructor(n={}){ee(this,pe);ee(this,an);ee(this,cn);ee(this,yr);ee(this,_r);ee(this,ln);ee(this,vr);ee(this,wr);Q(this,pe,n.queryCache||new vy),Q(this,an,n.mutationCache||new Ey),Q(this,cn,n.defaultOptions||{}),Q(this,yr,new Map),Q(this,_r,new Map),Q(this,ln,0)}mount(){yi(this,ln)._++,k(this,ln)===1&&(Q(this,vr,Rd.subscribe(async n=>{n&&(await this.resumePausedMutations(),k(this,pe).onFocus())})),Q(this,wr,Li.subscribe(async n=>{n&&(await this.resumePausedMutations(),k(this,pe).onOnline())})))}unmount(){var n,e;yi(this,ln)._--,k(this,ln)===0&&((n=k(this,vr))==null||n.call(this),Q(this,vr,void 0),(e=k(this,wr))==null||e.call(this),Q(this,wr,void 0))}isFetching(n){return k(this,pe).findAll({...n,fetchStatus:"fetching"}).length}isMutating(n){return k(this,an).findAll({...n,status:"pending"}).length}getQueryData(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=k(this,pe).get(e.queryHash))==null?void 0:t.state.data}ensureQueryData(n){const e=this.defaultQueryOptions(n),t=k(this,pe).build(this,e),r=t.state.data;return r===void 0?this.fetchQuery(n):(n.revalidateIfStale&&t.isStaleByTime(vu(e.staleTime,t))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(n){return k(this,pe).findAll(n).map(({queryKey:e,state:t})=>{const r=t.data;return[e,r]})}setQueryData(n,e,t){const r=this.defaultQueryOptions({queryKey:n}),s=k(this,pe).get(r.queryHash),i=s==null?void 0:s.state.data,a=ry(e,i);if(a!==void 0)return k(this,pe).build(this,r).setData(a,{...t,manual:!0})}setQueriesData(n,e,t){return Be.batch(()=>k(this,pe).findAll(n).map(({queryKey:r})=>[r,this.setQueryData(r,e,t)]))}getQueryState(n){var t;const e=this.defaultQueryOptions({queryKey:n});return(t=k(this,pe).get(e.queryHash))==null?void 0:t.state}removeQueries(n){const e=k(this,pe);Be.batch(()=>{e.findAll(n).forEach(t=>{e.remove(t)})})}resetQueries(n,e){const t=k(this,pe);return Be.batch(()=>(t.findAll(n).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...n},e)))}cancelQueries(n,e={}){const t={revert:!0,...e},r=Be.batch(()=>k(this,pe).findAll(n).map(s=>s.cancel(t)));return Promise.all(r).then(it).catch(it)}invalidateQueries(n,e={}){return Be.batch(()=>(k(this,pe).findAll(n).forEach(t=>{t.invalidate()}),(n==null?void 0:n.refetchType)==="none"?Promise.resolve():this.refetchQueries({...n,type:(n==null?void 0:n.refetchType)??(n==null?void 0:n.type)??"active"},e)))}refetchQueries(n,e={}){const t={...e,cancelRefetch:e.cancelRefetch??!0},r=Be.batch(()=>k(this,pe).findAll(n).filter(s=>!s.isDisabled()).map(s=>{let i=s.fetch(void 0,t);return t.throwOnError||(i=i.catch(it)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(it)}fetchQuery(n){const e=this.defaultQueryOptions(n);e.retry===void 0&&(e.retry=!1);const t=k(this,pe).build(this,e);return t.isStaleByTime(vu(e.staleTime,t))?t.fetch(e):Promise.resolve(t.state.data)}prefetchQuery(n){return this.fetchQuery(n).then(it).catch(it)}fetchInfiniteQuery(n){return n.behavior=xu(n.pages),this.fetchQuery(n)}prefetchInfiniteQuery(n){return this.fetchInfiniteQuery(n).then(it).catch(it)}ensureInfiniteQueryData(n){return n.behavior=xu(n.pages),this.ensureQueryData(n)}resumePausedMutations(){return Li.isOnline()?k(this,an).resumePausedMutations():Promise.resolve()}getQueryCache(){return k(this,pe)}getMutationCache(){return k(this,an)}getDefaultOptions(){return k(this,cn)}setDefaultOptions(n){Q(this,cn,n)}setQueryDefaults(n,e){k(this,yr).set(vs(n),{queryKey:n,defaultOptions:e})}getQueryDefaults(n){const e=[...k(this,yr).values()],t={};return e.forEach(r=>{ws(n,r.queryKey)&&Object.assign(t,r.defaultOptions)}),t}setMutationDefaults(n,e){k(this,_r).set(vs(n),{mutationKey:n,defaultOptions:e})}getMutationDefaults(n){const e=[...k(this,_r).values()],t={};return e.forEach(r=>{ws(n,r.mutationKey)&&Object.assign(t,r.defaultOptions)}),t}defaultQueryOptions(n){if(n._defaulted)return n;const e={...k(this,cn).queries,...this.getQueryDefaults(n.queryKey),...n,_defaulted:!0};return e.queryHash||(e.queryHash=cc(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===lc&&(e.enabled=!1),e}defaultMutationOptions(n){return n!=null&&n._defaulted?n:{...k(this,cn).mutations,...(n==null?void 0:n.mutationKey)&&this.getMutationDefaults(n.mutationKey),...n,_defaulted:!0}}clear(){k(this,pe).clear(),k(this,an).clear()}},pe=new WeakMap,an=new WeakMap,cn=new WeakMap,yr=new WeakMap,_r=new WeakMap,ln=new WeakMap,vr=new WeakMap,wr=new WeakMap,wd),Iy=M.createContext(void 0),Ay=({client:n,children:e})=>(M.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]),u.jsx(Iy.Provider,{value:n,children:e})),Au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ry=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let g=(c&15)<<2|d>>6,w=d&63;l||(w=64,a||(g=64)),r.push(t[m],t[y],t[g],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ry(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new Sy;const g=i<<2|c>>4;if(r.push(g),d!==64){const w=c<<4&240|d>>2;if(r.push(w),y!==64){const A=d<<6&192|y;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Py=function(n){const e=kd(n);return Dd.encodeByteArray(e,!0)},Fi=function(n){return Py(n).replace(/\./g,"")},Od=function(n){try{return Dd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ny(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cy=()=>Ny().__FIREBASE_DEFAULTS__,ky=()=>{if(typeof process>"u"||typeof Au>"u")return;const n=Au.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Od(n[1]);return e&&JSON.parse(e)},uo=()=>{try{return Cy()||ky()||Dy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jd=n=>{var e,t;return(t=(e=uo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vd=n=>{const e=jd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Md=()=>{var n;return(n=uo())===null||n===void 0?void 0:n.config},Ld=n=>{var e;return(e=uo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Vy(){var n;const e=(n=uo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function My(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Uy(){return!Vy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bd(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function By(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qy,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hn.prototype.create)}}class Hn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$y(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new rt(s,c,r)}}function $y(n,e){return n.replace(Wy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wy=/\{\$([^}]+)}/g;function zy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ru(i)&&Ru(a)){if(!bs(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ru(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Hy(n,e){const t=new Gy(n,e);return t.subscribe.bind(t)}class Gy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ky(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=fa),s.error===void 0&&(s.error=fa),s.complete===void 0&&(s.complete=fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ky(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fa(){}/**
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
 */const Qy=1e3,Yy=2,Xy=4*60*60*1e3,Jy=.5;function Su(n,e=Qy,t=Yy){const r=e*Math.pow(t,n),s=Math.round(Jy*r*(Math.random()-.5)*2);return Math.min(Xy,r+s)}/**
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
 */function he(n){return n&&n._delegate?n._delegate:n}class tt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class Zy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Oy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t_(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e_(n){return n===In?void 0:n}function t_(n){return n.instantiationMode==="EAGER"}/**
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
 */class n_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const r_={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},s_=X.INFO,i_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},o_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=i_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ho{constructor(e){this.name=e,this._logLevel=s_,this._logHandler=o_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const a_=(n,e)=>e.some(t=>n instanceof t);let Pu,Nu;function c_(){return Pu||(Pu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l_(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $d=new WeakMap,ja=new WeakMap,Wd=new WeakMap,ma=new WeakMap,uc=new WeakMap;function u_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(hn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$d.set(t,n)}).catch(()=>{}),uc.set(e,n),e}function h_(n){if(ja.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ja.set(n,e)}let Va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ja.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function d_(n){Va=n(Va)}function f_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pa(this),e,...t);return Wd.set(r,e.sort?e.sort():[e]),hn(r)}:l_().includes(n)?function(...e){return n.apply(pa(this),e),hn($d.get(this))}:function(...e){return hn(n.apply(pa(this),e))}}function m_(n){return typeof n=="function"?f_(n):(n instanceof IDBTransaction&&h_(n),a_(n,c_())?new Proxy(n,Va):n)}function hn(n){if(n instanceof IDBRequest)return u_(n);if(ma.has(n))return ma.get(n);const e=m_(n);return e!==n&&(ma.set(n,e),uc.set(e,n)),e}const pa=n=>uc.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=hn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(hn(a.result),l.oldVersion,l.newVersion,hn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const p_=["get","getKey","getAll","getAllKeys","count"],g_=["put","add","delete","clear"],ga=new Map;function Cu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=g_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||p_.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return ga.set(e,i),i}d_(n=>({...n,get:(e,t,r)=>Cu(e,t)||n.get(e,t,r),has:(e,t)=>!!Cu(e,t)||n.has(e,t)}));/**
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
 */class y_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(__(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function __(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ma="@firebase/app",ku="0.10.13";/**
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
 */const Ft=new ho("@firebase/app"),v_="@firebase/app-compat",w_="@firebase/analytics-compat",b_="@firebase/analytics",E_="@firebase/app-check-compat",T_="@firebase/app-check",x_="@firebase/auth",I_="@firebase/auth-compat",A_="@firebase/database",R_="@firebase/data-connect",S_="@firebase/database-compat",P_="@firebase/functions",N_="@firebase/functions-compat",C_="@firebase/installations",k_="@firebase/installations-compat",D_="@firebase/messaging",O_="@firebase/messaging-compat",j_="@firebase/performance",V_="@firebase/performance-compat",M_="@firebase/remote-config",L_="@firebase/remote-config-compat",F_="@firebase/storage",U_="@firebase/storage-compat",B_="@firebase/firestore",q_="@firebase/vertexai-preview",$_="@firebase/firestore-compat",W_="firebase",z_="10.14.1";/**
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
 */const La="[DEFAULT]",H_={[Ma]:"fire-core",[v_]:"fire-core-compat",[b_]:"fire-analytics",[w_]:"fire-analytics-compat",[T_]:"fire-app-check",[E_]:"fire-app-check-compat",[x_]:"fire-auth",[I_]:"fire-auth-compat",[A_]:"fire-rtdb",[R_]:"fire-data-connect",[S_]:"fire-rtdb-compat",[P_]:"fire-fn",[N_]:"fire-fn-compat",[C_]:"fire-iid",[k_]:"fire-iid-compat",[D_]:"fire-fcm",[O_]:"fire-fcm-compat",[j_]:"fire-perf",[V_]:"fire-perf-compat",[M_]:"fire-rc",[L_]:"fire-rc-compat",[F_]:"fire-gcs",[U_]:"fire-gcs-compat",[B_]:"fire-fst",[$_]:"fire-fst-compat",[q_]:"fire-vertex","fire-js":"fire-js",[W_]:"fire-js-all"};/**
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
 */const Ui=new Map,G_=new Map,Fa=new Map;function Du(n,e){try{n.container.addComponent(e)}catch(t){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(Fa.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Fa.set(e,n);for(const t of Ui.values())Du(t,n);for(const t of G_.values())Du(t,n);return!0}function _n(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ct(n){return n.settings!==void 0}/**
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
 */const K_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new Hn("app","Firebase",K_);/**
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
 */class Q_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=z_;function Hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dn.create("bad-app-name",{appName:String(s)});if(t||(t=Md()),!t)throw dn.create("no-options");const i=Ui.get(s);if(i){if(bs(t,i.options)&&bs(r,i.config))return i;throw dn.create("duplicate-app",{appName:s})}const a=new n_(s);for(const l of Fa.values())a.addComponent(l);const c=new Q_(t,r,a);return Ui.set(s,c),c}function fo(n=La){const e=Ui.get(n);if(!e&&n===La&&Md())return Hd();if(!e)throw dn.create("no-app",{appName:n});return e}function He(n,e,t){var r;let s=(r=H_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(c.join(" "));return}ut(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Y_="firebase-heartbeat-database",X_=1,Es="firebase-heartbeat-store";let ya=null;function Gd(){return ya||(ya=zd(Y_,X_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Es)}catch(t){console.warn(t)}}}}).catch(n=>{throw dn.create("idb-open",{originalErrorMessage:n.message})})),ya}async function J_(n){try{const t=(await Gd()).transaction(Es),r=await t.objectStore(Es).get(Kd(n));return await t.done,r}catch(e){if(e instanceof rt)Ft.warn(e.message);else{const t=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(t.message)}}}async function Ou(n,e){try{const r=(await Gd()).transaction(Es,"readwrite");await r.objectStore(Es).put(e,Kd(n)),await r.done}catch(t){if(t instanceof rt)Ft.warn(t.message);else{const r=dn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ft.warn(r.message)}}}function Kd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Z_=1024,ev=30*24*60*60*1e3;class tv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=ev}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ju(),{heartbeatsToSend:r,unsentEntries:s}=nv(this._heartbeatsCache.heartbeats),i=Fi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ft.warn(t),""}}}function ju(){return new Date().toISOString().substring(0,10)}function nv(n,e=Z_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Vu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await J_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ou(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vu(n){return Fi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sv(n){ut(new tt("platform-logger",e=>new y_(e),"PRIVATE")),ut(new tt("heartbeat",e=>new tv(e),"PRIVATE")),He(Ma,ku,n),He(Ma,ku,"esm2017"),He("fire-js","")}sv("");function hc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Qd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iv=Qd,Yd=new Hn("auth","Firebase",Qd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new ho("@firebase/auth");function ov(n,...e){Bi.logLevel<=X.WARN&&Bi.warn(`Auth (${Gn}): ${n}`,...e)}function Si(n,...e){Bi.logLevel<=X.ERROR&&Bi.error(`Auth (${Gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,...e){throw fc(n,...e)}function _t(n,...e){return fc(n,...e)}function dc(n,e,t){const r=Object.assign(Object.assign({},iv()),{[e]:t});return new Hn("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function av(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&nt(n,"argument-error"),dc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Yd.create(n,...e)}function z(n,e,...t){if(!n)throw fc(e,...t)}function Dt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Si(e),new Error(e)}function Ut(n,e){n||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cv(){return Mu()==="http:"||Mu()==="https:"}function Mu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cv()||Ud()||"connection"in navigator)?navigator.onLine:!0}function uv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ut(t>e,"Short delay should be less than long delay!"),this.isMobile=jy()||Ly()}get(){return lv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n,e){Ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Ms(3e4,6e4);function Wt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function At(n,e,t,r,s={}){return Jd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Vs(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return My()||(d.referrerPolicy="no-referrer"),Xd.fetch()(Zd(n,n.config.apiHost,t,c),d)})}async function Jd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hv),e);try{const s=new mv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw vi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw vi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw vi(n,"user-disabled",a);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw dc(n,m,d);nt(n,m)}}catch(s){if(s instanceof rt)throw s;nt(n,"network-request-failed",{message:String(s)})}}async function Ls(n,e,t,r,s={}){const i=await At(n,e,t,r,s);return"mfaPendingCredential"in i&&nt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Zd(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?mc(n.config,s):`${n.config.apiScheme}://${s}`}function fv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_t(this.auth,"network-request-failed")),dv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=_t(n,e,r);return s.customData._tokenResponse=t,s}function Lu(n){return n!==void 0&&n.enterprise!==void 0}class pv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gv(n,e){return At(n,"GET","/v2/recaptchaConfig",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function ef(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _v(n,e=!1){const t=he(n),r=await t.getIdToken(e),s=pc(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ds(_a(s.auth_time)),issuedAtTime:ds(_a(s.iat)),expirationTime:ds(_a(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _a(n){return Number(n)*1e3}function pc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Si("JWT malformed, contained fewer than 3 sections"),null;try{const s=Od(t);return s?JSON.parse(s):(Si("Failed to decode base64 JWT payload"),null)}catch(s){return Si("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fu(n){const e=pc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await br(n,ef(t,{idToken:r}));z(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tf(i.providerUserInfo):[],c=Ev(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=l?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ba(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function bv(n){const e=he(n);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ev(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tf(n){return n.map(e=>{var{providerId:t}=e,r=hc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(n,e){const t=await Jd(n,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Zd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Xd.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xv(n,e){return At(n,"POST","/v2/accounts:revokeToken",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Fu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Tv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new cr;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=hc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ba(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await br(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _v(this,e)}reload(){return bv(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await qi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await br(this,yv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,w=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,T=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,S=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:O,emailVerified:F,isAnonymous:$,providerData:q,stsTokenManager:I}=t;z(O&&I,e,"internal-error");const _=cr.fromJSON(this.name,I);z(typeof O=="string",e,"internal-error"),Yt(y,e.name),Yt(g,e.name),z(typeof F=="boolean",e,"internal-error"),z(typeof $=="boolean",e,"internal-error"),Yt(w,e.name),Yt(A,e.name),Yt(x,e.name),Yt(T,e.name),Yt(j,e.name),Yt(S,e.name);const v=new Ot({uid:O,auth:e,email:g,emailVerified:F,displayName:y,isAnonymous:$,photoURL:A,phoneNumber:w,tenantId:x,stsTokenManager:_,createdAt:j,lastLoginAt:S});return q&&Array.isArray(q)&&(v.providerData=q.map(b=>Object.assign({},b))),T&&(v._redirectEventId=T),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new cr;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new cr;c.updateFromIdToken(r);const l=new Ot({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ba(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map;function jt(n){Ut(n instanceof Function,"Expected a class definition");let e=Uu.get(n);return e?(Ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uu.set(n,e),e)}/**
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
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nf.type="NONE";const Bu=nf;/**
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
 */function Pi(n,e,t){return`firebase:${n}:${e}:${t}`}class lr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new lr(jt(Bu),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||jt(Bu);const a=Pi(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){const y=Ot._fromJSON(e,m);d!==i&&(c=y),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new lr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new lr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(uf(e))return"Webos";if(sf(e))return"Safari";if((e.includes("chrome/")||of(e))&&!e.includes("edge/"))return"Chrome";if(cf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rf(n=je()){return/firefox\//i.test(n)}function sf(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function of(n=je()){return/crios\//i.test(n)}function af(n=je()){return/iemobile/i.test(n)}function cf(n=je()){return/android/i.test(n)}function lf(n=je()){return/blackberry/i.test(n)}function uf(n=je()){return/webos/i.test(n)}function gc(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Iv(n=je()){var e;return gc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Av(){return Fy()&&document.documentMode===10}function hf(n=je()){return gc(n)||cf(n)||uf(n)||lf(n)||/windows phone/i.test(n)||af(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n,e=[]){let t;switch(n){case"Browser":t=qu(je());break;case"Worker":t=`${qu(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${r}`}/**
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
 */class Rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sv(n,e={}){return At(n,"GET","/v2/passwordPolicy",Wt(n,e))}/**
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
 */const Pv=6;class Nv{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Pv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $u(this),this.idTokenSubscription=new $u(this),this.beforeStateQueue=new Rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ef(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(vt(this));const t=e?he(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sv(this),t=new Nv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await xv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ov(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rt(n){return he(n)}class $u{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hy(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kv(n){mo=n}function ff(n){return mo.loadJS(n)}function Dv(){return mo.recaptchaEnterpriseScript}function Ov(){return mo.gapiScript}function jv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Vv="recaptcha-enterprise",Mv="NO_RECAPTCHA";class Lv{constructor(e){this.type=Vv,this.auth=Rt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{gv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new pv(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;Lu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Mv)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Lu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Dv();l.length!==0&&(l+=c),ff(l).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Wu(n,e,t,r=!1){const s=new Lv(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $i(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n,e){const t=_n(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(bs(i,e??{}))return s;nt(s,"already-initialized")}return t.initialize({options:e})}function Uv(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bv(n,e,t){const r=Rt(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mf(e),{host:a,port:c}=qv(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$v()}function mf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qv(n){const e=mf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:zu(a)}}}function zu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $v(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,t){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}async function Wv(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(n,e){return Ls(n,"POST","/v1/accounts:signInWithPassword",Wt(n,e))}async function Hv(n,e){return At(n,"POST","/v1/accounts:sendOobCode",Wt(n,e))}async function Gv(n,e){return Hv(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}async function Qv(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends yc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ts(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ts(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,t,"signInWithPassword",zv);case"emailLink":return Kv(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,r,"signUpPassword",Wv);case"emailLink":return Qv(e,{idToken:t,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(n,e){return Ls(n,"POST","/v1/accounts:signInWithIdp",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="http://localhost";class Vn extends yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=hc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Vn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ur(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){const e={requestUri:Yv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jv(n){const e=is(os(n)).link,t=e?is(os(e)).deep_link_id:null,r=is(os(n)).deep_link_id;return(r?is(os(r)).link:null)||r||t||e||n}class _c{constructor(e){var t,r,s,i,a,c;const l=is(os(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,m=(r=l.oobCode)!==null&&r!==void 0?r:null,y=Xv((s=l.mode)!==null&&s!==void 0?s:null);z(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=Jv(e);try{return new _c(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.providerId=Nr.PROVIDER_ID}static credential(e,t){return Ts._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_c.parseLink(t);return z(r,"argument-error"),Ts._fromEmailAndCode(e,r.code,r.tenantId)}}Nr.PROVIDER_ID="password";Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Fs{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Fs{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Fs{constructor(){super("twitter.com")}static credential(e,t){return Vn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e){return Ls(n,"POST","/v1/accounts:signUp",Wt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),a=Hu(r);return new Mn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hu(r);return new Mn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends rt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Wi(e,t,r,s)}}function pf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wi._fromErrorAndOperation(n,i,e,r):i})}async function ew(n,e,t=!1){const r=await br(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mn._forOperation(n,"link",r)}/**
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
 */async function tw(n,e,t=!1){const{auth:r}=n;if(ct(r.app))return Promise.reject(vt(r));const s="reauthenticate";try{const i=await br(n,pf(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=pc(i.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),Mn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(n,e,t=!1){if(ct(n.app))return Promise.reject(vt(n));const r="signIn",s=await pf(n,r,e),i=await Mn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nw(n,e){return gf(Rt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n){const e=Rt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rw(n,e,t){const r=Rt(n);await $i(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Gv)}async function sw(n,e,t){if(ct(n.app))return Promise.reject(vt(n));const r=Rt(n),a=await $i(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&yf(n),l}),c=await Mn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function iw(n,e,t){return ct(n.app)?Promise.reject(vt(n)):nw(he(n),Nr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(n,e){return At(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=he(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await br(r,ow(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function cw(n,e,t,r){return he(n).onIdTokenChanged(e,t,r)}function lw(n,e,t){return he(n).beforeAuthStateChanged(e,t)}function uw(n,e,t,r){return he(n).onAuthStateChanged(e,t,r)}const zi="__sak";/**
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
 */class _f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=1e3,dw=10;class vf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Av()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const fw=vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wf.type="SESSION";const bf=wf;/**
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
 */function mw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class po{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new po(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),l=await mw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}po.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const d=wc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const g=y;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(m),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function gw(n){wt().location.href=n}/**
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
 */function Ef(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function yw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _w(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function vw(){return Ef()?self:null}/**
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
 */const Tf="firebaseLocalStorageDb",ww=1,Hi="firebaseLocalStorage",xf="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function go(n,e){return n.transaction([Hi],e?"readwrite":"readonly").objectStore(Hi)}function bw(){const n=indexedDB.deleteDatabase(Tf);return new Us(n).toPromise()}function qa(){const n=indexedDB.open(Tf,ww);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:xf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?e(r):(r.close(),await bw(),e(await qa()))})})}async function Gu(n,e,t){const r=go(n,!0).put({[xf]:e,value:t});return new Us(r).toPromise()}async function Ew(n,e){const t=go(n,!1).get(e),r=await new Us(t).toPromise();return r===void 0?null:r.value}function Ku(n,e){const t=go(n,!0).delete(e);return new Us(t).toPromise()}const Tw=800,xw=3;class If{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=po._getInstance(vw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yw(),!this.activeServiceWorker)return;this.sender=new pw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qa();return await Gu(e,zi,"1"),await Ku(e,zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ew(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ku(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=go(s,!1).getAll();return new Us(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}If.type="LOCAL";const Iw=If;new Ms(3e4,6e4);/**
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
 */function Af(n,e){return e?jt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bc extends yc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Aw(n){return gf(n.auth,new bc(n),n.bypassAuthState)}function Rw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),tw(t,new bc(n),n.bypassAuthState)}async function Sw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),ew(t,new bc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Aw;case"linkViaPopup":case"linkViaRedirect":return Sw;case"reauthViaPopup":case"reauthViaRedirect":return Rw;default:nt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Ms(2e3,1e4);class ar extends Rf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pw.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="pendingRedirect",Ni=new Map;class Cw extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const r=await kw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kw(n,e){const t=Pf(e),r=Sf(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Dw(n,e){return Sf(n)._set(Pf(e),"true")}function Ow(n,e){Ni.set(n._key(),e)}function Sf(n){return jt(n._redirectPersistence)}function Pf(n){return Pi(Nw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n,e,t){return Vw(n,e,t)}async function Vw(n,e,t){if(ct(n.app))return Promise.reject(vt(n));const r=Rt(n);av(n,e,vc),await r._initializationPromise;const s=Af(r,t);return await Dw(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Mw(n,e){return await Rt(n)._initializationPromise,Nf(n,e,!1)}async function Nf(n,e,t=!1){if(ct(n.app))return Promise.reject(vt(n));const r=Rt(n),s=Af(r,e),a=await new Cw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=10*60*1e3;class Fw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qu(e))}saveEventToCache(e){this.cachedEventUids.add(Qu(e)),this.lastProcessedEventTime=Date.now()}}function Qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e={}){return At(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$w=/^https?/;async function Ww(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bw(n);for(const t of e)try{if(zw(t))return}catch{}nt(n,"unauthorized-domain")}function zw(n){const e=Ua(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!$w.test(t))return!1;if(qw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hw=new Ms(3e4,6e4);function Yu(){const n=wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Gw(n){return new Promise((e,t)=>{var r,s,i;function a(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),t(_t(n,"network-request-failed"))},timeout:Hw.get()})}if(!((s=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wt().gapi)===null||i===void 0)&&i.load)a();else{const c=jv("iframefcb");return wt()[c]=()=>{gapi.load?a():t(_t(n,"network-request-failed"))},ff(`${Ov()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ci=null,e})}let Ci=null;function Kw(n){return Ci=Ci||Gw(n),Ci}/**
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
 */const Qw=new Ms(5e3,15e3),Yw="__/auth/iframe",Xw="emulator/auth/iframe",Jw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e0(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mc(e,Xw):`https://${n.config.authDomain}/${Yw}`,r={apiKey:e.apiKey,appName:n.name,v:Gn},s=Zw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Vs(r).slice(1)}`}async function t0(n){const e=await Kw(n),t=wt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:e0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=_t(n,"network-request-failed"),c=wt().setTimeout(()=>{i(a)},Qw.get());function l(){wt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const n0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r0=500,s0=600,i0="_blank",o0="http://localhost";class Xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a0(n,e,t,r=r0,s=s0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},n0),{width:r.toString(),height:s.toString(),top:i,left:a}),d=je().toLowerCase();t&&(c=of(d)?i0:t),rf(d)&&(e=e||o0,l.scrollbars="yes");const m=Object.entries(l).reduce((g,[w,A])=>`${g}${w}=${A},`,"");if(Iv(d)&&c!=="_self")return c0(e||"",c),new Xu(null);const y=window.open(e||"",c,m);z(y,n,"popup-blocked");try{y.focus()}catch{}return new Xu(y)}function c0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const l0="__/auth/handler",u0="emulator/auth/handler",h0=encodeURIComponent("fac");async function Ju(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Gn,eventId:s};if(e instanceof vc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof Fs){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),d=l?`#${h0}=${encodeURIComponent(l)}`:"";return`${d0(n)}?${Vs(c).slice(1)}${d}`}function d0({config:n}){return n.emulator?mc(n,u0):`https://${n.authDomain}/${l0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class f0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=Nf,this._overrideRedirectResult=Ow}async _openPopup(e,t,r,s){var i;Ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ju(e,t,r,Ua(),s);return a0(e,a,wc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ju(e,t,r,Ua(),s);return gw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await t0(e),r=new Fw(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(va,{type:va},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[va];a!==void 0&&t(!!a),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ww(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hf()||sf()||gc()}}const m0=f0;var Zu="@firebase/auth",eh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y0(n){ut(new tt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:df(n)},d=new Cv(r,s,i,l);return Uv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ut(new tt("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(r=>new p0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Zu,eh,g0(n)),He(Zu,eh,"esm2017")}/**
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
 */const _0=5*60,v0=Ld("authIdTokenMaxAge")||_0;let th=null;const w0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>v0)return;const s=t==null?void 0:t.token;th!==s&&(th=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function b0(n=fo()){const e=_n(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fv(n,{popupRedirectResolver:m0,persistence:[Iw,fw,bf]}),r=Ld("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=w0(i.toString());lw(t,a,()=>a(t.currentUser)),cw(t,c=>a(c))}}const s=jd("auth");return s&&Bv(t,`http://${s}`),t}function E0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=_t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",E0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y0("Browser");var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var On,kf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(b,R,N){for(var E=Array(arguments.length-2),St=2;St<arguments.length;St++)E[St-2]=arguments[St];return _.prototype[R].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var b=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)b[R]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(R=0;16>R;++R)b[R]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],R=I.g[2];var N=I.g[3],E=_+(N^v&(R^N))+b[0]+3614090360&4294967295;_=v+(E<<7&4294967295|E>>>25),E=N+(R^_&(v^R))+b[1]+3905402710&4294967295,N=_+(E<<12&4294967295|E>>>20),E=R+(v^N&(_^v))+b[2]+606105819&4294967295,R=N+(E<<17&4294967295|E>>>15),E=v+(_^R&(N^_))+b[3]+3250441966&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(N^v&(R^N))+b[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=N+(R^_&(v^R))+b[5]+1200080426&4294967295,N=_+(E<<12&4294967295|E>>>20),E=R+(v^N&(_^v))+b[6]+2821735955&4294967295,R=N+(E<<17&4294967295|E>>>15),E=v+(_^R&(N^_))+b[7]+4249261313&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(N^v&(R^N))+b[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=N+(R^_&(v^R))+b[9]+2336552879&4294967295,N=_+(E<<12&4294967295|E>>>20),E=R+(v^N&(_^v))+b[10]+4294925233&4294967295,R=N+(E<<17&4294967295|E>>>15),E=v+(_^R&(N^_))+b[11]+2304563134&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(N^v&(R^N))+b[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=N+(R^_&(v^R))+b[13]+4254626195&4294967295,N=_+(E<<12&4294967295|E>>>20),E=R+(v^N&(_^v))+b[14]+2792965006&4294967295,R=N+(E<<17&4294967295|E>>>15),E=v+(_^R&(N^_))+b[15]+1236535329&4294967295,v=R+(E<<22&4294967295|E>>>10),E=_+(R^N&(v^R))+b[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=N+(v^R&(_^v))+b[6]+3225465664&4294967295,N=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(N^_))+b[11]+643717713&4294967295,R=N+(E<<14&4294967295|E>>>18),E=v+(N^_&(R^N))+b[0]+3921069994&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^N&(v^R))+b[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=N+(v^R&(_^v))+b[10]+38016083&4294967295,N=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(N^_))+b[15]+3634488961&4294967295,R=N+(E<<14&4294967295|E>>>18),E=v+(N^_&(R^N))+b[4]+3889429448&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^N&(v^R))+b[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=N+(v^R&(_^v))+b[14]+3275163606&4294967295,N=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(N^_))+b[3]+4107603335&4294967295,R=N+(E<<14&4294967295|E>>>18),E=v+(N^_&(R^N))+b[8]+1163531501&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(R^N&(v^R))+b[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=N+(v^R&(_^v))+b[2]+4243563512&4294967295,N=_+(E<<9&4294967295|E>>>23),E=R+(_^v&(N^_))+b[7]+1735328473&4294967295,R=N+(E<<14&4294967295|E>>>18),E=v+(N^_&(R^N))+b[12]+2368359562&4294967295,v=R+(E<<20&4294967295|E>>>12),E=_+(v^R^N)+b[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=N+(_^v^R)+b[8]+2272392833&4294967295,N=_+(E<<11&4294967295|E>>>21),E=R+(N^_^v)+b[11]+1839030562&4294967295,R=N+(E<<16&4294967295|E>>>16),E=v+(R^N^_)+b[14]+4259657740&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^N)+b[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=N+(_^v^R)+b[4]+1272893353&4294967295,N=_+(E<<11&4294967295|E>>>21),E=R+(N^_^v)+b[7]+4139469664&4294967295,R=N+(E<<16&4294967295|E>>>16),E=v+(R^N^_)+b[10]+3200236656&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^N)+b[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=N+(_^v^R)+b[0]+3936430074&4294967295,N=_+(E<<11&4294967295|E>>>21),E=R+(N^_^v)+b[3]+3572445317&4294967295,R=N+(E<<16&4294967295|E>>>16),E=v+(R^N^_)+b[6]+76029189&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(v^R^N)+b[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=N+(_^v^R)+b[12]+3873151461&4294967295,N=_+(E<<11&4294967295|E>>>21),E=R+(N^_^v)+b[15]+530742520&4294967295,R=N+(E<<16&4294967295|E>>>16),E=v+(R^N^_)+b[2]+3299628645&4294967295,v=R+(E<<23&4294967295|E>>>9),E=_+(R^(v|~N))+b[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=N+(v^(_|~R))+b[7]+1126891415&4294967295,N=_+(E<<10&4294967295|E>>>22),E=R+(_^(N|~v))+b[14]+2878612391&4294967295,R=N+(E<<15&4294967295|E>>>17),E=v+(N^(R|~_))+b[5]+4237533241&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~N))+b[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=N+(v^(_|~R))+b[3]+2399980690&4294967295,N=_+(E<<10&4294967295|E>>>22),E=R+(_^(N|~v))+b[10]+4293915773&4294967295,R=N+(E<<15&4294967295|E>>>17),E=v+(N^(R|~_))+b[1]+2240044497&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~N))+b[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=N+(v^(_|~R))+b[15]+4264355552&4294967295,N=_+(E<<10&4294967295|E>>>22),E=R+(_^(N|~v))+b[6]+2734768916&4294967295,R=N+(E<<15&4294967295|E>>>17),E=v+(N^(R|~_))+b[13]+1309151649&4294967295,v=R+(E<<21&4294967295|E>>>11),E=_+(R^(v|~N))+b[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=N+(v^(_|~R))+b[11]+3174756917&4294967295,N=_+(E<<10&4294967295|E>>>22),E=R+(_^(N|~v))+b[2]+718787259&4294967295,R=N+(E<<15&4294967295|E>>>17),E=v+(N^(R|~_))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,b=this.B,R=this.h,N=0;N<_;){if(R==0)for(;N<=v;)s(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<_;)if(b[R++]=I.charCodeAt(N++),R==this.blockSize){s(this,b),R=0;break}}else for(;N<_;)if(b[R++]=I[N++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var b=0;32>b;b+=8)I[v++]=this.g[_]>>>b&255;return I};function i(I,_){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function a(I,_){this.h=_;for(var v=[],b=!0,R=I.length-1;0<=R;R--){var N=I[R]|0;b&&N==_||(v[R]=N,b=!1)}this.g=v}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return T(d(-I));for(var _=[],v=1,b=0;I>=v;b++)_[b]=I/v|0,v*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return T(m(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(_,8)),b=y,R=0;R<I.length;R+=8){var N=Math.min(8,I.length-R),E=parseInt(I.substring(R,R+N),_);8>N?(N=d(Math.pow(_,N)),b=b.j(N).add(d(E))):(b=b.j(v),b=b.add(d(E)))}return b}var y=l(0),g=l(1),w=l(16777216);n=a.prototype,n.m=function(){if(x(this))return-T(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var b=this.i(v);I+=(0<=b?b:4294967296+b)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A(this))return"0";if(x(this))return"-"+T(this).toString(I);for(var _=d(Math.pow(I,6)),v=this,b="";;){var R=F(v,_).g;v=j(v,R.j(_));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=R,A(v))return N+b;for(;6>N.length;)N="0"+N;b=N+b}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function A(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}n.l=function(I){return I=j(this,I),x(I)?-1:A(I)?0:1};function T(I){for(var _=I.g.length,v=[],b=0;b<_;b++)v[b]=~I.g[b];return new a(v,~I.h).add(g)}n.abs=function(){return x(this)?T(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],b=0,R=0;R<=_;R++){var N=b+(this.i(R)&65535)+(I.i(R)&65535),E=(N>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);b=E>>>16,N&=65535,E&=65535,v[R]=E<<16|N}return new a(v,v[v.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(T(_))}n.j=function(I){if(A(this)||A(I))return y;if(x(this))return x(I)?T(this).j(T(I)):T(T(this).j(I));if(x(I))return T(this.j(T(I)));if(0>this.l(w)&&0>I.l(w))return d(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],b=0;b<2*_;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<I.g.length;R++){var N=this.i(b)>>>16,E=this.i(b)&65535,St=I.i(R)>>>16,Mr=I.i(R)&65535;v[2*b+2*R]+=E*Mr,S(v,2*b+2*R),v[2*b+2*R+1]+=N*Mr,S(v,2*b+2*R+1),v[2*b+2*R+1]+=E*St,S(v,2*b+2*R+1),v[2*b+2*R+2]+=N*St,S(v,2*b+2*R+2)}for(b=0;b<_;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=_;b<2*_;b++)v[b]=0;return new a(v,0)};function S(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function O(I,_){this.g=I,this.h=_}function F(I,_){if(A(_))throw Error("division by zero");if(A(I))return new O(y,y);if(x(I))return _=F(T(I),_),new O(T(_.g),T(_.h));if(x(_))return _=F(I,T(_)),new O(T(_.g),_.h);if(30<I.g.length){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var v=g,b=_;0>=b.l(I);)v=$(v),b=$(b);var R=q(v,1),N=q(b,1);for(b=q(b,2),v=q(v,2);!A(b);){var E=N.add(b);0>=E.l(I)&&(R=R.add(v),N=E),b=q(b,1),v=q(v,1)}return _=j(I,R.j(_)),new O(R,_)}for(R=y;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),N=d(v),E=N.j(_);x(E)||0<E.l(I);)v-=b,N=d(v),E=N.j(_);A(N)&&(N=g),R=R.add(N),I=j(I,E)}return new O(R,I)}n.A=function(I){return F(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)&I.i(b);return new a(v,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)|I.i(b);return new a(v,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],b=0;b<_;b++)v[b]=this.i(b)^I.i(b);return new a(v,this.h^I.h)};function $(I){for(var _=I.g.length+1,v=[],b=0;b<_;b++)v[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(v,I.h)}function q(I,_){var v=_>>5;_%=32;for(var b=I.g.length-v,R=[],N=0;N<b;N++)R[N]=0<_?I.i(N+v)>>>_|I.i(N+v+1)<<32-_:I.i(N+v);return new a(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,On=a}).apply(typeof nh<"u"?nh:typeof self<"u"?self:typeof window<"u"?window:{});var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Df,as,Of,ki,$a,jf,Vf,Mf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof wi=="object"&&wi];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in f))break e;f=f[P]}o=o[o.length-1],p=f[o],h=h(p),h!=p&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,p=!1,P={next:function(){if(!p&&f<o.length){var C=f++;return{value:h(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function m(o,h,f){return o.call.apply(o.bind,arguments)}function y(o,h,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(h,P)}}return function(){return o.apply(h,arguments)}}function g(o,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function w(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,P,C){for(var L=Array(arguments.length-2),se=2;se<arguments.length;se++)L[se-2]=arguments[se];return h.prototype[P].apply(p,L)}}function x(o){const h=o.length;if(0<h){const f=Array(h);for(let p=0;p<h;p++)f[p]=o[p];return f}return[]}function T(o,h){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const P=o.length||0,C=p.length||0;o.length=P+C;for(let L=0;L<C;L++)o[P+L]=p[L]}else o.push(p)}}class j{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function S(o){return/^[\s\xa0]*$/.test(o)}function O(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function F(o){return F[" "](o),o}F[" "]=function(){};var $=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function q(o,h,f){for(const p in o)h.call(f,o[p],p,o)}function I(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function _(o){const h={};for(const f in o)h[f]=o[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,h){let f,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(f in p)o[f]=p[f];for(let C=0;C<v.length;C++)f=v[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function R(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function N(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Uo;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class St{constructor(){this.h=this.g=null}add(h,f){const p=Mr.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Mr=new j(()=>new ag,o=>o.reset());class ag{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Lr,Fr=!1,Uo=new St,gl=()=>{const o=c.Promise.resolve(void 0);Lr=()=>{o.then(cg)}};var cg=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){N(f)}var h=Mr;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}Fr=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var lg=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return o}();function Ur(o,h){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if($){e:{try{F(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ug[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ur.aa.h.call(this)}}A(Ur,Ae);var ug={2:"touch",3:"pen",4:"mouse"};Ur.prototype.h=function(){Ur.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Js="closure_listenable_"+(1e6*Math.random()|0),hg=0;function dg(o,h,f,p,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=P,this.key=++hg,this.da=this.fa=!1}function Zs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ei(o){this.src=o,this.g={},this.h=0}ei.prototype.add=function(o,h,f,p,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=qo(o,h,p,P);return-1<L?(h=o[L],f||(h.fa=!1)):(h=new dg(h,this.src,C,!!p,P),h.fa=f,o.push(h)),h};function Bo(o,h){var f=h.type;if(f in o.g){var p=o.g[f],P=Array.prototype.indexOf.call(p,h,void 0),C;(C=0<=P)&&Array.prototype.splice.call(p,P,1),C&&(Zs(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function qo(o,h,f,p){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==p)return P}return-1}var $o="closure_lm_"+(1e6*Math.random()|0),Wo={};function yl(o,h,f,p,P){if(Array.isArray(h)){for(var C=0;C<h.length;C++)yl(o,h[C],f,p,P);return null}return f=wl(f),o&&o[Js]?o.K(h,f,d(p)?!!p.capture:!1,P):fg(o,h,f,!1,p,P)}function fg(o,h,f,p,P,C){if(!h)throw Error("Invalid event type");var L=d(P)?!!P.capture:!!P,se=Ho(o);if(se||(o[$o]=se=new ei(o)),f=se.add(h,f,p,L,C),f.proxy)return f;if(p=mg(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)lg||(P=L),P===void 0&&(P=!1),o.addEventListener(h.toString(),p,P);else if(o.attachEvent)o.attachEvent(vl(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function mg(){function o(f){return h.call(o.src,o.listener,f)}const h=pg;return o}function _l(o,h,f,p,P){if(Array.isArray(h))for(var C=0;C<h.length;C++)_l(o,h[C],f,p,P);else p=d(p)?!!p.capture:!!p,f=wl(f),o&&o[Js]?(o=o.i,h=String(h).toString(),h in o.g&&(C=o.g[h],f=qo(C,f,p,P),-1<f&&(Zs(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[h],o.h--)))):o&&(o=Ho(o))&&(h=o.g[h.toString()],o=-1,h&&(o=qo(h,f,p,P)),(f=-1<o?h[o]:null)&&zo(f))}function zo(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Js])Bo(h.i,o);else{var f=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(f,p,o.capture):h.detachEvent?h.detachEvent(vl(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=Ho(h))?(Bo(f,o),f.h==0&&(f.src=null,h[$o]=null)):Zs(o)}}}function vl(o){return o in Wo?Wo[o]:Wo[o]="on"+o}function pg(o,h){if(o.da)o=!0;else{h=new Ur(h,this);var f=o.listener,p=o.ha||o.src;o.fa&&zo(o),o=f.call(p,h)}return o}function Ho(o){return o=o[$o],o instanceof ei?o:null}var Go="__closure_events_fn_"+(1e9*Math.random()>>>0);function wl(o){return typeof o=="function"?o:(o[Go]||(o[Go]=function(h){return o.handleEvent(h)}),o[Go])}function Re(){Ht.call(this),this.i=new ei(this),this.M=this,this.F=null}A(Re,Ht),Re.prototype[Js]=!0,Re.prototype.removeEventListener=function(o,h,f,p){_l(this,o,h,f,p)};function Ve(o,h){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new Ae(h,o);else if(h instanceof Ae)h.target=h.target||o;else{var P=h;h=new Ae(p,o),b(h,P)}if(P=!0,f)for(var C=f.length-1;0<=C;C--){var L=h.g=f[C];P=ti(L,p,!0,h)&&P}if(L=h.g=o,P=ti(L,p,!0,h)&&P,P=ti(L,p,!1,h)&&P,f)for(C=0;C<f.length;C++)L=h.g=f[C],P=ti(L,p,!1,h)&&P}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],p=0;p<f.length;p++)Zs(f[p]);delete o.g[h],o.h--}}this.F=null},Re.prototype.K=function(o,h,f,p){return this.i.add(String(o),h,!1,f,p)},Re.prototype.L=function(o,h,f,p){return this.i.add(String(o),h,!0,f,p)};function ti(o,h,f,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,C=0;C<h.length;++C){var L=h[C];if(L&&!L.da&&L.capture==f){var se=L.listener,be=L.ha||L.src;L.fa&&Bo(o.i,L),P=se.call(be,p)!==!1&&P}}return P&&!p.defaultPrevented}function bl(o,h,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(o,h||0)}function El(o){o.g=bl(()=>{o.g=null,o.i&&(o.i=!1,El(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class gg extends Ht{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:El(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(o){Ht.call(this),this.h=o,this.g={}}A(Br,Ht);var Tl=[];function xl(o){q(o.g,function(h,f){this.g.hasOwnProperty(f)&&zo(h)},o),o.g={}}Br.prototype.N=function(){Br.aa.N.call(this),xl(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ko=c.JSON.stringify,yg=c.JSON.parse,_g=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Qo(){}Qo.prototype.h=null;function Il(o){return o.h||(o.h=o.i())}function Al(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yo(){Ae.call(this,"d")}A(Yo,Ae);function Xo(){Ae.call(this,"c")}A(Xo,Ae);var bn={},Rl=null;function ni(){return Rl=Rl||new Re}bn.La="serverreachability";function Sl(o){Ae.call(this,bn.La,o)}A(Sl,Ae);function $r(o){const h=ni();Ve(h,new Sl(h))}bn.STAT_EVENT="statevent";function Pl(o,h){Ae.call(this,bn.STAT_EVENT,o),this.stat=h}A(Pl,Ae);function Me(o){const h=ni();Ve(h,new Pl(h,o))}bn.Ma="timingevent";function Nl(o,h){Ae.call(this,bn.Ma,o),this.size=h}A(Nl,Ae);function Wr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},h)}function zr(){this.g=!0}zr.prototype.xa=function(){this.g=!1};function vg(o,h,f,p,P,C){o.info(function(){if(o.g)if(C)for(var L="",se=C.split("&"),be=0;be<se.length;be++){var Z=se[be].split("=");if(1<Z.length){var Se=Z[0];Z=Z[1];var Pe=Se.split("_");L=2<=Pe.length&&Pe[1]=="type"?L+(Se+"="+Z+"&"):L+(Se+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+h+`
`+f+`
`+L})}function wg(o,h,f,p,P,C,L){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+h+`
`+f+`
`+C+" "+L})}function Xn(o,h,f,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Eg(o,f)+(p?" "+p:"")})}function bg(o,h){o.info(function(){return"TIMEOUT: "+h})}zr.prototype.info=function(){};function Eg(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<P.length;L++)P[L]=""}}}}return Ko(f)}catch{return h}}var ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jo;function si(){}A(si,Qo),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},Jo=new si;function Gt(o,h,f,p){this.j=o,this.i=h,this.l=f,this.R=p||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var Dl={},Zo={};function ea(o,h,f){o.L=1,o.v=ci(Pt(h)),o.m=f,o.P=!0,Ol(o,null)}function Ol(o,h){o.F=Date.now(),ii(o),o.A=Pt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Kl(f.i,"t",p),o.C=0,f=o.j.J,o.h=new kl,o.g=du(o.j,f?h:null,!o.m),0<o.O&&(o.M=new gg(g(o.Y,o,o.g),o.O)),h=o.U,f=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Tl[0]=P.toString()),P=Tl);for(var C=0;C<P.length;C++){var L=yl(f,P[C],p||h.handleEvent,!1,h.h||h);if(!L)break;h.g[L.key]=L}h=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),$r(),vg(o.i,o.u,o.A,o.l,o.R,o.m)}Gt.prototype.ca=function(o){o=o.target;const h=this.M;h&&Nt(o)==3?h.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=Nt(this.g);var h=this.g.Ba();const er=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||tu(this.g)))){this.J||Pe!=4||h==7||(h==8||0>=er?$r(3):$r(2)),ta(this);var f=this.g.Z();this.X=f;t:if(jl(this)){var p=tu(this.g);o="";var P=p.length,C=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Hr(this);var L="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,o+=this.h.i.decode(p[h],{stream:!(C&&h==P-1)});p.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=f==200,wg(this.i,this.u,this.A,this.l,this.R,Pe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var se,be=this.g;if((se=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(se)){var Z=se;break t}}Z=null}if(f=Z)Xn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,f);else{this.o=!1,this.s=3,Me(12),En(this),Hr(this);break e}}if(this.P){f=!0;let st;for(;!this.J&&this.C<L.length;)if(st=Tg(this,L),st==Zo){Pe==4&&(this.s=4,Me(14),f=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==Dl){this.s=4,Me(15),Xn(this.i,this.l,L,"[Invalid Chunk]"),f=!1;break}else Xn(this.i,this.l,st,null),na(this,st);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||L.length!=0||this.h.h||(this.s=1,Me(16),f=!1),this.o=this.o&&f,!f)Xn(this.i,this.l,L,"[Invalid Chunked Response]"),En(this),Hr(this);else if(0<L.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ca(Se),Se.M=!0,Me(11))}}else Xn(this.i,this.l,L,null),na(this,L);Pe==4&&En(this),this.o&&!this.J&&(Pe==4?cu(this.j,this):(this.o=!1,ii(this)))}else Ug(this.g),f==400&&0<L.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),En(this),Hr(this)}}}catch{}finally{}};function jl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tg(o,h){var f=o.C,p=h.indexOf(`
`,f);return p==-1?Zo:(f=Number(h.substring(f,p)),isNaN(f)?Dl:(p+=1,p+f>h.length?Zo:(h=h.slice(p,p+f),o.C=p+f,h)))}Gt.prototype.cancel=function(){this.J=!0,En(this)};function ii(o){o.S=Date.now()+o.I,Vl(o,o.I)}function Vl(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wr(g(o.ba,o),h)}function ta(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bg(this.i,this.A),this.L!=2&&($r(),Me(17)),En(this),this.s=2,Hr(this)):Vl(this,this.S-o)};function Hr(o){o.j.G==0||o.J||cu(o.j,o)}function En(o){ta(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,xl(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function na(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||ra(f.h,o))){if(!o.K&&ra(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)mi(f),di(f);else break e;aa(f),Me(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(g(f.Za,f),6e3));if(1>=Fl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else xn(f,11)}else if((o.K||f.g==o)&&mi(f),!S(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let Z=P[h];if(f.T=Z[0],Z=Z[1],f.G==2)if(Z[0]=="c"){f.K=Z[1],f.ia=Z[2];const Se=Z[3];Se!=null&&(f.la=Se,f.j.info("VER="+f.la));const Pe=Z[4];Pe!=null&&(f.Aa=Pe,f.j.info("SVER="+f.Aa));const er=Z[5];er!=null&&typeof er=="number"&&0<er&&(p=1.5*er,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const st=o.g;if(st){const gi=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var C=p.h;C.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(sa(C,C.h),C.h=null))}if(p.D){const la=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;la&&(p.ya=la,ce(p.I,p.D,la))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var L=o;if(p.qa=hu(p,p.J?p.ia:null,p.W),L.K){Ul(p.h,L);var se=L,be=p.L;be&&(se.I=be),se.B&&(ta(se),ii(se)),p.g=L}else ou(p);0<f.i.length&&fi(f)}else Z[0]!="stop"&&Z[0]!="close"||xn(f,7);else f.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?xn(f,7):oa(f):Z[0]!="noop"&&f.l&&f.l.ta(Z),f.v=0)}}$r(4)}catch{}}var xg=class{constructor(o,h){this.g=o,this.map=h}};function Ml(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ll(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fl(o){return o.h?1:o.g?o.g.size:0}function ra(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function sa(o,h){o.g?o.g.add(h):o.h=h}function Ul(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Ml.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return x(o.i)}function Ig(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var h=[],f=o.length,p=0;p<f;p++)h.push(o[p]);return h}h=[],f=0;for(p in o)h[f++]=o[p];return h}function Ag(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const p in o)h[f++]=p;return h}}}function ql(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=Ag(o),p=Ig(o),P=p.length,C=0;C<P;C++)h.call(void 0,p[C],f&&f[C],o)}var $l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rg(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),P=null;if(0<=p){var C=o[f].substring(0,p);P=o[f].substring(p+1)}else C=o[f];h(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Tn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Tn){this.h=o.h,oi(this,o.j),this.o=o.o,this.g=o.g,ai(this,o.s),this.l=o.l;var h=o.i,f=new Qr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Wl(this,f),this.m=o.m}else o&&(h=String(o).match($l))?(this.h=!1,oi(this,h[1]||"",!0),this.o=Gr(h[2]||""),this.g=Gr(h[3]||"",!0),ai(this,h[4]),this.l=Gr(h[5]||"",!0),Wl(this,h[6]||"",!0),this.m=Gr(h[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Tn.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Kr(h,zl,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Kr(h,zl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Kr(f,f.charAt(0)=="/"?Ng:Pg,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Kr(f,kg)),o.join("")};function Pt(o){return new Tn(o)}function oi(o,h,f){o.j=f?Gr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function ai(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Wl(o,h,f){h instanceof Qr?(o.i=h,Dg(o.i,o.h)):(f||(h=Kr(h,Cg)),o.i=new Qr(h,o.h))}function ce(o,h,f){o.i.set(h,f)}function ci(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Kr(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,Sg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zl=/[#\/\?@]/g,Pg=/[#\?:]/g,Ng=/[#\?]/g,Cg=/[#\?@]/g,kg=/#/g;function Qr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Kt(o){o.g||(o.g=new Map,o.h=0,o.i&&Rg(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Qr.prototype,n.add=function(o,h){Kt(this),this.i=null,o=Jn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function Hl(o,h){Kt(o),h=Jn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Gl(o,h){return Kt(o),h=Jn(o,h),o.g.has(h)}n.forEach=function(o,h){Kt(this),this.g.forEach(function(f,p){f.forEach(function(P){o.call(h,P,p,this)},this)},this)},n.na=function(){Kt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let p=0;p<h.length;p++){const P=o[p];for(let C=0;C<P.length;C++)f.push(h[p])}return f},n.V=function(o){Kt(this);let h=[];if(typeof o=="string")Gl(this,o)&&(h=h.concat(this.g.get(Jn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return Kt(this),this.i=null,o=Jn(this,o),Gl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Kl(o,h,f){Hl(o,h),0<f.length&&(o.i=null,o.g.set(Jn(o,h),x(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var p=h[f];const C=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var P=C;L[p]!==""&&(P+="="+encodeURIComponent(String(L[p]))),o.push(P)}}return this.i=o.join("&")};function Jn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Dg(o,h){h&&!o.j&&(Kt(o),o.i=null,o.g.forEach(function(f,p){var P=p.toLowerCase();p!=P&&(Hl(this,p),Kl(this,P,f))},o)),o.j=h}function Og(o,h){const f=new zr;if(c.Image){const p=new Image;p.onload=w(Qt,f,"TestLoadImage: loaded",!0,h,p),p.onerror=w(Qt,f,"TestLoadImage: error",!1,h,p),p.onabort=w(Qt,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=w(Qt,f,"TestLoadImage: timeout",!1,h,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function jg(o,h){const f=new zr,p=new AbortController,P=setTimeout(()=>{p.abort(),Qt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(P),C.ok?Qt(f,"TestPingServer: ok",!0,h):Qt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qt(f,"TestPingServer: error",!1,h)})}function Qt(o,h,f,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(f)}catch{}}function Vg(){this.g=new _g}function Mg(o,h,f){const p=f||"";try{ql(o,function(P,C){let L=P;d(P)&&(L=Ko(P)),h.push(p+C+"="+encodeURIComponent(L))})}catch(P){throw h.push(p+"type="+encodeURIComponent("_badmap")),P}}function li(o){this.l=o.Ub||null,this.j=o.eb||!1}A(li,Qo),li.prototype.g=function(){return new ui(this.l,this.j)},li.prototype.i=function(o){return function(){return o}}({});function ui(o,h){Re.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ui,Re),n=ui.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Yr(this):Xr(this),this.readyState==3&&Ql(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Yr(this))},n.Qa=function(o){this.g&&(this.response=o,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xr(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function Xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yl(o){let h="";return q(o,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function ia(o,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Yl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ce(o,h,f))}function me(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(me,Re);var Lg=/^https?$/i,Fg=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jo.g(),this.v=this.o?Il(this.o):Il(Jo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(C){Xl(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)f.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Fg,h,void 0))||p||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of f)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Xl(this,C)}};function Xl(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Jl(o),hi(o)}function Jl(o){o.A||(o.A=!0,Ve(o,"complete"),Ve(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ve(this,"complete"),Ve(this,"abort"),hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zl(this):this.bb())},n.bb=function(){Zl(this)};function Zl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Nt(o)!=4||o.Z()!=2)){if(o.u&&Nt(o)==4)bl(o.Ea,0,o);else if(Ve(o,"readystatechange"),Nt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=L===0){var P=String(o.D).match($l)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),p=!Lg.test(P?P.toLowerCase():"")}f=p}if(f)Ve(o,"complete"),Ve(o,"success");else{o.m=6;try{var C=2<Nt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Jl(o)}}finally{hi(o)}}}}function hi(o,h){if(o.g){eu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||Ve(o,"ready");try{f.onreadystatechange=p}catch{}}}function eu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Nt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),yg(h)}};function tu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ug(o){const h={};o=(o.g&&2<=Nt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(S(o[p]))continue;var f=R(o[p]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[P]||[];h[P]=C,C.push(f)}I(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function nu(o){this.Aa=0,this.i=[],this.j=new zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,o),this.cb=Jr("retryDelaySeedMs",1e4,o),this.Wa=Jr("forwardChannelMaxRetries",2,o),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ml(o&&o.concurrentRequestLimit),this.Da=new Vg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nu.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,p){Me(0),this.W=o,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=hu(this,null,this.W),fi(this)};function oa(o){if(ru(o),o.G==3){var h=o.U++,f=Pt(o.I);if(ce(f,"SID",o.K),ce(f,"RID",h),ce(f,"TYPE","terminate"),Zr(o,f),h=new Gt(o,o.j,h),h.L=2,h.v=ci(Pt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=du(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ii(h)}uu(o)}function di(o){o.g&&(ca(o),o.g.cancel(),o.g=null)}function ru(o){di(o),o.u&&(c.clearTimeout(o.u),o.u=null),mi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function fi(o){if(!Ll(o.h)&&!o.s){o.s=!0;var h=o.Ga;Lr||gl(),Fr||(Lr(),Fr=!0),Uo.add(h,o),o.B=0}}function Bg(o,h){return Fl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wr(g(o.Ga,o,h),lu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Gt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=iu(this,P,h),f=Pt(this.I),ce(f,"RID",o),ce(f,"CVER",22),this.D&&ce(f,"X-HTTP-Session-Id",this.D),Zr(this,f),C&&(this.O?h="headers="+encodeURIComponent(String(Yl(C)))+"&"+h:this.m&&ia(f,this.m,C)),sa(this.h,P),this.Ua&&ce(f,"TYPE","init"),this.P?(ce(f,"$req",h),ce(f,"SID","null"),P.T=!0,ea(P,f,null)):ea(P,f,h),this.G=2}}else this.G==3&&(o?su(this,o):this.i.length==0||Ll(this.h)||su(this))};function su(o,h){var f;h?f=h.l:f=o.U++;const p=Pt(o.I);ce(p,"SID",o.K),ce(p,"RID",f),ce(p,"AID",o.T),Zr(o,p),o.m&&o.o&&ia(p,o.m,o.o),f=new Gt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=iu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),sa(o.h,f),ea(f,p,h)}function Zr(o,h){o.H&&q(o.H,function(f,p){ce(h,p,f)}),o.l&&ql({},function(f,p){ce(h,p,f)})}function iu(o,h,f){f=Math.min(o.i.length,f);var p=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const L=["count="+f];C==-1?0<f?(C=P[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let se=!0;for(let be=0;be<f;be++){let Z=P[be].g;const Se=P[be].map;if(Z-=C,0>Z)C=Math.max(0,P[be].g-100),se=!1;else try{Mg(Se,L,"req"+Z+"_")}catch{p&&p(Se)}}if(se){p=L.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,p}function ou(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Lr||gl(),Fr||(Lr(),Fr=!0),Uo.add(h,o),o.v=0}}function aa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wr(g(o.Fa,o),lu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wr(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),di(this),au(this))};function ca(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function au(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Pt(o.qa);ce(h,"RID","rpc"),ce(h,"SID",o.K),ce(h,"AID",o.T),ce(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(h,"TO",o.ja),ce(h,"TYPE","xmlhttp"),Zr(o,h),o.m&&o.o&&ia(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ci(Pt(h)),f.m=null,f.P=!0,Ol(f,o)}n.Za=function(){this.C!=null&&(this.C=null,di(this),aa(this),Me(19))};function mi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function cu(o,h){var f=null;if(o.g==h){mi(o),ca(o),o.g=null;var p=2}else if(ra(o.h,h))f=h.D,Ul(o.h,h),p=1;else return;if(o.G!=0){if(h.o)if(p==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=o.B;p=ni(),Ve(p,new Nl(p,f)),fi(o)}else ou(o);else if(P=h.s,P==3||P==0&&0<h.X||!(p==1&&Bg(o,h)||p==2&&aa(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),P){case 1:xn(o,5);break;case 4:xn(o,10);break;case 3:xn(o,6);break;default:xn(o,2)}}}function lu(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function xn(o,h){if(o.j.info("Error code "+h),h==2){var f=g(o.fb,o),p=o.Xa;const P=!p;p=new Tn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||oi(p,"https"),ci(p),P?Og(p.toString(),f):jg(p.toString(),f)}else Me(2);o.G=0,o.l&&o.l.sa(h),uu(o),ru(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function uu(o){if(o.G=0,o.ka=[],o.l){const h=Bl(o.h);(h.length!=0||o.i.length!=0)&&(T(o.ka,h),T(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function hu(o,h,f){var p=f instanceof Tn?Pt(f):new Tn(f);if(p.g!="")h&&(p.g=h+"."+p.g),ai(p,p.s);else{var P=c.location;p=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var C=new Tn(null);p&&oi(C,p),h&&(C.g=h),P&&ai(C,P),f&&(C.l=f),p=C}return f=o.D,h=o.ya,f&&h&&ce(p,f,h),ce(p,"VER",o.la),Zr(o,p),p}function du(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new me(new li({eb:f})):new me(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}n=fu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function pi(){}pi.prototype.g=function(o,h){return new Ke(o,h)};function Ke(o,h){Re.call(this),this.g=new nu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!S(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Zn(this)}A(Ke,Re),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){oa(this.g)},Ke.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ko(o),o=f);h.i.push(new xg(h.Ya++,o)),h.G==3&&fi(h)},Ke.prototype.N=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,Ke.aa.N.call(this)};function mu(o){Yo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}A(mu,Yo);function pu(){Xo.call(this),this.status=1}A(pu,Xo);function Zn(o){this.g=o}A(Zn,fu),Zn.prototype.ua=function(){Ve(this.g,"a")},Zn.prototype.ta=function(o){Ve(this.g,new mu(o))},Zn.prototype.sa=function(o){Ve(this.g,new pu)},Zn.prototype.ra=function(){Ve(this.g,"b")},pi.prototype.createWebChannel=pi.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,Mf=function(){return new pi},Vf=function(){return ni()},jf=bn,$a={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,ki=ri,Cl.COMPLETE="complete",Of=Cl,Al.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",Re.prototype.listen=Re.prototype.K,as=Al,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Df=me}).apply(typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{});const rh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new ho("@firebase/firestore");function ts(){return Ln.logLevel}function B(n,...e){if(Ln.logLevel<=X.DEBUG){const t=e.map(Ec);Ln.debug(`Firestore (${Cr}): ${n}`,...t)}}function Bt(n,...e){if(Ln.logLevel<=X.ERROR){const t=e.map(Ec);Ln.error(`Firestore (${Cr}): ${n}`,...t)}}function Er(n,...e){if(Ln.logLevel<=X.WARN){const t=e.map(Ec);Ln.warn(`Firestore (${Cr}): ${n}`,...t)}}function Ec(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+n;throw Bt(e),new Error(e)}function re(n,e){n||H()}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class x0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class I0{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){re(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new Lf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new De(e)}}class A0{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R0{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new A0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){re(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new S0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=N0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function Tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ie(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new ie(0,0))}static max(){return new G(new ie(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends xs{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const C0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends xs{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return C0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new U(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(le.fromString(e))}static fromName(e){return new W(le.fromString(e).popFirst(5))}static empty(){return new W(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new le(e.slice()))}}function k0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new mn(s,W.empty(),e)}function D0(n){return new mn(n.readTime,n.key,-1)}class mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mn(G.min(),W.empty(),-1)}static max(){return new mn(G.max(),W.empty(),-1)}}function O0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==j0)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(m=>{a[d]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function M0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Tc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tc.oe=-1;function yo(n){return n==null}function Gi(n){return n===0&&1/n==-1/0}function L0(n){return typeof n=="number"&&Number.isInteger(n)&&!Gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Uf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bi(this.root,e,this.comparator,!0)}}class bi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ih(this.data.getIterator())}getIteratorFrom(e){return new ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new xe(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bf("Invalid base64 string: "+i):i}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const F0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(n){if(re(!!n),typeof n=="string"){let e=0;const t=F0.exec(n);if(re(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ic(n){const e=n.mapValue.fields.__previous_value__;return xc(e)?Ic(e):e}function Is(n){const e=pn(n.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t,r,s,i,a,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class As{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{}};function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xc(n)?4:q0(n)?9007199254740991:B0(n)?10:11:H()}function Tt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Is(n).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=pn(s.timestampValue),c=pn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ge(s.doubleValue),c=ge(i.doubleValue);return a===c?Gi(a)===Gi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Tr(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(sh(a)!==sh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Tt(a[l],c[l])))return!1;return!0}(n,e);default:return H()}}function Rs(n,e){return(n.values||[]).find(t=>Tt(t,e))!==void 0}function xr(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ge(i.integerValue||i.doubleValue),l=ge(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return oh(n.timestampValue,e.timestampValue);case 4:return oh(Is(n),Is(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Fn(i),l=Fn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=te(c[d],l[d]);if(m!==0)return m}return te(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=te(ge(i.latitude),ge(a.latitude));return c!==0?c:te(ge(i.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ah(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,d,m;const y=i.fields||{},g=a.fields||{},w=(c=y.value)===null||c===void 0?void 0:c.arrayValue,A=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=te(((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0,((m=A==null?void 0:A.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:ah(w,A)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ei.mapValue&&a===Ei.mapValue)return 0;if(i===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let y=0;y<l.length&&y<m.length;++y){const g=te(l[y],m[y]);if(g!==0)return g;const w=xr(c[l[y]],d[m[y]]);if(w!==0)return w}return te(l.length,m.length)}(n.mapValue,e.mapValue);default:throw H()}}function oh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=pn(n),r=pn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function ah(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=xr(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function Ir(n){return Wa(n)}function Wa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=pn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wa(t.fields[a])}`;return s+"}"}(n.mapValue):H()}function ch(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function za(n){return!!n&&"integerValue"in n}function Ac(n){return!!n&&"arrayValue"in n}function lh(n){return!!n&&"nullValue"in n}function uh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Di(n){return!!n&&"mapValue"in n}function B0(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function fs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Kn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=fs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function q0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=fs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Di(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Kn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(fs(this.value))}}function qf(n){const e=[];return Kn(n.fields,(t,r)=>{const s=new Te([t]);if(Di(r)){const i=qf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,G.min(),G.min(),G.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Oe(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,G.min(),G.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,G.min(),G.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ki{constructor(e,t){this.position=e,this.inclusive=t}}function hh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=xr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ss{constructor(e,t="asc"){this.field=e,this.dir=t}}function $0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $f{}class _e extends $f{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new z0(e,t,r):t==="array-contains"?new K0(e,r):t==="in"?new Q0(e,r):t==="not-in"?new Y0(e,r):t==="array-contains-any"?new X0(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new H0(e,r):new G0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xr(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(xr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends $f{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return Wf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wf(n){return n.op==="and"}function zf(n){return W0(n)&&Wf(n)}function W0(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Ha(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+Ir(n.value);if(zf(n))return n.filters.map(e=>Ha(e)).join(",");{const e=n.filters.map(t=>Ha(t)).join(",");return`${n.op}(${e})`}}function Hf(n,e){return n instanceof _e?function(r,s){return s instanceof _e&&r.op===s.op&&r.field.isEqual(s.field)&&Tt(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Hf(a,s.filters[c]),!0):!1}(n,e):void H()}function Gf(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${Ir(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Gf).join(" ,")+"}"}(n):"Filter"}class z0 extends _e{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class H0 extends _e{constructor(e,t){super(e,"in",t),this.keys=Kf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class G0 extends _e{constructor(e,t){super(e,"not-in",t),this.keys=Kf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class K0 extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ac(t)&&Rs(t.arrayValue,this.value)}}class Q0 extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rs(this.value.arrayValue,t)}}class Y0 extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Rs(this.value.arrayValue,t)}}class X0 extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Rs(this.value.arrayValue,r))}}/**
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
 */class J0{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function fh(n,e=null,t=[],r=[],s=null,i=null,a=null){return new J0(n,e,t,r,s,i,a)}function Rc(n){const e=K(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ha(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ir(r)).join(",")),e.ue=t}return e.ue}function Sc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dh(n.startAt,e.startAt)&&dh(n.endAt,e.endAt)}function Ga(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z0(n,e,t,r,s,i,a,c){return new kr(n,e,t,r,s,i,a,c)}function Pc(n){return new kr(n)}function mh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qf(n){return n.collectionGroup!==null}function ms(n){const e=K(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(Te.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ss(i,r))}),t.has(Te.keyField().canonicalString())||e.ce.push(new Ss(Te.keyField(),r))}return e.ce}function bt(n){const e=K(n);return e.le||(e.le=eb(e,ms(n))),e.le}function eb(n,e){if(n.limitType==="F")return fh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ss(s.field,i)});const t=n.endAt?new Ki(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ki(n.startAt.position,n.startAt.inclusive):null;return fh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ka(n,e){const t=n.filters.concat([e]);return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qi(n,e,t){return new kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _o(n,e){return Sc(bt(n),bt(e))&&n.limitType===e.limitType}function Yf(n){return`${Rc(bt(n))}|lt:${n.limitType}`}function rr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gf(s)).join(", ")}]`),yo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ir(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ir(s)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function vo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const d=hh(a,c,l);return a.inclusive?d<=0:d<0}(r.startAt,ms(r),s)||r.endAt&&!function(a,c,l){const d=hh(a,c,l);return a.inclusive?d>=0:d>0}(r.endAt,ms(r),s))}(n,e)}function tb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xf(n){return(e,t)=>{let r=!1;for(const s of ms(n)){const i=nb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nb(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(i,a,c){const l=a.data.field(i),d=c.data.field(i);return l!==null&&d!==null?xr(l,d):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Uf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new de(W.comparator);function qt(){return rb}const Jf=new de(W.comparator);function cs(...n){let e=Jf;for(const t of n)e=e.insert(t.key,t);return e}function Zf(n){let e=Jf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return ps()}function em(){return ps()}function ps(){return new Dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const sb=new de(W.comparator),ib=new xe(W.comparator);function Y(...n){let e=ib;for(const t of n)e=e.add(t);return e}const ob=new xe(te);function ab(){return ob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(e)?"-0":e}}function tm(n){return{integerValue:""+n}}function cb(n,e){return L0(e)?tm(e):Nc(n,e)}/**
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
 */class wo{constructor(){this._=void 0}}function lb(n,e,t){return n instanceof Yi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&xc(i)&&(i=Ic(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Ps?rm(n,e):n instanceof Ns?sm(n,e):function(s,i){const a=nm(s,i),c=ph(a)+ph(s.Pe);return za(a)&&za(s.Pe)?tm(c):Nc(s.serializer,c)}(n,e)}function ub(n,e,t){return n instanceof Ps?rm(n,e):n instanceof Ns?sm(n,e):t}function nm(n,e){return n instanceof Xi?function(r){return za(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yi extends wo{}class Ps extends wo{constructor(e){super(),this.elements=e}}function rm(n,e){const t=im(e);for(const r of n.elements)t.some(s=>Tt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ns extends wo{constructor(e){super(),this.elements=e}}function sm(n,e){let t=im(e);for(const r of n.elements)t=t.filter(s=>!Tt(s,r));return{arrayValue:{values:t}}}class Xi extends wo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ph(n){return ge(n.integerValue||n.doubleValue)}function im(n){return Ac(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hb(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ps&&s instanceof Ps||r instanceof Ns&&s instanceof Ns?Tr(r.elements,s.elements,Tt):r instanceof Xi&&s instanceof Xi?Tt(r.Pe,s.Pe):r instanceof Yi&&s instanceof Yi}(n.transform,e.transform)}class db{constructor(e,t){this.version=e,this.transformResults=t}}class lt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bo{}function om(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cm(n.key,lt.none()):new $s(n.key,n.data,lt.none());{const t=n.data,r=ze.empty();let s=new xe(Te.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new vn(n.key,r,new Qe(s.toArray()),lt.none())}}function fb(n,e,t){n instanceof $s?function(s,i,a){const c=s.value.clone(),l=yh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof vn?function(s,i,a){if(!Oi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=yh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(am(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function gs(n,e,t,r){return n instanceof $s?function(i,a,c,l){if(!Oi(i.precondition,a))return c;const d=i.value.clone(),m=_h(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof vn?function(i,a,c,l){if(!Oi(i.precondition,a))return c;const d=_h(i.fieldTransforms,l,a),m=a.data;return m.setAll(am(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Oi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function mb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=nm(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function gh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Tr(r,s,(i,a)=>hb(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $s extends bo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vn extends bo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function am(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yh(n,e,t){const r=new Map;re(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ub(a,c,t[s]))}return r}function _h(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,lb(i,a,e))}return r}class cm extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pb extends bo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=em();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=om(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(t,r)=>gh(t,r))&&Tr(this.baseMutations,e.baseMutations,(t,r)=>gh(t,r))}}class Cc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){re(e.mutations.length===r.length);let s=function(){return sb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Cc(e,t,r,s)}}/**
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
 */class yb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _b{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,J;function vb(n){switch(n){default:return H();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function lm(n){if(n===void 0)return Bt("GRPC error has no .code"),D.UNKNOWN;switch(n){case ye.OK:return D.OK;case ye.CANCELLED:return D.CANCELLED;case ye.UNKNOWN:return D.UNKNOWN;case ye.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ye.INTERNAL:return D.INTERNAL;case ye.UNAVAILABLE:return D.UNAVAILABLE;case ye.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ye.NOT_FOUND:return D.NOT_FOUND;case ye.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ye.ABORTED:return D.ABORTED;case ye.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ye.DATA_LOSS:return D.DATA_LOSS;default:return H()}}(J=ye||(ye={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wb(){return new TextEncoder}/**
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
 */const bb=new On([4294967295,4294967295],0);function vh(n){const e=wb().encode(n),t=new kf;return t.update(e),new Uint8Array(t.digest())}function wh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new On([t,r],0),new On([s,i],0)]}class kc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ls(`Invalid padding: ${t}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ls(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=On.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(On.fromNumber(r)));return s.compare(bb)===1&&(s=new On([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=vh(e),[r,s]=wh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new kc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const t=vh(e),[r,s]=wh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ws.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Eo(G.min(),s,new de(te),qt(),Y())}}class Ws{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ws(r,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class um{constructor(e,t){this.targetId=e,this.me=t}}class hm{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bh{constructor(){this.fe=0,this.ge=Th(),this.pe=Ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Y(),t=Y(),r=Y();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Ws(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Th()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Eb{constructor(e){this.Le=e,this.Be=new Map,this.ke=qt(),this.qe=Eh(),this.Qe=new de(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ga(i))if(r===0){const a=new W(i.path);this.Ue(t,a,Oe.newNoDocument(a,G.min()))}else re(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Fn(r).toUint8Array()}catch(l){if(l instanceof Bf)return Er("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new kc(a,s,i)}catch(l){return Er(l instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&Ga(c.target)){const l=new W(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,Oe.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=Y();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Eo(e,t,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Eh(),this.Qe=new de(te),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xe(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Eh(){return new de(W.comparator)}function Th(){return new de(W.comparator)}const Tb={asc:"ASCENDING",desc:"DESCENDING"},xb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ib={and:"AND",or:"OR"};class Ab{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(n,e){return n.useProto3Json||yo(e)?e:{value:e}}function Ji(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rb(n,e){return Ji(n,e.toTimestamp())}function Et(n){return re(!!n),G.fromTimestamp(function(t){const r=pn(t);return new ie(r.seconds,r.nanos)}(n))}function Dc(n,e){return Ya(n,e).canonicalString()}function Ya(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fm(n){const e=le.fromString(n);return re(_m(e)),e}function Xa(n,e){return Dc(n.databaseId,e.path)}function wa(n,e){const t=fm(e);if(t.get(1)!==n.databaseId.projectId)throw new U(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(pm(t))}function mm(n,e){return Dc(n.databaseId,e)}function Sb(n){const e=fm(n);return e.length===4?le.emptyPath():pm(e)}function Ja(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pm(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xh(n,e,t){return{name:Xa(n,e),fields:t.value.mapValue.fields}}function Pb(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(re(m===void 0||typeof m=="string"),Ie.fromBase64String(m||"")):(re(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Ie.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const m=d.code===void 0?D.UNKNOWN:lm(d.code);return new U(m,d.message||"")}(a);t=new hm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wa(n,r.document.name),i=Et(r.document.updateTime),a=r.document.createTime?Et(r.document.createTime):G.min(),c=new ze({mapValue:{fields:r.document.fields}}),l=Oe.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ji(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wa(n,r.document),i=r.readTime?Et(r.readTime):G.min(),a=Oe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ji([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wa(n,r.document),i=r.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new _b(s,i),c=r.targetId;t=new um(c,a)}}return t}function Nb(n,e){let t;if(e instanceof $s)t={update:xh(n,e.key,e.value)};else if(e instanceof cm)t={delete:Xa(n,e.key)};else if(e instanceof vn)t={update:xh(n,e.key,e.data),updateMask:Fb(e.fieldMask)};else{if(!(e instanceof pb))return H();t={verify:Xa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ps)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ns)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xi)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Rb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(n,e.precondition)),t}function Cb(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Et(s.updateTime):Et(i);return a.isEqual(G.min())&&(a=Et(i)),new db(a,s.transformResults||[])}(t,e))):[]}function kb(n,e){return{documents:[mm(n,e.path)]}}function Db(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=mm(n,s);const i=function(d){if(d.length!==0)return ym(ht.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(g){return{field:sr(g.field),direction:Vb(g.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Qa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:s}}function Ob(n){let e=Sb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){re(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const g=gm(y);return g instanceof ht&&zf(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(g=>function(A){return new Ss(ir(A.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(y){let g;return g=typeof y=="object"?y.value:y,yo(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(y){const g=!!y.before,w=y.values||[];return new Ki(w,g)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const g=!y.before,w=y.values||[];return new Ki(w,g)}(t.endAt)),Z0(e,s,a,i,c,"F",l,d)}function jb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ir(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(t.unaryFilter.field);return _e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(t.unaryFilter.field);return _e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ir(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(ir(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>gm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function Vb(n){return Tb[n]}function Mb(n){return xb[n]}function Lb(n){return Ib[n]}function sr(n){return{fieldPath:n.canonicalString()}}function ir(n){return Te.fromServerFormat(n.fieldPath)}function ym(n){return n instanceof _e?function(t){if(t.op==="=="){if(uh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NAN"}};if(lh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(uh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NAN"}};if(lh(t.value))return{unaryFilter:{field:sr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(t.field),op:Mb(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>ym(s));return r.length===1?r[0]:{compositeFilter:{op:Lb(t.op),filters:r}}}(n):H()}function Fb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _m(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,r,s,i=G.min(),a=G.min(),c=Ie.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.ct=e}}function Bb(n){const e=Ob({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qi(e,e.limit,"L"):e}/**
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
 */class qb{constructor(){this.un=new $b}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(mn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class $b{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ar(0)}static kn(){return new Ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.changes=new Dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&gs(r.mutation,s,Qe.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const s=Rn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=cs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=qt();const a=ps(),c=function(){return ps()}();return t.forEach((l,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof vn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),gs(m.mutation,d,m.mutation.getFieldMask(),ie.now())):a.set(d.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var y;return c.set(d,new zb(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ps();let s=new de((a,c)=>a-c),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let m=r.get(l)||Qe.empty();m=c.applyToLocalView(d,m),r.set(l,m);const y=(s.get(c.batchId)||Y()).add(l);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,y=em();m.forEach(g=>{if(!i.has(g)){const w=om(t.get(g),r.get(g));w!==null&&y.set(g,w),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(Rn());let c=-1,l=i;return a.next(d=>V.forEach(d,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?V.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{l=l.insert(m,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,Y())).next(m=>({batchId:c,changes:Zf(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,l=>{const d=function(y,g){return new kr(g,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((y,g)=>{a=a.insert(y,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Oe.newInvalidDocument(m)))});let c=cs();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&gs(m.mutation,d,Qe.empty(),ie.now()),vo(t,d)&&(c=c.insert(l,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Et(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Bb(s.bundledQuery),readTime:Et(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Kb{constructor(){this.overlays=new de(W.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=Rn(),i=t.length+1,a=new W(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Rn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Rn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return V.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yb(t,r));let i=this.Ir.get(t);i===void 0&&(i=Y(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class Qb{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.Tr=new xe(ve.Er),this.dr=new xe(ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ve(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new ve(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new W(new le([])),r=new ve(t,e),s=new ve(t,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new W(new le([])),r=new ve(t,e),s=new ve(t,e+1);let i=Y();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ve(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return W.comparator(e.key,t.key)||te(e.wr,t.wr)}static Ar(e,t){return te(e.wr,t.wr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new xe(ve.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gb(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ve(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),s=new ve(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(te);return t.forEach(s=>{const i=new ve(s,0),a=new ve(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const a=new ve(new W(i),0);let c=new xe(te);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){re(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,s=>{const i=new ve(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new ve(t,0),s=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.Mr=e,this.docs=function(){return new de(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=qt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Oe.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qt();const a=t.path,c=new W(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||O0(D0(m),r)<=0||(s.has(m.key)||vo(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Jb(this)}getSize(e){return V.resolve(this.size)}}class Jb extends Wb{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.persistence=e,this.Nr=new Dr(t=>Rc(t),Sc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Oc,this.targetCount=0,this.kr=Ar.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ar(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Tc(0),this.Kr=!1,this.Kr=!0,this.$r=new Qb,this.referenceDelegate=e(this),this.Ur=new Zb(this),this.indexManager=new qb,this.remoteDocumentCache=function(s){return new Xb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ub(t),this.Gr=new Gb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Yb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new tE(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class tE extends V0{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Jr=new Oc,this.Yr=null}static Zr(e){return new jc(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=Y(),s=Y();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vc(e,t.fromCache,r,s)}}/**
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
 */class nE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Uy()?8:M0(je())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new nE;return this.Xi(e,t,a).next(c=>{if(i.result=c,this.zi)return this.es(e,t,a,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(ts()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ts()<=X.DEBUG&&B("QueryEngine","Query:",rr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ts()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):V.resolve())}Yi(e,t){if(mh(t))return V.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Qi(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Y(...i);return this.Ji.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(t,c);return this.ns(t,d,a,l.readTime)?this.Yi(e,Qi(t,null,"F")):this.rs(e,d,t,l)}))})))}Zi(e,t,r,s){return mh(t)||s.isEqual(G.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?V.resolve(null):(ts()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(t)),this.rs(e,a,t,k0(s,-1)).next(c=>c))})}ts(e,t){let r=new xe(Xf(e));return t.forEach((s,i)=>{vo(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return ts()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",rr(t)),this.Ji.getDocumentsMatchingQuery(e,t,mn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new de(te),this._s=new Dr(i=>Rc(i),Sc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function iE(n,e,t,r){return new sE(n,e,t,r)}async function vm(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=Y();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function oE(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,m){const y=d.batch,g=y.keys();let w=V.resolve();return g.forEach(A=>{w=w.next(()=>m.getEntry(l,A)).next(x=>{const T=d.docVersions.get(A);re(T!==null),x.version.compareTo(T)<0&&(y.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Y();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function wm(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function aE(n,e){const t=K(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,y)=>{const g=s.get(y);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,y)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?w=w.withResumeToken(Ie.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(m.resumeToken,r)),s=s.insert(y,w),function(x,T,j){return x.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,w,m)&&c.push(t.Ur.updateTargetData(i,w))});let l=qt(),d=Y();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(cE(i,a,e.documentUpdates).next(m=>{l=m.Ps,d=m.Is})),!r.isEqual(G.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(y=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.os=s,i))}function cE(n,e,t){let r=Y(),s=Y();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=qt();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Ps:a,Is:s}})}function lE(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uE(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Ur.allocateTargetId(r).next(a=>(s=new un(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Za(n,e,t){const r=K(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!qs(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ih(n,e,t){const r=K(n);let s=G.min(),i=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const y=K(l),g=y._s.get(m);return g!==void 0?V.resolve(y.os.get(g)):y.Ur.getTargetData(d,m)}(r,a,bt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:G.min(),t?i:Y())).next(c=>(hE(r,tb(e),c),{documents:c,Ts:i})))}function hE(n,e,t){let r=n.us.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Ah{constructor(){this.activeTargetIds=ab()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dE{constructor(){this.so=new Ah,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ah,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fE{_o(e){}shutdown(){}}/**
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
 */class Rh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ti=null;function ba(){return Ti===null?Ti=function(){return 268435456+Math.round(2147483648*Math.random())}():Ti++,"0x"+Ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="WebChannelConnection";class gE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const c=ba(),l=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,l,d,s).then(m=>(B("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw Er("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",l,"request:",s),m})}Lo(t,r,s,i,a,c){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}xo(t,r){const s=mE[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=ba();return new Promise((a,c)=>{const l=new Df;l.setWithCredentials(!0),l.listenOnce(Of.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ki.NO_ERROR:const m=l.getResponseJson();B(Ce,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),a(m);break;case ki.TIMEOUT:B(Ce,`RPC '${e}' ${i} timed out`),c(new U(D.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:const y=l.getStatus();if(B(Ce,`RPC '${e}' ${i} failed with status:`,y,"response text:",l.getResponseText()),y>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const A=function(T){const j=T.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(j)>=0?j:D.UNKNOWN}(w.status);c(new U(A,w.message))}else c(new U(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new U(D.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{B(Ce,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);B(Ce,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}Bo(e,t,r){const s=ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Mf(),c=Vf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const m=i.join("");B(Ce,`Creating RPC '${e}' stream ${s}: ${m}`,l);const y=a.createWebChannel(m,l);let g=!1,w=!1;const A=new pE({Io:T=>{w?B(Ce,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(g||(B(Ce,`Opening RPC '${e}' stream ${s} transport.`),y.open(),g=!0),B(Ce,`RPC '${e}' stream ${s} sending:`,T),y.send(T))},To:()=>y.close()}),x=(T,j,S)=>{T.listen(j,O=>{try{S(O)}catch(F){setTimeout(()=>{throw F},0)}})};return x(y,as.EventType.OPEN,()=>{w||(B(Ce,`RPC '${e}' stream ${s} transport opened.`),A.yo())}),x(y,as.EventType.CLOSE,()=>{w||(w=!0,B(Ce,`RPC '${e}' stream ${s} transport closed`),A.So())}),x(y,as.EventType.ERROR,T=>{w||(w=!0,Er(Ce,`RPC '${e}' stream ${s} transport errored:`,T),A.So(new U(D.UNAVAILABLE,"The operation could not be completed")))}),x(y,as.EventType.MESSAGE,T=>{var j;if(!w){const S=T.data[0];re(!!S);const O=S,F=O.error||((j=O[0])===null||j===void 0?void 0:j.error);if(F){B(Ce,`RPC '${e}' stream ${s} received error:`,F);const $=F.status;let q=function(v){const b=ye[v];if(b!==void 0)return lm(b)}($),I=F.message;q===void 0&&(q=D.INTERNAL,I="Unknown error status: "+$+" with message "+F.message),w=!0,A.So(new U(q,I)),y.close()}else B(Ce,`RPC '${e}' stream ${s} received:`,S),A.bo(S)}}),x(c,jf.STAT_EVENT,T=>{T.stat===$a.PROXY?B(Ce,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===$a.NOPROXY&&B(Ce,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){return new Ab(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Em{constructor(e,t,r,s,i,a,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Bt(t.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new U(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yE extends Em{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Pb(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Et(a.readTime):G.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ja(this.serializer),t.addTarget=function(i,a){let c;const l=a.target;if(c=Ga(l)?{documents:kb(i,l)}:{query:Db(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=dm(i,a.resumeToken);const d=Qa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(G.min())>0){c.readTime=Ji(i,a.snapshotVersion.toTimestamp());const d=Qa(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=jb(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ja(this.serializer),t.removeTarget=e,this.a_(t)}}class _E extends Em{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Cb(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ja(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Nb(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,Ya(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(D.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(e,Ya(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Bt(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Qn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=K(l);d.L_.add(4),await zs(d),d.q_.set("Unknown"),d.L_.delete(4),await xo(d)}(this))})}),this.q_=new wE(r,s)}}async function xo(n){if(Qn(n))for(const e of n.B_)await e(!0)}async function zs(n){for(const e of n.B_)await e(!1)}function Tm(n,e){const t=K(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Uc(t)?Fc(t):Or(t).r_()&&Lc(t,e))}function Mc(n,e){const t=K(n),r=Or(t);t.N_.delete(e),r.r_()&&xm(t,e),t.N_.size===0&&(r.r_()?r.o_():Qn(t)&&t.q_.set("Unknown"))}function Lc(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Or(n).A_(e)}function xm(n,e){n.Q_.xe(e),Or(n).R_(e)}function Fc(n){n.Q_=new Eb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.q_.v_()}function Uc(n){return Qn(n)&&!Or(n).n_()&&n.N_.size>0}function Qn(n){return K(n).L_.size===0}function Im(n){n.Q_=void 0}async function EE(n){n.q_.set("Online")}async function TE(n){n.N_.forEach((e,t)=>{Lc(n,e)})}async function xE(n,e){Im(n),Uc(n)?(n.q_.M_(e),Fc(n)):n.q_.set("Unknown")}async function IE(n,e,t){if(n.q_.set("Online"),e instanceof hm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zi(n,r)}else if(e instanceof ji?n.Q_.Ke(e):e instanceof um?n.Q_.He(e):n.Q_.We(e),!t.isEqual(G.min()))try{const r=await wm(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.N_.get(d);m&&i.N_.set(d,m.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,d)=>{const m=i.N_.get(l);if(!m)return;i.N_.set(l,m.withResumeToken(Ie.EMPTY_BYTE_STRING,m.snapshotVersion)),xm(i,l);const y=new un(m.target,l,d,m.sequenceNumber);Lc(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Zi(n,r)}}async function Zi(n,e,t){if(!qs(e))throw e;n.L_.add(1),await zs(n),n.q_.set("Offline"),t||(t=()=>wm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await xo(n)})}function Am(n,e){return e().catch(t=>Zi(n,t,e))}async function Io(n){const e=K(n),t=gn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;AE(e);)try{const s=await lE(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,RE(e,s)}catch(s){await Zi(e,s)}Rm(e)&&Sm(e)}function AE(n){return Qn(n)&&n.O_.length<10}function RE(n,e){n.O_.push(e);const t=gn(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rm(n){return Qn(n)&&!gn(n).n_()&&n.O_.length>0}function Sm(n){gn(n).start()}async function SE(n){gn(n).p_()}async function PE(n){const e=gn(n);for(const t of n.O_)e.m_(t.mutations)}async function NE(n,e,t){const r=n.O_.shift(),s=Cc.from(r,e,t);await Am(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Io(n)}async function CE(n,e){e&&gn(n).V_&&await async function(r,s){if(function(a){return vb(a)&&a!==D.ABORTED}(s.code)){const i=r.O_.shift();gn(r).s_(),await Am(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Io(r)}}(n,e),Rm(n)&&Sm(n)}async function Sh(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.L_.add(3),await zs(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await xo(t)}async function kE(n,e){const t=K(n);e?(t.L_.delete(2),await xo(t)):e||(t.L_.add(2),await zs(t),t.q_.set("Unknown"))}function Or(n){return n.K_||(n.K_=function(t,r,s){const i=K(t);return i.w_(),new yE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:EE.bind(null,n),Ro:TE.bind(null,n),mo:xE.bind(null,n),d_:IE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Uc(n)?Fc(n):n.q_.set("Unknown")):(await n.K_.stop(),Im(n))})),n.K_}function gn(n){return n.U_||(n.U_=function(t,r,s){const i=K(t);return i.w_(),new _E(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:SE.bind(null,n),mo:CE.bind(null,n),f_:PE.bind(null,n),g_:NE.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Io(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Bc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qc(n,e){if(Bt("AsyncQueue",`${e}: ${n}`),qs(n))return new U(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=cs(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.W_=new de(W.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Rr{constructor(e,t,r,s,i,a,c,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Rr(e,t,hr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class OE{constructor(){this.queries=Nh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=K(t),i=s.queries;s.queries=Nh(),i.forEach((a,c)=>{for(const l of c.j_)l.onError(r)})})(this,new U(D.ABORTED,"Firestore shutting down"))}}function Nh(){return new Dr(n=>Yf(n),_o)}async function Pm(n,e){const t=K(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new DE,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=qc(a,`Initialization of query '${rr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&$c(t)}async function Nm(n,e){const t=K(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jE(n,e){const t=K(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&$c(t)}function VE(n,e,t){const r=K(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function $c(n){n.Y_.forEach(e=>{e.next()})}var ec,Ch;(Ch=ec||(ec={})).ea="default",Ch.Cache="cache";class Cm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ec.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class ME{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Y(),this.mutatedKeys=Y(),this.Aa=Xf(e),this.Ra=new hr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ph,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const g=s.get(m),w=vo(this.query,y)?y:null,A=!!g&&this.mutatedKeys.has(g.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let T=!1;g&&w?g.data.isEqual(w.data)?A!==x&&(r.track({type:3,doc:w}),T=!0):this.ga(g,w)||(r.track({type:2,doc:w}),T=!0,(l&&this.Aa(w,l)>0||d&&this.Aa(w,d)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),T=!0):g&&!w&&(r.track({type:1,doc:g}),T=!0,(l||d)&&(c=!0)),T&&(w?(a=a.add(w),i=x?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((m,y)=>function(w,A){const x=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return x(w)-x(A)}(m.type,y.type)||this.Aa(m.doc,y.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new Rr(this.query,e.Ra,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ph,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Y(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Dm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new km(r))}),t}ba(e){this.Ta=e.Ts,this.da=Y();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class FE{constructor(e){this.key=e,this.va=!1}}class UE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Dr(c=>Yf(c),_o),this.Ma=new Map,this.xa=new Set,this.Oa=new de(W.comparator),this.Na=new Map,this.La=new Oc,this.Ba={},this.ka=new Map,this.qa=Ar.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function BE(n,e,t=!0){const r=Fm(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Om(r,e,t,!0),s}async function qE(n,e){const t=Fm(n);await Om(t,e,!0,!1)}async function Om(n,e,t,r){const s=await uE(n.localStore,bt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await $E(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tm(n.remoteStore,s),c}async function $E(n,e,t,r,s){n.Ka=(y,g,w)=>async function(x,T,j,S){let O=T.view.ma(j);O.ns&&(O=await Ih(x.localStore,T.query,!1).then(({documents:I})=>T.view.ma(I,O)));const F=S&&S.targetChanges.get(T.targetId),$=S&&S.targetMismatches.get(T.targetId)!=null,q=T.view.applyChanges(O,x.isPrimaryClient,F,$);return Dh(x,T.targetId,q.wa),q.snapshot}(n,y,g,w);const i=await Ih(n.localStore,e,!0),a=new ME(e,i.Ts),c=a.ma(i.documents),l=Ws.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,l);Dh(n,t,d.wa);const m=new LE(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function WE(n,e,t){const r=K(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!_o(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Za(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Mc(r.remoteStore,s.targetId),tc(r,s.targetId)}).catch(Bs)):(tc(r,s.targetId),await Za(r.localStore,s.targetId,!0))}async function zE(n,e){const t=K(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Mc(t.remoteStore,r.targetId))}async function HE(n,e,t){const r=ZE(n);try{const s=await function(a,c){const l=K(a),d=ie.now(),m=c.reduce((w,A)=>w.add(A.key),Y());let y,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let A=qt(),x=Y();return l.cs.getEntries(w,m).next(T=>{A=T,A.forEach((j,S)=>{S.isValidDocument()||(x=x.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,A)).next(T=>{y=T;const j=[];for(const S of c){const O=mb(S,y.get(S.key).overlayedDocument);O!=null&&j.push(new vn(S.key,O,qf(O.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,d,j,c)}).next(T=>{g=T;const j=T.applyToLocalDocumentSet(y,x);return l.documentOverlayCache.saveOverlays(w,T.batchId,j)})}).then(()=>({batchId:g.batchId,changes:Zf(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new de(te)),d=d.insert(c,l),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,t),await Hs(r,s.changes),await Io(r.remoteStore)}catch(s){const i=qc(s,"Failed to persist write");t.reject(i)}}async function jm(n,e){const t=K(n);try{const r=await aE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Na.get(i);a&&(re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?re(a.va):s.removedDocuments.size>0&&(re(a.va),a.va=!1))}),await Hs(t,r,e)}catch(r){await Bs(r)}}function kh(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=K(a);l.onlineState=c;let d=!1;l.queries.forEach((m,y)=>{for(const g of y.j_)g.Z_(c)&&(d=!0)}),d&&$c(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GE(n,e,t){const r=K(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new de(W.comparator);a=a.insert(i,Oe.newNoDocument(i,G.min()));const c=Y().add(i),l=new Eo(G.min(),new Map,new de(te),a,c);await jm(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Wc(r)}else await Za(r.localStore,e,!1).then(()=>tc(r,e,t)).catch(Bs)}async function KE(n,e){const t=K(n),r=e.batch.batchId;try{const s=await oE(t.localStore,e);Mm(t,r,null),Vm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hs(t,s)}catch(s){await Bs(s)}}async function QE(n,e,t){const r=K(n);try{const s=await function(a,c){const l=K(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,c).next(y=>(re(y!==null),m=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(r.localStore,e);Mm(r,e,t),Vm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hs(r,s)}catch(s){await Bs(s)}}function Vm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Mm(n,e,t){const r=K(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function tc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Lm(n,r)})}function Lm(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Mc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Wc(n))}function Dh(n,e,t){for(const r of t)r instanceof km?(n.La.addReference(r.key,e),YE(n,r)):r instanceof Dm?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Lm(n,r.key)):H()}function YE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),Wc(n))}function Wc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new W(le.fromString(e)),r=n.qa.next();n.Na.set(r,new FE(t)),n.Oa=n.Oa.insert(t,r),Tm(n.remoteStore,new un(bt(Pc(t.path)),r,"TargetPurposeLimboResolution",Tc.oe))}}async function Hs(n,e,t){const r=K(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{a.push(r.Ka(l,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Vc.Wi(l.targetId,d);i.push(y)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(l,d){const m=K(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(d,g=>V.forEach(g.$i,w=>m.persistence.referenceDelegate.addReference(y,g.targetId,w)).next(()=>V.forEach(g.Ui,w=>m.persistence.referenceDelegate.removeReference(y,g.targetId,w)))))}catch(y){if(!qs(y))throw y;B("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const g=y.targetId;if(!y.fromCache){const w=m.os.get(g),A=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(A);m.os=m.os.insert(g,x)}}}(r.localStore,i))}async function XE(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await vm(t.localStore,e);t.currentUser=e,function(i,a){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new U(D.CANCELLED,a))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hs(t,r.hs)}}function JE(n,e){const t=K(n),r=t.Na.get(e);if(r&&r.va)return Y().add(r.key);{let s=Y();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Fm(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GE.bind(null,e),e.Ca.d_=jE.bind(null,e.eventManager),e.Ca.$a=VE.bind(null,e.eventManager),e}function ZE(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QE.bind(null,e),e}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=To(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return iE(this.persistence,new rE,e.initialUser,this.serializer)}Ga(e){return new eE(jc.Zr,this.serializer)}Wa(e){return new dE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XE.bind(null,this.syncEngine),await kE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OE}()}createDatastore(e){const t=To(e.databaseInfo.databaseId),r=function(i){return new gE(i)}(e.databaseInfo);return function(i,a,c,l){return new vE(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new bE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>kh(this.syncEngine,t,0),function(){return Rh.D()?new Rh:new fE}())}createSyncEngine(e,t){return function(s,i,a,c,l,d,m){const y=new UE(s,i,a,c,l,d);return m&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=K(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await zs(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nc.provider={build:()=>new nc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Um{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=De.UNAUTHENTICATED,this.clientId=Ff.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{B("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ta(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Oh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tT(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Sh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Sh(e.remoteStore,s)),n._onlineComponents=e}async function tT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ta(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Er("Error using user provided cache. Falling back to memory cache: "+t),await Ta(n,new eo)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Ta(n,new eo);return n._offlineComponents}async function Bm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Oh(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Oh(n,new nc))),n._onlineComponents}function nT(n){return Bm(n).then(e=>e.syncEngine)}async function qm(n){const e=await Bm(n),t=e.eventManager;return t.onListen=BE.bind(null,e.syncEngine),t.onUnlisten=WE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zE.bind(null,e.syncEngine),t}function rT(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const m=new Um({next:g=>{m.Za(),a.enqueueAndForget(()=>Nm(i,y));const w=g.docs.has(c);!w&&g.fromCache?d.reject(new U(D.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?d.reject(new U(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),y=new Cm(Pc(c.path),m,{includeMetadataChanges:!0,_a:!0});return Pm(i,y)}(await qm(n),n.asyncQueue,e,t,r)),r.promise}function sT(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,d){const m=new Um({next:g=>{m.Za(),a.enqueueAndForget(()=>Nm(i,y)),g.fromCache&&l.source==="server"?d.reject(new U(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(g)},error:g=>d.reject(g)}),y=new Cm(c,m,{includeMetadataChanges:!0,_a:!0});return Pm(i,y)}(await qm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function $m(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e,t){if(!t)throw new U(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iT(n,e,t,r){if(e===!0&&r===!0)throw new U(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vh(n){if(!W.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mh(n){if(W.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ao(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ao(n);throw new U(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function oT(n,e){if(e<=0)throw new U(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$m((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ro{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T0;switch(r.type){case"firstParty":return new R0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=jh.get(t);r&&(B("ComponentProvider","Removing Datastore"),jh.delete(t),r.terminate())}(this),Promise.resolve()}}function aT(n,e,t,r={}){var s;const i=(n=xt(n,Ro))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=De.MOCK_USER;else{c=Fd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new U(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new De(d)}n._authCredentials=new x0(new Lf(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wn(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class fn extends wn{constructor(e,t,r){super(e,t,Pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new W(e))}withConverter(e){return new fn(this.firestore,e,this._path)}}function $e(n,e,...t){if(n=he(n),Wm("collection","path",e),n instanceof Ro){const r=le.fromString(e,...t);return Mh(r),new fn(n,null,r)}{if(!(n instanceof qe||n instanceof fn))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Mh(r),new fn(n.firestore,null,r)}}function dt(n,e,...t){if(n=he(n),arguments.length===1&&(e=Ff.newId()),Wm("doc","path",e),n instanceof Ro){const r=le.fromString(e,...t);return Vh(r),new qe(n,null,new W(r))}{if(!(n instanceof qe||n instanceof fn))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Vh(r),new qe(n.firestore,n instanceof fn?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bm(this,"async_queue_retry"),this.Vu=()=>{const r=Ea();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Vt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qs(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Bc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class jr extends Ro{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Fh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fh(e),this._firestoreClient=void 0,await e}}}function cT(n,e){const t=typeof n=="object"?n:fo(),r=typeof n=="string"?n:"(default)",s=_n(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vd("firestore");i&&aT(s,...i)}return s}function zc(n){if(n._terminated)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lT(n),n._firestoreClient}function lT(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,d,m){return new U0(c,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,$m(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new eT(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(Ie.fromBase64String(e))}catch(t){throw new U(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sr(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */class Kc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=/^__.*__$/;class hT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $s(e,this.data,t,this.fieldTransforms)}}class zm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new vn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Qc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return to(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Hm(this.Cu)&&uT.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||To(e)}Qu(e,t,r,s=!1){return new Qc({Cu:e,methodName:t,qu:r,path:Te.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Po(n){const e=n._freezeSettings(),t=To(n._databaseId);return new dT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gm(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Yc("Data must be an object, but it was:",a,r);const c=Km(r,a);let l,d;if(i.merge)l=new Qe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const g=rc(e,y,t);if(!a.contains(g))throw new U(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ym(m,g)||m.push(g)}l=new Qe(m),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new hT(new ze(c),l,d)}class No extends Hc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof No}}function fT(n,e,t,r){const s=n.Qu(1,e,t);Yc("Data must be an object, but it was:",s,r);const i=[],a=ze.empty();Kn(r,(l,d)=>{const m=Xc(e,l,t);d=he(d);const y=s.Nu(m);if(d instanceof No)i.push(m);else{const g=Gs(d,y);g!=null&&(i.push(m),a.set(m,g))}});const c=new Qe(i);return new zm(a,c,s.fieldTransforms)}function mT(n,e,t,r,s,i){const a=n.Qu(1,e,t),c=[rc(e,r,t)],l=[s];if(i.length%2!=0)throw new U(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(rc(e,i[g])),l.push(i[g+1]);const d=[],m=ze.empty();for(let g=c.length-1;g>=0;--g)if(!Ym(d,c[g])){const w=c[g];let A=l[g];A=he(A);const x=a.Nu(w);if(A instanceof No)d.push(w);else{const T=Gs(A,x);T!=null&&(d.push(w),m.set(w,T))}}const y=new Qe(d);return new zm(m,y,a.fieldTransforms)}function pT(n,e,t,r=!1){return Gs(t,n.Qu(r?4:3,e))}function Gs(n,e){if(Qm(n=he(n)))return Yc("Unsupported field value:",e,n),Km(n,e);if(n instanceof Hc)return function(r,s){if(!Hm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Gs(c,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ie.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof ie){const i=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof Gc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sr)return{bytesValue:dm(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kc)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Nc(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ao(r)}`)}(n,e)}function Km(n,e){const t={};return Uf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kn(n,(r,s)=>{const i=Gs(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Qm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Gc||n instanceof Sr||n instanceof qe||n instanceof Hc||n instanceof Kc)}function Yc(n,e,t){if(!Qm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Ao(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function rc(n,e,t){if((e=he(e))instanceof So)return e._internalPath;if(typeof e=="string")return Xc(n,e);throw to("Field path arguments must be of type string or ",n,!1,void 0,t)}const gT=new RegExp("[~\\*/\\[\\]]");function Xc(n,e,t){if(e.search(gT)>=0)throw to(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new So(...e.split("."))._internalPath}catch{throw to(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function to(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new U(D.INVALID_ARGUMENT,c+n+l)}function Ym(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Co("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yT extends Xm{data(){return super.data()}}function Co(n,e){return typeof e=="string"?Xc(n,e):e instanceof So?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jc{}class Zc extends Jc{}function Xe(n,e,...t){let r=[];e instanceof Jc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(l=>l instanceof el).length,c=i.filter(l=>l instanceof ko).length;if(a>1||a>0&&c>0)throw new U(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ko extends Zc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ko(e,t,r)}_apply(e){const t=this._parse(e);return Jm(e._query,t),new wn(e.firestore,e.converter,Ka(e._query,t))}_parse(e){const t=Po(e.firestore);return function(i,a,c,l,d,m,y){let g;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Bh(y,m);const w=[];for(const A of y)w.push(Uh(l,i,A));g={arrayValue:{values:w}}}else g=Uh(l,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Bh(y,m),g=pT(c,a,y,m==="in"||m==="not-in");return _e.create(d,m,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Mt(n,e,t){const r=e,s=Co("where",n);return ko._create(s,r,t)}class el extends Jc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new el(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)Jm(a,l),a=Ka(a,l)}(e._query,t),new wn(e.firestore,e.converter,Ka(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tl extends Zc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tl(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new U(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ss(i,a)}(e._query,this._field,this._direction);return new wn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new kr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Bn(n,e="asc"){const t=e,r=Co("orderBy",n);return tl._create(r,t)}class nl extends Zc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new nl(e,t,r)}_apply(e){return new wn(e.firestore,e.converter,Qi(e._query,this._limit,this._limitType))}}function rl(n){return oT("limit",n),nl._create("limit",n,"F")}function Uh(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new U(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qf(e)&&t.indexOf("/")!==-1)throw new U(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!W.isDocumentKey(r))throw new U(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ch(n,new W(r))}if(t instanceof qe)return ch(n,t._key);throw new U(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ao(t)}.`)}function Bh(n,e){if(!Array.isArray(n)||n.length===0)throw new U(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jm(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vT{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ge(a.doubleValue));return new Kc(i)}convertGeoPoint(e){return new Gc(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ic(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const t=pn(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);re(_m(r));const s=new As(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(t)||Bt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ep extends Xm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Co("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Vi extends ep{data(e={}){return super.data(e)}}class wT{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new us(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Vi(this._firestore,this._userDataWriter,r.key,r,new us(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new Vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Vi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:bT(c.type),doc:l,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function bT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){n=xt(n,qe);const e=xt(n.firestore,jr);return rT(zc(e),n._key).then(t=>ET(e,n,t))}class tp extends vT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function et(n){n=xt(n,wn);const e=xt(n.firestore,jr),t=zc(e),r=new tp(e);return _T(n._query),sT(t,n._query).then(s=>new wT(e,r,n,s))}function Do(n,e,t){n=xt(n,qe);const r=xt(n.firestore,jr),s=Zm(n.converter,e);return sl(r,[Gm(Po(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,lt.none())])}function np(n,e,t,...r){n=xt(n,qe);const s=xt(n.firestore,jr),i=Po(s);let a;return a=typeof(e=he(e))=="string"||e instanceof So?mT(i,"updateDoc",n._key,e,t,r):fT(i,"updateDoc",n._key,e),sl(s,[a.toMutation(n._key,lt.exists(!0))])}function rp(n,e){const t=xt(n.firestore,jr),r=dt(n),s=Zm(n.converter,e);return sl(t,[Gm(Po(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,lt.exists(!1))]).then(()=>r)}function sl(n,e){return function(r,s){const i=new Vt;return r.asyncQueue.enqueueAndForget(async()=>HE(await nT(r),s,i)),i.promise}(zc(n),e)}function ET(n,e,t){const r=t.docs.get(e._key),s=new tp(n);return new ep(n,s,e._key,r,new us(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Cr=s})(Gn),ut(new tt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new jr(new I0(r.getProvider("auth-internal")),new P0(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),He(rh,"4.7.3",e),He(rh,"4.7.3","esm2017")})();var TT="firebase",xT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He(TT,xT,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firebasestorage.googleapis.com",ip="storageBucket",IT=2*60*1e3,AT=10*60*1e3,RT=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends rt{constructor(e,t,r=0){super(xa(e),`Firebase Storage: ${t} (${xa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function xa(n){return"storage/"+n}function il(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(ue.UNKNOWN,n)}function ST(n){return new fe(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function PT(n){return new fe(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(ue.UNAUTHENTICATED,n)}function CT(){return new fe(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kT(n){return new fe(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function op(){return new fe(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ap(){return new fe(ue.CANCELED,"User canceled the upload/download.")}function DT(n){return new fe(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function OT(n){return new fe(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function jT(){return new fe(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ip+"' property when initializing the app?")}function cp(){return new fe(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VT(){return new fe(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function MT(){return new fe(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function LT(n){return new fe(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sc(n){return new fe(ue.INVALID_ARGUMENT,n)}function lp(){return new fe(ue.APP_DELETED,"The Firebase app was deleted.")}function FT(n){return new fe(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ys(n,e){return new fe(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ns(n){throw new fe(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ye.makeFromUrl(e,t)}catch{return new Ye(e,"")}if(r.path==="")return r;throw OT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(F){F.path_=decodeURIComponent(F.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${y}/${m}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},x=t===sp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,T="([^?#]*)",j=new RegExp(`^https?://${x}/${s}/${T}`,"i"),O=[{regex:c,indices:l,postModify:i},{regex:w,indices:A,postModify:d},{regex:j,indices:{bucket:1,path:2},postModify:d}];for(let F=0;F<O.length;F++){const $=O[F],q=$.regex.exec(e);if(q){const I=q[$.indices.bucket];let _=q[$.indices.path];_||(_=""),r=new Ye(I,_),$.postModify(r);break}}if(r==null)throw DT(e);return r}}class UT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function l(){return c===2}let d=!1;function m(...T){d||(d=!0,e.apply(null,T))}function y(T){s=setTimeout(()=>{s=null,n(w,l())},T)}function g(){i&&clearTimeout(i)}function w(T,...j){if(d){g();return}if(T){g(),m.call(null,T,...j);return}if(l()||a){g(),m.call(null,T,...j);return}r<64&&(r*=2);let O;c===1?(c=2,O=0):O=(r+Math.random())*1e3,y(O)}let A=!1;function x(T){A||(A=!0,g(),!d&&(s!==null?(T||(c=2),clearTimeout(s),y(0)):T||(c=1)))}return y(0),i=setTimeout(()=>{a=!0,x(!0)},t),x}function qT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(n){return n!==void 0}function WT(n){return typeof n=="function"}function zT(n){return typeof n=="object"&&!Array.isArray(n)}function Oo(n){return typeof n=="string"||n instanceof String}function qh(n){return ol()&&n instanceof Blob}function ol(){return typeof Blob<"u"}function $h(n,e,t,r){if(r<e)throw sc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw sc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function up(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(jn||(jn={}));/**
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
 */function hp(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t,r,s,i,a,c,l,d,m,y,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=y,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,A)=>{this.resolve_=w,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===jn.NO_ERROR,l=i.getStatus();if(!c||hp(l,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===jn.ABORT;r(!1,new xi(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new xi(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());$T(l)?i(l):i()}catch(l){a(l)}else if(c!==null){const l=il();l.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,l)):a(l)}else if(s.canceled){const l=this.appDelete_?lp():ap();a(l)}else{const l=op();a(l)}};this.canceled_?t(!1,new xi(!1,null,!0)):this.backoffId_=BT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function GT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function KT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function YT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function XT(n,e,t,r,s,i,a=!0){const c=up(n.urlParams),l=n.url+c,d=Object.assign({},n.headers);return QT(d,e),GT(d,t),KT(d,i),YT(d,r),new HT(l,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZT(...n){const e=JT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ol())return new Blob(n);throw new fe(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ex(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function tx(n){if(typeof atob>"u")throw LT("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ia{constructor(e,t){this.data=e,this.contentType=t||null}}function nx(n,e){switch(n){case yt.RAW:return new Ia(dp(e));case yt.BASE64:case yt.BASE64URL:return new Ia(fp(n,e));case yt.DATA_URL:return new Ia(sx(e),ix(e))}throw il()}function dp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rx(n){let e;try{e=decodeURIComponent(n)}catch{throw ys(yt.DATA_URL,"Malformed data URL.")}return dp(e)}function fp(n,e){switch(n){case yt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ys(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case yt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ys(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=tx(e)}catch(s){throw s.message.includes("polyfill")?s:ys(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class mp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ys(yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=ox(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sx(n){const e=new mp(n);return e.base64?fp(yt.BASE64,e.rest):rx(e.rest)}function ix(n){return new mp(n).contentType}function ox(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){let r=0,s="";qh(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(qh(this.data_)){const r=this.data_,s=ex(r,e,t);return s===null?null:new nn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new nn(r,!0)}}static getBlob(...e){if(ol()){const t=e.map(r=>r instanceof nn?r.data_:r);return new nn(ZT.apply(null,t))}else{const t=e.map(a=>Oo(a)?nx(yt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[i++]=a[c]}),new nn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n){let e;try{e=JSON.parse(n)}catch{return null}return zT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function cx(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function gp(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(n,e){return e}class Fe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||lx}}let Ii=null;function ux(n){return!Oo(n)||n.length<2?n:gp(n)}function yp(){if(Ii)return Ii;const n=[];n.push(new Fe("bucket")),n.push(new Fe("generation")),n.push(new Fe("metageneration")),n.push(new Fe("name","fullPath",!0));function e(i,a){return ux(a)}const t=new Fe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Fe("size");return s.xform=r,n.push(s),n.push(new Fe("timeCreated")),n.push(new Fe("updated")),n.push(new Fe("md5Hash",null,!0)),n.push(new Fe("cacheControl",null,!0)),n.push(new Fe("contentDisposition",null,!0)),n.push(new Fe("contentEncoding",null,!0)),n.push(new Fe("contentLanguage",null,!0)),n.push(new Fe("contentType",null,!0)),n.push(new Fe("metadata","customMetadata",!0)),Ii=n,Ii}function hx(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ye(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function dx(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return hx(r,n),r}function _p(n,e,t){const r=pp(e);return r===null?null:dx(n,r,t)}function fx(n,e,t,r){const s=pp(e);if(s===null||!Oo(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const m=n.bucket,y=n.fullPath,g="/b/"+a(m)+"/o/"+a(y),w=Qs(g,t,r),A=up({alt:"media",token:d});return w+A})[0]}function vp(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Vr{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){if(!n)throw il()}function al(n,e){function t(r,s){const i=_p(n,s,e);return Lt(i!==null),i}return t}function mx(n,e){function t(r,s){const i=_p(n,s,e);return Lt(i!==null),fx(i,s,n.host,n._protocol)}return t}function Ys(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=CT():s=NT():t.getStatus()===402?s=PT(n.bucket):t.getStatus()===403?s=kT(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function wp(n){const e=Ys(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ST(n.path)),i.serverResponse=s.serverResponse,i}return t}function px(n,e,t){const r=e.fullServerUrl(),s=Qs(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Vr(s,i,al(n,t),a);return c.errorHandler=wp(e),c}function gx(n,e,t){const r=e.fullServerUrl(),s=Qs(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,c=new Vr(s,i,mx(n,t),a);return c.errorHandler=wp(e),c}function yx(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bp(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=yx(null,e)),r}function _x(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let O="";for(let F=0;F<2;F++)O=O+Math.random().toString().slice(2);return O}const l=c();a["Content-Type"]="multipart/related; boundary="+l;const d=bp(e,r,s),m=vp(d,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+l+"--",w=nn.getBlob(y,r,g);if(w===null)throw cp();const A={name:d.fullPath},x=Qs(i,n.host,n._protocol),T="POST",j=n.maxUploadRetryTime,S=new Vr(x,T,al(n,t),j);return S.urlParams=A,S.headers=a,S.body=w.uploadData(),S.errorHandler=Ys(e),S}class no{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function cl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Lt(!1)}return Lt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function vx(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a=bp(e,r,s),c={name:a.fullPath},l=Qs(i,n.host,n._protocol),d="POST",m={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},y=vp(a,t),g=n.maxUploadRetryTime;function w(x){cl(x);let T;try{T=x.getResponseHeader("X-Goog-Upload-URL")}catch{Lt(!1)}return Lt(Oo(T)),T}const A=new Vr(l,d,w,g);return A.urlParams=c,A.headers=m,A.body=y,A.errorHandler=Ys(e),A}function wx(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(d){const m=cl(d,["active","final"]);let y=null;try{y=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Lt(!1)}y||Lt(!1);const g=Number(y);return Lt(!isNaN(g)),new no(g,r.size(),m==="final")}const a="POST",c=n.maxUploadRetryTime,l=new Vr(t,a,i,c);return l.headers=s,l.errorHandler=Ys(e),l}const Wh=256*1024;function bx(n,e,t,r,s,i,a,c){const l=new no(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw VT();const d=l.total-l.current;let m=d;s>0&&(m=Math.min(m,s));const y=l.current,g=y+m;let w="";m===0?w="finalize":d===m?w="upload, finalize":w="upload";const A={"X-Goog-Upload-Command":w,"X-Goog-Upload-Offset":`${l.current}`},x=r.slice(y,g);if(x===null)throw cp();function T(F,$){const q=cl(F,["active","final"]),I=l.current+m,_=r.size();let v;return q==="final"?v=al(e,i)(F,$):v=null,new no(I,_,q==="final",v)}const j="POST",S=e.maxUploadRetryTime,O=new Vr(t,j,T,S);return O.headers=A,O.body=x.uploadData(),O.progressCallback=c||null,O.errorHandler=Ys(n),O}const We={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Aa(n){switch(n){case"running":case"pausing":case"canceling":return We.RUNNING;case"paused":return We.PAUSED;case"success":return We.SUCCESS;case"canceled":return We.CANCELED;case"error":return We.ERROR;default:return We.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,t,r){if(WT(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class Tx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xx extends Tx{initXhr(){this.xhr_.responseType="text"}}function or(){return new xx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=yp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(hp(s.status,[]))if(i)s=op();else{this.sleepTime=Math.max(this.sleepTime*2,RT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=vx(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,or,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=wx(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,or,t,r);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Wh*this._chunkMultiplier,t=new no(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let a;try{a=bx(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const c=this._ref.storage._makeRequest(a,or,s,i,!1);this._request=c,c.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Wh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=px(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,or,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=_x(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,or,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ap(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Aa(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new Ex(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Aa(this._state)){case We.SUCCESS:tr(this._resolve.bind(null,this.snapshot))();break;case We.CANCELED:case We.ERROR:const t=this._reject;tr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Aa(this._state)){case We.RUNNING:case We.PAUSED:e.next&&tr(e.next.bind(e,this.snapshot))();break;case We.SUCCESS:e.complete&&tr(e.complete.bind(e))();break;case We.CANCELED:case We.ERROR:e.error&&tr(e.error.bind(e,this._error))();break;default:e.error&&tr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class qn{constructor(e,t){this._service=e,t instanceof Ye?this._location=t:this._location=Ye.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qn(e,t)}get root(){const e=new Ye(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gp(this._location.path)}get storage(){return this._service}get parent(){const e=ax(this._location.path);if(e===null)return null;const t=new Ye(this._location.bucket,e);return new qn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw FT(e)}}function Ax(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new Ix(n,new nn(e),t)}function Rx(n){n._throwIfRoot("getDownloadURL");const e=gx(n.storage,n._location,yp());return n.storage.makeRequestWithTokens(e,or).then(t=>{if(t===null)throw MT();return t})}function Sx(n,e){const t=cx(n._location.path,e),r=new Ye(n._location.bucket,t);return new qn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(n){return/^[A-Za-z]+:\/\//.test(n)}function Nx(n,e){return new qn(n,e)}function Ep(n,e){if(n instanceof ll){const t=n;if(t._bucket==null)throw jT();const r=new qn(t,t._bucket);return e!=null?Ep(r,e):r}else return e!==void 0?Sx(n,e):n}function Cx(n,e){if(e&&Px(e)){if(n instanceof ll)return Nx(n,e);throw sc("To use ref(service, url), the first argument must be a Storage instance.")}else return Ep(n,e)}function zh(n,e){const t=e==null?void 0:e[ip];return t==null?null:Ye.makeFromBucketSpec(t,n)}function kx(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Fd(s,n.app.options.projectId))}class ll{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=sp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IT,this._maxUploadRetryTime=AT,this._requests=new Set,s!=null?this._bucket=Ye.makeFromBucketSpec(s,this._host):this._bucket=zh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ye.makeFromBucketSpec(this._url,e):this._bucket=zh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$h("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$h("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new UT(lp());{const a=XT(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Hh="@firebase/storage",Gh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="storage";function Dx(n,e,t){return n=he(n),Ax(n,e,t)}function Ox(n){return n=he(n),Rx(n)}function jx(n,e){return n=he(n),Cx(n,e)}function Vx(n=fo(),e){n=he(n);const r=_n(n,Tp).getImmediate({identifier:e}),s=Vd("storage");return s&&Mx(r,...s),r}function Mx(n,e,t,r={}){kx(n,e,t,r)}function Lx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ll(t,r,s,e,Gn)}function Fx(){ut(new tt(Tp,Lx,"PUBLIC").setMultipleInstances(!0)),He(Hh,Gh,""),He(Hh,Gh,"esm2017")}Fx();const xp="@firebase/installations",ul="0.6.9";/**
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
 */const Ip=1e4,Ap=`w:${ul}`,Rp="FIS_v2",Ux="https://firebaseinstallations.googleapis.com/v1",Bx=60*60*1e3,qx="installations",$x="Installations";/**
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
 */const Wx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new Hn(qx,$x,Wx);function Sp(n){return n instanceof rt&&n.code.includes("request-failed")}/**
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
 */function Pp({projectId:n}){return`${Ux}/projects/${n}/installations`}function Np(n){return{token:n.token,requestStatus:2,expiresIn:Hx(n.expiresIn),creationTime:Date.now()}}async function Cp(n,e){const r=(await e.json()).error;return $n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zx(n,{refreshToken:e}){const t=kp(n);return t.append("Authorization",Gx(e)),t}async function Dp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Hx(n){return Number(n.replace("s","000"))}function Gx(n){return`${Rp} ${n}`}/**
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
 */async function Kx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Pp(n),s=kp(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:Rp,appId:n.appId,sdkVersion:Ap},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await Dp(()=>fetch(r,c));if(l.ok){const d=await l.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Np(d.authToken)}}else throw await Cp("Create Installation",l)}/**
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
 */function Op(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Qx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Yx=/^[cdef][\w-]{21}$/,ic="";function Xx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Jx(n);return Yx.test(t)?t:ic}catch{return ic}}function Jx(n){return Qx(n).substr(0,22)}/**
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
 */const jp=new Map;function Vp(n,e){const t=jo(n);Mp(t,e),Zx(t,e)}function Mp(n,e){const t=jp.get(n);if(t)for(const r of t)r(e)}function Zx(n,e){const t=eI();t&&t.postMessage({key:n,fid:e}),tI()}let Sn=null;function eI(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=n=>{Mp(n.data.key,n.data.fid)}),Sn}function tI(){jp.size===0&&Sn&&(Sn.close(),Sn=null)}/**
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
 */const nI="firebase-installations-database",rI=1,Wn="firebase-installations-store";let Ra=null;function hl(){return Ra||(Ra=zd(nI,rI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Wn)}}})),Ra}async function ro(n,e){const t=jo(n),s=(await hl()).transaction(Wn,"readwrite"),i=s.objectStore(Wn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Vp(n,e.fid),e}async function Lp(n){const e=jo(n),r=(await hl()).transaction(Wn,"readwrite");await r.objectStore(Wn).delete(e),await r.done}async function Vo(n,e){const t=jo(n),s=(await hl()).transaction(Wn,"readwrite"),i=s.objectStore(Wn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&Vp(n,c.fid),c}/**
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
 */async function dl(n){let e;const t=await Vo(n.appConfig,r=>{const s=sI(r),i=iI(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ic?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function sI(n){const e=n||{fid:Xx(),registrationStatus:0};return Fp(e)}function iI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oI(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aI(n)}:{installationEntry:e}}async function oI(n,e){try{const t=await Kx(n,e);return ro(n.appConfig,t)}catch(t){throw Sp(t)&&t.customData.serverCode===409?await Lp(n.appConfig):await ro(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function aI(n){let e=await Kh(n.appConfig);for(;e.registrationStatus===1;)await Op(100),e=await Kh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await dl(n);return r||t}return e}function Kh(n){return Vo(n,e=>{if(!e)throw $n.create("installation-not-found");return Fp(e)})}function Fp(n){return cI(n)?{fid:n.fid,registrationStatus:0}:n}function cI(n){return n.registrationStatus===1&&n.registrationTime+Ip<Date.now()}/**
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
 */async function lI({appConfig:n,heartbeatServiceProvider:e},t){const r=uI(n,t),s=zx(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Ap,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await Dp(()=>fetch(r,c));if(l.ok){const d=await l.json();return Np(d)}else throw await Cp("Generate Auth Token",l)}function uI(n,{fid:e}){return`${Pp(n)}/${e}/authTokens:generate`}/**
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
 */async function fl(n,e=!1){let t;const r=await Vo(n.appConfig,i=>{if(!Up(i))throw $n.create("not-registered");const a=i.authToken;if(!e&&fI(a))return i;if(a.requestStatus===1)return t=hI(n,e),i;{if(!navigator.onLine)throw $n.create("app-offline");const c=pI(i);return t=dI(n,c),c}});return t?await t:r.authToken}async function hI(n,e){let t=await Qh(n.appConfig);for(;t.authToken.requestStatus===1;)await Op(100),t=await Qh(n.appConfig);const r=t.authToken;return r.requestStatus===0?fl(n,e):r}function Qh(n){return Vo(n,e=>{if(!Up(e))throw $n.create("not-registered");const t=e.authToken;return gI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dI(n,e){try{const t=await lI(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ro(n.appConfig,r),t}catch(t){if(Sp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Lp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ro(n.appConfig,r)}throw t}}function Up(n){return n!==void 0&&n.registrationStatus===2}function fI(n){return n.requestStatus===2&&!mI(n)}function mI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Bx}function pI(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function gI(n){return n.requestStatus===1&&n.requestTime+Ip<Date.now()}/**
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
 */async function yI(n){const e=n,{installationEntry:t,registrationPromise:r}=await dl(e);return r?r.catch(console.error):fl(e).catch(console.error),t.fid}/**
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
 */async function _I(n,e=!1){const t=n;return await vI(t),(await fl(t,e)).token}async function vI(n){const{registrationPromise:e}=await dl(n);e&&await e}/**
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
 */function wI(n){if(!n||!n.options)throw Sa("App Configuration");if(!n.name)throw Sa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Sa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Sa(n){return $n.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="installations",bI="installations-internal",EI=n=>{const e=n.getProvider("app").getImmediate(),t=wI(e),r=_n(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},TI=n=>{const e=n.getProvider("app").getImmediate(),t=_n(e,Bp).getImmediate();return{getId:()=>yI(t),getToken:s=>_I(t,s)}};function xI(){ut(new tt(Bp,EI,"PUBLIC")),ut(new tt(bI,TI,"PRIVATE"))}xI();He(xp,ul);He(xp,ul,"esm2017");/**
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
 */const so="analytics",II="firebase_id",AI="origin",RI=60*1e3,SI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ml="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ge=new ho("@firebase/analytics");/**
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
 */const PI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Je=new Hn("analytics","Analytics",PI);/**
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
 */function NI(n){if(!n.startsWith(ml)){const e=Je.create("invalid-gtag-resource",{gtagURL:n});return Ge.warn(e.message),""}return n}function qp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function CI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function kI(n,e){const t=CI("firebase-js-sdk-policy",{createScriptURL:NI}),r=document.createElement("script"),s=`${ml}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function DI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function OI(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const l=(await qp(t)).find(d=>d.measurementId===s);l&&await e[l.appId]}}catch(c){Ge.error(c)}n("config",s,i)}async function jI(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await qp(t);for(const l of a){const d=c.find(y=>y.measurementId===l),m=d&&e[d.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ge.error(i)}}function VI(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,l]=a;await jI(n,e,t,c,l)}else if(i==="config"){const[c,l]=a;await OI(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=a;n("consent",c,l)}else if(i==="get"){const[c,l,d]=a;n("get",c,l,d)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ge.error(c)}}return s}function MI(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=VI(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function LI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ml)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=30,UI=1e3;class BI{constructor(e={},t=UI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $p=new BI;function qI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function $I(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:qI(r)},i=SI.replace("{app-id}",t),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function WI(n,e=$p,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Je.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new GI;return setTimeout(async()=>{c.abort()},RI),Wp({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Wp(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=$p){var i;const{appId:a,measurementId:c}=n;try{await zI(r,e)}catch(l){if(c)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await $I(n);return s.deleteThrottleMetadata(a),l}catch(l){const d=l;if(!HI(d)){if(s.deleteThrottleMetadata(a),c)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw l}const m=Number((i=d==null?void 0:d.customData)===null||i===void 0?void 0:i.httpStatus)===503?Su(t,s.intervalMillis,FI):Su(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(a,y),Ge.debug(`Calling attemptFetch again in ${m} millis`),Wp(n,y,r,s)}}function zI(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HI(n){if(!(n instanceof rt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class GI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function KI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(){if(Bd())try{await qd()}catch(n){return Ge.warn(Je.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ge.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YI(n,e,t,r,s,i,a){var c;const l=WI(n);l.then(w=>{t[w.measurementId]=w.appId,n.options.measurementId&&w.measurementId!==n.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ge.error(w)),e.push(l);const d=QI().then(w=>{if(w)return r.getId()}),[m,y]=await Promise.all([l,d]);LI(i)||kI(i,m.measurementId),s("js",new Date);const g=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return g[AI]="firebase",g.update=!0,y!=null&&(g[II]=y),s("config",m.measurementId,g),m.measurementId}/**
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
 */class XI{constructor(e){this.app=e}_delete(){return delete _s[this.app.options.appId],Promise.resolve()}}let _s={},Yh=[];const Xh={};let Pa="dataLayer",JI="gtag",Jh,zp,Zh=!1;function ZI(){const n=[];if(Ud()&&n.push("This is a browser extension environment."),By()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Je.create("invalid-analytics-context",{errorInfo:e});Ge.warn(t.message)}}function eA(n,e,t){ZI();const r=n.options.appId;if(!r)throw Je.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(_s[r]!=null)throw Je.create("already-exists",{id:r});if(!Zh){DI(Pa);const{wrappedGtag:i,gtagCore:a}=MI(_s,Yh,Xh,Pa,JI);zp=i,Jh=a,Zh=!0}return _s[r]=YI(n,Yh,Xh,e,Jh,Pa,t),new XI(n)}function tA(n=fo()){n=he(n);const e=_n(n,so);return e.isInitialized()?e.getImmediate():nA(n)}function nA(n,e={}){const t=_n(n,so);if(t.isInitialized()){const s=t.getImmediate();if(bs(e,t.getOptions()))return s;throw Je.create("already-initialized")}return t.initialize({options:e})}function Hp(n,e,t,r){n=he(n),KI(zp,_s[n.app.options.appId],e,t,r).catch(s=>Ge.error(s))}const ed="@firebase/analytics",td="0.10.8";function rA(){ut(new tt(so,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return eA(r,s,t)},"PUBLIC")),ut(new tt("analytics-internal",n,"PRIVATE")),He(ed,td),He(ed,td,"esm2017");function n(e){try{const t=e.getProvider(so).getImmediate();return{logEvent:(r,s,i)=>Hp(t,r,s,i)}}catch(t){throw Je.create("interop-component-reg-failed",{reason:t})}}}rA();const sA={apiKey:"AIzaSyBqeebps7CNCQw_xis2DKiGHMRYmurj_B4",authDomain:"kingcp-a0065.firebaseapp.com",projectId:"kingcp-a0065",storageBucket:"kingcp-a0065.firebasestorage.app",messagingSenderId:"550768863932",appId:"1:550768863932:web:acabd2d2584b8165a7beb9",measurementId:"G-QRVT5F6VGR"};let hs;try{hs=Hd(sA),console.log("Firebase initialized successfully")}catch(n){throw console.error("Error initializing Firebase:",n),n}let Yn,ae,Gp,oc;try{Yn=b0(hs),ae=cT(hs),Gp=Vx(hs),oc=tA(hs),console.log("Firebase services initialized successfully")}catch(n){throw console.error("Error initializing Firebase services:",n),n}const iA=new gt;iA.setCustomParameters({client_id:"550768863932-2flf4unnbeiknfdt8n4i6cvjhhjodehb.apps.googleusercontent.com"});const It=(n,e)=>{oc&&Hp(oc,n,e)},yn={USER_SIGNED_UP:"user_signed_up",USER_SIGNED_IN:"user_signed_in",USER_SIGNED_OUT:"user_signed_out",ENTRY_CREATED:"entry_created",ENTRY_UPDATED:"entry_updated",ENTRY_DELETED:"entry_deleted",ENTRY_VIEWED:"entry_viewed",VOTE_CAST:"vote_cast",VOTE_REMOVED:"vote_removed",PAGE_VIEW:"page_view",ERROR_OCCURRED:"error_occurred"},oA={},nd=n=>{let e;const t=new Set,r=(m,y)=>{const g=typeof m=="function"?m(e):m;if(!Object.is(g,e)){const w=e;e=y??(typeof g!="object"||g===null)?g:Object.assign({},e,g),t.forEach(A=>A(e,w))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>d,subscribe:m=>(t.add(m),()=>t.delete(m)),destroy:()=>{(oA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},d=e=n(r,s,l);return l},aA=n=>n?nd(n):nd;var Kp={exports:{}},Qp={},Yp={exports:{}},Xp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=M;function cA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var lA=typeof Object.is=="function"?Object.is:cA,uA=Pr.useState,hA=Pr.useEffect,dA=Pr.useLayoutEffect,fA=Pr.useDebugValue;function mA(n,e){var t=e(),r=uA({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return dA(function(){s.value=t,s.getSnapshot=e,Na(s)&&i({inst:s})},[n,t,e]),hA(function(){return Na(s)&&i({inst:s}),n(function(){Na(s)&&i({inst:s})})},[n]),fA(t),t}function Na(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!lA(n,t)}catch{return!0}}function pA(n,e){return e()}var gA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?pA:mA;Xp.useSyncExternalStore=Pr.useSyncExternalStore!==void 0?Pr.useSyncExternalStore:gA;Yp.exports=Xp;var yA=Yp.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=M,_A=yA;function vA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var wA=typeof Object.is=="function"?Object.is:vA,bA=_A.useSyncExternalStore,EA=Mo.useRef,TA=Mo.useEffect,xA=Mo.useMemo,IA=Mo.useDebugValue;Qp.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=EA(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=xA(function(){function l(w){if(!d){if(d=!0,m=w,w=r(w),s!==void 0&&a.hasValue){var A=a.value;if(s(A,w))return y=A}return y=w}if(A=y,wA(m,w))return A;var x=r(w);return s!==void 0&&s(A,x)?(m=w,A):(m=w,y=x)}var d=!1,m,y,g=t===void 0?null:t;return[function(){return l(e())},g===null?void 0:function(){return l(g())}]},[e,t,r,s]);var c=bA(n,i[0],i[1]);return TA(function(){a.hasValue=!0,a.value=c},[c]),IA(c),c};Kp.exports=Qp;var AA=Kp.exports;const RA=zg(AA),Jp={},{useDebugValue:SA}=Hg,{useSyncExternalStoreWithSelector:PA}=RA;let rd=!1;const NA=n=>n;function CA(n,e=NA,t){(Jp?"production":void 0)!=="production"&&t&&!rd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),rd=!0);const r=PA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return SA(r),r}const kA=n=>{(Jp?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?aA(n):n,t=(r,s)=>CA(e,r,s);return Object.assign(t,e),t},DA=n=>kA,OA={};function jA(n,e){let t;try{t=n()}catch{return}return{getItem:s=>{var i;const a=l=>l===null?null:JSON.parse(l,void 0),c=(i=t.getItem(s))!=null?i:null;return c instanceof Promise?c.then(a):a(c)},setItem:(s,i)=>t.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>t.removeItem(s)}}const Cs=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return Cs(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return Cs(r)(t)}}}},VA=(n,e)=>(t,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:T=>T,version:0,merge:(T,j)=>({...j,...T}),...e},a=!1;const c=new Set,l=new Set;let d;try{d=i.getStorage()}catch{}if(!d)return n((...T)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...T)},r,s);const m=Cs(i.serialize),y=()=>{const T=i.partialize({...r()});let j;const S=m({state:T,version:i.version}).then(O=>d.setItem(i.name,O)).catch(O=>{j=O});if(j)throw j;return S},g=s.setState;s.setState=(T,j)=>{g(T,j),y()};const w=n((...T)=>{t(...T),y()},r,s);let A;const x=()=>{var T;if(!d)return;a=!1,c.forEach(S=>S(r()));const j=((T=i.onRehydrateStorage)==null?void 0:T.call(i,r()))||void 0;return Cs(d.getItem.bind(d))(i.name).then(S=>{if(S)return i.deserialize(S)}).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return i.migrate(S.state,S.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return S.state}).then(S=>{var O;return A=i.merge(S,(O=r())!=null?O:w),t(A,!0),y()}).then(()=>{j==null||j(A,void 0),a=!0,l.forEach(S=>S(A))}).catch(S=>{j==null||j(void 0,S)})};return s.persist={setOptions:T=>{i={...i,...T},T.getStorage&&(d=T.getStorage())},clearStorage:()=>{d==null||d.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>x(),hasHydrated:()=>a,onHydrate:T=>(c.add(T),()=>{c.delete(T)}),onFinishHydration:T=>(l.add(T),()=>{l.delete(T)})},x(),A||w},MA=(n,e)=>(t,r,s)=>{let i={storage:jA(()=>localStorage),partialize:x=>x,version:0,merge:(x,T)=>({...T,...x}),...e},a=!1;const c=new Set,l=new Set;let d=i.storage;if(!d)return n((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...x)},r,s);const m=()=>{const x=i.partialize({...r()});return d.setItem(i.name,{state:x,version:i.version})},y=s.setState;s.setState=(x,T)=>{y(x,T),m()};const g=n((...x)=>{t(...x),m()},r,s);s.getInitialState=()=>g;let w;const A=()=>{var x,T;if(!d)return;a=!1,c.forEach(S=>{var O;return S((O=r())!=null?O:g)});const j=((T=i.onRehydrateStorage)==null?void 0:T.call(i,(x=r())!=null?x:g))||void 0;return Cs(d.getItem.bind(d))(i.name).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return[!0,i.migrate(S.state,S.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,S.state];return[!1,void 0]}).then(S=>{var O;const[F,$]=S;if(w=i.merge($,(O=r())!=null?O:g),t(w,!0),F)return m()}).then(()=>{j==null||j(w,void 0),w=r(),a=!0,l.forEach(S=>S(w))}).catch(S=>{j==null||j(void 0,S)})};return s.persist={setOptions:x=>{i={...i,...x},x.storage&&(d=x.storage)},clearStorage:()=>{d==null||d.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>A(),hasHydrated:()=>a,onHydrate:x=>(c.add(x),()=>{c.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},i.skipHydration||A(),w||g},LA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((OA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),VA(n,e)):MA(n,e),FA=LA,Lo=DA()(FA(n=>({user:null,token:null,isAuthenticated:!1,login:(e,t)=>{localStorage.setItem("token",t),n({user:e,token:t,isAuthenticated:!0})},logout:()=>{localStorage.removeItem("token"),n({user:null,token:null,isAuthenticated:!1})}}),{name:"auth-storage"})),Zp=async(n,e,t)=>{try{if(!n||!n.includes("@"))throw new Error("Invalid email format");if(!e||e.length<6)throw new Error("Password must be at least 6 characters long");const r=await sw(Yn,n,e);t&&await aw(r.user,{displayName:t});const s={id:r.user.uid,email:r.user.email,displayName:r.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date};r.user.photoURL&&(s.photoURL=r.user.photoURL);try{console.log("Creating user document in Firestore:",s),await Do(dt(ae,"users",s.id),s),console.log("User document created successfully")}catch(i){console.error("Error creating user document:",i)}try{const i=await r.user.getIdToken();console.log("Got ID token for new user"),Lo.getState().login(s,i),console.log("Updated auth store after registration")}catch(i){console.error("Error getting token:",i)}return It(yn.USER_SIGNED_UP),s}catch(r){console.error("Registration error:",r);let s="Failed to register";switch(r.code){case"auth/email-already-in-use":s="This email is already registered";break;case"auth/invalid-email":s="Invalid email format";break;case"auth/operation-not-allowed":s="Email/password accounts are not enabled. Please contact support.";break;case"auth/weak-password":s="Password should be at least 6 characters";break;default:s=r.message||"Failed to register"}throw It(yn.ERROR_OCCURRED,{error_message:s,error_code:r.code}),new Error(s)}},eg=async(n,e)=>{try{console.log("Attempting to login with email:",n);const t=await iw(Yn,n,e);console.log("Login successful, fetching user data");let r;try{const i=await Ks(dt(ae,"users",t.user.uid));i.exists()?(console.log("User document found"),r=i.data()):(console.log("User document not found, creating one"),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},t.user.photoURL&&(r.photoURL=t.user.photoURL),await Do(dt(ae,"users",r.id),r))}catch(i){console.error("Error fetching/creating user document:",i),r={id:t.user.uid,email:t.user.email,displayName:t.user.displayName||void 0,photoURL:t.user.photoURL||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date}}const s=await t.user.getIdToken();return console.log("Got ID token"),Lo.getState().login(r,s),console.log("Updated auth store"),It(yn.USER_SIGNED_IN),r}catch(t){console.error("Login error:",t);let r="Failed to login";switch(t.code){case"auth/invalid-email":r="Invalid email format";break;case"auth/user-disabled":r="This account has been disabled";break;case"auth/user-not-found":r="No account found with this email";break;case"auth/wrong-password":r="Incorrect password";break;case"auth/too-many-requests":r="Too many failed login attempts. Please try again later.";break;default:r=t.message||"Failed to login"}throw It(yn.ERROR_OCCURRED,{error_message:r,error_code:t.code}),new Error(r)}},tg=async()=>{try{const n=new gt;return n.setCustomParameters({prompt:"select_account",login_hint:"user@gmail.com"}),n.addScope("https://www.googleapis.com/auth/userinfo.email"),n.addScope("https://www.googleapis.com/auth/userinfo.profile"),await jw(Yn,n),null}catch(n){console.error("Google login error:",n);let e="Failed to login with Google";throw n.code==="auth/popup-closed-by-user"?e="Login was cancelled":n.code==="auth/popup-blocked"?e="Login popup was blocked. Please allow popups for this site.":n.code==="auth/cancelled-popup-request"&&(e="Another login attempt is in progress"),It(yn.ERROR_OCCURRED,{method:"google",error:e}),new Error(e)}},UA=async()=>{try{const n=await Mw(Yn);if(n){const e=n.user,t=await e.getIdToken(),r=await Ks(dt(ae,"users",e.uid));let s;return r.exists()?s=r.data():(s={id:e.uid,email:e.email,displayName:e.displayName||void 0,isAdmin:!1,createdAt:new Date,updatedAt:new Date},e.photoURL&&(s.photoURL=e.photoURL),await Do(dt(ae,"users",s.id),s),It(yn.USER_SIGNED_UP,{method:"google"})),Lo.getState().login(s,t),It(yn.USER_SIGNED_IN,{method:"google"}),window.location.href="/dashboard",s}return null}catch(n){return console.error("Error handling redirect result:",n),null}},BA=async n=>{try{await rw(Yn,n)}catch(e){throw It(yn.ERROR_OCCURRED,{error_message:e.message,error_code:e.code}),e}},qA=n=>uw(Yn,n);function zt(){const[n,e]=M.useState(null),[t,r]=M.useState(!0),[s,i]=M.useState(null);return M.useEffect(()=>{const a=qA(async c=>{try{if(c){const l=await Ks(dt(ae,"users",c.uid));if(l.exists()){const d=l.data();e(d)}else e(null)}else e(null)}catch(l){i(l)}finally{r(!1)}});return()=>a()},[]),{user:n,loading:t,error:s,isAuthenticated:!!n,isAdmin:(n==null?void 0:n.isAdmin)||!1}}function $A({title:n,titleId:e,...t},r){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?M.createElement("title",{id:e},n):null,M.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const WA=M.forwardRef($A);function zA({title:n,titleId:e,...t},r){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?M.createElement("title",{id:e},n):null,M.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const HA=M.forwardRef(zA),GA=[{name:"Home",href:"/",public:!0},{name:"Submit Design",href:"/submit",public:!1},{name:"Vote",href:"/vote",public:!1},{name:"Winners",href:"/winners",public:!0}];function sd(...n){return n.filter(Boolean).join(" ")}function KA(){const{user:n,isAuthenticated:e,logout:t}=Lo(),r=js(),s=()=>{t(),r("/")},i=GA.filter(a=>a.public||e);return u.jsxs("div",{className:"min-h-screen bg-gray-50",children:[u.jsx(ha,{as:"nav",className:"bg-white shadow",children:({open:a})=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex h-16 justify-between",children:[u.jsxs("div",{className:"flex",children:[u.jsx("div",{className:"flex flex-shrink-0 items-center",children:u.jsx(oe,{to:"/",className:"text-xl font-bold text-primary-600",children:"KING Competition"})}),u.jsxs("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:[i.map(c=>u.jsx(oe,{to:c.href,className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:c.name},c.name)),(n==null?void 0:n.isAdmin)&&u.jsx(oe,{to:"/admin",className:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary-500 hover:text-gray-700",children:"Admin"})]})]}),u.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e?u.jsxs(es,{as:"div",className:"relative ml-3",children:[u.jsxs(es.Button,{className:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",children:[u.jsx("span",{className:"sr-only",children:"Open user menu"}),u.jsx("div",{className:"h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center",children:u.jsx("span",{className:"text-primary-800",children:n==null?void 0:n.email.charAt(0).toUpperCase()})})]}),u.jsx(Yg,{as:M.Fragment,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:u.jsxs(es.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[u.jsx(es.Item,{children:({active:c})=>u.jsx(oe,{to:"/profile",className:sd(c?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Profile"})}),u.jsx(es.Item,{children:({active:c})=>u.jsx("button",{onClick:s,className:sd(c?"bg-gray-100":"","block w-full text-left px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})]})})]}):u.jsxs("div",{className:"space-x-4",children:[u.jsx(oe,{to:"/login",className:"text-gray-500 hover:text-gray-700",children:"Sign in"}),u.jsx(oe,{to:"/register",className:"btn btn-primary",children:"Sign up"})]})}),u.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:u.jsxs(ha.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500",children:[u.jsx("span",{className:"sr-only",children:"Open main menu"}),a?u.jsx(HA,{className:"block h-6 w-6","aria-hidden":"true"}):u.jsx(WA,{className:"block h-6 w-6","aria-hidden":"true"})]})})]})}),u.jsxs(ha.Panel,{className:"sm:hidden",children:[u.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[i.map(c=>u.jsx(oe,{to:c.href,className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:c.name},c.name)),(n==null?void 0:n.isAdmin)&&u.jsx(oe,{to:"/admin",className:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-primary-500 hover:bg-gray-50 hover:text-gray-700",children:"Admin"})]}),u.jsx("div",{className:"border-t border-gray-200 pb-3 pt-4",children:e?u.jsxs("div",{className:"space-y-1",children:[u.jsx(oe,{to:"/profile",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Profile"}),u.jsx("button",{onClick:s,className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign out"})]}):u.jsxs("div",{className:"space-y-1",children:[u.jsx(oe,{to:"/login",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign in"}),u.jsx(oe,{to:"/register",className:"block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700",children:"Sign up"})]})})]})]})}),u.jsx("main",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",children:u.jsx(Gg,{})})]})}function QA(){const[n,e]=M.useState(""),[t,r]=M.useState(""),[s,i]=M.useState(""),[a,c]=M.useState(!1),l=js(),d=async y=>{if(y.preventDefault(),!n||!t){i("Please enter both email and password");return}try{c(!0),i(""),console.log("Attempting login with email:",n),await eg(n,t),console.log("Login successful, navigating to dashboard"),l("/dashboard")}catch(g){console.error("Login form error:",g),i(g.message||"Failed to login")}finally{c(!1)}},m=async()=>{i("");try{console.log("Attempting Google login"),await tg()}catch(y){console.error("Google login error:",y),i(y.message||"Failed to login with Google")}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-md w-full space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"}),u.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",u.jsx(oe,{to:"/register",className:"font-medium text-primary-600 hover:text-primary-500",children:"create a new account"})]})]}),u.jsxs("form",{className:"mt-8 space-y-6",onSubmit:d,children:[s&&u.jsx("div",{className:"rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:s})}),u.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),u.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:y=>e(y.target.value)})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:y=>r(y.target.value)})]})]}),u.jsx("div",{className:"flex items-center justify-between",children:u.jsx("div",{className:"text-sm",children:u.jsx(oe,{to:"/reset-password",className:"font-medium text-primary-600 hover:text-primary-500",children:"Forgot your password?"})})}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Signing in...":"Sign in"})})]}),u.jsxs("div",{className:"mt-6",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute inset-0 flex items-center",children:u.jsx("div",{className:"w-full border-t border-gray-300"})}),u.jsx("div",{className:"relative flex justify-center text-sm",children:u.jsx("span",{className:"px-2 bg-gray-50 text-gray-500",children:"Or continue with"})})]}),u.jsx("div",{className:"mt-6",children:u.jsxs("button",{onClick:m,disabled:a,className:"w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:[u.jsx("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:u.jsx("path",{fill:"currentColor",d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"})}),"Sign in with Google"]})})]})]})})}function YA(){const[n,e]=M.useState(""),[t,r]=M.useState(""),[s,i]=M.useState(""),[a,c]=M.useState(""),[l,d]=M.useState(""),[m,y]=M.useState(!1),g=js(),w=async x=>{if(x.preventDefault(),!n||!t||!s){d("Please fill out all required fields");return}if(t!==s){d("Passwords do not match");return}if(t.length<6){d("Password must be at least 6 characters long");return}try{y(!0),d(""),console.log("Attempting registration with email:",n);try{await Zp(n,t,a||void 0),console.log("Registration successful, navigating to dashboard"),g("/dashboard")}catch(T){console.error("Registration error:",T),T.message&&T.message.includes("already registered")?d("This email is already registered. Please log in instead."):d(T.message||"Failed to register")}}finally{y(!1)}},A=x=>{const{name:T,value:j}=x.target;switch(T){case"email":e(j);break;case"password":r(j);break;case"confirmPassword":i(j);break;case"displayName":c(j);break}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-md w-full space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"}),u.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",u.jsx(oe,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),u.jsxs("form",{className:"mt-8 space-y-6",onSubmit:w,children:[l&&u.jsx("div",{className:"rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:l})}),u.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"display-name",className:"sr-only",children:"Display Name"}),u.jsx("input",{id:"display-name",name:"displayName",type:"text",autoComplete:"name",className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Display Name",value:a,onChange:A})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),u.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:A})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),u.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Password",value:t,onChange:A})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"confirm-password",className:"sr-only",children:"Confirm Password"}),u.jsx("input",{id:"confirm-password",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Confirm Password",value:s,onChange:A})]})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:m,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",children:m?"Creating account...":"Create account"})})]})]})})}function XA(){const[n,e]=M.useState(""),[t,r]=M.useState(null),[s,i]=M.useState(!1),[a,c]=M.useState(!1),l=async d=>{d.preventDefault(),r(null),i(!1),c(!0);try{await BA(n),i(!0)}catch(m){r(m.message||"Failed to send reset email")}finally{c(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-md w-full space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Reset your password"}),u.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Or"," ",u.jsx(oe,{to:"/login",className:"font-medium text-primary-600 hover:text-primary-500",children:"sign in to your account"})]})]}),u.jsxs("form",{className:"mt-8 space-y-6",onSubmit:l,children:[t&&u.jsx("div",{className:"rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:t})}),s&&u.jsx("div",{className:"rounded-md bg-green-50 p-4",children:u.jsx("div",{className:"text-sm text-green-700",children:"Password reset email sent! Please check your inbox."})}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),u.jsx("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:n,onChange:d=>e(d.target.value)})]}),u.jsx("div",{children:u.jsx("button",{type:"submit",disabled:a,className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:a?"Sending...":"Send reset link"})})]})]})})}function JA(){var c,l;const{user:n}=zt(),[e,t]=M.useState(null),[r,s]=M.useState(!0),[i,a]=M.useState(null);return M.useEffect(()=>{(async()=>{if(n)try{const m=Xe($e(ae,"entries"),Mt("userId","==",n.id)),g=(await et(m)).docs.map(T=>({id:T.id,...T.data()}));let w=0,A=0,x=[];if(g.length>0){const T=Xe($e(ae,"votes"),Mt("entryId","in",g.map(S=>S.id)));x=(await et(T)).docs.map(S=>({id:S.id,...S.data()})),w=x.length,A=w>0?x.reduce((S,O)=>S+(O.rating||0),0)/w:0}t({totalEntries:g.length,totalVotes:w,averageRating:A,entries:g})}catch(m){a(m.message||"Failed to fetch user statistics")}finally{s(!1)}})()},[n]),r?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):i?u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:u.jsx("div",{className:"rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:i})})}):u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[n!=null&&n.photoURL?u.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):u.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:u.jsx("span",{className:"text-2xl text-primary-600",children:((c=n==null?void 0:n.displayName)==null?void 0:c[0])||((l=n==null?void 0:n.email)==null?void 0:l[0])||"?"})}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),u.jsx("p",{className:"text-gray-500",children:n==null?void 0:n.email})]})]}),u.jsxs("div",{className:"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3",children:[u.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:u.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[u.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Entries"}),u.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalEntries)||0})]})}),u.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:u.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[u.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Total Votes Received"}),u.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.totalVotes)||0})]})}),u.jsx("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:u.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[u.jsx("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"Average Rating"}),u.jsx("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:(e==null?void 0:e.averageRating.toFixed(1))||"0.0"})]})})]}),u.jsxs("div",{className:"mt-8",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Your Entries"}),u.jsx("div",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:e==null?void 0:e.entries.map(d=>u.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[u.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900",children:d.title}),d.description&&u.jsx("p",{className:"mt-2 text-sm text-gray-500",children:d.description}),u.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[u.jsxs("div",{className:"text-sm text-gray-500",children:[d.voteCount," votes"]}),u.jsxs("div",{className:"text-sm font-medium text-primary-600",children:["Rating: ",d.voteCount>0?(d.voteCount/e.totalVotes*100).toFixed(1):"0.0","%"]})]})]})]},d.id))})]})]})})}const zn=async()=>{const n=dt(ae,"tournament","current"),e=await Ks(n);return e.exists()?{id:e.id,...e.data(),submissionPhaseEnd:e.data().submissionPhaseEnd.toDate(),votingPhaseEnd:e.data().votingPhaseEnd.toDate(),createdAt:e.data().createdAt.toDate(),updatedAt:e.data().updatedAt.toDate()}:null},id=async n=>{const e=dt(ae,"tournament","current");(await Ks(e)).exists()||await pl(),await np(e,{...n,updatedAt:ie.now()})},pl=async()=>{const n=new Date,e=new Date(n.getTime()+7*24*60*60*1e3),t=new Date(n.getTime()+14*24*60*60*1e3);await Do(dt(ae,"tournament","current"),{currentPhase:"submission",submissionPhaseEnd:ie.fromDate(e),votingPhaseEnd:ie.fromDate(t),createdAt:ie.now(),updatedAt:ie.now()})},ng=6048e5,ZA=864e5,Ai=43200,od=1440,ad=Symbol.for("constructDateFrom");function $t(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&ad in n?n[ad](e):n instanceof Date?new n.constructor(e):new Date(e)}function we(n,e){return $t(e||n,n)}let eR={};function Xs(){return eR}function ks(n,e){var c,l,d,m;const t=Xs(),r=(e==null?void 0:e.weekStartsOn)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,s=we(n,e==null?void 0:e.in),i=s.getDay(),a=(i<r?7:0)+i-r;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function io(n,e){return ks(n,{...e,weekStartsOn:1})}function rg(n,e){const t=we(n,e==null?void 0:e.in),r=t.getFullYear(),s=$t(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=io(s),a=$t(t,0);a.setFullYear(r,0,4),a.setHours(0,0,0,0);const c=io(a);return t.getTime()>=i.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function oo(n){const e=we(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Fo(n,...e){const t=$t.bind(null,n||e.find(r=>typeof r=="object"));return e.map(t)}function cd(n,e){const t=we(n,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function tR(n,e,t){const[r,s]=Fo(t==null?void 0:t.in,n,e),i=cd(r),a=cd(s),c=+i-oo(i),l=+a-oo(a);return Math.round((c-l)/ZA)}function nR(n,e){const t=rg(n,e),r=$t(n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),io(r)}function Mi(n,e){const t=+we(n)-+we(e);return t<0?-1:t>0?1:t}function rR(n){return $t(n,Date.now())}function sR(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function iR(n){return!(!sR(n)&&typeof n!="number"||isNaN(+we(n)))}function oR(n,e,t){const[r,s]=Fo(t==null?void 0:t.in,n,e),i=r.getFullYear()-s.getFullYear(),a=r.getMonth()-s.getMonth();return i*12+a}function aR(n){return e=>{const r=(n?Math[n]:Math.trunc)(e);return r===0?0:r}}function cR(n,e){return+we(n)-+we(e)}function lR(n,e){const t=we(n,e==null?void 0:e.in);return t.setHours(23,59,59,999),t}function uR(n,e){const t=we(n,e==null?void 0:e.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function hR(n,e){const t=we(n,e==null?void 0:e.in);return+lR(t,e)==+uR(t,e)}function dR(n,e,t){const[r,s,i]=Fo(t==null?void 0:t.in,n,n,e),a=Mi(s,i),c=Math.abs(oR(s,i));if(c<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-a*c);let l=Mi(s,i)===-a;hR(r)&&c===1&&Mi(r,i)===1&&(l=!1);const d=a*(c-+l);return d===0?0:d}function fR(n,e,t){const r=cR(n,e)/1e3;return aR(t==null?void 0:t.roundingMethod)(r)}function mR(n,e){const t=we(n,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const pR={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},gR=(n,e,t)=>{let r;const s=pR[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function Ca(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const yR={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},_R={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vR={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wR={date:Ca({formats:yR,defaultWidth:"full"}),time:Ca({formats:_R,defaultWidth:"full"}),dateTime:Ca({formats:vR,defaultWidth:"full"})},bR={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ER=(n,e,t,r)=>bR[n];function rs(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const a=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):a;s=n.formattingValues[c]||n.formattingValues[a]}else{const a=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[c]||n.values[a]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const TR={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xR={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},IR={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},AR={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},RR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},SR={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},PR=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},NR={ordinalNumber:PR,era:rs({values:TR,defaultWidth:"wide"}),quarter:rs({values:xR,defaultWidth:"wide",argumentCallback:n=>n-1}),month:rs({values:IR,defaultWidth:"wide"}),day:rs({values:AR,defaultWidth:"wide"}),dayPeriod:rs({values:RR,defaultWidth:"wide",formattingValues:SR,defaultFormattingWidth:"wide"})};function ss(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const a=i[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(c)?kR(c,y=>y.test(a)):CR(c,y=>y.test(a));let d;d=n.valueCallback?n.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const m=e.slice(a.length);return{value:d,rest:m}}}function CR(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function kR(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function DR(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let a=n.valueCallback?n.valueCallback(i[0]):i[0];a=t.valueCallback?t.valueCallback(a):a;const c=e.slice(s.length);return{value:a,rest:c}}}const OR=/^(\d+)(th|st|nd|rd)?/i,jR=/\d+/i,VR={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},MR={any:[/^b/i,/^(a|c)/i]},LR={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},FR={any:[/1/i,/2/i,/3/i,/4/i]},UR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},BR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qR={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$R={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},WR={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zR={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},HR={ordinalNumber:DR({matchPattern:OR,parsePattern:jR,valueCallback:n=>parseInt(n,10)}),era:ss({matchPatterns:VR,defaultMatchWidth:"wide",parsePatterns:MR,defaultParseWidth:"any"}),quarter:ss({matchPatterns:LR,defaultMatchWidth:"wide",parsePatterns:FR,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ss({matchPatterns:UR,defaultMatchWidth:"wide",parsePatterns:BR,defaultParseWidth:"any"}),day:ss({matchPatterns:qR,defaultMatchWidth:"wide",parsePatterns:$R,defaultParseWidth:"any"}),dayPeriod:ss({matchPatterns:WR,defaultMatchWidth:"any",parsePatterns:zR,defaultParseWidth:"any"})},sg={code:"en-US",formatDistance:gR,formatLong:wR,formatRelative:ER,localize:NR,match:HR,options:{weekStartsOn:0,firstWeekContainsDate:1}};function GR(n,e){const t=we(n,e==null?void 0:e.in);return tR(t,mR(t))+1}function KR(n,e){const t=we(n,e==null?void 0:e.in),r=+io(t)-+nR(t);return Math.round(r/ng)+1}function ig(n,e){var m,y,g,w;const t=we(n,e==null?void 0:e.in),r=t.getFullYear(),s=Xs(),i=(e==null?void 0:e.firstWeekContainsDate)??((y=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??s.firstWeekContainsDate??((w=(g=s.locale)==null?void 0:g.options)==null?void 0:w.firstWeekContainsDate)??1,a=$t((e==null?void 0:e.in)||n,0);a.setFullYear(r+1,0,i),a.setHours(0,0,0,0);const c=ks(a,e),l=$t((e==null?void 0:e.in)||n,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const d=ks(l,e);return+t>=+c?r+1:+t>=+d?r:r-1}function QR(n,e){var c,l,d,m;const t=Xs(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(d=t.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,s=ig(n,e),i=$t((e==null?void 0:e.in)||n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),ks(i,e)}function YR(n,e){const t=we(n,e==null?void 0:e.in),r=+ks(t,e)-+QR(t,e);return Math.round(r/ng)+1}function ne(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const Xt={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return ne(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):ne(t+1,2)},d(n,e){return ne(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return ne(n.getHours()%12||12,e.length)},H(n,e){return ne(n.getHours(),e.length)},m(n,e){return ne(n.getMinutes(),e.length)},s(n,e){return ne(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return ne(s,e.length)}},nr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ld={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return Xt.y(n,e)},Y:function(n,e,t,r){const s=ig(n,r),i=s>0?s:1-s;if(e==="YY"){const a=i%100;return ne(a,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):ne(i,e.length)},R:function(n,e){const t=rg(n);return ne(t,e.length)},u:function(n,e){const t=n.getFullYear();return ne(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ne(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ne(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return Xt.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return ne(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=YR(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):ne(s,e.length)},I:function(n,e,t){const r=KR(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):ne(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):Xt.d(n,e)},D:function(n,e,t){const r=GR(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):ne(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ne(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ne(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return ne(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=nr.noon:r===0?s=nr.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=nr.evening:r>=12?s=nr.afternoon:r>=4?s=nr.morning:s=nr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Xt.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):Xt.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):ne(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):ne(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):Xt.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):Xt.s(n,e)},S:function(n,e){return Xt.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return hd(r);case"XXXX":case"XX":return An(r);case"XXXXX":case"XXX":default:return An(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return hd(r);case"xxxx":case"xx":return An(r);case"xxxxx":case"xxx":default:return An(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ud(r,":");case"OOOO":default:return"GMT"+An(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ud(r,":");case"zzzz":default:return"GMT"+An(r,":")}},t:function(n,e,t){const r=Math.trunc(+n/1e3);return ne(r,e.length)},T:function(n,e,t){return ne(+n,e.length)}};function ud(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+ne(i,2)}function hd(n,e){return n%60===0?(n>0?"-":"+")+ne(Math.abs(n)/60,2):An(n,e)}function An(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=ne(Math.trunc(r/60),2),i=ne(r%60,2);return t+s+e+i}const dd=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},og=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},XR=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return dd(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",dd(r,e)).replace("{{time}}",og(s,e))},JR={p:og,P:XR},ZR=/^D+$/,eS=/^Y+$/,tS=["D","DD","YY","YYYY"];function nS(n){return ZR.test(n)}function rS(n){return eS.test(n)}function sS(n,e,t){const r=iS(n,e,t);if(console.warn(r),tS.includes(n))throw new RangeError(r)}function iS(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const oS=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,aS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,cS=/^'([^]*?)'?$/,lS=/''/g,uS=/[a-zA-Z]/;function ac(n,e,t){var m,y,g,w;const r=Xs(),s=r.locale??sg,i=r.firstWeekContainsDate??((y=(m=r.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??1,a=r.weekStartsOn??((w=(g=r.locale)==null?void 0:g.options)==null?void 0:w.weekStartsOn)??0,c=we(n,t==null?void 0:t.in);if(!iR(c))throw new RangeError("Invalid time value");let l=e.match(aS).map(A=>{const x=A[0];if(x==="p"||x==="P"){const T=JR[x];return T(A,s.formatLong)}return A}).join("").match(oS).map(A=>{if(A==="''")return{isToken:!1,value:"'"};const x=A[0];if(x==="'")return{isToken:!1,value:hS(A)};if(ld[x])return{isToken:!0,value:A};if(x.match(uS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+x+"`");return{isToken:!1,value:A}});s.localize.preprocessor&&(l=s.localize.preprocessor(c,l));const d={firstWeekContainsDate:i,weekStartsOn:a,locale:s};return l.map(A=>{if(!A.isToken)return A.value;const x=A.value;(rS(x)||nS(x))&&sS(x,e,String(n));const T=ld[x[0]];return T(c,x,s.localize,d)}).join("")}function hS(n){const e=n.match(cS);return e?e[1].replace(lS,"'"):n}function dS(n,e,t){const r=Xs(),s=(t==null?void 0:t.locale)??r.locale??sg,i=2520,a=Mi(n,e);if(isNaN(a))throw new RangeError("Invalid time value");const c=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:a}),[l,d]=Fo(t==null?void 0:t.in,...a>0?[e,n]:[n,e]),m=fR(d,l),y=(oo(d)-oo(l))/1e3,g=Math.round((m-y)/60);let w;if(g<2)return t!=null&&t.includeSeconds?m<5?s.formatDistance("lessThanXSeconds",5,c):m<10?s.formatDistance("lessThanXSeconds",10,c):m<20?s.formatDistance("lessThanXSeconds",20,c):m<40?s.formatDistance("halfAMinute",0,c):m<60?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",1,c):g===0?s.formatDistance("lessThanXMinutes",1,c):s.formatDistance("xMinutes",g,c);if(g<45)return s.formatDistance("xMinutes",g,c);if(g<90)return s.formatDistance("aboutXHours",1,c);if(g<od){const A=Math.round(g/60);return s.formatDistance("aboutXHours",A,c)}else{if(g<i)return s.formatDistance("xDays",1,c);if(g<Ai){const A=Math.round(g/od);return s.formatDistance("xDays",A,c)}else if(g<Ai*2)return w=Math.round(g/Ai),s.formatDistance("aboutXMonths",w,c)}if(w=dR(d,l),w<12){const A=Math.round(g/Ai);return s.formatDistance("xMonths",A,c)}else{const A=w%12,x=Math.trunc(w/12);return A<3?s.formatDistance("aboutXYears",x,c):A<9?s.formatDistance("overXYears",x,c):s.formatDistance("almostXYears",x+1,c)}}function rn(n,e){return dS(n,rR(n),e)}function fS(){const n=js(),[e,t]=M.useState("tournaments"),[r,s]=M.useState(null),[i,a]=M.useState(!0);M.useEffect(()=>{(async()=>{try{const m=await zn();s(m)}catch(m){console.error("Error fetching tournament state:",m)}finally{a(!1)}})()},[]);const c=()=>{if(!r)return"Unknown";switch(r.currentPhase){case"submission":return"Submission Phase";case"voting":return"Voting Phase";case"completed":return"Completed";default:return"Unknown"}},l=()=>{if(!r)return"Unknown";const d=new Date;let m;if(r.currentPhase==="submission")m=r.submissionPhaseEnd;else if(r.currentPhase==="voting")m=r.votingPhaseEnd;else return"Tournament completed";const y=m.getTime()-d.getTime();if(y<=0)return"Ended";const g=Math.floor(y/(1e3*60*60*24)),w=Math.floor(y%(1e3*60*60*24)/(1e3*60*60));return`${g}d ${w}h remaining`};return u.jsx("div",{className:"min-h-screen bg-gray-100",children:u.jsx("div",{className:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"px-4 py-6 sm:px-0",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Admin Dashboard"}),u.jsx("div",{className:"border-b border-gray-200 mt-6",children:u.jsxs("nav",{className:"-mb-px flex space-x-8",children:[u.jsx("button",{onClick:()=>t("tournaments"),className:`${e==="tournaments"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Tournament Management"}),u.jsx("button",{onClick:()=>t("entries"),className:`${e==="entries"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Entries"}),u.jsx("button",{onClick:()=>t("users"),className:`${e==="users"?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`,children:"Users"})]})}),u.jsxs("div",{className:"mt-6",children:[e==="tournaments"&&u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Tournament Management"}),i?u.jsx("div",{className:"flex justify-center py-4",children:u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})}):u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"bg-gray-50 p-4 rounded-lg mb-6",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Current Phase"}),u.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:c()})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Status"}),u.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:l()})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-medium text-gray-500",children:"Last Updated"}),u.jsx("p",{className:"mt-1 text-lg font-semibold text-gray-900",children:r!=null&&r.updatedAt?ac(r.updatedAt,"PPp"):"Never"})]})]})}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:u.jsx("button",{onClick:()=>n("/admin/settings"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Manage Tournament Settings"})})]})]}),e==="entries"&&u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("div",{className:"flex justify-between items-center mb-6",children:u.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:"Entry Management"})}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:u.jsx("button",{onClick:()=>n("/admin/entries"),className:"inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Review Submissions"})})]}),e==="users"&&u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-6",children:"Users"}),u.jsx("div",{className:"text-gray-500",children:"User management features coming soon."})]})]})]})})})}class mS extends M.Component{constructor(){super(...arguments);yu(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("Uncaught error:",t,r)}render(){var t;return this.state.hasError?this.props.fallback||u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"max-w-md w-full space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Something went wrong"}),u.jsx("p",{className:"mt-2 text-center text-sm text-gray-600",children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"})]}),u.jsxs("div",{className:"mt-8 space-y-6",children:[u.jsx("button",{onClick:()=>window.location.reload(),className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Reload Page"}),u.jsx("button",{onClick:()=>window.location.href="/",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Go to Home"})]})]})}):this.props.children}}function pS(){zt();const[n,e]=M.useState(null),[t,r]=M.useState(!0),[s,i]=M.useState(!0),[a,c]=M.useState(null),[l,d]=M.useState(null),[m,y]=M.useState({totalEntries:0,pendingEntries:0,approvedEntries:0,rejectedEntries:0,totalVotes:0,totalUsers:0});M.useEffect(()=>{(async()=>{try{await g(),await w()}catch(j){c(j.message||"An error occurred while fetching data")}})()},[]);const g=async()=>{try{r(!0);const T=await zn();if(T)e(T);else{await pl();const j=await zn();e(j)}}catch(T){console.error("Error fetching tournament state:",T),c(T.message||"Failed to fetch tournament state")}finally{r(!1)}},w=async()=>{try{i(!0);const T=Xe($e(ae,"entries")),S=(await et(T)).docs.map(b=>({id:b.id,...b.data()})),O=S.filter(b=>b.status==="pending"||!b.status).length,F=S.filter(b=>b.status==="approved").length,$=S.filter(b=>b.status==="rejected").length,q=Xe($e(ae,"votes")),I=await et(q),_=Xe($e(ae,"users")),v=await et(_);y({totalEntries:S.length,pendingEntries:O,approvedEntries:F,rejectedEntries:$,totalVotes:I.docs.length,totalUsers:v.docs.length})}catch(T){console.error("Error fetching stats:",T)}finally{i(!1)}},A=async T=>{try{c(null),d(null);const j=new Date;let S=(n==null?void 0:n.submissionPhaseEnd)||new Date,O=(n==null?void 0:n.votingPhaseEnd)||new Date;T==="submission"?(S=new Date(j.getTime()+7*24*60*60*1e3),O=new Date(S.getTime()+7*24*60*60*1e3)):T==="voting"&&T!==(n==null?void 0:n.currentPhase)&&(O=new Date(j.getTime()+7*24*60*60*1e3)),await id({currentPhase:T,submissionPhaseEnd,votingPhaseEnd}),d(`Tournament phase updated to ${T}`),await g()}catch(j){console.error("Error updating tournament phase:",j),c(j.message||"Failed to update tournament phase")}},x=async(T,j)=>{try{c(null),d(null);const S=new Date,O=new Date(S.getTime()+j*24*60*60*1e3),F={};F[`${T}PhaseEnd`]=O,await id(F),d(`${T} phase end time updated to ${j} days from now`),await g()}catch(S){console.error(`Error updating ${T} phase time:`,S),c(S.message||`Failed to update ${T} phase time`)}};return t?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"bg-white shadow rounded-lg p-6 mb-8",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Tournament Settings"}),a&&u.jsx("div",{className:"mb-4 p-4 bg-red-50 rounded-md",children:u.jsx("p",{className:"text-sm text-red-700",children:a})}),l&&u.jsx("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:u.jsx("p",{className:"text-sm text-green-700",children:l})}),u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Current Phase"}),u.jsxs("div",{className:"flex flex-wrap gap-4",children:[u.jsx("button",{onClick:()=>A("submission"),className:`px-4 py-2 rounded-md ${(n==null?void 0:n.currentPhase)==="submission"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Submission Phase"}),u.jsx("button",{onClick:()=>A("voting"),className:`px-4 py-2 rounded-md ${(n==null?void 0:n.currentPhase)==="voting"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Voting Phase"}),u.jsx("button",{onClick:()=>A("completed"),className:`px-4 py-2 rounded-md ${(n==null?void 0:n.currentPhase)==="completed"?"bg-primary-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]}),u.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:[(n==null?void 0:n.currentPhase)==="submission"&&"Users can submit designs during this phase.",(n==null?void 0:n.currentPhase)==="voting"&&"Submissions are closed. Users can vote on designs during this phase.",(n==null?void 0:n.currentPhase)==="completed"&&"The tournament is over. No new submissions or votes are accepted."]})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Phase Timers"}),u.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[u.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-md font-medium text-gray-700",children:"Submission Phase End"}),u.jsx("p",{className:"mt-2 text-lg text-gray-900",children:n!=null&&n.submissionPhaseEnd?ac(n.submissionPhaseEnd,"PPP p"):"Not set"}),u.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>x("submission",1),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"1 Day"}),u.jsx("button",{onClick:()=>x("submission",3),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"3 Days"}),u.jsx("button",{onClick:()=>x("submission",7),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"1 Week"}),u.jsx("button",{onClick:()=>x("submission",14),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"2 Weeks"})]})]}),u.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-md font-medium text-gray-700",children:"Voting Phase End"}),u.jsx("p",{className:"mt-2 text-lg text-gray-900",children:n!=null&&n.votingPhaseEnd?ac(n.votingPhaseEnd,"PPP p"):"Not set"}),u.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>x("voting",1),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"1 Day"}),u.jsx("button",{onClick:()=>x("voting",3),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"3 Days"}),u.jsx("button",{onClick:()=>x("voting",7),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"1 Week"}),u.jsx("button",{onClick:()=>x("voting",14),className:"px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",children:"2 Weeks"})]})]})]})]})]})]}),u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-6",children:"Tournament Statistics"}),s?u.jsx("div",{className:"flex justify-center py-4",children:u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-md font-medium text-blue-700",children:"Submissions"}),u.jsx("p",{className:"mt-2 text-2xl font-bold text-blue-800",children:m.totalEntries}),u.jsxs("div",{className:"mt-2 flex justify-between",children:[u.jsxs("span",{className:"text-sm text-blue-600",children:[m.approvedEntries," Approved"]}),u.jsxs("span",{className:"text-sm text-blue-600",children:[m.pendingEntries," Pending"]})]})]}),u.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-md font-medium text-green-700",children:"Votes"}),u.jsx("p",{className:"mt-2 text-2xl font-bold text-green-800",children:m.totalVotes}),u.jsx("div",{className:"mt-2",children:u.jsxs("span",{className:"text-sm text-green-600",children:[m.totalVotes>0&&m.approvedEntries>0?(m.totalVotes/m.approvedEntries).toFixed(1):0," Votes per Entry"]})})]}),u.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[u.jsx("h3",{className:"text-md font-medium text-purple-700",children:"Users"}),u.jsx("p",{className:"mt-2 text-2xl font-bold text-purple-800",children:m.totalUsers}),u.jsx("div",{className:"mt-2",children:u.jsxs("span",{className:"text-sm text-purple-600",children:[(m.totalEntries/Math.max(1,m.totalUsers)).toFixed(2)," Submissions per User"]})})]})]})]})]})}function gS(){const[n,e]=M.useState([]),[t,r]=M.useState(!0),[s,i]=M.useState(null),[a,c]=M.useState(null),[l,d]=M.useState("all");M.useEffect(()=>{m()},[l]);const m=async()=>{try{r(!0),i(null);let g;l==="all"?g=Xe($e(ae,"entries"),Bn("createdAt","desc")):g=Xe($e(ae,"entries"),Mt("status","==",l),Bn("createdAt","desc"));const A=(await et(g)).docs.map(x=>({id:x.id,...x.data(),status:x.data().status||"pending"}));e(A)}catch(g){console.error("Error fetching entries:",g),i(g.message||"Failed to load entries")}finally{r(!1)}},y=async(g,w)=>{try{c(null),i(null);const A=dt(ae,"entries",g);await np(A,{status:w}),e(n.map(x=>x.id===g?{...x,status:w}:x)),c(`Entry status updated to ${w}`)}catch(A){console.error("Error updating entry status:",A),i(A.message||"Failed to update entry status")}};return u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Manage Entries"}),u.jsx("div",{className:"mt-3 sm:mt-0",children:u.jsxs("div",{className:"flex rounded-md shadow-sm",children:[u.jsx("button",{onClick:()=>d("all"),className:`px-4 py-2 text-sm font-medium rounded-l-md ${l==="all"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"All"}),u.jsx("button",{onClick:()=>d("pending"),className:`px-4 py-2 text-sm font-medium ${l==="pending"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Pending"}),u.jsx("button",{onClick:()=>d("approved"),className:`px-4 py-2 text-sm font-medium ${l==="approved"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300"}`,children:"Approved"}),u.jsx("button",{onClick:()=>d("rejected"),className:`px-4 py-2 text-sm font-medium rounded-r-md ${l==="rejected"?"bg-primary-600 text-white":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"}`,children:"Rejected"})]})})]}),s&&u.jsx("div",{className:"mb-4 p-4 bg-red-50 rounded-md",children:u.jsx("p",{className:"text-sm text-red-700",children:s})}),a&&u.jsx("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:u.jsx("p",{className:"text-sm text-green-700",children:a})}),t?u.jsx("div",{className:"flex justify-center py-12",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):n.length===0?u.jsx("div",{className:"text-center py-12",children:u.jsx("p",{className:"text-gray-500",children:"No entries found."})}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[u.jsx("thead",{className:"bg-gray-50",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Image"}),u.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),u.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Submitted By"}),u.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),u.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),u.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(g=>u.jsxs("tr",{children:[u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("div",{className:"h-20 w-20 bg-gray-100 rounded overflow-hidden",children:u.jsx("img",{src:g.imageUrl,alt:g.title,className:"h-full w-full object-cover"})})}),u.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[u.jsx("div",{className:"text-sm font-medium text-gray-900",children:g.title}),u.jsx("div",{className:"text-sm text-gray-500 max-w-xs truncate",children:g.description})]}),u.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[u.jsx("div",{className:"text-sm text-gray-900",children:g.userDisplayName||"Unknown User"}),u.jsx("div",{className:"text-sm text-gray-500",children:g.userId})]}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:u.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${g.status==="approved"?"bg-green-100 text-green-800":g.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:g.status})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:u.jsxs("div",{className:"flex space-x-2",children:[u.jsx("button",{onClick:()=>y(g.id,"approved"),disabled:g.status==="approved",className:`${g.status==="approved"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-green-50 text-green-700 hover:bg-green-100"} px-3 py-1 rounded-md text-sm`,children:"Approve"}),u.jsx("button",{onClick:()=>y(g.id,"rejected"),disabled:g.status==="rejected",className:`${g.status==="rejected"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-red-50 text-red-700 hover:bg-red-100"} px-3 py-1 rounded-md text-sm`,children:"Reject"}),u.jsx("button",{onClick:()=>y(g.id,"pending"),disabled:g.status==="pending",className:`${g.status==="pending"?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-yellow-50 text-yellow-700 hover:bg-yellow-100"} px-3 py-1 rounded-md text-sm`,children:"Pending"})]})})]},g.id))})]})})]})})}function yS(){const{user:n}=zt(),[e,t]=M.useState([]),[r,s]=M.useState(!0),[i,a]=M.useState(null);return M.useEffect(()=>{(async()=>{try{let l=await zn();l||(await pl(),l=await zn()),a(l);const d=Xe($e(ae,"entries"),Bn("createdAt","desc"),rl(6)),y=(await et(d)).docs.map(g=>({id:g.id,...g.data()}));t(y)}catch(l){console.error("Error fetching data:",l)}finally{s(!1)}})()},[]),r?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(n==null?void 0:n.isAdmin)&&u.jsxs("div",{className:"mb-8 bg-white shadow rounded-lg p-4",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-2",children:"Admin Quick Links"}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx(oe,{to:"/admin",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Admin Dashboard"}),u.jsx(oe,{to:"/admin/entries",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Manage Entries"}),u.jsx(oe,{to:"/admin/settings",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700",children:"Tournament Settings"})]})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("h1",{className:"text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl",children:"Welcome to the King Ideation Tournament"}),u.jsx("p",{className:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",children:n?u.jsxs(u.Fragment,{children:[(i==null?void 0:i.currentPhase)==="submission"&&u.jsxs("span",{className:"block mt-2 text-primary-600",children:["Submission phase ends in ",rn(i.submissionPhaseEnd,{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)==="voting"&&u.jsxs("span",{className:"block mt-2 text-primary-600",children:["Voting phase ends in ",rn(i.votingPhaseEnd,{addSuffix:!0})]})]}):u.jsxs(u.Fragment,{children:["Start by creating an account and then you can submit your designs.",(i==null?void 0:i.currentPhase)==="submission"&&u.jsxs("span",{className:"block mt-2 text-primary-600",children:["Submission phase ends in ",rn(i.submissionPhaseEnd,{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)==="voting"&&u.jsxs("span",{className:"block mt-2 text-primary-600",children:["Voting phase ends in ",rn(i.votingPhaseEnd,{addSuffix:!0})]})]})}),u.jsx("div",{className:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",children:n?(i==null?void 0:i.currentPhase)==="submission"?u.jsx("div",{className:"rounded-md shadow",children:u.jsx(oe,{to:"/submit",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10",children:"Submit Your Design"})}):(i==null?void 0:i.currentPhase)==="voting"?u.jsx("div",{className:"rounded-md shadow",children:u.jsx(oe,{to:"/vote",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10",children:"Vote Now"})}):null:u.jsx("div",{className:"rounded-md shadow",children:u.jsx(oe,{to:"/register",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10",children:"Get Started"})})})]}),e.length>0&&u.jsxs("div",{className:"mt-16",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Recent Entries"}),u.jsx("div",{className:"mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:e.map(c=>u.jsxs("div",{className:"bg-white overflow-hidden shadow rounded-lg",children:[u.jsx("img",{src:c.imageUrl,alt:c.title,className:"w-full h-48 object-cover"}),u.jsxs("div",{className:"px-4 py-5 sm:p-6",children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900",children:c.title}),c.description&&u.jsx("p",{className:"mt-2 text-sm text-gray-500",children:c.description}),u.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[u.jsxs("div",{className:"text-sm text-gray-500",children:[c.voteCount," votes"]}),u.jsxs("div",{className:"text-sm text-gray-500",children:["Submitted ",rn(c.createdAt.toDate(),{addSuffix:!0})]})]})]})]},c.id))})]})]})}function _S(){var A,x,T,j;const{user:n}=zt(),[e,t]=M.useState([]),[r,s]=M.useState(0),[i,a]=M.useState(null),[c,l]=M.useState(!0),[d,m]=M.useState(null);M.useEffect(()=>{n&&(g(),w(),y())},[n]);const y=async()=>{try{const S=await zn();a(S)}catch(S){console.error("Error fetching tournament state:",S)}},g=async()=>{try{const S=Xe($e(ae,"entries"),Mt("userId","==",n.id),Bn("createdAt","desc")),F=(await et(S)).docs.map($=>({id:$.id,...$.data()}));t(F)}catch(S){console.error("Error fetching user entries:",S),m(S.message||"Failed to load your submissions.")}finally{l(!1)}},w=async()=>{try{const S=Xe($e(ae,"votes"),Mt("userId","==",n.id)),F=(await et(S)).size;s(Math.max(0,10-F))}catch(S){console.error("Error fetching votes:",S)}};return c?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),d&&u.jsx("div",{className:"mt-4 rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:d})}),u.jsxs("div",{className:"mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2",children:[u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Tournament Status"}),i?u.jsxs("div",{children:[u.jsx("div",{className:"mb-4",children:u.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:i.currentPhase==="submission"?"Submission Phase":i.currentPhase==="voting"?"Voting Phase":"Completed"})}),i.currentPhase==="submission"&&u.jsxs("div",{className:"text-sm text-gray-500",children:[u.jsx("p",{className:"mb-1",children:"Submission deadline:"}),u.jsx("p",{className:"font-medium text-gray-900",children:rn(i.submissionPhaseEnd,{addSuffix:!0})})]}),i.currentPhase==="voting"&&u.jsxs("div",{className:"text-sm text-gray-500",children:[u.jsx("p",{className:"mb-1",children:"Voting ends:"}),u.jsx("p",{className:"font-medium text-gray-900",children:rn(i.votingPhaseEnd,{addSuffix:!0})}),u.jsx("p",{className:"mt-4 mb-1",children:"Your remaining votes:"}),u.jsxs("p",{className:"font-medium text-gray-900",children:[r," of 10"]})]}),u.jsxs("div",{className:"mt-6",children:[i.currentPhase==="submission"&&u.jsx(oe,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit a Design"}),i.currentPhase==="voting"&&u.jsx(oe,{to:"/vote",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Vote on Designs"}),i.currentPhase==="completed"&&u.jsx(oe,{to:"/winners",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"View Winners"})]})]}):u.jsx("p",{className:"text-gray-500",children:"Loading tournament information..."})]}),u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Profile"}),u.jsxs("div",{className:"flex items-center space-x-4 mb-6",children:[n!=null&&n.photoURL?u.jsx("img",{src:n.photoURL,alt:n.displayName||"User avatar",className:"h-16 w-16 rounded-full"}):u.jsx("div",{className:"h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center",children:u.jsx("span",{className:"text-2xl font-medium text-primary-600",children:((x=(A=n==null?void 0:n.displayName)==null?void 0:A[0])==null?void 0:x.toUpperCase())||((j=(T=n==null?void 0:n.email)==null?void 0:T[0])==null?void 0:j.toUpperCase())||"?"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-md font-medium text-gray-900",children:(n==null?void 0:n.displayName)||"User"}),u.jsx("p",{className:"text-sm text-gray-500",children:n==null?void 0:n.email})]})]}),u.jsx(oe,{to:"/profile",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"View Full Profile"})]})]}),u.jsxs("div",{className:"mt-8",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Your Submissions"}),e.length>0?u.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:e.map(S=>u.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[u.jsxs("div",{className:"relative",children:[u.jsx("img",{src:S.imageUrl,alt:S.title,className:"w-full h-48 object-contain bg-gray-50"}),u.jsx("div",{className:`
                    absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
                    ${S.status==="approved"?"bg-green-100 text-green-800":S.status==="rejected"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}
                  `,children:S.status==="approved"?"Approved":S.status==="rejected"?"Rejected":"Pending"})]}),u.jsxs("div",{className:"p-4",children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900",children:S.title}),S.description&&u.jsx("p",{className:"mt-1 text-sm text-gray-500",children:S.description}),u.jsxs("div",{className:"mt-4 flex items-center justify-between text-sm",children:[u.jsxs("div",{className:"text-gray-500",children:["Submitted ",rn(S.createdAt.toDate(),{addSuffix:!0})]}),(i==null?void 0:i.currentPhase)!=="submission"&&S.status==="approved"&&u.jsxs("div",{className:"flex items-center",children:[u.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),u.jsxs("span",{className:"ml-1 text-gray-600",children:[S.voteCount," votes"]})]})]})]})]},S.id))}):u.jsxs("div",{className:"bg-white shadow rounded-lg p-10 text-center",children:[u.jsx("p",{className:"text-gray-500",children:"You haven't submitted any designs yet."}),(i==null?void 0:i.currentPhase)==="submission"&&u.jsx("div",{className:"mt-4",children:u.jsx(oe,{to:"/submit",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700",children:"Submit Your First Design"})})]})]})]})}function vS(){const{user:n,loading:e}=zt(),t=js(),[r,s]=M.useState(""),[i,a]=M.useState(""),[c,l]=M.useState(null),[d,m]=M.useState(null),[y,g]=M.useState(!1),[w,A]=M.useState(0),x=M.useRef(null);M.useEffect(()=>{!e&&!n&&(console.log("User not authenticated, redirecting to login"),t("/login"))},[n,e,t]);const T=async S=>{if(S.preventDefault(),!n){m("You must be logged in to submit a design"),t("/login");return}if(!r.trim()){m("Please enter a title for your design");return}if(!c){m("Please upload an image of your design");return}try{m(null),g(!0);const O=jx(Gp,`designs/${n.id}/${Date.now()}_${c.name}`),F=Dx(O,c);console.log("Starting file upload to path:",`designs/${n.id}/${Date.now()}_${c.name}`),F.on("state_changed",$=>{const q=$.bytesTransferred/$.totalBytes*100;A(q),console.log(`Upload progress: ${q.toFixed(2)}%`)},$=>{console.error("Upload error:",$),console.error("Error code:",$.code),console.error("Error message:",$.message);let q="Failed to upload image. ";switch($.code){case"storage/unauthorized":q+="You do not have permission to upload to this location.";break;case"storage/canceled":q+="Upload was canceled.";break;case"storage/unknown":default:q+="An unknown error occurred. Please try again.";break}m(q),g(!1)},async()=>{try{console.log("Upload completed, getting download URL");const $=await Ox(F.snapshot.ref);console.log("Download URL received:",$),console.log("Creating Firestore entry");const q=$e(ae,"entries");await rp(q,{title:r,description:i.trim()||null,imageUrl:$,userId:n.id,userDisplayName:n.displayName||n.email,userPhotoURL:n.photoURL||null,createdAt:ie.now(),updatedAt:ie.now(),voteCount:0,averageRating:0,status:"pending"}),console.log("Design submitted successfully"),It("design_submitted",{title:r}),t("/dashboard")}catch($){console.error("Error in final upload stage:",$),m($.message||"Failed to complete submission. Please try again."),g(!1)}})}catch(O){console.error("Submit error:",O),m(O.message||"Failed to submit design. Please try again."),g(!1)}},j=S=>{if(S.target.files&&S.target.files[0]){const O=S.target.files[0];if(!O.type.startsWith("image/")){m("Please upload an image file (JPEG, PNG, etc.)");return}if(O.size>5*1024*1024){m("Image size must be less than 5MB");return}l(O),m(null)}};return u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:u.jsxs("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[u.jsx("div",{className:"md:col-span-1",children:u.jsxs("div",{className:"px-4 sm:px-0",children:[u.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Submit Your Design"}),u.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Submit your design for the current competition. Please make sure your image clearly shows your concept."})]})}),u.jsx("div",{className:"mt-5 md:mt-0 md:col-span-2",children:u.jsx("form",{onSubmit:T,children:u.jsxs("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[u.jsxs("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[d&&u.jsx("div",{className:"rounded-md bg-red-50 p-4",children:u.jsx("div",{className:"text-sm text-red-700",children:d})}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),u.jsx("div",{className:"mt-1",children:u.jsx("input",{type:"text",id:"title",className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:r,onChange:S=>s(S.target.value),required:!0})})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description (optional)"}),u.jsx("div",{className:"mt-1",children:u.jsx("textarea",{id:"description",rows:3,className:"shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",value:i,onChange:S=>a(S.target.value)})})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Design Image"}),u.jsxs("div",{className:"mt-1 flex items-center",children:[u.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:()=>{var S;return(S=x.current)==null?void 0:S.click()},children:"Choose file"}),u.jsx("input",{type:"file",ref:x,className:"hidden",accept:"image/*",onChange:j}),u.jsx("span",{className:"ml-2 text-sm text-gray-500",children:c?c.name:"No file chosen"})]}),c&&u.jsx("div",{className:"mt-2",children:u.jsx("img",{src:URL.createObjectURL(c),alt:"Preview",className:"h-40 object-contain"})})]}),y&&u.jsx("div",{children:u.jsxs("div",{className:"relative pt-1",children:[u.jsxs("div",{className:"flex mb-2 items-center justify-between",children:[u.jsx("div",{children:u.jsx("span",{className:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200",children:w<100?"Uploading":"Processing"})}),u.jsx("div",{className:"text-right",children:u.jsxs("span",{className:"text-xs font-semibold inline-block text-primary-600",children:[Math.round(w),"%"]})})]}),u.jsx("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200",children:u.jsx("div",{style:{width:`${w}%`},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"})})]})})]}),u.jsx("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:u.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",disabled:y,children:y?"Submitting...":"Submit Design"})})]})})})]})})}function wS(){const{user:n}=zt(),[e,t]=M.useState([]),[r,s]=M.useState(null),[i,a]=M.useState(!0),[c,l]=M.useState(!1),[d,m]=M.useState(null),[y,g]=M.useState(10),[w,A]=M.useState([]);M.useEffect(()=>{n?(T(),x()):(a(!1),m("Please log in to vote on designs."))},[n]);const x=async()=>{if(n)try{const S=Xe($e(ae,"votes"),Mt("userId","==",n.id)),F=(await et(S)).docs.map($=>$.data().entryId);A(F),g(Math.max(0,10-F.length))}catch(S){console.error("Error fetching voted entries:",S)}},T=async()=>{if(n)try{a(!0),m(null);const S=Xe($e(ae,"entries"),Mt("userId","!=",n.id),Mt("status","==","approved"),Bn("userId"),rl(20));let F=(await et(S)).docs.map(q=>({id:q.id,...q.data()}));if(F=F.filter(q=>!w.includes(q.id)),F.length===0){s(null),m("No more entries to vote on. Check back later for new submissions."),a(!1);return}const $=Math.floor(Math.random()*F.length);s(F[$])}catch(S){console.error("Error fetching random entry:",S),m(S.message||"Failed to load an entry. Please try again.")}finally{a(!1)}},j=async S=>{if(!(!r||c||y<=0||!n))try{l(!0),m(null),await rp($e(ae,"votes"),{entryId:r.id,userId:n.id,rating:S,createdAt:ie.now()}),It("vote_submitted",{rating:S}),A([...w,r.id]),g(y-1),T()}catch(O){console.error("Error submitting vote:",O),m(O.message||"Failed to submit your vote. Please try again.")}finally{l(!1)}};return i?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Vote on Designs"}),u.jsx("p",{className:"mt-2 text-lg text-gray-600",children:"Rate submissions to help determine the winners."}),u.jsx("div",{className:"mt-2 inline-block bg-primary-100 rounded-full px-3 py-1",children:u.jsxs("span",{className:"text-sm font-medium text-primary-800",children:[y," votes remaining"]})})]}),d&&u.jsx("div",{className:"rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8",children:u.jsx("div",{className:"text-sm text-red-700",children:d})}),!d&&r&&u.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden max-w-3xl mx-auto",children:[u.jsx("div",{className:"relative",children:u.jsx("img",{src:r.imageUrl,alt:r.title,className:"w-full h-[400px] object-contain bg-gray-100"})}),u.jsxs("div",{className:"p-6",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900",children:r.title}),r.description&&u.jsx("p",{className:"mt-2 text-gray-600",children:r.description}),u.jsxs("div",{className:"mt-6",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-4",children:"Rate this design:"}),u.jsx("div",{className:"flex justify-center gap-2",children:[1,2,3,4,5].map(S=>u.jsx("button",{onClick:()=>j(S),disabled:c||y<=0,className:`
                        w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                        ${c?"opacity-50 cursor-not-allowed":"hover:bg-primary-100"}
                        ${S===1?"bg-red-100 text-red-600":""}
                        ${S===2?"bg-orange-100 text-orange-600":""}
                        ${S===3?"bg-yellow-100 text-yellow-600":""}
                        ${S===4?"bg-lime-100 text-lime-600":""}
                        ${S===5?"bg-green-100 text-green-600":""}
                      `,children:S},S))}),u.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"1 = Poor, 5 = Excellent"})]}),u.jsx("div",{className:"mt-6 flex justify-center",children:u.jsx("button",{onClick:()=>T(),disabled:c,className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Skip this design"})})]})]})]}),y<=0&&u.jsx("div",{className:"mt-8 text-center",children:u.jsx("div",{className:"rounded-md bg-green-50 p-4 max-w-3xl mx-auto",children:u.jsx("div",{className:"text-sm text-green-700",children:"Thank you for voting! You've used all your votes for now."})})})]})}function bS(){var m;const[n,e]=M.useState([]),[t,r]=M.useState(!0),[s,i]=M.useState(null),[a,c]=M.useState("");M.useEffect(()=>{d(),l()},[]);const l=async()=>{try{const y=await zn();y&&c(y.currentPhase)}catch(y){console.error("Error fetching tournament state:",y)}},d=async()=>{try{r(!0),i(null);const y=Xe($e(ae,"entries"),Mt("status","==","approved"),Bn("averageRating","desc"),Bn("voteCount","desc"),rl(10)),w=(await et(y)).docs.map(A=>({id:A.id,...A.data()}));e(w)}catch(y){console.error("Error fetching winners:",y),i(y.message||"Failed to load winners. Please try again later.")}finally{r(!1)}};return t?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Competition Winners"}),a!=="completed"&&u.jsx("div",{className:"mt-4 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto",children:u.jsx("div",{className:"text-sm text-yellow-700",children:a==="submission"?"The competition is still in the submission phase. Winners will be announced after voting is complete.":a==="voting"?"Voting is currently in progress. Final winners will be announced after the voting phase ends.":"The competition results are not yet finalized."})})]}),s&&u.jsx("div",{className:"rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8",children:u.jsx("div",{className:"text-sm text-red-700",children:s})}),n.length>0?u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"bg-gradient-to-r from-amber-100 to-yellow-100 shadow-xl rounded-lg overflow-hidden",children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold",children:"1st Place"}),u.jsx("img",{src:n[0].imageUrl,alt:n[0].title,className:"w-full h-96 object-contain bg-white"})]}),u.jsxs("div",{className:"p-6 text-center",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:n[0].title}),n[0].description&&u.jsx("p",{className:"mt-2 text-gray-600",children:n[0].description}),u.jsx("div",{className:"mt-4 flex items-center justify-center",children:u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"text-sm font-medium text-gray-500",children:"By"}),n[0].userPhotoURL?u.jsx("img",{src:n[0].userPhotoURL,alt:n[0].userDisplayName,className:"h-6 w-6 rounded-full"}):u.jsx("div",{className:"h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center",children:u.jsx("span",{className:"text-xs text-gray-600",children:((m=n[0].userDisplayName)==null?void 0:m[0])||"?"})}),u.jsx("span",{className:"text-sm font-medium text-gray-900",children:n[0].userDisplayName})]})}),u.jsx("div",{className:"mt-4 flex items-center justify-center space-x-4",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),u.jsxs("span",{className:"ml-1 text-sm font-medium text-gray-900",children:[n[0].averageRating.toFixed(1)," (",n[0].voteCount," votes)"]})]})})]})]}),u.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",children:n.slice(1).map((y,g)=>u.jsxs("div",{className:"bg-white shadow rounded-lg overflow-hidden",children:[u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold",children:[g+2,ES(g+2)," Place"]}),u.jsx("img",{src:y.imageUrl,alt:y.title,className:"w-full h-48 object-contain bg-gray-50"})]}),u.jsxs("div",{className:"p-4",children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900",children:y.title}),u.jsxs("div",{className:"mt-2 flex items-center text-sm",children:[u.jsx("span",{className:"text-gray-500 mr-1",children:"By"}),u.jsx("span",{className:"font-medium text-gray-900",children:y.userDisplayName})]}),u.jsxs("div",{className:"mt-2 flex items-center",children:[u.jsx("svg",{className:"h-4 w-4 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),u.jsxs("span",{className:"ml-1 text-sm text-gray-600",children:[y.averageRating.toFixed(1)," (",y.voteCount," votes)"]})]})]})]},y.id))})]}):u.jsx("div",{className:"text-center py-12",children:u.jsx("p",{className:"text-gray-500",children:"No entries found. Winners will be displayed after the voting phase is complete."})})]})}function ES(n){const e=n%10,t=n%100;return e===1&&t!==11?"st":e===2&&t!==12?"nd":e===3&&t!==13?"rd":"th"}const ka={async testLogin(n,e){console.log(`Attempting to login with email: ${n}`);try{const t=await eg(n,e);return console.log("Login result:",t),t}catch(t){throw console.error("Login error:",t),t}},async testRegister(n,e,t){console.log(`Attempting to register with email: ${n}${t?`, name: ${t}`:""}`);try{const r=await Zp(n,e,t);return console.log("Registration result:",r),r}catch(r){throw console.error("Registration error:",r),r}},async testGoogleLogin(){console.log("Attempting to login with Google");try{const n=await tg();return console.log("Google login result:",n),n}catch(n){throw console.error("Google login error:",n),n}}};function TS(){const{user:n}=zt(),[e,t]=M.useState(""),[r,s]=M.useState(""),[i,a]=M.useState(""),[c,l]=M.useState(!1),[d,m]=M.useState(""),[y,g]=M.useState(""),[w,A]=M.useState(""),[x,T]=M.useState(""),[j,S]=M.useState(!1),[O,F]=M.useState(""),[$,q]=M.useState(!1),I=async()=>{if(!e||!r){a("Please enter both email and password");return}l(!0),a("");try{const b=await ka.testLogin(e,r);a(`Login successful! User: ${JSON.stringify(b,null,2)}`)}catch(b){a(`Login failed: ${b.message}`)}finally{l(!1)}},_=async()=>{if(!d||!y){T("Please enter email and password");return}S(!0),T("");try{const b=await ka.testRegister(d,y,w||void 0);T(`Registration successful! User: ${JSON.stringify(b,null,2)}`)}catch(b){T(`Registration failed: ${b.message}`)}finally{S(!1)}},v=async()=>{q(!0),F("");try{await ka.testGoogleLogin(),F("Google sign-in initiated. You should be redirected to Google for authentication.")}catch(b){F(`Google login failed: ${b.message}`)}finally{q(!1)}};return u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:u.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Authentication Debug"}),n?u.jsxs("div",{className:"mb-4 p-4 bg-green-50 rounded-md",children:[u.jsx("h2",{className:"text-lg font-medium text-green-700",children:"Logged In"}),u.jsx("pre",{className:"mt-2 text-sm text-gray-800 overflow-auto p-2 bg-gray-100 rounded",children:JSON.stringify(n,null,2)})]}):u.jsx("div",{className:"mb-4 p-4 bg-yellow-50 rounded-md",children:u.jsx("p",{className:"text-sm text-yellow-700",children:"Not logged in"})}),u.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",children:[u.jsxs("div",{className:"border rounded-lg p-4",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Login"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"debug-login-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),u.jsx("input",{id:"debug-login-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:e,onChange:b=>t(b.target.value)})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"debug-login-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),u.jsx("input",{id:"debug-login-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:r,onChange:b=>s(b.target.value)})]}),u.jsx("div",{children:u.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:I,disabled:c,children:c?"Testing...":"Test Login"})}),i&&u.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:u.jsx("pre",{children:i})})]})]}),u.jsxs("div",{className:"border rounded-lg p-4",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Registration"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{htmlFor:"debug-register-email",className:"block text-sm font-medium text-gray-700",children:"Email"}),u.jsx("input",{id:"debug-register-email",type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:d,onChange:b=>m(b.target.value)})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"debug-register-password",className:"block text-sm font-medium text-gray-700",children:"Password"}),u.jsx("input",{id:"debug-register-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:y,onChange:b=>g(b.target.value)})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"debug-register-name",className:"block text-sm font-medium text-gray-700",children:"Display Name (optional)"}),u.jsx("input",{id:"debug-register-name",type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm",value:w,onChange:b=>A(b.target.value)})]}),u.jsx("div",{children:u.jsx("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:_,disabled:j,children:j?"Testing...":"Test Registration"})}),x&&u.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:u.jsx("pre",{children:x})})]})]}),u.jsxs("div",{className:"border rounded-lg p-4",children:[u.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-4",children:"Test Google Login"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{children:u.jsx("button",{type:"button",className:"w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:v,disabled:$,children:$?u.jsxs("span",{className:"flex items-center",children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):u.jsxs("span",{className:"flex items-center",children:[u.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:[u.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),u.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),u.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),u.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"}),u.jsx("path",{fill:"none",d:"M1 1h22v22H1z"})]}),"Sign in with Google"]})})}),O&&u.jsx("div",{className:"mt-3 p-3 bg-gray-50 rounded overflow-auto max-h-40 text-sm",children:u.jsx("pre",{children:O})})]})]})]})]})})}const xS=new xy,Ri=({children:n})=>{const{user:e,loading:t}=zt();return M.useEffect(()=>{!t&&!e&&console.log("User not authenticated in PrivateRoute, redirecting to login")},[e,t]),t?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?u.jsx(u.Fragment,{children:n}):u.jsx(bd,{to:"/login"})},Da=({children:n})=>{const{user:e,loading:t}=zt();return t?u.jsx("div",{className:"flex justify-center items-center min-h-screen",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"})}):e?u.jsx(u.Fragment,{children:n}):u.jsx(bd,{to:"/"})};function IS(){return M.useEffect(()=>{UA()},[]),u.jsx(mS,{children:u.jsx(Ay,{client:xS,children:u.jsx(Kg,{basename:"/projectCP",children:u.jsx(Qg,{children:u.jsxs(Le,{path:"/",element:u.jsx(KA,{}),children:[u.jsx(Le,{index:!0,element:u.jsx(yS,{})}),u.jsx(Le,{path:"login",element:u.jsx(QA,{})}),u.jsx(Le,{path:"register",element:u.jsx(YA,{})}),u.jsx(Le,{path:"reset-password",element:u.jsx(XA,{})}),u.jsx(Le,{path:"winners",element:u.jsx(bS,{})}),u.jsx(Le,{path:"debug-auth",element:u.jsx(TS,{})}),u.jsx(Le,{path:"submit",element:u.jsx(Ri,{children:u.jsx(vS,{})})}),u.jsx(Le,{path:"vote",element:u.jsx(Ri,{children:u.jsx(wS,{})})}),u.jsx(Le,{path:"profile",element:u.jsx(Ri,{children:u.jsx(JA,{})})}),u.jsx(Le,{path:"dashboard",element:u.jsx(Ri,{children:u.jsx(_S,{})})}),u.jsx(Le,{path:"admin",element:u.jsx(Da,{children:u.jsx(fS,{})})}),u.jsx(Le,{path:"admin/entries",element:u.jsx(Da,{children:u.jsx(gS,{})})}),u.jsx(Le,{path:"admin/settings",element:u.jsx(Da,{children:u.jsx(pS,{})})}),u.jsx(Le,{path:"*",element:u.jsx("div",{children:"404 Not Found"})})]})})})})})}xd(document.getElementById("root")).render(u.jsx(M.StrictMode,{children:u.jsx(IS,{})}));
//# sourceMappingURL=index-DhT04Det.js.map
