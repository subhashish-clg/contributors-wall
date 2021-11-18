"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{7091:function(e,n,t){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{V:function(){return ce}});var a,l,c,s=t(7294);function f(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,o):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,f),u}function d(e){var n=e.props,t=e.slot,i=e.defaultTag,u=e.features,c=e.visible,s=void 0===c||c,d=e.name;if(s)return v(n,t,i,d);var p=null!=u?u:a.None;if(p&a.Static){var m=n.static,g=void 0!==m&&m,h=o(n,["static"]);if(g)return v(h,t,i,d)}if(p&a.RenderStrategy){var y,E=n.unmount,w=void 0===E||E,b=o(n,["unmount"]);return f(w?l.Unmount:l.Hidden,((y={})[l.Unmount]=function(){return null},y[l.Hidden]=function(){return v(r({},b,{hidden:!0,style:{display:"none"}}),t,i,d)},y))}return v(n,t,i,d)}function v(e,n,t,r){var i;void 0===n&&(n={});var a=m(e,["unmount","static"]),l=a.as,c=void 0===l?t:l,f=a.children,d=a.refName,v=void 0===d?"ref":d,p=o(a,["as","children","refName"]),g=void 0!==e.ref?((i={})[v]=e.ref,i):{},h="function"===typeof f?f(n):f;if(p.className&&"function"===typeof p.className&&(p.className=p.className(n)),c===s.Fragment&&Object.keys(p).length>0){if(!(0,s.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(h,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,i=r.value;void 0!==e[i]&&void 0!==n[i]&&Object.assign(o,((t={})[i]=function(t){t.defaultPrevented||e[i](t),t.defaultPrevented||n[i](t)},t))},a=u(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(m(p,["ref"])),h.props,["onClick"]),g))}return(0,s.createElement)(c,Object.assign({},m(p,["ref"]),c!==s.Fragment&&g),h)}function p(e){var n;return Object.assign((0,s.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function m(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=u(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}function g(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,s.useRef)(n);return(0,s.useEffect)((function(){r.current=n}),[n]),(0,s.useCallback)((function(e){for(var n,t=u(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function h(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var i=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!i||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&i}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(a||(a={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(l||(l={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(c||(c={}));var y={serverHandoffComplete:!1};function E(){var e=(0,s.useState)(y.serverHandoffComplete),n=e[0],t=e[1];return(0,s.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,s.useEffect)((function(){!1===y.serverHandoffComplete&&(y.serverHandoffComplete=!0)}),[]),n}var w="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,b=0;function C(){return++b}function S(){var e=E(),n=(0,s.useState)(e?C:null),t=n[0],r=n[1];return w((function(){null===t&&r(C())}),[t]),null!=t?""+t:void 0}function O(e,n,t){var r=(0,s.useRef)(n);r.current=n,(0,s.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}var A,x,T,k,F,N=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function R(e){null==e||e.focus({preventScroll:!0})}function P(e,n){var t=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(N))}(e),r=document.activeElement,o=function(){if(n&(A.First|A.Next))return T.Next;if(n&(A.Previous|A.Last))return T.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=function(){if(n&A.First)return 0;if(n&A.Previous)return Math.max(0,t.indexOf(r))-1;if(n&A.Next)return Math.max(0,t.indexOf(r))+1;if(n&A.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=n&A.NoScroll?{preventScroll:!0}:{},a=0,l=t.length,c=void 0;do{var s;if(a>=l||a+l<=0)return x.Error;var f=i+a;if(n&A.WrapAround)f=(f+l)%l;else{if(f<0)return x.Underflow;if(f>=l)return x.Overflow}null==(s=c=t[f])||s.focus(u),a+=o}while(c!==document.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),x.Success}function L(e,n,t){void 0===n&&(n=F.All);var r=void 0===t?{}:t,o=r.initialFocus,i=r.containers,a=(0,s.useRef)("undefined"!==typeof window?document.activeElement:null),l=(0,s.useRef)(null),f=function(){var e=(0,s.useRef)(!1);return(0,s.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}(),d=Boolean(n&F.RestoreFocus),v=Boolean(n&F.InitialFocus);(0,s.useEffect)((function(){d&&(a.current=document.activeElement)}),[d]),(0,s.useEffect)((function(){if(d)return function(){R(a.current),a.current=null}}),[d]),(0,s.useEffect)((function(){if(v&&e.current){var n=document.activeElement;if(null==o?void 0:o.current){if((null==o?void 0:o.current)===n)return void(l.current=n)}else if(e.current.contains(n))return void(l.current=n);(null==o?void 0:o.current)?R(o.current):P(e.current,A.First)===x.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=document.activeElement}}),[e,o,v]),O("keydown",(function(t){n&F.TabLock&&e.current&&t.key===c.Tab&&(t.preventDefault(),P(e.current,(t.shiftKey?A.Previous:A.Next)|A.WrapAround)===x.Success&&(l.current=document.activeElement))})),O("focus",(function(t){if(n&F.FocusLock){var r=new Set(null==i?void 0:i.current);if(r.add(e),r.size){var o=l.current;if(o&&f.current){var a=t.target;a&&a instanceof HTMLElement?!function(e,n){for(var t,r=u(e);!(t=r()).done;){var o;if(null==(o=t.value.current)?void 0:o.contains(n))return!0}return!1}(r,a)?(t.preventDefault(),t.stopPropagation(),R(o)):(l.current=a,R(a)):R(l.current)}}}}),!0)}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(A||(A={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(x||(x={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(T||(T={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(k||(k={})),function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(F||(F={}));var j=new Set,D=new Map;function I(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function M(e){var n=D.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}var H=(0,s.createContext)(!1);function U(e){return s.createElement(H.Provider,{value:e.force},e.children)}var Y=t(3935);function W(){var e=(0,s.useContext)(H),n=(0,s.useContext)(z),t=(0,s.useState)((function(){if(!e&&null!==n)return null;if("undefined"===typeof window)return null;var t=document.getElementById("headlessui-portal-root");if(t)return t;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=t[0],o=t[1];return(0,s.useEffect)((function(){e||null!==n&&o(n.current)}),[n,o,e]),r}var B=s.Fragment;function _(e){var n=e,t=W(),r=(0,s.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=E();return w((function(){if(t&&r)return t.appendChild(r),function(){var e;t&&(r&&(t.removeChild(r),t.childNodes.length<=0&&(null==(e=t.parentElement)||e.removeChild(t))))}}),[t,r]),o&&t&&r?(0,Y.createPortal)(d({props:n,defaultTag:B,name:"Portal"}),r):null}var q=s.Fragment,z=(0,s.createContext)(null);_.Group=function(e){var n=e.target,t=o(e,["target"]);return s.createElement(z.Provider,{value:n},d({props:t,defaultTag:q,name:"Popover.Group"}))};var G=(0,s.createContext)(null);function V(){var e=(0,s.useContext)(G);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return e}var K,$=(0,s.createContext)(null);$.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(K||(K={}));var J,Q,X,Z,ee=(0,s.createContext)((function(){}));function ne(e){var n=e.children,t=e.onUpdate,r=e.type,o=e.element,i=(0,s.useContext)(ee),u=(0,s.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==t||t.apply(void 0,n),i.apply(void 0,n)}),[i,t]);return w((function(){return u(J.Add,r,o),function(){return u(J.Remove,r,o)}}),[u,r,o]),s.createElement(ee.Provider,{value:u},n)}ee.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(J||(J={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(X||(X={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(Z||(Z={}));var te=((Q={})[Z.SetTitleId]=function(e,n){return e.titleId===n.id?e:r({},e,{titleId:n.id})},Q),re=(0,s.createContext)(null);function oe(e){var n=(0,s.useContext)(re);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+ce.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,oe),t}return n}function ie(e,n){return f(n.type,te,e,n)}re.displayName="DialogContext";var ue=a.RenderStrategy|a.Static,ae=p((function(e,n){var t,i=e.open,a=e.onClose,l=e.initialFocus,v=o(e,["open","onClose","initialFocus"]),p=(0,s.useState)(0),m=p[0],h=p[1],y=(0,s.useContext)($);void 0===i&&null!==y&&(i=f(y,((t={})[K.Open]=!0,t[K.Closed]=!1,t)));var b=(0,s.useRef)(new Set),C=(0,s.useRef)(null),A=g(C,n),x=e.hasOwnProperty("open")||null!==y,T=e.hasOwnProperty("onClose");if(!x&&!T)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!T)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof i)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+i);if("function"!==typeof a)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+a);var k=i?X.Open:X.Closed,N=null!==y?y===K.Open:k===X.Open,R=(0,s.useReducer)(ie,{titleId:null,descriptionId:null}),P=R[0],H=R[1],Y=(0,s.useCallback)((function(){return a(!1)}),[a]),W=(0,s.useCallback)((function(e){return H({type:Z.SetTitleId,id:e})}),[H]),B=E()&&k===X.Open,q=m>1,z=null!==(0,s.useContext)(re);L(C,B?f(q?"parent":"leaf",{parent:F.RestoreFocus,leaf:F.All}):F.None,{initialFocus:l,containers:b}),function(e,n){void 0===n&&(n=!0),w((function(){if(n&&e.current){var t=e.current;j.add(t);for(var r,o=u(D.keys());!(r=o()).done;){var i=r.value;i.contains(t)&&(M(i),D.delete(i))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var n,t=u(j);!(n=t()).done;){var r=n.value;if(e.contains(r))return}1===j.size&&(D.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),I(e))}})),function(){if(j.delete(t),j.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!D.has(e)){for(var n,t=u(j);!(n=t()).done;){var r=n.value;if(e.contains(r))return}D.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),I(e)}}));else for(var e,n=u(D.keys());!(e=n()).done;){var r=e.value;M(r),D.delete(r)}}}}),[n])}(C,!!q&&B),O("mousedown",(function(e){var n,t=e.target;k===X.Open&&(q||(null==(n=C.current)?void 0:n.contains(t))||Y())})),O("keydown",(function(e){e.key===c.Escape&&k===X.Open&&(q||(e.preventDefault(),e.stopPropagation(),Y()))})),(0,s.useEffect)((function(){if(k===X.Open&&!z){var e=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=t+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=n}}}),[k,z]),(0,s.useEffect)((function(){if(k===X.Open&&C.current){var e=new IntersectionObserver((function(e){for(var n,t=u(e);!(n=t()).done;){var r=n.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&Y()}}));return e.observe(C.current),function(){return e.disconnect()}}}),[k,C,Y]);var V=function(){var e=(0,s.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(G.Provider,{value:r},e.children)}}),[t])]}(),Q=V[0],ee=V[1],te="headlessui-dialog-"+S(),oe=(0,s.useMemo)((function(){return[{dialogState:k,close:Y,setTitleId:W},P]}),[k,P,Y,W]),ae=(0,s.useMemo)((function(){return{open:k===X.Open}}),[k]),le={ref:A,id:te,role:"dialog","aria-modal":k===X.Open||void 0,"aria-labelledby":P.titleId,"aria-describedby":Q,onClick:function(e){e.stopPropagation()}},ce=v;return s.createElement(ne,{type:"Dialog",element:C,onUpdate:(0,s.useCallback)((function(e,n,t){var r;"Dialog"===n&&f(e,((r={})[J.Add]=function(){b.current.add(t),h((function(e){return e+1}))},r[J.Remove]=function(){b.current.add(t),h((function(e){return e-1}))},r))}),[])},s.createElement(U,{force:!0},s.createElement(_,null,s.createElement(re.Provider,{value:oe},s.createElement(_.Group,{target:C},s.createElement(U,{force:!1},s.createElement(ee,{slot:ae,name:"Dialog.Description"},d({props:r({},ce,le),slot:ae,defaultTag:"div",features:ue,visible:N,name:"Dialog"}))))))))})),le=p((function e(n,t){var o=oe([ce.displayName,e.name].join("."))[0],i=o.dialogState,u=o.close,a=g(t),l="headlessui-dialog-overlay-"+S(),c=(0,s.useCallback)((function(e){if(e.target===e.currentTarget){if(h(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),u()}}),[u]),f=(0,s.useMemo)((function(){return{open:i===X.Open}}),[i]);return d({props:r({},n,{ref:a,id:l,"aria-hidden":!0,onClick:c}),slot:f,defaultTag:"div",name:"Dialog.Overlay"})}));var ce=Object.assign(ae,{Overlay:le,Title:function e(n){var t=oe([ce.displayName,e.name].join("."))[0],o=t.dialogState,i=t.setTitleId,u="headlessui-dialog-title-"+S();(0,s.useEffect)((function(){return i(u),function(){return i(null)}}),[u,i]);var a=(0,s.useMemo)((function(){return{open:o===X.Open}}),[o]);return d({props:r({},n,{id:u}),slot:a,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var n=V(),t="headlessui-description-"+S();w((function(){return n.register(t)}),[t,n.register]);var o=e,i=r({},n.props,{id:t});return d({props:r({},o,i),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}})}}]);