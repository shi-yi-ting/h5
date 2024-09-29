import{_ as Ae}from"./index-bce55faf.js";import{h as Ne,t as ve,n as re,m as Le,j as Ce,k as Pe,d,l as pe,B as Ee,q as $e,s as Je,v as Re,x as be,y as Ke,z as qe,A as Ue,I as De,C as le,r as A,a as u,c as N,b as e,D as z,E as ke,i as X,e as l,F as oe,G as ne,u as G,H as J,w as m,J as L,K as R,L as w,M as _,p as U,g as B,N as Be,O as Te,P as Me,o as ze,Q as Ge,R as He,S as ce}from"./index-ea8e790e.js";import{S as Oe,T as Ye,a as Ze}from"./index-5c49b0a0.js";import{B as Fe,P as Ve,_ as Q}from"./baseList-09b6d1c4.js";import{S as H,L as Qe}from"./index-a22534a3.js";import{u as We}from"./useLoading-79b43786.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import{r as Xe,u as et,B as O}from"./index-af3b5cf1.js";import{a as tt}from"./axios-a22b550d.js";import{n as ue}from"./nprogress-1325d577.js";import{a as st}from"./js.cookie-edb2da2a.js";import"./use-placeholder-a0372669.js";import"./use-id-f89c561d.js";import"./use-tab-status-5f8880a1.js";import"./index-13654563.js";const[xe,at]=Ne("grid"),lt={square:Boolean,center:ve,border:ve,gutter:re,reverse:Boolean,iconSize:re,direction:String,clickable:Boolean,columnNum:Le(4)},je=Symbol(xe);var ot=Ce({name:xe,props:lt,setup(t,{slots:s}){const{linkChildren:a}=Pe(je);return a({props:t}),()=>{var h;return d("div",{style:{paddingLeft:pe(t.gutter)},class:[at(),{[Ee]:t.border&&!t.gutter}]},[(h=s.default)==null?void 0:h.call(s)])}}});const nt=$e(ot),[it,ae]=Ne("grid-item"),ct=Je({},Xe,{dot:Boolean,text:String,icon:String,badge:re,iconColor:String,iconPrefix:String,badgeProps:Object});var dt=Ce({name:it,props:ct,setup(t,{slots:s}){const{parent:a,index:h}=Re(je),k=et();if(!a)return;const v=be(()=>{const{square:g,gutter:i,columnNum:c}=a.props,p=`${100/+c}%`,n={flexBasis:p};if(g)n.paddingTop=p;else if(i){const y=pe(i);n.paddingRight=y,h.value>=+c&&(n.marginTop=y)}return n}),$=be(()=>{const{square:g,gutter:i}=a.props;if(g&&i){const c=pe(i);return{right:c,bottom:c,height:"auto"}}}),b=()=>{if(s.icon)return d(Ue,qe({dot:t.dot,content:t.badge},t.badgeProps),{default:s.icon});if(t.icon)return d(De,{dot:t.dot,name:t.icon,size:a.props.iconSize,badge:t.badge,class:ae("icon"),color:t.iconColor,badgeProps:t.badgeProps,classPrefix:t.iconPrefix},null)},r=()=>{if(s.text)return s.text();if(t.text)return d("span",{class:ae("text")},[t.text])},o=()=>s.default?s.default():[b(),r()];return()=>{const{center:g,border:i,square:c,gutter:p,reverse:n,direction:y,clickable:f}=a.props,x=[ae("content",[y,{center:g,square:c,reverse:n,clickable:f,surround:i&&p}]),{[Ke]:i}];return d("div",{class:[ae({square:c})],style:v.value},[d("div",{role:f?"button":void 0,class:x,style:$.value,tabindex:f?0:void 0,onClick:k},[o()])])}}});const rt=$e(dt),pt="token";function fe(){return st.get(pt)}function de(t){if((t==null?void 0:t.status)===401)le("token验证失败，请重新进入");else if(typeof(t==null?void 0:t.data)=="object"){let{data:s}=t;le(s.error_description||s.msg||t.msg)}else le("网络异常或调用超时")}function Y(){let t={};return{setSwipeRef:(h,k)=>{t[k]=h},clickSwipe:(h,k)=>{h.stopPropagation();for(let v in t)t[v].close();t[k].open("right")}}}const ut={code:200,success:!0,data:{count:28,listPage:{records:[{id:"1810974866833334273",level:1,tableId:"1810975121171734530",taskId:"37895358-3f1e-11ef-9b56-dadd1b34f70e",planTaskId:"1810974866833334273",taskName:"审查送审测试（有评价清单）-071003",taskType:"2",taskSubType:"10",majorName:"供变电",stageId:"1791315218003726337",stageName:"施工图",projectId:"1791341402100314114",projectName:"协同设计系统用户测试项目0516",skdId:-1,skdName:"【石本仕】协同测试计表",depName:"电化院",deptId:"",evaluationList:"设计原则",achieveDate:"2024-07-10 00:00:00",currentLinkName:"复核",handlerId:"1656142426961530928",handlerName:"何俊",auditState:"2",isPrint:"",taskAuditStatus:"1",trialDate:"2024-07-10 17:51:29",requestCompleteDate:"",trialUserName:"李晨琨",processDefinitionName:"设计3级册审",processInstanceId:"fb55ddd8-3ea1-11ef-b24d-dadd1b34f70e",processDefinitionId:"LC_JS_T_SJ3CS0:1:5ad3a120-b1c0-11ee-b469-005056a19fb5",processDefinitionKey:"LC_JS_T_SJ3CS0",nextNodeKey:"SYN_FH",projectClass:1,tabKey:"SYN_SJ",abandon:"",parentId:"0",taskPath:"1810974866833334273",workId:"",children:[],zgId:"",taskGroup:"2",sendUserName:"李晨琨",sendDeptName:"电化院",auditStatus:1,taskStatus:2,scheduledEnd:"2024-07-10",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1810973416535285761",level:1,tableId:"1810973707175387137",taskId:"6e76c93a-3ea1-11ef-b24d-dadd1b34f70e",planTaskId:"1810973416535285761",taskName:"审查送审测试（无评价清单）-071002",taskType:"2",taskSubType:"10",majorName:"供变电",stageId:"1791315218003726337",stageName:"施工图",projectId:"1791341402100314114",projectName:"协同设计系统用户测试项目0516",skdId:-1,skdName:"【石本仕】协同测试计表",depName:"电化院",deptId:"",evaluationList:"",achieveDate:"2024-07-10 00:00:00",currentLinkName:"复核",handlerId:"1656142426961530928",handlerName:"何俊",auditState:"2",isPrint:"",taskAuditStatus:"1",trialDate:"2024-07-10 17:45:52",requestCompleteDate:"",trialUserName:"李晨琨",processDefinitionName:"设计3级册审",processInstanceId:"3265e59f-3ea1-11ef-b24d-dadd1b34f70e",processDefinitionId:"LC_JS_T_SJ3CS0:1:5ad3a120-b1c0-11ee-b469-005056a19fb5",processDefinitionKey:"LC_JS_T_SJ3CS0",nextNodeKey:"SYN_FH",projectClass:1,tabKey:"SYN_SJ",abandon:"",parentId:"0",taskPath:"1810973416535285761",workId:"",children:[],zgId:"",taskGroup:"2",sendUserName:"李晨琨",sendDeptName:"电化院",auditStatus:1,taskStatus:2,scheduledEnd:"2024-07-10",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1810483509182324738",level:1,tableId:"1810484856577318913",taskId:"d49dfb09-3d91-11ef-8121-dadd1b34f70e",planTaskId:"1810483509182324738",taskName:"测试下无评价清单-不直接发布",taskType:"2",taskSubType:"10",majorName:"供变电",stageId:"1791315218003726337",stageName:"施工图",projectId:"1791341402100314114",projectName:"协同设计系统用户测试项目0516",skdId:-1,skdName:"[邓新成]协同测试计表(没找到暖通,先建一个隧道的吧)",depName:"电化院",deptId:"",evaluationList:"",achieveDate:"2024-07-10 00:00:00",currentLinkName:"复核",handlerId:"1656142426961530928",handlerName:"何俊",auditState:"1",isPrint:"",taskAuditStatus:"1",trialDate:"2024-07-09 09:23:21",requestCompleteDate:"",trialUserName:"李晨琨",processDefinitionName:"设计3级册审",processInstanceId:"d48ac0fe-3d91-11ef-8121-dadd1b34f70e",processDefinitionId:"LC_JS_T_SJ3CS0:1:5ad3a120-b1c0-11ee-b469-005056a19fb5",processDefinitionKey:"LC_JS_T_SJ3CS0",nextNodeKey:"SYN_FH",projectClass:1,tabKey:"SYN_SJ",abandon:"",parentId:"0",taskPath:"1810483509182324738",workId:"",children:[],zgId:"",taskGroup:"2",sendUserName:"李晨琨",sendDeptName:"电化院",auditStatus:1,taskStatus:2,scheduledEnd:"2024-07-10",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1812662609351147522",level:1,tableId:"1812664263161020418",taskId:"a529e018-424b-11ef-9b8b-dadd1b34f70e",planTaskId:"1812662609351147522",taskName:"测试组册0715002",taskType:"1",taskSubType:"80",majorName:"供变电",stageId:"1791315218003726337",stageName:"施工图",projectId:"1791341402100314114",projectName:"协同设计系统用户测试项目0516",skdId:-1,skdName:"[邓新成]协同测试计表(没找到暖通,先建一个隧道的吧)",depName:"电化院",deptId:"",evaluationList:"远动装置系统图",achieveDate:"2024-07-16 00:00:00",currentLinkName:"复核",handlerId:"1656142426961530928",handlerName:"何俊",auditState:"1",isPrint:"",taskAuditStatus:"1",trialDate:"2024-07-15 09:43:32",requestCompleteDate:"",trialUserName:"李晨琨",processDefinitionName:"设计4级处审",processInstanceId:"a4ea17cd-424b-11ef-9b8b-dadd1b34f70e",processDefinitionId:"LC_JS_T_SJ4CS0:1:5a615744-b1c0-11ee-b469-005056a19fb5",processDefinitionKey:"LC_JS_T_SJ4CS0",nextNodeKey:"SYN_FH",projectClass:1,tabKey:"SYN_SJ",abandon:"",parentId:"0",taskPath:"1812662609351147522",workId:"",children:[],zgId:"",taskGroup:"2",sendUserName:"李晨琨",sendDeptName:"电化院",auditStatus:1,taskStatus:2,scheduledEnd:"2024-07-16",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1714811092550746113",level:1,tableId:"1714811598878736385",taskId:"51421819-7d47-11ee-b2d3-005056bf53cc",planTaskId:"1714811092550746113",taskName:"TEST-01",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714090417309511682",stageName:"施工图",projectId:"1714090340868321282",projectName:"S29迭代-自建项目测试人员使用",skdId:-1,skdName:"S29迭代-插件测试",depName:"线站院",deptId:"",evaluationList:"线路横断面图",achieveDate:"2023-10-19 00:00:00",currentLinkName:"专册",handlerId:"1656142420988842089",handlerName:"郑亚龙",auditState:"2",isPrint:"",taskAuditStatus:"1",trialDate:"2023-10-19 09:11:59",requestCompleteDate:"",trialUserName:"陈卓林",processDefinitionName:"设计3级册审",processInstanceId:"80deab14-6e1c-11ee-ae7c-005056bf53cc",processDefinitionId:"LC_JS_T_SJ3CS0:6:83b8462a-5368-11ee-8d00-005056bf53cc",processDefinitionKey:"LC_JS_T_SJ3CS0",nextNodeKey:"SYN_ZC",projectClass:3,tabKey:"",abandon:"",parentId:"0",taskPath:"1714811092550746113",workId:"",children:[],zgId:"",taskGroup:"2",sendUserName:"郑亚龙",sendDeptName:"线站院",auditStatus:1,taskStatus:2,scheduledEnd:"2023-10-19",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1714190572285218817",level:1,tableId:-1,taskId:"",planTaskId:"1714190572285218817",taskName:"线路设计方案-S29迭代测试",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714090417309511682",stageName:"施工图",projectId:"1714090340868321282",projectName:"S29迭代-自建项目测试人员使用",skdId:"1714095599791534082",skdName:"S29迭代-插件测试",depName:"",deptId:"",evaluationList:"提总体拆迁工程素材",achieveDate:"2023-10-31 00:00:00",currentLinkName:"",handlerId:"",handlerName:"",auditState:"",isPrint:"",taskAuditStatus:"0",trialDate:"",requestCompleteDate:"",trialUserName:"",processDefinitionName:"",processInstanceId:"",processDefinitionId:"",processDefinitionKey:"",nextNodeKey:"",projectClass:-1,tabKey:"",abandon:"",parentId:"0",taskPath:"",workId:"",children:[{id:"3428381198140088323",level:2,tableId:-1,taskId:"",planTaskId:-1,taskName:"测试工点",taskType:"",taskSubType:"",majorName:"",stageId:-1,stageName:"",projectId:-1,projectName:"",skdId:-1,skdName:"",depName:"",deptId:"",evaluationList:"",achieveDate:"",currentLinkName:"",handlerId:"",handlerName:"",auditState:"",isPrint:"",taskAuditStatus:"",trialDate:"",requestCompleteDate:"",trialUserName:"",processDefinitionName:"",processInstanceId:"",processDefinitionId:"",processDefinitionKey:"",nextNodeKey:"",projectClass:-1,tabKey:"",abandon:"",parentId:"1714190572285218817",taskPath:"",workId:"1714190625854869506",children:[{id:"1714190745342201857",level:3,tableId:"1714815495529758721",taskId:"5a5dedc6-7498-11ee-8ef4-005056bf53cc",planTaskId:"1714190745342201857",taskName:"线路设计方案01-设计五级处审",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714090417309511682",stageName:"施工图",projectId:"1714090340868321282",projectName:"S29迭代-自建项目测试人员使用",skdId:-1,skdName:"S29迭代-插件测试",depName:"线站院",deptId:"",evaluationList:"提总体拆迁工程素材",achieveDate:"2023-10-31 00:00:00",currentLinkName:"专册",handlerId:"1656142420988842089",handlerName:"郑亚龙",auditState:"3",isPrint:"",taskAuditStatus:"1",trialDate:"2023-10-19 09:27:28",requestCompleteDate:"",trialUserName:"郑亚龙",processDefinitionName:"设计5级处审(总体处送审)",processInstanceId:"aa9c05c7-6e1e-11ee-ae7c-005056bf53cc",processDefinitionId:"LC_JS_T_SJ5CSZ:4:826efcf2-5368-11ee-8d00-005056bf53cc",processDefinitionKey:"LC_JS_T_SJ5CSZ",nextNodeKey:"SYN_ZC",projectClass:3,tabKey:"",abandon:"",parentId:"3428381198140088323",taskPath:"1714190572285218817/1714190745342201857",workId:"1714190625854869506",children:[],zgId:"",taskGroup:"2",sendUserName:"郑亚龙",sendDeptName:"线站院",auditStatus:1,taskStatus:2,scheduledEnd:"2023-10-31",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""}],zgId:"1714190572285218817",taskGroup:"",sendUserName:"",sendDeptName:"",auditStatus:-1,taskStatus:-1,scheduledEnd:"",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""}],zgId:"",taskGroup:"2",sendUserName:"",sendDeptName:"",auditStatus:-1,taskStatus:-1,scheduledEnd:"",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1717738010086354945",level:1,tableId:-1,taskId:"",planTaskId:"1717738010086354945",taskName:"线路设计方案-提资-四级送审",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714819471843196929",stageName:"施工图",projectId:"1714819349386297346",projectName:"S30迭代-自建项目测试人员使用",skdId:"1714884704410468353",skdName:"S30迭代-插件端",depName:"",deptId:"",evaluationList:"提总体拆迁工程素材",achieveDate:"2023-11-05 00:00:00",currentLinkName:"",handlerId:"",handlerName:"",auditState:"",isPrint:"",taskAuditStatus:"0",trialDate:"",requestCompleteDate:"",trialUserName:"",processDefinitionName:"",processInstanceId:"",processDefinitionId:"",processDefinitionKey:"",nextNodeKey:"",projectClass:-1,tabKey:"",abandon:"",parentId:"0",taskPath:"",workId:"",children:[{id:"3434483359706038275",level:2,tableId:-1,taskId:"",planTaskId:-1,taskName:"测试",taskType:"",taskSubType:"",majorName:"",stageId:-1,stageName:"",projectId:-1,projectName:"",skdId:-1,skdName:"",depName:"",deptId:"",evaluationList:"",achieveDate:"",currentLinkName:"",handlerId:"",handlerName:"",auditState:"",isPrint:"",taskAuditStatus:"",trialDate:"",requestCompleteDate:"",trialUserName:"",processDefinitionName:"",processInstanceId:"",processDefinitionId:"",processDefinitionKey:"",nextNodeKey:"",projectClass:-1,tabKey:"",abandon:"",parentId:"1717738010086354945",taskPath:"",workId:"1716745349619683330",children:[{id:"1717738114906206213",level:3,tableId:"1718828922078171138",taskId:"46c3d405-76d3-11ee-969a-005056bf53cc",planTaskId:"1717738114906206213",taskName:"标准任务A-3",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714819471843196929",stageName:"施工图",projectId:"1714819349386297346",projectName:"S30迭代-自建项目测试人员使用",skdId:-1,skdName:"S30迭代-插件端",depName:"线站院",deptId:"",evaluationList:"提总体拆迁工程素材",achieveDate:"2023-11-05 00:00:00",currentLinkName:"专册",handlerId:"1656142420988842089",handlerName:"郑亚龙",auditState:"2",isPrint:"",taskAuditStatus:"1",trialDate:"2023-10-30 11:15:24",requestCompleteDate:"2023-10-30",trialUserName:"刘颖",processDefinitionName:"设计3级册审会签",processInstanceId:"90ddf969-76d2-11ee-969a-005056bf53cc",processDefinitionId:"LC_JS_T_SJ3CS0_HQ:5:7ed24e3a-5368-11ee-8d00-005056bf53cc",processDefinitionKey:"LC_JS_T_SJ3CS0_HQ",nextNodeKey:"SYN_ZC",projectClass:3,tabKey:"",abandon:"",parentId:"3434483359706038275",taskPath:"1717738010086354945/1717738114906206213",workId:"1716745349619683330",children:[],zgId:"",taskGroup:"2",sendUserName:"郑亚龙",sendDeptName:"线站院",auditStatus:1,taskStatus:2,scheduledEnd:"2023-11-05",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""},{id:"1717738114906206212",level:3,tableId:"1717741683780759554",taskId:"0b45e1cb-76d3-11ee-969a-005056bf53cc",planTaskId:"1717738114906206212",taskName:"标准任务A-2",taskType:"2",taskSubType:"",majorName:"线路",stageId:"1714819471843196929",stageName:"施工图",projectId:"1714819349386297346",projectName:"S30迭代-自建项目测试人员使用",skdId:-1,skdName:"S30迭代-插件端",depName:"线站院",deptId:"",evaluationList:"提总体拆迁工程素材",achieveDate:"2023-11-05 00:00:00",currentLinkName:"专册",handlerId:"1656142420988842089",handlerName:"郑亚龙",auditState:"2",isPrint:"",taskAuditStatus:"1",trialDate:"2023-10-27 11:15:06",requestCompleteDate:"2023-10-30",trialUserName:"刘颖",processDefinitionName:"设计3级册审会签",processInstanceId:"06f82567-7477-11ee-8ef4-005056bf53cc",processDefinitionId:"LC_JS_T_SJ3CS0_HQ:5:7ed24e3a-5368-11ee-8d00-005056bf53cc",processDefinitionKey:"LC_JS_T_SJ3CS0_HQ",nextNodeKey:"SYN_ZC",projectClass:3,tabKey:"",abandon:"",parentId:"3434483359706038275",taskPath:"1717738010086354945/1717738114906206212",workId:"1716745349619683330",children:[],zgId:"",taskGroup:"2",sendUserName:"赵亚祥",sendDeptName:"线站院",auditStatus:1,taskStatus:2,scheduledEnd:"2023-11-05",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""}],zgId:"1717738010086354945",taskGroup:"",sendUserName:"",sendDeptName:"",auditStatus:-1,taskStatus:-1,scheduledEnd:"",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""}],zgId:"",taskGroup:"2",sendUserName:"",sendDeptName:"",auditStatus:-1,taskStatus:-1,scheduledEnd:"",beforeAdjustScheduledEnd:"",waitAdjustScheduledEnd:"",adjustDecomposeStatus:-1,exclamationMark:"",exclamationMarkColor:""}],total:26,size:10,current:1,orders:[],optimizeCountSql:!0,searchCount:!0,countId:"",maxLimit:-1,pages:3}},msg:"操作成功"};const _t={__name:"collapse",props:{collapseBoxClass:{type:String,default:""},collapseHeaderClass:{type:String,default:""},collapseTitleClass:{type:String,default:""},collapseContentClass:{type:String,default:""},collapse:{type:Boolean,default:!0}},setup(t){let a=A(t.collapse);return(h,k)=>{const v=De;return u(),N("div",{class:z(["collapse-box",t.collapseBoxClass])},[e("div",{class:z(["collapse-header",t.collapseHeaderClass])},[e("div",{class:z(["collapse-title",t.collapseTitleClass])},[ke(h.$slots,"title",{},void 0,!0)],2),e("div",{class:"collapse-icon",onClick:k[0]||(k[0]=$=>X(a)?a.value=!l(a):a=!l(a))},[oe(d(v,{name:"arrow-up",size:"16",color:"#969799"},null,512),[[ne,l(a)]]),oe(d(v,{name:"arrow-down",size:"16",color:"#969799"},null,512),[[ne,!l(a)]])])],2),oe(e("div",{class:z(["collapse-content",t.collapseContentClass])},[ke(h.$slots,"default",{},void 0,!0)],2),[[ne,l(a)]])],2)}}},we=K(_t,[["__scopeId","data-v-855570c9"]]);const Z=t=>(U("data-v-0cdabcd6"),t=t(),B(),t),mt={class:"page-check-container"},ht={class:"page-content"},gt={class:"global-list-card"},vt={class:"global-list-item"},bt=Z(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),kt={class:"global-list-item-content van-ellipsis"},ft={class:"global-list-item"},St=Z(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),It={class:"global-list-item-content van-ellipsis"},yt={class:"global-list-item"},Nt=Z(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),Ct={class:"global-list-item-content van-ellipsis"},$t={class:"custom-swipe-cell-right"},Dt={class:"pd10"},Tt={class:"global-list-item"},xt=Z(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),jt={class:"global-list-item-content van-ellipsis"},wt={class:"global-list-item"},At=Z(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),Lt={class:"global-list-item-content van-ellipsis"},Pt={class:"global-list-item"},Et=Z(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),Jt={class:"global-list-item-content van-ellipsis"},Rt=["onClick"],Kt={class:"global-list-item"},qt=Z(()=>e("span",{class:"global-list-item-title"},"子任务：",-1)),Ut={class:"global-list-item-content van-ellipsis"},Bt={class:"custom-swipe-cell-right-h"},Mt={__name:"Check",props:{changeCounts:{type:Function,default:()=>{}}},emits:["changeCounts"],setup(t,{emit:s}){const{setSwipeRef:a,clickSwipe:h}=Y(),{startLoading:k,stopLoading:v}=We(),$=G();A(["1"]);const b=A([]),r=A(!1),o=A(!1),g=A(!1),i=J({current:0,size:10});J({type:"2",parentPlanTaskId:"0"});function c(S,D){if(S.children.length)for(let I of S.children)c(I,D);else{D.push(S);return}}const p=S=>getPlotDataApi({taskId:S}).then(D=>{if(D.success)if(D.data&&D.data.length){const I=data.map(T=>T.fileName).join(",");return le(`关联文件中的【${I}】没有相关的pdf文件，请在插件端进行出图！`),!0}else return!1;else return de(D),!0}).catch(D=>(de(D),!0)),n=async(S,D)=>{k();let I,T;if(S.auditState==3&&S.level!==2){if(S.taskType==="1"&&await p(S.planTaskId))return;I=2,T=4}[1,2,4].includes(Number(S.auditState))&&S.level!==2&&(I=1,T=void 0),v(),$.push({path:"/checkDetail",query:{handleType:D,showType:I,isBack:T,rowData:JSON.stringify({...S,mySubtasksList:void 0,taskId:S.planTaskId,planTaskId:S.taskId})}})},y=async()=>{var S,D,I,T,q,V;r.value=!0;try{const P={current:i.current,size:i.size,type:"2",serviceType:"1",parentPlanTaskId:"0"},C=ut;C.success&&((I=(D=(S=C.data)==null?void 0:S.listPage)==null?void 0:D.records)!=null&&I.length)&&(b.value.push(...(T=C.data)==null?void 0:T.listPage.records),b.value=b.value.map(E=>{let M=[];return c(E,M),E.mySubtasksList=M,E})),o.value=b.value.length>=((V=(q=C.data)==null?void 0:q.listPage)==null?void 0:V.total),r.value=!1}catch(P){r.value=!0,o.value=!0,de(P)}},f=()=>{i.current+=1,y()},x=()=>{o.value=!1,i.current=1,b.value=[],y(),g.value=!1};return(S,D)=>{const I=O,T=H,q=Qe,V=Fe,P=Ve;return u(),N("div",mt,[e("div",ht,[d(P,{modelValue:l(g),"onUpdate:modelValue":D[1]||(D[1]=C=>X(g)?g.value=C:null),onRefresh:x},{default:m(()=>[d(q,{loading:l(r),"onUpdate:loading":D[0]||(D[0]=C=>X(r)?r.value=C:null),finished:l(o),"finished-text":"没有更多了",onLoad:f},{default:m(()=>[(u(!0),N(L,null,R(l(b),(C,E)=>{var M;return u(),N(L,{key:C},[((M=C.children)==null?void 0:M.length)===0?(u(),w(T,{key:0,class:"page-list-box",ref_for:!0,ref:j=>l(a)(j,E)},{default:m(()=>[e("div",gt,[e("div",vt,[bt,e("span",kt,_(C.projectName),1)]),e("div",ft,[St,e("span",It,_(C.skdName),1)]),e("div",yt,[Nt,e("span",Ct,_(C.taskName),1)])])]),right:m(()=>[e("div",$t,[d(I,{square:"",plain:"",type:"primary",text:"详情",onClick:j=>n(C,"detail")},null,8,["onClick"]),d(I,{square:"",text:"处理",type:"primary",onClick:j=>n(C,"handle")},null,8,["onClick"])])]),_:2},1536)):(u(),w(we,{key:1,collapseBoxClass:"page-list-box"},{title:m(()=>[e("div",Dt,[e("div",Tt,[xt,e("span",jt,_(C.projectName),1)]),e("div",wt,[At,e("span",Lt,_(C.skdName),1)]),e("div",Pt,[Et,e("span",Jt,_(C.taskName),1)])])]),default:m(()=>[(u(!0),N(L,null,R(C.mySubtasksList,(j,ge)=>(u(),w(T,{class:"page-list-box",key:j.id,ref_for:!0,ref:W=>l(a)(W,E+"-"+ge)},{default:m(()=>[e("div",{class:"global-list-card",onClick:W=>l(h)(W,E+"-"+ge)},[e("div",Kt,[qt,e("span",Ut,_(j.taskName),1)])],8,Rt)]),right:m(()=>[e("div",Bt,[d(I,{square:"",plain:"",type:"primary",text:"详情",onClick:W=>n(j,"detail")},null,8,["onClick"]),d(I,{square:"",text:"处理",type:"primary",onClick:W=>n(j,"handle")},null,8,["onClick"])])]),_:2},1024))),128))]),_:2},1024))],64)}),128))]),_:1},8,["loading","finished"]),d(V,{bottom:"9vh"})]),_:1},8,["modelValue"])])])}}},Se=K(Mt,[["__scopeId","data-v-0cdabcd6"]]);const F=t=>(U("data-v-429e6f49"),t=t(),B(),t),zt={class:"page-check-container"},Gt={class:"page-content"},Ht=["onClick"],Ot={class:"global-list-item"},Yt=F(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),Zt={class:"global-list-item-content van-ellipsis"},Ft={class:"global-list-item"},Vt=F(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),Qt={class:"global-list-item-content van-ellipsis"},Wt={class:"global-list-item"},Xt=F(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),es={class:"global-list-item-content van-ellipsis"},ts={class:"custom-swipe-cell-right"},ss={class:"page-padding10"},as={class:"global-list-item"},ls=F(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),os={class:"global-list-item-content van-ellipsis"},ns={class:"global-list-item"},is=F(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),cs={class:"global-list-item-content van-ellipsis"},ds={class:"global-list-item"},rs=F(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),ps={class:"global-list-item-content van-ellipsis"},us=["onClick"],_s={class:"global-list-item"},ms=F(()=>e("span",{class:"global-list-item-title"},"子任务：",-1)),hs={class:"global-list-item-content van-ellipsis"},gs={class:"custom-swipe-cell-right-h"},vs={__name:"CheckDone",setup(t){let{setSwipeRef:s,clickSwipe:a}=Y();const h=G(),k=J({type:"3",parentPlanTaskId:"0"});function v(r,o){if(r.children.length)for(let g of r.children)v(g,o);else{o.push(r);return}}const $=r=>{let o=r.listPage.total,g=[];return r.listPage.records.forEach(i=>{let c=[];v(i,c),i.mySubtasksList=c,g.push(i)}),{arr:g,total:o}},b=(r,o)=>{let g,i;[1,2,4].includes(Number(r.auditState))&&r.level!==2&&(g=1),r.auditState==3&&r.level!==2&&(g=2,i=4),h.push({path:"/checkDetail",query:{handleType:o,showType:g,isBack:i,rowData:JSON.stringify({...r,mySubtasksList:void 0,taskId:r.planTaskId,planTaskId:r.taskId})}})};return(r,o)=>{const g=O,i=H;return u(),N("div",zt,[e("div",Gt,[d(Q,{ref:"refBaseList",params:l(k),pageInter:()=>{},extra:{resultHandle:$},type:"checkDone"},{default:m(({dataList:c})=>[(u(!0),N(L,null,R(c,(p,n)=>{var y;return u(),N(L,{key:p.id},[((y=p.children)==null?void 0:y.length)===0?(u(),w(i,{key:0,class:"page-list-box",ref_for:!0,ref:f=>l(s)(f,n)},{default:m(()=>[e("div",{class:"global-list-card-gray",onClick:f=>l(a)(f,n)},[e("div",Ot,[Yt,e("span",Zt,_(p.projectName),1)]),e("div",Ft,[Vt,e("span",Qt,_(p.skdName),1)]),e("div",Wt,[Xt,e("span",es,_(p.taskName),1)])],8,Ht)]),right:m(()=>[e("div",ts,[d(g,{square:"",color:"#909399",text:"详情",onClick:f=>b(p,"detail")},null,8,["onClick"])])]),_:2},1536)):(u(),w(we,{key:1,collapseBoxClass:"page-list-box"},{title:m(()=>[e("div",ss,[e("div",as,[ls,e("span",os,_(p.projectName),1)]),e("div",ns,[is,e("span",cs,_(p.skdName),1)]),e("div",ds,[rs,e("span",ps,_(p.taskName),1)])])]),default:m(()=>[(u(!0),N(L,null,R(p.mySubtasksList,(f,x)=>(u(),w(i,{class:"page-list-box",key:f.id,ref_for:!0,ref:S=>l(s)(S,n+"-"+x)},{default:m(()=>[e("div",{class:"global-list-card-gray",onClick:S=>l(a)(S,n+"-"+x)},[e("div",_s,[ms,e("span",hs,_(f.taskName),1)])],8,us)]),right:m(()=>[e("div",gs,[d(g,{square:"",color:"#909399",text:"详情",onClick:S=>b(f,"detail")},null,8,["onClick"])])]),_:2},1024))),128))]),_:2},1024))],64)}),128))]),_:1},8,["params","extra"])])])}}},Ie=K(vs,[["__scopeId","data-v-429e6f49"]]);const _e=tt.create({baseURL:"api/synergy-base/",timeout:30*1e3});_e.interceptors.request.use(t=>(ue.start(),t.headers["Synergy-Authorization"]="Basic c3luZXJneS1jbGllbnQ6MTZlZjNiZGEtOGU5ZC00OTcyLWIyZDAtMDkyMTIzMmZkNDFh",t.headers["Synergy-Auth"]=fe()?"Bearer "+fe():void 0,Promise.resolve(t)),t=>Promise.reject(t));_e.interceptors.response.use(t=>{ue.done();const{status:s,data:a}=t;return a},t=>{if(ue.done(),t.response.data.msg!=="请求未授权"&&t.message!=="timeout of 30000ms exceeded"){const{response:{data:{msg:s}}}=t;return s&&(t.message=s),t}else return new Error});const bs=t=>_e.get("/api/synergy-cooperation/work-station/task-approval-query",{params:t});const ee=t=>(U("data-v-24b72512"),t=t(),B(),t),ks={class:"page-container"},fs={class:"page-content"},Ss=["onClick"],Is={class:"global-list-item"},ys=ee(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),Ns={class:"global-list-item-content van-ellipsis"},Cs={class:"global-list-item"},$s=ee(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),Ds={class:"global-list-item-content van-ellipsis"},Ts={class:"global-list-item"},xs=ee(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),js={class:"global-list-item-content van-ellipsis"},ws={class:"global-list-item"},As=ee(()=>e("span",{class:"global-list-item-title"},"申请人：",-1)),Ls={class:"global-list-item-content"},Ps={class:"global-list-item"},Es=ee(()=>e("span",{class:"global-list-item-title"},"申请日期：",-1)),Js={class:"global-list-item-content"},Rs={class:"custom-swipe-cell-right"},Ks={__name:"Approval",props:{changeCounts:{type:Function,default:()=>{}}},emits:["changeCounts"],setup(t,{emit:s}){let{setSwipeRef:a,clickSwipe:h}=Y();const k=G(),v=J({approvalType:0,taskGroup:0}),$=s,b=(o,g)=>{k.push({path:"/approvalDetail",query:{handleType:g,approvalType:o.approvalType,record:JSON.stringify(o.approvalType===3?{...o.originResultPrintReturn,id:o.planTaskId}:{...o.originApprovalAbandonReturn,id:o.planTaskId,newTableId:o.tableId,tableId:o.oldTabId})}})},r=A();return Be(()=>{var o;return(o=r.value)==null?void 0:o.page.total},o=>{$("changeCounts","approval",o)},{deep:!0}),(o,g)=>{const i=O,c=H;return u(),N("div",ks,[e("div",fs,[d(Q,{ref_key:"refBaseList",ref:r,params:l(v),pageInter:l(bs),type:"approval"},{default:m(({dataList:p})=>[(u(!0),N(L,null,R(p,(n,y)=>(u(),w(c,{class:"page-list-box",key:y,ref_for:!0,ref:f=>l(a)(f,y)},{default:m(()=>[e("div",{onClick:f=>l(h)(f,y),class:z(n.approvalType===3?"global-list-card":"global-list-card-yellow")},[e("div",Is,[ys,e("span",Ns,_(n.projectName),1)]),e("div",Cs,[$s,e("span",Ds,_(n.workContentName),1)]),e("div",Ts,[xs,e("span",js,_(n.taskName),1)]),e("div",ws,[As,e("span",Ls,_(n.approvalUserName),1)]),e("div",Ps,[Es,e("span",Js,_(n.approvalTime),1)])],10,Ss)]),right:m(()=>[e("div",Rs,[d(i,{square:"",plain:"",color:n.approvalType===3?"#1989fa":"#e6a23c",text:"详情",onClick:f=>b(n,"detail")},null,8,["color","onClick"]),n.originApprovalAbandonReturn.status===3?(u(),N(L,{key:0},[],64)):(u(),w(i,{key:1,square:"",text:"处理",type:"primary",onClick:f=>b(n,"handle")},null,8,["onClick"]))])]),_:2},1024))),128))]),_:1},8,["params","pageInter"])])])}}},qs=K(Ks,[["__scopeId","data-v-24b72512"]]);const te=t=>(U("data-v-45d35e8c"),t=t(),B(),t),Us={class:"page-container"},Bs=["onClick"],Ms={class:"global-list-item"},zs=te(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),Gs={class:"global-list-item-content van-ellipsis"},Hs={class:"global-list-item"},Os=te(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),Ys={class:"global-list-item-content van-ellipsis"},Zs={class:"global-list-item"},Fs=te(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),Vs={class:"global-list-item-content van-ellipsis"},Qs={class:"global-list-item"},Ws=te(()=>e("span",{class:"global-list-item-title"},"送印人：",-1)),Xs={class:"global-list-item-content"},ea={class:"global-list-item"},ta=te(()=>e("span",{class:"global-list-item-title"},"送印时间：",-1)),sa={class:"global-list-item-content"},aa={class:"custom-swipe-cell-right"},la={__name:"ApprovalDoneResult",setup(t){let{setSwipeRef:s,clickSwipe:a}=Y();const h=G(),k=J({type:3}),v=($,b)=>{h.push({path:"/approvalDetail",query:{handleType:b,approvalType:3,record:JSON.stringify({...$,id:$.planTaskId})}})};return($,b)=>{const r=O,o=H;return u(),N("div",Us,[d(Q,{params:l(k),pageInter:$.getDoneResult,type:"approvalDoneResult"},{default:m(({dataList:g})=>[(u(!0),N(L,null,R(g,(i,c)=>(u(),w(o,{class:"page-list-box",key:c,ref_for:!0,ref:p=>l(s)(p,c)},{default:m(()=>[e("div",{class:"global-list-card-gray",onClick:p=>l(a)(p,c)},[e("div",Ms,[zs,e("span",Gs,_(i.projectName),1)]),e("div",Hs,[Os,e("span",Ys,_(i.skdName),1)]),e("div",Zs,[Fs,e("span",Vs,_(i.taskName),1)]),e("div",Qs,[Ws,e("span",Xs,_(i.trialUserName),1)]),e("div",ea,[ta,e("span",sa,_(i.trialDate),1)])],8,Bs)]),right:m(()=>[e("div",aa,[d(r,{square:"",color:"#909399",text:"详情",onClick:p=>v(i,"detail")},null,8,["onClick"])])]),_:2},1024))),128))]),_:1},8,["params","pageInter"])])}}},ye=K(la,[["__scopeId","data-v-45d35e8c"]]);const se=t=>(U("data-v-13b0583d"),t=t(),B(),t),oa={class:"page-container"},na=["onClick"],ia={class:"global-list-item"},ca=se(()=>e("span",{class:"global-list-item-title"},"项目名称：",-1)),da={class:"global-list-item-content van-ellipsis"},ra={class:"global-list-item"},pa=se(()=>e("span",{class:"global-list-item-title"},"工作内容：",-1)),ua={class:"global-list-item-content van-ellipsis"},_a={class:"global-list-item"},ma=se(()=>e("span",{class:"global-list-item-title"},"任务名称：",-1)),ha={class:"global-list-item-content van-ellipsis"},ga={class:"global-list-item"},va=se(()=>e("span",{class:"global-list-item-title"},"申请人：",-1)),ba={class:"global-list-item-content"},ka={class:"global-list-item"},fa=se(()=>e("span",{class:"global-list-item-title"},"申请日期：",-1)),Sa={class:"global-list-item-content"},Ia={class:"custom-swipe-cell-right"},ya={__name:"ApprovalDoneAbandoned",setup(t){let{setSwipeRef:s,clickSwipe:a}=Y();const h=Te(),k=G(),v=J({type:3,approve:h.userName}),$=(b,r)=>{k.push({path:"/approvalDetail",query:{handleType:r,approvalType:8,record:JSON.stringify({...b,id:b.planTaskId,newTableId:b.tableId,tableId:b.oldTabId})}})};return(b,r)=>{const o=O,g=H;return u(),N("div",oa,[d(Q,{params:l(v),pageInter:()=>{},type:"approvalDoneAbandoned"},{default:m(({dataList:i})=>[(u(!0),N(L,null,R(i,(c,p)=>(u(),w(g,{class:"page-list-box",key:p,ref_for:!0,ref:n=>l(s)(n,p)},{default:m(()=>[e("div",{class:"global-list-card-gray",onClick:n=>l(a)(n,p)},[e("div",ia,[ca,e("span",da,_(c.projectName),1)]),e("div",ra,[pa,e("span",ua,_(c.skdName),1)]),e("div",_a,[ma,e("span",ha,_(c.taskName),1)]),e("div",ga,[va,e("span",ba,_(c.userName),1)]),e("div",ka,[fa,e("span",Sa,_(c.startTime),1)])],8,na)]),right:m(()=>[e("div",Ia,[d(o,{square:"",color:"#909399",text:"详情",onClick:n=>$(c,"detail")},null,8,["onClick"])])]),_:2},1024))),128))]),_:1},8,["params"])])}}},Na=K(ya,[["__scopeId","data-v-13b0583d"]]);const me=t=>(U("data-v-e3981723"),t=t(),B(),t),Ca={class:"page-signatureApply-container"},$a={class:"page-content"},Da=["onClick"],Ta={class:"global-list-item"},xa=me(()=>e("span",{class:"global-list-item-title"},"发起人：",-1)),ja={class:"global-list-item-content van-ellipsis"},wa={class:"global-list-item"},Aa=me(()=>e("span",{class:"global-list-item-title"},"事务标题：",-1)),La={class:"global-list-item-content van-ellipsis"},Pa={class:"global-list-item"},Ea=me(()=>e("span",{class:"global-list-item-title"},"发起时间：",-1)),Ja={class:"global-list-item-content van-ellipsis"},Ra={class:"custom-swipe-cell-right-h"},Ka={__name:"SignatureApply",props:{changeCounts:{type:Function,default:()=>{}}},emits:["changeCounts"],setup(t,{emit:s}){let{setSwipeRef:a,clickSwipe:h}=Y();const k=G(),v=J({processDefinitionKey:"LC_CH_TRBQ",searchContent:""}),$=r=>{k.push({path:"/signatureApplyDetail",query:{handleType:"handle",rowData:JSON.stringify(r)}})},b=A();return(r,o)=>{const g=O,i=H;return u(),N("div",Ca,[e("div",$a,[d(Q,{ref_key:"refBaseList",ref:b,params:l(v),pageInter:()=>{},type:"signatureApply"},{default:m(({dataList:c})=>[(u(!0),N(L,null,R(c,(p,n)=>(u(),w(i,{key:p.taskId,class:"page-list-box",ref_for:!0,ref:y=>l(a)(y,n)},{default:m(()=>{var y,f,x;return[e("div",{class:"global-list-card",onClick:S=>l(h)(S,n)},[e("div",Ta,[xa,e("span",ja,_(((y=p.variables)==null?void 0:y.createUser)||""),1)]),e("div",wa,[Aa,e("span",La,_(((f=p.variables)==null?void 0:f.tableName)||""),1)]),e("div",Pa,[Ea,e("span",Ja,_(((x=p.variables)==null?void 0:x.preTaskTime)||""),1)])],8,Da)]}),right:m(()=>[e("div",Ra,[d(g,{square:"",text:"处理",type:"primary",onClick:y=>$(p)},null,8,["onClick"])])]),_:2},1024))),128))]),_:1},8,["params"])])])}}},qa=K(Ka,[["__scopeId","data-v-e3981723"]]);const ie=t=>(U("data-v-3083ef4e"),t=t(),B(),t),Ua={class:"page-signatureApply-container"},Ba={class:"page-content"},Ma=["onClick"],za={class:"global-list-item"},Ga=ie(()=>e("span",{class:"global-list-item-title"},"发起人：",-1)),Ha={class:"global-list-item-content van-ellipsis"},Oa={class:"global-list-item"},Ya=ie(()=>e("span",{class:"global-list-item-title"},"事务标题：",-1)),Za={class:"global-list-item-content van-ellipsis"},Fa={class:"global-list-item"},Va=ie(()=>e("span",{class:"global-list-item-title"},"发起时间：",-1)),Qa={class:"global-list-item-content van-ellipsis"},Wa={class:"global-list-item"},Xa=ie(()=>e("span",{class:"global-list-item-title"},"状态：",-1)),el={class:"global-list-item-content van-ellipsis"},tl={key:0,style:{color:"#07c160"}},sl={key:1,style:{color:"#ee0a24"}},al={class:"custom-swipe-cell-right-h"},ll={__name:"SignatureApplyDone",setup(t){let{setSwipeRef:s,clickSwipe:a}=Y();const h=A(),k=G(),v=J({processDefinitionKey:"LC_CH_TRBQ",searchContent:""}),$=b=>{k.push({path:"/signatureApplyDetail",query:{handleType:"detail",rowData:JSON.stringify(b)}})};return(b,r)=>{const o=O,g=H;return u(),N("div",Ua,[e("div",Ba,[d(Q,{ref_key:"refBaseList",ref:h,params:l(v),pageInter:()=>{},type:"signatureApplyDone"},{default:m(({dataList:i})=>[(u(!0),N(L,null,R(i,(c,p)=>(u(),w(g,{key:c.taskId,class:"page-list-box",ref_for:!0,ref:n=>l(s)(n,p)},{default:m(()=>{var n,y,f;return[e("div",{class:"global-list-card-gray",onClick:x=>l(a)(x,p)},[e("div",za,[Ga,e("span",Ha,_(((n=c.variables)==null?void 0:n.createUser)||""),1)]),e("div",Oa,[Ya,e("span",Za,_(((y=c.variables)==null?void 0:y.tableName)||""),1)]),e("div",Fa,[Va,e("span",Qa,_(((f=c.variables)==null?void 0:f.preTaskTime)||""),1)]),e("div",Wa,[Xa,e("span",el,[c.pass?(u(),N("span",tl,"已通过")):(u(),N("span",sl,"被退回"))])])],8,Ma)]}),right:m(()=>[e("div",al,[d(o,{square:"",color:"#909399",text:"详情",onClick:n=>$(c)},null,8,["onClick"])])]),_:2},1024))),128))]),_:1},8,["params"])])])}}},ol=K(ll,[["__scopeId","data-v-3083ef4e"]]);const he=t=>(U("data-v-8dc1bda4"),t=t(),B(),t),nl={class:"page-container"},il={class:"page-tab-title-box"},cl=he(()=>e("span",{class:"page-tab-title"},"审查",-1)),dl={key:0,class:"van-badge"},rl={class:"page-tab-title-box"},pl=he(()=>e("span",{class:"page-tab-title"},"审批",-1)),ul={key:0,class:"van-badge"},_l={class:"page-tab-title-box"},ml=he(()=>e("span",{class:"page-tab-title"},"签名申请",-1)),hl={key:0,class:"van-badge"},gl={class:"page-card-box"},vl={class:"page-content"},bl={__name:"index",setup(t){var y,f,x,S,D;const s=Te(),a=A(0),h=A(0),k=A(0);(((f=(y=s==null?void 0:s.lastRoute)==null?void 0:y.fullPath)==null?void 0:f.indexOf("Detail"))>-1||((x=s==null?void 0:s.lastRoute)==null?void 0:x.fullPath)==="/")&&(a.value=(S=s==null?void 0:s.homeActive)==null?void 0:S.activeGrid,h.value=(D=s==null?void 0:s.homeActive)==null?void 0:D.activeTab,k.value=s.homeActive.activeTabCard);let v=Me();const $=I=>{a.value=I,h.value=0,k.value=0,v.value=I?Ie:Se},b=I=>{if(a.value)switch(I){case 1:v.value=ye;break;case 2:v.value=ol;break;default:v.value=Ie;break}else switch(I){case 1:v.value=qs;break;case 2:v.value=qa;break;default:v.value=Se;break}},r=I=>{v.value=I?Na:ye};b(h.value),a.value&&h.value==1&&r(k.value);const o=J({check:0,approval:0,signatureApply:0});function g(I,T){o[I]=T}function i(I){o.check=28}i();function c(){o.approval=6}c();function p(){o.signatureApply=24}p(),s.setHomeActive({activeGrid:0,activeTab:0,activeTabCard:0});function n(){s.setHomeActive({activeGrid:a.value,activeTab:h.value,activeTabCard:k.value})}return ze(()=>{window.addEventListener("beforeunload",n)}),Ge(()=>{n(),window.removeEventListener("beforeunload",n)}),(I,T)=>{const q=rt,V=nt,P=Ye,C=Ze,E=Oe,M=Ae;return u(),N("div",nl,[d(E,null,{default:m(()=>[d(V,{"column-num":2,class:"custom-grid",clickable:"",direction:"horizontal"},{default:m(()=>[d(q,{onClick:T[0]||(T[0]=j=>$(0)),class:z(l(a)?"":"custom-grid-active"),icon:"todo-list-o",text:"待办"},null,8,["class"]),d(q,{class:z(l(a)?"custom-grid-active":""),onClick:T[1]||(T[1]=j=>$(1)),icon:"completed-o",text:"已办"},null,8,["class"])]),_:1}),d(C,{class:"custom-tabs",active:l(h),"onUpdate:active":T[2]||(T[2]=j=>X(h)?h.value=j:null),onChange:b},{default:m(()=>[d(P,null,{title:m(()=>[e("div",il,[cl,!l(a)&&l(o).check?(u(),N("span",dl,_(l(o).check),1)):ce("",!0)])]),_:1}),d(P,null,{title:m(()=>[e("div",rl,[pl,!l(a)&&l(o).approval?(u(),N("span",ul,_(l(o).approval),1)):ce("",!0)])]),_:1}),d(P,null,{title:m(()=>[e("div",_l,[ml,!l(a)&&l(o).signatureApply?(u(),N("span",hl,_(l(o).signatureApply),1)):ce("",!0)])]),_:1})]),_:1},8,["active"]),oe(e("div",gl,[d(C,{active:l(k),"onUpdate:active":T[3]||(T[3]=j=>X(k)?k.value=j:null),type:"card",onChange:r},{default:m(()=>[d(P,{title:"成果送印"}),d(P,{title:"审查废弃"})]),_:1},8,["active"])],512),[[ne,l(a)&&l(h)==1]])]),_:1}),e("div",vl,[(u(),w(He(l(v)),{onChangeCounts:g},null,32))]),d(M)])}}},Pl=K(bl,[["__scopeId","data-v-8dc1bda4"]]);export{Pl as default};
