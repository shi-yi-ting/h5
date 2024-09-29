import{as as w,at as x}from"./index-ea8e790e.js";var C={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(k,N){(function(t,i){k.exports=i()})(w,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(r){var e,n;for(e in r)n=r[e],n!==void 0&&r.hasOwnProperty(e)&&(i[e]=n);return this},t.status=null,t.set=function(r){var e=t.isStarted();r=g(r,i.minimum,1),t.status=r===1?null:r;var n=t.render(!e),o=n.querySelector(i.barSelector),a=i.speed,f=i.easing;return n.offsetWidth,T(function(s){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),m(o,P(r,a,f)),r===1?(m(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){m(n,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){t.remove(),s()},a)},a)):setTimeout(s,a)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var r=function(){setTimeout(function(){t.status&&(t.trickle(),r())},i.trickleSpeed)};return i.trickle&&r(),this},t.done=function(r){return!r&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(r){var e=t.status;return e?(typeof r!="number"&&(r=(1-e)*g(Math.random()*e,.1,.95)),e=g(e+r,0,.994),t.set(e)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var r=0,e=0;t.promise=function(n){return!n||n.state()==="resolved"?this:(e===0&&t.start(),r++,e++,n.always(function(){e--,e===0?(r=0,t.done()):t.set((r-e)/r)}),this)}}(),t.render=function(r){if(t.isRendered())return document.getElementById("nprogress");h(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=i.template;var n=e.querySelector(i.barSelector),o=r?"-100":p(t.status||0),a=document.querySelector(i.parent),f;return m(n,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),i.showSpinner||(f=e.querySelector(i.spinnerSelector),f&&b(f)),a!=document.body&&h(a,"nprogress-custom-parent"),a.appendChild(e),e},t.remove=function(){S(document.documentElement,"nprogress-busy"),S(document.querySelector(i.parent),"nprogress-custom-parent");var r=document.getElementById("nprogress");r&&b(r)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var r=document.body.style,e="WebkitTransform"in r?"Webkit":"MozTransform"in r?"Moz":"msTransform"in r?"ms":"OTransform"in r?"O":"";return e+"Perspective"in r?"translate3d":e+"Transform"in r?"translate":"margin"};function g(r,e,n){return r<e?e:r>n?n:r}function p(r){return(-1+r)*100}function P(r,e,n){var o;return i.positionUsing==="translate3d"?o={transform:"translate3d("+p(r)+"%,0,0)"}:i.positionUsing==="translate"?o={transform:"translate("+p(r)+"%,0)"}:o={"margin-left":p(r)+"%"},o.transition="all "+e+"ms "+n,o}var T=function(){var r=[];function e(){var n=r.shift();n&&n(e)}return function(n){r.push(n),r.length==1&&e()}}(),m=function(){var r=["Webkit","O","Moz","ms"],e={};function n(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(u,c){return c.toUpperCase()})}function o(s){var u=document.body.style;if(s in u)return s;for(var c=r.length,d=s.charAt(0).toUpperCase()+s.slice(1),l;c--;)if(l=r[c]+d,l in u)return l;return s}function a(s){return s=n(s),e[s]||(e[s]=o(s))}function f(s,u,c){u=a(u),s.style[u]=c}return function(s,u){var c=arguments,d,l;if(c.length==2)for(d in u)l=u[d],l!==void 0&&u.hasOwnProperty(d)&&f(s,d,l);else f(s,c[1],c[2])}}();function y(r,e){var n=typeof r=="string"?r:v(r);return n.indexOf(" "+e+" ")>=0}function h(r,e){var n=v(r),o=n+e;y(n,e)||(r.className=o.substring(1))}function S(r,e){var n=v(r),o;y(r,e)&&(o=n.replace(" "+e+" "," "),r.className=o.substring(1,o.length-1))}function v(r){return(" "+(r.className||"")+" ").replace(/\s+/gi," ")}function b(r){r&&r.parentNode&&r.parentNode.removeChild(r)}return t})})(C);var E=C.exports;const U=x(E);export{U as n};
