(this["webpackJsonpyour-project-name"]=this["webpackJsonpyour-project-name"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(4),i=r.n(a),c=(r(9),r(2)),l=r(0),u=[[],[],[],[],[],[],[]],s=function(){var e=Object(n.useState)(JSON.parse(JSON.stringify(u))),t=Object(c.a)(e,2),r=t[0],o=t[1],a=Object(n.useState)({P1:"Player 1",P2:"Player 2"}),i=Object(c.a)(a,2),s=i[0],f=i[1],d=Object(n.useState)("P1"),p=Object(c.a)(d,2),P=p[0],j=p[1],h=Object(n.useState)(null),b=Object(c.a)(h,2),m=b[0],v=b[1],y=function e(){var t,r;return((t=window.prompt("Enter your name"))===(r=window.prompt("Enter your name"))||null!=t&&0===t.length||null!=r&&0===r.length||t&&0===t.trim().length||r&&0===r.trim().length)&&(alert("Error: give different names to players"),e()),{P1:t,P2:r}};Object(n.useEffect)((function(){var e=y(),t=e.P1,r=e.P2;f({P1:t,P2:r})}),[]);var O=function(){for(var e=0,t=0,n=0,o=0,a=0,i=0,c=0,l=0,u=r.length-1,s=0;s<u;s++)for(var f=0;f<5;f++)r[s][f]&&r[s][f+1]&&r[s][f+2]&&r[s][f+3]&&r[s][f]===r[s][f+1]&&r[s][f+1]===r[s][f+2]&&r[s][f+2]===r[s][f+3]&&("P1"===r[s][f]?e=1:t=1);for(var d=0;d<u;d++)for(var p=0;p<5;p++)r[d][p]&&r[d+1]&&r[d+1][p]&&r[d+2]&&r[d+3]&&r[d][p]===r[d+1][p]&&r[d+1][p]===r[d+2][p]&&r[d+2][p]===r[d+3][p]&&("P1"===r[d][p]?n=1:o=1);for(var P=0;P<u;P++)for(var j=0;j<5;j++)r[P][j]&&r[P+1]&&r[P+2]&&r[P+3]&&r[P+1][j+1]&&r[P+2][j+2]&&r[P+3][j+3]&&r[P][j]===r[P+1][j+1]&&r[P+1][j+1]===r[P+2][j+2]&&r[P+2][j+2]===r[P+3][j+3]&&("P1"===r[P][j]?a=1:i=1);for(var h=u;h>0;h--)for(var b=0;b<5;b++)r[h]&&r[h][b]&&r[h-1]&&r[h-2]&&r[h-3]&&r[h-1][b+1]&&r[h-2][b+2]&&r[h-3][b+3]&&r[h][b]===r[h-1][b+1]&&r[h-1][b+1]===r[h-2][b+2]&&r[h-2][b+2]===r[h-3][b+3]&&("P1"===r[h][b]?c=1:l=1);g(e,t,n,o,a,i,c,l)},g=function(e,t,r,n,o,a,i,c){return e?v(s.P1):t?v(s.P2):r?v(s.P1):n?v(s.P2):o?v(s.P1):a?v(s.P2):i?v(s.P1):c?v(s.P2):void 0},x={border:"1px solid black",width:"60px",height:"360px",display:"flex",flexDirection:"column",alignItems:"center"},w=function(){v(null),o(JSON.parse(JSON.stringify(u)))};return Object(l.jsxs)(l.Fragment,{children:[!!m&&"".concat(m," Win!"),Object(l.jsx)("div",{style:{width:"490px",display:"flex",justifyContent:"space-around",margin:"0 auto"},children:r.map((function(e,t){return Object(l.jsx)("div",{style:x,onClick:m?w:function(){return function(e){var t=r;t[e].length>=6||(t[e].push(P),o(t),j("P1"===P?"P2":"P1"),O())}(t)},children:e.map((function(e,t){var r,n={width:"50px",height:"50px",marginBottom:"5px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",backgroundColor:"P1"===(r=e)?"black":"red",color:"P1"===r?"white":"yellow"};return Object(l.jsx)("div",{style:n,children:s[e]},t)}))},t)}))})]})};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(s,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.234fe939.chunk.js.map