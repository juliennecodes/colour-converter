(this["webpackJsonpcolour-converter"]=this["webpackJsonpcolour-converter"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(4),s=n.n(o),u=(n(9),n(2));n(10);function a(t){var e=function(t){var e,n,c;4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],c="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],c="0x"+t[5]+t[6]);return{red:e,green:n,blue:c}}(t),n=l(e.red),c=l(e.green),r=l(e.blue),o=Math.min(n,c,r),s=Math.max(n,c,r);return{hue:function(t,e,n,c,r){var o=0;o=0===c?0:r===t?(e-n)/c%6:r===e?(n-t)/c+2:(t-e)/c+4;(o=Math.round(60*o))<0&&(o+=360);return Math.round(o)}(n,c,r,s-o,s),saturation:function(t,e){var n=t-e,c=(t+e)/2,r=0;0===n?r=0:(r=n/(1-Math.abs(2*c-1)),r=Number((100*r).toFixed(1)));return Math.round(r)}(s,o),lightness:function(t,e){var n=(t+e)/2;return n=Number((100*n).toFixed(1)),Math.round(n)}(s,o)}}function l(t){return t/255}var i=n(0);function h(t){var e=t.setHSLColour,n=Object(c.useState)(null),r=Object(u.a)(n,2),o=r[0],s=r[1];return Object(i.jsxs)("form",{className:"colour-input-section",onSubmit:function(t){t.preventDefault(),e(a("#".concat(o)))},children:[Object(i.jsx)("label",{htmlFor:"colour-input",children:"Colour"}),Object(i.jsx)("input",{name:"colour-input",onChange:function(t){return s(t.target.value)}}),Object(i.jsx)("button",{children:"Convert to hsl"})]})}function j(t){var e=t.hslColour;return e?Object(i.jsx)(b,{hslColour:e}):Object(i.jsx)(x,{})}function b(t){var e=t.hslColour,n=e.hue,c=e.saturation,r=e.lightness;return Object(i.jsxs)("section",{className:"colour-output-section",children:[Object(i.jsx)("div",{className:"colour-swatch",style:{backgroundColor:"hsl(".concat(n,", ").concat(c,"%, ").concat(r,"%)"),height:"250px",width:"250px"}}),Object(i.jsx)("div",{className:"hsl-text",onClick:function(){return function(t,e,n){var c="hsl(".concat(t,", ").concat(e,"%, ").concat(n,"%)");navigator.clipboard.writeText(c)}(n,c,r)},children:Object(i.jsx)("p",{className:"hsl-value",children:"hsl(".concat(n,", ").concat(c,"%, ").concat(r,"%)")})})]})}function x(){return Object(i.jsxs)("section",{className:"colour-output-section",children:[Object(i.jsx)("div",{className:"colour-swatch",style:{border:"2px dotted black",height:"250px",width:"250px"}}),Object(i.jsx)("div",{className:"hsl-text",children:Object(i.jsx)("p",{children:"No colour just yet"})})]})}var d=function(){var t=Object(c.useState)(null),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("main",{children:[Object(i.jsx)("h1",{children:"Colour Converter"}),Object(i.jsx)(h,{setHSLColour:r}),Object(i.jsx)(j,{hslColour:n}),Object(i.jsx)("p",{children:"^ Click to Copy"})]})})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.98e6b286.chunk.js.map