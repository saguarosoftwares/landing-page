(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[581],{581:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>h});var r,i,o,u=e(5043),c=e(3950),s=e.n(c),a=e(7774),l=e(7528),d=e(5527);const f=d.Ay.section(r||(r=(0,l.A)(["\n  height: auto;\n  width: 100%;\n  position: relative;\n  // padding: 7.5rem 0 3rem;\n  // text-align: center;\n  display: flex;\n  justify-content: center;\n\n  line-height: 0;\n\n\n\n  @media screen and (max-width: 1900px) {\n    // padding: 5.5rem 0 3rem;\n    // background-position: center;\n    // background-size: var(--background-width) auto;\n\n    // background-position: top;\n\n    // background-size: contain;\n\n  }\n\n\n  @media screen and (max-width: 1024px) {\n    // height: 60vh\n\n    // padding: 5.5rem 0 3rem;\n    // background-position: 60% center;\n    // background-position: bottom;\n\n    // background-size: contain;\n\n  }\n"])));(0,d.Ay)("p")(i||(i=(0,l.A)(["\n  padding: 0.75rem 0 0.75rem;\n"]))),(0,d.Ay)("div")(o||(o=(0,l.A)(["\n  max-width: 570px;\n\n  @media only screen and (max-width: 768px) {\n    max-width: 100%;\n  }\n"])));var g=e(579);const h=t=>{let{title:n,content:e,button:r,backgroundImage:i,t:o,id:c,svgInNavbar:l,setSvgInNavbar:d}=t;const[h,p]=(0,u.useState)("absolute"),v=(0,u.useRef)(null),m=(0,u.useRef)(null),x=(0,u.useRef)(null),y=(0,u.useRef)(null),b=(0,u.useRef)(null),w=(0,u.useRef)(null),[R,k]=((0,u.useRef)(!1),(0,u.useState)("6%")),[C,A]=(0,u.useState)("8%");return(0,u.useEffect)((()=>{if(!l&&m.current&&v.current){const t=m.current,n=v.current,e=new ResizeObserver((()=>{0!=t.getBoundingClientRect().height&&null==b.current&&(b.current=t.getBoundingClientRect().height,console.log("Daguaro height:",b.current)),0!=n.getBoundingClientRect().height&&null==w.current&&(w.current=n.getBoundingClientRect().height,console.log("Sun height:",w.current))}));return e.observe(t),()=>{e.disconnect()}}}),[]),(0,u.useEffect)((()=>{const t=s()((()=>{if(!l){const t=window.scrollY;window.requestAnimationFrame((()=>{if(x.current&&v.current&&m.current){const n=v.current,e=x.current,r=m.current,i=document.querySelector("#navbar"),o=(n.getBoundingClientRect(),r.getBoundingClientRect()),u=e.getBoundingClientRect();if(null===y.current&&(y.current=o.top-u.top),w.current=6*u.width/100,t>y.current?p("fixed"):p("absolute"),o.top>0&&"none"!==n.style.display){const n=o.top-u.top,e=Math.min(Math.max(t/n,0),1);if(b.current&&w.current){const t=w.current+(b.current-w.current)*e;k("".concat(t,"px"))}}else if(o.top<=0&&i&&"none"!==n.style.display&&b.current&&w.current){const n=i.getBoundingClientRect(),e=n.top-(y.current+u.top);let r=t-y.current;const o=Math.min(Math.max(r/e,0),1),c=n.height+(b.current-n.height)*(1-o);console.log(n.height),k("".concat(c,"px"));let s=.95*n.height/b.current;A("".concat(8-(8-8*s)*o,"%"))}if(i){const t=i.getBoundingClientRect();t&&t.top<=0?(d(!0),r.style.display="none",n.style.display="none"):(d(!1),r.style.display="flex",n.style.display="flex")}}}))}}),0);return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}}),[h,d]),(0,g.jsxs)(f,{id:c,style:{position:"relative",bottom:0,zIndex:2},ref:x,children:[(0,g.jsx)(a.k,{src:"/img/svg/LANDING_BUTTE_2.svg",style:{width:"100%",height:"100%",bottom:0,zIndex:1}}),(0,g.jsx)("div",{ref:v,style:{position:"fixed",top:"auto",width:"100%",height:"auto",zIndex:2,display:"flex",justifyContent:"center"},children:(0,g.jsx)(a.k,{id:"SUN",src:"/img/svg/SUN.svg",style:{width:"".concat(R),height:"100%",zIndex:2}})}),(0,g.jsx)("div",{ref:m,style:{position:h,bottom:"absolute"===h?0:"auto",width:"100%",height:"auto",zIndex:2,display:"flex",justifyContent:"center"},children:(0,g.jsx)(a.k,{id:"DAGUARO",src:"/img/svg/daguaro.svg",style:{width:"".concat(C),height:"100%",zIndex:2}})})]})}},1141:(t,n,e)=>{var r=e(143),i=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},143:t=>{var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},3950:(t,n,e)=>{var r=e(6686),i=e(4757),o=e(801),u=Math.max,c=Math.min;t.exports=function(t,n,e){var s,a,l,d,f,g,h=0,p=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var e=s,r=a;return s=a=void 0,h=n,d=t.apply(r,e)}function y(t){var e=t-g;return void 0===g||e>=n||e<0||v&&t-h>=l}function b(){var t=i();if(y(t))return w(t);f=setTimeout(b,function(t){var e=n-(t-g);return v?c(e,l-(t-h)):e}(t))}function w(t){return f=void 0,m&&s?x(t):(s=a=void 0,d)}function R(){var t=i(),e=y(t);if(s=arguments,a=this,g=t,e){if(void 0===f)return function(t){return h=t,f=setTimeout(b,n),p?x(t):d}(g);if(v)return clearTimeout(f),f=setTimeout(b,n),x(g)}return void 0===f&&(f=setTimeout(b,n)),d}return n=o(n)||0,r(e)&&(p=!!e.leading,l=(v="maxWait"in e)?u(o(e.maxWait)||0,n):l,m="trailing"in e?!!e.trailing:m),R.cancel=function(){void 0!==f&&clearTimeout(f),h=0,s=g=a=f=void 0},R.flush=function(){return void 0===f?d:w(i())},R}},6686:t=>{t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},4757:(t,n,e)=>{var r=e(6552);t.exports=function(){return r.Date.now()}},801:(t,n,e)=>{var r=e(1141),i=e(6686),o=e(9841),u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,a=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=i(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var e=c.test(t);return e||s.test(t)?a(t.slice(2),e?2:8):u.test(t)?NaN:+t}}}]);
//# sourceMappingURL=581.54671afc.chunk.js.map