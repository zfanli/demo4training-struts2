(window["webpackJsonpdemo4training-frontend"]=window["webpackJsonpdemo4training-frontend"]||[]).push([[0],{155:function(e,n,t){},172:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(51),i=t.n(r),l=(t(60),t(52)),c=(t(154),t(155),t(54)),s=t.n(c);var d=["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"];var u=function(){var e=Object(a.useRef)(null);return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,{ref:e,data:{datasets:[{label:"Data 1",fill:!1,borderColor:d[0],backgroundColor:d[0],lineTension:0,cubicInterpolationMode:"monotone",data:[]}]},options:{title:{display:!0,text:"demo4training"},legend:{display:!1},scales:{xAxes:[{type:"realtime",realtime:{duration:2e4,refresh:1e3,delay:2e3,onRefresh:function(e){e.data.datasets.forEach((function(e){var n=e.data[e.data.length-1];(function(e){return s.a.get("".concat(window.location.href,"api/rate?prev=").concat(e))})(n=n&&n.y?n.y:1).then((function(n){var t=n.data;e.data.push({x:Date.now(),y:JSON.parse(t).rate})}))}))}}}],yAxes:[{scaleLabel:{display:!0,labelString:"value"}}]},tooltips:{position:"nearest",intersect:!1},animation:{duration:0}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,n,t){e.exports=t(172)},60:function(e,n,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.404a1f82.chunk.js.map