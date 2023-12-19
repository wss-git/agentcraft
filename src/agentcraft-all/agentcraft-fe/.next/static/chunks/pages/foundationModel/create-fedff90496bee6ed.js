(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{66499:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundationModel/create",function(){return n(50173)}])},2394:function(e,t,n){"use strict";n.d(t,{Z:function(){return FeatureDescription}});var i=n(85893),r=n(92716),l=n(95117),s=n(64523),a=n(69876),d=n(19236),o=n(91759);function InfoDetail(e){let{detail:t,title:n}=e,[s,{open:a,close:d}]=(0,o.q)(!1);return(0,i.jsx)(i.Fragment,{children:t?(0,i.jsxs)("div",{children:[(0,i.jsx)(r.d,{opened:s,onClose:d,title:n,children:(0,i.jsx)(l.x,{children:t})}),(0,i.jsx)(l.x,{onClick:()=>a(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:t,description:n,detail:r,mt:o,mb:c}=e;return(0,i.jsxs)(s.x,{mt:o||24,mb:c||24,children:[(0,i.jsxs)(a.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,i.jsx)(d.D,{order:2,children:t}),(0,i.jsx)(InfoDetail,{title:t,detail:r})]}),n?(0,i.jsx)(l.x,{lineClamp:4,children:n}):null]})}},50173:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return IndexPage}});var i=n(85893),r=n(67294),l=n(11163),s=n(53416),a=n(20966),d=n(70157),o=n(80061),c=n(28855),u=n(73193),x=n(64523),p=n(67841),h=n(94491),j=n(49737),m=n(20741),f=n(69876),g=n(21017),b=n(22870),v=n(71232),w=n(95117),k=n(17789),y=n(54685),_=n(93284),C=n(12593),F=n(77248),I=n(2013),S=n(94173),T=n(93844),M=n(2394),A=n(78159),O=n(86105),P=n(96384);function LoadingStepper(){let e=(0,A.bQ)().appStatus;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{wordBreak:"break-all",width:400,display:"flex",alignItems:"center"},children:[(0,i.jsx)("span",{children:"该应基础模型创建预计需要1-3分钟，请耐心等待，你可以可以关闭此弹框，在基础模型列表查看您创建的基础模型列表"}),(0,i.jsx)(a.a,{})]}),(0,i.jsxs)(d.v,{active:e,breakpoint:"sm",children:[(0,i.jsx)(d.v.Step,{label:"初始化",description:""}),(0,i.jsx)(d.v.Step,{label:"创建中",description:""}),(0,i.jsx)(d.v.Step,{label:"创建成功/失败",description:""})]})]})}function FoundationModelForm(){let e=(0,A.bQ)().setOpen,t=(0,A.bQ)().setCreateLoading,n=(0,A.bQ)().setAppStatus,l=(0,A.bQ)().fmTemplate,a={},d=(null==l?void 0:l.required)||[];d.length>0&&(a=d.reduce((e,t)=>(e[t]=e=>e?null:"必需填写",e),{}));let h=(0,F.c)({initialValues:{},validate:a});return(0,r.useEffect)(()=>{if(l.properties){let e=Object.keys(l.properties).reduce((e,t)=>(e[t]=l.properties[t].default,e),{});h.setValues(e)}},[l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.x,{maw:O.hE,mx:"auto",children:l.properties&&Object.keys(null==l?void 0:l.properties).map(e=>(0,i.jsx)("div",{children:function(e,t){if(t.hiddenUI)return null;{let n=(0,i.jsx)(o.o,{withAsterisk:!0,label:t.title,placeholder:"",...h.getInputProps(e),description:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}})});return"string"===t.type&&("select"===t.uiType&&(n=(0,i.jsx)(c.Ph,{withAsterisk:l.required.includes(e),data:t.dataSource,description:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}}),label:t.title,placeholder:"",...h.getInputProps(e)})),"password"===t.uiType&&(n=(0,i.jsx)(u.W,{withAsterisk:!0,label:t.title,placeholder:"",...h.getInputProps(e),description:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.description}})}))),n}}(e,null==l?void 0:l.properties[e])},e))}),(0,i.jsx)(x.x,{maw:O.hE,mx:"auto",pt:12,style:{textAlign:"right"},children:(0,i.jsx)(p.z,{onClick:async()=>{if(h.validate(),h.isValid()){try{let e="".concat(P.tc,"_").concat((0,s.x0)());t(!0),n(A.FR.INIT);let i=await (0,A.iO)(l.template,Object.assign({},h.values,{name:e})),r=i.name;await new Promise((e,t)=>{n(A.FR.CREATING);let i=setInterval(async()=>{try{let t=await (0,A.Yo)(r),l=t.lastRelease;"published"===l.status&&(clearInterval(i),n(A.FR.SUCCESS),e(""))}catch(e){t(e)}},4e3)})}catch(e){console.log(e)}t(!1),e(!1)}},children:"确认"})})]})}function Add(){let e=(0,A.bQ)().open,t=(0,A.bQ)().setOpen,n=(0,A.bQ)().createLoading;return(0,i.jsxs)(h.u,{opened:e,onClose:()=>{t(!1)},title:"创建基础模型",centered:!0,size:"xl",children:[(0,i.jsx)(j.f,{loader:(0,i.jsx)(LoadingStepper,{}),visible:n,overlayOpacity:.8,overlayBlur:2}),e&&(0,i.jsx)(FoundationModelForm,{})]})}function FoundationModelTab(){let e=(0,A.bQ)().setOpen,t=(0,A.bQ)().setFmTemplate,openToCreateFoundationModel=n=>{t(Object.assign({},n.templateParams,{template:n.template,description:n.description})),e(!0)};return(0,i.jsxs)(m.m,{variant:"outline",defaultValue:"text2text",children:[(0,i.jsx)(m.m.List,{children:(0,i.jsx)(m.m.Tab,{value:"text2text",icon:(0,i.jsx)(I.Z,{size:"0.8rem"}),children:"文本生成"})}),(0,i.jsx)(m.m.Panel,{value:"text2text",pt:"xs",children:(0,i.jsx)(f.k,{mih:50,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:P.Go.map((e,t)=>(0,i.jsxs)(g.Z,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,style:{width:320},mr:12,children:[(0,i.jsx)(g.Z.Section,{children:(0,i.jsx)(b.E,{src:e.icon,style:{margin:"10px auto"},height:160,width:160,alt:e.tag.join("")})}),(0,i.jsxs)(v.Z,{position:"apart",mt:"md",mb:"xs",children:[(0,i.jsx)(w.x,{weight:500,children:e.name}),e.githubLink?(0,i.jsx)("a",{href:e.githubLink,target:"_blank",children:(0,i.jsx)(S.Z,{})}):null]}),(0,i.jsx)("div",{children:e.tag.map(e=>(0,i.jsx)(k.C,{color:"green",variant:"light",mr:4,children:e},"template-".concat(t,"-").concat(e)))}),(0,i.jsx)(w.x,{size:"sm",color:"dimmed",children:e.description}),(0,i.jsxs)(f.k,{align:"center",children:[(0,i.jsx)(p.z,{mr:8,variant:"light",fullWidth:!0,mt:"md",radius:"md",onClick:()=>openToCreateFoundationModel(e),children:"直接创建"}),(0,i.jsx)("a",{target:"_blank",href:e.fcLink,children:(0,i.jsx)(p.z,{variant:"light",color:"yellow",fullWidth:!0,mt:"md",radius:"md",children:(0,i.jsxs)(f.k,{align:"center",children:["云创建",(0,i.jsx)(T.Z,{})]})})})]})]},"template-".concat(t)))})})]})}function CreateFoundationModel(){let e=(0,l.useRouter)(),{query:t}=e,n=[{title:"AgentCraft",href:"/"},{title:"基础模型",href:"/foundationModel"},{title:"创建基础模型",href:"/foundationModel/create"}].map((e,t)=>(0,i.jsx)(y.e,{href:e.href,children:e.title},t));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.O,{children:n}),(0,i.jsx)(M.Z,{title:"创建基础模型",description:"依托阿里云Serverless的丰富应用模版以及完整的工具链，AgentCraft可以创建丰富多样的基础模型服务"}),(0,i.jsx)(C.P,{title:"基础模型创建提示",children:(0,i.jsxs)(f.k,{align:"center",children:["使用非阿里云主账号部署的AgentCraft,请选择使用",(0,i.jsx)(w.x,{c:"yellow",fw:700,children:"”云创建“"}),"跳转到",(0,i.jsx)("a",{href:"https://fcnext.console.aliyun.com/applications?tab=all",target:"_blank",children:"函数计算控制台"}),"进行基础模型的服务创建，在云端创建的时候请注意使用AgentCraft前缀作为应用名"]})}),(0,i.jsx)(x.x,{mt:12,children:(0,i.jsx)(FoundationModelTab,{})}),(0,i.jsx)(Add,{})]})}function IndexPage(){return(0,i.jsx)(CreateFoundationModel,{})}}},function(e){e.O(0,[871,855,379,774,888,179],function(){return e(e.s=66499)}),_N_E=e.O()}]);