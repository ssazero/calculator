(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(3),c=n.n(l),i=(n(9),n(1)),o=function(e){var t=["calculator__button"];return e.modifier&&t.push("calculator__button--"+e.modifier),a.a.createElement("div",{onClick:e.onClick,className:t.join(" ")},a.a.createElement("span",null,e.title))},u=function(e){return a.a.createElement("div",{className:"calculator__result"},a.a.createElement("div",{className:"calculator__operation"},e.error?e.error:e.operation),a.a.createElement("div",{className:"calculator__result-value"},null!==e.result?e.result:e.n2?e.n2:e.n1))},s=function(e,t){for(var n="",r=!1,a=e.length-1;a>=0;a--)")"===e.charAt(a)&&(r=!0),"("!==e.charAt(a)?r||(n+=e.charAt(a)):r=!1;return!n.includes("+")&&!n.includes("-")||"x"!==t&&"/"!==t?"-"!==e.charAt(0)||"("!==e.charAt(2)||")"!==e.charAt(e.length-2)||"%"===e.charAt(e.length-1)||"+"!==t&&"-"!==t?"("!==e.charAt(0)||")"!==e.charAt(e.length-2)||"%"===e.charAt(e.length-1)||"+"!==t&&"-"!==t?e+" "+t+" ":e.substring(1).slice(0,-2)+" "+t+" ":e.substring(3).slice(0,-1)+" "+t+" ":")"===e.charAt(e.length-2)&&"%"===e.charAt(e.length-1)?"("+e+")  "+t+" ":")"===e.charAt(e.length-2)?e+" "+t+" ":"("+e+")  "+t+" "},f=function(e,t,n){var r=e;return n?r=/(\(- \d+\))$|(\(- \d+.\d+\))$/.test(e)?r.replace(/(\(- \d+\))$|(\(- \d+.\d+\))$/,"".concat(Math.abs(n))):r.replace(new RegExp(String(n)+"$"),"(- ".concat(Math.abs(n),")")):(("/"===t||"x"===t||"-"===t||"+"===t||"."===t&&"."===e.charAt(e.length-1))&&(r="."===t?r.slice(0,-1):r.slice(0,-3)),r.includes("+")||r.includes("-")||r.includes("x")||r.includes("/")?r="- ("+r+")":"- "+r)},m=function(e,t,n,r,a){var l;if(a){if("+"===n)l=+e+t/100*e,l=Math.round(1e9*(l+Number.EPSILON))/1e9;else if("-"===n)l=+e-t/100*e,l=Math.round(1e9*(l+Number.EPSILON))/1e9;else if("x"===n)l=t/100*+e,l=Math.round(1e9*(l+Number.EPSILON))/1e9;else if("/"===n){if(0===Number(t))throw new Error("Cannot divide by 0!");l=+e/(t/100),l=Math.round(1e9*(l+Number.EPSILON))/1e9}}else if(null!==t&&n)switch(n){case"/":if(0===Number(t))throw new Error("Cannot divide by 0!");l=+Math.round(1e9*(+e/+t+Number.EPSILON))/1e9;break;case"x":l=+Math.round(1e9*(+e*+t+Number.EPSILON))/1e9;break;case"-":l=+Math.round(1e9*(+e-+t+Number.EPSILON))/1e9;break;case"+":default:l=+Math.round(1e9*(+e+ +t+Number.EPSILON))/1e9}r(l)},b=function(e){var t=Object(r.useState)("0"),n=Object(i.a)(t,2),l=n[0],c=n[1],b=Object(r.useState)(null),d=Object(i.a)(b,2),h=d[0],g=d[1],k=Object(r.useState)(null),E=Object(i.a)(k,2),N=E[0],v=E[1],S=Object(r.useState)(null),C=Object(i.a)(S,2),p=C[0],O=C[1],A=Object(r.useState)(""),_=Object(i.a)(A,2),x=_[0],j=_[1],w=Object(r.useState)(null),M=Object(i.a)(w,2),I=M[0],P=M[1],L=Object(r.useState)(!1),y=Object(i.a)(L,2),$=y[0],B=y[1],J=Object(r.useState)(!1),W=Object(i.a)(J,2),z=W[0],K=W[1];console.log("n1: "+l),console.log("n2: "+h),console.log("operator: "+p),console.log("result: "+N),console.log("last sign: "+I),console.log("Percentage mode: "+$),console.log("------------------");var R=function e(t){try{switch(t){case"%":!z&&p&&null!==h&&"="!==I&&"%"!==I&&"."!==I&&0!==Number(l)&&m(l,h,p,(function(e){c(e),v(e),B(!0),j((function(e){return e+"%"}))}),!0);break;case"N":var n;if("/"===I||"x"===I||"-"===I||"+"===I||0===Number(h)&&"/"===p||0===Number(l)||z)break;if(!N&&h&&0!==h){console.log("here"),g((function(e){return-1*e})),j(f(x,I,h));break}0!==l&&(n=-1*l,B(!1),v(n),c(n),O(null),g(null),j(f(x,I)));break;case"C":B(!1),c("0"),g(null),j(""),O(null),v(null),K(!1);break;case".":if("/"===I||"x"===I||"-"===I||"+"===I||"%"===x.charAt(x.length-1))break;if("0"===l||z){K(!1),j("0."),c("0.");break}if("="===I){if(String(l).includes("."))break;B(!1),j(l+"."),c(l+"."),v(null),g(null),O(null);break}if(p||"."===I){if(p&&"."!==I){if(String(h).includes("."))break;g((function(e){return null===e?0:e+"."})),j((function(e){return")"===e.charAt(e.length-1)?e.slice(0,-1)+String(t)+")":e+t}))}}else{if(String(l).includes("."))break;c((function(e){return e+"."})),j((function(e){return e+t}))}break;case"=":if("/"===I||"x"===I||"-"===I||"+"===I||!h&&!p)break;$?(m(l,h,p,(function(e){c(e),v(e)}),!0),j(h&&h<0?function(e){return e+" "+p+" (- "+Math.abs(h)+")%"}:function(e){return e+" "+p+" "+h+"%"})):("="===I&&h&&j(h<0?function(e){return e+" "+p+" (- "+Math.abs(h)+")"}:function(e){return e+" "+p+" "+h}),"."===x.charAt(x.length-1)&&j(x.slice(0,-1)),"."===String(h).charAt(String(h).length-1)&&g(Number(String(h).slice(0,-1))),m(l,h,p,(function(e){c(e),v(e)})));break;case"/":case"x":case"-":case"+":if(z)break;if("0"===l){c(0),O(t),j("0 "+t+" ");break}h&&g(null);var r=x;if("."===x.charAt(x.length-1)&&(r=x.slice(0,-1)),"/"===I||"x"===I||"-"===I||"+"===I){r=x.slice(0,-3),j(s(r,t)),O(t);break}null!==h&&"="!==I&&($?B(!1):m(l,h,p,(function(e){c(e),v(e)}))),O(t),j(s(r,t));break;default:if(z&&e("C"),("="===I||"%"===x.charAt(x.length-1))&&"0"!==l||"N"===I&&")"===x.charAt(x.length-1)&&null!==N){j(l+String(t)),c(l+String(t)),v(null),g(null),O(null);break}if(N)v(null),g(t),j((function(e){return e+t}));else if(p)p&&(0===h?(g(t),j((function(e){return e.slice(0,-1)+t}))):(g((function(e){return null===e?t:e+String(t)})),j((function(e){return")"===e.charAt(e.length-1)?e.slice(0,-1)+String(t)+")":e+String(t)}))));else{if(0===l&&0===I)break;c((function(e){return"0"===e?t:e+String(t)})),j((function(e){return e+t}))}}P(("/"===I||"x"===I||"-"===I||"+"===I)&&"."===t||("/"===I||"x"===I||"-"===I||"+"===I)&&"="===t||("/"===I||"x"===I||"-"===I||"+"===I)&&"%"===t||("/"===I||"x"===I||"-"===I||"+"===I)&&"N"===t?"+":"="===I&&"%"===t?"=":t)}catch(a){K(a.message),B(!1),c("0"),g(null),j(""),O(null),v(null)}};return a.a.createElement("div",{className:"calculator"},a.a.createElement(u,{error:z,n1:l,n2:h,result:N,operation:x}),a.a.createElement("div",{className:"calculator__controls"},a.a.createElement(o,{onClick:function(){return R("%")},modifier:"basic",title:"%"}),a.a.createElement(o,{onClick:function(){return R("N")},modifier:"basic",title:a.a.createElement("div",{className:"negation"},a.a.createElement("div",{className:"negation__up"},"+"),a.a.createElement("div",null,"/"),a.a.createElement("div",{className:"negation__down"},"-"))}),a.a.createElement(o,{onClick:function(){return R("C")},modifier:"basic",title:"C"}),a.a.createElement(o,{onClick:function(){return R("/")},modifier:"violet-1",title:"/"}),a.a.createElement(o,{onClick:function(){return R(7)},modifier:"basic",title:"7"}),a.a.createElement(o,{onClick:function(){return R(8)},modifier:"basic",title:"8"}),a.a.createElement(o,{onClick:function(){return R(9)},modifier:"basic",title:"9"}),a.a.createElement(o,{onClick:function(){return R("x")},modifier:"violet-2",title:"x"}),a.a.createElement(o,{onClick:function(){return R(4)},modifier:"basic",title:"4"}),a.a.createElement(o,{onClick:function(){return R(5)},modifier:"basic",title:"5"}),a.a.createElement(o,{onClick:function(){return R(6)},modifier:"basic",title:"6"}),a.a.createElement(o,{onClick:function(){return R("-")},modifier:"violet-3",title:"-"}),a.a.createElement(o,{onClick:function(){return R(1)},modifier:"basic",title:"1"}),a.a.createElement(o,{onClick:function(){return R(2)},modifier:"basic",title:"2"}),a.a.createElement(o,{onClick:function(){return R(3)},modifier:"basic",title:"3"}),a.a.createElement(o,{onClick:function(){return R("+")},modifier:"violet-4",title:"+"}),a.a.createElement(o,{onClick:function(){return R(0)},modifier:"basic",title:"0"}),a.a.createElement(o,{onClick:function(){return R(".")},modifier:"basic",title:","}),a.a.createElement(o,{onClick:function(){return R("=")},modifier:"pink",title:"="})))};var d=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(b,null),a.a.createElement("div",{className:"app__caption"},"Calculator by"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://samuelk.pl/",className:"link"},"Samuel K\u0119dziora")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.ca2a5df1.chunk.js.map