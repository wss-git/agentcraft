"use strict";(()=>{var e={};e.id=9529,e.ids=[9529],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6675:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{config:()=>l,default:()=>u,routeModule:()=>c});var r=t(1802),i=t(7153),n=t(6249),o=t(2904),d=e([o]);o=(d.then?(await d)():d)[0];let u=(0,n.l)(o,"default"),l=(0,n.l)(o,"config"),c=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/dataset/[id]/datasource/list",pathname:"/api/dataset/[id]/datasource/list",bundlePath:"",filename:""},userland:o});s()}catch(e){s(e)}})},2904:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.r(a),t.d(a,{default:()=>handler});var r=t(15),i=t(9253),n=e([r]);async function handler(e,a){let{page:t=0,limit:s=2e3,id:n}=e.query,o=e.query.dataSetType,d={};r.Z.defaults.headers.common.Authorization=e.headers.authorization,d=o==i.I.QUESTION?await r.Z.get(`/question/list/${n}`,{params:{page:t,limit:s}}):await r.Z.get(`/document/list/${n}`,{params:{page:t,limit:s}}),a.status(d.status).json(d.data)}r=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},9253:(e,a,t)=>{var s;t.d(a,{I:()=>s}),function(e){e[e.QUESTION=1]="QUESTION",e[e.DOCUMENT=2]="DOCUMENT"}(s||(s={}))},15:(e,a,t)=>{t.a(e,async(e,s)=>{try{t.d(a,{Z:()=>o});var r=t(9648),i=e([r]);r=(i.then?(await i)():i)[0];let n=r.default.create({baseURL:process.env.baseUrl||"",headers:{"Content-Type":"application/json"}});n.interceptors.response.use(e=>Promise.resolve(e),e=>{if(e.response.status){let{status:a,data:t}=e.response;return Promise.resolve({status:a,data:{code:a,message:t.detail}})}});let o=n;s()}catch(e){s(e)}})}};var a=require("../../../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(6675));module.exports=t})();