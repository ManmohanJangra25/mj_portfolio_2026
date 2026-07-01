(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const x of d)if(x.type==="childList")for(const h of x.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function m(d){const x={};return d.integrity&&(x.integrity=d.integrity),d.referrerPolicy&&(x.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?x.credentials="include":d.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function c(d){if(d.ep)return;d.ep=!0;const x=m(d);fetch(d.href,x)}})();function m0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Rc={exports:{}},za={};var ex;function x0(){if(ex)return za;ex=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function m(c,d,x){var h=null;if(x!==void 0&&(h=""+x),d.key!==void 0&&(h=""+d.key),"key"in d){x={};for(var U in d)U!=="key"&&(x[U]=d[U])}else x=d;return d=x.ref,{$$typeof:o,type:c,key:h,ref:d!==void 0?d:null,props:x}}return za.Fragment=u,za.jsx=m,za.jsxs=m,za}var tx;function f0(){return tx||(tx=1,Rc.exports=x0()),Rc.exports}var A=f0(),zc={exports:{}},ln={};var ax;function p0(){if(ax)return ln;ax=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),h=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function W(b){return b===null||typeof b!="object"?null:(b=S&&b[S]||b["@@iterator"],typeof b=="function"?b:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,z={};function X(b,C,M){this.props=b,this.context=C,this.refs=z,this.updater=M||V}X.prototype.isReactComponent={},X.prototype.setState=function(b,C){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,C,"setState")},X.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function tn(){}tn.prototype=X.prototype;function K(b,C,M){this.props=b,this.context=C,this.refs=z,this.updater=M||V}var Bn=K.prototype=new tn;Bn.constructor=K,N(Bn,X.prototype),Bn.isPureReactComponent=!0;var gn=Array.isArray;function un(){}var P={H:null,A:null,T:null,S:null},an=Object.prototype.hasOwnProperty;function _n(b,C,M){var H=M.ref;return{$$typeof:o,type:b,key:C,ref:H!==void 0?H:null,props:M}}function Xn(b,C){return _n(b.type,C,b.props)}function Y(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function L(b){var C={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(M){return C[M]})}var cn=/\/+/g;function J(b,C){return typeof b=="object"&&b!==null&&b.key!=null?L(""+b.key):C.toString(36)}function dn(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(un,un):(b.status="pending",b.then(function(C){b.status==="pending"&&(b.status="fulfilled",b.value=C)},function(C){b.status==="pending"&&(b.status="rejected",b.reason=C)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function _(b,C,M,H,$){var rn=typeof b;(rn==="undefined"||rn==="boolean")&&(b=null);var en=!1;if(b===null)en=!0;else switch(rn){case"bigint":case"string":case"number":en=!0;break;case"object":switch(b.$$typeof){case o:case u:en=!0;break;case B:return en=b._init,_(en(b._payload),C,M,H,$)}}if(en)return $=$(b),en=H===""?"."+J(b,0):H,gn($)?(M="",en!=null&&(M=en.replace(cn,"$&/")+"/"),_($,C,M,"",function(lr){return lr})):$!=null&&(Y($)&&($=Xn($,M+($.key==null||b&&b.key===$.key?"":(""+$.key).replace(cn,"$&/")+"/")+en)),C.push($)),1;en=0;var bn=H===""?".":H+":";if(gn(b))for(var Qn=0;Qn<b.length;Qn++)H=b[Qn],rn=bn+J(H,Qn),en+=_(H,C,M,rn,$);else if(Qn=W(b),typeof Qn=="function")for(b=Qn.call(b),Qn=0;!(H=b.next()).done;)H=H.value,rn=bn+J(H,Qn++),en+=_(H,C,M,rn,$);else if(rn==="object"){if(typeof b.then=="function")return _(dn(b),C,M,H,$);throw C=String(b),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return en}function D(b,C,M){if(b==null)return b;var H=[],$=0;return _(b,H,"","",function(rn){return C.call(M,rn,$++)}),H}function I(b){if(b._status===-1){var C=b._result;C=C(),C.then(function(M){(b._status===0||b._status===-1)&&(b._status=1,b._result=M)},function(M){(b._status===0||b._status===-1)&&(b._status=2,b._result=M)}),b._status===-1&&(b._status=0,b._result=C)}if(b._status===1)return b._result.default;throw b._result}var fn=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Fn={map:D,forEach:function(b,C,M){D(b,function(){C.apply(this,arguments)},M)},count:function(b){var C=0;return D(b,function(){C++}),C},toArray:function(b){return D(b,function(C){return C})||[]},only:function(b){if(!Y(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return ln.Activity=y,ln.Children=Fn,ln.Component=X,ln.Fragment=m,ln.Profiler=d,ln.PureComponent=K,ln.StrictMode=c,ln.Suspense=Q,ln.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ln.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ln.cache=function(b){return function(){return b.apply(null,arguments)}},ln.cacheSignal=function(){return null},ln.cloneElement=function(b,C,M){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var H=N({},b.props),$=b.key;if(C!=null)for(rn in C.key!==void 0&&($=""+C.key),C)!an.call(C,rn)||rn==="key"||rn==="__self"||rn==="__source"||rn==="ref"&&C.ref===void 0||(H[rn]=C[rn]);var rn=arguments.length-2;if(rn===1)H.children=M;else if(1<rn){for(var en=Array(rn),bn=0;bn<rn;bn++)en[bn]=arguments[bn+2];H.children=en}return _n(b.type,$,H)},ln.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:x,_context:b},b},ln.createElement=function(b,C,M){var H,$={},rn=null;if(C!=null)for(H in C.key!==void 0&&(rn=""+C.key),C)an.call(C,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&($[H]=C[H]);var en=arguments.length-2;if(en===1)$.children=M;else if(1<en){for(var bn=Array(en),Qn=0;Qn<en;Qn++)bn[Qn]=arguments[Qn+2];$.children=bn}if(b&&b.defaultProps)for(H in en=b.defaultProps,en)$[H]===void 0&&($[H]=en[H]);return _n(b,rn,$)},ln.createRef=function(){return{current:null}},ln.forwardRef=function(b){return{$$typeof:U,render:b}},ln.isValidElement=Y,ln.lazy=function(b){return{$$typeof:B,_payload:{_status:-1,_result:b},_init:I}},ln.memo=function(b,C){return{$$typeof:f,type:b,compare:C===void 0?null:C}},ln.startTransition=function(b){var C=P.T,M={};P.T=M;try{var H=b(),$=P.S;$!==null&&$(M,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(un,fn)}catch(rn){fn(rn)}finally{C!==null&&M.types!==null&&(C.types=M.types),P.T=C}},ln.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ln.use=function(b){return P.H.use(b)},ln.useActionState=function(b,C,M){return P.H.useActionState(b,C,M)},ln.useCallback=function(b,C){return P.H.useCallback(b,C)},ln.useContext=function(b){return P.H.useContext(b)},ln.useDebugValue=function(){},ln.useDeferredValue=function(b,C){return P.H.useDeferredValue(b,C)},ln.useEffect=function(b,C){return P.H.useEffect(b,C)},ln.useEffectEvent=function(b){return P.H.useEffectEvent(b)},ln.useId=function(){return P.H.useId()},ln.useImperativeHandle=function(b,C,M){return P.H.useImperativeHandle(b,C,M)},ln.useInsertionEffect=function(b,C){return P.H.useInsertionEffect(b,C)},ln.useLayoutEffect=function(b,C){return P.H.useLayoutEffect(b,C)},ln.useMemo=function(b,C){return P.H.useMemo(b,C)},ln.useOptimistic=function(b,C){return P.H.useOptimistic(b,C)},ln.useReducer=function(b,C,M){return P.H.useReducer(b,C,M)},ln.useRef=function(b){return P.H.useRef(b)},ln.useState=function(b){return P.H.useState(b)},ln.useSyncExternalStore=function(b,C,M){return P.H.useSyncExternalStore(b,C,M)},ln.useTransition=function(){return P.H.useTransition()},ln.version="19.2.7",ln}var lx;function Gc(){return lx||(lx=1,zc.exports=p0()),zc.exports}var E=Gc(),Ac={exports:{}},Aa={},Wc={exports:{}},Mc={};var ix;function h0(){return ix||(ix=1,(function(o){function u(_,D){var I=_.length;_.push(D);n:for(;0<I;){var fn=I-1>>>1,Fn=_[fn];if(0<d(Fn,D))_[fn]=D,_[I]=Fn,I=fn;else break n}}function m(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var D=_[0],I=_.pop();if(I!==D){_[0]=I;n:for(var fn=0,Fn=_.length,b=Fn>>>1;fn<b;){var C=2*(fn+1)-1,M=_[C],H=C+1,$=_[H];if(0>d(M,I))H<Fn&&0>d($,M)?(_[fn]=$,_[H]=I,fn=H):(_[fn]=M,_[C]=I,fn=C);else if(H<Fn&&0>d($,I))_[fn]=$,_[H]=I,fn=H;else break n}}return D}function d(_,D){var I=_.sortIndex-D.sortIndex;return I!==0?I:_.id-D.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;o.unstable_now=function(){return x.now()}}else{var h=Date,U=h.now();o.unstable_now=function(){return h.now()-U}}var Q=[],f=[],B=1,y=null,S=3,W=!1,V=!1,N=!1,z=!1,X=typeof setTimeout=="function"?setTimeout:null,tn=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function Bn(_){for(var D=m(f);D!==null;){if(D.callback===null)c(f);else if(D.startTime<=_)c(f),D.sortIndex=D.expirationTime,u(Q,D);else break;D=m(f)}}function gn(_){if(N=!1,Bn(_),!V)if(m(Q)!==null)V=!0,un||(un=!0,L());else{var D=m(f);D!==null&&dn(gn,D.startTime-_)}}var un=!1,P=-1,an=5,_n=-1;function Xn(){return z?!0:!(o.unstable_now()-_n<an)}function Y(){if(z=!1,un){var _=o.unstable_now();_n=_;var D=!0;try{n:{V=!1,N&&(N=!1,tn(P),P=-1),W=!0;var I=S;try{r:{for(Bn(_),y=m(Q);y!==null&&!(y.expirationTime>_&&Xn());){var fn=y.callback;if(typeof fn=="function"){y.callback=null,S=y.priorityLevel;var Fn=fn(y.expirationTime<=_);if(_=o.unstable_now(),typeof Fn=="function"){y.callback=Fn,Bn(_),D=!0;break r}y===m(Q)&&c(Q),Bn(_)}else c(Q);y=m(Q)}if(y!==null)D=!0;else{var b=m(f);b!==null&&dn(gn,b.startTime-_),D=!1}}break n}finally{y=null,S=I,W=!1}D=void 0}}finally{D?L():un=!1}}}var L;if(typeof K=="function")L=function(){K(Y)};else if(typeof MessageChannel<"u"){var cn=new MessageChannel,J=cn.port2;cn.port1.onmessage=Y,L=function(){J.postMessage(null)}}else L=function(){X(Y,0)};function dn(_,D){P=X(function(){_(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):an=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(_){switch(S){case 1:case 2:case 3:var D=3;break;default:D=S}var I=S;S=D;try{return _()}finally{S=I}},o.unstable_requestPaint=function(){z=!0},o.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=S;S=_;try{return D()}finally{S=I}},o.unstable_scheduleCallback=function(_,D,I){var fn=o.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?fn+I:fn):I=fn,_){case 1:var Fn=-1;break;case 2:Fn=250;break;case 5:Fn=1073741823;break;case 4:Fn=1e4;break;default:Fn=5e3}return Fn=I+Fn,_={id:B++,callback:D,priorityLevel:_,startTime:I,expirationTime:Fn,sortIndex:-1},I>fn?(_.sortIndex=I,u(f,_),m(Q)===null&&_===m(f)&&(N?(tn(P),P=-1):N=!0,dn(gn,I-fn))):(_.sortIndex=Fn,u(Q,_),V||W||(V=!0,un||(un=!0,L()))),_},o.unstable_shouldYield=Xn,o.unstable_wrapCallback=function(_){var D=S;return function(){var I=S;S=D;try{return _.apply(this,arguments)}finally{S=I}}}})(Mc)),Mc}var ox;function v0(){return ox||(ox=1,Wc.exports=h0()),Wc.exports}var Dc={exports:{}},tr={};var cx;function b0(){if(cx)return tr;cx=1;var o=Gc();function u(Q){var f="https://react.dev/errors/"+Q;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)f+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+Q+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var c={d:{f:m,r:function(){throw Error(u(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},d=Symbol.for("react.portal");function x(Q,f,B){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:y==null?null:""+y,children:Q,containerInfo:f,implementation:B}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function U(Q,f){if(Q==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return tr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tr.createPortal=function(Q,f){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(u(299));return x(Q,f,null,B)},tr.flushSync=function(Q){var f=h.T,B=c.p;try{if(h.T=null,c.p=2,Q)return Q()}finally{h.T=f,c.p=B,c.d.f()}},tr.preconnect=function(Q,f){typeof Q=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,c.d.C(Q,f))},tr.prefetchDNS=function(Q){typeof Q=="string"&&c.d.D(Q)},tr.preinit=function(Q,f){if(typeof Q=="string"&&f&&typeof f.as=="string"){var B=f.as,y=U(B,f.crossOrigin),S=typeof f.integrity=="string"?f.integrity:void 0,W=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;B==="style"?c.d.S(Q,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:W}):B==="script"&&c.d.X(Q,{crossOrigin:y,integrity:S,fetchPriority:W,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},tr.preinitModule=function(Q,f){if(typeof Q=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var B=U(f.as,f.crossOrigin);c.d.M(Q,{crossOrigin:B,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&c.d.M(Q)},tr.preload=function(Q,f){if(typeof Q=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var B=f.as,y=U(B,f.crossOrigin);c.d.L(Q,B,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},tr.preloadModule=function(Q,f){if(typeof Q=="string")if(f){var B=U(f.as,f.crossOrigin);c.d.m(Q,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:B,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else c.d.m(Q)},tr.requestFormReset=function(Q){c.d.r(Q)},tr.unstable_batchedUpdates=function(Q,f){return Q(f)},tr.useFormState=function(Q,f,B){return h.H.useFormState(Q,f,B)},tr.useFormStatus=function(){return h.H.useHostTransitionStatus()},tr.version="19.2.7",tr}var sx;function Q0(){if(sx)return Dc.exports;sx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Dc.exports=b0(),Dc.exports}var ux;function y0(){if(ux)return Aa;ux=1;var o=v0(),u=Gc(),m=Q0();function c(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function x(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function h(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function U(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Q(n){if(x(n)!==n)throw Error(c(188))}function f(n){var r=n.alternate;if(!r){if(r=x(n),r===null)throw Error(c(188));return r!==n?null:n}for(var e=n,t=r;;){var a=e.return;if(a===null)break;var l=a.alternate;if(l===null){if(t=a.return,t!==null){e=t;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===e)return Q(a),n;if(l===t)return Q(a),r;l=l.sibling}throw Error(c(188))}if(e.return!==t.return)e=a,t=l;else{for(var i=!1,s=a.child;s;){if(s===e){i=!0,e=a,t=l;break}if(s===t){i=!0,t=a,e=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===e){i=!0,e=l,t=a;break}if(s===t){i=!0,t=l,e=a;break}s=s.sibling}if(!i)throw Error(c(189))}}if(e.alternate!==t)throw Error(c(190))}if(e.tag!==3)throw Error(c(188));return e.stateNode.current===e?n:r}function B(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=B(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),W=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),tn=Symbol.for("react.consumer"),K=Symbol.for("react.context"),Bn=Symbol.for("react.forward_ref"),gn=Symbol.for("react.suspense"),un=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),_n=Symbol.for("react.activity"),Xn=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var cn=Symbol.for("react.client.reference");function J(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===cn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case X:return"Profiler";case z:return"StrictMode";case gn:return"Suspense";case un:return"SuspenseList";case _n:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case V:return"Portal";case K:return n.displayName||"Context";case tn:return(n._context.displayName||"Context")+".Consumer";case Bn:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case P:return r=n.displayName||null,r!==null?r:J(n.type)||"Memo";case an:r=n._payload,n=n._init;try{return J(n(r))}catch{}}return null}var dn=Array.isArray,_=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},fn=[],Fn=-1;function b(n){return{current:n}}function C(n){0>Fn||(n.current=fn[Fn],fn[Fn]=null,Fn--)}function M(n,r){Fn++,fn[Fn]=n.current,n.current=r}var H=b(null),$=b(null),rn=b(null),en=b(null);function bn(n,r){switch(M(rn,r),M($,n),M(H,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?wm(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=wm(r),n=Om(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}C(H),M(H,n)}function Qn(){C(H),C($),C(rn)}function lr(n){n.memoizedState!==null&&M(en,n);var r=H.current,e=Om(r,n.type);r!==e&&(M($,n),M(H,e))}function xr(n){$.current===n&&(C(H),C($)),en.current===n&&(C(en),ja._currentValue=I)}var fr,Rn;function pn(n){if(fr===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);fr=r&&r[1]||"",Rn=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fr+n+Rn}var In=!1;function Or(n,r){if(!n||In)return"";In=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(k){var O=k}Reflect.construct(n,[],R)}else{try{R.call()}catch(k){O=k}n.call(R.prototype)}}else{try{throw Error()}catch(k){O=k}(R=n())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(k){if(k&&O&&typeof k.stack=="string")return[k.stack,O.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),i=l[0],s=l[1];if(i&&s){var p=i.split(`
`),w=s.split(`
`);for(a=t=0;t<p.length&&!p[t].includes("DetermineComponentFrameRoot");)t++;for(;a<w.length&&!w[a].includes("DetermineComponentFrameRoot");)a++;if(t===p.length||a===w.length)for(t=p.length-1,a=w.length-1;1<=t&&0<=a&&p[t]!==w[a];)a--;for(;1<=t&&0<=a;t--,a--)if(p[t]!==w[a]){if(t!==1||a!==1)do if(t--,a--,0>a||p[t]!==w[a]){var T=`
`+p[t].replace(" at new "," at ");return n.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",n.displayName)),T}while(1<=t&&0<=a);break}}}finally{In=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?pn(e):""}function La(n,r){switch(n.tag){case 26:case 27:case 5:return pn(n.type);case 16:return pn("Lazy");case 13:return n.child!==r&&r!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Or(n.type,!1);case 11:return Or(n.type.render,!1);case 1:return Or(n.type,!0);case 31:return pn("Activity");default:return""}}function es(n){try{var r="",e=null;do r+=La(n,e),e=n,n=n.return;while(n);return r}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var bi=Object.prototype.hasOwnProperty,Qi=o.unstable_scheduleCallback,yi=o.unstable_cancelCallback,Hx=o.unstable_shouldYield,Zx=o.unstable_requestPaint,pr=o.unstable_now,Yx=o.unstable_getCurrentPriorityLevel,ts=o.unstable_ImmediatePriority,as=o.unstable_UserBlockingPriority,Ha=o.unstable_NormalPriority,Gx=o.unstable_LowPriority,ls=o.unstable_IdlePriority,Xx=o.log,Jx=o.unstable_setDisableYieldValue,Ht=null,hr=null;function xe(n){if(typeof Xx=="function"&&Jx(n),hr&&typeof hr.setStrictMode=="function")try{hr.setStrictMode(Ht,n)}catch{}}var vr=Math.clz32?Math.clz32:Kx,Ix=Math.log,qx=Math.LN2;function Kx(n){return n>>>=0,n===0?32:31-(Ix(n)/qx|0)|0}var Za=256,Ya=262144,Ga=4194304;function Me(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Xa(n,r,e){var t=n.pendingLanes;if(t===0)return 0;var a=0,l=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var s=t&134217727;return s!==0?(t=s&~l,t!==0?a=Me(t):(i&=s,i!==0?a=Me(i):e||(e=s&~n,e!==0&&(a=Me(e))))):(s=t&~l,s!==0?a=Me(s):i!==0?a=Me(i):e||(e=t&~n,e!==0&&(a=Me(e)))),a===0?0:r!==0&&r!==a&&(r&l)===0&&(l=a&-a,e=r&-r,l>=e||l===32&&(e&4194048)!==0)?r:a}function Zt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function $x(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function is(){var n=Ga;return Ga<<=1,(Ga&62914560)===0&&(Ga=4194304),n}function gi(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Yt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Px(n,r,e,t,a,l){var i=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var s=n.entanglements,p=n.expirationTimes,w=n.hiddenUpdates;for(e=i&~e;0<e;){var T=31-vr(e),R=1<<T;s[T]=0,p[T]=-1;var O=w[T];if(O!==null)for(w[T]=null,T=0;T<O.length;T++){var k=O[T];k!==null&&(k.lane&=-536870913)}e&=~R}t!==0&&os(n,t,0),l!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=l&~(i&~r))}function os(n,r,e){n.pendingLanes|=r,n.suspendedLanes&=~r;var t=31-vr(r);n.entangledLanes|=r,n.entanglements[t]=n.entanglements[t]|1073741824|e&261930}function cs(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-vr(e),a=1<<t;a&r|n[t]&r&&(n[t]|=r),e&=~a}}function ss(n,r){var e=r&-r;return e=(e&42)!==0?1:Bi(e),(e&(n.suspendedLanes|r))!==0?0:e}function Bi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Fi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function us(){var n=D.p;return n!==0?n:(n=window.event,n===void 0?32:Im(n.type))}function ds(n,r){var e=D.p;try{return D.p=n,r()}finally{D.p=e}}var fe=Math.random().toString(36).slice(2),$n="__reactFiber$"+fe,ir="__reactProps$"+fe,et="__reactContainer$"+fe,Ui="__reactEvents$"+fe,nf="__reactListeners$"+fe,rf="__reactHandles$"+fe,ms="__reactResources$"+fe,Gt="__reactMarker$"+fe;function wi(n){delete n[$n],delete n[ir],delete n[Ui],delete n[nf],delete n[rf]}function tt(n){var r=n[$n];if(r)return r;for(var e=n.parentNode;e;){if(r=e[et]||e[$n]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=Cm(n);n!==null;){if(e=n[$n])return e;n=Cm(n)}return r}n=e,e=n.parentNode}return null}function at(n){if(n=n[$n]||n[et]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Xt(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(c(33))}function lt(n){var r=n[ms];return r||(r=n[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function qn(n){n[Gt]=!0}var xs=new Set,fs={};function De(n,r){it(n,r),it(n+"Capture",r)}function it(n,r){for(fs[n]=r,n=0;n<r.length;n++)xs.add(r[n])}var ef=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ps={},hs={};function tf(n){return bi.call(hs,n)?!0:bi.call(ps,n)?!1:ef.test(n)?hs[n]=!0:(ps[n]=!0,!1)}function Ja(n,r,e){if(tf(r))if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var t=r.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+e)}}function Ia(n,r,e){if(e===null)n.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+e)}}function Jr(n,r,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(r,e,""+t)}}function kr(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vs(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function af(n,r,e){var t=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return a.call(this)},set:function(i){e=""+i,l.call(this,i)}}),Object.defineProperty(n,r,{enumerable:t.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Oi(n){if(!n._valueTracker){var r=vs(n)?"checked":"value";n._valueTracker=af(n,r,""+n[r])}}function bs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=vs(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var lf=/[\n"\\]/g;function Er(n){return n.replace(lf,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ki(n,r,e,t,a,l,i,s){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),r!=null?i==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+kr(r)):n.value!==""+kr(r)&&(n.value=""+kr(r)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),r!=null?Ei(n,i,kr(r)):e!=null?Ei(n,i,kr(e)):t!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.name=""+kr(s):n.removeAttribute("name")}function Qs(n,r,e,t,a,l,i,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),r!=null||e!=null){if(!(l!=="submit"&&l!=="reset"||r!=null)){Oi(n);return}e=e!=null?""+kr(e):"",r=r!=null?""+kr(r):e,s||r===n.value||(n.value=r),n.defaultValue=r}t=t??a,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=s?n.checked:!!t,n.defaultChecked=!!t,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i),Oi(n)}function Ei(n,r,e){r==="number"&&qa(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function ot(n,r,e,t){if(n=n.options,r){r={};for(var a=0;a<e.length;a++)r["$"+e[a]]=!0;for(e=0;e<n.length;e++)a=r.hasOwnProperty("$"+n[e].value),n[e].selected!==a&&(n[e].selected=a),a&&t&&(n[e].defaultSelected=!0)}else{for(e=""+kr(e),r=null,a=0;a<n.length;a++){if(n[a].value===e){n[a].selected=!0,t&&(n[a].defaultSelected=!0);return}r!==null||n[a].disabled||(r=n[a])}r!==null&&(r.selected=!0)}}function ys(n,r,e){if(r!=null&&(r=""+kr(r),r!==n.value&&(n.value=r),e==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=e!=null?""+kr(e):""}function gs(n,r,e,t){if(r==null){if(t!=null){if(e!=null)throw Error(c(92));if(dn(t)){if(1<t.length)throw Error(c(93));t=t[0]}e=t}e==null&&(e=""),r=e}e=kr(r),n.defaultValue=e,t=n.textContent,t===e&&t!==""&&t!==null&&(n.value=t),Oi(n)}function ct(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var of=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bs(n,r,e){var t=r.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?t?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":t?n.setProperty(r,e):typeof e!="number"||e===0||of.has(r)?r==="float"?n.cssFloat=e:n[r]=(""+e).trim():n[r]=e+"px"}function Fs(n,r,e){if(r!=null&&typeof r!="object")throw Error(c(62));if(n=n.style,e!=null){for(var t in e)!e.hasOwnProperty(t)||r!=null&&r.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var a in r)t=r[a],r.hasOwnProperty(a)&&e[a]!==t&&Bs(n,a,t)}else for(var l in r)r.hasOwnProperty(l)&&Bs(n,l,r[l])}function _i(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ka(n){return sf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ir(){}var Ti=null;function ji(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,ut=null;function Us(n){var r=at(n);if(r&&(n=r.stateNode)){var e=n[ir]||null;n:switch(n=r.stateNode,r.type){case"input":if(ki(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+Er(""+r)+'"][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var a=t[ir]||null;if(!a)throw Error(c(90));ki(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(r=0;r<e.length;r++)t=e[r],t.form===n.form&&bs(t)}break n;case"textarea":ys(n,e.value,e.defaultValue);break n;case"select":r=e.value,r!=null&&ot(n,!!e.multiple,r,!1)}}}var Si=!1;function ws(n,r,e){if(Si)return n(r,e);Si=!0;try{var t=n(r);return t}finally{if(Si=!1,(st!==null||ut!==null)&&(Ml(),st&&(r=st,n=ut,ut=st=null,Us(r),n)))for(r=0;r<n.length;r++)Us(n[r])}}function Jt(n,r){var e=n.stateNode;if(e===null)return null;var t=e[ir]||null;if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(c(231,r,typeof e));return e}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=!1;if(qr)try{var It={};Object.defineProperty(It,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{Ci=!1}var pe=null,Ri=null,$a=null;function Os(){if($a)return $a;var n,r=Ri,e=r.length,t,a="value"in pe?pe.value:pe.textContent,l=a.length;for(n=0;n<e&&r[n]===a[n];n++);var i=e-n;for(t=1;t<=i&&r[e-t]===a[l-t];t++);return $a=a.slice(n,1<t?1-t:void 0)}function Pa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function ks(){return!1}function or(n){function r(e,t,a,l,i){this._reactName=e,this._targetInst=a,this.type=t,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in n)n.hasOwnProperty(s)&&(e=n[s],this[s]=e?e(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?nl:ks,this.isPropagationStopped=ks,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var Ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=or(Ve),qt=y({},Ve,{view:0,detail:0}),uf=or(qt),zi,Ai,Kt,el=y({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kt&&(Kt&&n.type==="mousemove"?(zi=n.screenX-Kt.screenX,Ai=n.screenY-Kt.screenY):Ai=zi=0,Kt=n),zi)},movementY:function(n){return"movementY"in n?n.movementY:Ai}}),Es=or(el),df=y({},el,{dataTransfer:0}),mf=or(df),xf=y({},qt,{relatedTarget:0}),Wi=or(xf),ff=y({},Ve,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=or(ff),hf=y({},Ve,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vf=or(hf),bf=y({},Ve,{data:0}),_s=or(bf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bf(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=gf[n])?!!r[n]:!1}function Mi(){return Bf}var Ff=y({},qt,{key:function(n){if(n.key){var r=Qf[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Pa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yf[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mi,charCode:function(n){return n.type==="keypress"?Pa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Uf=or(Ff),wf=y({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=or(wf),Of=y({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mi}),kf=or(Of),Ef=y({},Ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),_f=or(Ef),Tf=y({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=or(Tf),Sf=y({},Ve,{newState:0,oldState:0}),Cf=or(Sf),Rf=[9,13,27,32],Di=qr&&"CompositionEvent"in window,$t=null;qr&&"documentMode"in document&&($t=document.documentMode);var zf=qr&&"TextEvent"in window&&!$t,js=qr&&(!Di||$t&&8<$t&&11>=$t),Ss=" ",Cs=!1;function Rs(n,r){switch(n){case"keyup":return Rf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var dt=!1;function Af(n,r){switch(n){case"compositionend":return zs(r);case"keypress":return r.which!==32?null:(Cs=!0,Ss);case"textInput":return n=r.data,n===Ss&&Cs?null:n;default:return null}}function Wf(n,r){if(dt)return n==="compositionend"||!Di&&Rs(n,r)?(n=Os(),$a=Ri=pe=null,dt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return js&&r.locale!=="ko"?null:r.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Mf[n.type]:r==="textarea"}function Ws(n,r,e,t){st?ut?ut.push(t):ut=[t]:st=t,r=Yl(r,"onChange"),0<r.length&&(e=new rl("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var Pt=null,na=null;function Df(n){Qm(n,0)}function tl(n){var r=Xt(n);if(bs(r))return n}function Ms(n,r){if(n==="change")return r}var Ds=!1;if(qr){var Vi;if(qr){var Ni="oninput"in document;if(!Ni){var Vs=document.createElement("div");Vs.setAttribute("oninput","return;"),Ni=typeof Vs.oninput=="function"}Vi=Ni}else Vi=!1;Ds=Vi&&(!document.documentMode||9<document.documentMode)}function Ns(){Pt&&(Pt.detachEvent("onpropertychange",Ls),na=Pt=null)}function Ls(n){if(n.propertyName==="value"&&tl(na)){var r=[];Ws(r,na,n,ji(n)),ws(Df,r)}}function Vf(n,r,e){n==="focusin"?(Ns(),Pt=r,na=e,Pt.attachEvent("onpropertychange",Ls)):n==="focusout"&&Ns()}function Nf(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(na)}function Lf(n,r){if(n==="click")return tl(r)}function Hf(n,r){if(n==="input"||n==="change")return tl(r)}function Zf(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var br=typeof Object.is=="function"?Object.is:Zf;function ra(n,r){if(br(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var a=e[t];if(!bi.call(r,a)||!br(n[a],r[a]))return!1}return!0}function Hs(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zs(n,r){var e=Hs(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Hs(e)}}function Ys(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ys(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gs(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=qa(n.document);r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=qa(n.document)}return r}function Li(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Yf=qr&&"documentMode"in document&&11>=document.documentMode,mt=null,Hi=null,ea=null,Zi=!1;function Xs(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Zi||mt==null||mt!==qa(t)||(t=mt,"selectionStart"in t&&Li(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ea&&ra(ea,t)||(ea=t,t=Yl(Hi,"onSelect"),0<t.length&&(r=new rl("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=mt)))}function Ne(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var xt={animationend:Ne("Animation","AnimationEnd"),animationiteration:Ne("Animation","AnimationIteration"),animationstart:Ne("Animation","AnimationStart"),transitionrun:Ne("Transition","TransitionRun"),transitionstart:Ne("Transition","TransitionStart"),transitioncancel:Ne("Transition","TransitionCancel"),transitionend:Ne("Transition","TransitionEnd")},Yi={},Js={};qr&&(Js=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function Le(n){if(Yi[n])return Yi[n];if(!xt[n])return n;var r=xt[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in Js)return Yi[n]=r[e];return n}var Is=Le("animationend"),qs=Le("animationiteration"),Ks=Le("animationstart"),Gf=Le("transitionrun"),Xf=Le("transitionstart"),Jf=Le("transitioncancel"),$s=Le("transitionend"),Ps=new Map,Gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gi.push("scrollEnd");function Mr(n,r){Ps.set(n,r),De(r,[n])}var al=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},_r=[],ft=0,Xi=0;function ll(){for(var n=ft,r=Xi=ft=0;r<n;){var e=_r[r];_r[r++]=null;var t=_r[r];_r[r++]=null;var a=_r[r];_r[r++]=null;var l=_r[r];if(_r[r++]=null,t!==null&&a!==null){var i=t.pending;i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a}l!==0&&nu(e,a,l)}}function il(n,r,e,t){_r[ft++]=n,_r[ft++]=r,_r[ft++]=e,_r[ft++]=t,Xi|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function Ji(n,r,e,t){return il(n,r,e,t),ol(n)}function He(n,r){return il(n,null,null,r),ol(n)}function nu(n,r,e){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e);for(var a=!1,l=n.return;l!==null;)l.childLanes|=e,t=l.alternate,t!==null&&(t.childLanes|=e),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,a&&r!==null&&(a=31-vr(e),n=l.hiddenUpdates,t=n[a],t===null?n[a]=[r]:t.push(r),r.lane=e|536870912),l):null}function ol(n){if(50<Ua)throw Ua=0,ac=null,Error(c(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var pt={};function If(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qr(n,r,e,t){return new If(n,r,e,t)}function Ii(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kr(n,r){var e=n.alternate;return e===null?(e=Qr(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function ru(n,r){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function cl(n,r,e,t,a,l){var i=0;if(t=n,typeof n=="function")Ii(n)&&(i=1);else if(typeof n=="string")i=n0(n,e,H.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case _n:return n=Qr(31,e,r,a),n.elementType=_n,n.lanes=l,n;case N:return Ze(e.children,a,l,r);case z:i=8,a|=24;break;case X:return n=Qr(12,e,r,a|2),n.elementType=X,n.lanes=l,n;case gn:return n=Qr(13,e,r,a),n.elementType=gn,n.lanes=l,n;case un:return n=Qr(19,e,r,a),n.elementType=un,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case K:i=10;break n;case tn:i=9;break n;case Bn:i=11;break n;case P:i=14;break n;case an:i=16,t=null;break n}i=29,e=Error(c(130,n===null?"null":typeof n,"")),t=null}return r=Qr(i,e,r,a),r.elementType=n,r.type=t,r.lanes=l,r}function Ze(n,r,e,t){return n=Qr(7,n,t,r),n.lanes=e,n}function qi(n,r,e){return n=Qr(6,n,null,r),n.lanes=e,n}function eu(n){var r=Qr(18,null,null,0);return r.stateNode=n,r}function Ki(n,r,e){return r=Qr(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var tu=new WeakMap;function Tr(n,r){if(typeof n=="object"&&n!==null){var e=tu.get(n);return e!==void 0?e:(r={value:n,source:r,stack:es(r)},tu.set(n,r),r)}return{value:n,source:r,stack:es(r)}}var ht=[],vt=0,sl=null,ta=0,jr=[],Sr=0,he=null,Zr=1,Yr="";function $r(n,r){ht[vt++]=ta,ht[vt++]=sl,sl=n,ta=r}function au(n,r,e){jr[Sr++]=Zr,jr[Sr++]=Yr,jr[Sr++]=he,he=n;var t=Zr;n=Yr;var a=32-vr(t)-1;t&=~(1<<a),e+=1;var l=32-vr(r)+a;if(30<l){var i=a-a%5;l=(t&(1<<i)-1).toString(32),t>>=i,a-=i,Zr=1<<32-vr(r)+a|e<<a|t,Yr=l+n}else Zr=1<<l|e<<a|t,Yr=n}function $i(n){n.return!==null&&($r(n,1),au(n,1,0))}function Pi(n){for(;n===sl;)sl=ht[--vt],ht[vt]=null,ta=ht[--vt],ht[vt]=null;for(;n===he;)he=jr[--Sr],jr[Sr]=null,Yr=jr[--Sr],jr[Sr]=null,Zr=jr[--Sr],jr[Sr]=null}function lu(n,r){jr[Sr++]=Zr,jr[Sr++]=Yr,jr[Sr++]=he,Zr=r.id,Yr=r.overflow,he=n}var Pn=null,zn=null,yn=!1,ve=null,Cr=!1,no=Error(c(519));function be(n){var r=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw aa(Tr(r,n)),no}function iu(n){var r=n.stateNode,e=n.type,t=n.memoizedProps;switch(r[$n]=n,r[ir]=t,e){case"dialog":xn("cancel",r),xn("close",r);break;case"iframe":case"object":case"embed":xn("load",r);break;case"video":case"audio":for(e=0;e<Oa.length;e++)xn(Oa[e],r);break;case"source":xn("error",r);break;case"img":case"image":case"link":xn("error",r),xn("load",r);break;case"details":xn("toggle",r);break;case"input":xn("invalid",r),Qs(r,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":xn("invalid",r);break;case"textarea":xn("invalid",r),gs(r,t.value,t.defaultValue,t.children)}e=t.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||r.textContent===""+e||t.suppressHydrationWarning===!0||Fm(r.textContent,e)?(t.popover!=null&&(xn("beforetoggle",r),xn("toggle",r)),t.onScroll!=null&&xn("scroll",r),t.onScrollEnd!=null&&xn("scrollend",r),t.onClick!=null&&(r.onclick=Ir),r=!0):r=!1,r||be(n,!0)}function ou(n){for(Pn=n.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Cr=!1;return;case 27:case 3:Cr=!0;return;default:Pn=Pn.return}}function bt(n){if(n!==Pn)return!1;if(!yn)return ou(n),yn=!0,!1;var r=n.tag,e;if((e=r!==3&&r!==27)&&((e=r===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Qc(n.type,n.memoizedProps)),e=!e),e&&zn&&be(n),ou(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));zn=Sm(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));zn=Sm(n)}else r===27?(r=zn,Se(n.type)?(n=Uc,Uc=null,zn=n):zn=r):zn=Pn?zr(n.stateNode.nextSibling):null;return!0}function Ye(){zn=Pn=null,yn=!1}function ro(){var n=ve;return n!==null&&(dr===null?dr=n:dr.push.apply(dr,n),ve=null),n}function aa(n){ve===null?ve=[n]:ve.push(n)}var eo=b(null),Ge=null,Pr=null;function Qe(n,r,e){M(eo,r._currentValue),r._currentValue=e}function ne(n){n._currentValue=eo.current,C(eo)}function to(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function ao(n,r,e,t){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){var i=a.child;l=l.firstContext;n:for(;l!==null;){var s=l;l=a;for(var p=0;p<r.length;p++)if(s.context===r[p]){l.lanes|=e,s=l.alternate,s!==null&&(s.lanes|=e),to(l.return,e,n),t||(i=null);break n}l=s.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(c(341));i.lanes|=e,l=i.alternate,l!==null&&(l.lanes|=e),to(i,e,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function Qt(n,r,e,t){n=null;for(var a=r,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(c(387));if(i=i.memoizedProps,i!==null){var s=a.type;br(a.pendingProps.value,i.value)||(n!==null?n.push(s):n=[s])}}else if(a===en.current){if(i=a.alternate,i===null)throw Error(c(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(ja):n=[ja])}a=a.return}n!==null&&ao(r,n,e,t),r.flags|=262144}function ul(n){for(n=n.firstContext;n!==null;){if(!br(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xe(n){Ge=n,Pr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function nr(n){return cu(Ge,n)}function dl(n,r){return Ge===null&&Xe(n),cu(n,r)}function cu(n,r){var e=r._currentValue;if(r={context:r,memoizedValue:e,next:null},Pr===null){if(n===null)throw Error(c(308));Pr=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Pr=Pr.next=r;return e}var qf=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(e,t){n.push(t)}};this.abort=function(){r.aborted=!0,n.forEach(function(e){return e()})}},Kf=o.unstable_scheduleCallback,$f=o.unstable_NormalPriority,Hn={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lo(){return{controller:new qf,data:new Map,refCount:0}}function la(n){n.refCount--,n.refCount===0&&Kf($f,function(){n.controller.abort()})}var ia=null,io=0,yt=0,gt=null;function Pf(n,r){if(ia===null){var e=ia=[];io=0,yt=uc(),gt={status:"pending",value:void 0,then:function(t){e.push(t)}}}return io++,r.then(su,su),r}function su(){if(--io===0&&ia!==null){gt!==null&&(gt.status="fulfilled");var n=ia;ia=null,yt=0,gt=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function np(n,r){var e=[],t={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return n.then(function(){t.status="fulfilled",t.value=r;for(var a=0;a<e.length;a++)(0,e[a])(r)},function(a){for(t.status="rejected",t.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),t}var uu=_.S;_.S=function(n,r){Xd=pr(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&Pf(n,r),uu!==null&&uu(n,r)};var Je=b(null);function oo(){var n=Je.current;return n!==null?n:Cn.pooledCache}function ml(n,r){r===null?M(Je,Je.current):M(Je,r.pool)}function du(){var n=oo();return n===null?null:{parent:Hn._currentValue,pool:n}}var Bt=Error(c(460)),co=Error(c(474)),xl=Error(c(542)),fl={then:function(){}};function mu(n){return n=n.status,n==="fulfilled"||n==="rejected"}function xu(n,r,e){switch(e=n[e],e===void 0?n.push(r):e!==r&&(r.then(Ir,Ir),r=e),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,pu(n),n;default:if(typeof r.status=="string")r.then(Ir,Ir);else{if(n=Cn,n!==null&&100<n.shellSuspendCounter)throw Error(c(482));n=r,n.status="pending",n.then(function(t){if(r.status==="pending"){var a=r;a.status="fulfilled",a.value=t}},function(t){if(r.status==="pending"){var a=r;a.status="rejected",a.reason=t}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,pu(n),n}throw qe=r,Bt}}function Ie(n){try{var r=n._init;return r(n._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,Bt):e}}var qe=null;function fu(){if(qe===null)throw Error(c(459));var n=qe;return qe=null,n}function pu(n){if(n===Bt||n===xl)throw Error(c(483))}var Ft=null,oa=0;function pl(n){var r=oa;return oa+=1,Ft===null&&(Ft=[]),xu(Ft,n,r)}function ca(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function hl(n,r){throw r.$$typeof===S?Error(c(525)):(n=Object.prototype.toString.call(r),Error(c(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function hu(n){function r(g,v){if(n){var F=g.deletions;F===null?(g.deletions=[v],g.flags|=16):F.push(v)}}function e(g,v){if(!n)return null;for(;v!==null;)r(g,v),v=v.sibling;return null}function t(g){for(var v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function a(g,v){return g=Kr(g,v),g.index=0,g.sibling=null,g}function l(g,v,F){return g.index=F,n?(F=g.alternate,F!==null?(F=F.index,F<v?(g.flags|=67108866,v):F):(g.flags|=67108866,v)):(g.flags|=1048576,v)}function i(g){return n&&g.alternate===null&&(g.flags|=67108866),g}function s(g,v,F,j){return v===null||v.tag!==6?(v=qi(F,g.mode,j),v.return=g,v):(v=a(v,F),v.return=g,v)}function p(g,v,F,j){var q=F.type;return q===N?T(g,v,F.props.children,j,F.key):v!==null&&(v.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===an&&Ie(q)===v.type)?(v=a(v,F.props),ca(v,F),v.return=g,v):(v=cl(F.type,F.key,F.props,null,g.mode,j),ca(v,F),v.return=g,v)}function w(g,v,F,j){return v===null||v.tag!==4||v.stateNode.containerInfo!==F.containerInfo||v.stateNode.implementation!==F.implementation?(v=Ki(F,g.mode,j),v.return=g,v):(v=a(v,F.children||[]),v.return=g,v)}function T(g,v,F,j,q){return v===null||v.tag!==7?(v=Ze(F,g.mode,j,q),v.return=g,v):(v=a(v,F),v.return=g,v)}function R(g,v,F){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=qi(""+v,g.mode,F),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case W:return F=cl(v.type,v.key,v.props,null,g.mode,F),ca(F,v),F.return=g,F;case V:return v=Ki(v,g.mode,F),v.return=g,v;case an:return v=Ie(v),R(g,v,F)}if(dn(v)||L(v))return v=Ze(v,g.mode,F,null),v.return=g,v;if(typeof v.then=="function")return R(g,pl(v),F);if(v.$$typeof===K)return R(g,dl(g,v),F);hl(g,v)}return null}function O(g,v,F,j){var q=v!==null?v.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return q!==null?null:s(g,v,""+F,j);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case W:return F.key===q?p(g,v,F,j):null;case V:return F.key===q?w(g,v,F,j):null;case an:return F=Ie(F),O(g,v,F,j)}if(dn(F)||L(F))return q!==null?null:T(g,v,F,j,null);if(typeof F.then=="function")return O(g,v,pl(F),j);if(F.$$typeof===K)return O(g,v,dl(g,F),j);hl(g,F)}return null}function k(g,v,F,j,q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return g=g.get(F)||null,s(v,g,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case W:return g=g.get(j.key===null?F:j.key)||null,p(v,g,j,q);case V:return g=g.get(j.key===null?F:j.key)||null,w(v,g,j,q);case an:return j=Ie(j),k(g,v,F,j,q)}if(dn(j)||L(j))return g=g.get(F)||null,T(v,g,j,q,null);if(typeof j.then=="function")return k(g,v,F,pl(j),q);if(j.$$typeof===K)return k(g,v,F,dl(v,j),q);hl(v,j)}return null}function Z(g,v,F,j){for(var q=null,Un=null,G=v,sn=v=0,vn=null;G!==null&&sn<F.length;sn++){G.index>sn?(vn=G,G=null):vn=G.sibling;var wn=O(g,G,F[sn],j);if(wn===null){G===null&&(G=vn);break}n&&G&&wn.alternate===null&&r(g,G),v=l(wn,v,sn),Un===null?q=wn:Un.sibling=wn,Un=wn,G=vn}if(sn===F.length)return e(g,G),yn&&$r(g,sn),q;if(G===null){for(;sn<F.length;sn++)G=R(g,F[sn],j),G!==null&&(v=l(G,v,sn),Un===null?q=G:Un.sibling=G,Un=G);return yn&&$r(g,sn),q}for(G=t(G);sn<F.length;sn++)vn=k(G,g,sn,F[sn],j),vn!==null&&(n&&vn.alternate!==null&&G.delete(vn.key===null?sn:vn.key),v=l(vn,v,sn),Un===null?q=vn:Un.sibling=vn,Un=vn);return n&&G.forEach(function(We){return r(g,We)}),yn&&$r(g,sn),q}function nn(g,v,F,j){if(F==null)throw Error(c(151));for(var q=null,Un=null,G=v,sn=v=0,vn=null,wn=F.next();G!==null&&!wn.done;sn++,wn=F.next()){G.index>sn?(vn=G,G=null):vn=G.sibling;var We=O(g,G,wn.value,j);if(We===null){G===null&&(G=vn);break}n&&G&&We.alternate===null&&r(g,G),v=l(We,v,sn),Un===null?q=We:Un.sibling=We,Un=We,G=vn}if(wn.done)return e(g,G),yn&&$r(g,sn),q;if(G===null){for(;!wn.done;sn++,wn=F.next())wn=R(g,wn.value,j),wn!==null&&(v=l(wn,v,sn),Un===null?q=wn:Un.sibling=wn,Un=wn);return yn&&$r(g,sn),q}for(G=t(G);!wn.done;sn++,wn=F.next())wn=k(G,g,sn,wn.value,j),wn!==null&&(n&&wn.alternate!==null&&G.delete(wn.key===null?sn:wn.key),v=l(wn,v,sn),Un===null?q=wn:Un.sibling=wn,Un=wn);return n&&G.forEach(function(d0){return r(g,d0)}),yn&&$r(g,sn),q}function Sn(g,v,F,j){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case W:n:{for(var q=F.key;v!==null;){if(v.key===q){if(q=F.type,q===N){if(v.tag===7){e(g,v.sibling),j=a(v,F.props.children),j.return=g,g=j;break n}}else if(v.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===an&&Ie(q)===v.type){e(g,v.sibling),j=a(v,F.props),ca(j,F),j.return=g,g=j;break n}e(g,v);break}else r(g,v);v=v.sibling}F.type===N?(j=Ze(F.props.children,g.mode,j,F.key),j.return=g,g=j):(j=cl(F.type,F.key,F.props,null,g.mode,j),ca(j,F),j.return=g,g=j)}return i(g);case V:n:{for(q=F.key;v!==null;){if(v.key===q)if(v.tag===4&&v.stateNode.containerInfo===F.containerInfo&&v.stateNode.implementation===F.implementation){e(g,v.sibling),j=a(v,F.children||[]),j.return=g,g=j;break n}else{e(g,v);break}else r(g,v);v=v.sibling}j=Ki(F,g.mode,j),j.return=g,g=j}return i(g);case an:return F=Ie(F),Sn(g,v,F,j)}if(dn(F))return Z(g,v,F,j);if(L(F)){if(q=L(F),typeof q!="function")throw Error(c(150));return F=q.call(F),nn(g,v,F,j)}if(typeof F.then=="function")return Sn(g,v,pl(F),j);if(F.$$typeof===K)return Sn(g,v,dl(g,F),j);hl(g,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,v!==null&&v.tag===6?(e(g,v.sibling),j=a(v,F),j.return=g,g=j):(e(g,v),j=qi(F,g.mode,j),j.return=g,g=j),i(g)):e(g,v)}return function(g,v,F,j){try{oa=0;var q=Sn(g,v,F,j);return Ft=null,q}catch(G){if(G===Bt||G===xl)throw G;var Un=Qr(29,G,null,g.mode);return Un.lanes=j,Un.return=g,Un}}}var Ke=hu(!0),vu=hu(!1),ye=!1;function so(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uo(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ge(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Be(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(On&2)!==0){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,r=ol(n),nu(n,null,e),r}return il(n,t,r,e),ol(n)}function sa(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194048)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,cs(n,e)}}function mo(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var a=null,l=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};l===null?a=l=i:l=l.next=i,e=e.next}while(e!==null);l===null?a=l=r:l=l.next=r}else a=l=r;e={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}var xo=!1;function ua(){if(xo){var n=gt;if(n!==null)throw n}}function da(n,r,e,t){xo=!1;var a=n.updateQueue;ye=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var p=s,w=p.next;p.next=null,i===null?l=w:i.next=w,i=p;var T=n.alternate;T!==null&&(T=T.updateQueue,s=T.lastBaseUpdate,s!==i&&(s===null?T.firstBaseUpdate=w:s.next=w,T.lastBaseUpdate=p))}if(l!==null){var R=a.baseState;i=0,T=w=p=null,s=l;do{var O=s.lane&-536870913,k=O!==s.lane;if(k?(hn&O)===O:(t&O)===O){O!==0&&O===yt&&(xo=!0),T!==null&&(T=T.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});n:{var Z=n,nn=s;O=r;var Sn=e;switch(nn.tag){case 1:if(Z=nn.payload,typeof Z=="function"){R=Z.call(Sn,R,O);break n}R=Z;break n;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=nn.payload,O=typeof Z=="function"?Z.call(Sn,R,O):Z,O==null)break n;R=y({},R,O);break n;case 2:ye=!0}}O=s.callback,O!==null&&(n.flags|=64,k&&(n.flags|=8192),k=a.callbacks,k===null?a.callbacks=[O]:k.push(O))}else k={lane:O,tag:s.tag,payload:s.payload,callback:s.callback,next:null},T===null?(w=T=k,p=R):T=T.next=k,i|=O;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;k=s,s=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);T===null&&(p=R),a.baseState=p,a.firstBaseUpdate=w,a.lastBaseUpdate=T,l===null&&(a.shared.lanes=0),ke|=i,n.lanes=i,n.memoizedState=R}}function bu(n,r){if(typeof n!="function")throw Error(c(191,n));n.call(r)}function Qu(n,r){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)bu(e[n],r)}var Ut=b(null),vl=b(0);function yu(n,r){n=se,M(vl,n),M(Ut,r),se=n|r.baseLanes}function fo(){M(vl,se),M(Ut,Ut.current)}function po(){se=vl.current,C(Ut),C(vl)}var yr=b(null),Rr=null;function Fe(n){var r=n.alternate;M(Nn,Nn.current&1),M(yr,n),Rr===null&&(r===null||Ut.current!==null||r.memoizedState!==null)&&(Rr=n)}function ho(n){M(Nn,Nn.current),M(yr,n),Rr===null&&(Rr=n)}function gu(n){n.tag===22?(M(Nn,Nn.current),M(yr,n),Rr===null&&(Rr=n)):Ue()}function Ue(){M(Nn,Nn.current),M(yr,yr.current)}function gr(n){C(yr),Rr===n&&(Rr=null),C(Nn)}var Nn=b(0);function bl(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Bc(e)||Fc(e)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var re=0,on=null,Tn=null,Zn=null,Ql=!1,wt=!1,$e=!1,yl=0,ma=0,Ot=null,rp=0;function Dn(){throw Error(c(321))}function vo(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!br(n[e],r[e]))return!1;return!0}function bo(n,r,e,t,a,l){return re=l,on=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_.H=n===null||n.memoizedState===null?ad:Co,$e=!1,l=e(t,a),$e=!1,wt&&(l=Fu(r,e,t,a)),Bu(n),l}function Bu(n){_.H=pa;var r=Tn!==null&&Tn.next!==null;if(re=0,Zn=Tn=on=null,Ql=!1,ma=0,Ot=null,r)throw Error(c(300));n===null||Yn||(n=n.dependencies,n!==null&&ul(n)&&(Yn=!0))}function Fu(n,r,e,t){on=n;var a=0;do{if(wt&&(Ot=null),ma=0,wt=!1,25<=a)throw Error(c(301));if(a+=1,Zn=Tn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}_.H=ld,l=r(e,t)}while(wt);return l}function ep(){var n=_.H,r=n.useState()[0];return r=typeof r.then=="function"?xa(r):r,n=n.useState()[0],(Tn!==null?Tn.memoizedState:null)!==n&&(on.flags|=1024),r}function Qo(){var n=yl!==0;return yl=0,n}function yo(n,r,e){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~e}function go(n){if(Ql){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Ql=!1}re=0,Zn=Tn=on=null,wt=!1,ma=yl=0,Ot=null}function ar(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?on.memoizedState=Zn=n:Zn=Zn.next=n,Zn}function Ln(){if(Tn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var r=Zn===null?on.memoizedState:Zn.next;if(r!==null)Zn=r,Tn=n;else{if(n===null)throw on.alternate===null?Error(c(467)):Error(c(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Zn===null?on.memoizedState=Zn=n:Zn=Zn.next=n}return Zn}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xa(n){var r=ma;return ma+=1,Ot===null&&(Ot=[]),n=xu(Ot,n,r),r=on,(Zn===null?r.memoizedState:Zn.next)===null&&(r=r.alternate,_.H=r===null||r.memoizedState===null?ad:Co),n}function Bl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return xa(n);if(n.$$typeof===K)return nr(n)}throw Error(c(438,String(n)))}function Bo(n){var r=null,e=on.updateQueue;if(e!==null&&(r=e.memoCache),r==null){var t=on.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(r={data:t.data.map(function(a){return a.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),e===null&&(e=gl(),on.updateQueue=e),e.memoCache=r,e=r.data[r.index],e===void 0)for(e=r.data[r.index]=Array(n),t=0;t<n;t++)e[t]=Xn;return r.index++,e}function ee(n,r){return typeof r=="function"?r(n):r}function Fl(n){var r=Ln();return Fo(r,Tn,n)}function Fo(n,r,e){var t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=n.baseQueue,l=t.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}r.baseQueue=a=l,t.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{r=a.next;var s=i=null,p=null,w=r,T=!1;do{var R=w.lane&-536870913;if(R!==w.lane?(hn&R)===R:(re&R)===R){var O=w.revertLane;if(O===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),R===yt&&(T=!0);else if((re&O)===O){w=w.next,O===yt&&(T=!0);continue}else R={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(s=p=R,i=l):p=p.next=R,on.lanes|=O,ke|=O;R=w.action,$e&&e(l,R),l=w.hasEagerState?w.eagerState:e(l,R)}else O={lane:R,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},p===null?(s=p=O,i=l):p=p.next=O,on.lanes|=R,ke|=R;w=w.next}while(w!==null&&w!==r);if(p===null?i=l:p.next=s,!br(l,n.memoizedState)&&(Yn=!0,T&&(e=gt,e!==null)))throw e;n.memoizedState=l,n.baseState=i,n.baseQueue=p,t.lastRenderedState=l}return a===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function Uo(n){var r=Ln(),e=r.queue;if(e===null)throw Error(c(311));e.lastRenderedReducer=n;var t=e.dispatch,a=e.pending,l=r.memoizedState;if(a!==null){e.pending=null;var i=a=a.next;do l=n(l,i.action),i=i.next;while(i!==a);br(l,r.memoizedState)||(Yn=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),e.lastRenderedState=l}return[l,t]}function Uu(n,r,e){var t=on,a=Ln(),l=yn;if(l){if(e===void 0)throw Error(c(407));e=e()}else e=r();var i=!br((Tn||a).memoizedState,e);if(i&&(a.memoizedState=e,Yn=!0),a=a.queue,ko(ku.bind(null,t,a,n),[n]),a.getSnapshot!==r||i||Zn!==null&&Zn.memoizedState.tag&1){if(t.flags|=2048,kt(9,{destroy:void 0},Ou.bind(null,t,a,e,r),null),Cn===null)throw Error(c(349));l||(re&127)!==0||wu(t,r,e)}return e}function wu(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=on.updateQueue,r===null?(r=gl(),on.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Ou(n,r,e,t){r.value=e,r.getSnapshot=t,Eu(r)&&_u(n)}function ku(n,r,e){return e(function(){Eu(r)&&_u(n)})}function Eu(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!br(n,e)}catch{return!0}}function _u(n){var r=He(n,2);r!==null&&mr(r,n,2)}function wo(n){var r=ar();if(typeof n=="function"){var e=n;if(n=e(),$e){xe(!0);try{e()}finally{xe(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ee,lastRenderedState:n},r}function Tu(n,r,e,t){return n.baseState=e,Fo(n,Tn,typeof t=="function"?t:ee)}function tp(n,r,e,t,a){if(Ol(n))throw Error(c(485));if(n=r.action,n!==null){var l={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};_.T!==null?e(!0):l.isTransition=!1,t(l),e=r.pending,e===null?(l.next=r.pending=l,ju(r,l)):(l.next=e.next,r.pending=e.next=l)}}function ju(n,r){var e=r.action,t=r.payload,a=n.state;if(r.isTransition){var l=_.T,i={};_.T=i;try{var s=e(a,t),p=_.S;p!==null&&p(i,s),Su(n,r,s)}catch(w){Oo(n,r,w)}finally{l!==null&&i.types!==null&&(l.types=i.types),_.T=l}}else try{l=e(a,t),Su(n,r,l)}catch(w){Oo(n,r,w)}}function Su(n,r,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(t){Cu(n,r,t)},function(t){return Oo(n,r,t)}):Cu(n,r,e)}function Cu(n,r,e){r.status="fulfilled",r.value=e,Ru(r),n.state=e,r=n.pending,r!==null&&(e=r.next,e===r?n.pending=null:(e=e.next,r.next=e,ju(n,e)))}function Oo(n,r,e){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do r.status="rejected",r.reason=e,Ru(r),r=r.next;while(r!==t)}n.action=null}function Ru(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function zu(n,r){return r}function Au(n,r){if(yn){var e=Cn.formState;if(e!==null){n:{var t=on;if(yn){if(zn){r:{for(var a=zn,l=Cr;a.nodeType!==8;){if(!l){a=null;break r}if(a=zr(a.nextSibling),a===null){a=null;break r}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){zn=zr(a.nextSibling),t=a.data==="F!";break n}}be(t)}t=!1}t&&(r=e[0])}}return e=ar(),e.memoizedState=e.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zu,lastRenderedState:r},e.queue=t,e=rd.bind(null,on,t),t.dispatch=e,t=wo(!1),l=So.bind(null,on,!1,t.queue),t=ar(),a={state:r,dispatch:null,action:n,pending:null},t.queue=a,e=tp.bind(null,on,a,l,e),a.dispatch=e,t.memoizedState=n,[r,e,!1]}function Wu(n){var r=Ln();return Mu(r,Tn,n)}function Mu(n,r,e){if(r=Fo(n,r,zu)[0],n=Fl(ee)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var t=xa(r)}catch(i){throw i===Bt?xl:i}else t=r;r=Ln();var a=r.queue,l=a.dispatch;return e!==r.memoizedState&&(on.flags|=2048,kt(9,{destroy:void 0},ap.bind(null,a,e),null)),[t,l,n]}function ap(n,r){n.action=r}function Du(n){var r=Ln(),e=Tn;if(e!==null)return Mu(r,e,n);Ln(),r=r.memoizedState,e=Ln();var t=e.queue.dispatch;return e.memoizedState=n,[r,t,!1]}function kt(n,r,e,t){return n={tag:n,create:e,deps:t,inst:r,next:null},r=on.updateQueue,r===null&&(r=gl(),on.updateQueue=r),e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n),n}function Vu(){return Ln().memoizedState}function Ul(n,r,e,t){var a=ar();on.flags|=n,a.memoizedState=kt(1|r,{destroy:void 0},e,t===void 0?null:t)}function wl(n,r,e,t){var a=Ln();t=t===void 0?null:t;var l=a.memoizedState.inst;Tn!==null&&t!==null&&vo(t,Tn.memoizedState.deps)?a.memoizedState=kt(r,l,e,t):(on.flags|=n,a.memoizedState=kt(1|r,l,e,t))}function Nu(n,r){Ul(8390656,8,n,r)}function ko(n,r){wl(2048,8,n,r)}function lp(n){on.flags|=4;var r=on.updateQueue;if(r===null)r=gl(),on.updateQueue=r,r.events=[n];else{var e=r.events;e===null?r.events=[n]:e.push(n)}}function Lu(n){var r=Ln().memoizedState;return lp({ref:r,nextImpl:n}),function(){if((On&2)!==0)throw Error(c(440));return r.impl.apply(void 0,arguments)}}function Hu(n,r){return wl(4,2,n,r)}function Zu(n,r){return wl(4,4,n,r)}function Yu(n,r){if(typeof r=="function"){n=n();var e=r(n);return function(){typeof e=="function"?e():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gu(n,r,e){e=e!=null?e.concat([n]):null,wl(4,4,Yu.bind(null,r,n),e)}function Eo(){}function Xu(n,r){var e=Ln();r=r===void 0?null:r;var t=e.memoizedState;return r!==null&&vo(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function Ju(n,r){var e=Ln();r=r===void 0?null:r;var t=e.memoizedState;if(r!==null&&vo(r,t[1]))return t[0];if(t=n(),$e){xe(!0);try{n()}finally{xe(!1)}}return e.memoizedState=[t,r],t}function _o(n,r,e){return e===void 0||(re&1073741824)!==0&&(hn&261930)===0?n.memoizedState=r:(n.memoizedState=e,n=Id(),on.lanes|=n,ke|=n,e)}function Iu(n,r,e,t){return br(e,r)?e:Ut.current!==null?(n=_o(n,e,t),br(n,r)||(Yn=!0),n):(re&42)===0||(re&1073741824)!==0&&(hn&261930)===0?(Yn=!0,n.memoizedState=e):(n=Id(),on.lanes|=n,ke|=n,r)}function qu(n,r,e,t,a){var l=D.p;D.p=l!==0&&8>l?l:8;var i=_.T,s={};_.T=s,So(n,!1,r,e);try{var p=a(),w=_.S;if(w!==null&&w(s,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var T=np(p,t);fa(n,r,T,Ur(n))}else fa(n,r,t,Ur(n))}catch(R){fa(n,r,{then:function(){},status:"rejected",reason:R},Ur())}finally{D.p=l,i!==null&&s.types!==null&&(i.types=s.types),_.T=i}}function ip(){}function To(n,r,e,t){if(n.tag!==5)throw Error(c(476));var a=Ku(n).queue;qu(n,a,r,I,e===null?ip:function(){return $u(n),e(t)})}function Ku(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ee,lastRenderedState:I},next:null};var e={};return r.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ee,lastRenderedState:e},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function $u(n){var r=Ku(n);r.next===null&&(r=n.alternate.memoizedState),fa(n,r.next.queue,{},Ur())}function jo(){return nr(ja)}function Pu(){return Ln().memoizedState}function nd(){return Ln().memoizedState}function op(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var e=Ur();n=ge(e);var t=Be(r,n,e);t!==null&&(mr(t,r,e),sa(t,r,e)),r={cache:lo()},n.payload=r;return}r=r.return}}function cp(n,r,e){var t=Ur();e={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Ol(n)?ed(r,e):(e=Ji(n,r,e,t),e!==null&&(mr(e,n,t),td(e,r,t)))}function rd(n,r,e){var t=Ur();fa(n,r,e,t)}function fa(n,r,e,t){var a={lane:t,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ol(n))ed(r,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var i=r.lastRenderedState,s=l(i,e);if(a.hasEagerState=!0,a.eagerState=s,br(s,i))return il(n,r,a,0),Cn===null&&ll(),!1}catch{}if(e=Ji(n,r,a,t),e!==null)return mr(e,n,t),td(e,r,t),!0}return!1}function So(n,r,e,t){if(t={lane:2,revertLane:uc(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(n)){if(r)throw Error(c(479))}else r=Ji(n,e,t,2),r!==null&&mr(r,n,2)}function Ol(n){var r=n.alternate;return n===on||r!==null&&r===on}function ed(n,r){wt=Ql=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function td(n,r,e){if((e&4194048)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,cs(n,e)}}var pa={readContext:nr,use:Bl,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};pa.useEffectEvent=Dn;var ad={readContext:nr,use:Bl,useCallback:function(n,r){return ar().memoizedState=[n,r===void 0?null:r],n},useContext:nr,useEffect:Nu,useImperativeHandle:function(n,r,e){e=e!=null?e.concat([n]):null,Ul(4194308,4,Yu.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Ul(4194308,4,n,r)},useInsertionEffect:function(n,r){Ul(4,2,n,r)},useMemo:function(n,r){var e=ar();r=r===void 0?null:r;var t=n();if($e){xe(!0);try{n()}finally{xe(!1)}}return e.memoizedState=[t,r],t},useReducer:function(n,r,e){var t=ar();if(e!==void 0){var a=e(r);if($e){xe(!0);try{e(r)}finally{xe(!1)}}}else a=r;return t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},t.queue=n,n=n.dispatch=cp.bind(null,on,n),[t.memoizedState,n]},useRef:function(n){var r=ar();return n={current:n},r.memoizedState=n},useState:function(n){n=wo(n);var r=n.queue,e=rd.bind(null,on,r);return r.dispatch=e,[n.memoizedState,e]},useDebugValue:Eo,useDeferredValue:function(n,r){var e=ar();return _o(e,n,r)},useTransition:function(){var n=wo(!1);return n=qu.bind(null,on,n.queue,!0,!1),ar().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,e){var t=on,a=ar();if(yn){if(e===void 0)throw Error(c(407));e=e()}else{if(e=r(),Cn===null)throw Error(c(349));(hn&127)!==0||wu(t,r,e)}a.memoizedState=e;var l={value:e,getSnapshot:r};return a.queue=l,Nu(ku.bind(null,t,l,n),[n]),t.flags|=2048,kt(9,{destroy:void 0},Ou.bind(null,t,l,e,r),null),e},useId:function(){var n=ar(),r=Cn.identifierPrefix;if(yn){var e=Yr,t=Zr;e=(t&~(1<<32-vr(t)-1)).toString(32)+e,r="_"+r+"R_"+e,e=yl++,0<e&&(r+="H"+e.toString(32)),r+="_"}else e=rp++,r="_"+r+"r_"+e.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:jo,useFormState:Au,useActionState:Au,useOptimistic:function(n){var r=ar();r.memoizedState=r.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=e,r=So.bind(null,on,!0,e),e.dispatch=r,[n,r]},useMemoCache:Bo,useCacheRefresh:function(){return ar().memoizedState=op.bind(null,on)},useEffectEvent:function(n){var r=ar(),e={impl:n};return r.memoizedState=e,function(){if((On&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}},Co={readContext:nr,use:Bl,useCallback:Xu,useContext:nr,useEffect:ko,useImperativeHandle:Gu,useInsertionEffect:Hu,useLayoutEffect:Zu,useMemo:Ju,useReducer:Fl,useRef:Vu,useState:function(){return Fl(ee)},useDebugValue:Eo,useDeferredValue:function(n,r){var e=Ln();return Iu(e,Tn.memoizedState,n,r)},useTransition:function(){var n=Fl(ee)[0],r=Ln().memoizedState;return[typeof n=="boolean"?n:xa(n),r]},useSyncExternalStore:Uu,useId:Pu,useHostTransitionStatus:jo,useFormState:Wu,useActionState:Wu,useOptimistic:function(n,r){var e=Ln();return Tu(e,Tn,n,r)},useMemoCache:Bo,useCacheRefresh:nd};Co.useEffectEvent=Lu;var ld={readContext:nr,use:Bl,useCallback:Xu,useContext:nr,useEffect:ko,useImperativeHandle:Gu,useInsertionEffect:Hu,useLayoutEffect:Zu,useMemo:Ju,useReducer:Uo,useRef:Vu,useState:function(){return Uo(ee)},useDebugValue:Eo,useDeferredValue:function(n,r){var e=Ln();return Tn===null?_o(e,n,r):Iu(e,Tn.memoizedState,n,r)},useTransition:function(){var n=Uo(ee)[0],r=Ln().memoizedState;return[typeof n=="boolean"?n:xa(n),r]},useSyncExternalStore:Uu,useId:Pu,useHostTransitionStatus:jo,useFormState:Du,useActionState:Du,useOptimistic:function(n,r){var e=Ln();return Tn!==null?Tu(e,Tn,n,r):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Bo,useCacheRefresh:nd};ld.useEffectEvent=Lu;function Ro(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:y({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var zo={enqueueSetState:function(n,r,e){n=n._reactInternals;var t=Ur(),a=ge(t);a.payload=r,e!=null&&(a.callback=e),r=Be(n,a,t),r!==null&&(mr(r,n,t),sa(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=Ur(),a=ge(t);a.tag=1,a.payload=r,e!=null&&(a.callback=e),r=Be(n,a,t),r!==null&&(mr(r,n,t),sa(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=Ur(),t=ge(e);t.tag=2,r!=null&&(t.callback=r),r=Be(n,t,e),r!==null&&(mr(r,n,e),sa(r,n,e))}};function id(n,r,e,t,a,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,i):r.prototype&&r.prototype.isPureReactComponent?!ra(e,t)||!ra(a,l):!0}function od(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&zo.enqueueReplaceState(r,r.state,null)}function Pe(n,r){var e=r;if("ref"in r){e={};for(var t in r)t!=="ref"&&(e[t]=r[t])}if(n=n.defaultProps){e===r&&(e=y({},e));for(var a in n)e[a]===void 0&&(e[a]=n[a])}return e}function cd(n){al(n)}function sd(n){console.error(n)}function ud(n){al(n)}function kl(n,r){try{var e=n.onUncaughtError;e(r.value,{componentStack:r.stack})}catch(t){setTimeout(function(){throw t})}}function dd(n,r,e){try{var t=n.onCaughtError;t(e.value,{componentStack:e.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ao(n,r,e){return e=ge(e),e.tag=3,e.payload={element:null},e.callback=function(){kl(n,r)},e}function md(n){return n=ge(n),n.tag=3,n}function xd(n,r,e,t){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){dd(r,e,t)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){dd(r,e,t),typeof a!="function"&&(Ee===null?Ee=new Set([this]):Ee.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})})}function sp(n,r,e,t,a){if(e.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(r=e.alternate,r!==null&&Qt(r,e,a,!0),e=yr.current,e!==null){switch(e.tag){case 31:case 13:return Rr===null?Dl():e.alternate===null&&Vn===0&&(Vn=3),e.flags&=-257,e.flags|=65536,e.lanes=a,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?e.updateQueue=new Set([t]):r.add(t),oc(n,t,a)),!1;case 22:return e.flags|=65536,t===fl?e.flags|=16384:(r=e.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([t])},e.updateQueue=r):(e=r.retryQueue,e===null?r.retryQueue=new Set([t]):e.add(t)),oc(n,t,a)),!1}throw Error(c(435,e.tag))}return oc(n,t,a),Dl(),!1}if(yn)return r=yr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=a,t!==no&&(n=Error(c(422),{cause:t}),aa(Tr(n,e)))):(t!==no&&(r=Error(c(423),{cause:t}),aa(Tr(r,e))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,t=Tr(t,e),a=Ao(n.stateNode,t,a),mo(n,a),Vn!==4&&(Vn=2)),!1;var l=Error(c(520),{cause:t});if(l=Tr(l,e),Fa===null?Fa=[l]:Fa.push(l),Vn!==4&&(Vn=2),r===null)return!0;t=Tr(t,e),e=r;do{switch(e.tag){case 3:return e.flags|=65536,n=a&-a,e.lanes|=n,n=Ao(e.stateNode,t,n),mo(e,n),!1;case 1:if(r=e.type,l=e.stateNode,(e.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ee===null||!Ee.has(l))))return e.flags|=65536,a&=-a,e.lanes|=a,a=md(a),xd(a,n,e,t),mo(e,a),!1}e=e.return}while(e!==null);return!1}var Wo=Error(c(461)),Yn=!1;function rr(n,r,e,t){r.child=n===null?vu(r,null,e,t):Ke(r,n.child,e,t)}function fd(n,r,e,t,a){e=e.render;var l=r.ref;if("ref"in t){var i={};for(var s in t)s!=="ref"&&(i[s]=t[s])}else i=t;return Xe(r),t=bo(n,r,e,i,l,a),s=Qo(),n!==null&&!Yn?(yo(n,r,a),te(n,r,a)):(yn&&s&&$i(r),r.flags|=1,rr(n,r,t,a),r.child)}function pd(n,r,e,t,a){if(n===null){var l=e.type;return typeof l=="function"&&!Ii(l)&&l.defaultProps===void 0&&e.compare===null?(r.tag=15,r.type=l,hd(n,r,l,t,a)):(n=cl(e.type,null,t,r,r.mode,a),n.ref=r.ref,n.return=r,r.child=n)}if(l=n.child,!Yo(n,a)){var i=l.memoizedProps;if(e=e.compare,e=e!==null?e:ra,e(i,t)&&n.ref===r.ref)return te(n,r,a)}return r.flags|=1,n=Kr(l,t),n.ref=r.ref,n.return=r,r.child=n}function hd(n,r,e,t,a){if(n!==null){var l=n.memoizedProps;if(ra(l,t)&&n.ref===r.ref)if(Yn=!1,r.pendingProps=t=l,Yo(n,a))(n.flags&131072)!==0&&(Yn=!0);else return r.lanes=n.lanes,te(n,r,a)}return Mo(n,r,e,t,a)}function vd(n,r,e,t){var a=t.children,l=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((r.flags&128)!==0){if(l=l!==null?l.baseLanes|e:e,n!==null){for(t=r.child=n.child,a=0;t!==null;)a=a|t.lanes|t.childLanes,t=t.sibling;t=a&~l}else t=0,r.child=null;return bd(n,r,l,e,t)}if((e&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&ml(r,l!==null?l.cachePool:null),l!==null?yu(r,l):fo(),gu(r);else return t=r.lanes=536870912,bd(n,r,l!==null?l.baseLanes|e:e,e,t)}else l!==null?(ml(r,l.cachePool),yu(r,l),Ue(),r.memoizedState=null):(n!==null&&ml(r,null),fo(),Ue());return rr(n,r,a,e),r.child}function ha(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function bd(n,r,e,t,a){var l=oo();return l=l===null?null:{parent:Hn._currentValue,pool:l},r.memoizedState={baseLanes:e,cachePool:l},n!==null&&ml(r,null),fo(),gu(r),n!==null&&Qt(n,r,t,!0),r.childLanes=a,null}function El(n,r){return r=Tl({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function Qd(n,r,e){return Ke(r,n.child,null,e),n=El(r,r.pendingProps),n.flags|=2,gr(r),r.memoizedState=null,n}function up(n,r,e){var t=r.pendingProps,a=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(yn){if(t.mode==="hidden")return n=El(r,t),r.lanes=536870912,ha(null,n);if(ho(r),(n=zn)?(n=jm(n,Cr),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:he!==null?{id:Zr,overflow:Yr}:null,retryLane:536870912,hydrationErrors:null},e=eu(n),e.return=r,r.child=e,Pn=r,zn=null)):n=null,n===null)throw be(r);return r.lanes=536870912,null}return El(r,t)}var l=n.memoizedState;if(l!==null){var i=l.dehydrated;if(ho(r),a)if(r.flags&256)r.flags&=-257,r=Qd(n,r,e);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(c(558));else if(Yn||Qt(n,r,e,!1),a=(e&n.childLanes)!==0,Yn||a){if(t=Cn,t!==null&&(i=ss(t,e),i!==0&&i!==l.retryLane))throw l.retryLane=i,He(n,i),mr(t,n,i),Wo;Dl(),r=Qd(n,r,e)}else n=l.treeContext,zn=zr(i.nextSibling),Pn=r,yn=!0,ve=null,Cr=!1,n!==null&&lu(r,n),r=El(r,t),r.flags|=4096;return r}return n=Kr(n.child,{mode:t.mode,children:t.children}),n.ref=r.ref,r.child=n,n.return=r,n}function _l(n,r){var e=r.ref;if(e===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(c(284));(n===null||n.ref!==e)&&(r.flags|=4194816)}}function Mo(n,r,e,t,a){return Xe(r),e=bo(n,r,e,t,void 0,a),t=Qo(),n!==null&&!Yn?(yo(n,r,a),te(n,r,a)):(yn&&t&&$i(r),r.flags|=1,rr(n,r,e,a),r.child)}function yd(n,r,e,t,a,l){return Xe(r),r.updateQueue=null,e=Fu(r,t,e,a),Bu(n),t=Qo(),n!==null&&!Yn?(yo(n,r,l),te(n,r,l)):(yn&&t&&$i(r),r.flags|=1,rr(n,r,e,l),r.child)}function gd(n,r,e,t,a){if(Xe(r),r.stateNode===null){var l=pt,i=e.contextType;typeof i=="object"&&i!==null&&(l=nr(i)),l=new e(t,l),r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=zo,r.stateNode=l,l._reactInternals=r,l=r.stateNode,l.props=t,l.state=r.memoizedState,l.refs={},so(r),i=e.contextType,l.context=typeof i=="object"&&i!==null?nr(i):pt,l.state=r.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ro(r,e,i,t),l.state=r.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&zo.enqueueReplaceState(l,l.state,null),da(r,t,l,a),ua(),l.state=r.memoizedState),typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!0}else if(n===null){l=r.stateNode;var s=r.memoizedProps,p=Pe(e,s);l.props=p;var w=l.context,T=e.contextType;i=pt,typeof T=="object"&&T!==null&&(i=nr(T));var R=e.getDerivedStateFromProps;T=typeof R=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=r.pendingProps!==s,T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||w!==i)&&od(r,l,t,i),ye=!1;var O=r.memoizedState;l.state=O,da(r,t,l,a),ua(),w=r.memoizedState,s||O!==w||ye?(typeof R=="function"&&(Ro(r,e,R,t),w=r.memoizedState),(p=ye||id(r,e,p,t,O,w,i))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=w),l.props=t,l.state=w,l.context=i,t=p):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,uo(n,r),i=r.memoizedProps,T=Pe(e,i),l.props=T,R=r.pendingProps,O=l.context,w=e.contextType,p=pt,typeof w=="object"&&w!==null&&(p=nr(w)),s=e.getDerivedStateFromProps,(w=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==R||O!==p)&&od(r,l,t,p),ye=!1,O=r.memoizedState,l.state=O,da(r,t,l,a),ua();var k=r.memoizedState;i!==R||O!==k||ye||n!==null&&n.dependencies!==null&&ul(n.dependencies)?(typeof s=="function"&&(Ro(r,e,s,t),k=r.memoizedState),(T=ye||id(r,e,T,t,O,k,p)||n!==null&&n.dependencies!==null&&ul(n.dependencies))?(w||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,k,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,k,p)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&O===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&O===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=k),l.props=t,l.state=k,l.context=p,t=T):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&O===n.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&O===n.memoizedState||(r.flags|=1024),t=!1)}return l=t,_l(n,r),t=(r.flags&128)!==0,l||t?(l=r.stateNode,e=t&&typeof e.getDerivedStateFromError!="function"?null:l.render(),r.flags|=1,n!==null&&t?(r.child=Ke(r,n.child,null,a),r.child=Ke(r,null,e,a)):rr(n,r,e,a),r.memoizedState=l.state,n=r.child):n=te(n,r,a),n}function Bd(n,r,e,t){return Ye(),r.flags|=256,rr(n,r,e,t),r.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vo(n){return{baseLanes:n,cachePool:du()}}function No(n,r,e){return n=n!==null?n.childLanes&~e:0,r&&(n|=Fr),n}function Fd(n,r,e){var t=r.pendingProps,a=!1,l=(r.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(Nn.current&2)!==0),i&&(a=!0,r.flags&=-129),i=(r.flags&32)!==0,r.flags&=-33,n===null){if(yn){if(a?Fe(r):Ue(),(n=zn)?(n=jm(n,Cr),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:he!==null?{id:Zr,overflow:Yr}:null,retryLane:536870912,hydrationErrors:null},e=eu(n),e.return=r,r.child=e,Pn=r,zn=null)):n=null,n===null)throw be(r);return Fc(n)?r.lanes=32:r.lanes=536870912,null}var s=t.children;return t=t.fallback,a?(Ue(),a=r.mode,s=Tl({mode:"hidden",children:s},a),t=Ze(t,a,e,null),s.return=r,t.return=r,s.sibling=t,r.child=s,t=r.child,t.memoizedState=Vo(e),t.childLanes=No(n,i,e),r.memoizedState=Do,ha(null,t)):(Fe(r),Lo(r,s))}var p=n.memoizedState;if(p!==null&&(s=p.dehydrated,s!==null)){if(l)r.flags&256?(Fe(r),r.flags&=-257,r=Ho(n,r,e)):r.memoizedState!==null?(Ue(),r.child=n.child,r.flags|=128,r=null):(Ue(),s=t.fallback,a=r.mode,t=Tl({mode:"visible",children:t.children},a),s=Ze(s,a,e,null),s.flags|=2,t.return=r,s.return=r,t.sibling=s,r.child=t,Ke(r,n.child,null,e),t=r.child,t.memoizedState=Vo(e),t.childLanes=No(n,i,e),r.memoizedState=Do,r=ha(null,t));else if(Fe(r),Fc(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var w=i.dgst;i=w,t=Error(c(419)),t.stack="",t.digest=i,aa({value:t,source:null,stack:null}),r=Ho(n,r,e)}else if(Yn||Qt(n,r,e,!1),i=(e&n.childLanes)!==0,Yn||i){if(i=Cn,i!==null&&(t=ss(i,e),t!==0&&t!==p.retryLane))throw p.retryLane=t,He(n,t),mr(i,n,t),Wo;Bc(s)||Dl(),r=Ho(n,r,e)}else Bc(s)?(r.flags|=192,r.child=n.child,r=null):(n=p.treeContext,zn=zr(s.nextSibling),Pn=r,yn=!0,ve=null,Cr=!1,n!==null&&lu(r,n),r=Lo(r,t.children),r.flags|=4096);return r}return a?(Ue(),s=t.fallback,a=r.mode,p=n.child,w=p.sibling,t=Kr(p,{mode:"hidden",children:t.children}),t.subtreeFlags=p.subtreeFlags&65011712,w!==null?s=Kr(w,s):(s=Ze(s,a,e,null),s.flags|=2),s.return=r,t.return=r,t.sibling=s,r.child=t,ha(null,t),t=r.child,s=n.child.memoizedState,s===null?s=Vo(e):(a=s.cachePool,a!==null?(p=Hn._currentValue,a=a.parent!==p?{parent:p,pool:p}:a):a=du(),s={baseLanes:s.baseLanes|e,cachePool:a}),t.memoizedState=s,t.childLanes=No(n,i,e),r.memoizedState=Do,ha(n.child,t)):(Fe(r),e=n.child,n=e.sibling,e=Kr(e,{mode:"visible",children:t.children}),e.return=r,e.sibling=null,n!==null&&(i=r.deletions,i===null?(r.deletions=[n],r.flags|=16):i.push(n)),r.child=e,r.memoizedState=null,e)}function Lo(n,r){return r=Tl({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Tl(n,r){return n=Qr(22,n,null,r),n.lanes=0,n}function Ho(n,r,e){return Ke(r,n.child,null,e),n=Lo(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ud(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),to(n.return,r,e)}function Zo(n,r,e,t,a,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:a,treeForkCount:l}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=e,i.tailMode=a,i.treeForkCount=l)}function wd(n,r,e){var t=r.pendingProps,a=t.revealOrder,l=t.tail;t=t.children;var i=Nn.current,s=(i&2)!==0;if(s?(i=i&1|2,r.flags|=128):i&=1,M(Nn,i),rr(n,r,t,e),t=yn?ta:0,!s&&n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ud(n,e,r);else if(n.tag===19)Ud(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(a){case"forwards":for(e=r.child,a=null;e!==null;)n=e.alternate,n!==null&&bl(n)===null&&(a=e),e=e.sibling;e=a,e===null?(a=r.child,r.child=null):(a=e.sibling,e.sibling=null),Zo(r,!1,a,e,l,t);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=r.child,r.child=null;a!==null;){if(n=a.alternate,n!==null&&bl(n)===null){r.child=a;break}n=a.sibling,a.sibling=e,e=a,a=n}Zo(r,!0,e,null,l,t);break;case"together":Zo(r,!1,null,null,void 0,t);break;default:r.memoizedState=null}return r.child}function te(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),ke|=r.lanes,(e&r.childLanes)===0)if(n!==null){if(Qt(n,r,e,!1),(e&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(c(153));if(r.child!==null){for(n=r.child,e=Kr(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Kr(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Yo(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&ul(n)))}function dp(n,r,e){switch(r.tag){case 3:bn(r,r.stateNode.containerInfo),Qe(r,Hn,n.memoizedState.cache),Ye();break;case 27:case 5:lr(r);break;case 4:bn(r,r.stateNode.containerInfo);break;case 10:Qe(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,ho(r),null;break;case 13:var t=r.memoizedState;if(t!==null)return t.dehydrated!==null?(Fe(r),r.flags|=128,null):(e&r.child.childLanes)!==0?Fd(n,r,e):(Fe(r),n=te(n,r,e),n!==null?n.sibling:null);Fe(r);break;case 19:var a=(n.flags&128)!==0;if(t=(e&r.childLanes)!==0,t||(Qt(n,r,e,!1),t=(e&r.childLanes)!==0),a){if(t)return wd(n,r,e);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),M(Nn,Nn.current),t)break;return null;case 22:return r.lanes=0,vd(n,r,e,r.pendingProps);case 24:Qe(r,Hn,n.memoizedState.cache)}return te(n,r,e)}function Od(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps)Yn=!0;else{if(!Yo(n,e)&&(r.flags&128)===0)return Yn=!1,dp(n,r,e);Yn=(n.flags&131072)!==0}else Yn=!1,yn&&(r.flags&1048576)!==0&&au(r,ta,r.index);switch(r.lanes=0,r.tag){case 16:n:{var t=r.pendingProps;if(n=Ie(r.elementType),r.type=n,typeof n=="function")Ii(n)?(t=Pe(n,t),r.tag=1,r=gd(null,r,n,t,e)):(r.tag=0,r=Mo(null,r,n,t,e));else{if(n!=null){var a=n.$$typeof;if(a===Bn){r.tag=11,r=fd(null,r,n,t,e);break n}else if(a===P){r.tag=14,r=pd(null,r,n,t,e);break n}}throw r=J(n)||n,Error(c(306,r,""))}}return r;case 0:return Mo(n,r,r.type,r.pendingProps,e);case 1:return t=r.type,a=Pe(t,r.pendingProps),gd(n,r,t,a,e);case 3:n:{if(bn(r,r.stateNode.containerInfo),n===null)throw Error(c(387));t=r.pendingProps;var l=r.memoizedState;a=l.element,uo(n,r),da(r,t,null,e);var i=r.memoizedState;if(t=i.cache,Qe(r,Hn,t),t!==l.cache&&ao(r,[Hn],e,!0),ua(),t=i.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:i.cache},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){r=Bd(n,r,t,e);break n}else if(t!==a){a=Tr(Error(c(424)),r),aa(a),r=Bd(n,r,t,e);break n}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,zn=zr(n.firstChild),Pn=r,yn=!0,ve=null,Cr=!0,e=vu(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ye(),t===a){r=te(n,r,e);break n}rr(n,r,t,e)}r=r.child}return r;case 26:return _l(n,r),n===null?(e=Wm(r.type,null,r.pendingProps,null))?r.memoizedState=e:yn||(e=r.type,n=r.pendingProps,t=Gl(rn.current).createElement(e),t[$n]=r,t[ir]=n,er(t,e,n),qn(t),r.stateNode=t):r.memoizedState=Wm(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return lr(r),n===null&&yn&&(t=r.stateNode=Rm(r.type,r.pendingProps,rn.current),Pn=r,Cr=!0,a=zn,Se(r.type)?(Uc=a,zn=zr(t.firstChild)):zn=a),rr(n,r,r.pendingProps.children,e),_l(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&yn&&((a=t=zn)&&(t=Np(t,r.type,r.pendingProps,Cr),t!==null?(r.stateNode=t,Pn=r,zn=zr(t.firstChild),Cr=!1,a=!0):a=!1),a||be(r)),lr(r),a=r.type,l=r.pendingProps,i=n!==null?n.memoizedProps:null,t=l.children,Qc(a,l)?t=null:i!==null&&Qc(a,i)&&(r.flags|=32),r.memoizedState!==null&&(a=bo(n,r,ep,null,null,e),ja._currentValue=a),_l(n,r),rr(n,r,t,e),r.child;case 6:return n===null&&yn&&((n=e=zn)&&(e=Lp(e,r.pendingProps,Cr),e!==null?(r.stateNode=e,Pn=r,zn=null,n=!0):n=!1),n||be(r)),null;case 13:return Fd(n,r,e);case 4:return bn(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Ke(r,null,t,e):rr(n,r,t,e),r.child;case 11:return fd(n,r,r.type,r.pendingProps,e);case 7:return rr(n,r,r.pendingProps,e),r.child;case 8:return rr(n,r,r.pendingProps.children,e),r.child;case 12:return rr(n,r,r.pendingProps.children,e),r.child;case 10:return t=r.pendingProps,Qe(r,r.type,t.value),rr(n,r,t.children,e),r.child;case 9:return a=r.type._context,t=r.pendingProps.children,Xe(r),a=nr(a),t=t(a),r.flags|=1,rr(n,r,t,e),r.child;case 14:return pd(n,r,r.type,r.pendingProps,e);case 15:return hd(n,r,r.type,r.pendingProps,e);case 19:return wd(n,r,e);case 31:return up(n,r,e);case 22:return vd(n,r,e,r.pendingProps);case 24:return Xe(r),t=nr(Hn),n===null?(a=oo(),a===null&&(a=Cn,l=lo(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=e),a=l),r.memoizedState={parent:t,cache:a},so(r),Qe(r,Hn,a)):((n.lanes&e)!==0&&(uo(n,r),da(r,null,null,e),ua()),a=n.memoizedState,l=r.memoizedState,a.parent!==t?(a={parent:t,cache:t},r.memoizedState=a,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=a),Qe(r,Hn,t)):(t=l.cache,Qe(r,Hn,t),t!==a.cache&&ao(r,[Hn],e,!0))),rr(n,r,r.pendingProps.children,e),r.child;case 29:throw r.pendingProps}throw Error(c(156,r.tag))}function ae(n){n.flags|=4}function Go(n,r,e,t,a){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(a&335544128)===a)if(n.stateNode.complete)n.flags|=8192;else if(Pd())n.flags|=8192;else throw qe=fl,co}else n.flags&=-16777217}function kd(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Lm(r))if(Pd())n.flags|=8192;else throw qe=fl,co}function jl(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?is():536870912,n.lanes|=r,jt|=r)}function va(n,r){if(!yn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var a=n.child;a!==null;)e|=a.lanes|a.childLanes,t|=a.subtreeFlags&65011712,t|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)e|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function mp(n,r,e){var t=r.pendingProps;switch(Pi(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return An(r),null;case 3:return e=r.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),r.memoizedState.cache!==t&&(r.flags|=2048),ne(Hn),Qn(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(bt(r)?ae(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ro())),An(r),null;case 26:var a=r.type,l=r.memoizedState;return n===null?(ae(r),l!==null?(An(r),kd(r,l)):(An(r),Go(r,a,null,t,e))):l?l!==n.memoizedState?(ae(r),An(r),kd(r,l)):(An(r),r.flags&=-16777217):(n=n.memoizedProps,n!==t&&ae(r),An(r),Go(r,a,n,t,e)),null;case 27:if(xr(r),e=rn.current,a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&ae(r);else{if(!t){if(r.stateNode===null)throw Error(c(166));return An(r),null}n=H.current,bt(r)?iu(r):(n=Rm(a,t,e),r.stateNode=n,ae(r))}return An(r),null;case 5:if(xr(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==t&&ae(r);else{if(!t){if(r.stateNode===null)throw Error(c(166));return An(r),null}if(l=H.current,bt(r))iu(r);else{var i=Gl(rn.current);switch(l){case 1:l=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=i.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?i.createElement(a,{is:t.is}):i.createElement(a)}}l[$n]=r,l[ir]=t;n:for(i=r.child;i!==null;){if(i.tag===5||i.tag===6)l.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break n;for(;i.sibling===null;){if(i.return===null||i.return===r)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}r.stateNode=l;n:switch(er(l,a,t),a){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}t&&ae(r)}}return An(r),Go(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,e),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==t&&ae(r);else{if(typeof t!="string"&&r.stateNode===null)throw Error(c(166));if(n=rn.current,bt(r)){if(n=r.stateNode,e=r.memoizedProps,t=null,a=Pn,a!==null)switch(a.tag){case 27:case 5:t=a.memoizedProps}n[$n]=r,n=!!(n.nodeValue===e||t!==null&&t.suppressHydrationWarning===!0||Fm(n.nodeValue,e)),n||be(r,!0)}else n=Gl(n).createTextNode(t),n[$n]=r,r.stateNode=n}return An(r),null;case 31:if(e=r.memoizedState,n===null||n.memoizedState!==null){if(t=bt(r),e!==null){if(n===null){if(!t)throw Error(c(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(557));n[$n]=r}else Ye(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),n=!1}else e=ro(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=e),n=!0;if(!n)return r.flags&256?(gr(r),r):(gr(r),null);if((r.flags&128)!==0)throw Error(c(558))}return An(r),null;case 13:if(t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=bt(r),t!==null&&t.dehydrated!==null){if(n===null){if(!a)throw Error(c(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[$n]=r}else Ye(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),a=!1}else a=ro(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return r.flags&256?(gr(r),r):(gr(r),null)}return gr(r),(r.flags&128)!==0?(r.lanes=e,r):(e=t!==null,n=n!==null&&n.memoizedState!==null,e&&(t=r.child,a=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(a=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048)),e!==n&&e&&(r.child.flags|=8192),jl(r,r.updateQueue),An(r),null);case 4:return Qn(),n===null&&fc(r.stateNode.containerInfo),An(r),null;case 10:return ne(r.type),An(r),null;case 19:if(C(Nn),t=r.memoizedState,t===null)return An(r),null;if(a=(r.flags&128)!==0,l=t.rendering,l===null)if(a)va(t,!1);else{if(Vn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(l=bl(n),l!==null){for(r.flags|=128,va(t,!1),n=l.updateQueue,r.updateQueue=n,jl(r,n),r.subtreeFlags=0,n=e,e=r.child;e!==null;)ru(e,n),e=e.sibling;return M(Nn,Nn.current&1|2),yn&&$r(r,t.treeForkCount),r.child}n=n.sibling}t.tail!==null&&pr()>Al&&(r.flags|=128,a=!0,va(t,!1),r.lanes=4194304)}else{if(!a)if(n=bl(l),n!==null){if(r.flags|=128,a=!0,n=n.updateQueue,r.updateQueue=n,jl(r,n),va(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!yn)return An(r),null}else 2*pr()-t.renderingStartTime>Al&&e!==536870912&&(r.flags|=128,a=!0,va(t,!1),r.lanes=4194304);t.isBackwards?(l.sibling=r.child,r.child=l):(n=t.last,n!==null?n.sibling=l:r.child=l,t.last=l)}return t.tail!==null?(n=t.tail,t.rendering=n,t.tail=n.sibling,t.renderingStartTime=pr(),n.sibling=null,e=Nn.current,M(Nn,a?e&1|2:e&1),yn&&$r(r,t.treeForkCount),n):(An(r),null);case 22:case 23:return gr(r),po(),t=r.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(r.flags|=8192):t&&(r.flags|=8192),t?(e&536870912)!==0&&(r.flags&128)===0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),e=r.updateQueue,e!==null&&jl(r,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==e&&(r.flags|=2048),n!==null&&C(Je),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),r.memoizedState.cache!==e&&(r.flags|=2048),ne(Hn),An(r),null;case 25:return null;case 30:return null}throw Error(c(156,r.tag))}function xp(n,r){switch(Pi(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ne(Hn),Qn(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return xr(r),null;case 31:if(r.memoizedState!==null){if(gr(r),r.alternate===null)throw Error(c(340));Ye()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(gr(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Ye()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return C(Nn),null;case 4:return Qn(),null;case 10:return ne(r.type),null;case 22:case 23:return gr(r),po(),n!==null&&C(Je),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return ne(Hn),null;case 25:return null;default:return null}}function Ed(n,r){switch(Pi(r),r.tag){case 3:ne(Hn),Qn();break;case 26:case 27:case 5:xr(r);break;case 4:Qn();break;case 31:r.memoizedState!==null&&gr(r);break;case 13:gr(r);break;case 19:C(Nn);break;case 10:ne(r.type);break;case 22:case 23:gr(r),po(),n!==null&&C(Je);break;case 24:ne(Hn)}}function ba(n,r){try{var e=r.updateQueue,t=e!==null?e.lastEffect:null;if(t!==null){var a=t.next;e=a;do{if((e.tag&n)===n){t=void 0;var l=e.create,i=e.inst;t=l(),i.destroy=t}e=e.next}while(e!==a)}}catch(s){En(r,r.return,s)}}function we(n,r,e){try{var t=r.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&n)===n){var i=t.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,a=r;var p=e,w=s;try{w()}catch(T){En(a,p,T)}}}t=t.next}while(t!==l)}}catch(T){En(r,r.return,T)}}function _d(n){var r=n.updateQueue;if(r!==null){var e=n.stateNode;try{Qu(r,e)}catch(t){En(n,n.return,t)}}}function Td(n,r,e){e.props=Pe(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(t){En(n,r,t)}}function Qa(n,r){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof e=="function"?n.refCleanup=e(t):e.current=t}}catch(a){En(n,r,a)}}function Gr(n,r){var e=n.ref,t=n.refCleanup;if(e!==null)if(typeof t=="function")try{t()}catch(a){En(n,r,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){En(n,r,a)}else e.current=null}function jd(n){var r=n.type,e=n.memoizedProps,t=n.stateNode;try{n:switch(r){case"button":case"input":case"select":case"textarea":e.autoFocus&&t.focus();break n;case"img":e.src?t.src=e.src:e.srcSet&&(t.srcset=e.srcSet)}}catch(a){En(n,n.return,a)}}function Xo(n,r,e){try{var t=n.stateNode;zp(t,n.type,e,r),t[ir]=r}catch(a){En(n,n.return,a)}}function Sd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Se(n.type)||n.tag===4}function Jo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Sd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Se(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Io(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,r):(r=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.appendChild(n),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=Ir));else if(t!==4&&(t===27&&Se(n.type)&&(e=n.stateNode,r=null),n=n.child,n!==null))for(Io(n,r,e),n=n.sibling;n!==null;)Io(n,r,e),n=n.sibling}function Sl(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(t===27&&Se(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(Sl(n,r,e),n=n.sibling;n!==null;)Sl(n,r,e),n=n.sibling}function Cd(n){var r=n.stateNode,e=n.memoizedProps;try{for(var t=n.type,a=r.attributes;a.length;)r.removeAttributeNode(a[0]);er(r,t,e),r[$n]=n,r[ir]=e}catch(l){En(n,n.return,l)}}var le=!1,Gn=!1,qo=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,Kn=null;function fp(n,r){if(n=n.containerInfo,vc=Pl,n=Gs(n),Li(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var a=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{e.nodeType,l.nodeType}catch{e=null;break n}var i=0,s=-1,p=-1,w=0,T=0,R=n,O=null;r:for(;;){for(var k;R!==e||a!==0&&R.nodeType!==3||(s=i+a),R!==l||t!==0&&R.nodeType!==3||(p=i+t),R.nodeType===3&&(i+=R.nodeValue.length),(k=R.firstChild)!==null;)O=R,R=k;for(;;){if(R===n)break r;if(O===e&&++w===a&&(s=i),O===l&&++T===t&&(p=i),(k=R.nextSibling)!==null)break;R=O,O=R.parentNode}R=k}e=s===-1||p===-1?null:{start:s,end:p}}else e=null}e=e||{start:0,end:0}}else e=null;for(bc={focusedElem:n,selectionRange:e},Pl=!1,Kn=r;Kn!==null;)if(r=Kn,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Kn=n;else for(;Kn!==null;){switch(r=Kn,l=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(e=0;e<n.length;e++)a=n[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,e=r,a=l.memoizedProps,l=l.memoizedState,t=e.stateNode;try{var Z=Pe(e.type,a);n=t.getSnapshotBeforeUpdate(Z,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(nn){En(e,e.return,nn)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,e=n.nodeType,e===9)gc(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":gc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(c(163))}if(n=r.sibling,n!==null){n.return=r.return,Kn=n;break}Kn=r.return}}function zd(n,r,e){var t=e.flags;switch(e.tag){case 0:case 11:case 15:oe(n,e),t&4&&ba(5,e);break;case 1:if(oe(n,e),t&4)if(n=e.stateNode,r===null)try{n.componentDidMount()}catch(i){En(e,e.return,i)}else{var a=Pe(e.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(a,r,n.__reactInternalSnapshotBeforeUpdate)}catch(i){En(e,e.return,i)}}t&64&&_d(e),t&512&&Qa(e,e.return);break;case 3:if(oe(n,e),t&64&&(n=e.updateQueue,n!==null)){if(r=null,e.child!==null)switch(e.child.tag){case 27:case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}try{Qu(n,r)}catch(i){En(e,e.return,i)}}break;case 27:r===null&&t&4&&Cd(e);case 26:case 5:oe(n,e),r===null&&t&4&&jd(e),t&512&&Qa(e,e.return);break;case 12:oe(n,e);break;case 31:oe(n,e),t&4&&Md(n,e);break;case 13:oe(n,e),t&4&&Dd(n,e),t&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=Fp.bind(null,e),Hp(n,e))));break;case 22:if(t=e.memoizedState!==null||le,!t){r=r!==null&&r.memoizedState!==null||Gn,a=le;var l=Gn;le=t,(Gn=r)&&!l?ce(n,e,(e.subtreeFlags&8772)!==0):oe(n,e),le=a,Gn=l}break;case 30:break;default:oe(n,e)}}function Ad(n){var r=n.alternate;r!==null&&(n.alternate=null,Ad(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&wi(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Wn=null,cr=!1;function ie(n,r,e){for(e=e.child;e!==null;)Wd(n,r,e),e=e.sibling}function Wd(n,r,e){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Ht,e)}catch{}switch(e.tag){case 26:Gn||Gr(e,r),ie(n,r,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Gn||Gr(e,r);var t=Wn,a=cr;Se(e.type)&&(Wn=e.stateNode,cr=!1),ie(n,r,e),Ea(e.stateNode),Wn=t,cr=a;break;case 5:Gn||Gr(e,r);case 6:if(t=Wn,a=cr,Wn=null,ie(n,r,e),Wn=t,cr=a,Wn!==null)if(cr)try{(Wn.nodeType===9?Wn.body:Wn.nodeName==="HTML"?Wn.ownerDocument.body:Wn).removeChild(e.stateNode)}catch(l){En(e,r,l)}else try{Wn.removeChild(e.stateNode)}catch(l){En(e,r,l)}break;case 18:Wn!==null&&(cr?(n=Wn,_m(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Dt(n)):_m(Wn,e.stateNode));break;case 4:t=Wn,a=cr,Wn=e.stateNode.containerInfo,cr=!0,ie(n,r,e),Wn=t,cr=a;break;case 0:case 11:case 14:case 15:we(2,e,r),Gn||we(4,e,r),ie(n,r,e);break;case 1:Gn||(Gr(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"&&Td(e,r,t)),ie(n,r,e);break;case 21:ie(n,r,e);break;case 22:Gn=(t=Gn)||e.memoizedState!==null,ie(n,r,e),Gn=t;break;default:ie(n,r,e)}}function Md(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Dt(n)}catch(e){En(r,r.return,e)}}}function Dd(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Dt(n)}catch(e){En(r,r.return,e)}}function pp(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Rd),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Rd),r;default:throw Error(c(435,n.tag))}}function Cl(n,r){var e=pp(n);r.forEach(function(t){if(!e.has(t)){e.add(t);var a=Up.bind(null,n,t);t.then(a,a)}})}function sr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var a=e[t],l=n,i=r,s=i;n:for(;s!==null;){switch(s.tag){case 27:if(Se(s.type)){Wn=s.stateNode,cr=!1;break n}break;case 5:Wn=s.stateNode,cr=!1;break n;case 3:case 4:Wn=s.stateNode.containerInfo,cr=!0;break n}s=s.return}if(Wn===null)throw Error(c(160));Wd(l,i,a),Wn=null,cr=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Vd(r,n),r=r.sibling}var Dr=null;function Vd(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sr(r,n),ur(n),t&4&&(we(3,n,n.return),ba(3,n),we(5,n,n.return));break;case 1:sr(r,n),ur(n),t&512&&(Gn||e===null||Gr(e,e.return)),t&64&&le&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?t:e.concat(t))));break;case 26:var a=Dr;if(sr(r,n),ur(n),t&512&&(Gn||e===null||Gr(e,e.return)),t&4){var l=e!==null?e.memoizedState:null;if(t=n.memoizedState,e===null)if(t===null)if(n.stateNode===null){n:{t=n.type,e=n.memoizedProps,a=a.ownerDocument||a;r:switch(t){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Gt]||l[$n]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(t),a.head.insertBefore(l,a.querySelector("head > title"))),er(l,t,e),l[$n]=n,qn(l),t=l;break n;case"link":var i=Vm("link","href",a).get(t+(e.href||""));if(i){for(var s=0;s<i.length;s++)if(l=i[s],l.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&l.getAttribute("rel")===(e.rel==null?null:e.rel)&&l.getAttribute("title")===(e.title==null?null:e.title)&&l.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(s,1);break r}}l=a.createElement(t),er(l,t,e),a.head.appendChild(l);break;case"meta":if(i=Vm("meta","content",a).get(t+(e.content||""))){for(s=0;s<i.length;s++)if(l=i[s],l.getAttribute("content")===(e.content==null?null:""+e.content)&&l.getAttribute("name")===(e.name==null?null:e.name)&&l.getAttribute("property")===(e.property==null?null:e.property)&&l.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&l.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(s,1);break r}}l=a.createElement(t),er(l,t,e),a.head.appendChild(l);break;default:throw Error(c(468,t))}l[$n]=n,qn(l),t=l}n.stateNode=t}else Nm(a,n.type,n.stateNode);else n.stateNode=Dm(a,t,n.memoizedProps);else l!==t?(l===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):l.count--,t===null?Nm(a,n.type,n.stateNode):Dm(a,t,n.memoizedProps)):t===null&&n.stateNode!==null&&Xo(n,n.memoizedProps,e.memoizedProps)}break;case 27:sr(r,n),ur(n),t&512&&(Gn||e===null||Gr(e,e.return)),e!==null&&t&4&&Xo(n,n.memoizedProps,e.memoizedProps);break;case 5:if(sr(r,n),ur(n),t&512&&(Gn||e===null||Gr(e,e.return)),n.flags&32){a=n.stateNode;try{ct(a,"")}catch(Z){En(n,n.return,Z)}}t&4&&n.stateNode!=null&&(a=n.memoizedProps,Xo(n,a,e!==null?e.memoizedProps:a)),t&1024&&(qo=!0);break;case 6:if(sr(r,n),ur(n),t&4){if(n.stateNode===null)throw Error(c(162));t=n.memoizedProps,e=n.stateNode;try{e.nodeValue=t}catch(Z){En(n,n.return,Z)}}break;case 3:if(Il=null,a=Dr,Dr=Xl(r.containerInfo),sr(r,n),Dr=a,ur(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Dt(r.containerInfo)}catch(Z){En(n,n.return,Z)}qo&&(qo=!1,Nd(n));break;case 4:t=Dr,Dr=Xl(n.stateNode.containerInfo),sr(r,n),ur(n),Dr=t;break;case 12:sr(r,n),ur(n);break;case 31:sr(r,n),ur(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 13:sr(r,n),ur(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(zl=pr()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 22:a=n.memoizedState!==null;var p=e!==null&&e.memoizedState!==null,w=le,T=Gn;if(le=w||a,Gn=T||p,sr(r,n),Gn=T,le=w,ur(n),t&8192)n:for(r=n.stateNode,r._visibility=a?r._visibility&-2:r._visibility|1,a&&(e===null||p||le||Gn||nt(n)),e=null,r=n;;){if(r.tag===5||r.tag===26){if(e===null){p=e=r;try{if(l=p.stateNode,a)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=p.stateNode;var R=p.memoizedProps.style,O=R!=null&&R.hasOwnProperty("display")?R.display:null;s.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(Z){En(p,p.return,Z)}}}else if(r.tag===6){if(e===null){p=r;try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(Z){En(p,p.return,Z)}}}else if(r.tag===18){if(e===null){p=r;try{var k=p.stateNode;a?Tm(k,!0):Tm(p.stateNode,!1)}catch(Z){En(p,p.return,Z)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break n;for(;r.sibling===null;){if(r.return===null||r.return===n)break n;e===r&&(e=null),r=r.return}e===r&&(e=null),r.sibling.return=r.return,r=r.sibling}t&4&&(t=n.updateQueue,t!==null&&(e=t.retryQueue,e!==null&&(t.retryQueue=null,Cl(n,e))));break;case 19:sr(r,n),ur(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,Cl(n,t)));break;case 30:break;case 21:break;default:sr(r,n),ur(n)}}function ur(n){var r=n.flags;if(r&2){try{for(var e,t=n.return;t!==null;){if(Sd(t)){e=t;break}t=t.return}if(e==null)throw Error(c(160));switch(e.tag){case 27:var a=e.stateNode,l=Jo(n);Sl(n,l,a);break;case 5:var i=e.stateNode;e.flags&32&&(ct(i,""),e.flags&=-33);var s=Jo(n);Sl(n,s,i);break;case 3:case 4:var p=e.stateNode.containerInfo,w=Jo(n);Io(n,w,p);break;default:throw Error(c(161))}}catch(T){En(n,n.return,T)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Nd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Nd(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function oe(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)zd(n,r.alternate,r),r=r.sibling}function nt(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:we(4,r,r.return),nt(r);break;case 1:Gr(r,r.return);var e=r.stateNode;typeof e.componentWillUnmount=="function"&&Td(r,r.return,e),nt(r);break;case 27:Ea(r.stateNode);case 26:case 5:Gr(r,r.return),nt(r);break;case 22:r.memoizedState===null&&nt(r);break;case 30:nt(r);break;default:nt(r)}n=n.sibling}}function ce(n,r,e){for(e=e&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var t=r.alternate,a=n,l=r,i=l.flags;switch(l.tag){case 0:case 11:case 15:ce(a,l,e),ba(4,l);break;case 1:if(ce(a,l,e),t=l,a=t.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(w){En(t,t.return,w)}if(t=l,a=t.updateQueue,a!==null){var s=t.stateNode;try{var p=a.shared.hiddenCallbacks;if(p!==null)for(a.shared.hiddenCallbacks=null,a=0;a<p.length;a++)bu(p[a],s)}catch(w){En(t,t.return,w)}}e&&i&64&&_d(l),Qa(l,l.return);break;case 27:Cd(l);case 26:case 5:ce(a,l,e),e&&t===null&&i&4&&jd(l),Qa(l,l.return);break;case 12:ce(a,l,e);break;case 31:ce(a,l,e),e&&i&4&&Md(a,l);break;case 13:ce(a,l,e),e&&i&4&&Dd(a,l);break;case 22:l.memoizedState===null&&ce(a,l,e),Qa(l,l.return);break;case 30:break;default:ce(a,l,e)}r=r.sibling}}function Ko(n,r){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&la(e))}function $o(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&la(n))}function Vr(n,r,e,t){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ld(n,r,e,t),r=r.sibling}function Ld(n,r,e,t){var a=r.flags;switch(r.tag){case 0:case 11:case 15:Vr(n,r,e,t),a&2048&&ba(9,r);break;case 1:Vr(n,r,e,t);break;case 3:Vr(n,r,e,t),a&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&la(n)));break;case 12:if(a&2048){Vr(n,r,e,t),n=r.stateNode;try{var l=r.memoizedProps,i=l.id,s=l.onPostCommit;typeof s=="function"&&s(i,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(p){En(r,r.return,p)}}else Vr(n,r,e,t);break;case 31:Vr(n,r,e,t);break;case 13:Vr(n,r,e,t);break;case 23:break;case 22:l=r.stateNode,i=r.alternate,r.memoizedState!==null?l._visibility&2?Vr(n,r,e,t):ya(n,r):l._visibility&2?Vr(n,r,e,t):(l._visibility|=2,Et(n,r,e,t,(r.subtreeFlags&10256)!==0||!1)),a&2048&&Ko(i,r);break;case 24:Vr(n,r,e,t),a&2048&&$o(r.alternate,r);break;default:Vr(n,r,e,t)}}function Et(n,r,e,t,a){for(a=a&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var l=n,i=r,s=e,p=t,w=i.flags;switch(i.tag){case 0:case 11:case 15:Et(l,i,s,p,a),ba(8,i);break;case 23:break;case 22:var T=i.stateNode;i.memoizedState!==null?T._visibility&2?Et(l,i,s,p,a):ya(l,i):(T._visibility|=2,Et(l,i,s,p,a)),a&&w&2048&&Ko(i.alternate,i);break;case 24:Et(l,i,s,p,a),a&&w&2048&&$o(i.alternate,i);break;default:Et(l,i,s,p,a)}r=r.sibling}}function ya(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var e=n,t=r,a=t.flags;switch(t.tag){case 22:ya(e,t),a&2048&&Ko(t.alternate,t);break;case 24:ya(e,t),a&2048&&$o(t.alternate,t);break;default:ya(e,t)}r=r.sibling}}var ga=8192;function _t(n,r,e){if(n.subtreeFlags&ga)for(n=n.child;n!==null;)Hd(n,r,e),n=n.sibling}function Hd(n,r,e){switch(n.tag){case 26:_t(n,r,e),n.flags&ga&&n.memoizedState!==null&&r0(e,Dr,n.memoizedState,n.memoizedProps);break;case 5:_t(n,r,e);break;case 3:case 4:var t=Dr;Dr=Xl(n.stateNode.containerInfo),_t(n,r,e),Dr=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=ga,ga=16777216,_t(n,r,e),ga=t):_t(n,r,e));break;default:_t(n,r,e)}}function Zd(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ba(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Kn=t,Gd(t,n)}Zd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yd(n),n=n.sibling}function Yd(n){switch(n.tag){case 0:case 11:case 15:Ba(n),n.flags&2048&&we(9,n,n.return);break;case 3:Ba(n);break;case 12:Ba(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Rl(n)):Ba(n);break;default:Ba(n)}}function Rl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var e=0;e<r.length;e++){var t=r[e];Kn=t,Gd(t,n)}Zd(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:we(8,r,r.return),Rl(r);break;case 22:e=r.stateNode,e._visibility&2&&(e._visibility&=-3,Rl(r));break;default:Rl(r)}n=n.sibling}}function Gd(n,r){for(;Kn!==null;){var e=Kn;switch(e.tag){case 0:case 11:case 15:we(8,e,r);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var t=e.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:la(e.memoizedState.cache)}if(t=e.child,t!==null)t.return=e,Kn=t;else n:for(e=n;Kn!==null;){t=Kn;var a=t.sibling,l=t.return;if(Ad(t),t===e){Kn=null;break n}if(a!==null){a.return=l,Kn=a;break n}Kn=l}}}var hp={getCacheForType:function(n){var r=nr(Hn),e=r.data.get(n);return e===void 0&&(e=n(),r.data.set(n,e)),e},cacheSignal:function(){return nr(Hn).controller.signal}},vp=typeof WeakMap=="function"?WeakMap:Map,On=0,Cn=null,mn=null,hn=0,kn=0,Br=null,Oe=!1,Tt=!1,Po=!1,se=0,Vn=0,ke=0,rt=0,nc=0,Fr=0,jt=0,Fa=null,dr=null,rc=!1,zl=0,Xd=0,Al=1/0,Wl=null,Ee=null,Jn=0,_e=null,St=null,ue=0,ec=0,tc=null,Jd=null,Ua=0,ac=null;function Ur(){return(On&2)!==0&&hn!==0?hn&-hn:_.T!==null?uc():us()}function Id(){if(Fr===0)if((hn&536870912)===0||yn){var n=Ya;Ya<<=1,(Ya&3932160)===0&&(Ya=262144),Fr=n}else Fr=536870912;return n=yr.current,n!==null&&(n.flags|=32),Fr}function mr(n,r,e){(n===Cn&&(kn===2||kn===9)||n.cancelPendingCommit!==null)&&(Ct(n,0),Te(n,hn,Fr,!1)),Yt(n,e),((On&2)===0||n!==Cn)&&(n===Cn&&((On&2)===0&&(rt|=e),Vn===4&&Te(n,hn,Fr,!1)),Xr(n))}function qd(n,r,e){if((On&6)!==0)throw Error(c(327));var t=!e&&(r&127)===0&&(r&n.expiredLanes)===0||Zt(n,r),a=t?yp(n,r):ic(n,r,!0),l=t;do{if(a===0){Tt&&!t&&Te(n,r,0,!1);break}else{if(e=n.current.alternate,l&&!bp(e)){a=ic(n,r,!1),l=!1;continue}if(a===2){if(l=r,n.errorRecoveryDisabledLanes&l)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){r=i;n:{var s=n;a=Fa;var p=s.current.memoizedState.isDehydrated;if(p&&(Ct(s,i).flags|=256),i=ic(s,i,!1),i!==2){if(Po&&!p){s.errorRecoveryDisabledLanes|=l,rt|=l,a=4;break n}l=dr,dr=a,l!==null&&(dr===null?dr=l:dr.push.apply(dr,l))}a=i}if(l=!1,a!==2)continue}}if(a===1){Ct(n,0),Te(n,r,0,!0);break}n:{switch(t=n,l=a,l){case 0:case 1:throw Error(c(345));case 4:if((r&4194048)!==r)break;case 6:Te(t,r,Fr,!Oe);break n;case 2:dr=null;break;case 3:case 5:break;default:throw Error(c(329))}if((r&62914560)===r&&(a=zl+300-pr(),10<a)){if(Te(t,r,Fr,!Oe),Xa(t,0,!0)!==0)break n;ue=r,t.timeoutHandle=km(Kd.bind(null,t,e,dr,Wl,rc,r,Fr,rt,jt,Oe,l,"Throttled",-0,0),a);break n}Kd(t,e,dr,Wl,rc,r,Fr,rt,jt,Oe,l,null,-0,0)}}break}while(!0);Xr(n)}function Kd(n,r,e,t,a,l,i,s,p,w,T,R,O,k){if(n.timeoutHandle=-1,R=r.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ir},Hd(r,l,R);var Z=(l&62914560)===l?zl-pr():(l&4194048)===l?Xd-pr():0;if(Z=e0(R,Z),Z!==null){ue=l,n.cancelPendingCommit=Z(lm.bind(null,n,r,l,e,t,a,i,s,p,T,R,null,O,k)),Te(n,l,i,!w);return}}lm(n,r,l,e,t,a,i,s,p)}function bp(n){for(var r=n;;){var e=r.tag;if((e===0||e===11||e===15)&&r.flags&16384&&(e=r.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var t=0;t<e.length;t++){var a=e[t],l=a.getSnapshot;a=a.value;try{if(!br(l(),a))return!1}catch{return!1}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Te(n,r,e,t){r&=~nc,r&=~rt,n.suspendedLanes|=r,n.pingedLanes&=~r,t&&(n.warmLanes|=r),t=n.expirationTimes;for(var a=r;0<a;){var l=31-vr(a),i=1<<l;t[l]=-1,a&=~i}e!==0&&os(n,e,r)}function Ml(){return(On&6)===0?(wa(0),!1):!0}function lc(){if(mn!==null){if(kn===0)var n=mn.return;else n=mn,Pr=Ge=null,go(n),Ft=null,oa=0,n=mn;for(;n!==null;)Ed(n.alternate,n),n=n.return;mn=null}}function Ct(n,r){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Mp(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),ue=0,lc(),Cn=n,mn=e=Kr(n.current,null),hn=r,kn=0,Br=null,Oe=!1,Tt=Zt(n,r),Po=!1,jt=Fr=nc=rt=ke=Vn=0,dr=Fa=null,rc=!1,(r&8)!==0&&(r|=r&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=r;0<t;){var a=31-vr(t),l=1<<a;r|=n[a],t&=~l}return se=r,ll(),e}function $d(n,r){on=null,_.H=pa,r===Bt||r===xl?(r=fu(),kn=3):r===co?(r=fu(),kn=4):kn=r===Wo?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Br=r,mn===null&&(Vn=1,kl(n,Tr(r,n.current)))}function Pd(){var n=yr.current;return n===null?!0:(hn&4194048)===hn?Rr===null:(hn&62914560)===hn||(hn&536870912)!==0?n===Rr:!1}function nm(){var n=_.H;return _.H=pa,n===null?pa:n}function rm(){var n=_.A;return _.A=hp,n}function Dl(){Vn=4,Oe||(hn&4194048)!==hn&&yr.current!==null||(Tt=!0),(ke&134217727)===0&&(rt&134217727)===0||Cn===null||Te(Cn,hn,Fr,!1)}function ic(n,r,e){var t=On;On|=2;var a=nm(),l=rm();(Cn!==n||hn!==r)&&(Wl=null,Ct(n,r)),r=!1;var i=Vn;n:do try{if(kn!==0&&mn!==null){var s=mn,p=Br;switch(kn){case 8:lc(),i=6;break n;case 3:case 2:case 9:case 6:yr.current===null&&(r=!0);var w=kn;if(kn=0,Br=null,Rt(n,s,p,w),e&&Tt){i=0;break n}break;default:w=kn,kn=0,Br=null,Rt(n,s,p,w)}}Qp(),i=Vn;break}catch(T){$d(n,T)}while(!0);return r&&n.shellSuspendCounter++,Pr=Ge=null,On=t,_.H=a,_.A=l,mn===null&&(Cn=null,hn=0,ll()),i}function Qp(){for(;mn!==null;)em(mn)}function yp(n,r){var e=On;On|=2;var t=nm(),a=rm();Cn!==n||hn!==r?(Wl=null,Al=pr()+500,Ct(n,r)):Tt=Zt(n,r);n:do try{if(kn!==0&&mn!==null){r=mn;var l=Br;r:switch(kn){case 1:kn=0,Br=null,Rt(n,r,l,1);break;case 2:case 9:if(mu(l)){kn=0,Br=null,tm(r);break}r=function(){kn!==2&&kn!==9||Cn!==n||(kn=7),Xr(n)},l.then(r,r);break n;case 3:kn=7;break n;case 4:kn=5;break n;case 7:mu(l)?(kn=0,Br=null,tm(r)):(kn=0,Br=null,Rt(n,r,l,7));break;case 5:var i=null;switch(mn.tag){case 26:i=mn.memoizedState;case 5:case 27:var s=mn;if(i?Lm(i):s.stateNode.complete){kn=0,Br=null;var p=s.sibling;if(p!==null)mn=p;else{var w=s.return;w!==null?(mn=w,Vl(w)):mn=null}break r}}kn=0,Br=null,Rt(n,r,l,5);break;case 6:kn=0,Br=null,Rt(n,r,l,6);break;case 8:lc(),Vn=6;break n;default:throw Error(c(462))}}gp();break}catch(T){$d(n,T)}while(!0);return Pr=Ge=null,_.H=t,_.A=a,On=e,mn!==null?0:(Cn=null,hn=0,ll(),Vn)}function gp(){for(;mn!==null&&!Hx();)em(mn)}function em(n){var r=Od(n.alternate,n,se);n.memoizedProps=n.pendingProps,r===null?Vl(n):mn=r}function tm(n){var r=n,e=r.alternate;switch(r.tag){case 15:case 0:r=yd(e,r,r.pendingProps,r.type,void 0,hn);break;case 11:r=yd(e,r,r.pendingProps,r.type.render,r.ref,hn);break;case 5:go(r);default:Ed(e,r),r=mn=ru(r,se),r=Od(e,r,se)}n.memoizedProps=n.pendingProps,r===null?Vl(n):mn=r}function Rt(n,r,e,t){Pr=Ge=null,go(r),Ft=null,oa=0;var a=r.return;try{if(sp(n,a,r,e,hn)){Vn=1,kl(n,Tr(e,n.current)),mn=null;return}}catch(l){if(a!==null)throw mn=a,l;Vn=1,kl(n,Tr(e,n.current)),mn=null;return}r.flags&32768?(yn||t===1?n=!0:Tt||(hn&536870912)!==0?n=!1:(Oe=n=!0,(t===2||t===9||t===3||t===6)&&(t=yr.current,t!==null&&t.tag===13&&(t.flags|=16384))),am(r,n)):Vl(r)}function Vl(n){var r=n;do{if((r.flags&32768)!==0){am(r,Oe);return}n=r.return;var e=mp(r.alternate,r,se);if(e!==null){mn=e;return}if(r=r.sibling,r!==null){mn=r;return}mn=r=n}while(r!==null);Vn===0&&(Vn=5)}function am(n,r){do{var e=xp(n.alternate,n);if(e!==null){e.flags&=32767,mn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!r&&(n=n.sibling,n!==null)){mn=n;return}mn=n=e}while(n!==null);Vn=6,mn=null}function lm(n,r,e,t,a,l,i,s,p){n.cancelPendingCommit=null;do Nl();while(Jn!==0);if((On&6)!==0)throw Error(c(327));if(r!==null){if(r===n.current)throw Error(c(177));if(l=r.lanes|r.childLanes,l|=Xi,Px(n,e,l,i,s,p),n===Cn&&(mn=Cn=null,hn=0),St=r,_e=n,ue=e,ec=l,tc=a,Jd=t,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,wp(Ha,function(){return um(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||t){t=_.T,_.T=null,a=D.p,D.p=2,i=On,On|=4;try{fp(n,r,e)}finally{On=i,D.p=a,_.T=t}}Jn=1,im(),om(),cm()}}function im(){if(Jn===1){Jn=0;var n=_e,r=St,e=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||e){e=_.T,_.T=null;var t=D.p;D.p=2;var a=On;On|=4;try{Vd(r,n);var l=bc,i=Gs(n.containerInfo),s=l.focusedElem,p=l.selectionRange;if(i!==s&&s&&s.ownerDocument&&Ys(s.ownerDocument.documentElement,s)){if(p!==null&&Li(s)){var w=p.start,T=p.end;if(T===void 0&&(T=w),"selectionStart"in s)s.selectionStart=w,s.selectionEnd=Math.min(T,s.value.length);else{var R=s.ownerDocument||document,O=R&&R.defaultView||window;if(O.getSelection){var k=O.getSelection(),Z=s.textContent.length,nn=Math.min(p.start,Z),Sn=p.end===void 0?nn:Math.min(p.end,Z);!k.extend&&nn>Sn&&(i=Sn,Sn=nn,nn=i);var g=Zs(s,nn),v=Zs(s,Sn);if(g&&v&&(k.rangeCount!==1||k.anchorNode!==g.node||k.anchorOffset!==g.offset||k.focusNode!==v.node||k.focusOffset!==v.offset)){var F=R.createRange();F.setStart(g.node,g.offset),k.removeAllRanges(),nn>Sn?(k.addRange(F),k.extend(v.node,v.offset)):(F.setEnd(v.node,v.offset),k.addRange(F))}}}}for(R=[],k=s;k=k.parentNode;)k.nodeType===1&&R.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<R.length;s++){var j=R[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Pl=!!vc,bc=vc=null}finally{On=a,D.p=t,_.T=e}}n.current=r,Jn=2}}function om(){if(Jn===2){Jn=0;var n=_e,r=St,e=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||e){e=_.T,_.T=null;var t=D.p;D.p=2;var a=On;On|=4;try{zd(n,r.alternate,r)}finally{On=a,D.p=t,_.T=e}}Jn=3}}function cm(){if(Jn===4||Jn===3){Jn=0,Zx();var n=_e,r=St,e=ue,t=Jd;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Jn=5:(Jn=0,St=_e=null,sm(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(Ee=null),Fi(e),r=r.stateNode,hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Ht,r,void 0,(r.current.flags&128)===128)}catch{}if(t!==null){r=_.T,a=D.p,D.p=2,_.T=null;try{for(var l=n.onRecoverableError,i=0;i<t.length;i++){var s=t[i];l(s.value,{componentStack:s.stack})}}finally{_.T=r,D.p=a}}(ue&3)!==0&&Nl(),Xr(n),a=n.pendingLanes,(e&261930)!==0&&(a&42)!==0?n===ac?Ua++:(Ua=0,ac=n):Ua=0,wa(0)}}function sm(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,la(r)))}function Nl(){return im(),om(),cm(),um()}function um(){if(Jn!==5)return!1;var n=_e,r=ec;ec=0;var e=Fi(ue),t=_.T,a=D.p;try{D.p=32>e?32:e,_.T=null,e=tc,tc=null;var l=_e,i=ue;if(Jn=0,St=_e=null,ue=0,(On&6)!==0)throw Error(c(331));var s=On;if(On|=4,Yd(l.current),Ld(l,l.current,i,e),On=s,wa(0,!1),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Ht,l)}catch{}return!0}finally{D.p=a,_.T=t,sm(n,r)}}function dm(n,r,e){r=Tr(e,r),r=Ao(n.stateNode,r,2),n=Be(n,r,2),n!==null&&(Yt(n,2),Xr(n))}function En(n,r,e){if(n.tag===3)dm(n,n,e);else for(;r!==null;){if(r.tag===3){dm(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Ee===null||!Ee.has(t))){n=Tr(e,n),e=md(2),t=Be(r,e,2),t!==null&&(xd(e,t,r,n),Yt(t,2),Xr(t));break}}r=r.return}}function oc(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new vp;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(e)||(Po=!0,a.add(e),n=Bp.bind(null,n,r,e),r.then(n,n))}function Bp(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,Cn===n&&(hn&e)===e&&(Vn===4||Vn===3&&(hn&62914560)===hn&&300>pr()-zl?(On&2)===0&&Ct(n,0):nc|=e,jt===hn&&(jt=0)),Xr(n)}function mm(n,r){r===0&&(r=is()),n=He(n,r),n!==null&&(Yt(n,r),Xr(n))}function Fp(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),mm(n,e)}function Up(n,r){var e=0;switch(n.tag){case 31:case 13:var t=n.stateNode,a=n.memoizedState;a!==null&&(e=a.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(c(314))}t!==null&&t.delete(r),mm(n,e)}function wp(n,r){return Qi(n,r)}var Ll=null,zt=null,cc=!1,Hl=!1,sc=!1,je=0;function Xr(n){n!==zt&&n.next===null&&(zt===null?Ll=zt=n:zt=zt.next=n),Hl=!0,cc||(cc=!0,kp())}function wa(n,r){if(!sc&&Hl){sc=!0;do for(var e=!1,t=Ll;t!==null;){if(n!==0){var a=t.pendingLanes;if(a===0)var l=0;else{var i=t.suspendedLanes,s=t.pingedLanes;l=(1<<31-vr(42|n)+1)-1,l&=a&~(i&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(e=!0,hm(t,l))}else l=hn,l=Xa(t,t===Cn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||Zt(t,l)||(e=!0,hm(t,l));t=t.next}while(e);sc=!1}}function Op(){xm()}function xm(){Hl=cc=!1;var n=0;je!==0&&Wp()&&(n=je);for(var r=pr(),e=null,t=Ll;t!==null;){var a=t.next,l=fm(t,r);l===0?(t.next=null,e===null?Ll=a:e.next=a,a===null&&(zt=e)):(e=t,(n!==0||(l&3)!==0)&&(Hl=!0)),t=a}Jn!==0&&Jn!==5||wa(n),je!==0&&(je=0)}function fm(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-vr(l),s=1<<i,p=a[i];p===-1?((s&e)===0||(s&t)!==0)&&(a[i]=$x(s,r)):p<=r&&(n.expiredLanes|=s),l&=~s}if(r=Cn,e=hn,e=Xa(n,n===r?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,e===0||n===r&&(kn===2||kn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&yi(t),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Zt(n,e)){if(r=e&-e,r===n.callbackPriority)return r;switch(t!==null&&yi(t),Fi(e)){case 2:case 8:e=as;break;case 32:e=Ha;break;case 268435456:e=ls;break;default:e=Ha}return t=pm.bind(null,n),e=Qi(e,t),n.callbackPriority=r,n.callbackNode=e,r}return t!==null&&t!==null&&yi(t),n.callbackPriority=2,n.callbackNode=null,2}function pm(n,r){if(Jn!==0&&Jn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Nl()&&n.callbackNode!==e)return null;var t=hn;return t=Xa(n,n===Cn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(qd(n,t,r),fm(n,pr()),n.callbackNode!=null&&n.callbackNode===e?pm.bind(null,n):null)}function hm(n,r){if(Nl())return null;qd(n,r,!0)}function kp(){Dp(function(){(On&6)!==0?Qi(ts,Op):xm()})}function uc(){if(je===0){var n=yt;n===0&&(n=Za,Za<<=1,(Za&261888)===0&&(Za=256)),je=n}return je}function vm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ka(""+n)}function bm(n,r){var e=r.ownerDocument.createElement("input");return e.name=r.name,e.value=r.value,n.id&&e.setAttribute("form",n.id),r.parentNode.insertBefore(e,r),n=new FormData(n),e.parentNode.removeChild(e),n}function Ep(n,r,e,t,a){if(r==="submit"&&e&&e.stateNode===a){var l=vm((a[ir]||null).action),i=t.submitter;i&&(r=(r=i[ir]||null)?vm(r.formAction):i.getAttribute("formAction"),r!==null&&(l=r,i=null));var s=new rl("action","action",null,t,a);n.push({event:s,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(je!==0){var p=i?bm(a,i):new FormData(a);To(e,{pending:!0,data:p,method:a.method,action:l},null,p)}}else typeof l=="function"&&(s.preventDefault(),p=i?bm(a,i):new FormData(a),To(e,{pending:!0,data:p,method:a.method,action:l},l,p))},currentTarget:a}]})}}for(var dc=0;dc<Gi.length;dc++){var mc=Gi[dc],_p=mc.toLowerCase(),Tp=mc[0].toUpperCase()+mc.slice(1);Mr(_p,"on"+Tp)}Mr(Is,"onAnimationEnd"),Mr(qs,"onAnimationIteration"),Mr(Ks,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Gf,"onTransitionRun"),Mr(Xf,"onTransitionStart"),Mr(Jf,"onTransitionCancel"),Mr($s,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),De("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),De("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),De("onBeforeInput",["compositionend","keypress","textInput","paste"]),De("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oa));function Qm(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],a=t.event;t=t.listeners;n:{var l=void 0;if(r)for(var i=t.length-1;0<=i;i--){var s=t[i],p=s.instance,w=s.currentTarget;if(s=s.listener,p!==l&&a.isPropagationStopped())break n;l=s,a.currentTarget=w;try{l(a)}catch(T){al(T)}a.currentTarget=null,l=p}else for(i=0;i<t.length;i++){if(s=t[i],p=s.instance,w=s.currentTarget,s=s.listener,p!==l&&a.isPropagationStopped())break n;l=s,a.currentTarget=w;try{l(a)}catch(T){al(T)}a.currentTarget=null,l=p}}}}function xn(n,r){var e=r[Ui];e===void 0&&(e=r[Ui]=new Set);var t=n+"__bubble";e.has(t)||(ym(r,n,2,!1),e.add(t))}function xc(n,r,e){var t=0;r&&(t|=4),ym(e,n,t,r)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function fc(n){if(!n[Zl]){n[Zl]=!0,xs.forEach(function(e){e!=="selectionchange"&&(jp.has(e)||xc(e,!1,n),xc(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Zl]||(r[Zl]=!0,xc("selectionchange",!1,r))}}function ym(n,r,e,t){switch(Im(r)){case 2:var a=l0;break;case 8:a=i0;break;default:a=_c}e=a.bind(null,r,e,n),a=void 0,!Ci||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?n.addEventListener(r,e,{capture:!0,passive:a}):n.addEventListener(r,e,!0):a!==void 0?n.addEventListener(r,e,{passive:a}):n.addEventListener(r,e,!1)}function pc(n,r,e,t,a){var l=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var s=t.stateNode.containerInfo;if(s===a)break;if(i===4)for(i=t.return;i!==null;){var p=i.tag;if((p===3||p===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;s!==null;){if(i=tt(s),i===null)return;if(p=i.tag,p===5||p===6||p===26||p===27){t=l=i;continue n}s=s.parentNode}}t=t.return}ws(function(){var w=l,T=ji(e),R=[];n:{var O=Ps.get(n);if(O!==void 0){var k=rl,Z=n;switch(n){case"keypress":if(Pa(e)===0)break n;case"keydown":case"keyup":k=Uf;break;case"focusin":Z="focus",k=Wi;break;case"focusout":Z="blur",k=Wi;break;case"beforeblur":case"afterblur":k=Wi;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=kf;break;case Is:case qs:case Ks:k=pf;break;case $s:k=_f;break;case"scroll":case"scrollend":k=uf;break;case"wheel":k=jf;break;case"copy":case"cut":case"paste":k=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ts;break;case"toggle":case"beforetoggle":k=Cf}var nn=(r&4)!==0,Sn=!nn&&(n==="scroll"||n==="scrollend"),g=nn?O!==null?O+"Capture":null:O;nn=[];for(var v=w,F;v!==null;){var j=v;if(F=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||F===null||g===null||(j=Jt(v,g),j!=null&&nn.push(ka(v,j,F))),Sn)break;v=v.return}0<nn.length&&(O=new k(O,Z,null,e,T),R.push({event:O,listeners:nn}))}}if((r&7)===0){n:{if(O=n==="mouseover"||n==="pointerover",k=n==="mouseout"||n==="pointerout",O&&e!==Ti&&(Z=e.relatedTarget||e.fromElement)&&(tt(Z)||Z[et]))break n;if((k||O)&&(O=T.window===T?T:(O=T.ownerDocument)?O.defaultView||O.parentWindow:window,k?(Z=e.relatedTarget||e.toElement,k=w,Z=Z?tt(Z):null,Z!==null&&(Sn=x(Z),nn=Z.tag,Z!==Sn||nn!==5&&nn!==27&&nn!==6)&&(Z=null)):(k=null,Z=w),k!==Z)){if(nn=Es,j="onMouseLeave",g="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(nn=Ts,j="onPointerLeave",g="onPointerEnter",v="pointer"),Sn=k==null?O:Xt(k),F=Z==null?O:Xt(Z),O=new nn(j,v+"leave",k,e,T),O.target=Sn,O.relatedTarget=F,j=null,tt(T)===w&&(nn=new nn(g,v+"enter",Z,e,T),nn.target=F,nn.relatedTarget=Sn,j=nn),Sn=j,k&&Z)r:{for(nn=Sp,g=k,v=Z,F=0,j=g;j;j=nn(j))F++;j=0;for(var q=v;q;q=nn(q))j++;for(;0<F-j;)g=nn(g),F--;for(;0<j-F;)v=nn(v),j--;for(;F--;){if(g===v||v!==null&&g===v.alternate){nn=g;break r}g=nn(g),v=nn(v)}nn=null}else nn=null;k!==null&&gm(R,O,k,nn,!1),Z!==null&&Sn!==null&&gm(R,Sn,Z,nn,!0)}}n:{if(O=w?Xt(w):window,k=O.nodeName&&O.nodeName.toLowerCase(),k==="select"||k==="input"&&O.type==="file")var Un=Ms;else if(As(O))if(Ds)Un=Hf;else{Un=Nf;var G=Vf}else k=O.nodeName,!k||k.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?w&&_i(w.elementType)&&(Un=Ms):Un=Lf;if(Un&&(Un=Un(n,w))){Ws(R,Un,e,T);break n}G&&G(n,O,w),n==="focusout"&&w&&O.type==="number"&&w.memoizedProps.value!=null&&Ei(O,"number",O.value)}switch(G=w?Xt(w):window,n){case"focusin":(As(G)||G.contentEditable==="true")&&(mt=G,Hi=w,ea=null);break;case"focusout":ea=Hi=mt=null;break;case"mousedown":Zi=!0;break;case"contextmenu":case"mouseup":case"dragend":Zi=!1,Xs(R,e,T);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Xs(R,e,T)}var sn;if(Di)n:{switch(n){case"compositionstart":var vn="onCompositionStart";break n;case"compositionend":vn="onCompositionEnd";break n;case"compositionupdate":vn="onCompositionUpdate";break n}vn=void 0}else dt?Rs(n,e)&&(vn="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(vn="onCompositionStart");vn&&(js&&e.locale!=="ko"&&(dt||vn!=="onCompositionStart"?vn==="onCompositionEnd"&&dt&&(sn=Os()):(pe=T,Ri="value"in pe?pe.value:pe.textContent,dt=!0)),G=Yl(w,vn),0<G.length&&(vn=new _s(vn,n,null,e,T),R.push({event:vn,listeners:G}),sn?vn.data=sn:(sn=zs(e),sn!==null&&(vn.data=sn)))),(sn=zf?Af(n,e):Wf(n,e))&&(vn=Yl(w,"onBeforeInput"),0<vn.length&&(G=new _s("onBeforeInput","beforeinput",null,e,T),R.push({event:G,listeners:vn}),G.data=sn)),Ep(R,n,w,e,T)}Qm(R,r)})}function ka(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Yl(n,r){for(var e=r+"Capture",t=[];n!==null;){var a=n,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Jt(n,e),a!=null&&t.unshift(ka(n,a,l)),a=Jt(n,r),a!=null&&t.push(ka(n,a,l))),n.tag===3)return t;n=n.return}return[]}function Sp(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function gm(n,r,e,t,a){for(var l=r._reactName,i=[];e!==null&&e!==t;){var s=e,p=s.alternate,w=s.stateNode;if(s=s.tag,p!==null&&p===t)break;s!==5&&s!==26&&s!==27||w===null||(p=w,a?(w=Jt(e,l),w!=null&&i.unshift(ka(e,w,p))):a||(w=Jt(e,l),w!=null&&i.push(ka(e,w,p)))),e=e.return}i.length!==0&&n.push({event:r,listeners:i})}var Cp=/\r\n?/g,Rp=/\u0000|\uFFFD/g;function Bm(n){return(typeof n=="string"?n:""+n).replace(Cp,`
`).replace(Rp,"")}function Fm(n,r){return r=Bm(r),Bm(n)===r}function jn(n,r,e,t,a,l){switch(e){case"children":typeof t=="string"?r==="body"||r==="textarea"&&t===""||ct(n,t):(typeof t=="number"||typeof t=="bigint")&&r!=="body"&&ct(n,""+t);break;case"className":Ia(n,"class",t);break;case"tabIndex":Ia(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ia(n,e,t);break;case"style":Fs(n,t,l);break;case"data":if(r!=="object"){Ia(n,"data",t);break}case"src":case"href":if(t===""&&(r!=="a"||e!=="href")){n.removeAttribute(e);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Ka(""+t),n.setAttribute(e,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(e==="formAction"?(r!=="input"&&jn(n,r,"name",a.name,a,null),jn(n,r,"formEncType",a.formEncType,a,null),jn(n,r,"formMethod",a.formMethod,a,null),jn(n,r,"formTarget",a.formTarget,a,null)):(jn(n,r,"encType",a.encType,a,null),jn(n,r,"method",a.method,a,null),jn(n,r,"target",a.target,a,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(e);break}t=Ka(""+t),n.setAttribute(e,t);break;case"onClick":t!=null&&(n.onclick=Ir);break;case"onScroll":t!=null&&xn("scroll",n);break;case"onScrollEnd":t!=null&&xn("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(e=t.__html,e!=null){if(a.children!=null)throw Error(c(60));n.innerHTML=e}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}e=Ka(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""+t):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":t===!0?n.setAttribute(e,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(e,t):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(e,t):n.removeAttribute(e);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(e):n.setAttribute(e,t);break;case"popover":xn("beforetoggle",n),xn("toggle",n),Ja(n,"popover",t);break;case"xlinkActuate":Jr(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Jr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Jr(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Jr(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Jr(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Jr(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Jr(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Jr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Jr(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ja(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=cf.get(e)||e,Ja(n,e,t))}}function hc(n,r,e,t,a,l){switch(e){case"style":Fs(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(c(61));if(e=t.__html,e!=null){if(a.children!=null)throw Error(c(60));n.innerHTML=e}}break;case"children":typeof t=="string"?ct(n,t):(typeof t=="number"||typeof t=="bigint")&&ct(n,""+t);break;case"onScroll":t!=null&&xn("scroll",n);break;case"onScrollEnd":t!=null&&xn("scrollend",n);break;case"onClick":t!=null&&(n.onclick=Ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fs.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),r=e.slice(2,a?e.length-7:void 0),l=n[ir]||null,l=l!=null?l[e]:null,typeof l=="function"&&n.removeEventListener(r,l,a),typeof t=="function")){typeof l!="function"&&l!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(r,t,a);break n}e in n?n[e]=t:t===!0?n.setAttribute(e,""):Ja(n,e,t)}}}function er(n,r,e){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xn("error",n),xn("load",n);var t=!1,a=!1,l;for(l in e)if(e.hasOwnProperty(l)){var i=e[l];if(i!=null)switch(l){case"src":t=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,r));default:jn(n,r,l,i,e,null)}}a&&jn(n,r,"srcSet",e.srcSet,e,null),t&&jn(n,r,"src",e.src,e,null);return;case"input":xn("invalid",n);var s=l=i=a=null,p=null,w=null;for(t in e)if(e.hasOwnProperty(t)){var T=e[t];if(T!=null)switch(t){case"name":a=T;break;case"type":i=T;break;case"checked":p=T;break;case"defaultChecked":w=T;break;case"value":l=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,r));break;default:jn(n,r,t,T,e,null)}}Qs(n,l,s,p,w,i,a,!1);return;case"select":xn("invalid",n),t=i=l=null;for(a in e)if(e.hasOwnProperty(a)&&(s=e[a],s!=null))switch(a){case"value":l=s;break;case"defaultValue":i=s;break;case"multiple":t=s;default:jn(n,r,a,s,e,null)}r=l,e=i,n.multiple=!!t,r!=null?ot(n,!!t,r,!1):e!=null&&ot(n,!!t,e,!0);return;case"textarea":xn("invalid",n),l=a=t=null;for(i in e)if(e.hasOwnProperty(i)&&(s=e[i],s!=null))switch(i){case"value":t=s;break;case"defaultValue":a=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(c(91));break;default:jn(n,r,i,s,e,null)}gs(n,t,a,l);return;case"option":for(p in e)e.hasOwnProperty(p)&&(t=e[p],t!=null)&&(p==="selected"?n.selected=t&&typeof t!="function"&&typeof t!="symbol":jn(n,r,p,t,e,null));return;case"dialog":xn("beforetoggle",n),xn("toggle",n),xn("cancel",n),xn("close",n);break;case"iframe":case"object":xn("load",n);break;case"video":case"audio":for(t=0;t<Oa.length;t++)xn(Oa[t],n);break;case"image":xn("error",n),xn("load",n);break;case"details":xn("toggle",n);break;case"embed":case"source":case"link":xn("error",n),xn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in e)if(e.hasOwnProperty(w)&&(t=e[w],t!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,r));default:jn(n,r,w,t,e,null)}return;default:if(_i(r)){for(T in e)e.hasOwnProperty(T)&&(t=e[T],t!==void 0&&hc(n,r,T,t,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(t=e[s],t!=null&&jn(n,r,s,t,e,null))}function zp(n,r,e,t){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,i=null,s=null,p=null,w=null,T=null;for(k in e){var R=e[k];if(e.hasOwnProperty(k)&&R!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":p=R;default:t.hasOwnProperty(k)||jn(n,r,k,null,t,R)}}for(var O in t){var k=t[O];if(R=e[O],t.hasOwnProperty(O)&&(k!=null||R!=null))switch(O){case"type":l=k;break;case"name":a=k;break;case"checked":w=k;break;case"defaultChecked":T=k;break;case"value":i=k;break;case"defaultValue":s=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,r));break;default:k!==R&&jn(n,r,O,k,t,R)}}ki(n,i,s,p,w,T,l,a);return;case"select":k=i=s=O=null;for(l in e)if(p=e[l],e.hasOwnProperty(l)&&p!=null)switch(l){case"value":break;case"multiple":k=p;default:t.hasOwnProperty(l)||jn(n,r,l,null,t,p)}for(a in t)if(l=t[a],p=e[a],t.hasOwnProperty(a)&&(l!=null||p!=null))switch(a){case"value":O=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:l!==p&&jn(n,r,a,l,t,p)}r=s,e=i,t=k,O!=null?ot(n,!!e,O,!1):!!t!=!!e&&(r!=null?ot(n,!!e,r,!0):ot(n,!!e,e?[]:"",!1));return;case"textarea":k=O=null;for(s in e)if(a=e[s],e.hasOwnProperty(s)&&a!=null&&!t.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:jn(n,r,s,null,t,a)}for(i in t)if(a=t[i],l=e[i],t.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case"value":O=a;break;case"defaultValue":k=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==l&&jn(n,r,i,a,t,l)}ys(n,O,k);return;case"option":for(var Z in e)O=e[Z],e.hasOwnProperty(Z)&&O!=null&&!t.hasOwnProperty(Z)&&(Z==="selected"?n.selected=!1:jn(n,r,Z,null,t,O));for(p in t)O=t[p],k=e[p],t.hasOwnProperty(p)&&O!==k&&(O!=null||k!=null)&&(p==="selected"?n.selected=O&&typeof O!="function"&&typeof O!="symbol":jn(n,r,p,O,t,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nn in e)O=e[nn],e.hasOwnProperty(nn)&&O!=null&&!t.hasOwnProperty(nn)&&jn(n,r,nn,null,t,O);for(w in t)if(O=t[w],k=e[w],t.hasOwnProperty(w)&&O!==k&&(O!=null||k!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,r));break;default:jn(n,r,w,O,t,k)}return;default:if(_i(r)){for(var Sn in e)O=e[Sn],e.hasOwnProperty(Sn)&&O!==void 0&&!t.hasOwnProperty(Sn)&&hc(n,r,Sn,void 0,t,O);for(T in t)O=t[T],k=e[T],!t.hasOwnProperty(T)||O===k||O===void 0&&k===void 0||hc(n,r,T,O,t,k);return}}for(var g in e)O=e[g],e.hasOwnProperty(g)&&O!=null&&!t.hasOwnProperty(g)&&jn(n,r,g,null,t,O);for(R in t)O=t[R],k=e[R],!t.hasOwnProperty(R)||O===k||O==null&&k==null||jn(n,r,R,O,t,k)}function Um(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ap(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,e=performance.getEntriesByType("resource"),t=0;t<e.length;t++){var a=e[t],l=a.transferSize,i=a.initiatorType,s=a.duration;if(l&&s&&Um(i)){for(i=0,s=a.responseEnd,t+=1;t<e.length;t++){var p=e[t],w=p.startTime;if(w>s)break;var T=p.transferSize,R=p.initiatorType;T&&Um(R)&&(p=p.responseEnd,i+=T*(p<s?1:(s-w)/(p-w)))}if(--t,r+=8*(l+i)/(a.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var vc=null,bc=null;function Gl(n){return n.nodeType===9?n:n.ownerDocument}function wm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Om(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Qc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yc=null;function Wp(){var n=window.event;return n&&n.type==="popstate"?n===yc?!1:(yc=n,!0):(yc=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,Mp=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,Dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(n){return Em.resolve(null).then(n).catch(Vp)}:km;function Vp(n){setTimeout(function(){throw n})}function Se(n){return n==="head"}function _m(n,r){var e=r,t=0;do{var a=e.nextSibling;if(n.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(t===0){n.removeChild(a),Dt(r);return}t--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")t++;else if(e==="html")Ea(n.ownerDocument.documentElement);else if(e==="head"){e=n.ownerDocument.head,Ea(e);for(var l=e.firstChild;l;){var i=l.nextSibling,s=l.nodeName;l[Gt]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||e.removeChild(l),l=i}}else e==="body"&&Ea(n.ownerDocument.body);e=a}while(e);Dt(r)}function Tm(n,r){var e=n;n=0;do{var t=e.nextSibling;if(e.nodeType===1?r?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(r?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(n===0)break;n--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||n++;e=t}while(e)}function gc(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var e=r;switch(r=r.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":gc(e),wi(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function Np(n,r,e,t){for(;n.nodeType===1;){var a=e;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Gt])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=zr(n.nextSibling),n===null)break}return null}function Lp(n,r,e){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=zr(n.nextSibling),n===null))return null;return n}function jm(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=zr(n.nextSibling),n===null))return null;return n}function Bc(n){return n.data==="$?"||n.data==="$~"}function Fc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Hp(n,r){var e=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||e.readyState!=="loading")r();else{var t=function(){r(),e.removeEventListener("DOMContentLoaded",t)};e.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Uc=null;function Sm(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"||e==="/&"){if(r===0)return zr(n.nextSibling);r--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||r++}n=n.nextSibling}return null}function Cm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(r===0)return n;r--}else e!=="/$"&&e!=="/&"||r++}n=n.previousSibling}return null}function Rm(n,r,e){switch(r=Gl(e),n){case"html":if(n=r.documentElement,!n)throw Error(c(452));return n;case"head":if(n=r.head,!n)throw Error(c(453));return n;case"body":if(n=r.body,!n)throw Error(c(454));return n;default:throw Error(c(451))}}function Ea(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);wi(n)}var Ar=new Map,zm=new Set;function Xl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var de=D.d;D.d={f:Zp,r:Yp,D:Gp,C:Xp,L:Jp,m:Ip,X:Kp,S:qp,M:$p};function Zp(){var n=de.f(),r=Ml();return n||r}function Yp(n){var r=at(n);r!==null&&r.tag===5&&r.type==="form"?$u(r):de.r(n)}var At=typeof document>"u"?null:document;function Am(n,r,e){var t=At;if(t&&typeof r=="string"&&r){var a=Er(r);a='link[rel="'+n+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),zm.has(a)||(zm.add(a),n={rel:n,crossOrigin:e,href:r},t.querySelector(a)===null&&(r=t.createElement("link"),er(r,"link",n),qn(r),t.head.appendChild(r)))}}function Gp(n){de.D(n),Am("dns-prefetch",n,null)}function Xp(n,r){de.C(n,r),Am("preconnect",n,r)}function Jp(n,r,e){de.L(n,r,e);var t=At;if(t&&n&&r){var a='link[rel="preload"][as="'+Er(r)+'"]';r==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+Er(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+Er(e.imageSizes)+'"]')):a+='[href="'+Er(n)+'"]';var l=a;switch(r){case"style":l=Wt(n);break;case"script":l=Mt(n)}Ar.has(l)||(n=y({rel:"preload",href:r==="image"&&e&&e.imageSrcSet?void 0:n,as:r},e),Ar.set(l,n),t.querySelector(a)!==null||r==="style"&&t.querySelector(_a(l))||r==="script"&&t.querySelector(Ta(l))||(r=t.createElement("link"),er(r,"link",n),qn(r),t.head.appendChild(r)))}}function Ip(n,r){de.m(n,r);var e=At;if(e&&n){var t=r&&typeof r.as=="string"?r.as:"script",a='link[rel="modulepreload"][as="'+Er(t)+'"][href="'+Er(n)+'"]',l=a;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Mt(n)}if(!Ar.has(l)&&(n=y({rel:"modulepreload",href:n},r),Ar.set(l,n),e.querySelector(a)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ta(l)))return}t=e.createElement("link"),er(t,"link",n),qn(t),e.head.appendChild(t)}}}function qp(n,r,e){de.S(n,r,e);var t=At;if(t&&n){var a=lt(t).hoistableStyles,l=Wt(n);r=r||"default";var i=a.get(l);if(!i){var s={loading:0,preload:null};if(i=t.querySelector(_a(l)))s.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},e),(e=Ar.get(l))&&wc(n,e);var p=i=t.createElement("link");qn(p),er(p,"link",n),p._p=new Promise(function(w,T){p.onload=w,p.onerror=T}),p.addEventListener("load",function(){s.loading|=1}),p.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Jl(i,r,t)}i={type:"stylesheet",instance:i,count:1,state:s},a.set(l,i)}}}function Kp(n,r){de.X(n,r);var e=At;if(e&&n){var t=lt(e).hoistableScripts,a=Mt(n),l=t.get(a);l||(l=e.querySelector(Ta(a)),l||(n=y({src:n,async:!0},r),(r=Ar.get(a))&&Oc(n,r),l=e.createElement("script"),qn(l),er(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(a,l))}}function $p(n,r){de.M(n,r);var e=At;if(e&&n){var t=lt(e).hoistableScripts,a=Mt(n),l=t.get(a);l||(l=e.querySelector(Ta(a)),l||(n=y({src:n,async:!0,type:"module"},r),(r=Ar.get(a))&&Oc(n,r),l=e.createElement("script"),qn(l),er(l,"link",n),e.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(a,l))}}function Wm(n,r,e,t){var a=(a=rn.current)?Xl(a):null;if(!a)throw Error(c(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(r=Wt(e.href),e=lt(a).hoistableStyles,t=e.get(r),t||(t={type:"style",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Wt(e.href);var l=lt(a).hoistableStyles,i=l.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,i),(l=a.querySelector(_a(n)))&&!l._p&&(i.instance=l,i.state.loading=5),Ar.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Ar.set(n,e),l||Pp(a,n,e,i.state))),r&&t===null)throw Error(c(528,""));return i}if(r&&t!==null)throw Error(c(529,""));return null;case"script":return r=e.async,e=e.src,typeof e=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Mt(e),e=lt(a).hoistableScripts,t=e.get(r),t||(t={type:"script",instance:null,count:0,state:null},e.set(r,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,n))}}function Wt(n){return'href="'+Er(n)+'"'}function _a(n){return'link[rel="stylesheet"]['+n+"]"}function Mm(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function Pp(n,r,e,t){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?t.loading=1:(r=n.createElement("link"),t.preload=r,r.addEventListener("load",function(){return t.loading|=1}),r.addEventListener("error",function(){return t.loading|=2}),er(r,"link",e),qn(r),n.head.appendChild(r))}function Mt(n){return'[src="'+Er(n)+'"]'}function Ta(n){return"script[async]"+n}function Dm(n,r,e){if(r.count++,r.instance===null)switch(r.type){case"style":var t=n.querySelector('style[data-href~="'+Er(e.href)+'"]');if(t)return r.instance=t,qn(t),t;var a=y({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),qn(t),er(t,"style",a),Jl(t,e.precedence,n),r.instance=t;case"stylesheet":a=Wt(e.href);var l=n.querySelector(_a(a));if(l)return r.state.loading|=4,r.instance=l,qn(l),l;t=Mm(e),(a=Ar.get(a))&&wc(t,a),l=(n.ownerDocument||n).createElement("link"),qn(l);var i=l;return i._p=new Promise(function(s,p){i.onload=s,i.onerror=p}),er(l,"link",t),r.state.loading|=4,Jl(l,e.precedence,n),r.instance=l;case"script":return l=Mt(e.src),(a=n.querySelector(Ta(l)))?(r.instance=a,qn(a),a):(t=e,(a=Ar.get(l))&&(t=y({},e),Oc(t,a)),n=n.ownerDocument||n,a=n.createElement("script"),qn(a),er(a,"link",t),n.head.appendChild(a),r.instance=a);case"void":return null;default:throw Error(c(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(t=r.instance,r.state.loading|=4,Jl(t,e.precedence,n));return r.instance}function Jl(n,r,e){for(var t=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=t.length?t[t.length-1]:null,l=a,i=0;i<t.length;i++){var s=t[i];if(s.dataset.precedence===r)l=s;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(r=e.nodeType===9?e.head:e,r.insertBefore(n,r.firstChild))}function wc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Oc(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Il=null;function Vm(n,r,e){if(Il===null){var t=new Map,a=Il=new Map;a.set(e,t)}else a=Il,t=a.get(e),t||(t=new Map,a.set(e,t));if(t.has(n))return t;for(t.set(n,null),e=e.getElementsByTagName(n),a=0;a<e.length;a++){var l=e[a];if(!(l[Gt]||l[$n]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(r)||"";i=n+i;var s=t.get(i);s?s.push(l):t.set(i,[l])}}return t}function Nm(n,r,e){n=n.ownerDocument||n,n.head.insertBefore(e,r==="title"?n.querySelector("head > title"):null)}function n0(n,r,e){if(e===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Lm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function r0(n,r,e,t){if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Wt(t.href),l=r.querySelector(_a(a));if(l){r=l._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=ql.bind(n),r.then(n,n)),e.state.loading|=4,e.instance=l,qn(l);return}l=r.ownerDocument||r,t=Mm(t),(a=Ar.get(a))&&wc(t,a),l=l.createElement("link"),qn(l);var i=l;i._p=new Promise(function(s,p){i.onload=s,i.onerror=p}),er(l,"link",t),e.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,r),(r=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=ql.bind(n),r.addEventListener("load",e),r.addEventListener("error",e))}}var kc=0;function e0(n,r){return n.stylesheets&&n.count===0&&$l(n,n.stylesheets),0<n.count||0<n.imgCount?function(e){var t=setTimeout(function(){if(n.stylesheets&&$l(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+r);0<n.imgBytes&&kc===0&&(kc=62500*Ap());var a=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&$l(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>kc?50:800)+r);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t),clearTimeout(a)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Kl=null;function $l(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Kl=new Map,r.forEach(t0,n),Kl=null,ql.call(n))}function t0(n,r){if(!(r.state.loading&4)){var e=Kl.get(n);if(e)var t=e.get(null);else{e=new Map,Kl.set(n,e);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var i=a[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),t=i)}t&&e.set(null,t)}a=r.instance,i=a.getAttribute("data-precedence"),l=e.get(i)||t,l===t&&e.set(null,a),e.set(i,a),this.count++,t=ql.bind(this),a.addEventListener("load",t),a.addEventListener("error",t),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),r.state.loading|=4}}var ja={$$typeof:K,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function a0(n,r,e,t,a,l,i,s,p){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=t,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Hm(n,r,e,t,a,l,i,s,p,w,T,R){return n=new a0(n,r,e,i,p,w,T,R,s),r=1,l===!0&&(r|=24),l=Qr(3,null,null,r),n.current=l,l.stateNode=n,r=lo(),r.refCount++,n.pooledCache=r,r.refCount++,l.memoizedState={element:t,isDehydrated:e,cache:r},so(l),n}function Zm(n){return n?(n=pt,n):pt}function Ym(n,r,e,t,a,l){a=Zm(a),t.context===null?t.context=a:t.pendingContext=a,t=ge(r),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Be(n,t,r),e!==null&&(mr(e,n,r),sa(e,n,r))}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function Ec(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function Xm(n){if(n.tag===13||n.tag===31){var r=He(n,67108864);r!==null&&mr(r,n,67108864),Ec(n,67108864)}}function Jm(n){if(n.tag===13||n.tag===31){var r=Ur();r=Bi(r);var e=He(n,r);e!==null&&mr(e,n,r),Ec(n,r)}}var Pl=!0;function l0(n,r,e,t){var a=_.T;_.T=null;var l=D.p;try{D.p=2,_c(n,r,e,t)}finally{D.p=l,_.T=a}}function i0(n,r,e,t){var a=_.T;_.T=null;var l=D.p;try{D.p=8,_c(n,r,e,t)}finally{D.p=l,_.T=a}}function _c(n,r,e,t){if(Pl){var a=Tc(t);if(a===null)pc(n,r,t,ni,e),qm(n,t);else if(c0(a,n,r,e,t))t.stopPropagation();else if(qm(n,t),r&4&&-1<o0.indexOf(n)){for(;a!==null;){var l=at(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=Me(l.pendingLanes);if(i!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var p=1<<31-vr(i);s.entanglements[1]|=p,i&=~p}Xr(l),(On&6)===0&&(Al=pr()+500,wa(0))}}break;case 31:case 13:s=He(l,2),s!==null&&mr(s,l,2),Ml(),Ec(l,2)}if(l=Tc(t),l===null&&pc(n,r,t,ni,e),l===a)break;a=l}a!==null&&t.stopPropagation()}else pc(n,r,t,null,e)}}function Tc(n){return n=ji(n),jc(n)}var ni=null;function jc(n){if(ni=null,n=tt(n),n!==null){var r=x(n);if(r===null)n=null;else{var e=r.tag;if(e===13){if(n=h(r),n!==null)return n;n=null}else if(e===31){if(n=U(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return ni=n,null}function Im(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yx()){case ts:return 2;case as:return 8;case Ha:case Gx:return 32;case ls:return 268435456;default:return 32}default:return 32}}var Sc=!1,Ce=null,Re=null,ze=null,Sa=new Map,Ca=new Map,Ae=[],o0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qm(n,r){switch(n){case"focusin":case"focusout":Ce=null;break;case"dragenter":case"dragleave":Re=null;break;case"mouseover":case"mouseout":ze=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(r.pointerId)}}function Ra(n,r,e,t,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:l,targetContainers:[a]},r!==null&&(r=at(r),r!==null&&Xm(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),n)}function c0(n,r,e,t,a){switch(r){case"focusin":return Ce=Ra(Ce,n,r,e,t,a),!0;case"dragenter":return Re=Ra(Re,n,r,e,t,a),!0;case"mouseover":return ze=Ra(ze,n,r,e,t,a),!0;case"pointerover":var l=a.pointerId;return Sa.set(l,Ra(Sa.get(l)||null,n,r,e,t,a)),!0;case"gotpointercapture":return l=a.pointerId,Ca.set(l,Ra(Ca.get(l)||null,n,r,e,t,a)),!0}return!1}function Km(n){var r=tt(n.target);if(r!==null){var e=x(r);if(e!==null){if(r=e.tag,r===13){if(r=h(e),r!==null){n.blockedOn=r,ds(n.priority,function(){Jm(e)});return}}else if(r===31){if(r=U(e),r!==null){n.blockedOn=r,ds(n.priority,function(){Jm(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ri(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=Tc(n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);Ti=t,e.target.dispatchEvent(t),Ti=null}else return r=at(e),r!==null&&Xm(r),n.blockedOn=e,!1;r.shift()}return!0}function $m(n,r,e){ri(n)&&e.delete(r)}function s0(){Sc=!1,Ce!==null&&ri(Ce)&&(Ce=null),Re!==null&&ri(Re)&&(Re=null),ze!==null&&ri(ze)&&(ze=null),Sa.forEach($m),Ca.forEach($m)}function ei(n,r){n.blockedOn===r&&(n.blockedOn=null,Sc||(Sc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,s0)))}var ti=null;function Pm(n){ti!==n&&(ti=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ti===n&&(ti=null);for(var r=0;r<n.length;r+=3){var e=n[r],t=n[r+1],a=n[r+2];if(typeof t!="function"){if(jc(t||e)===null)continue;break}var l=at(e);l!==null&&(n.splice(r,3),r-=3,To(l,{pending:!0,data:a,method:e.method,action:t},t,a))}}))}function Dt(n){function r(p){return ei(p,n)}Ce!==null&&ei(Ce,n),Re!==null&&ei(Re,n),ze!==null&&ei(ze,n),Sa.forEach(r),Ca.forEach(r);for(var e=0;e<Ae.length;e++){var t=Ae[e];t.blockedOn===n&&(t.blockedOn=null)}for(;0<Ae.length&&(e=Ae[0],e.blockedOn===null);)Km(e),e.blockedOn===null&&Ae.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=a[ir]||null;if(typeof l=="function")i||Pm(e);else if(i){var s=null;if(l&&l.hasAttribute("formAction")){if(a=l,i=l[ir]||null)s=i.formAction;else if(jc(a)!==null)continue}else s=i.action;typeof s=="function"?e[t+1]=s:(e.splice(t,3),t-=3),Pm(e)}}}function nx(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(i){return a=i})},focusReset:"manual",scroll:"manual"})}function r(){a!==null&&(a(),a=null),t||setTimeout(e,20)}function e(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,a=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(e,100),function(){t=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),a!==null&&(a(),a=null)}}}function Cc(n){this._internalRoot=n}ai.prototype.render=Cc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(c(409));var e=r.current,t=Ur();Ym(e,t,n,r,null,null)},ai.prototype.unmount=Cc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ym(n.current,2,null,n,null,null),Ml(),r[et]=null}};function ai(n){this._internalRoot=n}ai.prototype.unstable_scheduleHydration=function(n){if(n){var r=us();n={blockedOn:null,target:n,priority:r};for(var e=0;e<Ae.length&&r!==0&&r<Ae[e].priority;e++);Ae.splice(e,0,n),e===0&&Km(n)}};var rx=u.version;if(rx!=="19.2.7")throw Error(c(527,rx,"19.2.7"));D.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(c(188)):(n=Object.keys(n).join(","),Error(c(268,n)));return n=f(r),n=n!==null?B(n):null,n=n===null?null:n.stateNode,n};var u0={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Ht=li.inject(u0),hr=li}catch{}}return Aa.createRoot=function(n,r){if(!d(n))throw Error(c(299));var e=!1,t="",a=cd,l=sd,i=ud;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onUncaughtError!==void 0&&(a=r.onUncaughtError),r.onCaughtError!==void 0&&(l=r.onCaughtError),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Hm(n,1,!1,null,null,e,t,null,a,l,i,nx),n[et]=r.current,fc(n),new Cc(r)},Aa.hydrateRoot=function(n,r,e){if(!d(n))throw Error(c(299));var t=!1,a="",l=cd,i=sd,s=ud,p=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(p=e.formState)),r=Hm(n,1,!0,r,e??null,t,a,p,l,i,s,nx),r.context=Zm(null),e=r.current,t=Ur(),t=Bi(t),a=ge(t),a.callback=null,Be(e,a,t),e=t,r.current.lanes=e,Yt(r,e),Xr(r),n[et]=r.current,fc(n),new ai(r)},Aa.version="19.2.7",Aa}var dx;function g0(){if(dx)return Ac.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Ac.exports=y0(),Ac.exports}var B0=g0();var Xc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Bx=/^[\\/]{2}/;function F0(o,u){return u+o.replace(/\\/g,"/")}var mx="popstate";function xx(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function U0(o={}){function u(c,d){let x=d.state?.masked,{pathname:h,search:U,hash:Q}=x||c.location;return Hc("",{pathname:h,search:U,hash:Q},d.state&&d.state.usr||null,d.state&&d.state.key||"default",x?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function m(c,d){return typeof d=="string"?d:Ma(d)}return O0(u,m,null,o)}function Mn(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Lr(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function w0(){return Math.random().toString(36).substring(2,10)}function fx(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Hc(o,u,m=null,c,d){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?Vt(u):u,state:m,key:u&&u.key||c||w0(),mask:d}}function Ma({pathname:o="/",search:u="",hash:m=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),m&&m!=="#"&&(o+=m.charAt(0)==="#"?m:"#"+m),o}function Vt(o){let u={};if(o){let m=o.indexOf("#");m>=0&&(u.hash=o.substring(m),o=o.substring(0,m));let c=o.indexOf("?");c>=0&&(u.search=o.substring(c),o=o.substring(0,c)),o&&(u.pathname=o)}return u}function O0(o,u,m,c={}){let{window:d=document.defaultView,v5Compat:x=!1}=c,h=d.history,U="POP",Q=null,f=B();f==null&&(f=0,h.replaceState({...h.state,idx:f},""));function B(){return(h.state||{idx:null}).idx}function y(){U="POP";let z=B(),X=z==null?null:z-f;f=z,Q&&Q({action:U,location:N.location,delta:X})}function S(z,X){U="PUSH";let tn=xx(z)?z:Hc(N.location,z,X);f=B()+1;let K=fx(tn,f),Bn=N.createHref(tn.mask||tn);try{h.pushState(K,"",Bn)}catch(gn){if(gn instanceof DOMException&&gn.name==="DataCloneError")throw gn;d.location.assign(Bn)}x&&Q&&Q({action:U,location:N.location,delta:1})}function W(z,X){U="REPLACE";let tn=xx(z)?z:Hc(N.location,z,X);f=B();let K=fx(tn,f),Bn=N.createHref(tn.mask||tn);h.replaceState(K,"",Bn),x&&Q&&Q({action:U,location:N.location,delta:0})}function V(z){return k0(d,z)}let N={get action(){return U},get location(){return o(d,h)},listen(z){if(Q)throw new Error("A history only accepts one active listener");return d.addEventListener(mx,y),Q=z,()=>{d.removeEventListener(mx,y),Q=null}},createHref(z){return u(d,z)},createURL:V,encodeLocation(z){let X=V(z);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:S,replace:W,go(z){return h.go(z)}};return N}function k0(o,u,m=!1){let c="http://localhost";o&&(c=o.location.origin!=="null"?o.location.origin:o.location.href),Mn(c,"No window.location.(origin|href) available to create URL");let d=typeof u=="string"?u:Ma(u);return d=d.replace(/ $/,"%20"),!m&&Bx.test(d)&&(d=c+d),new URL(d,c)}function Fx(o,u,m="/"){return E0(o,u,m,!1)}function E0(o,u,m,c,d){let x=typeof u=="string"?Vt(u):u,h=me(x.pathname||"/",m);if(h==null)return null;let U=_0(o),Q=null,f=V0(h);for(let B=0;Q==null&&B<U.length;++B)Q=D0(U[B],f,c);return Q}function _0(o){let u=Ux(o);return T0(u),u}function Ux(o,u=[],m=[],c="",d=!1){let x=(h,U,Q=d,f)=>{let B={relativePath:f===void 0?h.path||"":f,caseSensitive:h.caseSensitive===!0,childrenIndex:U,route:h};if(B.relativePath.startsWith("/")){if(!B.relativePath.startsWith(c)&&Q)return;Mn(B.relativePath.startsWith(c),`Absolute route path "${B.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),B.relativePath=B.relativePath.slice(c.length)}let y=Nr([c,B.relativePath]),S=m.concat(B);h.children&&h.children.length>0&&(Mn(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ux(h.children,u,S,y,Q)),!(h.path==null&&!h.index)&&u.push({path:y,score:W0(y,h.index),routesMeta:S.map((W,V)=>{let[N,z]=kx(W.relativePath,W.caseSensitive,V===S.length-1);return{...W,matcher:N,compiledParams:z}})})};return o.forEach((h,U)=>{if(h.path===""||!h.path?.includes("?"))x(h,U);else for(let Q of wx(h.path))x(h,U,!0,Q)}),u}function wx(o){let u=o.split("/");if(u.length===0)return[];let[m,...c]=u,d=m.endsWith("?"),x=m.replace(/\?$/,"");if(c.length===0)return d?[x,""]:[x];let h=wx(c.join("/")),U=[];return U.push(...h.map(Q=>Q===""?x:[x,Q].join("/"))),d&&U.push(...h),U.map(Q=>o.startsWith("/")&&Q===""?"/":Q)}function T0(o){o.sort((u,m)=>u.score!==m.score?m.score-u.score:M0(u.routesMeta.map(c=>c.childrenIndex),m.routesMeta.map(c=>c.childrenIndex)))}var j0=/^:[\w-]+$/,S0=3,C0=2,R0=1,z0=10,A0=-2,px=o=>o==="*";function W0(o,u){let m=o.split("/"),c=m.length;return m.some(px)&&(c+=A0),u&&(c+=C0),m.filter(d=>!px(d)).reduce((d,x)=>d+(j0.test(x)?S0:x===""?R0:z0),c)}function M0(o,u){return o.length===u.length&&o.slice(0,-1).every((c,d)=>c===u[d])?o[o.length-1]-u[u.length-1]:0}function D0(o,u,m=!1){let{routesMeta:c}=o,d={},x="/",h=[];for(let U=0;U<c.length;++U){let Q=c[U],f=U===c.length-1,B=x==="/"?u:u.slice(x.length)||"/",y={path:Q.relativePath,caseSensitive:Q.caseSensitive,end:f},S=Q.matcher&&Q.compiledParams?Ox(y,B,Q.matcher,Q.compiledParams):mi(y,B),W=Q.route;if(!S&&f&&m&&!c[c.length-1].route.index&&(S=mi({path:Q.relativePath,caseSensitive:Q.caseSensitive,end:!1},B)),!S)return null;Object.assign(d,S.params),h.push({params:d,pathname:Nr([x,S.pathname]),pathnameBase:H0(Nr([x,S.pathnameBase])),route:W}),S.pathnameBase!=="/"&&(x=Nr([x,S.pathnameBase]))}return h}function mi(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[m,c]=kx(o.path,o.caseSensitive,o.end);return Ox(o,u,m,c)}function Ox(o,u,m,c){let d=u.match(m);if(!d)return null;let x=d[0],h=x.replace(/(.)\/+$/,"$1"),U=d.slice(1);return{params:c.reduce((f,{paramName:B,isOptional:y},S)=>{if(B==="*"){let V=U[S]||"";h=x.slice(0,x.length-V.length).replace(/(.)\/+$/,"$1")}const W=U[S];return y&&!W?f[B]=void 0:f[B]=(W||"").replace(/%2F/g,"/"),f},{}),pathname:x,pathnameBase:h,pattern:o}}function kx(o,u=!1,m=!0){Lr(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,U,Q,f,B)=>{if(c.push({paramName:U,isOptional:Q!=null}),Q){let y=B.charAt(f+h.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function V0(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Lr(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function me(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let m=u.endsWith("/")?u.length-1:u.length,c=o.charAt(m);return c&&c!=="/"?null:o.slice(m)||"/"}function N0(o,u="/"){let{pathname:m,search:c="",hash:d=""}=typeof o=="string"?Vt(o):o,x;return m?(m=Ex(m),m.startsWith("/")?x=hx(m.substring(1),"/"):x=hx(m,u)):x=u,{pathname:x,search:Z0(c),hash:Y0(d)}}function hx(o,u){let m=xi(u).split("/");return o.split("/").forEach(d=>{d===".."?m.length>1&&m.pop():d!=="."&&m.push(d)}),m.length>1?m.join("/"):"/"}function Vc(o,u,m,c){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function L0(o){return o.filter((u,m)=>m===0||u.route.path&&u.route.path.length>0)}function Jc(o){let u=L0(o);return u.map((m,c)=>c===u.length-1?m.pathname:m.pathnameBase)}function fi(o,u,m,c=!1){let d;typeof o=="string"?d=Vt(o):(d={...o},Mn(!d.pathname||!d.pathname.includes("?"),Vc("?","pathname","search",d)),Mn(!d.pathname||!d.pathname.includes("#"),Vc("#","pathname","hash",d)),Mn(!d.search||!d.search.includes("#"),Vc("#","search","hash",d)));let x=o===""||d.pathname==="",h=x?"/":d.pathname,U;if(h==null)U=m;else{let y=u.length-1;if(!c&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),y-=1;d.pathname=S.join("/")}U=y>=0?u[y]:"/"}let Q=N0(d,U),f=h&&h!=="/"&&h.endsWith("/"),B=(x||h===".")&&m.endsWith("/");return!Q.pathname.endsWith("/")&&(f||B)&&(Q.pathname+="/"),Q}var Ex=o=>o.replace(/[\\/]{2,}/g,"/"),Nr=o=>Ex(o.join("/")),xi=o=>o.replace(/\/+$/,""),H0=o=>xi(o).replace(/^\/*/,"/"),Z0=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Y0=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,G0=class{constructor(o,u,m,c=!1){this.status=o,this.statusText=u||"",this.internal=c,m instanceof Error?(this.data=m.toString(),this.error=m):this.data=m}};function X0(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function J0(o){let u=o.map(m=>m.route.path).filter(Boolean);return Nr(u)||"/"}var _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tx(o,u){let m=o;if(typeof m!="string"||!Xc.test(m))return{absoluteURL:void 0,isExternal:!1,to:m};let c=m,d=!1;if(_x)try{let x=new URL(window.location.href),h=Bx.test(m)?new URL(F0(m,x.protocol)):new URL(m),U=me(h.pathname,u);h.origin===x.origin&&U!=null?m=U+h.search+h.hash:d=!0}catch{Lr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jx=["POST","PUT","PATCH","DELETE"];new Set(jx);var I0=["GET",...jx];new Set(I0);var q0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function K0(o){try{return q0.includes(new URL(o).protocol)}catch{return!1}}var Nt=E.createContext(null);Nt.displayName="DataRouter";var pi=E.createContext(null);pi.displayName="DataRouterState";var Sx=E.createContext(!1);function $0(){return E.useContext(Sx)}var Cx=E.createContext({isTransitioning:!1});Cx.displayName="ViewTransition";var P0=E.createContext(new Map);P0.displayName="Fetchers";var nh=E.createContext(null);nh.displayName="Await";var wr=E.createContext(null);wr.displayName="Navigation";var Va=E.createContext(null);Va.displayName="Location";var Hr=E.createContext({outlet:null,matches:[],isDataRoute:!1});Hr.displayName="Route";var Ic=E.createContext(null);Ic.displayName="RouteError";var Rx="REACT_ROUTER_ERROR",rh="REDIRECT",eh="ROUTE_ERROR_RESPONSE";function th(o){if(o.startsWith(`${Rx}:${rh}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function ah(o){if(o.startsWith(`${Rx}:${eh}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new G0(u.status,u.statusText,u.data)}catch{}}function lh(o,{relative:u}={}){Mn(Lt(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:c}=E.useContext(wr),{hash:d,pathname:x,search:h}=Na(o,{relative:u}),U=x;return m!=="/"&&(U=x==="/"?m:Nr([m,x])),c.createHref({pathname:U,search:h,hash:d})}function Lt(){return E.useContext(Va)!=null}function Wr(){return Mn(Lt(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Va).location}var zx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ax(o){E.useContext(wr).static||E.useLayoutEffect(o)}function qc(){let{isDataRoute:o}=E.useContext(Hr);return o?Qh():ih()}function ih(){Mn(Lt(),"useNavigate() may be used only in the context of a <Router> component.");let o=E.useContext(Nt),{basename:u,navigator:m}=E.useContext(wr),{matches:c}=E.useContext(Hr),{pathname:d}=Wr(),x=JSON.stringify(Jc(c)),h=E.useRef(!1);return Ax(()=>{h.current=!0}),E.useCallback((Q,f={})=>{if(Lr(h.current,zx),!h.current)return;if(typeof Q=="number"){m.go(Q);return}let B=fi(Q,JSON.parse(x),d,f.relative==="path");o==null&&u!=="/"&&(B.pathname=B.pathname==="/"?u:Nr([u,B.pathname])),(f.replace?m.replace:m.push)(B,f.state,f)},[u,m,x,d,o])}E.createContext(null);function oh(){let{matches:o}=E.useContext(Hr);return o[o.length-1]?.params??{}}function Na(o,{relative:u}={}){let{matches:m}=E.useContext(Hr),{pathname:c}=Wr(),d=JSON.stringify(Jc(m));return E.useMemo(()=>fi(o,JSON.parse(d),c,u==="path"),[o,d,c,u])}function ch(o,u){return Wx(o,u)}function Wx(o,u,m){Mn(Lt(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=E.useContext(wr),{matches:d}=E.useContext(Hr),x=d[d.length-1],h=x?x.params:{},U=x?x.pathname:"/",Q=x?x.pathnameBase:"/",f=x&&x.route;{let z=f&&f.path||"";Dx(U,!f||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${U}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let B=Wr(),y;if(u){let z=typeof u=="string"?Vt(u):u;Mn(Q==="/"||z.pathname?.startsWith(Q),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${Q}" but pathname "${z.pathname}" was given in the \`location\` prop.`),y=z}else y=B;let S=y.pathname||"/",W=S;if(Q!=="/"){let z=Q.replace(/^\//,"").split("/");W="/"+S.replace(/^\//,"").split("/").slice(z.length).join("/")}let V=m&&m.state.matches.length?m.state.matches.map(z=>Object.assign(z,{route:m.manifest[z.route.id]||z.route})):Fx(o,{pathname:W});Lr(f||V!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Lr(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=xh(V&&V.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:Nr([Q,c.encodeLocation?c.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?Q:Nr([Q,c.encodeLocation?c.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),d,m);return u&&N?E.createElement(Va.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},N):N}function sh(){let o=bh(),u=X0(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),m=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},x={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",o),h=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:x},"ErrorBoundary")," or"," ",E.createElement("code",{style:x},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},u),m?E.createElement("pre",{style:d},m):null,h)}var uh=E.createElement(sh,null),Mx=class extends E.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const m=ah(o.digest);m&&(o=m)}let u=o!==void 0?E.createElement(Hr.Provider,{value:this.props.routeContext},E.createElement(Ic.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?E.createElement(dh,{error:o},u):u}};Mx.contextType=Sx;var Nc=new WeakMap;function dh({children:o,error:u}){let{basename:m}=E.useContext(wr);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=th(u.digest);if(c){let d=Nc.get(u);if(d)throw d;let x=Tx(c.location,m),h=x.absoluteURL||x.to;if(K0(h))throw new Error("Invalid redirect location");if(_x&&!Nc.get(u))if(x.isExternal||c.reloadDocument)window.location.href=h;else{const U=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(x.to,{replace:c.replace}));throw Nc.set(u,U),U}return E.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return o}function mh({routeContext:o,match:u,children:m}){let c=E.useContext(Nt);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),E.createElement(Hr.Provider,{value:o},m)}function xh(o,u=[],m){let c=m?.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let d=o,x=c?.errors;if(x!=null){let B=d.findIndex(y=>y.route.id&&x?.[y.route.id]!==void 0);Mn(B>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),d=d.slice(0,Math.min(d.length,B+1))}let h=!1,U=-1;if(m&&c){h=c.renderFallback;for(let B=0;B<d.length;B++){let y=d[B];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(U=B),y.route.id){let{loaderData:S,errors:W}=c,V=y.route.loader&&!S.hasOwnProperty(y.route.id)&&(!W||W[y.route.id]===void 0);if(y.route.lazy||V){m.isStatic&&(h=!0),U>=0?d=d.slice(0,U+1):d=[d[0]];break}}}}let Q=m?.onError,f=c&&Q?(B,y)=>{Q(B,{location:c.location,params:c.matches?.[0]?.params??{},pattern:J0(c.matches),errorInfo:y})}:void 0;return d.reduceRight((B,y,S)=>{let W,V=!1,N=null,z=null;c&&(W=x&&y.route.id?x[y.route.id]:void 0,N=y.route.errorElement||uh,h&&(U<0&&S===0?(Dx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,z=null):U===S&&(V=!0,z=y.route.hydrateFallbackElement||null)));let X=u.concat(d.slice(0,S+1)),tn=()=>{let K;return W?K=N:V?K=z:y.route.Component?K=E.createElement(y.route.Component,null):y.route.element?K=y.route.element:K=B,E.createElement(mh,{match:y,routeContext:{outlet:B,matches:X,isDataRoute:c!=null},children:K})};return c&&(y.route.ErrorBoundary||y.route.errorElement||S===0)?E.createElement(Mx,{location:c.location,revalidation:c.revalidation,component:N,error:W,children:tn(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:f}):tn()},null)}function Kc(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fh(o){let u=E.useContext(Nt);return Mn(u,Kc(o)),u}function ph(o){let u=E.useContext(pi);return Mn(u,Kc(o)),u}function hh(o){let u=E.useContext(Hr);return Mn(u,Kc(o)),u}function $c(o){let u=hh(o),m=u.matches[u.matches.length-1];return Mn(m.route.id,`${o} can only be used on routes that contain a unique "id"`),m.route.id}function vh(){return $c("useRouteId")}function bh(){let o=E.useContext(Ic),u=ph("useRouteError"),m=$c("useRouteError");return o!==void 0?o:u.errors?.[m]}function Qh(){let{router:o}=fh("useNavigate"),u=$c("useNavigate"),m=E.useRef(!1);return Ax(()=>{m.current=!0}),E.useCallback(async(d,x={})=>{Lr(m.current,zx),m.current&&(typeof d=="number"?await o.navigate(d):await o.navigate(d,{fromRouteId:u,...x}))},[o,u])}var vx={};function Dx(o,u,m){!u&&!vx[o]&&(vx[o]=!0,Lr(!1,m))}E.memo(yh);function yh({routes:o,manifest:u,future:m,state:c,isStatic:d,onError:x}){return Wx(o,void 0,{manifest:u,state:c,isStatic:d,onError:x})}function gh({to:o,replace:u,state:m,relative:c}){Mn(Lt(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=E.useContext(wr);Lr(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:x}=E.useContext(Hr),{pathname:h}=Wr(),U=qc(),Q=fi(o,Jc(x),h,c==="path"),f=JSON.stringify(Q);return E.useEffect(()=>{U(JSON.parse(f),{replace:u,state:m,relative:c})},[U,f,c,u,m]),null}function oi(o){Mn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bh({basename:o="/",children:u=null,location:m,navigationType:c="POP",navigator:d,static:x=!1,useTransitions:h}){Mn(!Lt(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let U=o.replace(/^\/*/,"/"),Q=E.useMemo(()=>({basename:U,navigator:d,static:x,useTransitions:h,future:{}}),[U,d,x,h]);typeof m=="string"&&(m=Vt(m));let{pathname:f="/",search:B="",hash:y="",state:S=null,key:W="default",mask:V}=m,N=E.useMemo(()=>{let z=me(f,U);return z==null?null:{location:{pathname:z,search:B,hash:y,state:S,key:W,mask:V},navigationType:c}},[U,f,B,y,S,W,c,V]);return Lr(N!=null,`<Router basename="${U}"> is not able to match the URL "${f}${B}${y}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:E.createElement(wr.Provider,{value:Q},E.createElement(Va.Provider,{children:u,value:N}))}function Fh({children:o,location:u}){return ch(Zc(o),u)}function Zc(o,u=[]){let m=[];return E.Children.forEach(o,(c,d)=>{if(!E.isValidElement(c))return;let x=[...u,d];if(c.type===E.Fragment){m.push.apply(m,Zc(c.props.children,x));return}Mn(c.type===oi,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Mn(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||x.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=Zc(c.props.children,x)),m.push(h)}),m}var ci="get",si="application/x-www-form-urlencoded";function hi(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Uh(o){return hi(o)&&o.tagName.toLowerCase()==="button"}function wh(o){return hi(o)&&o.tagName.toLowerCase()==="form"}function Oh(o){return hi(o)&&o.tagName.toLowerCase()==="input"}function kh(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Eh(o,u){return o.button===0&&(!u||u==="_self")&&!kh(o)}var ii=null;function _h(){if(ii===null)try{new FormData(document.createElement("form"),0),ii=!1}catch{ii=!0}return ii}var Th=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Lc(o){return o!=null&&!Th.has(o)?(Lr(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${si}"`),null):o}function jh(o,u){let m,c,d,x,h;if(wh(o)){let U=o.getAttribute("action");c=U?me(U,u):null,m=o.getAttribute("method")||ci,d=Lc(o.getAttribute("enctype"))||si,x=new FormData(o)}else if(Uh(o)||Oh(o)&&(o.type==="submit"||o.type==="image")){let U=o.form;if(U==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let Q=o.getAttribute("formaction")||U.getAttribute("action");if(c=Q?me(Q,u):null,m=o.getAttribute("formmethod")||U.getAttribute("method")||ci,d=Lc(o.getAttribute("formenctype"))||Lc(U.getAttribute("enctype"))||si,x=new FormData(U,o),!_h()){let{name:f,type:B,value:y}=o;if(B==="image"){let S=f?`${f}.`:"";x.append(`${S}x`,"0"),x.append(`${S}y`,"0")}else f&&x.append(f,y)}}else{if(hi(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=ci,c=null,d=si,h=o}return x&&d==="text/plain"&&(h=x,x=void 0),{action:c,method:m.toLowerCase(),encType:d,formData:x,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pc(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Vx(o,u,m,c){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return m?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:u&&me(d.pathname,u)==="/"?d.pathname=`${xi(u)}/_root.${c}`:d.pathname=`${xi(d.pathname)}.${c}`,d}async function Sh(o,u){if(o.id in u)return u[o.id];try{let m=await import(o.module);return u[o.id]=m,m}catch(m){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ch(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Rh(o,u,m){let c=await Promise.all(o.map(async d=>{let x=u.routes[d.route.id];if(x){let h=await Sh(x,m);return h.links?h.links():[]}return[]}));return Mh(c.flat(1).filter(Ch).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function bx(o,u,m,c,d,x){let h=(Q,f)=>m[f]?Q.route.id!==m[f].route.id:!0,U=(Q,f)=>m[f].pathname!==Q.pathname||m[f].route.path?.endsWith("*")&&m[f].params["*"]!==Q.params["*"];return x==="assets"?u.filter((Q,f)=>h(Q,f)||U(Q,f)):x==="data"?u.filter((Q,f)=>{let B=c.routes[Q.route.id];if(!B||!B.hasLoader)return!1;if(h(Q,f)||U(Q,f))return!0;if(Q.route.shouldRevalidate){let y=Q.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:m[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:Q.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function zh(o,u,{includeHydrateFallback:m}={}){return Ah(o.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let x=[d.module];return d.clientActionModule&&(x=x.concat(d.clientActionModule)),d.clientLoaderModule&&(x=x.concat(d.clientLoaderModule)),m&&d.hydrateFallbackModule&&(x=x.concat(d.hydrateFallbackModule)),d.imports&&(x=x.concat(d.imports)),x}).flat(1))}function Ah(o){return[...new Set(o)]}function Wh(o){let u={},m=Object.keys(o).sort();for(let c of m)u[c]=o[c];return u}function Mh(o,u){let m=new Set;return new Set(u),o.reduce((c,d)=>{let x=JSON.stringify(Wh(d));return m.has(x)||(m.add(x),c.push({key:x,link:d})),c},[])}function ns(){let o=E.useContext(Nt);return Pc(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Dh(){let o=E.useContext(pi);return Pc(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var rs=E.createContext(void 0);rs.displayName="FrameworkContext";function vi(){let o=E.useContext(rs);return Pc(o,"You must render this element inside a <HydratedRouter> element"),o}function Vh(o,u){let m=E.useContext(rs),[c,d]=E.useState(!1),[x,h]=E.useState(!1),{onFocus:U,onBlur:Q,onMouseEnter:f,onMouseLeave:B,onTouchStart:y}=u,S=E.useRef(null);E.useEffect(()=>{if(o==="render"&&h(!0),o==="viewport"){let N=X=>{X.forEach(tn=>{h(tn.isIntersecting)})},z=new IntersectionObserver(N,{threshold:.5});return S.current&&z.observe(S.current),()=>{z.disconnect()}}},[o]),E.useEffect(()=>{if(c){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[c]);let W=()=>{d(!0)},V=()=>{d(!1),h(!1)};return m?o!=="intent"?[x,S,{}]:[x,S,{onFocus:Wa(U,W),onBlur:Wa(Q,V),onMouseEnter:Wa(f,W),onMouseLeave:Wa(B,V),onTouchStart:Wa(y,W)}]:[!1,S,{}]}function Wa(o,u){return m=>{o&&o(m),m.defaultPrevented||u(m)}}function Nh({page:o,...u}){let m=$0(),{nonce:c}=vi(),{router:d}=ns(),x=E.useMemo(()=>Fx(d.routes,o,d.basename),[d.routes,o,d.basename]);return x?(u.nonce==null&&c&&(u={...u,nonce:c}),m?E.createElement(Hh,{page:o,matches:x,...u}):E.createElement(Zh,{page:o,matches:x,...u})):null}function Lh(o){let{manifest:u,routeModules:m}=vi(),[c,d]=E.useState([]);return E.useEffect(()=>{let x=!1;return Rh(o,u,m).then(h=>{x||d(h)}),()=>{x=!0}},[o,u,m]),c}function Hh({page:o,matches:u,...m}){let c=Wr(),{future:d}=vi(),{basename:x}=ns(),h=E.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let U=Vx(o,x,d.v8_trailingSlashAwareDataRequests,"rsc"),Q=!1,f=[];for(let B of u)typeof B.route.shouldRevalidate=="function"?Q=!0:f.push(B.route.id);return Q&&f.length>0&&U.searchParams.set("_routes",f.join(",")),[U.pathname+U.search]},[x,d.v8_trailingSlashAwareDataRequests,o,c,u]);return E.createElement(E.Fragment,null,h.map(U=>E.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...m})))}function Zh({page:o,matches:u,...m}){let c=Wr(),{future:d,manifest:x,routeModules:h}=vi(),{basename:U}=ns(),{loaderData:Q,matches:f}=Dh(),B=E.useMemo(()=>bx(o,u,f,x,c,"data"),[o,u,f,x,c]),y=E.useMemo(()=>bx(o,u,f,x,c,"assets"),[o,u,f,x,c]),S=E.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let N=new Set,z=!1;if(u.forEach(tn=>{let K=x.routes[tn.route.id];!K||!K.hasLoader||(!B.some(Bn=>Bn.route.id===tn.route.id)&&tn.route.id in Q&&h[tn.route.id]?.shouldRevalidate||K.hasClientLoader?z=!0:N.add(tn.route.id))}),N.size===0)return[];let X=Vx(o,U,d.v8_trailingSlashAwareDataRequests,"data");return z&&N.size>0&&X.searchParams.set("_routes",u.filter(tn=>N.has(tn.route.id)).map(tn=>tn.route.id).join(",")),[X.pathname+X.search]},[U,d.v8_trailingSlashAwareDataRequests,Q,c,x,B,u,o,h]),W=E.useMemo(()=>zh(y,x),[y,x]),V=Lh(y);return E.createElement(E.Fragment,null,S.map(N=>E.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...m})),W.map(N=>E.createElement("link",{key:N,rel:"modulepreload",href:N,...m})),V.map(({key:N,link:z})=>E.createElement("link",{key:N,nonce:m.nonce,...z,crossOrigin:z.crossOrigin??m.crossOrigin})))}function Yh(...o){return u=>{o.forEach(m=>{typeof m=="function"?m(u):m!=null&&(m.current=u)})}}var Gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gh&&(window.__reactRouterVersion="7.18.1")}catch{}function Xh({basename:o,children:u,useTransitions:m,window:c}){let d=E.useRef();d.current==null&&(d.current=U0({window:c,v5Compat:!0}));let x=d.current,[h,U]=E.useState({action:x.action,location:x.location}),Q=E.useCallback(f=>{m===!1?U(f):E.startTransition(()=>U(f))},[m]);return E.useLayoutEffect(()=>x.listen(Q),[x,Q]),E.createElement(Bh,{basename:o,children:u,location:h.location,navigationType:h.action,navigator:x,useTransitions:m})}var Da=E.forwardRef(function({onClick:u,discover:m="render",prefetch:c="none",relative:d,reloadDocument:x,replace:h,mask:U,state:Q,target:f,to:B,preventScrollReset:y,viewTransition:S,defaultShouldRevalidate:W,...V},N){let{basename:z,navigator:X,useTransitions:tn}=E.useContext(wr),K=typeof B=="string"&&Xc.test(B),Bn=Tx(B,z);B=Bn.to;let gn=lh(B,{relative:d}),un=Wr(),P=null;if(U){let dn=fi(U,[],un.mask?un.mask.pathname:"/",!0);z!=="/"&&(dn.pathname=dn.pathname==="/"?z:Nr([z,dn.pathname])),P=X.createHref(dn)}let[an,_n,Xn]=Vh(c,V),Y=Kh(B,{replace:h,mask:U,state:Q,target:f,preventScrollReset:y,relative:d,viewTransition:S,defaultShouldRevalidate:W,useTransitions:tn});function L(dn){u&&u(dn),dn.defaultPrevented||Y(dn)}let cn=!(Bn.isExternal||x),J=E.createElement("a",{...V,...Xn,href:(cn?P:void 0)||Bn.absoluteURL||gn,onClick:cn?L:u,ref:Yh(N,_n),target:f,"data-discover":!K&&m==="render"?"true":void 0});return an&&!K?E.createElement(E.Fragment,null,J,E.createElement(Nh,{page:gn})):J});Da.displayName="Link";var Jh=E.forwardRef(function({"aria-current":u="page",caseSensitive:m=!1,className:c="",end:d=!1,style:x,to:h,viewTransition:U,children:Q,...f},B){let y=Na(h,{relative:f.relative}),S=Wr(),W=E.useContext(pi),{navigator:V,basename:N}=E.useContext(wr),z=W!=null&&ev(y)&&U===!0,X=V.encodeLocation?V.encodeLocation(y).pathname:y.pathname,tn=S.pathname,K=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;m||(tn=tn.toLowerCase(),K=K?K.toLowerCase():null,X=X.toLowerCase()),K&&N&&(K=me(K,N)||K);const Bn=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let gn=tn===X||!d&&tn.startsWith(X)&&tn.charAt(Bn)==="/",un=K!=null&&(K===X||!d&&K.startsWith(X)&&K.charAt(X.length)==="/"),P={isActive:gn,isPending:un,isTransitioning:z},an=gn?u:void 0,_n;typeof c=="function"?_n=c(P):_n=[c,gn?"active":null,un?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let Xn=typeof x=="function"?x(P):x;return E.createElement(Da,{...f,"aria-current":an,className:_n,ref:B,style:Xn,to:h,viewTransition:U},typeof Q=="function"?Q(P):Q)});Jh.displayName="NavLink";var Ih=E.forwardRef(({discover:o="render",fetcherKey:u,navigate:m,reloadDocument:c,replace:d,state:x,method:h=ci,action:U,onSubmit:Q,relative:f,preventScrollReset:B,viewTransition:y,defaultShouldRevalidate:S,...W},V)=>{let{useTransitions:N}=E.useContext(wr),z=nv(),X=rv(U,{relative:f}),tn=h.toLowerCase()==="get"?"get":"post",K=typeof U=="string"&&Xc.test(U),Bn=gn=>{if(Q&&Q(gn),gn.defaultPrevented)return;gn.preventDefault();let un=gn.nativeEvent.submitter,P=un?.getAttribute("formmethod")||h,an=()=>z(un||gn.currentTarget,{fetcherKey:u,method:P,navigate:m,replace:d,state:x,relative:f,preventScrollReset:B,viewTransition:y,defaultShouldRevalidate:S});N&&m!==!1?E.startTransition(()=>an()):an()};return E.createElement("form",{ref:V,method:tn,action:X,onSubmit:c?Q:Bn,...W,"data-discover":!K&&o==="render"?"true":void 0})});Ih.displayName="Form";function qh(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nx(o){let u=E.useContext(Nt);return Mn(u,qh(o)),u}function Kh(o,{target:u,replace:m,mask:c,state:d,preventScrollReset:x,relative:h,viewTransition:U,defaultShouldRevalidate:Q,useTransitions:f}={}){let B=qc(),y=Wr(),S=Na(o,{relative:h});return E.useCallback(W=>{if(Eh(W,u)){W.preventDefault();let V=m!==void 0?m:Ma(y)===Ma(S),N=()=>B(o,{replace:V,mask:c,state:d,preventScrollReset:x,relative:h,viewTransition:U,defaultShouldRevalidate:Q});f?E.startTransition(()=>N()):N()}},[y,B,S,m,c,d,u,o,x,h,U,Q,f])}var $h=0,Ph=()=>`__${String(++$h)}__`;function nv(){let{router:o}=Nx("useSubmit"),{basename:u}=E.useContext(wr),m=vh(),c=o.fetch,d=o.navigate;return E.useCallback(async(x,h={})=>{let{action:U,method:Q,encType:f,formData:B,body:y}=jh(x,u);if(h.navigate===!1){let S=h.fetcherKey||Ph();await c(S,m,h.action||U,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:B,body:y,formMethod:h.method||Q,formEncType:h.encType||f,flushSync:h.flushSync})}else await d(h.action||U,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:B,body:y,formMethod:h.method||Q,formEncType:h.encType||f,replace:h.replace,state:h.state,fromRouteId:m,flushSync:h.flushSync,viewTransition:h.viewTransition})},[c,d,u,m])}function rv(o,{relative:u}={}){let{basename:m}=E.useContext(wr),c=E.useContext(Hr);Mn(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),x={...Na(o||".",{relative:u})},h=Wr();if(o==null){x.search=h.search;let U=new URLSearchParams(x.search),Q=U.getAll("index");if(Q.some(B=>B==="")){U.delete("index"),Q.filter(y=>y).forEach(y=>U.append("index",y));let B=U.toString();x.search=B?`?${B}`:""}}return(!o||o===".")&&d.route.index&&(x.search=x.search?x.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(x.pathname=x.pathname==="/"?m:Nr([m,x.pathname])),Ma(x)}function ev(o,{relative:u}={}){let m=E.useContext(Cx);Mn(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Nx("useViewTransitionState"),d=Na(o,{relative:u});if(!m.isTransitioning)return!1;let x=me(m.currentLocation.pathname,c)||m.currentLocation.pathname,h=me(m.nextLocation.pathname,c)||m.nextLocation.pathname;return mi(d.pathname,h)!=null||mi(d.pathname,x)!=null}var ui={exports:{}},tv=ui.exports,Qx;function av(){return Qx||(Qx=1,(function(o,u){(function(m,c){o.exports=c()})(tv,function(){return(function(m){function c(x){if(d[x])return d[x].exports;var h=d[x]={exports:{},id:x,loaded:!1};return m[x].call(h.exports,h,h.exports,c),h.loaded=!0,h.exports}var d={};return c.m=m,c.c=d,c.p="dist/",c(0)})([function(m,c,d){function x(J){return J&&J.__esModule?J:{default:J}}var h=Object.assign||function(J){for(var dn=1;dn<arguments.length;dn++){var _=arguments[dn];for(var D in _)Object.prototype.hasOwnProperty.call(_,D)&&(J[D]=_[D])}return J},U=d(1),Q=(x(U),d(6)),f=x(Q),B=d(7),y=x(B),S=d(8),W=x(S),V=d(9),N=x(V),z=d(10),X=x(z),tn=d(11),K=x(tn),Bn=d(14),gn=x(Bn),un=[],P=!1,an={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_n=function(){var J=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(J&&(P=!0),P)return un=(0,K.default)(un,an),(0,X.default)(un,an.once),un},Xn=function(){un=(0,gn.default)(),_n()},Y=function(){un.forEach(function(J,dn){J.node.removeAttribute("data-aos"),J.node.removeAttribute("data-aos-easing"),J.node.removeAttribute("data-aos-duration"),J.node.removeAttribute("data-aos-delay")})},L=function(J){return J===!0||J==="mobile"&&N.default.mobile()||J==="phone"&&N.default.phone()||J==="tablet"&&N.default.tablet()||typeof J=="function"&&J()===!0},cn=function(J){an=h(an,J),un=(0,gn.default)();var dn=document.all&&!window.atob;return L(an.disable)||dn?Y():(an.disableMutationObserver||W.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),an.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",an.easing),document.querySelector("body").setAttribute("data-aos-duration",an.duration),document.querySelector("body").setAttribute("data-aos-delay",an.delay),an.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_n(!0):an.startEvent==="load"?window.addEventListener(an.startEvent,function(){_n(!0)}):document.addEventListener(an.startEvent,function(){_n(!0)}),window.addEventListener("resize",(0,y.default)(_n,an.debounceDelay,!0)),window.addEventListener("orientationchange",(0,y.default)(_n,an.debounceDelay,!0)),window.addEventListener("scroll",(0,f.default)(function(){(0,X.default)(un,an.once)},an.throttleDelay)),an.disableMutationObserver||W.default.ready("[data-aos]",Xn),un)};m.exports={init:cn,refresh:_n,refreshHard:Xn}},function(m,c){},,,,,function(m,c){(function(d){function x(L,cn,J){function dn(pn){var In=H,Or=$;return H=$=void 0,lr=pn,en=L.apply(Or,In)}function _(pn){return lr=pn,bn=setTimeout(fn,cn),xr?dn(pn):en}function D(pn){var In=pn-Qn,Or=pn-lr,La=cn-In;return fr?Xn(La,rn-Or):La}function I(pn){var In=pn-Qn,Or=pn-lr;return Qn===void 0||In>=cn||In<0||fr&&Or>=rn}function fn(){var pn=Y();return I(pn)?Fn(pn):void(bn=setTimeout(fn,D(pn)))}function Fn(pn){return bn=void 0,Rn&&H?dn(pn):(H=$=void 0,en)}function b(){bn!==void 0&&clearTimeout(bn),lr=0,H=Qn=$=bn=void 0}function C(){return bn===void 0?en:Fn(Y())}function M(){var pn=Y(),In=I(pn);if(H=arguments,$=this,Qn=pn,In){if(bn===void 0)return _(Qn);if(fr)return bn=setTimeout(fn,cn),dn(Qn)}return bn===void 0&&(bn=setTimeout(fn,cn)),en}var H,$,rn,en,bn,Qn,lr=0,xr=!1,fr=!1,Rn=!0;if(typeof L!="function")throw new TypeError(S);return cn=B(cn)||0,U(J)&&(xr=!!J.leading,fr="maxWait"in J,rn=fr?_n(B(J.maxWait)||0,cn):rn,Rn="trailing"in J?!!J.trailing:Rn),M.cancel=b,M.flush=C,M}function h(L,cn,J){var dn=!0,_=!0;if(typeof L!="function")throw new TypeError(S);return U(J)&&(dn="leading"in J?!!J.leading:dn,_="trailing"in J?!!J.trailing:_),x(L,cn,{leading:dn,maxWait:cn,trailing:_})}function U(L){var cn=typeof L>"u"?"undefined":y(L);return!!L&&(cn=="object"||cn=="function")}function Q(L){return!!L&&(typeof L>"u"?"undefined":y(L))=="object"}function f(L){return(typeof L>"u"?"undefined":y(L))=="symbol"||Q(L)&&an.call(L)==V}function B(L){if(typeof L=="number")return L;if(f(L))return W;if(U(L)){var cn=typeof L.valueOf=="function"?L.valueOf():L;L=U(cn)?cn+"":cn}if(typeof L!="string")return L===0?L:+L;L=L.replace(N,"");var J=X.test(L);return J||tn.test(L)?K(L.slice(2),J?2:8):z.test(L)?W:+L}var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},S="Expected a function",W=NaN,V="[object Symbol]",N=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,tn=/^0o[0-7]+$/i,K=parseInt,Bn=(typeof d>"u"?"undefined":y(d))=="object"&&d&&d.Object===Object&&d,gn=(typeof self>"u"?"undefined":y(self))=="object"&&self&&self.Object===Object&&self,un=Bn||gn||Function("return this")(),P=Object.prototype,an=P.toString,_n=Math.max,Xn=Math.min,Y=function(){return un.Date.now()};m.exports=h}).call(c,(function(){return this})())},function(m,c){(function(d){function x(Y,L,cn){function J(Rn){var pn=M,In=H;return M=H=void 0,Qn=Rn,rn=Y.apply(In,pn)}function dn(Rn){return Qn=Rn,en=setTimeout(I,L),lr?J(Rn):rn}function _(Rn){var pn=Rn-bn,In=Rn-Qn,Or=L-pn;return xr?_n(Or,$-In):Or}function D(Rn){var pn=Rn-bn,In=Rn-Qn;return bn===void 0||pn>=L||pn<0||xr&&In>=$}function I(){var Rn=Xn();return D(Rn)?fn(Rn):void(en=setTimeout(I,_(Rn)))}function fn(Rn){return en=void 0,fr&&M?J(Rn):(M=H=void 0,rn)}function Fn(){en!==void 0&&clearTimeout(en),Qn=0,M=bn=H=en=void 0}function b(){return en===void 0?rn:fn(Xn())}function C(){var Rn=Xn(),pn=D(Rn);if(M=arguments,H=this,bn=Rn,pn){if(en===void 0)return dn(bn);if(xr)return en=setTimeout(I,L),J(bn)}return en===void 0&&(en=setTimeout(I,L)),rn}var M,H,$,rn,en,bn,Qn=0,lr=!1,xr=!1,fr=!0;if(typeof Y!="function")throw new TypeError(y);return L=f(L)||0,h(cn)&&(lr=!!cn.leading,xr="maxWait"in cn,$=xr?an(f(cn.maxWait)||0,L):$,fr="trailing"in cn?!!cn.trailing:fr),C.cancel=Fn,C.flush=b,C}function h(Y){var L=typeof Y>"u"?"undefined":B(Y);return!!Y&&(L=="object"||L=="function")}function U(Y){return!!Y&&(typeof Y>"u"?"undefined":B(Y))=="object"}function Q(Y){return(typeof Y>"u"?"undefined":B(Y))=="symbol"||U(Y)&&P.call(Y)==W}function f(Y){if(typeof Y=="number")return Y;if(Q(Y))return S;if(h(Y)){var L=typeof Y.valueOf=="function"?Y.valueOf():Y;Y=h(L)?L+"":L}if(typeof Y!="string")return Y===0?Y:+Y;Y=Y.replace(V,"");var cn=z.test(Y);return cn||X.test(Y)?tn(Y.slice(2),cn?2:8):N.test(Y)?S:+Y}var B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Y){return typeof Y}:function(Y){return Y&&typeof Symbol=="function"&&Y.constructor===Symbol&&Y!==Symbol.prototype?"symbol":typeof Y},y="Expected a function",S=NaN,W="[object Symbol]",V=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,X=/^0o[0-7]+$/i,tn=parseInt,K=(typeof d>"u"?"undefined":B(d))=="object"&&d&&d.Object===Object&&d,Bn=(typeof self>"u"?"undefined":B(self))=="object"&&self&&self.Object===Object&&self,gn=K||Bn||Function("return this")(),un=Object.prototype,P=un.toString,an=Math.max,_n=Math.min,Xn=function(){return gn.Date.now()};m.exports=x}).call(c,(function(){return this})())},function(m,c){function d(B){var y=void 0,S=void 0;for(y=0;y<B.length;y+=1)if(S=B[y],S.dataset&&S.dataset.aos||S.children&&d(S.children))return!0;return!1}function x(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function h(){return!!x()}function U(B,y){var S=window.document,W=x(),V=new W(Q);f=y,V.observe(S.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function Q(B){B&&B.forEach(function(y){var S=Array.prototype.slice.call(y.addedNodes),W=Array.prototype.slice.call(y.removedNodes),V=S.concat(W);if(d(V))return f()})}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){};c.default={isSupported:h,ready:U}},function(m,c){function d(S,W){if(!(S instanceof W))throw new TypeError("Cannot call a class as a function")}function x(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var h=(function(){function S(W,V){for(var N=0;N<V.length;N++){var z=V[N];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(W,z.key,z)}}return function(W,V,N){return V&&S(W.prototype,V),N&&S(W,N),W}})(),U=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,B=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,y=(function(){function S(){d(this,S)}return h(S,[{key:"phone",value:function(){var W=x();return!(!U.test(W)&&!Q.test(W.substr(0,4)))}},{key:"mobile",value:function(){var W=x();return!(!f.test(W)&&!B.test(W.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),S})();c.default=new y},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(h,U,Q){var f=h.node.getAttribute("data-aos-once");U>h.position?h.node.classList.add("aos-animate"):typeof f<"u"&&(f==="false"||!Q&&f!=="true")&&h.node.classList.remove("aos-animate")},x=function(h,U){var Q=window.pageYOffset,f=window.innerHeight;h.forEach(function(B,y){d(B,f+Q,U)})};c.default=x},function(m,c,d){function x(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(c,"__esModule",{value:!0});var h=d(12),U=x(h),Q=function(f,B){return f.forEach(function(y,S){y.node.classList.add("aos-init"),y.position=(0,U.default)(y.node,B.offset)}),f};c.default=Q},function(m,c,d){function x(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(c,"__esModule",{value:!0});var h=d(13),U=x(h),Q=function(f,B){var y=0,S=0,W=window.innerHeight,V={offset:f.getAttribute("data-aos-offset"),anchor:f.getAttribute("data-aos-anchor"),anchorPlacement:f.getAttribute("data-aos-anchor-placement")};switch(V.offset&&!isNaN(V.offset)&&(S=parseInt(V.offset)),V.anchor&&document.querySelectorAll(V.anchor)&&(f=document.querySelectorAll(V.anchor)[0]),y=(0,U.default)(f).top,V.anchorPlacement){case"top-bottom":break;case"center-bottom":y+=f.offsetHeight/2;break;case"bottom-bottom":y+=f.offsetHeight;break;case"top-center":y+=W/2;break;case"bottom-center":y+=W/2+f.offsetHeight;break;case"center-center":y+=W/2+f.offsetHeight/2;break;case"top-top":y+=W;break;case"bottom-top":y+=f.offsetHeight+W;break;case"center-top":y+=f.offsetHeight/2+W}return V.anchorPlacement||V.offset||isNaN(B)||(S=B),y+S};c.default=Q},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(x){for(var h=0,U=0;x&&!isNaN(x.offsetLeft)&&!isNaN(x.offsetTop);)h+=x.offsetLeft-(x.tagName!="BODY"?x.scrollLeft:0),U+=x.offsetTop-(x.tagName!="BODY"?x.scrollTop:0),x=x.offsetParent;return{top:U,left:h}};c.default=d},function(m,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(x){return x=x||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(x,function(h){return{node:h}})};c.default=d}])})})(ui)),ui.exports}var lv=av();const yx=m0(lv),iv=`<!DOCTYPE html lang="en" data-headlessui-focus-visible>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1" />\r
    <meta name="theme-color" content="#000000" />\r
    <meta name="description" content="A product of emergent.sh" />\r
    <link rel="preconnect" href="https://fonts.googleapis.com" />\r
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\r
    <link\r
      href="https://fonts.googleapis.com/css2?family=Inter:wght@600&amp;display=swap"\r
      rel="stylesheet"\r
    />\r
    <!--\r
        manifest.json provides metadata used when your web app is installed on a\r
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\r
        -->\r
    <!--\r
        Notice the use of  in the tags above.\r
        It will be replaced with the URL of the \`public\` folder during the build.\r
        Only files inside the \`public\` folder can be referenced from the HTML.\r
\r
        Unlike "/favicon.ico" or "favicon.ico", "/favicon.ico" will\r
        work correctly both with client-side routing and a non-root public URL.\r
        Learn how to configure a non-root public URL by running \`npm run build\`.\r
        -->\r
    <title>Manmohan Jangra · Frontend Engineer</title>\r
    <meta\r
      name="description"\r
      content="Portfolio of Manmohan Jangra — Frontend Engineer specializing in high-performance React, micro-frontends, real-time UIs, and AI-assisted development workflows."\r
    />\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      async=""\r
      src="https://us-assets.i.posthog.com/static/array.js"\r
    ><\/script>\r
    <script>\r
      window.addEventListener(\r
        "error",\r
        function (e) {\r
          if (\r
            e.error instanceof DOMException &&\r
            e.error.name === "DataCloneError" &&\r
            e.message &&\r
            e.message.includes("PerformanceServerTiming")\r
          ) {\r
            e.stopImmediatePropagation();\r
            e.preventDefault();\r
          }\r
        },\r
        true,\r
      );\r
    <\/script>\r
    <script src="https://assets.emergent.sh/scripts/emergent-main.js"><\/script>\r
    <script defer="" src="/static/js/bundle.js"><\/script>\r
    <script>\r
      if (window.self !== window.top) {\r
        var s = document.createElement("script");\r
        s.src = "/visual-edit-overlay.js";\r
        document.head.appendChild(s);\r
        window.tailwind = window.tailwind || {};\r
        tailwind.config = { corePlugins: { preflight: false } };\r
        var t = document.createElement("script");\r
        t.src = "https://cdn.tailwindcss.com";\r
        document.head.appendChild(t);\r
      }\r
    <\/script>\r
    <style>\r
      @import url(https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap);\r
    </style>\r
    <style>\r
      *,\r
      ::before,\r
      ::after {\r
        --tw-border-spacing-x: 0;\r
        --tw-border-spacing-y: 0;\r
        --tw-translate-x: 0;\r
        --tw-translate-y: 0;\r
        --tw-rotate: 0;\r
        --tw-skew-x: 0;\r
        --tw-skew-y: 0;\r
        --tw-scale-x: 1;\r
        --tw-scale-y: 1;\r
        --tw-pan-x:  ;\r
        --tw-pan-y:  ;\r
        --tw-pinch-zoom:  ;\r
        --tw-scroll-snap-strictness: proximity;\r
        --tw-gradient-from-position:  ;\r
        --tw-gradient-via-position:  ;\r
        --tw-gradient-to-position:  ;\r
        --tw-ordinal:  ;\r
        --tw-slashed-zero:  ;\r
        --tw-numeric-figure:  ;\r
        --tw-numeric-spacing:  ;\r
        --tw-numeric-fraction:  ;\r
        --tw-ring-inset:  ;\r
        --tw-ring-offset-width: 0px;\r
        --tw-ring-offset-color: #fff;\r
        --tw-ring-color: rgb(59 130 246 / 0.5);\r
        --tw-ring-offset-shadow: 0 0 #0000;\r
        --tw-ring-shadow: 0 0 #0000;\r
        --tw-shadow: 0 0 #0000;\r
        --tw-shadow-colored: 0 0 #0000;\r
        --tw-blur:  ;\r
        --tw-brightness:  ;\r
        --tw-contrast:  ;\r
        --tw-grayscale:  ;\r
        --tw-hue-rotate:  ;\r
        --tw-invert:  ;\r
        --tw-saturate:  ;\r
        --tw-sepia:  ;\r
        --tw-drop-shadow:  ;\r
        --tw-backdrop-blur:  ;\r
        --tw-backdrop-brightness:  ;\r
        --tw-backdrop-contrast:  ;\r
        --tw-backdrop-grayscale:  ;\r
        --tw-backdrop-hue-rotate:  ;\r
        --tw-backdrop-invert:  ;\r
        --tw-backdrop-opacity:  ;\r
        --tw-backdrop-saturate:  ;\r
        --tw-backdrop-sepia:  ;\r
        --tw-contain-size:  ;\r
        --tw-contain-layout:  ;\r
        --tw-contain-paint:  ;\r
        --tw-contain-style:  ;\r
      }\r
\r
      ::backdrop {\r
        --tw-border-spacing-x: 0;\r
        --tw-border-spacing-y: 0;\r
        --tw-translate-x: 0;\r
        --tw-translate-y: 0;\r
        --tw-rotate: 0;\r
        --tw-skew-x: 0;\r
        --tw-skew-y: 0;\r
        --tw-scale-x: 1;\r
        --tw-scale-y: 1;\r
        --tw-pan-x:  ;\r
        --tw-pan-y:  ;\r
        --tw-pinch-zoom:  ;\r
        --tw-scroll-snap-strictness: proximity;\r
        --tw-gradient-from-position:  ;\r
        --tw-gradient-via-position:  ;\r
        --tw-gradient-to-position:  ;\r
        --tw-ordinal:  ;\r
        --tw-slashed-zero:  ;\r
        --tw-numeric-figure:  ;\r
        --tw-numeric-spacing:  ;\r
        --tw-numeric-fraction:  ;\r
        --tw-ring-inset:  ;\r
        --tw-ring-offset-width: 0px;\r
        --tw-ring-offset-color: #fff;\r
        --tw-ring-color: rgb(59 130 246 / 0.5);\r
        --tw-ring-offset-shadow: 0 0 #0000;\r
        --tw-ring-shadow: 0 0 #0000;\r
        --tw-shadow: 0 0 #0000;\r
        --tw-shadow-colored: 0 0 #0000;\r
        --tw-blur:  ;\r
        --tw-brightness:  ;\r
        --tw-contrast:  ;\r
        --tw-grayscale:  ;\r
        --tw-hue-rotate:  ;\r
        --tw-invert:  ;\r
        --tw-saturate:  ;\r
        --tw-sepia:  ;\r
        --tw-drop-shadow:  ;\r
        --tw-backdrop-blur:  ;\r
        --tw-backdrop-brightness:  ;\r
        --tw-backdrop-contrast:  ;\r
        --tw-backdrop-grayscale:  ;\r
        --tw-backdrop-hue-rotate:  ;\r
        --tw-backdrop-invert:  ;\r
        --tw-backdrop-opacity:  ;\r
        --tw-backdrop-saturate:  ;\r
        --tw-backdrop-sepia:  ;\r
        --tw-contain-size:  ;\r
        --tw-contain-layout:  ;\r
        --tw-contain-paint:  ;\r
        --tw-contain-style:  ;\r
      } /*\r
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\r
*/ /*\r
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\r
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\r
*/\r
\r
      *,\r
      ::before,\r
      ::after {\r
        box-sizing: border-box; /* 1 */\r
        border-width: 0; /* 2 */\r
        border-style: solid; /* 2 */\r
        border-color: #e5e7eb; /* 2 */\r
      }\r
\r
      ::before,\r
      ::after {\r
        --tw-content: "";\r
      }\r
\r
      /*\r
1. Use a consistent sensible line-height in all browsers.\r
2. Prevent adjustments of font size after orientation changes in iOS.\r
3. Use a more readable tab size.\r
4. Use the user's configured \`sans\` font-family by default.\r
5. Use the user's configured \`sans\` font-feature-settings by default.\r
6. Use the user's configured \`sans\` font-variation-settings by default.\r
7. Disable tap highlights on iOS\r
*/\r
\r
      html,\r
      :host {\r
        line-height: 1.5; /* 1 */\r
        -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\r
        tab-size: 4; /* 3 */\r
        font-family:\r
          ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\r
          "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\r
        font-feature-settings: normal; /* 5 */\r
        font-variation-settings: normal; /* 6 */\r
        -webkit-tap-highlight-color: transparent; /* 7 */\r
      }\r
\r
      /*\r
1. Remove the margin in all browsers.\r
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\r
*/\r
\r
      body {\r
        margin: 0; /* 1 */\r
        line-height: inherit; /* 2 */\r
      }\r
\r
      /*\r
1. Add the correct height in Firefox.\r
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r
3. Ensure horizontal rules are visible by default.\r
*/\r
\r
      hr {\r
        height: 0; /* 1 */\r
        color: inherit; /* 2 */\r
        border-top-width: 1px; /* 3 */\r
      }\r
\r
      /*\r
Add the correct text decoration in Chrome, Edge, and Safari.\r
*/\r
\r
      abbr:where([title]) {\r
        text-decoration: underline dotted;\r
      }\r
\r
      /*\r
Remove the default font size and weight for headings.\r
*/\r
\r
      h1,\r
      h2,\r
      h3,\r
      h4,\r
      h5,\r
      h6 {\r
        font-size: inherit;\r
        font-weight: inherit;\r
      }\r
\r
      /*\r
Reset links to optimize for opt-in styling instead of opt-out.\r
*/\r
\r
      a {\r
        color: inherit;\r
        text-decoration: inherit;\r
      }\r
\r
      /*\r
Add the correct font weight in Edge and Safari.\r
*/\r
\r
      b,\r
      strong {\r
        font-weight: bolder;\r
      }\r
\r
      /*\r
1. Use the user's configured \`mono\` font-family by default.\r
2. Use the user's configured \`mono\` font-feature-settings by default.\r
3. Use the user's configured \`mono\` font-variation-settings by default.\r
4. Correct the odd \`em\` font sizing in all browsers.\r
*/\r
\r
      code,\r
      kbd,\r
      samp,\r
      pre {\r
        font-family:\r
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\r
          "Liberation Mono", "Courier New", monospace; /* 1 */\r
        font-feature-settings: normal; /* 2 */\r
        font-variation-settings: normal; /* 3 */\r
        font-size: 1em; /* 4 */\r
      }\r
\r
      /*\r
Add the correct font size in all browsers.\r
*/\r
\r
      small {\r
        font-size: 80%;\r
      }\r
\r
      /*\r
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\r
*/\r
\r
      sub,\r
      sup {\r
        font-size: 75%;\r
        line-height: 0;\r
        position: relative;\r
        vertical-align: baseline;\r
      }\r
\r
      sub {\r
        bottom: -0.25em;\r
      }\r
\r
      sup {\r
        top: -0.5em;\r
      }\r
\r
      /*\r
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r
3. Remove gaps between table borders by default.\r
*/\r
\r
      table {\r
        text-indent: 0; /* 1 */\r
        border-color: inherit; /* 2 */\r
        border-collapse: collapse; /* 3 */\r
      }\r
\r
      /*\r
1. Change the font styles in all browsers.\r
2. Remove the margin in Firefox and Safari.\r
3. Remove default padding in all browsers.\r
*/\r
\r
      button,\r
      input,\r
      optgroup,\r
      select,\r
      textarea {\r
        font-family: inherit; /* 1 */\r
        font-feature-settings: inherit; /* 1 */\r
        font-variation-settings: inherit; /* 1 */\r
        font-size: 100%; /* 1 */\r
        font-weight: inherit; /* 1 */\r
        line-height: inherit; /* 1 */\r
        letter-spacing: inherit; /* 1 */\r
        color: inherit; /* 1 */\r
        margin: 0; /* 2 */\r
        padding: 0; /* 3 */\r
      }\r
\r
      /*\r
Remove the inheritance of text transform in Edge and Firefox.\r
*/\r
\r
      button,\r
      select {\r
        text-transform: none;\r
      }\r
\r
      /*\r
1. Correct the inability to style clickable types in iOS and Safari.\r
2. Remove default button styles.\r
*/\r
\r
      button,\r
      input:where([type="button"]),\r
      input:where([type="reset"]),\r
      input:where([type="submit"]) {\r
        -webkit-appearance: button; /* 1 */\r
        background-color: transparent; /* 2 */\r
        background-image: none; /* 2 */\r
      }\r
\r
      /*\r
Use the modern Firefox focus style for all focusable elements.\r
*/\r
\r
      :-moz-focusring {\r
        outline: auto;\r
      }\r
\r
      /*\r
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\r
*/\r
\r
      :-moz-ui-invalid {\r
        box-shadow: none;\r
      }\r
\r
      /*\r
Add the correct vertical alignment in Chrome and Firefox.\r
*/\r
\r
      progress {\r
        vertical-align: baseline;\r
      }\r
\r
      /*\r
Correct the cursor style of increment and decrement buttons in Safari.\r
*/\r
\r
      ::-webkit-inner-spin-button,\r
      ::-webkit-outer-spin-button {\r
        height: auto;\r
      }\r
\r
      /*\r
1. Correct the odd appearance in Chrome and Safari.\r
2. Correct the outline style in Safari.\r
*/\r
\r
      [type="search"] {\r
        -webkit-appearance: textfield; /* 1 */\r
        outline-offset: -2px; /* 2 */\r
      }\r
\r
      /*\r
Remove the inner padding in Chrome and Safari on macOS.\r
*/\r
\r
      ::-webkit-search-decoration {\r
        -webkit-appearance: none;\r
      }\r
\r
      /*\r
1. Correct the inability to style clickable types in iOS and Safari.\r
2. Change font properties to \`inherit\` in Safari.\r
*/\r
\r
      ::-webkit-file-upload-button {\r
        -webkit-appearance: button; /* 1 */\r
        font: inherit; /* 2 */\r
      }\r
\r
      /*\r
Add the correct display in Chrome and Safari.\r
*/\r
\r
      summary {\r
        display: list-item;\r
      }\r
\r
      /*\r
Removes the default spacing and border for appropriate elements.\r
*/\r
\r
      blockquote,\r
      dl,\r
      dd,\r
      h1,\r
      h2,\r
      h3,\r
      h4,\r
      h5,\r
      h6,\r
      hr,\r
      figure,\r
      p,\r
      pre {\r
        margin: 0;\r
      }\r
\r
      fieldset {\r
        margin: 0;\r
        padding: 0;\r
      }\r
\r
      legend {\r
        padding: 0;\r
      }\r
\r
      ol,\r
      ul,\r
      menu {\r
        list-style: none;\r
        margin: 0;\r
        padding: 0;\r
      }\r
\r
      /*\r
Reset default styling for dialogs.\r
*/\r
      dialog {\r
        padding: 0;\r
      }\r
\r
      /*\r
Prevent resizing textareas horizontally by default.\r
*/\r
\r
      textarea {\r
        resize: vertical;\r
      }\r
\r
      /*\r
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\r
2. Set the default placeholder color to the user's configured gray 400 color.\r
*/\r
\r
      input::placeholder,\r
      textarea::placeholder {\r
        opacity: 1; /* 1 */\r
        color: #9ca3af; /* 2 */\r
      }\r
\r
      /*\r
Set the default cursor for buttons.\r
*/\r
\r
      button,\r
      [role="button"] {\r
        cursor: pointer;\r
      }\r
\r
      /*\r
Make sure disabled buttons don't get the pointer cursor.\r
*/\r
      :disabled {\r
        cursor: default;\r
      }\r
\r
      /*\r
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\r
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\r
   This can trigger a poorly considered lint error in some tools but is included by design.\r
*/\r
\r
      img,\r
      svg,\r
      video,\r
      canvas,\r
      audio,\r
      iframe,\r
      embed,\r
      object {\r
        display: block; /* 1 */\r
        vertical-align: middle; /* 2 */\r
      }\r
\r
      /*\r
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\r
*/\r
\r
      img,\r
      video {\r
        max-width: 100%;\r
        height: auto;\r
      }\r
\r
      /* Make elements with the HTML hidden attribute stay hidden by default */\r
      [hidden]:where(:not([hidden="until-found"])) {\r
        display: none;\r
      }\r
      .sr-only {\r
        position: absolute;\r
        width: 1px;\r
        height: 1px;\r
        padding: 0;\r
        margin: -1px;\r
        overflow: hidden;\r
        clip: rect(0, 0, 0, 0);\r
        white-space: nowrap;\r
        border-width: 0;\r
      }\r
      .pointer-events-none {\r
        pointer-events: none;\r
      }\r
      .pointer-events-auto {\r
        pointer-events: auto;\r
      }\r
      .visible {\r
        visibility: visible;\r
      }\r
      .invisible {\r
        visibility: hidden;\r
      }\r
      .fixed {\r
        position: fixed;\r
      }\r
      .absolute {\r
        position: absolute;\r
      }\r
      .relative {\r
        position: relative;\r
      }\r
      .inset-0 {\r
        inset: 0px;\r
      }\r
      .inset-x-0 {\r
        left: 0px;\r
        right: 0px;\r
      }\r
      .inset-y-0 {\r
        top: 0px;\r
        bottom: 0px;\r
      }\r
      .-bottom-12 {\r
        bottom: -3rem;\r
      }\r
      .-left-12 {\r
        left: -3rem;\r
      }\r
      .-right-12 {\r
        right: -3rem;\r
      }\r
      .-right-40 {\r
        right: -10rem;\r
      }\r
      .-top-12 {\r
        top: -3rem;\r
      }\r
      .bottom-0 {\r
        bottom: 0px;\r
      }\r
      .bottom-4 {\r
        bottom: 1rem;\r
      }\r
      .left-0 {\r
        left: 0px;\r
      }\r
      .left-1 {\r
        left: 0.25rem;\r
      }\r
      .left-1\\/2 {\r
        left: 50%;\r
      }\r
      .left-2 {\r
        left: 0.5rem;\r
      }\r
      .left-3 {\r
        left: 0.75rem;\r
      }\r
      .left-4 {\r
        left: 1rem;\r
      }\r
      .left-\\[50\\%\\] {\r
        left: 50%;\r
      }\r
      .right-0 {\r
        right: 0px;\r
      }\r
      .right-1 {\r
        right: 0.25rem;\r
      }\r
      .right-2 {\r
        right: 0.5rem;\r
      }\r
      .right-4 {\r
        right: 1rem;\r
      }\r
      .top-0 {\r
        top: 0px;\r
      }\r
      .top-1 {\r
        top: 0.25rem;\r
      }\r
      .top-1\\/2 {\r
        top: 50%;\r
      }\r
      .top-1\\/3 {\r
        top: 33.333333%;\r
      }\r
      .top-2 {\r
        top: 0.5rem;\r
      }\r
      .top-4 {\r
        top: 1rem;\r
      }\r
      .top-\\[1px\\] {\r
        top: 1px;\r
      }\r
      .top-\\[50\\%\\] {\r
        top: 50%;\r
      }\r
      .top-\\[60\\%\\] {\r
        top: 60%;\r
      }\r
      .top-full {\r
        top: 100%;\r
      }\r
      .z-10 {\r
        z-index: 10;\r
      }\r
      .z-50 {\r
        z-index: 50;\r
      }\r
      .z-\\[100\\] {\r
        z-index: 100;\r
      }\r
      .z-\\[1\\] {\r
        z-index: 1;\r
      }\r
      .order-1 {\r
        order: 1;\r
      }\r
      .order-2 {\r
        order: 2;\r
      }\r
      .order-3 {\r
        order: 3;\r
      }\r
      .col-span-12 {\r
        grid-column: span 12 / span 12;\r
      }\r
      .-mx-1 {\r
        margin-left: -0.25rem;\r
        margin-right: -0.25rem;\r
      }\r
      .mx-6 {\r
        margin-left: 1.5rem;\r
        margin-right: 1.5rem;\r
      }\r
      .mx-auto {\r
        margin-left: auto;\r
        margin-right: auto;\r
      }\r
      .my-1 {\r
        margin-top: 0.25rem;\r
        margin-bottom: 0.25rem;\r
      }\r
      .-ml-4 {\r
        margin-left: -1rem;\r
      }\r
      .-mt-4 {\r
        margin-top: -1rem;\r
      }\r
      .mb-1 {\r
        margin-bottom: 0.25rem;\r
      }\r
      .mb-10 {\r
        margin-bottom: 2.5rem;\r
      }\r
      .mb-2 {\r
        margin-bottom: 0.5rem;\r
      }\r
      .ml-1 {\r
        margin-left: 0.25rem;\r
      }\r
      .ml-2 {\r
        margin-left: 0.5rem;\r
      }\r
      .ml-auto {\r
        margin-left: auto;\r
      }\r
      .mr-2 {\r
        margin-right: 0.5rem;\r
      }\r
      .mt-0\\.5 {\r
        margin-top: 0.125rem;\r
      }\r
      .mt-1 {\r
        margin-top: 0.25rem;\r
      }\r
      .mt-1\\.5 {\r
        margin-top: 0.375rem;\r
      }\r
      .mt-10 {\r
        margin-top: 2.5rem;\r
      }\r
      .mt-12 {\r
        margin-top: 3rem;\r
      }\r
      .mt-16 {\r
        margin-top: 4rem;\r
      }\r
      .mt-2 {\r
        margin-top: 0.5rem;\r
      }\r
      .mt-20 {\r
        margin-top: 5rem;\r
      }\r
      .mt-24 {\r
        margin-top: 6rem;\r
      }\r
      .mt-3 {\r
        margin-top: 0.75rem;\r
      }\r
      .mt-4 {\r
        margin-top: 1rem;\r
      }\r
      .mt-5 {\r
        margin-top: 1.25rem;\r
      }\r
      .mt-6 {\r
        margin-top: 1.5rem;\r
      }\r
      .mt-8 {\r
        margin-top: 2rem;\r
      }\r
      .mt-auto {\r
        margin-top: auto;\r
      }\r
      .block {\r
        display: block;\r
      }\r
      .flex {\r
        display: flex;\r
      }\r
      .inline-flex {\r
        display: inline-flex;\r
      }\r
      .table {\r
        display: table;\r
      }\r
      .grid {\r
        display: grid;\r
      }\r
      .hidden {\r
        display: none;\r
      }\r
      .aspect-\\[16\\/10\\] {\r
        aspect-ratio: 16/10;\r
      }\r
      .aspect-\\[16\\/9\\] {\r
        aspect-ratio: 16/9;\r
      }\r
      .aspect-\\[4\\/5\\] {\r
        aspect-ratio: 4/5;\r
      }\r
      .aspect-square {\r
        aspect-ratio: 1 / 1;\r
      }\r
      .h-1\\.5 {\r
        height: 0.375rem;\r
      }\r
      .h-10 {\r
        height: 2.5rem;\r
      }\r
      .h-16 {\r
        height: 4rem;\r
      }\r
      .h-2 {\r
        height: 0.5rem;\r
      }\r
      .h-2\\.5 {\r
        height: 0.625rem;\r
      }\r
      .h-3 {\r
        height: 0.75rem;\r
      }\r
      .h-3\\.5 {\r
        height: 0.875rem;\r
      }\r
      .h-4 {\r
        height: 1rem;\r
      }\r
      .h-5 {\r
        height: 1.25rem;\r
      }\r
      .h-7 {\r
        height: 1.75rem;\r
      }\r
      .h-8 {\r
        height: 2rem;\r
      }\r
      .h-9 {\r
        height: 2.25rem;\r
      }\r
      .h-\\[1px\\] {\r
        height: 1px;\r
      }\r
      .h-\\[36rem\\] {\r
        height: 36rem;\r
      }\r
      .h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\] {\r
        height: var(--radix-navigation-menu-viewport-height);\r
      }\r
      .h-\\[var\\(--radix-select-trigger-height\\)\\] {\r
        height: var(--radix-select-trigger-height);\r
      }\r
      .h-auto {\r
        height: auto;\r
      }\r
      .h-full {\r
        height: 100%;\r
      }\r
      .h-px {\r
        height: 1px;\r
      }\r
      .max-h-\\[--radix-context-menu-content-available-height\\] {\r
        max-height: var(--radix-context-menu-content-available-height);\r
      }\r
      .max-h-\\[--radix-select-content-available-height\\] {\r
        max-height: var(--radix-select-content-available-height);\r
      }\r
      .max-h-\\[300px\\] {\r
        max-height: 300px;\r
      }\r
      .max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\] {\r
        max-height: var(--radix-dropdown-menu-content-available-height);\r
      }\r
      .max-h-screen {\r
        max-height: 100vh;\r
      }\r
      .min-h-\\[60px\\] {\r
        min-height: 60px;\r
      }\r
      .min-h-screen {\r
        min-height: 100vh;\r
      }\r
      .w-10 {\r
        width: 2.5rem;\r
      }\r
      .w-2 {\r
        width: 0.5rem;\r
      }\r
      .w-2\\.5 {\r
        width: 0.625rem;\r
      }\r
      .w-3 {\r
        width: 0.75rem;\r
      }\r
      .w-3\\.5 {\r
        width: 0.875rem;\r
      }\r
      .w-3\\/4 {\r
        width: 75%;\r
      }\r
      .w-4 {\r
        width: 1rem;\r
      }\r
      .w-5 {\r
        width: 1.25rem;\r
      }\r
      .w-64 {\r
        width: 16rem;\r
      }\r
      .w-7 {\r
        width: 1.75rem;\r
      }\r
      .w-72 {\r
        width: 18rem;\r
      }\r
      .w-8 {\r
        width: 2rem;\r
      }\r
      .w-9 {\r
        width: 2.25rem;\r
      }\r
      .w-\\[100px\\] {\r
        width: 100px;\r
      }\r
      .w-\\[1px\\] {\r
        width: 1px;\r
      }\r
      .w-\\[36rem\\] {\r
        width: 36rem;\r
      }\r
      .w-fit {\r
        width: fit-content;\r
      }\r
      .w-full {\r
        width: 100%;\r
      }\r
      .w-max {\r
        width: max-content;\r
      }\r
      .w-px {\r
        width: 1px;\r
      }\r
      .min-w-0 {\r
        min-width: 0px;\r
      }\r
      .min-w-10 {\r
        min-width: 2.5rem;\r
      }\r
      .min-w-8 {\r
        min-width: 2rem;\r
      }\r
      .min-w-9 {\r
        min-width: 2.25rem;\r
      }\r
      .min-w-\\[12rem\\] {\r
        min-width: 12rem;\r
      }\r
      .min-w-\\[8rem\\] {\r
        min-width: 8rem;\r
      }\r
      .min-w-\\[var\\(--radix-select-trigger-width\\)\\] {\r
        min-width: var(--radix-select-trigger-width);\r
      }\r
      .max-w-2xl {\r
        max-width: 42rem;\r
      }\r
      .max-w-3xl {\r
        max-width: 48rem;\r
      }\r
      .max-w-4xl {\r
        max-width: 56rem;\r
      }\r
      .max-w-5xl {\r
        max-width: 64rem;\r
      }\r
      .max-w-6xl {\r
        max-width: 72rem;\r
      }\r
      .max-w-7xl {\r
        max-width: 80rem;\r
      }\r
      .max-w-lg {\r
        max-width: 32rem;\r
      }\r
      .max-w-max {\r
        max-width: max-content;\r
      }\r
      .flex-1 {\r
        flex: 1 1;\r
      }\r
      .flex-shrink-0 {\r
        flex-shrink: 0;\r
      }\r
      .shrink-0 {\r
        flex-shrink: 0;\r
      }\r
      .grow {\r
        flex-grow: 1;\r
      }\r
      .grow-0 {\r
        flex-grow: 0;\r
      }\r
      .basis-full {\r
        flex-basis: 100%;\r
      }\r
      .caption-bottom {\r
        caption-side: bottom;\r
      }\r
      .border-collapse {\r
        border-collapse: collapse;\r
      }\r
      .origin-\\[--radix-context-menu-content-transform-origin\\] {\r
        transform-origin: var(--radix-context-menu-content-transform-origin);\r
      }\r
      .origin-\\[--radix-dropdown-menu-content-transform-origin\\] {\r
        transform-origin: var(--radix-dropdown-menu-content-transform-origin);\r
      }\r
      .origin-\\[--radix-hover-card-content-transform-origin\\] {\r
        transform-origin: var(--radix-hover-card-content-transform-origin);\r
      }\r
      .origin-\\[--radix-menubar-content-transform-origin\\] {\r
        transform-origin: var(--radix-menubar-content-transform-origin);\r
      }\r
      .origin-\\[--radix-popover-content-transform-origin\\] {\r
        transform-origin: var(--radix-popover-content-transform-origin);\r
      }\r
      .origin-\\[--radix-select-content-transform-origin\\] {\r
        transform-origin: var(--radix-select-content-transform-origin);\r
      }\r
      .origin-\\[--radix-tooltip-content-transform-origin\\] {\r
        transform-origin: var(--radix-tooltip-content-transform-origin);\r
      }\r
      .-translate-x-1\\/2 {\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .-translate-y-1\\/2 {\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .translate-x-\\[-50\\%\\] {\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .translate-y-\\[-50\\%\\] {\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .rotate-45 {\r
        --tw-rotate: 45deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .rotate-90 {\r
        --tw-rotate: 90deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      .transform {\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
      @keyframes ping {\r
        75%,\r
        100% {\r
          transform: scale(2);\r
          opacity: 0;\r
        }\r
      }\r
      .animate-ping {\r
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\r
      }\r
      @keyframes pulse {\r
        50% {\r
          opacity: 0.5;\r
        }\r
      }\r
      .animate-pulse {\r
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\r
      }\r
      @keyframes spin {\r
        to {\r
          transform: rotate(360deg);\r
        }\r
      }\r
      .animate-spin {\r
        animation: spin 1s linear infinite;\r
      }\r
      .cursor-default {\r
        cursor: default;\r
      }\r
      .cursor-pointer {\r
        cursor: pointer;\r
      }\r
      .touch-none {\r
        touch-action: none;\r
      }\r
      .select-none {\r
        -webkit-user-select: none;\r
        user-select: none;\r
      }\r
      .resize-none {\r
        resize: none;\r
      }\r
      .list-none {\r
        list-style-type: none;\r
      }\r
      .grid-cols-12 {\r
        grid-template-columns: repeat(12, minmax(0, 1fr));\r
      }\r
      .grid-cols-2 {\r
        grid-template-columns: repeat(2, minmax(0, 1fr));\r
      }\r
      .flex-row {\r
        flex-direction: row;\r
      }\r
      .flex-col {\r
        flex-direction: column;\r
      }\r
      .flex-col-reverse {\r
        flex-direction: column-reverse;\r
      }\r
      .flex-wrap {\r
        flex-wrap: wrap;\r
      }\r
      .items-start {\r
        align-items: flex-start;\r
      }\r
      .items-end {\r
        align-items: flex-end;\r
      }\r
      .items-center {\r
        align-items: center;\r
      }\r
      .items-baseline {\r
        align-items: baseline;\r
      }\r
      .justify-center {\r
        justify-content: center;\r
      }\r
      .justify-between {\r
        justify-content: space-between;\r
      }\r
      .gap-1 {\r
        gap: 0.25rem;\r
      }\r
      .gap-1\\.5 {\r
        gap: 0.375rem;\r
      }\r
      .gap-2 {\r
        gap: 0.5rem;\r
      }\r
      .gap-3 {\r
        gap: 0.75rem;\r
      }\r
      .gap-4 {\r
        gap: 1rem;\r
      }\r
      .gap-6 {\r
        gap: 1.5rem;\r
      }\r
      .gap-8 {\r
        gap: 2rem;\r
      }\r
      .space-x-1 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-x-reverse: 0;\r
        margin-right: calc(0.25rem * var(--tw-space-x-reverse));\r
        margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\r
      }\r
      .space-x-2 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-x-reverse: 0;\r
        margin-right: calc(0.5rem * var(--tw-space-x-reverse));\r
        margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\r
      }\r
      .space-y-1 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-16 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(4rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-2 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-24 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(6rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-3 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-4 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-5 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\r
      }\r
      .space-y-6 > :not([hidden]) ~ :not([hidden]) {\r
        --tw-space-y-reverse: 0;\r
        margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\r
        margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\r
      }\r
      .overflow-auto {\r
        overflow: auto;\r
      }\r
      .overflow-hidden {\r
        overflow: hidden;\r
      }\r
      .overflow-y-auto {\r
        overflow-y: auto;\r
      }\r
      .overflow-x-hidden {\r
        overflow-x: hidden;\r
      }\r
      .whitespace-nowrap {\r
        white-space: nowrap;\r
      }\r
      .break-words {\r
        overflow-wrap: break-word;\r
      }\r
      .rounded-\\[inherit\\] {\r
        border-radius: inherit;\r
      }\r
      .rounded-full {\r
        border-radius: 9999px;\r
      }\r
      .rounded-lg {\r
        border-radius: var(--radius);\r
      }\r
      .rounded-md {\r
        border-radius: calc(var(--radius) - 2px);\r
      }\r
      .rounded-sm {\r
        border-radius: calc(var(--radius) - 4px);\r
      }\r
      .rounded-xl {\r
        border-radius: 0.75rem;\r
      }\r
      .rounded-t-\\[10px\\] {\r
        border-top-left-radius: 10px;\r
        border-top-right-radius: 10px;\r
      }\r
      .rounded-tl-sm {\r
        border-top-left-radius: calc(var(--radius) - 4px);\r
      }\r
      .border {\r
        border-width: 1px;\r
      }\r
      .border-2 {\r
        border-width: 2px;\r
      }\r
      .border-y {\r
        border-top-width: 1px;\r
        border-bottom-width: 1px;\r
      }\r
      .border-b {\r
        border-bottom-width: 1px;\r
      }\r
      .border-l {\r
        border-left-width: 1px;\r
      }\r
      .border-l-2 {\r
        border-left-width: 2px;\r
      }\r
      .border-r {\r
        border-right-width: 1px;\r
      }\r
      .border-t {\r
        border-top-width: 1px;\r
      }\r
      .border-destructive {\r
        border-color: hsl(var(--destructive));\r
      }\r
      .border-destructive\\/50 {\r
        border-color: hsl(var(--destructive) / 0.5);\r
      }\r
      .border-input {\r
        border-color: hsl(var(--input));\r
      }\r
      .border-primary {\r
        border-color: hsl(var(--primary));\r
      }\r
      .border-primary\\/50 {\r
        border-color: hsl(var(--primary) / 0.5);\r
      }\r
      .border-transparent {\r
        border-color: transparent;\r
      }\r
      .border-white\\/10 {\r
        border-color: rgb(255 255 255 / 0.1);\r
      }\r
      .border-white\\/15 {\r
        border-color: rgb(255 255 255 / 0.15);\r
      }\r
      .border-white\\/20 {\r
        border-color: rgb(255 255 255 / 0.2);\r
      }\r
      .border-l-transparent {\r
        border-left-color: transparent;\r
      }\r
      .border-t-transparent {\r
        border-top-color: transparent;\r
      }\r
      .bg-\\[var\\(--accent\\)\\] {\r
        background-color: var(--accent);\r
      }\r
      .bg-\\[var\\(--bg\\)\\] {\r
        background-color: var(--bg);\r
      }\r
      .bg-\\[var\\(--surface\\)\\] {\r
        background-color: var(--surface);\r
      }\r
      .bg-accent {\r
        background-color: hsl(var(--accent));\r
      }\r
      .bg-background {\r
        background-color: hsl(var(--background));\r
      }\r
      .bg-black\\/60 {\r
        background-color: rgb(0 0 0 / 0.6);\r
      }\r
      .bg-black\\/80 {\r
        background-color: rgb(0 0 0 / 0.8);\r
      }\r
      .bg-black\\/90 {\r
        background-color: rgb(0 0 0 / 0.9);\r
      }\r
      .bg-border {\r
        background-color: hsl(var(--border));\r
      }\r
      .bg-card {\r
        background-color: hsl(var(--card));\r
      }\r
      .bg-destructive {\r
        background-color: hsl(var(--destructive));\r
      }\r
      .bg-foreground {\r
        background-color: hsl(var(--foreground));\r
      }\r
      .bg-muted {\r
        background-color: hsl(var(--muted));\r
      }\r
      .bg-muted\\/50 {\r
        background-color: hsl(var(--muted) / 0.5);\r
      }\r
      .bg-popover {\r
        background-color: hsl(var(--popover));\r
      }\r
      .bg-primary {\r
        background-color: hsl(var(--primary));\r
      }\r
      .bg-primary\\/10 {\r
        background-color: hsl(var(--primary) / 0.1);\r
      }\r
      .bg-primary\\/20 {\r
        background-color: hsl(var(--primary) / 0.2);\r
      }\r
      .bg-secondary {\r
        background-color: hsl(var(--secondary));\r
      }\r
      .bg-transparent {\r
        background-color: transparent;\r
      }\r
      .bg-white\\/10 {\r
        background-color: rgb(255 255 255 / 0.1);\r
      }\r
      .bg-gradient-to-t {\r
        background-image: linear-gradient(to top, var(--tw-gradient-stops));\r
      }\r
      .from-black {\r
        --tw-gradient-from: #000 var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .from-black\\/60 {\r
        --tw-gradient-from: rgb(0 0 0 / 0.6) var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .from-black\\/80 {\r
        --tw-gradient-from: rgb(0 0 0 / 0.8) var(--tw-gradient-from-position);\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\r
      }\r
      .via-black\\/20 {\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops:\r
          var(--tw-gradient-from),\r
          rgb(0 0 0 / 0.2) var(--tw-gradient-via-position),\r
          var(--tw-gradient-to);\r
      }\r
      .via-transparent {\r
        --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\r
        --tw-gradient-stops:\r
          var(--tw-gradient-from), transparent var(--tw-gradient-via-position),\r
          var(--tw-gradient-to);\r
      }\r
      .to-transparent {\r
        --tw-gradient-to: transparent var(--tw-gradient-to-position);\r
      }\r
      .fill-current {\r
        fill: currentColor;\r
      }\r
      .fill-primary {\r
        fill: hsl(var(--primary));\r
      }\r
      .object-cover {\r
        object-fit: cover;\r
      }\r
      .p-0 {\r
        padding: 0px;\r
      }\r
      .p-1 {\r
        padding: 0.25rem;\r
      }\r
      .p-2 {\r
        padding: 0.5rem;\r
      }\r
      .p-3 {\r
        padding: 0.75rem;\r
      }\r
      .p-4 {\r
        padding: 1rem;\r
      }\r
      .p-5 {\r
        padding: 1.25rem;\r
      }\r
      .p-6 {\r
        padding: 1.5rem;\r
      }\r
      .p-\\[1px\\] {\r
        padding: 1px;\r
      }\r
      .px-1\\.5 {\r
        padding-left: 0.375rem;\r
        padding-right: 0.375rem;\r
      }\r
      .px-2 {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
      .px-2\\.5 {\r
        padding-left: 0.625rem;\r
        padding-right: 0.625rem;\r
      }\r
      .px-3 {\r
        padding-left: 0.75rem;\r
        padding-right: 0.75rem;\r
      }\r
      .px-4 {\r
        padding-left: 1rem;\r
        padding-right: 1rem;\r
      }\r
      .px-5 {\r
        padding-left: 1.25rem;\r
        padding-right: 1.25rem;\r
      }\r
      .px-6 {\r
        padding-left: 1.5rem;\r
        padding-right: 1.5rem;\r
      }\r
      .px-8 {\r
        padding-left: 2rem;\r
        padding-right: 2rem;\r
      }\r
      .py-0\\.5 {\r
        padding-top: 0.125rem;\r
        padding-bottom: 0.125rem;\r
      }\r
      .py-1 {\r
        padding-top: 0.25rem;\r
        padding-bottom: 0.25rem;\r
      }\r
      .py-1\\.5 {\r
        padding-top: 0.375rem;\r
        padding-bottom: 0.375rem;\r
      }\r
      .py-10 {\r
        padding-top: 2.5rem;\r
        padding-bottom: 2.5rem;\r
      }\r
      .py-2 {\r
        padding-top: 0.5rem;\r
        padding-bottom: 0.5rem;\r
      }\r
      .py-2\\.5 {\r
        padding-top: 0.625rem;\r
        padding-bottom: 0.625rem;\r
      }\r
      .py-20 {\r
        padding-top: 5rem;\r
        padding-bottom: 5rem;\r
      }\r
      .py-24 {\r
        padding-top: 6rem;\r
        padding-bottom: 6rem;\r
      }\r
      .py-3 {\r
        padding-top: 0.75rem;\r
        padding-bottom: 0.75rem;\r
      }\r
      .py-4 {\r
        padding-top: 1rem;\r
        padding-bottom: 1rem;\r
      }\r
      .py-6 {\r
        padding-top: 1.5rem;\r
        padding-bottom: 1.5rem;\r
      }\r
      .pb-12 {\r
        padding-bottom: 3rem;\r
      }\r
      .pb-16 {\r
        padding-bottom: 4rem;\r
      }\r
      .pb-20 {\r
        padding-bottom: 5rem;\r
      }\r
      .pb-4 {\r
        padding-bottom: 1rem;\r
      }\r
      .pl-10 {\r
        padding-left: 2.5rem;\r
      }\r
      .pl-2 {\r
        padding-left: 0.5rem;\r
      }\r
      .pl-2\\.5 {\r
        padding-left: 0.625rem;\r
      }\r
      .pl-4 {\r
        padding-left: 1rem;\r
      }\r
      .pl-8 {\r
        padding-left: 2rem;\r
      }\r
      .pr-2 {\r
        padding-right: 0.5rem;\r
      }\r
      .pr-2\\.5 {\r
        padding-right: 0.625rem;\r
      }\r
      .pr-6 {\r
        padding-right: 1.5rem;\r
      }\r
      .pr-8 {\r
        padding-right: 2rem;\r
      }\r
      .pt-0 {\r
        padding-top: 0px;\r
      }\r
      .pt-1 {\r
        padding-top: 0.25rem;\r
      }\r
      .pt-28 {\r
        padding-top: 7rem;\r
      }\r
      .pt-32 {\r
        padding-top: 8rem;\r
      }\r
      .pt-4 {\r
        padding-top: 1rem;\r
      }\r
      .pt-40 {\r
        padding-top: 10rem;\r
      }\r
      .text-left {\r
        text-align: left;\r
      }\r
      .text-center {\r
        text-align: center;\r
      }\r
      .align-middle {\r
        vertical-align: middle;\r
      }\r
      .font-mono {\r
        font-family:\r
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\r
          "Liberation Mono", "Courier New", monospace;\r
      }\r
      .text-2xl {\r
        font-size: 1.5rem;\r
        line-height: 2rem;\r
      }\r
      .text-3xl {\r
        font-size: 1.875rem;\r
        line-height: 2.25rem;\r
      }\r
      .text-4xl {\r
        font-size: 2.25rem;\r
        line-height: 2.5rem;\r
      }\r
      .text-5xl {\r
        font-size: 3rem;\r
        line-height: 1;\r
      }\r
      .text-\\[0\\.8rem\\] {\r
        font-size: 0.8rem;\r
      }\r
      .text-\\[10px\\] {\r
        font-size: 10px;\r
      }\r
      .text-\\[11px\\] {\r
        font-size: 11px;\r
      }\r
      .text-\\[14rem\\] {\r
        font-size: 14rem;\r
      }\r
      .text-\\[9rem\\] {\r
        font-size: 9rem;\r
      }\r
      .text-base {\r
        font-size: 1rem;\r
        line-height: 1.5rem;\r
      }\r
      .text-lg {\r
        font-size: 1.125rem;\r
        line-height: 1.75rem;\r
      }\r
      .text-sm {\r
        font-size: 0.875rem;\r
        line-height: 1.25rem;\r
      }\r
      .text-xs {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
      .text-\\[2\\.5rem\\] {\r
        font-size: 2.5rem;\r
      }\r
      .font-black {\r
        font-weight: 900;\r
      }\r
      .font-bold {\r
        font-weight: 700;\r
      }\r
      .font-medium {\r
        font-weight: 500;\r
      }\r
      .font-normal {\r
        font-weight: 400;\r
      }\r
      .font-semibold {\r
        font-weight: 600;\r
      }\r
      .uppercase {\r
        text-transform: uppercase;\r
      }\r
      .leading-\\[0\\.88\\] {\r
        line-height: 0.88;\r
      }\r
      .leading-\\[0\\.95\\] {\r
        line-height: 0.95;\r
      }\r
      .leading-\\[0\\.9\\] {\r
        line-height: 0.9;\r
      }\r
      .leading-none {\r
        line-height: 1;\r
      }\r
      .leading-relaxed {\r
        line-height: 1.625;\r
      }\r
      .tracking-\\[0\\.15em\\] {\r
        letter-spacing: 0.15em;\r
      }\r
      .tracking-\\[0\\.25em\\] {\r
        letter-spacing: 0.25em;\r
      }\r
      .tracking-\\[0\\.2em\\] {\r
        letter-spacing: 0.2em;\r
      }\r
      .tracking-\\[0\\.3em\\] {\r
        letter-spacing: 0.3em;\r
      }\r
      .tracking-tight {\r
        letter-spacing: -0.025em;\r
      }\r
      .tracking-tighter {\r
        letter-spacing: -0.05em;\r
      }\r
      .tracking-widest {\r
        letter-spacing: 0.1em;\r
      }\r
      .text-\\[var\\(--accent\\)\\] {\r
        color: var(--accent);\r
      }\r
      .text-accent-foreground {\r
        color: hsl(var(--accent-foreground));\r
      }\r
      .text-black {\r
        --tw-text-opacity: 1;\r
        color: rgb(0 0 0 / var(--tw-text-opacity, 1));\r
      }\r
      .text-card-foreground {\r
        color: hsl(var(--card-foreground));\r
      }\r
      .text-current {\r
        color: currentColor;\r
      }\r
      .text-destructive {\r
        color: hsl(var(--destructive));\r
      }\r
      .text-destructive-foreground {\r
        color: hsl(var(--destructive-foreground));\r
      }\r
      .text-foreground {\r
        color: hsl(var(--foreground));\r
      }\r
      .text-foreground\\/50 {\r
        color: hsl(var(--foreground) / 0.5);\r
      }\r
      .text-muted-foreground {\r
        color: hsl(var(--muted-foreground));\r
      }\r
      .text-popover-foreground {\r
        color: hsl(var(--popover-foreground));\r
      }\r
      .text-primary {\r
        color: hsl(var(--primary));\r
      }\r
      .text-primary-foreground {\r
        color: hsl(var(--primary-foreground));\r
      }\r
      .text-secondary-foreground {\r
        color: hsl(var(--secondary-foreground));\r
      }\r
      .text-white {\r
        --tw-text-opacity: 1;\r
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));\r
      }\r
      .text-white\\/\\[0\\.04\\] {\r
        color: rgb(255 255 255 / 0.04);\r
      }\r
      .text-zinc-300 {\r
        --tw-text-opacity: 1;\r
        color: rgb(212 212 216 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-400 {\r
        --tw-text-opacity: 1;\r
        color: rgb(161 161 170 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-500 {\r
        --tw-text-opacity: 1;\r
        color: rgb(113 113 122 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-600 {\r
        --tw-text-opacity: 1;\r
        color: rgb(82 82 91 / var(--tw-text-opacity, 1));\r
      }\r
      .text-zinc-700 {\r
        --tw-text-opacity: 1;\r
        color: rgb(63 63 70 / var(--tw-text-opacity, 1));\r
      }\r
      .underline-offset-4 {\r
        text-underline-offset: 4px;\r
      }\r
      .opacity-0 {\r
        opacity: 0;\r
      }\r
      .opacity-40 {\r
        opacity: 0.4;\r
      }\r
      .opacity-50 {\r
        opacity: 0.5;\r
      }\r
      .opacity-60 {\r
        opacity: 0.6;\r
      }\r
      .opacity-70 {\r
        opacity: 0.7;\r
      }\r
      .opacity-75 {\r
        opacity: 0.75;\r
      }\r
      .opacity-80 {\r
        opacity: 0.8;\r
      }\r
      .opacity-90 {\r
        opacity: 0.9;\r
      }\r
      .opacity-\\[0\\.06\\] {\r
        opacity: 0.06;\r
      }\r
      .shadow {\r
        --tw-shadow:\r
          0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 1px 3px 0 var(--tw-shadow-color),\r
          0 1px 2px -1px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-lg {\r
        --tw-shadow:\r
          0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 10px 15px -3px var(--tw-shadow-color),\r
          0 4px 6px -4px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-md {\r
        --tw-shadow:\r
          0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 4px 6px -1px var(--tw-shadow-color),\r
          0 2px 4px -2px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .shadow-sm {\r
        --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\r
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
      .outline-none {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
      .outline {\r
        outline-style: solid;\r
      }\r
      .ring-0 {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
      .ring-1 {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
      .ring-ring {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
      .ring-offset-background {\r
        --tw-ring-offset-color: hsl(var(--background));\r
      }\r
      .blur-3xl {\r
        --tw-blur: blur(64px);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .blur-md {\r
        --tw-blur: blur(12px);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .grayscale {\r
        --tw-grayscale: grayscale(100%);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .filter {\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
      .backdrop-blur {\r
        --tw-backdrop-blur: blur(8px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .backdrop-blur-md {\r
        --tw-backdrop-blur: blur(12px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .backdrop-blur-sm {\r
        --tw-backdrop-blur: blur(4px);\r
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)\r
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)\r
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)\r
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)\r
          var(--tw-backdrop-sepia);\r
      }\r
      .transition {\r
        transition-property:\r
          color, background-color, border-color, text-decoration-color, fill,\r
          stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-all {\r
        transition-property: all;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-colors {\r
        transition-property:\r
          color, background-color, border-color, text-decoration-color, fill,\r
          stroke;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-opacity {\r
        transition-property: opacity;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .transition-transform {\r
        transition-property: transform;\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
        transition-duration: 150ms;\r
      }\r
      .duration-1000 {\r
        transition-duration: 1000ms;\r
      }\r
      .duration-200 {\r
        transition-duration: 200ms;\r
      }\r
      .duration-300 {\r
        transition-duration: 300ms;\r
      }\r
      .duration-700 {\r
        transition-duration: 700ms;\r
      }\r
      .ease-in-out {\r
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
      }\r
      @keyframes enter {\r
        from {\r
          opacity: var(--tw-enter-opacity, 1);\r
          transform: translate3d(\r
              var(--tw-enter-translate-x, 0),\r
              var(--tw-enter-translate-y, 0),\r
              0\r
            )\r
            scale3d(\r
              var(--tw-enter-scale, 1),\r
              var(--tw-enter-scale, 1),\r
              var(--tw-enter-scale, 1)\r
            )\r
            rotate(var(--tw-enter-rotate, 0));\r
        }\r
      }\r
      @keyframes exit {\r
        to {\r
          opacity: var(--tw-exit-opacity, 1);\r
          transform: translate3d(\r
              var(--tw-exit-translate-x, 0),\r
              var(--tw-exit-translate-y, 0),\r
              0\r
            )\r
            scale3d(\r
              var(--tw-exit-scale, 1),\r
              var(--tw-exit-scale, 1),\r
              var(--tw-exit-scale, 1)\r
            )\r
            rotate(var(--tw-exit-rotate, 0));\r
        }\r
      }\r
      .animate-in {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
      .fade-in-0 {\r
        --tw-enter-opacity: 0;\r
      }\r
      .zoom-in-95 {\r
        --tw-enter-scale: 0.95;\r
      }\r
      .duration-1000 {\r
        animation-duration: 1000ms;\r
      }\r
      .duration-200 {\r
        animation-duration: 200ms;\r
      }\r
      .duration-300 {\r
        animation-duration: 300ms;\r
      }\r
      .duration-700 {\r
        animation-duration: 700ms;\r
      }\r
      .ease-in-out {\r
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
      }\r
      .running {\r
        animation-play-state: running;\r
      }\r
\r
      /* ---------- Fonts ---------- */\r
\r
      /* ---------- Tokens ---------- */\r
      :root {\r
        --bg: #050505;\r
        --surface: #121212;\r
        --surface-2: #1e1e1e;\r
        --accent: #dfff00;\r
        --text: #ffffff;\r
        --text-dim: #a1a1aa;\r
\r
        /* shadcn-compatible dark tokens (global) */\r
        --background: 0 0% 2%;\r
        --foreground: 0 0% 100%;\r
        --card: 0 0% 7%;\r
        --card-foreground: 0 0% 100%;\r
        --popover: 0 0% 7%;\r
        --popover-foreground: 0 0% 100%;\r
        --primary: 71 100% 50%;\r
        --primary-foreground: 0 0% 0%;\r
        --secondary: 0 0% 12%;\r
        --secondary-foreground: 0 0% 100%;\r
        --muted: 0 0% 12%;\r
        --muted-foreground: 0 0% 64%;\r
        --accent: 71 100% 50%;\r
        --accent-foreground: 0 0% 0%;\r
        --destructive: 0 62.8% 30.6%;\r
        --destructive-foreground: 0 0% 98%;\r
        --border: 0 0% 16%;\r
        --input: 0 0% 16%;\r
        --ring: 71 100% 50%;\r
        --radius: 0.25rem;\r
\r
        /* Re-assert brand accent AFTER shadcn tokens so var(--accent) is a valid color */\r
        --accent: #dfff00;\r
      }\r
\r
      * {\r
        border-color: hsl(var(--border));\r
      }\r
\r
      html,\r
      body,\r
      #root {\r
        background: #050505;\r
        color: #fff;\r
        min-height: 100%;\r
      }\r
\r
      body {\r
        margin: 0;\r
        font-family:\r
          "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;\r
        -webkit-font-smoothing: antialiased;\r
        -moz-osx-font-smoothing: grayscale;\r
      }\r
\r
      ::selection {\r
        background: #dfff00;\r
        color: #050505;\r
      }\r
\r
      .font-display {\r
        font-family: "Unbounded", system-ui, sans-serif;\r
        letter-spacing: -0.02em;\r
      }\r
      .font-mono {\r
        font-family: "JetBrains Mono", ui-monospace, monospace;\r
      }\r
\r
      .bg-grid {\r
        background-image:\r
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\r
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);\r
        background-size: 48px 48px;\r
      }\r
      .bg-grid-fade {\r
        mask-image: radial-gradient(\r
          ellipse 80% 60% at 50% 30%,\r
          #000 40%,\r
          transparent 80%\r
        );\r
      }\r
\r
      .terminal {\r
        background: var(--surface);\r
        border: 1px solid rgba(255, 255, 255, 0.1);\r
        border-radius: 4px;\r
        overflow: hidden;\r
      }\r
      .terminal-bar {\r
        display: flex;\r
        align-items: center;\r
        gap: 6px;\r
        padding: 10px 12px;\r
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r
        background: #0d0d0d;\r
      }\r
      .terminal-dot {\r
        width: 10px;\r
        height: 10px;\r
        border-radius: 999px;\r
        background: #2a2a2a;\r
      }\r
\r
      .corners {\r
        position: relative;\r
      }\r
      .corners::before,\r
      .corners::after {\r
        content: "";\r
        position: absolute;\r
        width: 12px;\r
        height: 12px;\r
        border: 1px solid #dfff00;\r
        pointer-events: none;\r
      }\r
      .corners::before {\r
        top: -1px;\r
        left: -1px;\r
        border-right: 0;\r
        border-bottom: 0;\r
      }\r
      .corners::after {\r
        bottom: -1px;\r
        right: -1px;\r
        border-left: 0;\r
        border-top: 0;\r
      }\r
\r
      .btn-block {\r
        position: relative;\r
        transition:\r
          transform 0.15s ease,\r
          box-shadow 0.15s ease,\r
          background-color 0.15s ease,\r
          color 0.15s ease,\r
          border-color 0.15s ease;\r
      }\r
      .btn-block:hover {\r
        transform: translate(-2px, -2px);\r
        box-shadow: 4px 4px 0 0 #dfff00;\r
      }\r
      .btn-block:active {\r
        transform: translate(0, 0);\r
        box-shadow: 0 0 0 0 #dfff00;\r
      }\r
\r
      .marquee-mask {\r
        mask-image: linear-gradient(\r
          90deg,\r
          transparent,\r
          #000 10%,\r
          #000 90%,\r
          transparent\r
        );\r
      }\r
\r
      ::-webkit-scrollbar {\r
        width: 8px;\r
        height: 8px;\r
      }\r
      ::-webkit-scrollbar-track {\r
        background: #0a0a0a;\r
      }\r
      ::-webkit-scrollbar-thumb {\r
        background: #1f1f1f;\r
      }\r
      ::-webkit-scrollbar-thumb:hover {\r
        background: #2a2a2a;\r
      }\r
\r
      .link-underline {\r
        position: relative;\r
      }\r
      .link-underline::after {\r
        content: "";\r
        position: absolute;\r
        left: 0;\r
        right: 100%;\r
        bottom: -3px;\r
        height: 1px;\r
        background: currentColor;\r
        transition: right 0.3s ease;\r
      }\r
      .link-underline:hover::after {\r
        right: 0;\r
      }\r
\r
      html {\r
        scroll-behavior: smooth;\r
      }\r
\r
      .file\\:border-0::file-selector-button {\r
        border-width: 0px;\r
      }\r
\r
      .file\\:bg-transparent::file-selector-button {\r
        background-color: transparent;\r
      }\r
\r
      .file\\:text-sm::file-selector-button {\r
        font-size: 0.875rem;\r
        line-height: 1.25rem;\r
      }\r
\r
      .file\\:font-medium::file-selector-button {\r
        font-weight: 500;\r
      }\r
\r
      .file\\:text-foreground::file-selector-button {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .placeholder\\:text-muted-foreground::placeholder {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .placeholder\\:text-zinc-600::placeholder {\r
        --tw-text-opacity: 1;\r
        color: rgb(82 82 91 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .after\\:absolute::after {\r
        content: var(--tw-content);\r
        position: absolute;\r
      }\r
\r
      .after\\:inset-y-0::after {\r
        content: var(--tw-content);\r
        top: 0px;\r
        bottom: 0px;\r
      }\r
\r
      .after\\:left-1\\/2::after {\r
        content: var(--tw-content);\r
        left: 50%;\r
      }\r
\r
      .after\\:w-1::after {\r
        content: var(--tw-content);\r
        width: 0.25rem;\r
      }\r
\r
      .after\\:-translate-x-1\\/2::after {\r
        content: var(--tw-content);\r
        --tw-translate-x: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .first\\:rounded-l-md:first-child {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .first\\:border-l:first-child {\r
        border-left-width: 1px;\r
      }\r
\r
      .last\\:rounded-r-md:last-child {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .focus-within\\:relative:focus-within {\r
        position: relative;\r
      }\r
\r
      .focus-within\\:z-20:focus-within {\r
        z-index: 20;\r
      }\r
\r
      .hover\\:border-\\[var\\(--accent\\)\\]:hover {\r
        border-color: var(--accent);\r
      }\r
\r
      .hover\\:bg-\\[var\\(--accent\\)\\]:hover {\r
        background-color: var(--accent);\r
      }\r
\r
      .hover\\:bg-accent:hover {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .hover\\:bg-destructive\\/80:hover {\r
        background-color: hsl(var(--destructive) / 0.8);\r
      }\r
\r
      .hover\\:bg-destructive\\/90:hover {\r
        background-color: hsl(var(--destructive) / 0.9);\r
      }\r
\r
      .hover\\:bg-muted:hover {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .hover\\:bg-muted\\/50:hover {\r
        background-color: hsl(var(--muted) / 0.5);\r
      }\r
\r
      .hover\\:bg-primary:hover {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .hover\\:bg-primary\\/80:hover {\r
        background-color: hsl(var(--primary) / 0.8);\r
      }\r
\r
      .hover\\:bg-primary\\/90:hover {\r
        background-color: hsl(var(--primary) / 0.9);\r
      }\r
\r
      .hover\\:bg-secondary:hover {\r
        background-color: hsl(var(--secondary));\r
      }\r
\r
      .hover\\:bg-secondary\\/80:hover {\r
        background-color: hsl(var(--secondary) / 0.8);\r
      }\r
\r
      .hover\\:text-\\[var\\(--accent\\)\\]:hover {\r
        color: var(--accent);\r
      }\r
\r
      .hover\\:text-accent-foreground:hover {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .hover\\:text-black:hover {\r
        --tw-text-opacity: 1;\r
        color: rgb(0 0 0 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .hover\\:text-foreground:hover {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .hover\\:text-muted-foreground:hover {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .hover\\:text-primary-foreground:hover {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .hover\\:underline:hover {\r
        text-decoration-line: underline;\r
      }\r
\r
      .hover\\:opacity-100:hover {\r
        opacity: 1;\r
      }\r
\r
      .hover\\:grayscale-0:hover {\r
        --tw-grayscale: grayscale(0);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
\r
      .focus\\:border-\\[var\\(--accent\\)\\]:focus {\r
        border-color: var(--accent);\r
      }\r
\r
      .focus\\:bg-accent:focus {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .focus\\:bg-primary:focus {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .focus\\:text-accent-foreground:focus {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .focus\\:text-primary-foreground:focus {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .focus\\:opacity-100:focus {\r
        opacity: 1;\r
      }\r
\r
      .focus\\:outline-none:focus {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
\r
      .focus\\:ring-1:focus {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus\\:ring-2:focus {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus\\:ring-ring:focus {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
\r
      .focus\\:ring-offset-2:focus {\r
        --tw-ring-offset-width: 2px;\r
      }\r
\r
      .focus-visible\\:outline-none:focus-visible {\r
        outline: 2px solid transparent;\r
        outline-offset: 2px;\r
      }\r
\r
      .focus-visible\\:ring-1:focus-visible {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus-visible\\:ring-2:focus-visible {\r
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0\r
          var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0\r
          calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\r
          var(--tw-shadow, 0 0 #0000);\r
      }\r
\r
      .focus-visible\\:ring-ring:focus-visible {\r
        --tw-ring-color: hsl(var(--ring));\r
      }\r
\r
      .focus-visible\\:ring-offset-1:focus-visible {\r
        --tw-ring-offset-width: 1px;\r
      }\r
\r
      .focus-visible\\:ring-offset-2:focus-visible {\r
        --tw-ring-offset-width: 2px;\r
      }\r
\r
      .focus-visible\\:ring-offset-background:focus-visible {\r
        --tw-ring-offset-color: hsl(var(--background));\r
      }\r
\r
      .disabled\\:pointer-events-none:disabled {\r
        pointer-events: none;\r
      }\r
\r
      .disabled\\:cursor-not-allowed:disabled {\r
        cursor: not-allowed;\r
      }\r
\r
      .disabled\\:opacity-50:disabled {\r
        opacity: 0.5;\r
      }\r
\r
      .disabled\\:opacity-60:disabled {\r
        opacity: 0.6;\r
      }\r
\r
      .group:hover .group-hover\\:scale-105 {\r
        --tw-scale-x: 1.05;\r
        --tw-scale-y: 1.05;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .group:hover .group-hover\\:text-\\[var\\(--accent\\)\\] {\r
        color: var(--accent);\r
      }\r
\r
      .group:hover .group-hover\\:opacity-100 {\r
        opacity: 1;\r
      }\r
\r
      .group:hover .group-hover\\:opacity-60 {\r
        opacity: 0.6;\r
      }\r
\r
      .group:hover .group-hover\\:grayscale-0 {\r
        --tw-grayscale: grayscale(0);\r
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\r
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)\r
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:border-muted\\/40 {\r
        border-color: hsl(var(--muted) / 0.4);\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:border-border {\r
        border-color: hsl(var(--border));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:bg-muted {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:bg-primary {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:bg-background {\r
        background-color: hsl(var(--background));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:text-red-300 {\r
        --tw-text-opacity: 1;\r
        color: rgb(252 165 165 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:text-muted-foreground {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .group.toast .group-\\[\\.toast\\]\\:text-primary-foreground {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:text-foreground {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .group.toaster .group-\\[\\.toaster\\]\\:shadow-lg {\r
        --tw-shadow:\r
          0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 10px 15px -3px var(--tw-shadow-color),\r
          0 4px 6px -4px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:hover\\:border-destructive\\/30:hover {\r
        border-color: hsl(var(--destructive) / 0.3);\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:hover\\:bg-destructive:hover {\r
        background-color: hsl(var(--destructive));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:hover\\:text-destructive-foreground:hover {\r
        color: hsl(var(--destructive-foreground));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover {\r
        --tw-text-opacity: 1;\r
        color: rgb(254 242 242 / var(--tw-text-opacity, 1));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:focus\\:ring-destructive:focus {\r
        --tw-ring-color: hsl(var(--destructive));\r
      }\r
\r
      .group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus {\r
        --tw-ring-opacity: 1;\r
        --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity, 1));\r
      }\r
\r
      .group.destructive\r
        .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus {\r
        --tw-ring-offset-color: #dc2626;\r
      }\r
\r
      .peer:disabled ~ .peer-disabled\\:cursor-not-allowed {\r
        cursor: not-allowed;\r
      }\r
\r
      .peer:disabled ~ .peer-disabled\\:opacity-70 {\r
        opacity: 0.7;\r
      }\r
\r
      .has-\\[\\:disabled\\]\\:opacity-50:has(:disabled) {\r
        opacity: 0.5;\r
      }\r
\r
      .aria-selected\\:bg-accent[aria-selected="true"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .aria-selected\\:bg-accent\\/50[aria-selected="true"] {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .aria-selected\\:text-accent-foreground[aria-selected="true"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .aria-selected\\:text-muted-foreground[aria-selected="true"] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .aria-selected\\:opacity-100[aria-selected="true"] {\r
        opacity: 1;\r
      }\r
\r
      .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled="true"] {\r
        pointer-events: none;\r
      }\r
\r
      .data-\\[disabled\\]\\:pointer-events-none[data-disabled] {\r
        pointer-events: none;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction="vertical"] {\r
        height: 1px;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction="vertical"] {\r
        width: 100%;\r
      }\r
\r
      .data-\\[side\\=bottom\\]\\:translate-y-1[data-side="bottom"] {\r
        --tw-translate-y: 0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=left\\]\\:-translate-x-1[data-side="left"] {\r
        --tw-translate-x: -0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=right\\]\\:translate-x-1[data-side="right"] {\r
        --tw-translate-x: 0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[side\\=top\\]\\:-translate-y-1[data-side="top"] {\r
        --tw-translate-y: -0.25rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:translate-x-4[data-state="checked"] {\r
        --tw-translate-x: 1rem;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state="unchecked"] {\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe="cancel"] {\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe="end"] {\r
        --tw-translate-x: var(--radix-toast-swipe-end-x);\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe="move"] {\r
        --tw-translate-x: var(--radix-toast-swipe-move-x);\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      @keyframes accordion-up {\r
        from {\r
          height: var(--radix-accordion-content-height);\r
        }\r
\r
        to {\r
          height: 0;\r
        }\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:animate-accordion-up[data-state="closed"] {\r
        animation: accordion-up 0.2s ease-out;\r
      }\r
\r
      @keyframes accordion-down {\r
        from {\r
          height: 0;\r
        }\r
\r
        to {\r
          height: var(--radix-accordion-content-height);\r
        }\r
      }\r
\r
      .data-\\[state\\=open\\]\\:animate-accordion-down[data-state="open"] {\r
        animation: accordion-down 0.2s ease-out;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction="vertical"] {\r
        flex-direction: column;\r
      }\r
\r
      .data-\\[selected\\=true\\]\\:bg-accent[data-selected="true"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=active\\]\\:bg-background[data-state="active"] {\r
        background-color: hsl(var(--background));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:bg-primary[data-state="checked"] {\r
        background-color: hsl(var(--primary));\r
      }\r
\r
      .data-\\[state\\=on\\]\\:bg-accent[data-state="on"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-accent[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-accent\\/50[data-state="open"] {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .data-\\[state\\=open\\]\\:bg-secondary[data-state="open"] {\r
        background-color: hsl(var(--secondary));\r
      }\r
\r
      .data-\\[state\\=selected\\]\\:bg-muted[data-state="selected"] {\r
        background-color: hsl(var(--muted));\r
      }\r
\r
      .data-\\[state\\=unchecked\\]\\:bg-input[data-state="unchecked"] {\r
        background-color: hsl(var(--input));\r
      }\r
\r
      .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected="true"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=active\\]\\:text-foreground[data-state="active"] {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .data-\\[state\\=checked\\]\\:text-primary-foreground[data-state="checked"] {\r
        color: hsl(var(--primary-foreground));\r
      }\r
\r
      .data-\\[state\\=on\\]\\:text-accent-foreground[data-state="on"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:text-accent-foreground[data-state="open"] {\r
        color: hsl(var(--accent-foreground));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:text-muted-foreground[data-state="open"] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled="true"] {\r
        opacity: 0.5;\r
      }\r
\r
      .data-\\[disabled\\]\\:opacity-50[data-disabled] {\r
        opacity: 0.5;\r
      }\r
\r
      .data-\\[state\\=active\\]\\:shadow[data-state="active"] {\r
        --tw-shadow:\r
          0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\r
        --tw-shadow-colored:\r
          0 1px 3px 0 var(--tw-shadow-color),\r
          0 1px 2px -1px var(--tw-shadow-color);\r
        box-shadow:\r
          var(--tw-ring-offset-shadow, 0 0 #0000),\r
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
      }\r
\r
      .data-\\[swipe\\=move\\]\\:transition-none[data-swipe="move"] {\r
        transition-property: none;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {\r
        transition-duration: 300ms;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:duration-500[data-state="open"] {\r
        transition-duration: 500ms;\r
      }\r
\r
      .data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^="from-"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:animate-in[data-state="open"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=visible\\]\\:animate-in[data-state="visible"] {\r
        animation-name: enter;\r
        animation-duration: 150ms;\r
        --tw-enter-opacity: initial;\r
        --tw-enter-scale: initial;\r
        --tw-enter-rotate: initial;\r
        --tw-enter-translate-x: initial;\r
        --tw-enter-translate-y: initial;\r
      }\r
\r
      .data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^="to-"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[state\\=hidden\\]\\:animate-out[data-state="hidden"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[swipe\\=end\\]\\:animate-out[data-swipe="end"] {\r
        animation-name: exit;\r
        animation-duration: 150ms;\r
        --tw-exit-opacity: initial;\r
        --tw-exit-scale: initial;\r
        --tw-exit-rotate: initial;\r
        --tw-exit-translate-x: initial;\r
        --tw-exit-translate-y: initial;\r
      }\r
\r
      .data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^="from-"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^="to-"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:fade-out-80[data-state="closed"] {\r
        --tw-exit-opacity: 0.8;\r
      }\r
\r
      .data-\\[state\\=hidden\\]\\:fade-out[data-state="hidden"] {\r
        --tw-exit-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=visible\\]\\:fade-in[data-state="visible"] {\r
        --tw-enter-opacity: 0;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {\r
        --tw-exit-scale: 0.95;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:zoom-in-90[data-state="open"] {\r
        --tw-enter-scale: 0.9;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {\r
        --tw-enter-scale: 0.95;\r
      }\r
\r
      .data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion="from-end"] {\r
        --tw-enter-translate-x: 13rem;\r
      }\r
\r
      .data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion="from-start"] {\r
        --tw-enter-translate-x: -13rem;\r
      }\r
\r
      .data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion="to-end"] {\r
        --tw-exit-translate-x: 13rem;\r
      }\r
\r
      .data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion="to-start"] {\r
        --tw-exit-translate-x: -13rem;\r
      }\r
\r
      .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side="bottom"] {\r
        --tw-enter-translate-y: -0.5rem;\r
      }\r
\r
      .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side="left"] {\r
        --tw-enter-translate-x: 0.5rem;\r
      }\r
\r
      .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side="right"] {\r
        --tw-enter-translate-x: -0.5rem;\r
      }\r
\r
      .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side="top"] {\r
        --tw-enter-translate-y: 0.5rem;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state="closed"] {\r
        --tw-exit-translate-y: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-left[data-state="closed"] {\r
        --tw-exit-translate-x: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {\r
        --tw-exit-translate-x: -50%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-right[data-state="closed"] {\r
        --tw-exit-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-right-full[data-state="closed"] {\r
        --tw-exit-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-top[data-state="closed"] {\r
        --tw-exit-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {\r
        --tw-exit-translate-y: -48%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state="open"] {\r
        --tw-enter-translate-y: 100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-left[data-state="open"] {\r
        --tw-enter-translate-x: -100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {\r
        --tw-enter-translate-x: -50%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-right[data-state="open"] {\r
        --tw-enter-translate-x: 100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top[data-state="open"] {\r
        --tw-enter-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {\r
        --tw-enter-translate-y: -48%;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:slide-in-from-top-full[data-state="open"] {\r
        --tw-enter-translate-y: -100%;\r
      }\r
\r
      .data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {\r
        animation-duration: 300ms;\r
      }\r
\r
      .data-\\[state\\=open\\]\\:duration-500[data-state="open"] {\r
        animation-duration: 500ms;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        left: 0px;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        height: 0.25rem;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        width: 100%;\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        --tw-translate-y: -50%;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction="vertical"]::after {\r
        content: var(--tw-content);\r
        --tw-translate-x: 0px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:hover\\:bg-accent:hover[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .data-\\[state\\=open\\]\\:focus\\:bg-accent:focus[data-state="open"] {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .group[data-state="open"] .group-data-\\[state\\=open\\]\\:rotate-180 {\r
        --tw-rotate: 180deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .dark\\:border-destructive:is(.dark *) {\r
        border-color: hsl(var(--destructive));\r
      }\r
\r
      @media (min-width: 640px) {\r
        .sm\\:bottom-0 {\r
          bottom: 0px;\r
        }\r
\r
        .sm\\:right-0 {\r
          right: 0px;\r
        }\r
\r
        .sm\\:top-auto {\r
          top: auto;\r
        }\r
\r
        .sm\\:mt-0 {\r
          margin-top: 0px;\r
        }\r
\r
        .sm\\:max-w-sm {\r
          max-width: 24rem;\r
        }\r
\r
        .sm\\:grid-cols-2 {\r
          grid-template-columns: repeat(2, minmax(0, 1fr));\r
        }\r
\r
        .sm\\:flex-row {\r
          flex-direction: row;\r
        }\r
\r
        .sm\\:flex-col {\r
          flex-direction: column;\r
        }\r
\r
        .sm\\:justify-end {\r
          justify-content: flex-end;\r
        }\r
\r
        .sm\\:gap-2\\.5 {\r
          gap: 0.625rem;\r
        }\r
\r
        .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-x-reverse: 0;\r
          margin-right: calc(0.5rem * var(--tw-space-x-reverse));\r
          margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\r
        }\r
\r
        .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-x-reverse: 0;\r
          margin-right: calc(1rem * var(--tw-space-x-reverse));\r
          margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\r
        }\r
\r
        .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\r
          --tw-space-y-reverse: 0;\r
          margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\r
          margin-bottom: calc(0px * var(--tw-space-y-reverse));\r
        }\r
\r
        .sm\\:rounded-lg {\r
          border-radius: var(--radius);\r
        }\r
\r
        .sm\\:text-left {\r
          text-align: left;\r
        }\r
\r
        .sm\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .data-\\[state\\=open\\]\\:sm\\:slide-in-from-bottom-full[data-state="open"] {\r
          --tw-enter-translate-y: 100%;\r
        }\r
      }\r
\r
      @media (min-width: 768px) {\r
        .md\\:absolute {\r
          position: absolute;\r
        }\r
\r
        .md\\:left-1\\/2 {\r
          left: 50%;\r
        }\r
\r
        .md\\:order-1 {\r
          order: 1;\r
        }\r
\r
        .md\\:order-2 {\r
          order: 2;\r
        }\r
\r
        .md\\:col-span-2 {\r
          grid-column: span 2 / span 2;\r
        }\r
\r
        .md\\:col-span-4 {\r
          grid-column: span 4 / span 4;\r
        }\r
\r
        .md\\:col-span-5 {\r
          grid-column: span 5 / span 5;\r
        }\r
\r
        .md\\:col-span-6 {\r
          grid-column: span 6 / span 6;\r
        }\r
\r
        .md\\:col-span-7 {\r
          grid-column: span 7 / span 7;\r
        }\r
\r
        .md\\:col-span-8 {\r
          grid-column: span 8 / span 8;\r
        }\r
\r
        .md\\:mt-0 {\r
          margin-top: 0px;\r
        }\r
\r
        .md\\:block {\r
          display: block;\r
        }\r
\r
        .md\\:flex {\r
          display: flex;\r
        }\r
\r
        .md\\:grid {\r
          display: grid;\r
        }\r
\r
        .md\\:hidden {\r
          display: none;\r
        }\r
\r
        .md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\] {\r
          width: var(--radix-navigation-menu-viewport-width);\r
        }\r
\r
        .md\\:w-auto {\r
          width: auto;\r
        }\r
\r
        .md\\:max-w-\\[420px\\] {\r
          max-width: 420px;\r
        }\r
\r
        .md\\:translate-y-8 {\r
          --tw-translate-y: 2rem;\r
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
            scaleY(var(--tw-scale-y));\r
        }\r
\r
        .md\\:grid-cols-2 {\r
          grid-template-columns: repeat(2, minmax(0, 1fr));\r
        }\r
\r
        .md\\:grid-cols-4 {\r
          grid-template-columns: repeat(4, minmax(0, 1fr));\r
        }\r
\r
        .md\\:flex-row {\r
          flex-direction: row;\r
        }\r
\r
        .md\\:flex-col {\r
          flex-direction: column;\r
        }\r
\r
        .md\\:justify-end {\r
          justify-content: flex-end;\r
        }\r
\r
        .md\\:gap-12 {\r
          gap: 3rem;\r
        }\r
\r
        .md\\:gap-8 {\r
          gap: 2rem;\r
        }\r
\r
        .md\\:border-b-0 {\r
          border-bottom-width: 0px;\r
        }\r
\r
        .md\\:border-r {\r
          border-right-width: 1px;\r
        }\r
\r
        .md\\:p-6 {\r
          padding: 1.5rem;\r
        }\r
\r
        .md\\:p-8 {\r
          padding: 2rem;\r
        }\r
\r
        .md\\:px-12 {\r
          padding-left: 3rem;\r
          padding-right: 3rem;\r
        }\r
\r
        .md\\:py-28 {\r
          padding-top: 7rem;\r
          padding-bottom: 7rem;\r
        }\r
\r
        .md\\:py-40 {\r
          padding-top: 10rem;\r
          padding-bottom: 10rem;\r
        }\r
\r
        .md\\:pl-0 {\r
          padding-left: 0px;\r
        }\r
\r
        .md\\:pl-12 {\r
          padding-left: 3rem;\r
        }\r
\r
        .md\\:pl-6 {\r
          padding-left: 1.5rem;\r
        }\r
\r
        .md\\:pr-12 {\r
          padding-right: 3rem;\r
        }\r
\r
        .md\\:pt-32 {\r
          padding-top: 8rem;\r
        }\r
\r
        .md\\:pt-40 {\r
          padding-top: 10rem;\r
        }\r
\r
        .md\\:text-right {\r
          text-align: right;\r
        }\r
\r
        .md\\:text-3xl {\r
          font-size: 1.875rem;\r
          line-height: 2.25rem;\r
        }\r
\r
        .md\\:text-4xl {\r
          font-size: 2.25rem;\r
          line-height: 2.5rem;\r
        }\r
\r
        .md\\:text-5xl {\r
          font-size: 3rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-6xl {\r
          font-size: 3.75rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-8xl {\r
          font-size: 6rem;\r
          line-height: 1;\r
        }\r
\r
        .md\\:text-\\[14rem\\] {\r
          font-size: 14rem;\r
        }\r
\r
        .md\\:text-\\[22rem\\] {\r
          font-size: 22rem;\r
        }\r
\r
        .md\\:text-base {\r
          font-size: 1rem;\r
          line-height: 1.5rem;\r
        }\r
\r
        .md\\:text-lg {\r
          font-size: 1.125rem;\r
          line-height: 1.75rem;\r
        }\r
\r
        .md\\:text-sm {\r
          font-size: 0.875rem;\r
          line-height: 1.25rem;\r
        }\r
\r
        .md\\:text-xl {\r
          font-size: 1.25rem;\r
          line-height: 1.75rem;\r
        }\r
      }\r
\r
      @media (min-width: 1024px) {\r
        .lg\\:text-7xl {\r
          font-size: 4.5rem;\r
          line-height: 1;\r
        }\r
\r
        .lg\\:text-9xl {\r
          font-size: 8rem;\r
          line-height: 1;\r
        }\r
      }\r
\r
      .\\[\\&\\+div\\]\\:text-xs + div {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
\r
      .\\[\\&\\:has\\(\\>\\.day-range-end\\)\\]\\:rounded-r-md:has(> .day-range-end) {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\>\\.day-range-start\\)\\]\\:rounded-l-md:has(\r
          > .day-range-start\r
        ) {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-md:has([aria-selected]) {\r
        border-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:bg-accent:has([aria-selected]) {\r
        background-color: hsl(var(--accent));\r
      }\r
\r
      .first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md:has(\r
          [aria-selected]\r
        ):first-child {\r
        border-top-left-radius: calc(var(--radius) - 2px);\r
        border-bottom-left-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md:has(\r
          [aria-selected]\r
        ):last-child {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\.day-outside\\)\\]\\:bg-accent\\/50:has(\r
          [aria-selected].day-outside\r
        ) {\r
        background-color: hsl(var(--accent) / 0.5);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md:has(\r
          [aria-selected].day-range-end\r
        ) {\r
        border-top-right-radius: calc(var(--radius) - 2px);\r
        border-bottom-right-radius: calc(var(--radius) - 2px);\r
      }\r
\r
      .\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role="checkbox"]) {\r
        padding-right: 0px;\r
      }\r
\r
      .\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role="checkbox"] {\r
        --tw-translate-y: 2px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\>span\\]\\:line-clamp-1 > span {\r
        overflow: hidden;\r
        display: -webkit-box;\r
        -webkit-box-orient: vertical;\r
        -webkit-line-clamp: 1;\r
      }\r
\r
      .\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\] > svg + div {\r
        --tw-translate-y: -3px;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:absolute > svg {\r
        position: absolute;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:left-4 > svg {\r
        left: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:top-4 > svg {\r
        top: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:size-4 > svg {\r
        width: 1rem;\r
        height: 1rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:h-3\\.5 > svg {\r
        height: 0.875rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:w-3\\.5 > svg {\r
        width: 0.875rem;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:shrink-0 > svg {\r
        flex-shrink: 0;\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:text-destructive > svg {\r
        color: hsl(var(--destructive));\r
      }\r
\r
      .\\[\\&\\>svg\\]\\:text-foreground > svg {\r
        color: hsl(var(--foreground));\r
      }\r
\r
      .\\[\\&\\>svg\\~\\*\\]\\:pl-7 > svg ~ * {\r
        padding-left: 1.75rem;\r
      }\r
\r
      .\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child > tr {\r
        border-bottom-width: 0px;\r
      }\r
\r
      .\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction="vertical"]\r
        > div {\r
        --tw-rotate: 90deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state="open"] > svg {\r
        --tw-rotate: 180deg;\r
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))\r
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))\r
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\r
          scaleY(var(--tw-scale-y));\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {\r
        padding-top: 0.375rem;\r
        padding-bottom: 0.375rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {\r
        font-size: 0.75rem;\r
        line-height: 1rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {\r
        font-weight: 500;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground\r
        [cmdk-group-heading] {\r
        color: hsl(var(--muted-foreground));\r
      }\r
\r
      .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0\r
        [cmdk-group]:not([hidden])\r
        ~ [cmdk-group] {\r
        padding-top: 0px;\r
      }\r
\r
      .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {\r
        height: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {\r
        width: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {\r
        height: 3rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {\r
        padding-left: 0.5rem;\r
        padding-right: 0.5rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {\r
        padding-top: 0.75rem;\r
        padding-bottom: 0.75rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {\r
        height: 1.25rem;\r
      }\r
\r
      .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {\r
        width: 1.25rem;\r
      }\r
\r
      .\\[\\&_p\\]\\:leading-relaxed p {\r
        line-height: 1.625;\r
      }\r
\r
      .\\[\\&_svg\\]\\:pointer-events-none svg {\r
        pointer-events: none;\r
      }\r
\r
      .\\[\\&_svg\\]\\:size-4 svg {\r
        width: 1rem;\r
        height: 1rem;\r
      }\r
\r
      .\\[\\&_svg\\]\\:shrink-0 svg {\r
        flex-shrink: 0;\r
      }\r
\r
      .\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {\r
        border-width: 0px;\r
      }\r
\r
      .\\[\\&_tr\\]\\:border-b tr {\r
        border-bottom-width: 1px;\r
      }\r
\r
      /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZCxzQkFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkO0FBQWM7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQsYUFBYztFQUFkLGFBQWM7RUFBZCxrQkFBYztFQUFkLHNDQUFjO0VBQWQsOEJBQWM7RUFBZCw2QkFBYztFQUFkLDRCQUFjO0VBQWQsZUFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQsa0JBQWM7RUFBZCwyQkFBYztFQUFkLDRCQUFjO0VBQWQsc0NBQWM7RUFBZCxrQ0FBYztFQUFkLDJCQUFjO0VBQWQsc0JBQWM7RUFBZCw4QkFBYztFQUFkLFlBQWM7RUFBZCxrQkFBYztFQUFkLGdCQUFjO0VBQWQsaUJBQWM7RUFBZCxrQkFBYztFQUFkLGNBQWM7RUFBZCxnQkFBYztFQUFkLGFBQWM7RUFBZCxtQkFBYztFQUFkLHFCQUFjO0VBQWQsMkJBQWM7RUFBZCx5QkFBYztFQUFkLDBCQUFjO0VBQWQsMkJBQWM7RUFBZCx1QkFBYztFQUFkLHdCQUFjO0VBQWQseUJBQWM7RUFBZCxzQkFBYztFQUFkLG9CQUFjO0VBQWQsc0JBQWM7RUFBZCxxQkFBYztFQUFkO0FBQWMsQ0FBZDs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYyxFQUFkLE1BQWM7RUFBZCxXQUFjLEVBQWQsTUFBYztFQUFkLCtIQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCx1QkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjO0FBQWQ7RUFBQSxhQUFjO0FBQUE7QUFFZDtFQUFBLGtCQUFtQjtFQUFuQixVQUFtQjtFQUFuQixXQUFtQjtFQUFuQixVQUFtQjtFQUFuQixZQUFtQjtFQUFuQixnQkFBbUI7RUFBbkIsc0JBQW1CO0VBQW5CLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxTQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLFFBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5COztFQUFBO0lBQUEsbUJBQW1CO0lBQW5CO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjs7RUFBQTtJQUFBO0VBQW1CO0FBQUE7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQix1REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsc0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLCtEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQixnRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsNERBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLDhEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiw0REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsK0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsdUJBQW1CO0VBQW5CLDREQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHVCQUFtQjtFQUFuQiwrREFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx1QkFBbUI7RUFBbkIsOERBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsNEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHlEQUFtQjtFQUFuQiwrREFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxxRUFBbUI7RUFBbkIsK0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUVBQW1CO0VBQW5CLCtEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdFQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdFQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGlCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxpQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxlQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG1CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMEVBQW1CO0VBQW5CLDhGQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtFQUFtQjtFQUFuQixtR0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw2RUFBbUI7RUFBbkIsaUdBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsMENBQW1CO0VBQW5CLHVEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsMkdBQW1CO0VBQW5CLHlHQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDJHQUFtQjtFQUFuQix5R0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsK0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw2QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSx3SkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLCtGQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw0QkFBbUI7RUFBbkIsd0RBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsOEJBQW1CO0VBQW5CLHdEQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7O0VBQUE7SUFBQSxtQ0FBbUI7SUFBbkI7RUFBbUI7QUFBQTtBQUFuQjs7RUFBQTtJQUFBLGtDQUFtQjtJQUFuQjtFQUFtQjtBQUFBO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CLHlCQUFtQjtFQUFuQiwyQkFBbUI7RUFBbkIseUJBQW1CO0VBQW5CLDBCQUFtQjtFQUFuQiwrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1COztBQUVuQixnQ0FBZ0M7O0FBR2hDLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1COztFQUVuQiwyQ0FBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjs7RUFFakIsaUZBQWlGO0VBQ2pGLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkVBQTZFO0VBQzdFLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFOzswRUFFd0U7RUFDeEUsMEJBQTBCO0FBQzVCO0FBQ0E7RUFNRTs7OztHQUlDO0FBQ0g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7Ozs7OzJCQUt5QjtBQUMzQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQVFFOzs7Ozs7R0FNQztBQUNIOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQS9NQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLG1CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxRQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLGtEQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsNEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDhCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwyR0FnTkE7RUFoTkEseUdBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDJHQWdOQTtFQWhOQSx5R0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDJHQWdOQTtFQWhOQSx5R0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMkdBZ05BO0VBaE5BLHlHQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxrQkFnTkE7RUFoTkEsa0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDRCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsK0VBZ05BO0VBaE5BLG1HQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsb0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHlCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEseUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEscUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxnREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTs7RUFBQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BO0FBQUE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7QUFBQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSwwRUFnTkE7RUFoTkEsOEZBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMkJBZ05BO0VBaE5BLHlCQWdOQTtFQWhOQSwwQkFnTkE7RUFoTkEsK0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsMEJBZ05BO0VBaE5BLHdCQWdOQTtFQWhOQSx5QkFnTkE7RUFoTkEsOEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSwwQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLDBCQWdOQTtFQWhOQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsMEJBZ05BO0VBaE5BLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxtQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsdUJBZ05BO0lBaE5BLHNEQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSx1QkFnTkE7SUFoTkEsb0RBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLHVCQWdOQTtJQWhOQSwyREFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsaUJBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BO0FBQUE7O0FBaE5BOztFQUFBO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUE7RUFnTkE7O0VBaE5BO0lBQUEsc0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBLGtCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxpQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsa0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBO0VBZ05BOztFQWhOQTtJQUFBLG1CQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxrQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsZUFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsa0JBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLGlCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQTtFQWdOQTs7RUFoTkE7SUFBQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxtQkFnTkE7SUFoTkE7RUFnTkE7O0VBaE5BO0lBQUEsbUJBZ05BO0lBaE5BO0VBZ05BOztFQWhOQTtJQUFBLGtCQWdOQTtJQWhOQTtFQWdOQTtBQUFBOztBQWhOQTs7RUFBQTtJQUFBLGlCQWdOQTtJQWhOQTtFQWdOQTs7RUFoTkE7SUFBQSxlQWdOQTtJQWhOQTtFQWdOQTtBQUFBOztBQWhOQTtFQUFBLGtCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxrREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEsaURBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLGlEQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxrREFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsa0RBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBO0FBZ05BOztBQWhOQTtFQUFBLHFCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxnQkFnTkE7RUFoTkEsb0JBZ05BO0VBaE5BLDRCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxzQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsV0FnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsa0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG1CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUEscUJBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLGtCQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxvQkFnTkE7RUFoTkE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUE7QUFnTkE7O0FBaE5BO0VBQUEsb0JBZ05BO0VBaE5BO0FBZ05BOztBQWhOQTtFQUFBLG9CQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQSxXQWdOQTtFQWhOQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQTs7QUFoTkE7RUFBQTtBQWdOQSIsInNvdXJjZXNDb250ZW50IjpbIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuXG4vKiAtLS0tLS0tLS0tIEZvbnRzIC0tLS0tLS0tLS0gKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VbmJvdW5kZWQ6d2dodEA0MDA7NzAwOzkwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi8qIC0tLS0tLS0tLS0gVG9rZW5zIC0tLS0tLS0tLS0gKi9cbjpyb290IHtcbiAgLS1iZzogIzA1MDUwNTtcbiAgLS1zdXJmYWNlOiAjMTIxMjEyO1xuICAtLXN1cmZhY2UtMjogIzFlMWUxZTtcbiAgLS1hY2NlbnQ6ICNkZmZmMDA7XG4gIC0tdGV4dDogI2ZmZmZmZjtcbiAgLS10ZXh0LWRpbTogI2ExYTFhYTtcblxuICAvKiBzaGFkY24tY29tcGF0aWJsZSBkYXJrIHRva2VucyAoZ2xvYmFsKSAqL1xuICAtLWJhY2tncm91bmQ6IDAgMCUgMiU7XG4gIC0tZm9yZWdyb3VuZDogMCAwJSAxMDAlO1xuICAtLWNhcmQ6IDAgMCUgNyU7XG4gIC0tY2FyZC1mb3JlZ3JvdW5kOiAwIDAlIDEwMCU7XG4gIC0tcG9wb3ZlcjogMCAwJSA3JTtcbiAgLS1wb3BvdmVyLWZvcmVncm91bmQ6IDAgMCUgMTAwJTtcbiAgLS1wcmltYXJ5OiA3MSAxMDAlIDUwJTtcbiAgLS1wcmltYXJ5LWZvcmVncm91bmQ6IDAgMCUgMCU7XG4gIC0tc2Vjb25kYXJ5OiAwIDAlIDEyJTtcbiAgLS1zZWNvbmRhcnktZm9yZWdyb3VuZDogMCAwJSAxMDAlO1xuICAtLW11dGVkOiAwIDAlIDEyJTtcbiAgLS1tdXRlZC1mb3JlZ3JvdW5kOiAwIDAlIDY0JTtcbiAgLS1hY2NlbnQ6IDcxIDEwMCUgNTAlO1xuICAtLWFjY2VudC1mb3JlZ3JvdW5kOiAwIDAlIDAlO1xuICAtLWRlc3RydWN0aXZlOiAwIDYyLjglIDMwLjYlO1xuICAtLWRlc3RydWN0aXZlLWZvcmVncm91bmQ6IDAgMCUgOTglO1xuICAtLWJvcmRlcjogMCAwJSAxNiU7XG4gIC0taW5wdXQ6IDAgMCUgMTYlO1xuICAtLXJpbmc6IDcxIDEwMCUgNTAlO1xuICAtLXJhZGl1czogMC4yNXJlbTtcblxuICAvKiBSZS1hc3NlcnQgYnJhbmQgYWNjZW50IEFGVEVSIHNoYWRjbiB0b2tlbnMgc28gdmFyKC0tYWNjZW50KSBpcyBhIHZhbGlkIGNvbG9yICovXG4gIC0tYWNjZW50OiAjZGZmZjAwO1xufVxuXG4qIHtcbiAgYm9yZGVyLWNvbG9yOiBoc2wodmFyKC0tYm9yZGVyKSk7XG59XG5cbmh0bWwsXG5ib2R5LFxuI3Jvb3Qge1xuICBiYWNrZ3JvdW5kOiAjMDUwNTA1O1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiSmV0QnJhaW5zIE1vbm9cIiwgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2RmZmYwMDtcbiAgY29sb3I6ICMwNTA1MDU7XG59XG5cbi5mb250LWRpc3BsYXkge1xuICBmb250LWZhbWlseTogXCJVbmJvdW5kZWRcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cbi5mb250LW1vbm8ge1xuICBmb250LWZhbWlseTogXCJKZXRCcmFpbnMgTW9ub1wiLCB1aS1tb25vc3BhY2UsIG1vbm9zcGFjZTtcbn1cblxuLmJnLWdyaWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ4cHggNDhweDtcbn1cbi5iZy1ncmlkLWZhZGUge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICBlbGxpcHNlIDgwJSA2MCUgYXQgNTAlIDMwJSxcbiAgICAjMDAwIDQwJSxcbiAgICB0cmFuc3BhcmVudCA4MCVcbiAgKTtcbiAgbWFzay1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgIGVsbGlwc2UgODAlIDYwJSBhdCA1MCUgMzAlLFxuICAgICMwMDAgNDAlLFxuICAgIHRyYW5zcGFyZW50IDgwJVxuICApO1xufVxuXG4udGVybWluYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGVybWluYWwtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZDogIzBkMGQwZDtcbn1cbi50ZXJtaW5hbC1kb3Qge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogIzJhMmEyYTtcbn1cblxuLmNvcm5lcnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29ybmVyczo6YmVmb3JlLFxuLmNvcm5lcnM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZmZjAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jb3JuZXJzOjpiZWZvcmUge1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5jb3JuZXJzOjphZnRlciB7XG4gIGJvdHRvbTogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOlxuICAgIHRyYW5zZm9ybSAwLjE1cyBlYXNlLFxuICAgIGJveC1zaGFkb3cgMC4xNXMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UsXG4gICAgY29sb3IgMC4xNXMgZWFzZSxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbn1cbi5idG4tYmxvY2s6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAwIDAgI2RmZmYwMDtcbn1cbi5idG4tYmxvY2s6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgI2RmZmYwMDtcbn1cblxuLm1hcnF1ZWUtbWFzayB7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHRyYW5zcGFyZW50LFxuICAgICMwMDAgMTAlLFxuICAgICMwMDAgOTAlLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICB0cmFuc3BhcmVudCxcbiAgICAjMDAwIDEwJSxcbiAgICAjMDAwIDkwJSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzBhMGEwYTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYTJhMmE7XG59XG5cbi5saW5rLXVuZGVybGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5saW5rLXVuZGVybGluZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBib3R0b206IC0zcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTtcbn1cbi5saW5rLXVuZGVybGluZTpob3Zlcjo6YWZ0ZXIge1xuICByaWdodDogMDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\r
    </style>\r
    <style type="text/css">\r
      [data-sonner-toaster][dir="ltr"],\r
      html[dir="ltr"] {\r
        --toast-icon-margin-start: -3px;\r
        --toast-icon-margin-end: 4px;\r
        --toast-svg-margin-start: -1px;\r
        --toast-svg-margin-end: 0px;\r
        --toast-button-margin-start: auto;\r
        --toast-button-margin-end: 0;\r
        --toast-close-button-start: 0;\r
        --toast-close-button-end: unset;\r
        --toast-close-button-transform: translate(-35%, -35%);\r
      }\r
      [data-sonner-toaster][dir="rtl"],\r
      html[dir="rtl"] {\r
        --toast-icon-margin-start: 4px;\r
        --toast-icon-margin-end: -3px;\r
        --toast-svg-margin-start: 0px;\r
        --toast-svg-margin-end: -1px;\r
        --toast-button-margin-start: 0;\r
        --toast-button-margin-end: auto;\r
        --toast-close-button-start: unset;\r
        --toast-close-button-end: 0;\r
        --toast-close-button-transform: translate(35%, -35%);\r
      }\r
      [data-sonner-toaster] {\r
        position: fixed;\r
        width: var(--width);\r
        font-family:\r
          ui-sans-serif,\r
          system-ui,\r
          -apple-system,\r
          BlinkMacSystemFont,\r
          Segoe UI,\r
          Roboto,\r
          Helvetica Neue,\r
          Arial,\r
          Noto Sans,\r
          sans-serif,\r
          Apple Color Emoji,\r
          Segoe UI Emoji,\r
          Segoe UI Symbol,\r
          Noto Color Emoji;\r
        --gray1: hsl(0, 0%, 99%);\r
        --gray2: hsl(0, 0%, 97.3%);\r
        --gray3: hsl(0, 0%, 95.1%);\r
        --gray4: hsl(0, 0%, 93%);\r
        --gray5: hsl(0, 0%, 90.9%);\r
        --gray6: hsl(0, 0%, 88.7%);\r
        --gray7: hsl(0, 0%, 85.8%);\r
        --gray8: hsl(0, 0%, 78%);\r
        --gray9: hsl(0, 0%, 56.1%);\r
        --gray10: hsl(0, 0%, 52.3%);\r
        --gray11: hsl(0, 0%, 43.5%);\r
        --gray12: hsl(0, 0%, 9%);\r
        --border-radius: 8px;\r
        box-sizing: border-box;\r
        padding: 0;\r
        margin: 0;\r
        list-style: none;\r
        outline: 0;\r
        z-index: 999999999;\r
        transition: transform 0.4s ease;\r
      }\r
      [data-sonner-toaster][data-lifted="true"] {\r
        transform: translateY(-8px);\r
      }\r
      @media (hover: none) and (pointer: coarse) {\r
        [data-sonner-toaster][data-lifted="true"] {\r
          transform: none;\r
        }\r
      }\r
      [data-sonner-toaster][data-x-position="right"] {\r
        right: var(--offset-right);\r
      }\r
      [data-sonner-toaster][data-x-position="left"] {\r
        left: var(--offset-left);\r
      }\r
      [data-sonner-toaster][data-x-position="center"] {\r
        left: 50%;\r
        transform: translateX(-50%);\r
      }\r
      [data-sonner-toaster][data-y-position="top"] {\r
        top: var(--offset-top);\r
      }\r
      [data-sonner-toaster][data-y-position="bottom"] {\r
        bottom: var(--offset-bottom);\r
      }\r
      [data-sonner-toast] {\r
        --y: translateY(100%);\r
        --lift-amount: calc(var(--lift) * var(--gap));\r
        z-index: var(--z-index);\r
        position: absolute;\r
        opacity: 0;\r
        transform: var(--y);\r
        touch-action: none;\r
        transition:\r
          transform 0.4s,\r
          opacity 0.4s,\r
          height 0.4s,\r
          box-shadow 0.2s;\r
        box-sizing: border-box;\r
        outline: 0;\r
        overflow-wrap: anywhere;\r
      }\r
      [data-sonner-toast][data-styled="true"] {\r
        padding: 16px;\r
        background: var(--normal-bg);\r
        border: 1px solid var(--normal-border);\r
        color: var(--normal-text);\r
        border-radius: var(--border-radius);\r
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\r
        width: var(--width);\r
        font-size: 13px;\r
        display: flex;\r
        align-items: center;\r
        gap: 6px;\r
      }\r
      [data-sonner-toast]:focus-visible {\r
        box-shadow:\r
          0 4px 12px rgba(0, 0, 0, 0.1),\r
          0 0 0 2px rgba(0, 0, 0, 0.2);\r
      }\r
      [data-sonner-toast][data-y-position="top"] {\r
        top: 0;\r
        --y: translateY(-100%);\r
        --lift: 1;\r
        --lift-amount: calc(1 * var(--gap));\r
      }\r
      [data-sonner-toast][data-y-position="bottom"] {\r
        bottom: 0;\r
        --y: translateY(100%);\r
        --lift: -1;\r
        --lift-amount: calc(var(--lift) * var(--gap));\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-description] {\r
        font-weight: 400;\r
        line-height: 1.4;\r
        color: #3f3f3f;\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-styled="true"]\r
        [data-description] {\r
        color: inherit;\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"] [data-description] {\r
        color: #e8e8e8;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-title] {\r
        font-weight: 500;\r
        line-height: 1.5;\r
        color: inherit;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] {\r
        display: flex;\r
        height: 16px;\r
        width: 16px;\r
        position: relative;\r
        justify-content: flex-start;\r
        align-items: center;\r
        flex-shrink: 0;\r
        margin-left: var(--toast-icon-margin-start);\r
        margin-right: var(--toast-icon-margin-end);\r
      }\r
      [data-sonner-toast][data-promise="true"] [data-icon] > svg {\r
        opacity: 0;\r
        transform: scale(0.8);\r
        transform-origin: center;\r
        animation: sonner-fade-in 0.3s ease forwards;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] > * {\r
        flex-shrink: 0;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-icon] svg {\r
        margin-left: var(--toast-svg-margin-start);\r
        margin-right: var(--toast-svg-margin-end);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-content] {\r
        display: flex;\r
        flex-direction: column;\r
        gap: 2px;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button] {\r
        border-radius: 4px;\r
        padding-left: 8px;\r
        padding-right: 8px;\r
        height: 24px;\r
        font-size: 12px;\r
        color: var(--normal-bg);\r
        background: var(--normal-text);\r
        margin-left: var(--toast-button-margin-start);\r
        margin-right: var(--toast-button-margin-end);\r
        border: none;\r
        font-weight: 500;\r
        cursor: pointer;\r
        outline: 0;\r
        display: flex;\r
        align-items: center;\r
        flex-shrink: 0;\r
        transition:\r
          opacity 0.4s,\r
          box-shadow 0.2s;\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button]:focus-visible {\r
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-button]:first-of-type {\r
        margin-left: var(--toast-button-margin-start);\r
        margin-right: var(--toast-button-margin-end);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-cancel] {\r
        color: var(--normal-text);\r
        background: rgba(0, 0, 0, 0.08);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast][data-styled="true"]\r
        [data-cancel] {\r
        background: rgba(255, 255, 255, 0.3);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-close-button] {\r
        position: absolute;\r
        left: var(--toast-close-button-start);\r
        right: var(--toast-close-button-end);\r
        top: 0;\r
        height: 20px;\r
        width: 20px;\r
        display: flex;\r
        justify-content: center;\r
        align-items: center;\r
        padding: 0;\r
        color: var(--gray12);\r
        background: var(--normal-bg);\r
        border: 1px solid var(--gray4);\r
        transform: var(--toast-close-button-transform);\r
        border-radius: 50%;\r
        cursor: pointer;\r
        z-index: 1;\r
        transition:\r
          opacity 0.1s,\r
          background 0.2s,\r
          border-color 0.2s;\r
      }\r
      [data-sonner-toast][data-styled="true"]\r
        [data-close-button]:focus-visible {\r
        box-shadow:\r
          0 4px 12px rgba(0, 0, 0, 0.1),\r
          0 0 0 2px rgba(0, 0, 0, 0.2);\r
      }\r
      [data-sonner-toast][data-styled="true"] [data-disabled="true"] {\r
        cursor: not-allowed;\r
      }\r
      [data-sonner-toast][data-styled="true"]:hover [data-close-button]:hover {\r
        background: var(--gray2);\r
        border-color: var(--gray5);\r
      }\r
      [data-sonner-toast][data-swiping="true"]::before {\r
        content: "";\r
        position: absolute;\r
        left: -100%;\r
        right: -100%;\r
        height: 100%;\r
        z-index: -1;\r
      }\r
      [data-sonner-toast][data-y-position="top"][data-swiping="true"]::before {\r
        bottom: 50%;\r
        transform: scaleY(3) translateY(50%);\r
      }\r
      [data-sonner-toast][data-y-position="bottom"][data-swiping="true"]::before {\r
        top: 50%;\r
        transform: scaleY(3) translateY(-50%);\r
      }\r
      [data-sonner-toast][data-swiping="false"][data-removed="true"]::before {\r
        content: "";\r
        position: absolute;\r
        inset: 0;\r
        transform: scaleY(2);\r
      }\r
      [data-sonner-toast][data-expanded="true"]::after {\r
        content: "";\r
        position: absolute;\r
        left: 0;\r
        height: calc(var(--gap) + 1px);\r
        bottom: 100%;\r
        width: 100%;\r
      }\r
      [data-sonner-toast][data-mounted="true"] {\r
        --y: translateY(0);\r
        opacity: 1;\r
      }\r
      [data-sonner-toast][data-expanded="false"][data-front="false"] {\r
        --scale: var(--toasts-before) * 0.05 + 1;\r
        --y: translateY(calc(var(--lift-amount) * var(--toasts-before)))\r
          scale(calc(-1 * var(--scale)));\r
        height: var(--front-toast-height);\r
      }\r
      [data-sonner-toast] > * {\r
        transition: opacity 0.4s;\r
      }\r
      [data-sonner-toast][data-x-position="right"] {\r
        right: 0;\r
      }\r
      [data-sonner-toast][data-x-position="left"] {\r
        left: 0;\r
      }\r
      [data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"]\r
        > * {\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-visible="false"] {\r
        opacity: 0;\r
        pointer-events: none;\r
      }\r
      [data-sonner-toast][data-mounted="true"][data-expanded="true"] {\r
        --y: translateY(calc(var(--lift) * var(--offset)));\r
        height: var(--initial-height);\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"] {\r
        --y: translateY(calc(var(--lift) * -100%));\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"] {\r
        --y: translateY(\r
          calc(var(--lift) * var(--offset) + var(--lift) * -100%)\r
        );\r
        opacity: 0;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"] {\r
        --y: translateY(40%);\r
        opacity: 0;\r
        transition:\r
          transform 0.5s,\r
          opacity 0.2s;\r
      }\r
      [data-sonner-toast][data-removed="true"][data-front="false"]::before {\r
        height: calc(var(--initial-height) + 20%);\r
      }\r
      [data-sonner-toast][data-swiping="true"] {\r
        transform: var(--y) translateY(var(--swipe-amount-y, 0))\r
          translateX(var(--swipe-amount-x, 0));\r
        transition: none;\r
      }\r
      [data-sonner-toast][data-swiped="true"] {\r
        user-select: none;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-y-position="bottom"],\r
      [data-sonner-toast][data-swipe-out="true"][data-y-position="top"] {\r
        animation-duration: 0.2s;\r
        animation-timing-function: ease-out;\r
        animation-fill-mode: forwards;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="left"] {\r
        animation-name: swipe-out-left;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="right"] {\r
        animation-name: swipe-out-right;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="up"] {\r
        animation-name: swipe-out-up;\r
      }\r
      [data-sonner-toast][data-swipe-out="true"][data-swipe-direction="down"] {\r
        animation-name: swipe-out-down;\r
      }\r
      @keyframes swipe-out-left {\r
        from {\r
          transform: var(--y) translateX(var(--swipe-amount-x));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateX(calc(var(--swipe-amount-x) - 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-right {\r
        from {\r
          transform: var(--y) translateX(var(--swipe-amount-x));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateX(calc(var(--swipe-amount-x) + 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-up {\r
        from {\r
          transform: var(--y) translateY(var(--swipe-amount-y));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateY(calc(var(--swipe-amount-y) - 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @keyframes swipe-out-down {\r
        from {\r
          transform: var(--y) translateY(var(--swipe-amount-y));\r
          opacity: 1;\r
        }\r
        to {\r
          transform: var(--y) translateY(calc(var(--swipe-amount-y) + 100%));\r
          opacity: 0;\r
        }\r
      }\r
      @media (max-width: 600px) {\r
        [data-sonner-toaster] {\r
          position: fixed;\r
          right: var(--mobile-offset-right);\r
          left: var(--mobile-offset-left);\r
          width: 100%;\r
        }\r
        [data-sonner-toaster][dir="rtl"] {\r
          left: calc(var(--mobile-offset-left) * -1);\r
        }\r
        [data-sonner-toaster] [data-sonner-toast] {\r
          left: 0;\r
          right: 0;\r
          width: calc(100% - var(--mobile-offset-left) * 2);\r
        }\r
        [data-sonner-toaster][data-x-position="left"] {\r
          left: var(--mobile-offset-left);\r
        }\r
        [data-sonner-toaster][data-y-position="bottom"] {\r
          bottom: var(--mobile-offset-bottom);\r
        }\r
        [data-sonner-toaster][data-y-position="top"] {\r
          top: var(--mobile-offset-top);\r
        }\r
        [data-sonner-toaster][data-x-position="center"] {\r
          left: var(--mobile-offset-left);\r
          right: var(--mobile-offset-right);\r
          transform: none;\r
        }\r
      }\r
      [data-sonner-toaster][data-sonner-theme="light"] {\r
        --normal-bg: #fff;\r
        --normal-border: var(--gray4);\r
        --normal-text: var(--gray12);\r
        --success-bg: hsl(143, 85%, 96%);\r
        --success-border: hsl(145, 92%, 87%);\r
        --success-text: hsl(140, 100%, 27%);\r
        --info-bg: hsl(208, 100%, 97%);\r
        --info-border: hsl(221, 91%, 93%);\r
        --info-text: hsl(210, 92%, 45%);\r
        --warning-bg: hsl(49, 100%, 97%);\r
        --warning-border: hsl(49, 91%, 84%);\r
        --warning-text: hsl(31, 92%, 45%);\r
        --error-bg: hsl(359, 100%, 97%);\r
        --error-border: hsl(359, 100%, 94%);\r
        --error-text: hsl(360, 100%, 45%);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="light"]\r
        [data-sonner-toast][data-invert="true"] {\r
        --normal-bg: #000;\r
        --normal-border: hsl(0, 0%, 20%);\r
        --normal-text: var(--gray1);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast][data-invert="true"] {\r
        --normal-bg: #fff;\r
        --normal-border: var(--gray3);\r
        --normal-text: var(--gray12);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"] {\r
        --normal-bg: #000;\r
        --normal-bg-hover: hsl(0, 0%, 12%);\r
        --normal-border: hsl(0, 0%, 20%);\r
        --normal-border-hover: hsl(0, 0%, 25%);\r
        --normal-text: var(--gray1);\r
        --success-bg: hsl(150, 100%, 6%);\r
        --success-border: hsl(147, 100%, 12%);\r
        --success-text: hsl(150, 86%, 65%);\r
        --info-bg: hsl(215, 100%, 6%);\r
        --info-border: hsl(223, 43%, 17%);\r
        --info-text: hsl(216, 87%, 65%);\r
        --warning-bg: hsl(64, 100%, 6%);\r
        --warning-border: hsl(60, 100%, 9%);\r
        --warning-text: hsl(46, 87%, 65%);\r
        --error-bg: hsl(358, 76%, 10%);\r
        --error-border: hsl(357, 89%, 16%);\r
        --error-text: hsl(358, 100%, 81%);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast]\r
        [data-close-button] {\r
        background: var(--normal-bg);\r
        border-color: var(--normal-border);\r
        color: var(--normal-text);\r
      }\r
      [data-sonner-toaster][data-sonner-theme="dark"]\r
        [data-sonner-toast]\r
        [data-close-button]:hover {\r
        background: var(--normal-bg-hover);\r
        border-color: var(--normal-border-hover);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="success"] {\r
        background: var(--success-bg);\r
        border-color: var(--success-border);\r
        color: var(--success-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="success"]\r
        [data-close-button] {\r
        background: var(--success-bg);\r
        border-color: var(--success-border);\r
        color: var(--success-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="info"] {\r
        background: var(--info-bg);\r
        border-color: var(--info-border);\r
        color: var(--info-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="info"]\r
        [data-close-button] {\r
        background: var(--info-bg);\r
        border-color: var(--info-border);\r
        color: var(--info-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="warning"] {\r
        background: var(--warning-bg);\r
        border-color: var(--warning-border);\r
        color: var(--warning-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="warning"]\r
        [data-close-button] {\r
        background: var(--warning-bg);\r
        border-color: var(--warning-border);\r
        color: var(--warning-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="error"] {\r
        background: var(--error-bg);\r
        border-color: var(--error-border);\r
        color: var(--error-text);\r
      }\r
      [data-rich-colors="true"][data-sonner-toast][data-type="error"]\r
        [data-close-button] {\r
        background: var(--error-bg);\r
        border-color: var(--error-border);\r
        color: var(--error-text);\r
      }\r
      .sonner-loading-wrapper {\r
        --size: 16px;\r
        height: var(--size);\r
        width: var(--size);\r
        position: absolute;\r
        inset: 0;\r
        z-index: 10;\r
      }\r
      .sonner-loading-wrapper[data-visible="false"] {\r
        transform-origin: center;\r
        animation: sonner-fade-out 0.2s ease forwards;\r
      }\r
      .sonner-spinner {\r
        position: relative;\r
        top: 50%;\r
        left: 50%;\r
        height: var(--size);\r
        width: var(--size);\r
      }\r
      .sonner-loading-bar {\r
        animation: sonner-spin 1.2s linear infinite;\r
        background: var(--gray11);\r
        border-radius: 6px;\r
        height: 8%;\r
        left: -10%;\r
        position: absolute;\r
        top: -3.9%;\r
        width: 24%;\r
      }\r
      .sonner-loading-bar:first-child {\r
        animation-delay: -1.2s;\r
        transform: rotate(0.0001deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(2) {\r
        animation-delay: -1.1s;\r
        transform: rotate(30deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(3) {\r
        animation-delay: -1s;\r
        transform: rotate(60deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(4) {\r
        animation-delay: -0.9s;\r
        transform: rotate(90deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(5) {\r
        animation-delay: -0.8s;\r
        transform: rotate(120deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(6) {\r
        animation-delay: -0.7s;\r
        transform: rotate(150deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(7) {\r
        animation-delay: -0.6s;\r
        transform: rotate(180deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(8) {\r
        animation-delay: -0.5s;\r
        transform: rotate(210deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(9) {\r
        animation-delay: -0.4s;\r
        transform: rotate(240deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(10) {\r
        animation-delay: -0.3s;\r
        transform: rotate(270deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(11) {\r
        animation-delay: -0.2s;\r
        transform: rotate(300deg) translate(146%);\r
      }\r
      .sonner-loading-bar:nth-child(12) {\r
        animation-delay: -0.1s;\r
        transform: rotate(330deg) translate(146%);\r
      }\r
      @keyframes sonner-fade-in {\r
        0% {\r
          opacity: 0;\r
          transform: scale(0.8);\r
        }\r
        100% {\r
          opacity: 1;\r
          transform: scale(1);\r
        }\r
      }\r
      @keyframes sonner-fade-out {\r
        0% {\r
          opacity: 1;\r
          transform: scale(1);\r
        }\r
        100% {\r
          opacity: 0;\r
          transform: scale(0.8);\r
        }\r
      }\r
      @keyframes sonner-spin {\r
        0% {\r
          opacity: 1;\r
        }\r
        100% {\r
          opacity: 0.15;\r
        }\r
      }\r
      @media (prefers-reduced-motion) {\r
        .sonner-loading-bar,\r
        [data-sonner-toast],\r
        [data-sonner-toast] > * {\r
          transition: none !important;\r
          animation: none !important;\r
        }\r
      }\r
      .sonner-loader {\r
        position: absolute;\r
        top: 50%;\r
        left: 50%;\r
        transform: translate(-50%, -50%);\r
        transform-origin: center;\r
        transition:\r
          opacity 0.2s,\r
          transform 0.2s;\r
      }\r
      .sonner-loader[data-visible="false"] {\r
        opacity: 0;\r
        transform: scale(0.8) translate(-50%, -50%);\r
      }\r
    </style>\r
    <style>\r
      .App {\r
        background: #050505;\r
        color: #fff;\r
        min-height: 100vh;\r
      }\r
\r
      /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwIHtcbiAgYmFja2dyb3VuZDogIzA1MDUwNTtcbiAgY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\r
    </style>\r
    <style type="text/css">\r
      .rfm-marquee-container {\r
        overflow-x: hidden;\r
        display: flex;\r
        flex-direction: row;\r
        position: relative;\r
        width: var(--width);\r
        transform: var(--transform);\r
      }\r
      .rfm-marquee-container:hover div {\r
        animation-play-state: var(--pause-on-hover);\r
      }\r
      .rfm-marquee-container:active div {\r
        animation-play-state: var(--pause-on-click);\r
      }\r
\r
      .rfm-overlay {\r
        position: absolute;\r
        width: 100%;\r
        height: 100%;\r
      }\r
      .rfm-overlay::before,\r
      .rfm-overlay::after {\r
        background: linear-gradient(\r
          to right,\r
          var(--gradient-color),\r
          rgba(255, 255, 255, 0)\r
        );\r
        content: "";\r
        height: 100%;\r
        position: absolute;\r
        width: var(--gradient-width);\r
        z-index: 2;\r
        pointer-events: none;\r
        touch-action: none;\r
      }\r
      .rfm-overlay::after {\r
        right: 0;\r
        top: 0;\r
        transform: rotateZ(180deg);\r
      }\r
      .rfm-overlay::before {\r
        left: 0;\r
        top: 0;\r
      }\r
\r
      .rfm-marquee {\r
        flex: 0 0 auto;\r
        min-width: var(--min-width);\r
        z-index: 1;\r
        display: flex;\r
        flex-direction: row;\r
        align-items: center;\r
        animation: scroll var(--duration) linear var(--delay)\r
          var(--iteration-count);\r
        animation-play-state: var(--play);\r
        animation-delay: var(--delay);\r
        animation-direction: var(--direction);\r
      }\r
      @keyframes scroll {\r
        0% {\r
          transform: translateX(0%);\r
        }\r
        100% {\r
          transform: translateX(-100%);\r
        }\r
      }\r
\r
      .rfm-initial-child-container {\r
        flex: 0 0 auto;\r
        display: flex;\r
        min-width: auto;\r
        flex-direction: row;\r
        align-items: center;\r
      }\r
\r
      .rfm-child {\r
        transform: var(--transform);\r
      }\r
    </style>\r
  </head>\r
  <body>\r
    <noscript>You need to enable JavaScript to run this app.</noscript>\r
    <div id="root">\r
      <div\r
        class="App"\r
        x-file-name="App"\r
        x-line-number="9"\r
        x-column="4"\r
        x-component="div"\r
        x-id="App_9_4"\r
        x-dynamic="false"\r
      >\r
        <main\r
          data-testid="home-page"\r
          class="relative min-h-screen overflow-hidden bg-[var(--bg)] text-white"\r
          x-file-name="Home"\r
          x-line-number="13"\r
          x-column="4"\r
          x-component="main"\r
          x-id="Home_13_4"\r
          x-dynamic="false"\r
        >\r
          <header\r
            data-testid="navbar"\r
            class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent"\r
            x-file-name="Navbar"\r
            x-line-number="24"\r
            x-column="4"\r
            x-component="header"\r
            x-id="Navbar_24_4"\r
            x-dynamic="false"\r
            style="opacity: 1; transform: none"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16"\r
              x-file-name="Navbar"\r
              x-line-number="35"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Navbar_35_6"\r
              x-dynamic="false"\r
            >\r
              <button\r
                data-testid="navbar-logo"\r
                class="font-display font-black text-lg tracking-tight uppercase hover:text-[var(--accent)] transition-colors"\r
                x-file-name="Navbar"\r
                x-line-number="36"\r
                x-column="8"\r
                x-component="button"\r
                x-id="Navbar_36_8"\r
                x-dynamic="false"\r
              >\r
                MJ<span\r
                  class="text-[var(--accent)]"\r
                  x-file-name="Navbar"\r
                  x-line-number="41"\r
                  x-column="12"\r
                  x-component="span"\r
                  x-id="Navbar_41_12"\r
                  x-dynamic="false"\r
                  >.</span\r
                >\r
              </button>\r
              <nav\r
                class="hidden md:flex items-center gap-8"\r
                x-file-name="Navbar"\r
                x-line-number="44"\r
                x-column="8"\r
                x-component="nav"\r
                x-id="Navbar_44_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <button\r
                  data-testid="nav-link-about"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  About</button\r
                ><button\r
                  data-testid="nav-link-skills"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Skills</button\r
                ><button\r
                  data-testid="nav-link-experience"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Experience</button\r
                ><button\r
                  data-testid="nav-link-projects"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Projects</button\r
                ><button\r
                  data-testid="nav-link-contact"\r
                  class="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[var(--accent)] link-underline transition-colors"\r
                  x-file-name="Navbar"\r
                  x-line-number="46"\r
                  x-column="12"\r
                  x-component="button"\r
                  x-id="Navbar_46_12"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="navLinks"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="211"\r
                  x-source-path="label"\r
                  x-source-editable="true"\r
                  x-array-var="navLinks"\r
                  x-array-file="@/data/resumeData"\r
                  x-array-line="211"\r
                  x-array-item-param="l"\r
                >\r
                  Contact</button\r
                ><a\r
                  data-testid="navbar-resume-btn"\r
                  href="/Manmohan_Jangra_Resume.pdf"\r
                  download=""\r
                  class="btn-block inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em] hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)]"\r
                  x-file-name="Navbar"\r
                  x-line-number="55"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Navbar_55_10"\r
                  x-dynamic="false"\r
                  ><svg\r
                    xmlns="http://www.w3.org/2000/svg"\r
                    width="24"\r
                    height="24"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                    stroke-linecap="round"\r
                    stroke-linejoin="round"\r
                    class="lucide lucide-download w-3.5 h-3.5"\r
                    aria-hidden="true"\r
                    x-file-name="Navbar"\r
                    x-line-number="61"\r
                    x-column="12"\r
                    x-component="Download"\r
                    x-id="Navbar_61_12"\r
                    x-dynamic="false"\r
                  >\r
                    <path d="M12 15V3"></path>\r
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                    <path d="m7 10 5 5 5-5"></path></svg\r
                  >Resume</a\r
                >\r
              </nav>\r
              <button\r
                data-testid="navbar-mobile-toggle"\r
                class="md:hidden text-white"\r
                aria-label="Toggle menu"\r
                x-file-name="Navbar"\r
                x-line-number="66"\r
                x-column="8"\r
                x-component="button"\r
                x-id="Navbar_66_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  width="24"\r
                  height="24"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                  class="lucide lucide-menu w-5 h-5"\r
                  aria-hidden="true"\r
                >\r
                  <path d="M4 12h16"></path>\r
                  <path d="M4 18h16"></path>\r
                  <path d="M4 6h16"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </header>\r
          <section\r
            id="hero"\r
            data-testid="hero-section"\r
            class="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden"\r
            x-file-name="Hero"\r
            x-line-number="7"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Hero_7_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="absolute inset-0 bg-grid bg-grid-fade opacity-60 pointer-events-none"\r
              x-file-name="Hero"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_13_6"\r
              x-dynamic="false"\r
            ></div>\r
            <div\r
              class="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl pointer-events-none"\r
              x-file-name="Hero"\r
              x-line-number="14"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_14_6"\r
              x-dynamic="false"\r
            ></div>\r
            <div\r
              class="relative max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Hero"\r
              x-line-number="16"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Hero_16_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500 mb-10"\r
                x-file-name="Hero"\r
                x-line-number="18"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_18_8"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <span\r
                  class="relative flex h-2 w-2"\r
                  x-file-name="Hero"\r
                  x-line-number="24"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Hero_24_10"\r
                  x-dynamic="false"\r
                  ><span\r
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"\r
                    x-file-name="Hero"\r
                    x-line-number="25"\r
                    x-column="12"\r
                    x-component="span"\r
                    x-id="Hero_25_12"\r
                    x-dynamic="false"\r
                  ></span\r
                  ><span\r
                    class="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"\r
                    x-file-name="Hero"\r
                    x-line-number="26"\r
                    x-column="12"\r
                    x-component="span"\r
                    x-id="Hero_26_12"\r
                    x-dynamic="false"\r
                  ></span></span\r
                ><span\r
                  data-testid="hero-availability"\r
                  x-file-name="Hero"\r
                  x-line-number="28"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Hero_28_10"\r
                  x-dynamic="false"\r
                  >Open to senior frontend roles · Remote / Hybrid</span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6"\r
                x-file-name="Hero"\r
                x-line-number="33"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_33_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-2 flex md:flex-col gap-4 md:gap-8 order-2 md:order-1"\r
                  x-file-name="Hero"\r
                  x-line-number="35"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_35_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="36"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_36_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="text-zinc-600"\r
                      x-file-name="Hero"\r
                      x-line-number="37"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_37_14"\r
                      x-dynamic="false"\r
                    >\r
                      // role\r
                    </div>\r
                    <div\r
                      class="text-zinc-300 mt-1"\r
                      x-file-name="Hero"\r
                      x-line-number="38"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_38_14"\r
                      x-dynamic="false"\r
                    >\r
                      Frontend\r
                    </div>\r
                    <div\r
                      class="text-zinc-300"\r
                      x-file-name="Hero"\r
                      x-line-number="39"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_39_14"\r
                      x-dynamic="false"\r
                    >\r
                      Engineer\r
                    </div>\r
                  </div>\r
                  <div\r
                    class="text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="41"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_41_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="text-zinc-600"\r
                      x-file-name="Hero"\r
                      x-line-number="42"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_42_14"\r
                      x-dynamic="false"\r
                    >\r
                      // based\r
                    </div>\r
                    <div\r
                      class="text-zinc-300 mt-1"\r
                      x-file-name="Hero"\r
                      x-line-number="43"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_43_14"\r
                      x-dynamic="false"\r
                    >\r
                      India · Remote\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-8 order-1 md:order-2"\r
                  x-file-name="Hero"\r
                  x-line-number="48"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_48_10"\r
                  x-dynamic="false"\r
                >\r
                  <h1\r
                    class="font-display font-black uppercase leading-[0.88] tracking-tighter text-[2.5rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl break-words"\r
                    data-testid="hero-name"\r
                    x-file-name="Hero"\r
                    x-line-number="49"\r
                    x-column="12"\r
                    x-component="h1"\r
                    x-id="Hero_49_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    MAN<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="56"\r
                      x-column="17"\r
                      x-component="span"\r
                      x-id="Hero_56_17"\r
                      x-dynamic="false"\r
                      >/</span\r
                    >MOHAN<br\r
                      x-file-name="Hero"\r
                      x-line-number="57"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Hero_57_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-zinc-500"\r
                      x-file-name="Hero"\r
                      x-line-number="58"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Hero_58_14"\r
                      x-dynamic="false"\r
                      >JANG</span\r
                    >RA<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="58"\r
                      x-column="59"\r
                      x-component="span"\r
                      x-id="Hero_58_59"\r
                      x-dynamic="false"\r
                      >.</span\r
                    >\r
                  </h1>\r
                  <p\r
                    class="mt-8 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed"\r
                    data-testid="hero-tagline"\r
                    x-file-name="Hero"\r
                    x-line-number="61"\r
                    x-column="12"\r
                    x-component="p"\r
                    x-id="Hero_61_12"\r
                    x-dynamic="true"\r
                    x-source-type="unknown"\r
                    x-source-editable="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="68"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Hero_68_14"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                      >&gt;</span\r
                    ><span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="Hero"\r
                      x-line-number="61"\r
                      x-column="12"\r
                      x-component="p"\r
                      x-id="Hero_61_12_expr2"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                    >\r
                    </span\r
                    ><span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="Hero"\r
                      x-line-number="61"\r
                      x-column="12"\r
                      x-component="p"\r
                      x-id="Hero_61_12_expr4"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="personal"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="3"\r
                      x-source-path="tagline"\r
                      x-source-editable="true"\r
                      style="display: contents"\r
                      >Building high-performance React systems with an\r
                      AI-assisted, performance-first mindset.</span\r
                    >\r
                    I ship React systems that load fast, scale cleanly, and ship\r
                    sooner than you expected.\r
                  </p>\r
                  <div\r
                    class="mt-10 flex flex-wrap gap-4"\r
                    x-file-name="Hero"\r
                    x-line-number="73"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_73_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <a\r
                      data-testid="hero-resume-btn"\r
                      href="/Manmohan_Jangra_Resume.pdf"\r
                      download=""\r
                      class="btn-block inline-flex items-center gap-2 bg-[var(--accent)] text-black px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold"\r
                      x-file-name="Hero"\r
                      x-line-number="79"\r
                      x-column="14"\r
                      x-component="a"\r
                      x-id="Hero_79_14"\r
                      x-dynamic="false"\r
                      ><svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-download w-4 h-4"\r
                        aria-hidden="true"\r
                        x-file-name="Hero"\r
                        x-line-number="85"\r
                        x-column="16"\r
                        x-component="Download"\r
                        x-id="Hero_85_16"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M12 15V3"></path>\r
                        <path\r
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"\r
                        ></path>\r
                        <path d="m7 10 5 5 5-5"></path></svg\r
                      >Download Resume</a\r
                    ><button\r
                      data-testid="hero-contact-btn"\r
                      class="btn-block inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)]"\r
                      x-file-name="Hero"\r
                      x-line-number="88"\r
                      x-column="14"\r
                      x-component="button"\r
                      x-id="Hero_88_14"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-mail w-4 h-4"\r
                        aria-hidden="true"\r
                        x-file-name="Hero"\r
                        x-line-number="97"\r
                        x-column="16"\r
                        x-component="Mail"\r
                        x-id="Hero_97_16"\r
                        x-dynamic="false"\r
                      >\r
                        <path\r
                          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"\r
                        ></path>\r
                        <rect\r
                          x="2"\r
                          y="4"\r
                          width="20"\r
                          height="16"\r
                          rx="2"\r
                        ></rect></svg\r
                      >Get in touch\r
                    </button>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-2 order-3"\r
                  x-file-name="Hero"\r
                  x-line-number="104"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Hero_104_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="terminal corners w-full"\r
                    x-file-name="Hero"\r
                    x-line-number="105"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Hero_105_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="terminal-bar"\r
                      x-file-name="Hero"\r
                      x-line-number="111"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Hero_111_14"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="112"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_112_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="113"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_113_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Hero"\r
                        x-line-number="114"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_114_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="ml-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500"\r
                        x-file-name="Hero"\r
                        x-line-number="115"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Hero_115_16"\r
                        x-dynamic="false"\r
                        >manmohan.sh</span\r
                      >\r
                    </div>\r
                    <pre\r
                      class="p-4 text-[11px] leading-relaxed font-mono text-zinc-400"\r
                      x-file-name="Hero"\r
                      x-line-number="119"\r
                      x-column="14"\r
                      x-component="pre"\r
                      x-id="Hero_119_14"\r
                      x-dynamic="true"\r
                      x-source-type="unknown"\r
                      x-source-editable="false"\r
                    ><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="120" x-column="16" x-component="span" x-id="Hero_120_16" x-dynamic="false">$</span> whoami<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr3" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>manmohan<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr5" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="122" x-column="22" x-component="span" x-id="Hero_122_22" x-dynamic="false">$</span> ls skills/<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr8" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>react redux<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr10" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span>ts node ai<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr12" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="125" x-column="22" x-component="span" x-id="Hero_125_22" x-dynamic="false">$</span> uptime<span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr15" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-white" x-file-name="Hero" x-line-number="126" x-column="22" x-component="span" x-id="Hero_126_22" x-dynamic="false">5y 200d</span><span data-ve-dynamic="true" x-excluded="true" x-file-name="Hero" x-line-number="119" x-column="14" x-component="pre" x-id="Hero_119_14_expr18" x-dynamic="true" x-source-type="unknown" x-source-editable="false" style="display: contents;">\r
</span><span class="text-[var(--accent)]" x-file-name="Hero" x-line-number="127" x-column="22" x-component="span" x-id="Hero_127_22" x-dynamic="false">$</span> _</pre>\r
                  </div>\r
                </div>\r
              </div>\r
              <div\r
                class="mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/10"\r
                x-file-name="Hero"\r
                x-line-number="134"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_134_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  data-testid="hero-stat-0"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-b md:border-b-0 border-white/10 border-r border-white/10 md:border-r"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    5+\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    yrs shipping React\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-1"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-b md:border-b-0 border-white/10"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    30%\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    load-time gain\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-2"\r
                  class="p-6 md:p-8 md:border-r border-white/10 border-r border-white/10 md:border-r"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    &lt;200ms\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    update latency\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="hero-stat-3"\r
                  class="p-6 md:p-8"\r
                  x-file-name="Hero"\r
                  x-line-number="141"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Hero_141_12"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="font-display font-black text-3xl md:text-4xl text-white"\r
                    x-file-name="Hero"\r
                    x-line-number="150"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_150_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="value"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    8+\r
                  </div>\r
                  <div\r
                    class="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                    x-file-name="Hero"\r
                    x-line-number="153"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Hero_153_14"\r
                    x-dynamic="true"\r
                    x-source-type="static-imported"\r
                    x-source-var="stats"\r
                    x-source-file="@/data/resumeData"\r
                    x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                    x-source-line="16"\r
                    x-source-path="label"\r
                    x-source-editable="true"\r
                    x-array-var="stats"\r
                    x-array-file="@/data/resumeData"\r
                    x-array-line="16"\r
                    x-array-item-param="s"\r
                  >\r
                    devs mentored\r
                  </div>\r
                </div>\r
              </div>\r
              <div\r
                class="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                x-file-name="Hero"\r
                x-line-number="160"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Hero_160_8"\r
                x-dynamic="false"\r
              >\r
                <svg\r
                  xmlns="http://www.w3.org/2000/svg"\r
                  width="24"\r
                  height="24"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                  class="lucide lucide-arrow-down-right w-4 h-4 text-[var(--accent)]"\r
                  aria-hidden="true"\r
                  x-file-name="Hero"\r
                  x-line-number="161"\r
                  x-column="10"\r
                  x-component="ArrowDownRight"\r
                  x-id="Hero_161_10"\r
                  x-dynamic="false"\r
                >\r
                  <path d="m7 7 10 10"></path>\r
                  <path d="M17 7v10H7"></path></svg\r
                >Scroll to explore\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="about"\r
            data-testid="about-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="About"\r
            x-line-number="10"\r
            x-column="4"\r
            x-component="section"\r
            x-id="About_10_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="About"\r
              x-line-number="15"\r
              x-column="6"\r
              x-component="div"\r
              x-id="About_15_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >01</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    ABOUT\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >01</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-8 mt-12"\r
                x-file-name="About"\r
                x-line-number="18"\r
                x-column="8"\r
                x-component="div"\r
                x-id="About_18_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-5"\r
                  x-file-name="About"\r
                  x-line-number="20"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="About_20_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative corners"\r
                    x-file-name="About"\r
                    x-line-number="27"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="About_27_12"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="aspect-[4/5] overflow-hidden border border-white/10 bg-[var(--surface)] relative"\r
                      x-file-name="About"\r
                      x-line-number="28"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="About_28_14"\r
                      x-dynamic="false"\r
                    >\r
                      <img\r
                        alt="Stylized portrait placeholder"\r
                        class="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"\r
                        x-file-name="About"\r
                        x-line-number="29"\r
                        x-column="16"\r
                        x-component="img"\r
                        x-id="About_29_16"\r
                        x-dynamic="false"\r
                        src="/manmohan_portfolio.png"\r
                      />\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"\r
                        x-file-name="About"\r
                        x-line-number="34"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="About_34_16"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute bottom-4 left-4 right-4 flex items-end justify-between"\r
                        x-file-name="About"\r
                        x-line-number="35"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="About_35_16"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          x-file-name="About"\r
                          x-line-number="36"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="About_36_18"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-400"\r
                            x-file-name="About"\r
                            x-line-number="37"\r
                            x-column="20"\r
                            x-component="div"\r
                            x-id="About_37_20"\r
                            x-dynamic="false"\r
                          >\r
                            // operator\r
                          </div>\r
                          <div\r
                            class="font-display font-bold text-lg mt-1"\r
                            x-file-name="About"\r
                            x-line-number="40"\r
                            x-column="20"\r
                            x-component="div"\r
                            x-id="About_40_20"\r
                            x-dynamic="false"\r
                          >\r
                            manmohan_jangra\r
                          </div>\r
                        </div>\r
                        <div\r
                          class="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]"\r
                          x-file-name="About"\r
                          x-line-number="44"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="About_44_18"\r
                          x-dynamic="false"\r
                        >\r
                          v5.0\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-7 md:pl-6"\r
                  x-file-name="About"\r
                  x-line-number="53"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="About_53_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <h3\r
                    class="font-display font-black text-3xl md:text-5xl uppercase leading-[0.95] tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="60"\r
                    x-column="12"\r
                    x-component="h3"\r
                    x-id="About_60_12"\r
                    x-dynamic="false"\r
                  >\r
                    I make the web feel<br\r
                      x-file-name="About"\r
                      x-line-number="62"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="About_62_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="About"\r
                      x-line-number="63"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="About_63_14"\r
                      x-dynamic="false"\r
                      >fast</span\r
                    >, on purpose.\r
                  </h3>\r
                  <div\r
                    class="mt-8 space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed"\r
                    x-file-name="About"\r
                    x-line-number="66"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="About_66_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <p\r
                      data-testid="about-paragraph-0"\r
                      x-file-name="About"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="p"\r
                      x-id="About_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="about"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="23"\r
                      x-source-editable="true"\r
                      x-array-var="about"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="23"\r
                      x-array-item-param="p"\r
                    >\r
                      I’m a frontend engineer who treats performance like a\r
                      feature. Five years in, I build React systems that load\r
                      fast, scale cleanly, and degrade gracefully —\r
                      micro-frontends, real-time dashboards, and component\r
                      libraries that other teams actually enjoy using.\r
                    </p>\r
                    <p\r
                      data-testid="about-paragraph-1"\r
                      x-file-name="About"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="p"\r
                      x-id="About_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="about"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="23"\r
                      x-source-editable="true"\r
                      x-array-var="about"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="23"\r
                      x-array-item-param="p"\r
                    >\r
                      Lately I’ve been wiring AI into the developer loop: RAG\r
                      pipelines, in-IDE copilots, and LangChain-backed\r
                      automations that quietly remove the boring 40%. I lead an\r
                      8-engineer pod, run requirements analysis for presales,\r
                      and still write the code I commit.\r
                    </p>\r
                  </div>\r
                  <ul\r
                    class="mt-8 space-y-3"\r
                    x-file-name="About"\r
                    x-line-number="74"\r
                    x-column="12"\r
                    x-component="ul"\r
                    x-id="About_74_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <li\r
                      data-testid="about-highlight-0"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Cut Core Web Vitals (LCP) by 30% across two B2B\r
                        platforms</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-1"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Built real-time dashboards rendering at &lt;200ms\r
                        update latency</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-2"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Led an 8+ developer pod across CRM + AI workflow\r
                        integrations</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="about-highlight-3"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="About"\r
                      x-line-number="76"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="About_76_16"\r
                      x-dynamic="false"\r
                    >\r
                      <svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-check w-4 h-4 text-[var(--accent)] mt-1 flex-shrink-0"\r
                        aria-hidden="true"\r
                      >\r
                        <path d="M20 6 9 17l-5-5"></path></svg\r
                      ><span\r
                        x-file-name="About"\r
                        x-line-number="82"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="About_82_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="about"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="23"\r
                        x-source-editable="true"\r
                        x-array-var="about"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="23"\r
                        x-array-item-param="h"\r
                        >Shipped a Webflow ↔ React hybrid architecture for\r
                        enterprise teams</span\r
                      >\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="skills"\r
            data-testid="skills-section"\r
            class="relative py-24 md:py-40 border-t border-white/10 overflow-hidden"\r
            x-file-name="Skills"\r
            x-line-number="21"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Skills_21_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="absolute inset-0 flex items-center pointer-events-none opacity-[0.06] marquee-mask"\r
              x-file-name="Skills"\r
              x-line-number="27"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Skills_27_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="rfm-marquee-container"\r
                style="\r
                  --pause-on-hover: running;\r
                  --pause-on-click: running;\r
                  --width: 100%;\r
                  --transform: none;\r
                "\r
              >\r
                <div\r
                  class="rfm-marquee"\r
                  style="\r
                    --play: running;\r
                    --direction: normal;\r
                    --duration: 458.99296875s;\r
                    --delay: 0s;\r
                    --iteration-count: infinite;\r
                    --min-width: 100%;\r
                  "\r
                >\r
                  <div class="rfm-initial-child-container">\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >REACT\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >TYPESCRIPT\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >PERFORMANCE\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >MICRO-FRONTENDS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >WEBSOCKETS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >RAG\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >LANGCHAIN\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >CORE WEB VITALS\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >VITE\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                    <div class="rfm-child" style="--transform: none">\r
                      <span\r
                        class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                        x-file-name="Skills"\r
                        x-line-number="30"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Skills_30_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="MARQUEE_WORDS"\r
                        x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                        x-source-line="6"\r
                        x-source-editable="true"\r
                        x-array-var="MARQUEE_WORDS"\r
                        x-array-line="6"\r
                        x-array-item-param="w"\r
                        >REDUX\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Skills"\r
                          x-line-number="34"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Skills_34_18"\r
                          x-dynamic="false"\r
                          >/</span\r
                        ></span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="rfm-marquee"\r
                  style="\r
                    --play: running;\r
                    --direction: normal;\r
                    --duration: 458.99296875s;\r
                    --delay: 0s;\r
                    --iteration-count: infinite;\r
                    --min-width: 100%;\r
                  "\r
                >\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >REACT\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >TYPESCRIPT\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >PERFORMANCE\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >MICRO-FRONTENDS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >WEBSOCKETS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >RAG\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >LANGCHAIN\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >CORE WEB VITALS\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >VITE\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                  <div class="rfm-child" style="--transform: none">\r
                    <span\r
                      class="font-display font-black uppercase text-[9rem] md:text-[14rem] tracking-tighter text-white mx-6"\r
                      x-file-name="Skills"\r
                      x-line-number="30"\r
                      x-column="12"\r
                      x-component="span"\r
                      x-id="Skills_30_12"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="MARQUEE_WORDS"\r
                      x-source-file-abs="/app/frontend/src/components/Skills.jsx"\r
                      x-source-line="6"\r
                      x-source-editable="true"\r
                      x-array-var="MARQUEE_WORDS"\r
                      x-array-line="6"\r
                      x-array-item-param="w"\r
                      >REDUX\r
                      <span\r
                        class="text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="34"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Skills_34_18"\r
                        x-dynamic="false"\r
                        >/</span\r
                      ></span\r
                    >\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div\r
              class="relative max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Skills"\r
              x-line-number="40"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Skills_40_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >02</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    SKILLS\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >02</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6 mt-12"\r
                x-file-name="Skills"\r
                x-line-number="43"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Skills_43_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <div\r
                  data-testid="skills-category-0"\r
                  class="col-span-12 md:col-span-4"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >1</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      Core\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-javascript-es6-"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >JavaScript (ES6+)</span\r
                      ><span\r
                        data-testid="skill-typescript"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >TypeScript</span\r
                      ><span\r
                        data-testid="skill-react"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >React</span\r
                      ><span\r
                        data-testid="skill-redux"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Redux</span\r
                      ><span\r
                        data-testid="skill-node-js"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Node.js</span\r
                      ><span\r
                        data-testid="skill-html5"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >HTML5</span\r
                      ><span\r
                        data-testid="skill-css3"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >CSS3</span\r
                      ><span\r
                        data-testid="skill-tailwind"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Tailwind</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="skills-category-1"\r
                  class="col-span-12 md:col-span-4 md:translate-y-8"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >2</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      Performance &amp; Architecture\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-micro-frontends"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Micro-frontends</span\r
                      ><span\r
                        data-testid="skill-websockets"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >WebSockets</span\r
                      ><span\r
                        data-testid="skill-code-splitting"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Code Splitting</span\r
                      ><span\r
                        data-testid="skill-core-web-vitals"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Core Web Vitals</span\r
                      ><span\r
                        data-testid="skill-ssr-csr"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >SSR / CSR</span\r
                      ><span\r
                        data-testid="skill-webpack"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Webpack</span\r
                      ><span\r
                        data-testid="skill-vite"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Vite</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="skills-category-2"\r
                  class="col-span-12 md:col-span-4"\r
                  x-file-name="Skills"\r
                  x-line-number="45"\r
                  x-column="12"\r
                  x-component="div"\r
                  x-id="Skills_45_12"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="relative border border-white/10 bg-[var(--surface)]/70 backdrop-blur-sm p-6 md:p-8 h-full corners"\r
                    x-file-name="Skills"\r
                    x-line-number="56"\r
                    x-column="14"\r
                    x-component="div"\r
                    x-id="Skills_56_14"\r
                    x-dynamic="false"\r
                  >\r
                    <div\r
                      class="flex items-baseline justify-between"\r
                      x-file-name="Skills"\r
                      x-line-number="57"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_57_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-zinc-500"\r
                        x-file-name="Skills"\r
                        x-line-number="58"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_58_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Skills"\r
                          x-line-number="58"\r
                          x-column="18"\r
                          x-component="div"\r
                          x-id="Skills_58_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >3</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Skills"\r
                        x-line-number="61"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Skills_61_18"\r
                        x-dynamic="false"\r
                      >\r
                        stack\r
                      </div>\r
                    </div>\r
                    <h3\r
                      class="mt-4 font-display font-black text-2xl uppercase tracking-tight"\r
                      x-file-name="Skills"\r
                      x-line-number="65"\r
                      x-column="16"\r
                      x-component="h3"\r
                      x-id="Skills_65_16"\r
                      x-dynamic="true"\r
                      x-source-type="static-imported"\r
                      x-source-var="skills"\r
                      x-source-file="@/data/resumeData"\r
                      x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                      x-source-line="36"\r
                      x-source-path="group"\r
                      x-source-editable="true"\r
                      x-array-var="skills"\r
                      x-array-file="@/data/resumeData"\r
                      x-array-line="36"\r
                      x-array-item-param="cat"\r
                    >\r
                      AI &amp; Tooling\r
                    </h3>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Skills"\r
                      x-line-number="68"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Skills_68_16"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        data-testid="skill-github-copilot"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >GitHub Copilot</span\r
                      ><span\r
                        data-testid="skill-cursor-ide"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Cursor IDE</span\r
                      ><span\r
                        data-testid="skill-langchain"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >LangChain</span\r
                      ><span\r
                        data-testid="skill-rag"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >RAG</span\r
                      ><span\r
                        data-testid="skill-openai-apis"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >OpenAI APIs</span\r
                      ><span\r
                        data-testid="skill-git"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Git</span\r
                      ><span\r
                        data-testid="skill-jest"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Jest</span\r
                      ><span\r
                        data-testid="skill-playwright"\r
                        class="text-[11px] uppercase tracking-[0.15em] border border-white/15 px-3 py-1.5 text-zinc-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"\r
                        x-file-name="Skills"\r
                        x-line-number="70"\r
                        x-column="20"\r
                        x-component="span"\r
                        x-id="Skills_70_20"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="cat"\r
                        x-source-editable="false"\r
                        x-array-var="cat"\r
                        x-array-item-param="item"\r
                        >Playwright</span\r
                      >\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="experience"\r
            data-testid="experience-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Experience"\r
            x-line-number="8"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Experience_8_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Experience"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Experience_13_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >03</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    EXPERIENCE\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >03</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="mt-16 relative"\r
                x-file-name="Experience"\r
                x-line-number="16"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Experience_16_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10"\r
                  x-file-name="Experience"\r
                  x-line-number="18"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Experience_18_10"\r
                  x-dynamic="false"\r
                ></div>\r
                <div\r
                  class="space-y-16"\r
                  x-file-name="Experience"\r
                  x-line-number="20"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Experience_20_10"\r
                  x-dynamic="true"\r
                  x-source-type="computed"\r
                  x-source-editable="false"\r
                >\r
                  <div\r
                    data-testid="experience-item-0"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        Feb 2025 — Present\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Mavlers\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Frontend SME\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Subject-matter expert driving AI-assisted development\r
                          practices, CRM integrations, and architectural\r
                          direction for an 8+ engineer pod.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Introduced Copilot + Cursor workflows that cut\r
                              delivery time ~40%</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Owned presales requirements analysis for 6+\r
                              enterprise pitches</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Designed micro-frontend boundaries between CRM\r
                              modules</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Mentored 8+ developers via code reviews and\r
                              weekly arch syncs</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-1"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:order-2 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2023 — 2025\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Siam Computing\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Senior Frontend Associate\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Shipped RESTful-backed React applications with a focus\r
                          on performance budgets and Agile delivery cadence.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Improved LCP by 30% via route-level code\r
                              splitting &amp; asset audits</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Improved LCP by 30% via route-level code\r
                              splitting &amp; asset audits</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Built reusable component library adopted by 3\r
                              product teams</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Built reusable component library adopted by 3\r
                              product teams</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Drove Agile ceremonies and sprint estimation for\r
                              the frontend chapter</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Drove Agile ceremonies and sprint estimation for\r
                              the frontend chapter</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-2"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2021 — 2023\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        The Workfront\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Front End Engineer\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          Built collaborative, real-time UI components and\r
                          WebSocket-backed synchronization layers.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Engineered &lt;200ms update latency for live\r
                              multi-user editing</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Designed Redux selectors that survived 10×\r
                              state-tree growth</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              x-file-name="Experience"\r
                              x-line-number="90"\r
                              x-column="27"\r
                              x-component="span"\r
                              x-id="Experience_90_27"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Co-authored the team’s React testing\r
                              playbook</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div\r
                    data-testid="experience-item-3"\r
                    class="relative md:grid md:grid-cols-2 md:gap-12 pl-10 md:pl-0"\r
                    x-file-name="Experience"\r
                    x-line-number="34"\r
                    x-column="4"\r
                    x-component="div"\r
                    x-id="Experience_34_4"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="absolute left-3 md:left-1/2 top-2 -translate-x-1/2 z-10"\r
                      x-file-name="Experience"\r
                      x-line-number="43"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_43_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="relative"\r
                        x-file-name="Experience"\r
                        x-line-number="44"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_44_8"\r
                        x-dynamic="false"\r
                      >\r
                        <div\r
                          class="absolute inset-0 bg-[var(--accent)] blur-md opacity-50"\r
                          x-file-name="Experience"\r
                          x-line-number="45"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_45_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                        <div\r
                          class="relative w-3 h-3 bg-[var(--accent)] rotate-45"\r
                          x-file-name="Experience"\r
                          x-line-number="46"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Experience_46_10"\r
                          x-dynamic="false"\r
                        ></div>\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="md:order-2 md:pl-12"\r
                      x-file-name="Experience"\r
                      x-line-number="51"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_51_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2"\r
                        x-file-name="Experience"\r
                        x-line-number="54"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_54_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="period"\r
                        x-source-editable="false"\r
                      >\r
                        2020 — 2021\r
                      </div>\r
                      <h3\r
                        class="font-display font-black text-2xl md:text-3xl uppercase tracking-tight"\r
                        x-file-name="Experience"\r
                        x-line-number="57"\r
                        x-column="8"\r
                        x-component="h3"\r
                        x-id="Experience_57_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="company"\r
                        x-source-editable="false"\r
                      >\r
                        Trade Serve India\r
                      </h3>\r
                      <div\r
                        class="mt-2 inline-flex items-center gap-2 text-sm text-[var(--accent)]"\r
                        x-file-name="Experience"\r
                        x-line-number="60"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_60_8"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="role"\r
                        x-source-path="role"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-briefcase w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Experience"\r
                          x-line-number="61"\r
                          x-column="10"\r
                          x-component="Briefcase"\r
                          x-id="Experience_61_10"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"\r
                          ></path>\r
                          <rect\r
                            width="20"\r
                            height="14"\r
                            x="2"\r
                            y="6"\r
                            rx="2"\r
                          ></rect></svg\r
                        >Web Developer\r
                      </div>\r
                    </div>\r
                    <div\r
                      class="mt-4 md:mt-0 md:order-1 md:text-right md:pr-12"\r
                      x-file-name="Experience"\r
                      x-line-number="67"\r
                      x-column="6"\r
                      x-component="div"\r
                      x-id="Experience_67_6"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="border border-white/10 bg-[var(--surface)]/60 p-5 md:p-6"\r
                        x-file-name="Experience"\r
                        x-line-number="72"\r
                        x-column="8"\r
                        x-component="div"\r
                        x-id="Experience_72_8"\r
                        x-dynamic="false"\r
                      >\r
                        <p\r
                          class="text-sm md:text-base text-zinc-300 leading-relaxed"\r
                          x-file-name="Experience"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="p"\r
                          x-id="Experience_73_10"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="role"\r
                          x-source-path="summary"\r
                          x-source-editable="false"\r
                        >\r
                          From-scratch builds and Figma-to-code execution for\r
                          marketing and product surfaces.\r
                        </p>\r
                        <ul\r
                          class="mt-4 space-y-2"\r
                          x-file-name="Experience"\r
                          x-line-number="76"\r
                          x-column="10"\r
                          x-component="ul"\r
                          x-id="Experience_76_10"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                        >\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Delivered 12+ pixel-perfect Figma-to-React\r
                              handoffs</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Delivered 12+ pixel-perfect Figma-to-React\r
                              handoffs</span\r
                            >\r
                          </li>\r
                          <li\r
                            class="text-xs md:text-sm text-zinc-400 flex gap-2 md:justify-end"\r
                            x-file-name="Experience"\r
                            x-line-number="78"\r
                            x-column="14"\r
                            x-component="li"\r
                            x-id="Experience_78_14"\r
                            x-dynamic="true"\r
                            x-source-type="computed"\r
                            x-source-editable="false"\r
                          >\r
                            <span\r
                              class="hidden md:block"\r
                              x-file-name="Experience"\r
                              x-line-number="84"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_84_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Set up the team’s first CI pipeline and\r
                              Lighthouse budgets</span\r
                            ><svg\r
                              xmlns="http://www.w3.org/2000/svg"\r
                              width="24"\r
                              height="24"\r
                              viewBox="0 0 24 24"\r
                              fill="none"\r
                              stroke="currentColor"\r
                              stroke-width="2"\r
                              stroke-linecap="round"\r
                              stroke-linejoin="round"\r
                              class="lucide lucide-arrow-up-right w-3.5 h-3.5 text-[var(--accent)] mt-1 flex-shrink-0 md:order-2"\r
                              aria-hidden="true"\r
                              x-file-name="Experience"\r
                              x-line-number="85"\r
                              x-column="16"\r
                              x-component="ArrowUpRight"\r
                              x-id="Experience_85_16"\r
                              x-dynamic="true"\r
                              x-source-type="external"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                            >\r
                              <path d="M7 7h10v10"></path>\r
                              <path d="M7 17 17 7"></path></svg\r
                            ><span\r
                              class="md:hidden"\r
                              x-file-name="Experience"\r
                              x-line-number="91"\r
                              x-column="28"\r
                              x-component="span"\r
                              x-id="Experience_91_28"\r
                              x-dynamic="true"\r
                              x-source-type="static-imported"\r
                              x-source-var="role"\r
                              x-source-editable="false"\r
                              x-array-var="role"\r
                              x-array-item-param="b"\r
                              >Set up the team’s first CI pipeline and\r
                              Lighthouse budgets</span\r
                            >\r
                          </li>\r
                        </ul>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="projects"\r
            data-testid="projects-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Projects"\r
            x-line-number="9"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Projects_9_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Projects"\r
              x-line-number="14"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Projects_14_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >04</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CASE STUDIES\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >04</span\r
                  ></span\r
                >\r
              </div>\r
              <p\r
                class="mt-8 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed"\r
                x-file-name="Projects"\r
                x-line-number="17"\r
                x-column="8"\r
                x-component="p"\r
                x-id="Projects_17_8"\r
                x-dynamic="false"\r
              >\r
                Three deep-dives on shipping React at scale: a B2B platform we\r
                put on a performance budget, a real-time financial dashboard\r
                that had to stay under 200ms, and a hybrid Webflow ↔ React\r
                architecture.\r
              </p>\r
              <div\r
                class="mt-16 space-y-24"\r
                x-file-name="Projects"\r
                x-line-number="23"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Projects_23_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                <div\r
                  data-testid="project-b2b-platform"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] left-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    01\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-b2b-platform"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/b2b-platform"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="B2B Platform"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.pexels.com/photos/12843342/pexels-photo-12843342.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >01</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      B2B Platform\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Operations dashboard for a multi-tenant procurement\r
                      workflow.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Redux Toolkit</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Node.js</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >WebSockets</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Tailwind</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >30% reduction in dashboard load time after\r
                        code-splitting + asset audit\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Cut bundle size by 42% via dependency pruning and\r
                        tree-shaking\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Designed role-based UI states for 4 distinct personas\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-b2b-platform"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/b2b-platform"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="project-realtime-financial-dashboard"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] right-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    02\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative md:order-2"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-realtime-financial-dashboard"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/realtime-financial-dashboard"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="Real-Time Financial Dashboard"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3ODI4MDcwODF8MA&amp;ixlib=rb-4.1.0&amp;q=85"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >02</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative md:order-1"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      Real-Time Financial Dashboard\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Low-latency market data rendered for institutional\r
                      analysts.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >WebSockets</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >D3</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Web Workers</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Zustand</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Sub-200ms update latency on a 30-symbol live grid\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Rendered 5k+ rows without dropping frames via\r
                        virtualization\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Offloaded diffing to a Web Worker pipeline\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-realtime-financial-dashboard"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/realtime-financial-dashboard"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
                <div\r
                  data-testid="project-webflow-react-hybrid"\r
                  class="relative grid grid-cols-12 gap-6 md:gap-8 items-center"\r
                  x-file-name="Projects"\r
                  x-line-number="36"\r
                  x-column="4"\r
                  x-component="div"\r
                  x-id="Projects_36_4"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    aria-hidden="true"\r
                    class="absolute font-display font-black uppercase tracking-tighter pointer-events-none select-none text-[14rem] md:text-[22rem] leading-none text-white/[0.04] left-0 -top-12"\r
                    x-file-name="Projects"\r
                    x-line-number="45"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_45_6"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="project"\r
                    x-source-path="number"\r
                    x-source-editable="false"\r
                  >\r
                    03\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-7 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="55"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_55_6"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      data-testid="project-image-link-webflow-react-hybrid"\r
                      class="block group relative overflow-hidden border border-white/10 corners"\r
                      href="/case-study/webflow-react-hybrid"\r
                      data-discover="true"\r
                      ><div\r
                        class="aspect-[16/10] overflow-hidden"\r
                        x-file-name="Projects"\r
                        x-line-number="65"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_65_10"\r
                        x-dynamic="false"\r
                      >\r
                        <img\r
                          alt="Webflow + React Hybrid"\r
                          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"\r
                          x-file-name="Projects"\r
                          x-line-number="66"\r
                          x-column="12"\r
                          x-component="img"\r
                          x-id="Projects_66_12"\r
                          x-dynamic="false"\r
                          src="https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3ODI4MDcwODB8MA&amp;ixlib=rb-4.1.0&amp;q=85"\r
                        />\r
                      </div>\r
                      <div\r
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"\r
                        x-file-name="Projects"\r
                        x-line-number="72"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_72_10"\r
                        x-dynamic="false"\r
                      ></div>\r
                      <div\r
                        class="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                        x-file-name="Projects"\r
                        x-line-number="73"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_73_10"\r
                        x-dynamic="true"\r
                        x-source-type="prop"\r
                        x-source-var="project"\r
                        x-source-path="number"\r
                        x-source-editable="false"\r
                      >\r
                        //\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Projects"\r
                          x-line-number="73"\r
                          x-column="10"\r
                          x-component="div"\r
                          x-id="Projects_73_10_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="project"\r
                          x-source-path="number"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >03</span\r
                        >\r
                      </div>\r
                      <div\r
                        class="absolute bottom-4 right-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white bg-black/60 backdrop-blur px-3 py-2 border border-white/10"\r
                        x-file-name="Projects"\r
                        x-line-number="76"\r
                        x-column="10"\r
                        x-component="div"\r
                        x-id="Projects_76_10"\r
                        x-dynamic="false"\r
                      >\r
                        View case study<svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                          aria-hidden="true"\r
                          x-file-name="Projects"\r
                          x-line-number="78"\r
                          x-column="12"\r
                          x-component="ArrowUpRight"\r
                          x-id="Projects_78_12"\r
                          x-dynamic="false"\r
                        >\r
                          <path d="M7 7h10v10"></path>\r
                          <path d="M7 17 17 7"></path>\r
                        </svg></div\r
                    ></a>\r
                  </div>\r
                  <div\r
                    class="col-span-12 md:col-span-5 relative"\r
                    x-file-name="Projects"\r
                    x-line-number="84"\r
                    x-column="6"\r
                    x-component="div"\r
                    x-id="Projects_84_6"\r
                    x-dynamic="false"\r
                  >\r
                    <h3\r
                      class="font-display font-black text-3xl md:text-4xl uppercase leading-[0.95] tracking-tight"\r
                      x-file-name="Projects"\r
                      x-line-number="89"\r
                      x-column="8"\r
                      x-component="h3"\r
                      x-id="Projects_89_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="name"\r
                      x-source-editable="false"\r
                    >\r
                      Webflow + React Hybrid\r
                    </h3>\r
                    <p\r
                      class="mt-4 text-zinc-400 text-base leading-relaxed"\r
                      x-file-name="Projects"\r
                      x-line-number="92"\r
                      x-column="8"\r
                      x-component="p"\r
                      x-id="Projects_92_8"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="project"\r
                      x-source-path="tagline"\r
                      x-source-editable="false"\r
                    >\r
                      Marketing speed + product depth, on a single architecture.\r
                    </p>\r
                    <div\r
                      class="mt-6 flex flex-wrap gap-2"\r
                      x-file-name="Projects"\r
                      x-line-number="96"\r
                      x-column="8"\r
                      x-component="div"\r
                      x-id="Projects_96_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >React</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Webflow</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Vite</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Module Federation</span\r
                      ><span\r
                        class="text-[10px] uppercase tracking-[0.2em] border border-white/15 px-2.5 py-1 text-zinc-300"\r
                        x-file-name="Projects"\r
                        x-line-number="98"\r
                        x-column="12"\r
                        x-component="span"\r
                        x-id="Projects_98_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="s"\r
                        >Cloudflare</span\r
                      >\r
                    </div>\r
                    <ul\r
                      class="mt-6 space-y-2"\r
                      x-file-name="Projects"\r
                      x-line-number="107"\r
                      x-column="8"\r
                      x-component="ul"\r
                      x-id="Projects_107_8"\r
                      x-dynamic="true"\r
                      x-source-type="computed"\r
                      x-source-editable="false"\r
                    >\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Marketing ships pages in hours; product ships features\r
                        in React\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >40% faster marketing iteration without engineering\r
                        tickets\r
                      </li>\r
                      <li\r
                        class="text-xs md:text-sm text-zinc-400 flex items-start gap-2"\r
                        x-file-name="Projects"\r
                        x-line-number="109"\r
                        x-column="12"\r
                        x-component="li"\r
                        x-id="Projects_109_12"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="project"\r
                        x-source-editable="false"\r
                        x-array-var="project"\r
                        x-array-item-param="imp"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)] mt-0.5"\r
                          x-file-name="Projects"\r
                          x-line-number="113"\r
                          x-column="14"\r
                          x-component="span"\r
                          x-id="Projects_113_14"\r
                          x-dynamic="false"\r
                          >▸</span\r
                        >Single domain, shared auth, shared analytics layer\r
                      </li>\r
                    </ul>\r
                    <a\r
                      data-testid="project-link-webflow-react-hybrid"\r
                      class="mt-8 btn-block inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-[var(--accent)] hover:text-[var(--accent)]"\r
                      href="/case-study/webflow-react-hybrid"\r
                      data-discover="true"\r
                      >Read full case study<svg\r
                        xmlns="http://www.w3.org/2000/svg"\r
                        width="24"\r
                        height="24"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                        stroke-linecap="round"\r
                        stroke-linejoin="round"\r
                        class="lucide lucide-arrow-up-right w-3.5 h-3.5"\r
                        aria-hidden="true"\r
                        x-file-name="Projects"\r
                        x-line-number="125"\r
                        x-column="10"\r
                        x-component="ArrowUpRight"\r
                        x-id="Projects_125_10"\r
                        x-dynamic="false"\r
                      >\r
                        <path d="M7 7h10v10"></path>\r
                        <path d="M7 17 17 7"></path></svg\r
                    ></a>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="education"\r
            data-testid="education-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Education"\r
            x-line-number="8"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Education_8_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Education"\r
              x-line-number="13"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Education_13_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >05</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CREDENTIALS\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >05</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-6 mt-12"\r
                x-file-name="Education"\r
                x-line-number="16"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Education_16_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-5 border border-white/10 bg-[var(--surface)]/60 p-6 md:p-8"\r
                  data-testid="education-card"\r
                  x-file-name="Education"\r
                  x-line-number="18"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Education_18_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="Education"\r
                    x-line-number="26"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_26_12"\r
                    x-dynamic="false"\r
                  >\r
                    <svg\r
                      xmlns="http://www.w3.org/2000/svg"\r
                      width="24"\r
                      height="24"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      class="lucide lucide-graduation-cap w-4 h-4"\r
                      aria-hidden="true"\r
                      x-file-name="Education"\r
                      x-line-number="27"\r
                      x-column="14"\r
                      x-component="GraduationCap"\r
                      x-id="Education_27_14"\r
                      x-dynamic="false"\r
                    >\r
                      <path\r
                        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"\r
                      ></path>\r
                      <path d="M22 10v6"></path>\r
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg\r
                    >Education\r
                  </div>\r
                  <div\r
                    class="mt-6 space-y-6"\r
                    x-file-name="Education"\r
                    x-line-number="30"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_30_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <div\r
                      data-testid="education-item-0"\r
                      class="border-l-2 border-[var(--accent)]/50 pl-4"\r
                      x-file-name="Education"\r
                      x-line-number="32"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Education_32_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="font-display font-bold text-lg md:text-xl uppercase tracking-tight"\r
                        x-file-name="Education"\r
                        x-line-number="37"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_37_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="degree"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        MCA — Master of Computer Applications\r
                      </div>\r
                      <div\r
                        class="mt-1 text-sm text-zinc-400"\r
                        x-file-name="Education"\r
                        x-line-number="40"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_40_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="school"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        Mangalayatan University\r
                      </div>\r
                      <div\r
                        class="mt-1 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                        x-file-name="Education"\r
                        x-line-number="41"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_41_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="year"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        2024\r
                      </div>\r
                    </div>\r
                    <div\r
                      data-testid="education-item-1"\r
                      class="border-l-2 border-[var(--accent)]/50 pl-4"\r
                      x-file-name="Education"\r
                      x-line-number="32"\r
                      x-column="16"\r
                      x-component="div"\r
                      x-id="Education_32_16"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        class="font-display font-bold text-lg md:text-xl uppercase tracking-tight"\r
                        x-file-name="Education"\r
                        x-line-number="37"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_37_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="degree"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        BCA — Bachelor of Computer Applications\r
                      </div>\r
                      <div\r
                        class="mt-1 text-sm text-zinc-400"\r
                        x-file-name="Education"\r
                        x-line-number="40"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_40_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="school"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        Maharshi Dayanand University\r
                      </div>\r
                      <div\r
                        class="mt-1 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
                        x-file-name="Education"\r
                        x-line-number="41"\r
                        x-column="18"\r
                        x-component="div"\r
                        x-id="Education_41_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="education"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="191"\r
                        x-source-path="year"\r
                        x-source-editable="true"\r
                        x-array-var="education"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="191"\r
                        x-array-item-param="e"\r
                      >\r
                        2020\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-7 border border-white/10 bg-[var(--surface)]/60 p-6 md:p-8"\r
                  data-testid="achievements-card"\r
                  x-file-name="Education"\r
                  x-line-number="50"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Education_50_10"\r
                  x-dynamic="false"\r
                  style="opacity: 1; transform: none"\r
                >\r
                  <div\r
                    class="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="Education"\r
                    x-line-number="58"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Education_58_12"\r
                    x-dynamic="false"\r
                  >\r
                    <svg\r
                      xmlns="http://www.w3.org/2000/svg"\r
                      width="24"\r
                      height="24"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      class="lucide lucide-trophy w-4 h-4"\r
                      aria-hidden="true"\r
                      x-file-name="Education"\r
                      x-line-number="59"\r
                      x-column="14"\r
                      x-component="Trophy"\r
                      x-id="Education_59_14"\r
                      x-dynamic="false"\r
                    >\r
                      <path\r
                        d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"\r
                      ></path>\r
                      <path\r
                        d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"\r
                      ></path>\r
                      <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>\r
                      <path d="M4 22h16"></path>\r
                      <path\r
                        d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"\r
                      ></path>\r
                      <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg\r
                    >Achievements\r
                  </div>\r
                  <ul\r
                    class="mt-6 space-y-4"\r
                    x-file-name="Education"\r
                    x-line-number="62"\r
                    x-column="12"\r
                    x-component="ul"\r
                    x-id="Education_62_12"\r
                    x-dynamic="true"\r
                    x-source-type="computed"\r
                    x-source-editable="false"\r
                  >\r
                    <li\r
                      data-testid="achievement-0"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >1</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Earned the UpStars Award within 6 months through\r
                        consistent performance, client-focused delivery, and\r
                        engineering excellence.</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-1"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >2</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Drove 30% LCP improvement on two production B2B\r
                        platforms</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-2"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >3</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >Architected real-time dashboards with sub-200ms update\r
                        latency</span\r
                      >\r
                    </li>\r
                    <li\r
                      data-testid="achievement-3"\r
                      class="flex items-start gap-3 text-sm md:text-base text-zinc-300"\r
                      x-file-name="Education"\r
                      x-line-number="64"\r
                      x-column="16"\r
                      x-component="li"\r
                      x-id="Education_64_16"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="font-display font-black text-[var(--accent)] text-xs mt-1"\r
                        x-file-name="Education"\r
                        x-line-number="69"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_69_18"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                        >0<span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Education"\r
                          x-line-number="69"\r
                          x-column="18"\r
                          x-component="span"\r
                          x-id="Education_69_18_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="computed"\r
                          x-source-editable="false"\r
                          style="display: contents"\r
                          >4</span\r
                        ></span\r
                      ><span\r
                        x-file-name="Education"\r
                        x-line-number="72"\r
                        x-column="18"\r
                        x-component="span"\r
                        x-id="Education_72_18"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="achievements"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="204"\r
                        x-source-editable="true"\r
                        x-array-var="achievements"\r
                        x-array-file="@/data/resumeData"\r
                        x-array-line="204"\r
                        x-array-item-param="a"\r
                        >40% faster delivery cadence via AI-assisted dev\r
                        workflows</span\r
                      >\r
                    </li>\r
                  </ul>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <section\r
            id="contact"\r
            data-testid="contact-section"\r
            class="relative py-24 md:py-40 border-t border-white/10"\r
            x-file-name="Contact"\r
            x-line-number="76"\r
            x-column="4"\r
            x-component="section"\r
            x-id="Contact_76_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12"\r
              x-file-name="Contact"\r
              x-line-number="81"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Contact_81_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                class="flex items-end justify-between border-b border-white/10 pb-4"\r
                x-file-name="About"\r
                x-line-number="95"\r
                x-column="4"\r
                x-component="div"\r
                x-id="About_95_4"\r
                x-dynamic="false"\r
                style="opacity: 1; transform: none"\r
              >\r
                <div\r
                  class="flex items-baseline gap-4"\r
                  x-file-name="About"\r
                  x-line-number="102"\r
                  x-column="6"\r
                  x-component="div"\r
                  x-id="About_102_6"\r
                  x-dynamic="false"\r
                >\r
                  <span\r
                    class="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"\r
                    x-file-name="About"\r
                    x-line-number="103"\r
                    x-column="8"\r
                    x-component="span"\r
                    x-id="About_103_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    >/<span\r
                      data-ve-dynamic="true"\r
                      x-excluded="true"\r
                      x-file-name="About"\r
                      x-line-number="103"\r
                      x-column="8"\r
                      x-component="span"\r
                      x-id="About_103_8_expr1"\r
                      x-dynamic="true"\r
                      x-source-type="prop"\r
                      x-source-var="index"\r
                      x-source-editable="false"\r
                      style="display: contents"\r
                      >06</span\r
                    ></span\r
                  >\r
                  <h2\r
                    class="font-display font-black text-3xl md:text-4xl uppercase tracking-tight"\r
                    x-file-name="About"\r
                    x-line-number="106"\r
                    x-column="8"\r
                    x-component="h2"\r
                    x-id="About_106_8"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="title"\r
                    x-source-editable="false"\r
                  >\r
                    CONTACT\r
                  </h2>\r
                </div>\r
                <span\r
                  class="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hidden md:block"\r
                  x-file-name="About"\r
                  x-line-number="110"\r
                  x-column="6"\r
                  x-component="span"\r
                  x-id="About_110_6"\r
                  x-dynamic="true"\r
                  x-source-type="prop"\r
                  x-source-var="index"\r
                  x-source-editable="false"\r
                  >section_<span\r
                    data-ve-dynamic="true"\r
                    x-excluded="true"\r
                    x-file-name="About"\r
                    x-line-number="110"\r
                    x-column="6"\r
                    x-component="span"\r
                    x-id="About_110_6_expr1"\r
                    x-dynamic="true"\r
                    x-source-type="prop"\r
                    x-source-var="index"\r
                    x-source-editable="false"\r
                    style="display: contents"\r
                    >06</span\r
                  ></span\r
                >\r
              </div>\r
              <div\r
                class="grid grid-cols-12 gap-8 md:gap-12 mt-12"\r
                x-file-name="Contact"\r
                x-line-number="84"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Contact_84_8"\r
                x-dynamic="false"\r
              >\r
                <div\r
                  class="col-span-12 md:col-span-6 flex flex-col justify-between"\r
                  x-file-name="Contact"\r
                  x-line-number="86"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Contact_86_10"\r
                  x-dynamic="false"\r
                >\r
                  <h3\r
                    class="font-display font-black uppercase text-5xl md:text-7xl leading-[0.9] tracking-tighter"\r
                    x-file-name="Contact"\r
                    x-line-number="87"\r
                    x-column="12"\r
                    x-component="h3"\r
                    x-id="Contact_87_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    LET'S<br\r
                      x-file-name="Contact"\r
                      x-line-number="95"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Contact_95_14"\r
                      x-dynamic="false"\r
                    /><span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Contact"\r
                      x-line-number="96"\r
                      x-column="14"\r
                      x-component="span"\r
                      x-id="Contact_96_14"\r
                      x-dynamic="false"\r
                      >BUILD</span\r
                    >\r
                    SOMETHING<br\r
                      x-file-name="Contact"\r
                      x-line-number="97"\r
                      x-column="14"\r
                      x-component="br"\r
                      x-id="Contact_97_14"\r
                      x-dynamic="false"\r
                    />FAST<span\r
                      class="text-[var(--accent)]"\r
                      x-file-name="Contact"\r
                      x-line-number="98"\r
                      x-column="18"\r
                      x-component="span"\r
                      x-id="Contact_98_18"\r
                      x-dynamic="false"\r
                      >.</span\r
                    >\r
                  </h3>\r
                  <div\r
                    class="mt-12 md:mt-0 space-y-4"\r
                    x-file-name="Contact"\r
                    x-line-number="101"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Contact_101_12"\r
                    x-dynamic="false"\r
                  >\r
                    <a\r
                      href="mailto:manmohanjangra2528@gmail.com"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-email"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-mail w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="103"\r
                            x-column="22"\r
                            x-component="Mail"\r
                            x-id="Contact_103_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"\r
                            ></path>\r
                            <rect\r
                              x="2"\r
                              y="4"\r
                              width="20"\r
                              height="16"\r
                              rx="2"\r
                            ></rect></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            email\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            manmohanjangra2528@gmail.com\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    ><a\r
                      href="tel:+91-7015846550"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-phone"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-phone w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="110"\r
                            x-column="22"\r
                            x-component="Phone"\r
                            x-id="Contact_110_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"\r
                            ></path></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            phone\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            +91-7015846550\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    ><a\r
                      href="https://www.linkedin.com/in/manmohanjangra"\r
                      target="_blank"\r
                      rel="noopener noreferrer"\r
                      data-testid="contact-linkedin"\r
                      class="group flex items-center justify-between border border-white/10 px-4 py-3 hover:border-[var(--accent)] transition-colors"\r
                      x-file-name="Contact"\r
                      x-line-number="231"\r
                      x-column="4"\r
                      x-component="a"\r
                      x-id="Contact_231_4"\r
                      x-dynamic="false"\r
                      ><div\r
                        class="flex items-center gap-3"\r
                        x-file-name="Contact"\r
                        x-line-number="238"\r
                        x-column="6"\r
                        x-component="div"\r
                        x-id="Contact_238_6"\r
                        x-dynamic="false"\r
                      >\r
                        <span\r
                          class="text-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="239"\r
                          x-column="8"\r
                          x-component="span"\r
                          x-id="Contact_239_8"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="icon"\r
                          x-source-editable="false"\r
                          ><svg\r
                            xmlns="http://www.w3.org/2000/svg"\r
                            width="24"\r
                            height="24"\r
                            viewBox="0 0 24 24"\r
                            fill="none"\r
                            stroke="currentColor"\r
                            stroke-width="2"\r
                            stroke-linecap="round"\r
                            stroke-linejoin="round"\r
                            class="lucide lucide-linkedin w-4 h-4"\r
                            aria-hidden="true"\r
                            x-file-name="Contact"\r
                            x-line-number="117"\r
                            x-column="22"\r
                            x-component="Linkedin"\r
                            x-id="Contact_117_22"\r
                            x-dynamic="false"\r
                          >\r
                            <path\r
                              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"\r
                            ></path>\r
                            <rect width="4" height="12" x="2" y="9"></rect>\r
                            <circle cx="4" cy="4" r="2"></circle></svg\r
                        ></span>\r
                        <div\r
                          x-file-name="Contact"\r
                          x-line-number="240"\r
                          x-column="8"\r
                          x-component="div"\r
                          x-id="Contact_240_8"\r
                          x-dynamic="false"\r
                        >\r
                          <div\r
                            class="text-[10px] uppercase tracking-[0.25em] text-zinc-500"\r
                            x-file-name="Contact"\r
                            x-line-number="241"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_241_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="label"\r
                            x-source-editable="false"\r
                          >\r
                            linkedin\r
                          </div>\r
                          <div\r
                            class="text-sm text-white group-hover:text-[var(--accent)] transition-colors"\r
                            x-file-name="Contact"\r
                            x-line-number="244"\r
                            x-column="10"\r
                            x-component="div"\r
                            x-id="Contact_244_10"\r
                            x-dynamic="true"\r
                            x-source-type="prop"\r
                            x-source-var="value"\r
                            x-source-editable="false"\r
                          >\r
                            manmohanjangra\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <span\r
                        class="text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity"\r
                        x-file-name="Contact"\r
                        x-line-number="249"\r
                        x-column="6"\r
                        x-component="span"\r
                        x-id="Contact_249_6"\r
                        x-dynamic="false"\r
                        >→</span\r
                      ></a\r
                    >\r
                  </div>\r
                </div>\r
                <div\r
                  class="col-span-12 md:col-span-6"\r
                  x-file-name="Contact"\r
                  x-line-number="127"\r
                  x-column="10"\r
                  x-component="div"\r
                  x-id="Contact_127_10"\r
                  x-dynamic="false"\r
                >\r
                  <div\r
                    class="terminal corners"\r
                    x-file-name="Contact"\r
                    x-line-number="128"\r
                    x-column="12"\r
                    x-component="div"\r
                    x-id="Contact_128_12"\r
                    x-dynamic="false"\r
                    style="opacity: 1; transform: none"\r
                  >\r
                    <div\r
                      class="terminal-bar"\r
                      x-file-name="Contact"\r
                      x-line-number="135"\r
                      x-column="14"\r
                      x-component="div"\r
                      x-id="Contact_135_14"\r
                      x-dynamic="false"\r
                    >\r
                      <span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="136"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_136_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="137"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_137_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="terminal-dot"\r
                        x-file-name="Contact"\r
                        x-line-number="138"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_138_16"\r
                        x-dynamic="false"\r
                      ></span\r
                      ><span\r
                        class="ml-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500"\r
                        x-file-name="Contact"\r
                        x-line-number="139"\r
                        x-column="16"\r
                        x-component="span"\r
                        x-id="Contact_139_16"\r
                        x-dynamic="false"\r
                        >send_message.sh</span\r
                      >\r
                    </div>\r
                    <form\r
                      data-testid="contact-form"\r
                      class="p-6 md:p-8 space-y-5"\r
                      x-file-name="Contact"\r
                      x-line-number="144"\r
                      x-column="14"\r
                      x-component="form"\r
                      x-id="Contact_144_14"\r
                      x-dynamic="false"\r
                    >\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="212"\r
                        x-column="4"\r
                        x-component="div"\r
                        x-id="Contact_212_4"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="213"\r
                          x-column="6"\r
                          x-component="label"\r
                          x-id="Contact_213_6"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="label"\r
                          x-source-editable="false"\r
                          >// your name</label\r
                        ><input\r
                          placeholder="Jane Doe"\r
                          data-testid="contact-input-name"\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="216"\r
                          x-column="6"\r
                          x-component="input"\r
                          x-id="Contact_216_6"\r
                          x-dynamic="false"\r
                          type="text"\r
                          value=""\r
                          name="name"\r
                        />\r
                      </div>\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="212"\r
                        x-column="4"\r
                        x-component="div"\r
                        x-id="Contact_212_4"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="213"\r
                          x-column="6"\r
                          x-component="label"\r
                          x-id="Contact_213_6"\r
                          x-dynamic="true"\r
                          x-source-type="prop"\r
                          x-source-var="label"\r
                          x-source-editable="false"\r
                          >// your email</label\r
                        ><input\r
                          placeholder="jane@company.com"\r
                          data-testid="contact-input-email"\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)]"\r
                          x-file-name="Contact"\r
                          x-line-number="216"\r
                          x-column="6"\r
                          x-component="input"\r
                          x-id="Contact_216_6"\r
                          x-dynamic="false"\r
                          type="email"\r
                          value=""\r
                          name="email"\r
                        />\r
                      </div>\r
                      <div\r
                        x-file-name="Contact"\r
                        x-line-number="166"\r
                        x-column="16"\r
                        x-component="div"\r
                        x-id="Contact_166_16"\r
                        x-dynamic="false"\r
                      >\r
                        <label\r
                          class="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2"\r
                          x-file-name="Contact"\r
                          x-line-number="167"\r
                          x-column="18"\r
                          x-component="label"\r
                          x-id="Contact_167_18"\r
                          x-dynamic="false"\r
                          >// your message</label\r
                        ><textarea\r
                          name="message"\r
                          data-testid="contact-input-message"\r
                          rows="5"\r
                          placeholder="Tell me about the role / project..."\r
                          class="w-full bg-transparent border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--accent)] resize-none"\r
                          x-file-name="Contact"\r
                          x-line-number="170"\r
                          x-column="18"\r
                          x-component="textarea"\r
                          x-id="Contact_170_18"\r
                          x-dynamic="false"\r
                        ></textarea>\r
                      </div>\r
                      <button\r
                        type="submit"\r
                        data-testid="contact-submit-btn"\r
                        class="btn-block w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-black px-5 py-3 text-xs uppercase tracking-[0.2em] font-bold disabled:opacity-60 disabled:cursor-not-allowed"\r
                        x-file-name="Contact"\r
                        x-line-number="181"\r
                        x-column="16"\r
                        x-component="button"\r
                        x-id="Contact_181_16"\r
                        x-dynamic="true"\r
                        x-source-type="computed"\r
                        x-source-editable="false"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-send w-4 h-4"\r
                          aria-hidden="true"\r
                          x-file-name="Contact"\r
                          x-line-number="193"\r
                          x-column="22"\r
                          x-component="Send"\r
                          x-id="Contact_193_22"\r
                          x-dynamic="false"\r
                        >\r
                          <path\r
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"\r
                          ></path>\r
                          <path d="m21.854 2.147-10.94 10.939"></path>\r
                        </svg>\r
                        Send message\r
                      </button>\r
                      <p\r
                        class="text-[10px] uppercase tracking-[0.2em] text-zinc-600 leading-relaxed"\r
                        x-file-name="Contact"\r
                        x-line-number="198"\r
                        x-column="16"\r
                        x-component="p"\r
                        x-id="Contact_198_16"\r
                        x-dynamic="true"\r
                        x-source-type="static-imported"\r
                        x-source-var="personal"\r
                        x-source-file="@/data/resumeData"\r
                        x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                        x-source-line="3"\r
                        x-source-path="email"\r
                        x-source-editable="true"\r
                      >\r
                        Messages route directly to\r
                        <span\r
                          data-ve-dynamic="true"\r
                          x-excluded="true"\r
                          x-file-name="Contact"\r
                          x-line-number="198"\r
                          x-column="16"\r
                          x-component="p"\r
                          x-id="Contact_198_16_expr1"\r
                          x-dynamic="true"\r
                          x-source-type="static-imported"\r
                          x-source-var="personal"\r
                          x-source-file="@/data/resumeData"\r
                          x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                          x-source-line="3"\r
                          x-source-path="email"\r
                          x-source-editable="true"\r
                          style="display: contents"\r
                          >manmohanjangra2528@gmail.com</span\r
                        >\r
                        via EmailJS.\r
                      </p>\r
                    </form>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
          <footer\r
            data-testid="footer"\r
            class="border-t border-white/10 py-10 text-[11px] uppercase tracking-[0.25em] text-zinc-500"\r
            x-file-name="Footer"\r
            x-line-number="5"\r
            x-column="4"\r
            x-component="footer"\r
            x-id="Footer_5_4"\r
            x-dynamic="false"\r
          >\r
            <div\r
              class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4"\r
              x-file-name="Footer"\r
              x-line-number="9"\r
              x-column="6"\r
              x-component="div"\r
              x-id="Footer_9_6"\r
              x-dynamic="false"\r
            >\r
              <div\r
                x-file-name="Footer"\r
                x-line-number="10"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Footer_10_8"\r
                x-dynamic="true"\r
                x-source-type="computed"\r
                x-source-editable="false"\r
              >\r
                ©\r
                <span\r
                  data-ve-dynamic="true"\r
                  x-excluded="true"\r
                  x-file-name="Footer"\r
                  x-line-number="10"\r
                  x-column="8"\r
                  x-component="div"\r
                  x-id="Footer_10_8_expr1"\r
                  x-dynamic="true"\r
                  x-source-type="computed"\r
                  x-source-editable="false"\r
                  style="display: contents"\r
                  >2026</span\r
                >\r
                <span\r
                  data-ve-dynamic="true"\r
                  x-excluded="true"\r
                  x-file-name="Footer"\r
                  x-line-number="10"\r
                  x-column="8"\r
                  x-component="div"\r
                  x-id="Footer_10_8_expr3"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="personal"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="3"\r
                  x-source-path="name"\r
                  x-source-editable="true"\r
                  style="display: contents"\r
                  >Manmohan Jangra</span\r
                >\r
                · Built in React\r
              </div>\r
              <div\r
                class="flex items-center gap-4"\r
                x-file-name="Footer"\r
                x-line-number="13"\r
                x-column="8"\r
                x-component="div"\r
                x-id="Footer_13_8"\r
                x-dynamic="false"\r
              >\r
                <a\r
                  href="mailto:manmohanjangra2528@gmail.com"\r
                  class="hover:text-[var(--accent)] transition-colors"\r
                  data-testid="footer-email"\r
                  x-file-name="Footer"\r
                  x-line-number="14"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Footer_14_10"\r
                  x-dynamic="true"\r
                  x-source-type="static-imported"\r
                  x-source-var="personal"\r
                  x-source-file="@/data/resumeData"\r
                  x-source-file-abs="/app/frontend/src/data/resumeData.js"\r
                  x-source-line="3"\r
                  x-source-path="email"\r
                  x-source-editable="true"\r
                  >manmohanjangra2528@gmail.com</a\r
                ><span\r
                  class="text-zinc-700"\r
                  x-file-name="Footer"\r
                  x-line-number="21"\r
                  x-column="10"\r
                  x-component="span"\r
                  x-id="Footer_21_10"\r
                  x-dynamic="false"\r
                  >/</span\r
                ><a\r
                  href="https://www.linkedin.com/in/manmohanjangra"\r
                  target="_blank"\r
                  rel="noopener noreferrer"\r
                  class="hover:text-[var(--accent)] transition-colors"\r
                  data-testid="footer-linkedin"\r
                  x-file-name="Footer"\r
                  x-line-number="22"\r
                  x-column="10"\r
                  x-component="a"\r
                  x-id="Footer_22_10"\r
                  x-dynamic="false"\r
                  >LinkedIn</a\r
                >\r
              </div>\r
            </div>\r
          </footer>\r
        </main>\r
        <section\r
          aria-label="Notifications alt+T"\r
          tabindex="-1"\r
          aria-live="polite"\r
          aria-relevant="additions text"\r
          aria-atomic="false"\r
        ></section>\r
      </div>\r
    </div>\r
    <!--\r
      This HTML file is a template.\r
      If you open it directly in the browser, you will see an empty page.\r
\r
      You can add webfonts, meta tags, or analytics to this file.\r
      The build step will place the bundled scripts into the <body> tag.\r
\r
      To begin the development, run \`npm start\` or \`yarn start\`.\r
      To create a production bundle, use \`npm run build\` or \`yarn build\`.\r
    -->\r
\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/web-vitals.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/dead-clicks-autocapture.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/surveys.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/static/posthog-recorder.js?v=1.396.2"\r
    ><\/script>\r
    <script\r
      type="text/javascript"\r
      crossorigin="anonymous"\r
      src="https://us-assets.i.posthog.com/array/phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs/config.js"\r
    ><\/script>\r
    <script>\r
      !(function (t, e) {\r
        var o, n, p, r;\r
        e.__SV ||\r
          ((window.posthog = e),\r
          (e._i = []),\r
          (e.init = function (i, s, a) {\r
            function g(t, e) {\r
              var o = e.split(".");\r
              (2 == o.length && ((t = t[o[0]]), (e = o[1])),\r
                (t[e] = function () {\r
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));\r
                }));\r
            }\r
            (((p = t.createElement("script")).type = "text/javascript"),\r
              (p.crossOrigin = "anonymous"),\r
              (p.async = !0),\r
              (p.src =\r
                s.api_host.replace(".i.posthog.com", "-assets.i.posthog.com") +\r
                "/static/array.js"),\r
              (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(\r
                p,\r
                r,\r
              ));\r
            var u = e;\r
            for (\r
              void 0 !== a ? (u = e[a] = []) : (a = "posthog"),\r
                u.people = u.people || [],\r
                u.toString = function (t) {\r
                  var e = "posthog";\r
                  return (\r
                    "posthog" !== a && (e += "." + a),\r
                    t || (e += " (stub)"),\r
                    e\r
                  );\r
                },\r
                u.people.toString = function () {\r
                  return u.toString(1) + ".people (stub)";\r
                },\r
                o =\r
                  "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(\r
                    " ",\r
                  ),\r
                n = 0;\r
              n < o.length;\r
              n++\r
            )\r
              g(u, o[n]);\r
            e._i.push([i, s, a]);\r
          }),\r
          (e.__SV = 1));\r
      })(document, window.posthog || []);\r
      posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs", {\r
        api_host: "https://us.i.posthog.com",\r
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well,\r
        session_recording: {\r
          recordCrossOriginIframes: true,\r
          capturePerformance: false,\r
        },\r
      });\r
    <\/script>\r
    <script>\r
      (function () {\r
        function c() {\r
          var b = a.contentDocument || a.contentWindow.document;\r
          if (b) {\r
            var d = b.createElement("script");\r
            d.innerHTML =\r
              "window.__CF$cv$params={r:'a13bc6594dc5bf12',t:'MTc4MjgwNzg2OA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";\r
            b.getElementsByTagName("head")[0].appendChild(d);\r
          }\r
        }\r
        if (document.body) {\r
          var a = document.createElement("iframe");\r
          a.height = 1;\r
          a.width = 1;\r
          a.style.position = "absolute";\r
          a.style.top = 0;\r
          a.style.left = 0;\r
          a.style.border = "none";\r
          a.style.visibility = "hidden";\r
          document.body.appendChild(a);\r
          if ("loading" !== document.readyState) c();\r
          else if (window.addEventListener)\r
            document.addEventListener("DOMContentLoaded", c);\r
          else {\r
            var e = document.onreadystatechange || function () {};\r
            document.onreadystatechange = function (b) {\r
              e(b);\r
              "loading" !== document.readyState &&\r
                ((document.onreadystatechange = e), c());\r
            };\r
          }\r
        }\r
      })();\r
    <\/script>\r
    <iframe\r
      height="1"\r
      width="1"\r
      style="\r
        position: absolute;\r
        top: 0px;\r
        left: 0px;\r
        border-width: medium;\r
        border-style: none;\r
        border-color: currentcolor;\r
        border-image: initial;\r
        visibility: hidden;\r
      "\r
    ></iframe>\r
    <script\r
      defer=""\r
      src="https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496"\r
      integrity="sha512-ZE9pZaUXND66v380QUtch/5sE9tPFh2zg45pR2PB0CVkCtOREv2AJKkSidISWkysEuQ0EH8faUU5du78bx87UQ=="\r
      data-cf-beacon='{"version":"2024.11.0","token":"7f7b0fd8732c4326aae4b9d58d5c514a","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}'\r
      crossorigin="anonymous"\r
    ><\/script>\r
  </body>\r
</html>\r
`,di=[{slug:"b2b-platform",number:"01",title:"B2B Platform",eyebrow:"Multi-tenant procurement",summary:"An operations dashboard that turns a complex, multi-role procurement workflow into a clear path from request to resolution.",image:"https://images.pexels.com/photos/12843342/pexels-photo-12843342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",imageAlt:"Modern office architecture representing connected B2B operations",stack:["React","Redux Toolkit","Node.js","WebSockets","Tailwind"],facts:[["Role","Frontend engineering"],["Product","Operations dashboard"],["Users","4 role-based personas"],["Focus","Performance + clarity"]],metrics:[{value:"30%",label:"faster dashboard load"},{value:"42%",label:"smaller JavaScript bundle"},{value:"4",label:"distinct role-based experiences"}],challenge:{title:"One workflow. Four very different views.",body:["Procurement software has an information-density problem: every request carries status, ownership, approvals, documents, exceptions, and an audit trail. Showing all of it at once makes the interface technically complete but operationally slow.","The platform also served four personas with different permissions and priorities. The core challenge was to keep one coherent product model while making every screen feel purpose-built for the person using it."]},approach:[{index:"01",title:"Model permissions before pixels",text:"A role-capability matrix defined what each persona could see, edit, approve, and escalate. UI states were derived from capabilities instead of scattered role checks, keeping permissions consistent as workflows evolved."},{index:"02",title:"Design around decisions",text:"Dashboard modules were ranked by the next decision a user needed to make. Status, blockers, and ownership stayed visible; secondary history and metadata moved into progressive disclosure patterns."},{index:"03",title:"Make performance structural",text:"Routes and heavy workflow modules were split at natural product boundaries. Dependency pruning, tree-shaking, and an asset audit reduced the amount of JavaScript required before the first useful interaction."},{index:"04",title:"Keep changes current",text:"WebSocket events updated affected records without forcing full-list refetches. Redux Toolkit provided a normalized state layer so live changes remained predictable across dashboard views."}],architecture:[["01","Node.js API","Returns tenant-scoped workflow data and capability rules."],["02","Redux Toolkit","Normalizes entities and coordinates server and live-event updates."],["03","WebSocket layer","Pushes focused status changes into the active workspace."],["04","React UI","Composes the permitted actions and views for each persona."]],outcome:"The result was a faster dashboard with a smaller delivery footprint and a UI model that could support four personas without fragmenting into four separate products.",lesson:"Role-based products become easier to scale when permissions are treated as domain data—not component-level conditionals."},{slug:"realtime-financial-dashboard",number:"02",title:"Real-Time Financial Dashboard",eyebrow:"Low-latency market interface",summary:"A high-density market dashboard that keeps institutional analysts close to live data without sacrificing interaction speed.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3ODI4MDcwODF8MA&ixlib=rb-4.1.0&q=85",imageAlt:"Dark analytics dashboard with charts and data visualizations",stack:["React","WebSockets","D3","Web Workers","Zustand"],facts:[["Role","Frontend engineering"],["Product","Live market dashboard"],["Audience","Institutional analysts"],["Focus","Latency + rendering"]],metrics:[{value:"<200ms",label:"live-grid update latency"},{value:"30",label:"symbols updating concurrently"},{value:"5k+",label:"rows rendered smoothly"}],challenge:{title:"Fresh data is useless if the interface falls behind.",body:["A live financial surface has two clocks: the stream producing market changes and the browser trying to display them. When every tick triggers expensive reconciliation, the UI becomes the bottleneck precisely when the market becomes most active.","The dashboard needed to keep a 30-symbol grid below 200ms update latency while still supporting filtering, sorting, inspection, and more than 5,000 visible records without dropped frames."]},approach:[{index:"01",title:"Separate ingestion from rendering",text:"WebSocket messages entered a dedicated data pipeline instead of updating components directly. This kept transport frequency independent from the cadence at which React committed visual changes."},{index:"02",title:"Move diffing off the main thread",text:"A Web Worker compared incoming snapshots, calculated focused patches, and returned only meaningful changes. The main thread stayed available for pointer, keyboard, and scrolling interactions."},{index:"03",title:"Render only what exists on screen",text:"Row virtualization constrained DOM work to the visible window. Stable row identities and memoized cells prevented unrelated instruments from re-rendering when a single value moved."},{index:"04",title:"Use the right tool for each layer",text:"Zustand handled focused interface state, D3 supplied calculation primitives, and React remained responsible for composition. Each layer stayed small enough to reason about under load."}],architecture:[["01","Market stream","Delivers continuous symbol updates over WebSockets."],["02","Worker pipeline","Normalizes, diffs, and batches updates away from the main thread."],["03","State boundary","Publishes compact patches to the relevant interface subscribers."],["04","Virtualized grid","Paints the current viewport and preserves fluid interaction."]],outcome:"The final pipeline kept a 30-symbol live grid under 200ms while smoothly presenting more than 5,000 rows—without making the interface feel like a passive data feed.",lesson:"Real-time UI performance improves when data frequency, state frequency, and paint frequency are designed as three separate concerns."},{slug:"webflow-react-hybrid",number:"03",title:"Webflow + React Hybrid",eyebrow:"Composable web architecture",summary:"A hybrid delivery model that gives marketing the speed of Webflow and product teams the depth of React—under one domain and one user journey.",image:"https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmslMjB0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3ODI4MDcwODB8MA&ixlib=rb-4.1.0&q=85",imageAlt:"Abstract geometric architecture representing a hybrid web platform",stack:["React","Webflow","Vite","Module Federation","Cloudflare"],facts:[["Role","Frontend architecture"],["Product","Marketing + product web"],["Delivery","Single-domain hybrid"],["Focus","Team autonomy"]],metrics:[{value:"40%",label:"faster marketing iteration"},{value:"Hours",label:"to publish new pages"},{value:"1",label:"shared domain and journey"}],challenge:{title:"Two teams needed different kinds of speed.",body:["Marketing needed to publish and revise campaign pages without waiting for an engineering cycle. Product needed the state management, testing, and component architecture of React. Forcing either team into the other’s toolchain slowed both down.","The architectural goal was not merely to place two sites beside each other. Authentication, analytics, navigation, performance, and the domain boundary still had to feel like one deliberate product."]},approach:[{index:"01",title:"Draw a clear ownership boundary",text:"Webflow owned editorial and campaign surfaces; React owned authenticated and interaction-heavy product experiences. URL conventions made that boundary legible to teams and infrastructure."},{index:"02",title:"Share the experience layer",text:"Design tokens, navigation rules, analytics events, and authentication state formed the contract between surfaces. Users encountered one brand and one journey even though teams shipped independently."},{index:"03",title:"Compose where it adds value",text:"Vite and Module Federation enabled selected React capabilities to appear across boundaries without turning every marketing page into a JavaScript application."},{index:"04",title:"Route at the edge",text:"Cloudflare handled path-based delivery on a single domain. The routing layer kept deployment ownership separate while preserving shared cookies, analytics continuity, and clean public URLs."}],architecture:[["01","Cloudflare edge","Routes each request to the correct independently deployed surface."],["02","Webflow","Owns fast-moving editorial and campaign content."],["03","React application","Owns authenticated workflows and complex interaction."],["04","Shared contract","Aligns identity, tokens, navigation, and analytics across both."]],outcome:"Marketing could ship pages in hours and iterate 40% faster without engineering tickets, while product retained a robust React architecture—all on a shared domain with common authentication and analytics.",lesson:"A hybrid platform succeeds when its boundaries are explicit in the architecture but invisible in the customer journey."}],ov=o=>di.find(u=>u.slug===o);function Yc({direction:o="right"}){return A.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",className:`case-arrow case-arrow--${o}`,children:A.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})}function cv(){return A.jsxs("header",{className:"case-nav",children:[A.jsxs(Da,{className:"case-logo",to:"/","aria-label":"Back to portfolio",children:["MJ",A.jsx("span",{children:"."})]}),A.jsxs(Da,{className:"case-back",to:"/#projects",children:[A.jsx(Yc,{direction:"left"}),"All projects"]})]})}function sv({value:o,label:u,index:m}){return A.jsxs("article",{className:"case-metric","data-aos":"fade-up","data-aos-delay":m*80,children:[A.jsx("strong",{children:o}),A.jsx("span",{children:u})]})}function uv(){const{slug:o}=oh(),u=ov(o);if(E.useEffect(()=>{if(window.scrollTo({top:0,behavior:"auto"}),!u)return;const d=document.title;return document.title=`${u.title} Case Study · Manmohan Jangra`,()=>{document.title=d}},[o,u]),!u)return A.jsx(gh,{to:"/",replace:!0});const m=di.findIndex(d=>d.slug===u.slug),c=di[(m+1)%di.length];return A.jsxs("main",{className:"case-page",children:[A.jsx(cv,{}),A.jsxs("section",{className:"case-hero","data-number":u.number,children:[A.jsx("div",{className:"case-hero__noise","aria-hidden":"true"}),A.jsxs("div",{className:"case-shell case-hero__content",children:[A.jsxs("div",{className:"case-kicker","data-aos":"fade-down",children:[A.jsxs("span",{children:["Case study / ",u.number]}),A.jsx("span",{children:u.eyebrow})]}),A.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"60",children:u.title}),A.jsx("p",{className:"case-deck","data-aos":"fade-up","data-aos-delay":"120",children:u.summary}),A.jsx("div",{className:"case-tags","data-aos":"fade-up","data-aos-delay":"180",children:u.stack.map(d=>A.jsx("span",{children:d},d))})]})]}),A.jsxs("div",{className:"case-shell",children:[A.jsxs("figure",{className:"case-cover","data-aos":"zoom-out","data-aos-duration":"900",children:[A.jsx("img",{src:u.image,alt:u.imageAlt}),A.jsxs("figcaption",{children:[u.number," / Engineering case study"]})]}),A.jsx("section",{className:"case-facts","aria-label":"Project facts","data-aos":"fade-up",children:u.facts.map(([d,x])=>A.jsxs("div",{children:[A.jsx("span",{children:d}),A.jsx("strong",{children:x})]},d))}),A.jsxs("section",{className:"case-section case-section--split",children:[A.jsx("div",{className:"case-section__label","data-aos":"fade-right",children:"01 / The challenge"}),A.jsxs("div",{className:"case-copy","data-aos":"fade-up",children:[A.jsx("h2",{children:u.challenge.title}),u.challenge.body.map(d=>A.jsx("p",{children:d},d))]})]}),A.jsx("section",{className:"case-metrics","aria-label":"Project outcomes",children:u.metrics.map((d,x)=>A.jsx(sv,{...d,index:x},d.label))}),A.jsxs("section",{className:"case-section",children:[A.jsxs("div",{className:"case-section__heading","data-aos":"fade-up",children:[A.jsx("span",{children:"02 / The approach"}),A.jsx("h2",{children:"Decisions that shaped the build."})]}),A.jsx("div",{className:"case-decisions",children:u.approach.map((d,x)=>A.jsxs("article",{className:"case-decision","data-aos":"fade-up","data-aos-delay":x%2*80,children:[A.jsx("span",{children:d.index}),A.jsx("h3",{children:d.title}),A.jsx("p",{children:d.text})]},d.title))})]}),A.jsxs("section",{className:"case-section case-architecture",children:[A.jsxs("div",{className:"case-section__heading","data-aos":"fade-up",children:[A.jsx("span",{children:"03 / System flow"}),A.jsx("h2",{children:"A simple path through a complex system."})]}),A.jsx("div",{className:"case-flow",children:u.architecture.map(([d,x,h],U)=>A.jsxs("article",{"data-aos":"fade-left","data-aos-delay":U*70,children:[A.jsx("span",{children:d}),A.jsxs("div",{children:[A.jsx("h3",{children:x}),A.jsx("p",{children:h})]}),U<u.architecture.length-1&&A.jsx(Yc,{})]},x))})]}),A.jsxs("section",{className:"case-section case-result",children:[A.jsxs("div",{"data-aos":"fade-right",children:[A.jsx("span",{children:"04 / The outcome"}),A.jsx("h2",{children:"Built to move the work forward."})]}),A.jsxs("div",{className:"case-result__copy","data-aos":"fade-up",children:[A.jsx("p",{children:u.outcome}),A.jsxs("blockquote",{children:[A.jsx("span",{children:"Key lesson"}),"“",u.lesson,"”"]})]})]})]}),A.jsx("footer",{className:"case-next",children:A.jsxs(Da,{to:`/case-study/${c.slug}`,children:[A.jsxs("span",{children:["Next case study / ",c.number]}),A.jsx("strong",{children:c.title}),A.jsx(Yc,{})]})})]})}const dv={class:"className",for:"htmlFor",tabindex:"tabIndex",crossorigin:"crossOrigin","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","fill-rule":"fillRule","clip-rule":"clipRule"};function mv(o){return o.split(";").reduce((u,m)=>{const c=m.indexOf(":");if(c===-1)return u;const d=m.slice(0,c).trim(),x=m.slice(c+1).trim();if(!d||!x)return u;const h=d.startsWith("--")?d:d.replace(/-([a-z])/g,(U,Q)=>Q.toUpperCase());return u[h]=x,u},{})}function Lx(o,u="root"){if(o.nodeType===Node.TEXT_NODE)return o.textContent;if(o.nodeType!==Node.ELEMENT_NODE)return null;const m={key:u};for(const d of o.attributes){const x=dv[d.name]||d.name;x==="style"?m.style=mv(d.value):x==="value"&&["INPUT","TEXTAREA"].includes(o.tagName)?m.defaultValue=d.value:d.value===""&&["download","disabled","checked","selected"].includes(x)?m[x]=!0:m[x]=d.value}const c=Array.from(o.childNodes).map((d,x)=>Lx(d,`${u}-${x}`));return E.createElement(o.tagName.toLowerCase(),m,...c)}function xv(){const o=new DOMParser().parseFromString(iv,"text/html"),u=o.querySelector("main");return o.querySelectorAll("section[id]").forEach((m,c)=>{m.setAttribute("data-aos",c===0?"fade":"fade-up"),m.setAttribute("data-aos-duration",c===0?"900":"700"),m.setAttribute("data-aos-easing","ease-out-cubic"),m.setAttribute("data-aos-once","true"),m.setAttribute("data-aos-offset",c===0?"0":"90")}),{css:Array.from(o.querySelectorAll("head style")).map(m=>m.textContent).join(`
`),main:u}}const fv=["About","Skills","Experience","Projects","Contact"];function pv({open:o,onNavigate:u}){return o?A.jsxs("div",{className:"fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden",children:[A.jsx("button",{type:"button","aria-label":"Close menu",className:"absolute top-4 right-4 text-3xl text-white",onClick:()=>u(null),children:"×"}),fv.map(m=>A.jsx("button",{type:"button",className:"font-display text-xl uppercase tracking-[0.2em] text-white hover:text-[var(--accent)] transition-colors",onClick:()=>u(m.toLowerCase()),children:m},m))]}):null}function gx({main:o}){const[u,m]=E.useState(!1),c=E.useMemo(()=>Lx(o),[o]),d=qc(),x=Wr();E.useEffect(()=>{if(!x.hash)return;const f=window.setTimeout(()=>{document.querySelector(x.hash)?.scrollIntoView({behavior:"smooth"})},50);return()=>window.clearTimeout(f)},[x.hash]);const h=f=>{m(!1),f&&document.getElementById(f)?.scrollIntoView({behavior:"smooth"})};E.useEffect(()=>{const f=document.querySelector('[data-testid="navbar"]'),B=()=>{f?.classList.toggle("bg-black/80",window.scrollY>20),f?.classList.toggle("backdrop-blur-md",window.scrollY>20),f?.classList.toggle("border-b",window.scrollY>20),f?.classList.toggle("border-white/10",window.scrollY>20)};return B(),window.addEventListener("scroll",B,{passive:!0}),()=>window.removeEventListener("scroll",B)},[]);const U=f=>{const B=f.target.closest("button, a");if(!B)return;const y=B.dataset.testid||"",S=B.getAttribute("href")||"";if(S.startsWith("/case-study/")){f.preventDefault(),d(S);return}if(y==="navbar-mobile-toggle"){f.preventDefault(),m(!0);return}if(y==="navbar-logo"){f.preventDefault(),h("hero");return}if(y.startsWith("nav-link-")){f.preventDefault(),h(y.replace("nav-link-",""));return}y==="hero-contact-btn"&&(f.preventDefault(),h("contact"))},Q=f=>{if(!f.target.matches('[data-testid="contact-form"]'))return;f.preventDefault();const B=new FormData(f.target),y=encodeURIComponent(`Portfolio enquiry from ${B.get("name")||"a visitor"}`),S=encodeURIComponent(`${B.get("message")||""}

From: ${B.get("name")||""}
Email: ${B.get("email")||""}`);window.location.href=`mailto:manmohanjangra2528@gmail.com?subject=${y}&body=${S}`};return A.jsxs(A.Fragment,{children:[A.jsx("div",{className:"App",onClick:U,onSubmit:Q,children:c}),A.jsx(pv,{open:u,onNavigate:h})]})}function hv(){const[{css:o,main:u}]=E.useState(xv),m=Wr();return E.useEffect(()=>{yx.init({once:!0,mirror:!1,disable:()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches})},[]),E.useEffect(()=>{const c=window.setTimeout(()=>yx.refreshHard(),80);return()=>window.clearTimeout(c)},[m.pathname]),A.jsxs(A.Fragment,{children:[A.jsx("style",{children:o}),A.jsxs(Fh,{children:[A.jsx(oi,{path:"/",element:A.jsx(gx,{main:u})}),A.jsx(oi,{path:"/case-study/:slug",element:A.jsx(uv,{})}),A.jsx(oi,{path:"*",element:A.jsx(gx,{main:u})})]})]})}B0.createRoot(document.getElementById("root")).render(A.jsx(E.StrictMode,{children:A.jsx(Xh,{children:A.jsx(hv,{})})}));
