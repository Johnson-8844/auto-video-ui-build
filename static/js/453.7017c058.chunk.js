"use strict";(self.webpackChunkwisherapp=self.webpackChunkwisherapp||[]).push([[453],{6453:(e,t,l)=>{l.r(t),l.d(t,{getCLS:()=>h,getFCP:()=>d,getFID:()=>L,getLCP:()=>F,getTTFB:()=>P});var T,y,b,C,r=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var l=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return l.observe({type:e,buffered:!0}),l}}catch(e){}},o=function(e,t){var l=function n(l){"pagehide"!==l.type&&"hidden"!==document.visibilityState||(e(l),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",l,!0),addEventListener("pagehide",l,!0)},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},c=function(e,t,l){var T;return function(y){t.value>=0&&(y||l)&&(t.delta=t.value-(T||0),(t.delta||void 0===T)&&(T=t.value,e(t)))}},k=-1,s=function(){return"hidden"===document.visibilityState?0:1/0},m=function(){o((function(e){var t=e.timeStamp;k=t}),!0)},v=function(){return k<0&&(k=s(),m(),u((function(){setTimeout((function(){k=s(),m()}),0)}))),{get firstHiddenTime(){return k}}},d=function(e,t){var l,T=v(),y=r("FCP"),f=function(e){"first-contentful-paint"===e.name&&(C&&C.disconnect(),e.startTime<T.firstHiddenTime&&(y.value=e.startTime,y.entries.push(e),l(!0)))},b=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],C=b?null:a("paint",f);(b||C)&&(l=c(e,y,t),b&&f(b),u((function(T){y=r("FCP"),l=c(e,y,t),requestAnimationFrame((function(){requestAnimationFrame((function(){y.value=performance.now()-T.timeStamp,l(!0)}))}))})))},D=!1,B=-1,h=function(e,t){D||(d((function(e){B=e.value})),D=!0);var l,i=function(t){B>-1&&e(t)},T=r("CLS",0),y=0,b=[],v=function(e){if(!e.hadRecentInput){var t=b[0],C=b[b.length-1];y&&e.startTime-C.startTime<1e3&&e.startTime-t.startTime<5e3?(y+=e.value,b.push(e)):(y=e.value,b=[e]),y>T.value&&(T.value=y,T.entries=b,l())}},C=a("layout-shift",v);C&&(l=c(i,T,t),o((function(){C.takeRecords().map(v),l(!0)})),u((function(){y=0,B=-1,T=r("CLS",0),l=c(i,T,t)})))},q={passive:!0,capture:!0},A=new Date,g=function(e,t){T||(T=t,y=e,b=new Date,w(removeEventListener),E())},E=function(){if(y>=0&&y<b-A){var e={entryType:"first-input",name:T.type,target:T.target,cancelable:T.cancelable,startTime:T.timeStamp,processingStart:T.timeStamp+y};C.forEach((function(t){t(e)})),C=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){g(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,q),removeEventListener("pointercancel",i,q)};addEventListener("pointerup",n,q),addEventListener("pointercancel",i,q)}(t,e):g(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,q)}))},L=function(e,t){var l,b=v(),k=r("FID"),p=function(e){e.startTime<b.firstHiddenTime&&(k.value=e.processingStart-e.startTime,k.entries.push(e),l(!0))},D=a("first-input",p);l=c(e,k,t),D&&o((function(){D.takeRecords().map(p),D.disconnect()}),!0),D&&u((function(){var b;k=r("FID"),l=c(e,k,t),C=[],y=-1,T=null,w(addEventListener),b=p,C.push(b),E()}))},H={},F=function(e,t){var l,T=v(),y=r("LCP"),s=function(e){var t=e.startTime;t<T.firstHiddenTime&&(y.value=t,y.entries.push(e),l())},b=a("largest-contentful-paint",s);if(b){l=c(e,y,t);var d=function(){H[y.id]||(b.takeRecords().map(s),b.disconnect(),H[y.id]=!0,l(!0))};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0})})),o(d,!0),u((function(T){y=r("LCP"),l=c(e,y,t),requestAnimationFrame((function(){requestAnimationFrame((function(){y.value=performance.now()-T.timeStamp,H[y.id]=!0,l(!0)}))}))}))}},P=function(e){var t,l=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var l in e)"navigationStart"!==l&&"toJSON"!==l&&(t[l]=Math.max(e[l]-e.navigationStart,0));return t}();if(l.value=l.delta=t.responseStart,l.value<0||l.value>performance.now())return;l.entries=[t],e(l)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}}]);
//# sourceMappingURL=453.7017c058.chunk.js.map