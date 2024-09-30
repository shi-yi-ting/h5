import{_ as ne}from"./index-42f32114.js";import{h as q,a1 as Q,m as X,n as j,j as H,v as ee,x as N,s as le,d as o,q as K,t as W,r as S,k as ie,aF as re,T as ce,Y as te,aG as ue,_ as de,ad as oe,ah as pe,a0 as me,H as A,aH as _e,W as fe,af as M,aI as ve,aJ as ge,F as he,G as be,ai as ye,z as we,I as Ce,u as xe,a as B,c as J,w as f,b as u,o as ke,e as g,L as U,i as Y,S as Z,f as Pe,J as Oe,K as Se,D as Te,M as D,p as $e,g as Ie}from"./index-5e43627d.js";import{S as Re}from"./index-8db6c847.js";import{S as Ve,T as Ge,a as Be}from"./index-c228471b.js";import{a as De,R as Le}from"./index-f250d479.js";import{F as ze,C as Ee}from"./index-c489dbbf.js";import{C as Ne}from"./index-1a13f049.js";import{_ as We}from"./baseList-d7929ba5.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";import{u as Fe}from"./use-id-ffc8093e.js";import{B as Ue}from"./index-ace9430e.js";import"./use-placeholder-79abc75e.js";import"./use-tab-status-dd4b6fae.js";import"./index-60df94df.js";const[je,qe]=q("col"),He={tag:Q("div"),span:X(0),offset:j};var Ke=H({name:je,props:He,setup(t,{slots:d}){const{parent:v,index:l}=ee(De),s=N(()=>{if(!v)return;const{spaces:a,verticalSpaces:n}=v;let h={};if(a&&a.value&&a.value[l.value]){const{left:i,right:b}=a.value[l.value];h={paddingLeft:i?`${i}px`:null,paddingRight:b?`${b}px`:null}}const{bottom:m}=n.value[l.value]||{};return le(h,{marginBottom:m?`${m}px`:null})});return()=>{const{tag:a,span:n,offset:h}=t;return o(a,{style:s.value,class:qe({[n]:n,[`offset-${h}`]:h})},{default:()=>{var m;return[(m=d.default)==null?void 0:m.call(d)]}})}}});const Me=K(Ke),[se,z]=q("dropdown-menu"),Je={overlay:W,zIndex:j,duration:X(.2),direction:Q("down"),activeColor:String,autoLocate:Boolean,closeOnClickOutside:W,closeOnClickOverlay:W,swipeThreshold:j},ae=Symbol(se);var Ye=H({name:se,props:Je,setup(t,{slots:d}){const v=Fe(),l=S(),s=S(),a=S(0),{children:n,linkChildren:h}=ie(ae),m=re(l),i=N(()=>n.some(e=>e.state.showWrapper)),b=N(()=>t.swipeThreshold&&n.length>+t.swipeThreshold),I=N(()=>{if(i.value&&ce(t.zIndex))return{zIndex:+t.zIndex+1}}),$=()=>{n.forEach(e=>{e.toggle(!1)})},R=()=>{t.closeOnClickOutside&&$()},y=()=>{if(s.value){const e=oe(s);t.direction==="down"?a.value=e.bottom:a.value=pe.value-e.top}},r=()=>{i.value&&y()},O=e=>{n.forEach((c,p)=>{p===e?c.toggle():c.state.showPopup&&c.toggle(!1,{immediate:!0})})},w=(e,c)=>{const{showPopup:p}=e.state,{disabled:_,titleClass:T}=e;return o("div",{id:`${v}-${c}`,role:"button",tabindex:_?void 0:0,class:[z("item",{disabled:_,grow:b.value}),{[me]:!_}],onClick:()=>{_||O(c)}},[o("span",{class:[z("title",{down:p===(t.direction==="down"),active:p}),T],style:{color:p?t.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return te({close:$}),h({id:v,props:t,offset:a,updateOffset:y}),ue(l,R),de("scroll",r,{target:m,passive:!0}),()=>{var e;return o("div",{ref:l,class:z()},[o("div",{ref:s,style:I.value,class:z("bar",{opened:i.value,scrollable:b.value})},[n.map(w)]),(e=d.default)==null?void 0:e.call(d)])}}});const[Ze,E]=q("dropdown-item"),Qe={title:String,options:fe(),disabled:Boolean,teleport:[String,Object],lazyRender:W,modelValue:M,titleClass:M};var Xe=H({name:Ze,inheritAttrs:!1,props:Qe,emits:["open","opened","close","closed","change","update:modelValue"],setup(t,{emit:d,slots:v,attrs:l}){const s=A({showPopup:!1,transition:!0,showWrapper:!1}),a=S(),{parent:n,index:h}=ee(ae);if(!n)return;const m=e=>()=>d(e),i=m("open"),b=m("close"),I=m("opened"),$=()=>{s.showWrapper=!1,d("closed")},R=e=>{t.teleport&&e.stopPropagation()},y=(e=!s.showPopup,c={})=>{e!==s.showPopup&&(s.showPopup=e,s.transition=!c.immediate,e&&(n.updateOffset(),s.showWrapper=!0))},r=()=>{if(v.title)return v.title();if(t.title)return t.title;const e=t.options.find(c=>c.value===t.modelValue);return e?e.text:""},O=e=>{const{activeColor:c}=n.props,{disabled:p}=e,_=e.value===t.modelValue,T=()=>{p||(s.showPopup=!1,e.value!==t.modelValue&&(d("update:modelValue",e.value),d("change",e.value)))},C=()=>{if(_)return o(Ce,{class:E("icon"),color:p?void 0:c,name:"success"},null)};return o(Ne,{role:"menuitem",key:String(e.value),icon:e.icon,title:e.text,class:E("option",{active:_,disabled:p}),style:{color:_?c:""},tabindex:_?0:-1,clickable:!p,onClick:T},{value:C})},w=()=>{const{offset:e}=n,{autoLocate:c,zIndex:p,overlay:_,duration:T,direction:C,closeOnClickOverlay:F}=n.props,V=ve(p);let G=e.value;if(c&&a.value){const x=ge(a.value);x&&(G-=oe(x).top)}return C==="down"?V.top=`${G}px`:V.bottom=`${G}px`,he(o("div",we({ref:a,style:V,class:E([C]),onClick:R},l),[o(ye,{show:s.showPopup,"onUpdate:show":x=>s.showPopup=x,role:"menu",class:E("content"),overlay:_,position:C==="down"?"top":"bottom",duration:s.transition?T:0,lazyRender:t.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${n.id}-${h.value}`,closeOnClickOverlay:F,onOpen:i,onClose:b,onOpened:I,onClosed:$},{default:()=>{var x;return[t.options.map(O),(x=v.default)==null?void 0:x.call(v)]}})]),[[be,s.showWrapper]])};return te({state:s,toggle:y,renderTitle:r}),()=>t.teleport?o(_e,{to:t.teleport},{default:()=>[w()]}):w()}});const et=K(Xe),tt=K(Ye);const L=t=>($e("data-v-4cf53ee8"),t=t(),Ie(),t),ot={class:"page-message-container"},st={class:"page-content"},at=["onClick"],nt={class:"global-list-item"},lt=L(()=>u("span",{class:"global-list-item-title"},"消息类型：",-1)),it={class:"global-list-item-content van-ellipsis"},rt={class:"global-list-item"},ct=L(()=>u("span",{class:"global-list-item-title"},"消息标题：",-1)),ut={class:"global-list-item-content van-ellipsis"},dt={class:"global-list-item"},pt=L(()=>u("span",{class:"global-list-item-title"},"消息内容：",-1)),mt={class:"global-list-item-content van-ellipsis"},_t={class:"global-list-item"},ft=L(()=>u("span",{class:"global-list-item-title"},"发送人：",-1)),vt={class:"global-list-item-content van-ellipsis"},gt={class:"global-list-item"},ht=L(()=>u("span",{class:"global-list-item-title"},"发送时间：",-1)),bt={class:"global-list-item-content van-ellipsis"},yt={__name:"index",setup(t){const d=S(),v=xe(),l=A({msgGroup:"",searchContent:"",isRead:"0"}),s=S(""),a=S("0"),n=y=>{l.msgGroup=i.msgGroup,l.searchContent=s.value,l.isRead=a.value==="all"?"":a.value,d.value.onRefresh()},h=()=>{l.msgGroup=i.msgGroup,l.searchContent=s.value,l.isRead=a.value==="all"?"":a.value,d.value.onRefresh()};function m(){const y=S({}),r=A({optType:"1",msgGroup:""}),O=A({optTypeList:[{text:"标题/内容",value:"1"},{text:"消息类型",value:"2"}],msgGroupList:[]}),w=()=>{s.value="",r.msgGroup=""};return ke(()=>{}),{q:r,options:O,msgGroupObj:y,onOptType:w}}const{q:i,options:b,msgGroupObj:I,onOptType:$}=m(),R=(y,r)=>{v.push({path:y,query:{rowData:JSON.stringify(r)}})};return(y,r)=>{const O=et,w=tt,e=Me,c=ze,p=Ee,_=Ue,T=Le,C=Ge,F=Be,V=Ve,G=Re,x=ne;return B(),J("div",ot,[o(V,null,{default:f(()=>[o(T,{style:{"background-color":"#fff"}},{default:f(()=>[o(e,{span:"8"},{default:f(()=>[o(w,null,{default:f(()=>[o(O,{modelValue:g(i).optType,"onUpdate:modelValue":r[0]||(r[0]=k=>g(i).optType=k),options:g(b).optTypeList,onChange:g($)},null,8,["modelValue","options","onChange"])]),_:1})]),_:1}),g(i).optType==="1"?(B(),U(e,{key:0,span:"12"},{default:f(()=>[o(p,{inset:"",class:"page-field-wrap"},{default:f(()=>[o(c,{modelValue:g(s),"onUpdate:modelValue":r[1]||(r[1]=k=>Y(s)?s.value=k:null),placeholder:"请输入..."},null,8,["modelValue"])]),_:1})]),_:1})):Z("",!0),g(i).optType==="2"?(B(),U(e,{key:1,span:"12",class:"page-col-wrap"},{default:f(()=>[o(w,null,{default:f(()=>[o(O,{modelValue:g(i).msgGroup,"onUpdate:modelValue":r[2]||(r[2]=k=>g(i).msgGroup=k),options:g(b).msgGroupList},null,8,["modelValue","options"])]),_:1})]),_:1})):Z("",!0),o(e,{span:"4",class:"page-btn-wrap"},{default:f(()=>[o(_,{type:"primary",class:"page-btn",onClick:h},{default:f(()=>[Pe(" 查询 ")]),_:1})]),_:1})]),_:1}),o(F,{active:g(a),"onUpdate:active":r[3]||(r[3]=k=>Y(a)?a.value=k:null),onChange:n},{default:f(()=>[o(C,{title:"全部",name:"all"}),o(C,{title:"未读",name:"0"}),o(C,{title:"已读",name:"1"})]),_:1},8,["active"])]),_:1}),u("div",st,[o(We,{ref_key:"refBaseList",ref:d,params:l,pageInter:()=>{},type:"message"},{default:f(({dataList:k})=>[(B(!0),J(Oe,null,Se(k,P=>(B(),U(G,{class:"page-list-box",key:P.id},{default:f(()=>[u("div",{class:Te(P.isRead==="1"?"global-list-card-gray":P.isRead==="0"?"global-list-card":"global-list-card-yellow"),onClick:wt=>R("/messageDetail",P)},[u("div",nt,[lt,u("span",it,D(g(I)[P.msgGroup]),1)]),u("div",rt,[ct,u("span",ut,D(P.msgTitle),1)]),u("div",dt,[pt,u("span",mt,D(P.msgContent),1)]),u("div",_t,[ft,u("span",vt,D(P.sendName),1)]),u("div",gt,[ht,u("span",bt,D(P.sendDate),1)])],10,at)]),_:2},1024))),128))]),_:1},8,["params"])]),o(x)])}}},Lt=Ae(yt,[["__scopeId","data-v-4cf53ee8"]]);export{Lt as default};
