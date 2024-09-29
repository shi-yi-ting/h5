import{h as j,m as F,a1 as z,t as A,j as I,r as x,aF as G,x as W,N,b4 as V,o as Y,Y as M,_ as O,d,a5 as J,ad as B,b0 as K,a4 as Q,q as U,n as _,H as Z,X as p,T as D,aG as ee,$ as te,U as ae,aj as ne}from"./index-ea8e790e.js";import{u as oe}from"./use-tab-status-5f8880a1.js";const[ie,b,se]=j("list"),le={error:Boolean,offset:F(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:z("down"),loadingText:String,finishedText:String,immediateCheck:A};var re=I({name:ie,props:le,emits:["load","update:error","update:loading"],setup(e,{emit:h,slots:i}){const n=x(e.loading),f=x(),v=x(),s=oe(),T=G(f),k=W(()=>e.scroller||T.value),c=()=>{J(()=>{if(n.value||e.finished||e.disabled||e.error||(s==null?void 0:s.value)===!1)return;const{direction:a}=e,u=+e.offset,l=B(k);if(!l.height||K(f))return;let P=!1;const w=B(v);a==="up"?P=l.top-w.top<=u:P=w.bottom-l.bottom<=u,P&&(n.value=!0,h("update:loading",!0),h("load"))})},o=()=>{if(e.finished){const a=i.finished?i.finished():e.finishedText;if(a)return d("div",{class:b("finished-text")},[a])}},m=()=>{h("update:error",!1),c()},S=()=>{if(e.error){const a=i.error?i.error():e.errorText;if(a)return d("div",{role:"button",class:b("error-text"),tabindex:0,onClick:m},[a])}},C=()=>{if(n.value&&!e.finished&&!e.disabled)return d("div",{class:b("loading")},[i.loading?i.loading():d(Q,{class:b("loading-icon")},{default:()=>[e.loadingText||se("loading")]})])};return N(()=>[e.loading,e.finished,e.error],c),s&&N(s,a=>{a&&c()}),V(()=>{n.value=e.loading}),Y(()=>{e.immediateCheck&&c()}),M({check:c}),O("scroll",c,{target:k,passive:!0}),()=>{var a;const u=(a=i.default)==null?void 0:a.call(i),l=d("div",{ref:v,class:b("placeholder")},null);return d("div",{ref:f,role:"feed",class:b(),"aria-busy":n.value},[e.direction==="down"?u:l,C(),o(),S(),e.direction==="up"?u:l])}}});const he=U(re),[ce,E]=j("swipe-cell"),de={name:F(""),disabled:Boolean,leftWidth:_,rightWidth:_,beforeClose:Function,stopPropagation:Boolean};var fe=I({name:ce,props:de,emits:["open","close","click"],setup(e,{emit:h,slots:i}){let n,f,v,s;const T=x(),k=x(),c=x(),o=Z({offset:0,dragging:!1}),m=p(),S=t=>t.value?B(t).width:0,C=W(()=>D(e.leftWidth)?+e.leftWidth:S(k)),a=W(()=>D(e.rightWidth)?+e.rightWidth:S(c)),u=t=>{o.offset=t==="left"?C.value:-a.value,n||(n=!0,h("open",{name:e.name,position:t}))},l=t=>{o.offset=0,n&&(n=!1,h("close",{name:e.name,position:t}))},P=t=>{const r=Math.abs(o.offset),g=.15,q=n?1-g:g,y=t==="left"?C.value:a.value;y&&r>y*q?u(t):l(t)},w=t=>{e.disabled||(v=o.offset,m.start(t))},X=t=>{if(e.disabled)return;const{deltaX:r}=m;m.move(t),m.isHorizontal()&&(f=!0,o.dragging=!0,(!n||r.value*v<0)&&te(t,e.stopPropagation),o.offset=ae(r.value+v,-a.value,C.value))},R=()=>{o.dragging&&(o.dragging=!1,P(o.offset>0?"left":"right"),setTimeout(()=>{f=!1},0))},H=(t="outside")=>{s||(h("click",t),n&&!f&&(s=!0,ne(e.beforeClose,{args:[{name:e.name,position:t}],done:()=>{s=!1,l(t)},canceled:()=>s=!1,error:()=>s=!1})))},L=(t,r)=>g=>{r&&g.stopPropagation(),H(t)},$=(t,r)=>{const g=i[t];if(g)return d("div",{ref:r,class:E(t),onClick:L(t,!0)},[g()])};return M({open:u,close:l}),ee(T,()=>H("outside"),{eventName:"touchstart"}),O("touchmove",X,{target:T}),()=>{var t;const r={transform:`translate3d(${o.offset}px, 0, 0)`,transitionDuration:o.dragging?"0s":".6s"};return d("div",{ref:T,class:E(),onClick:L("cell",f),onTouchstartPassive:w,onTouchend:R,onTouchcancel:R},[d("div",{class:E("wrapper"),style:r},[$("left",k),(t=i.default)==null?void 0:t.call(i),$("right",c)])])}}});const ve=U(fe);export{he as L,ve as S};
