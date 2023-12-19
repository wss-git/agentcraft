(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{93284:function(e,r,t){"use strict";t.d(r,{O:function(){return h}});var o=t(67294),n=t(64761),i=t(24241),a=(0,t(56817).k)(e=>({root:{display:"flex",alignItems:"center"},breadcrumb:{lineHeight:1,whiteSpace:"nowrap",WebkitTapHighlightColor:"transparent"},separator:{marginLeft:e.spacing.xs,marginRight:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[7],lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center"}})),l=t(95117),s=t(64523),d=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&__defNormalProp(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>r.indexOf(o)&&u.call(e,o)&&(t[o]=e[o]);return t};let f={separator:"/"},h=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Breadcrumbs",f,e),{className:d,children:c,separator:p,classNames:u,styles:h,unstyled:g,variant:m}=t,b=__objRest(t,["className","children","separator","classNames","styles","unstyled","variant"]),{classes:y,cx:x}=a(null,{classNames:u,styles:h,unstyled:g,name:"Breadcrumbs",variant:m}),_=o.Children.toArray(c).reduce((e,r,t,n)=>{var a;let s=(0,i.k)(r)?o.cloneElement(r,{className:x(y.breadcrumb,null==(a=r.props)?void 0:a.className),key:t}):o.createElement("div",{className:y.breadcrumb,key:t},r);return e.push(s),t!==n.length-1&&e.push(o.createElement(l.x,{size:"sm",className:y.separator,key:`separator-${t}`},p)),e},[]);return o.createElement(s.x,__spreadValues({className:x(y.root,d),ref:r},b),_)});h.displayName="@mantine/core/Breadcrumbs"},95033:function(e,r,t){"use strict";t.d(r,{y:function(){return j}});var o=t(67294),n=t(64761),i=t(48427),a=t(95117),l=(0,t(56817).k)((e,{color:r})=>({root:{backgroundColor:e.fn.themeColor(r,"dark"===e.colorScheme?5:2),color:"dark"===e.colorScheme?e.colors.dark[9]:"inherit"}})),s=t(64523),d=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&__defNormalProp(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__objRest=(e,r)=>{var t={};for(var o in e)p.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&c)for(var o of c(e))0>r.indexOf(o)&&u.call(e,o)&&(t[o]=e[o]);return t};let f={color:"yellow"},h=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Mark",f,e),{color:i,className:a,unstyled:d,variant:c}=t,p=__objRest(t,["color","className","unstyled","variant"]),{classes:u,cx:h}=l({color:i},{unstyled:d,name:"Mark",variant:c});return o.createElement(s.x,__spreadValues({component:"mark",ref:r,className:h(u.root,a)},p))});function escapeRegex(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&")}h.displayName="@mantine/core/Mark";var g=Object.defineProperty,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,Highlight_defNormalProp=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Highlight_spreadValues=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&Highlight_defNormalProp(e,t,r[t]);if(m)for(var t of m(r))y.call(r,t)&&Highlight_defNormalProp(e,t,r[t]);return e},Highlight_objRest=(e,r)=>{var t={};for(var o in e)b.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&m)for(var o of m(e))0>r.indexOf(o)&&y.call(e,o)&&(t[o]=e[o]);return t};let x={highlightColor:"yellow"},_=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Highlight",x,e),{children:i,highlight:l,highlightColor:s,highlightStyles:d,unstyled:c}=t,p=Highlight_objRest(t,["children","highlight","highlightColor","highlightStyles","unstyled"]),u=function(e,r){if(null==r)return[{chunk:e,highlighted:!1}];let t=Array.isArray(r)?r.map(escapeRegex):escapeRegex(r),o=Array.isArray(t)?t.filter(e=>e.trim().length>0).length>0:""!==t.trim();if(!o)return[{chunk:e,highlighted:!1}];let n="string"==typeof t?t.trim():t.filter(e=>0!==e.trim().length).map(e=>e.trim()).join("|"),i=RegExp(`(${n})`,"gi"),a=e.split(i).map(e=>({chunk:e,highlighted:i.test(e)})).filter(({chunk:e})=>e);return a}(i,l);return o.createElement(a.x,Highlight_spreadValues({unstyled:c,ref:r,__staticSelector:"Highlight"},p),u.map(({chunk:e,highlighted:r},t)=>r?o.createElement(h,{unstyled:c,key:t,color:s,sx:d,"data-highlight":e},e):o.createElement("span",{key:t},e)))});_.displayName="@mantine/core/Highlight";let j=(0,i.F)(_)},95078:function(e,r,t){"use strict";t.d(r,{i:function(){return w}});var o=t(67294),n=t(64761),i=t(56817),a=t(96768),l=t(14258),s=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&__defNormalProp(e,t,r[t]);if(p)for(var t of p(r))f.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>d(e,c(r)),h=(0,i.k)((e,{captionSide:r,horizontalSpacing:t,verticalSpacing:o,fontSize:n,withBorder:i,withColumnBorders:s})=>{let d=`${(0,a.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:__spreadProps(__spreadValues({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:r,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:i?d:void 0,"& caption":{marginTop:"top"===r?0:e.spacing.xs,marginBottom:"bottom"===r?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th, & tbody tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:(0,l.a)({size:n,sizes:e.fontSizes}),padding:`${(0,l.a)({size:o,sizes:e.spacing})} ${(0,l.a)({size:t,sizes:e.spacing})}`},"& thead tr th":{borderBottom:d},"& tfoot tr th, & tbody tr th":{borderTop:d},"& tbody tr td":{padding:`${(0,l.a)({size:o,sizes:e.spacing})} ${(0,l.a)({size:t,sizes:e.spacing})}`,borderTop:d,fontSize:(0,l.a)({size:n,sizes:e.fontSizes})},"& tbody tr:first-of-type td, & tbody tr:first-of-type th":{borderTop:"none"},"& thead th, & tbody td":{borderRight:s?d:"none","&:last-of-type":{borderRight:"none",borderLeft:s?d:"none"}},"& tbody tr th":{borderRight:s?d:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),g=t(64523),m=Object.defineProperty,b=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,Table_defNormalProp=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Table_spreadValues=(e,r)=>{for(var t in r||(r={}))_.call(r,t)&&Table_defNormalProp(e,t,r[t]);if(x)for(var t of x(r))j.call(r,t)&&Table_defNormalProp(e,t,r[t]);return e},Table_spreadProps=(e,r)=>b(e,y(r)),__objRest=(e,r)=>{var t={};for(var o in e)_.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&x)for(var o of x(e))0>r.indexOf(o)&&j.call(e,o)&&(t[o]=e[o]);return t};let v={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},w=(0,o.forwardRef)((e,r)=>{let t=(0,n.N4)("Table",v,e),{className:i,children:a,striped:l,highlightOnHover:s,captionSide:d,horizontalSpacing:c,verticalSpacing:p,fontSize:u,unstyled:f,withBorder:m,withColumnBorders:b,variant:y}=t,x=__objRest(t,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders","variant"]),{classes:_,cx:j}=h({captionSide:d,verticalSpacing:p,horizontalSpacing:c,fontSize:u,withBorder:m,withColumnBorders:b},{unstyled:f,name:"Table",variant:y});return o.createElement(g.x,Table_spreadProps(Table_spreadValues({},x),{component:"table",ref:r,className:j(_.root,i),"data-striped":l||void 0,"data-hover":s||void 0}),a)});w.displayName="@mantine/core/Table"},52615:function(e,r,t){"use strict";t.d(r,{g:function(){return O}});var o=t(67294),n=t(87462),i=t(63366),a=o.useLayoutEffect,useLatest=function(e){var r=o.useRef(e);return a(function(){r.current=e}),r},updateRef=function(e,r){if("function"==typeof e){e(r);return}e.current=r},use_composed_ref_esm=function(e,r){var t=(0,o.useRef)();return(0,o.useCallback)(function(o){e.current=o,t.current&&updateRef(t.current,null),t.current=r,r&&updateRef(r,o)},[r])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},forceHiddenStyles=function(e){Object.keys(l).forEach(function(r){e.style.setProperty(r,l[r],"important")})},s=null,getHeight=function(e,r){var t=e.scrollHeight;return"border-box"===r.sizingStyle.boxSizing?t+r.borderSize:t-r.paddingSize},noop=function(){},d=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],c=!!document.documentElement.currentStyle,getSizingData=function(e){var r=window.getComputedStyle(e);if(null===r)return null;var t=d.reduce(function(e,t){return e[t]=r[t],e},{}),o=t.boxSizing;if(""===o)return null;c&&"border-box"===o&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var n=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),i=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:n,borderSize:i}},useWindowResizeListener=function(e){var r=useLatest(e);(0,o.useLayoutEffect)(function(){var handler=function(e){r.current(e)};return window.addEventListener("resize",handler),function(){window.removeEventListener("resize",handler)}},[])},p=(0,o.forwardRef)(function(e,r){var t=e.cacheMeasurements,a=e.maxRows,l=e.minRows,d=e.onChange,c=void 0===d?noop:d,p=e.onHeightChange,u=void 0===p?noop:p,f=(0,i.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),h=void 0!==f.value,g=(0,o.useRef)(null),m=use_composed_ref_esm(g,r),b=(0,o.useRef)(0),y=(0,o.useRef)(),resizeTextarea=function(){var e,r,o,n,i,d,c,p,f,h,m,x=g.current,_=t&&y.current?y.current:getSizingData(x);if(_){y.current=_;var j=(e=x.value||x.placeholder||"x",void 0===(r=l)&&(r=1),void 0===(o=a)&&(o=1/0),s||((s=document.createElement("textarea")).setAttribute("tabindex","-1"),s.setAttribute("aria-hidden","true"),forceHiddenStyles(s)),null===s.parentNode&&document.body.appendChild(s),n=_.paddingSize,i=_.borderSize,c=(d=_.sizingStyle).boxSizing,Object.keys(d).forEach(function(e){s.style[e]=d[e]}),forceHiddenStyles(s),s.value=e,p=getHeight(s,_),s.value="x",h=(f=s.scrollHeight-n)*r,"border-box"===c&&(h=h+n+i),p=Math.max(h,p),m=f*o,"border-box"===c&&(m=m+n+i),[p=Math.min(m,p),f]),v=j[0],w=j[1];b.current!==v&&(b.current=v,x.style.setProperty("height",v+"px","important"),u(v,{rowHeight:w}))}};return(0,o.useLayoutEffect)(resizeTextarea),useWindowResizeListener(resizeTextarea),(0,o.createElement)("textarea",(0,n.Z)({},f,{onChange:function(e){h||resizeTextarea(),c(e)},ref:m}))}),u=t(83051),f=t(64761),h=(0,t(56817).k)(e=>({input:{paddingTop:e.spacing.xs,paddingBottom:e.spacing.xs}})),g=t(12756),m=t(94151),b=Object.defineProperty,y=Object.defineProperties,x=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&__defNormalProp(e,t,r[t]);if(_)for(var t of _(r))v.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>y(e,x(r)),__objRest=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&_)for(var o of _(e))0>r.indexOf(o)&&v.call(e,o)&&(t[o]=e[o]);return t};let w={autosize:!1,size:"sm",__staticSelector:"Textarea"},O=(0,o.forwardRef)((e,r)=>{let t=(0,f.N4)("Textarea",w,e),{autosize:n,maxRows:i,minRows:a,label:l,error:s,description:d,id:c,className:b,required:y,style:x,wrapperProps:_,classNames:j,styles:v,size:O,__staticSelector:P,sx:S,errorProps:z,descriptionProps:k,labelProps:N,inputWrapperOrder:R,inputContainer:E,unstyled:C,withAsterisk:T,variant:A}=t,H=__objRest(t,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),L=(0,u.M)(c),{classes:V,cx:W}=h(),{systemStyles:B,rest:I}=(0,g.x)(H),F=__spreadValues({required:y,ref:r,error:s,id:L,classNames:__spreadProps(__spreadValues({},j),{input:W(V.input,null==j?void 0:j.input)}),styles:v,__staticSelector:P,size:O,multiline:!0,unstyled:C,variant:A},I);return o.createElement(m.I.Wrapper,__spreadValues(__spreadValues({label:l,error:s,id:L,description:d,required:y,style:x,className:b,classNames:j,styles:v,size:O,__staticSelector:P,sx:S,errorProps:z,labelProps:N,descriptionProps:k,inputContainer:E,inputWrapperOrder:R,unstyled:C,withAsterisk:T,variant:A},B),_),n?o.createElement(m.I,__spreadProps(__spreadValues({},F),{component:p,maxRows:i,minRows:a})):o.createElement(m.I,__spreadProps(__spreadValues({},F),{component:"textarea",rows:a})))});O.displayName="@mantine/core/Textarea"},89301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return t(79597)}])},2394:function(e,r,t){"use strict";t.d(r,{Z:function(){return FeatureDescription}});var o=t(85893),n=t(92716),i=t(95117),a=t(64523),l=t(69876),s=t(19236),d=t(91759);function InfoDetail(e){let{detail:r,title:t}=e,[a,{open:l,close:s}]=(0,d.q)(!1);return(0,o.jsx)(o.Fragment,{children:r?(0,o.jsxs)("div",{children:[(0,o.jsx)(n.d,{opened:a,onClose:s,title:t,children:(0,o.jsx)(i.x,{children:r})}),(0,o.jsx)(i.x,{onClick:()=>l(),children:"信息"})]}):null})}function FeatureDescription(e){let{title:r,description:t,detail:n,mt:d,mb:c}=e;return(0,o.jsxs)(a.x,{mt:d||24,mb:c||24,children:[(0,o.jsxs)(l.k,{mih:20,gap:"md",justify:"flex-start",align:"flex-start",direction:"row",wrap:"wrap",children:[(0,o.jsx)(s.D,{order:2,children:r}),(0,o.jsx)(InfoDetail,{title:r,detail:n})]}),t?(0,o.jsx)(i.x,{lineClamp:4,children:t}):null]})}},79597:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return IndexPage}});var o=t(85893),n=t(67294),i=t(41664),a=t.n(i),l=t(95117),s=t(95033),d=t(67841),c=t(64523),p=t(49737),u=t(95078),f=t(94491),h=t(80061),g=t(52615),m=t(54685),b=t(93284),y=t(77248),x=t(73344),_=t(71346),j=t(2394),v=t(25288),w=t(86105);function List(){let e=(0,_.qr)().appList,r=(0,_.qr)().loading,t=(0,_.qr)().setLoading,removeApplication=e=>{let{id:r,name:n}=e;x.qk.openConfirmModal({title:"删除应用",centered:!0,children:(0,o.jsx)(l.x,{size:"sm",children:(0,o.jsx)(s.y,{highlight:n,children:"确定删除 ".concat(n,"?")})}),labels:{confirm:"确定",cancel:"取消"},onCancel:()=>console.log("Cancel"),confirmProps:{color:"red"},onConfirm:async()=>{t(!0),await (0,_.rw)(r),await (0,_.RV)(),t(!1)}})},getApp=async()=>{t(!0),await (0,_.RV)(),t(!1)},i=e.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e.id}),(0,o.jsx)("td",{children:(0,o.jsx)(a(),{href:"/app/".concat(e.id,"/knowledgeBase"),children:e.name})}),(0,o.jsx)("td",{children:e.description}),(0,o.jsx)("td",{children:(0,v.o0)(e.created)}),(0,o.jsx)("td",{children:(0,v.o0)(e.modified)}),(0,o.jsxs)("td",{children:[" ",(0,o.jsx)(d.z,{variant:"filled",color:"red",size:"xs",onClick:()=>removeApplication(e),children:"删除"})]})]},e.id));return(0,n.useEffect)(()=>{getApp()},[]),(0,o.jsxs)(c.x,{pos:"relative",children:[(0,o.jsx)(p.f,{visible:r,overlayOpacity:.3}),(0,o.jsxs)(u.i,{striped:!0,withBorder:!0,withColumnBorders:!0,mt:12,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"应用id"}),(0,o.jsx)("th",{children:"应用名"}),(0,o.jsx)("th",{children:"应用描述"}),(0,o.jsx)("th",{children:"创建时间"}),(0,o.jsx)("th",{children:"修改时间"}),(0,o.jsx)("th",{children:"操作"})]})}),(0,o.jsx)("tbody",{children:i})]})]})}function Add(){let e=(0,_.qr)().open,r=(0,_.qr)().setOpen,t=(0,_.qr)().setLoading,n=(0,y.c)({initialValues:{name:"",description:""},validate:{name:e=>e?null:"应用名必填"}});return(0,o.jsxs)(f.u,{opened:e,onClose:()=>{r(!1)},title:"创建应用",centered:!0,children:[(0,o.jsxs)(c.x,{maw:w.hE,mx:"auto",children:[(0,o.jsx)(h.o,{withAsterisk:!0,label:"名称",placeholder:"输入应用名",...n.getInputProps("name")}),(0,o.jsx)(g.g,{label:"描述",placeholder:"输入应用描述",...n.getInputProps("description")})]}),(0,o.jsx)(c.x,{maw:w.hE,mx:"auto",pt:12,style:{textAlign:"right"},children:(0,o.jsx)(d.z,{onClick:async()=>{if(n.validate(),n.isValid()){t(!0);let e=(null==n?void 0:n.values)||{};await (0,_.E9)(e),await (0,_.RV)(),r(!1),t(!1)}},children:"确认"})})]})}function ApplicationPage(){let e=[{title:"AgentCraft",href:"#"},{title:"应用",href:"/application"}].map((e,r)=>(0,o.jsx)(m.e,{href:e.href,children:e.title},r)),r=(0,_.qr)().setOpen;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.O,{children:e}),(0,o.jsx)(j.Z,{title:"应用",description:"AgentCraft的应用是对应业务场景的抽象，您可以聚合同类业务到同一个应用里面，在一个应用下您可以构建多个知识库服务及agent服务"}),(0,o.jsx)(c.x,{mt:12,children:(0,o.jsx)(d.z,{onClick:()=>r(!0),children:"新建应用"})}),(0,o.jsx)(Add,{}),(0,o.jsx)(List,{})]})}function IndexPage(){return(0,o.jsx)(ApplicationPage,{})}},71346:function(e,r,t){"use strict";t.d(r,{E9:function(){return addApplication},RV:function(){return getApplications},qr:function(){return a},rw:function(){return deleteApplication}});var o=t(64529),n=t(782),i=t(2393);let a=(0,o.Ue)()((0,n.mW)(e=>({appList:[],open:!1,loading:!1,updateAppList:r=>e(e=>({appList:r})),setLoading:r=>e(e=>({loading:r})),setOpen:r=>e(e=>({open:r}))})));async function getApplications(){let e=a.getState(),r=e.updateAppList,t=await (0,i.W)("/api/application/list"),o=t.data;o&&r(o)}async function deleteApplication(e){return await (0,i.W)("/api/application/delete?id=".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addApplication(e){return await (0,i.W)("/api/application/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=89301)}),_N_E=e.O()}]);