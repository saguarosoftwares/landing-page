(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[581],{581:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>f});var i,r,o,a=e(5043),u=e(3950),s=e.n(u),c=e(7774),d=e(7528),l=e(5527);const g=l.Ay.section(i||(i=(0,d.A)(["\n  background-color: #FFFFFF;\n  height: auto;\n  width: 100%;\n  position: relative;\n  // padding: 7.5rem 0 3rem;\n  // text-align: center;\n  display: flex;\n  justify-content: center;\n\n  line-height: 0;\n\n\n\n  @media screen and (max-width: 1900px) {\n    // padding: 5.5rem 0 3rem;\n    // background-position: center;\n    // background-size: var(--background-width) auto;\n\n    // background-position: top;\n\n    // background-size: contain;\n\n  }\n\n\n  @media screen and (max-width: 1024px) {\n    // height: 60vh\n\n    // padding: 5.5rem 0 3rem;\n    // background-position: 60% center;\n    // background-position: bottom;\n\n    // background-size: contain;\n\n  }\n"])));(0,l.Ay)("p")(r||(r=(0,d.A)(["\n  padding: 0.75rem 0 0.75rem;\n"]))),(0,l.Ay)("div")(o||(o=(0,d.A)(["\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n"])));var h=e(579);const f=t=>{let{id:n,svgInNavbar:e,setSvgInNavbar:i}=t;const{width:r}=(()=>{const[t,n]=(0,a.useState)({width:window.innerWidth,height:window.innerHeight});return(0,a.useEffect)((()=>{const t=()=>{n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)}),[]),t})(),[o,u]=(0,a.useState)("absolute"),d=(0,a.useRef)(null),l=(0,a.useRef)(null),f=(0,a.useRef)(null),[p,v]=(0,a.useState)("6%"),[m,x]=(0,a.useState)("8%"),y=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.current,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.current,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.current;const i=window.scrollY,o=document.querySelector("#navbar");if(t&&n&&e&&o&&(t.style.display="flex",o.getBoundingClientRect().top<=0&&o.getBoundingClientRect().height>0&&(t.style.display="none"),"none"!==t.style.display&&"none"!==n.style.display))if(n.getBoundingClientRect().top>0){n.style.opacity="1";const t=n.getBoundingClientRect().top-e.getBoundingClientRect().top,o=Math.min(Math.max(i/t,0),1),a=.06*r+(n.getBoundingClientRect().height-.06*r)*o;v("".concat(a,"px"))}else if(n.getBoundingClientRect().top<=0&&0!=i&&(n.style.opacity="0",o&&l.current&&f.current&&d.current)){const n=l.current.getBoundingClientRect().height;let e=i-l.current.getBoundingClientRect().height;const r=Math.min(Math.max(e/n,0),1),a=o.getBoundingClientRect().height+(l.current.getBoundingClientRect().height-o.getBoundingClientRect().height)*(1-r);v("".concat(a,"px"));let u=t.querySelector("#INNER_DAGUARO");u&&(u.style.display="flex")}};return(0,a.useEffect)((()=>{v("6%"),x("8%"),y()}),[r]),(0,a.useEffect)((()=>{const t=s()((()=>{window.requestAnimationFrame((()=>{y()}))}),0);return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[r]),(0,h.jsxs)(g,{id:n,style:{position:"relative",bottom:0,zIndex:2},ref:f,children:[(0,h.jsx)(c.k,{src:"/img/svg/LANDING_BUTTE_2.svg",style:{width:"100%",height:"100%",bottom:0,zIndex:1}}),(0,h.jsx)("div",{ref:d,style:{position:"fixed",top:"auto",width:"100%",height:"auto",zIndex:2,display:"flex",justifyContent:"center"},children:(0,h.jsx)(c.k,{id:"SUN",src:"/img/svg/SUN.svg",style:{width:"".concat(p),height:"100%",zIndex:2}})}),(0,h.jsx)("div",{ref:l,style:{position:o,bottom:"absolute"===o?0:"auto",width:"100%",height:"auto",zIndex:2,display:"flex",justifyContent:"center"},children:(0,h.jsx)(c.k,{id:"DAGUARO",src:"/img/svg/daguaro.svg",style:{width:"".concat(m),height:"100%",zIndex:2}})})]})}},1141:(t,n,e)=>{var i=e(143),r=/^\s+/;t.exports=function(t){return t?t.slice(0,i(t)+1).replace(r,""):t}},143:t=>{var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},3950:(t,n,e)=>{var i=e(6686),r=e(4757),o=e(801),a=Math.max,u=Math.min;t.exports=function(t,n,e){var s,c,d,l,g,h,f=0,p=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var e=s,i=c;return s=c=void 0,f=n,l=t.apply(i,e)}function y(t){var e=t-h;return void 0===h||e>=n||e<0||v&&t-f>=d}function w(){var t=r();if(y(t))return b(t);g=setTimeout(w,function(t){var e=n-(t-h);return v?u(e,d-(t-f)):e}(t))}function b(t){return g=void 0,m&&s?x(t):(s=c=void 0,l)}function R(){var t=r(),e=y(t);if(s=arguments,c=this,h=t,e){if(void 0===g)return function(t){return f=t,g=setTimeout(w,n),p?x(t):l}(h);if(v)return clearTimeout(g),g=setTimeout(w,n),x(h)}return void 0===g&&(g=setTimeout(w,n)),l}return n=o(n)||0,i(e)&&(p=!!e.leading,d=(v="maxWait"in e)?a(o(e.maxWait)||0,n):d,m="trailing"in e?!!e.trailing:m),R.cancel=function(){void 0!==g&&clearTimeout(g),f=0,s=h=c=g=void 0},R.flush=function(){return void 0===g?l:b(r())},R}},6686:t=>{t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},4757:(t,n,e)=>{var i=e(6552);t.exports=function(){return i.Date.now()}},801:(t,n,e)=>{var i=e(1141),r=e(6686),o=e(9841),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=i(t);var e=u.test(t);return e||s.test(t)?c(t.slice(2),e?2:8):a.test(t)?NaN:+t}}}]);
//# sourceMappingURL=581.78f2c763.chunk.js.map