!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FormContainer_FormContainerSkin]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FormContainer_FormContainerSkin]"]=t(require("react")):e["rb_wixui.thunderbolt[FormContainer_FormContainerSkin]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={40841:function(e,t){var n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{components:function(){return b}});var e=r(448),t=r.n(e),n=r(5329),i=r.n(n),a=r(40841),s=r.n(a);const d=(...e)=>e.map((e=>`wixui-${e}`)).join(" "),u="mesh-container-content",c="inline-content",p=e=>i().createElement("div",{key:e.props.id+"-rotated-wrapper","data-mesh-id":e.props.id+"-rotated-wrapper"},e);var l=e=>{const n=e.id,r=e.className,o=e.wedges,a=void 0===o?[]:o,d=e.rotatedComponents,l=void 0===d?[]:d,f=e.children,m=e.fixedComponents,v=void 0===m?[]:m,h=e.extraClassName,b=void 0===h?"":h,y=e.renderRotatedComponents,x=void 0===y?p:y,C=i().Children.toArray(f()),g=[],S=[];C.forEach((e=>v.includes(e.props.id)?g.push(e):S.push(e)));const _=(e=>{const n=e.wedges,r=e.rotatedComponents,o=e.childrenArray,a=e.renderRotatedComponents,s=r.reduce(((e,n)=>t()({},e,{[n]:!0})),{});return[...o.map((e=>{return s[(t=e,t.props.id.split("__")[0])]?a(e):e;var t})),...n.map((e=>i().createElement("div",{key:e,"data-mesh-id":e})))]})({childrenArray:S,rotatedComponents:l,wedges:a,renderRotatedComponents:x});return i().createElement("div",t()({},(e=>Object.entries(e).reduce(((e,t)=>{let n=t[0],r=t[1];return n.includes("data-")&&(e[n]=r),e}),{}))(e),{"data-mesh-id":n+"inlineContent","data-testid":c,className:s()(r,b)}),i().createElement("div",{"data-mesh-id":n+"inlineContent-gridContainer","data-testid":u},_),g)};var f={root:"form"};const m=e=>{const t=e.id,r=e.className,o=e.onSubmit,i=e.children,a=e.onMouseEnter,s=e.onMouseLeave;return n.createElement("form",{id:t,onMouseEnter:a,onMouseLeave:s,className:r,onSubmit:e=>{e.preventDefault(),o&&(e.persist(),o(e))}},i)};var v="JVi7i2",h="d3n4V3";const b={FormContainer_FormContainerSkin:{component:e=>{const r=e.id,o=e.meshProps,i=e.onSubmit,a=e.children,u=e.onMouseEnter,c=e.onMouseLeave,p=e.inlineBorder,b=e.className,y=e.customClassNames,x=void 0===y?[]:y,C=t()({id:r},o,{children:a});return n.createElement(m,{id:r,className:s()(p?"":v,b,d(f.root,...x)),onSubmit:i,onMouseEnter:u,onMouseLeave:c},p&&n.createElement("div",{className:s()(v,h)}),n.createElement(l,C))}}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FormContainer_FormContainerSkin].eb57510d.bundle.min.js.map