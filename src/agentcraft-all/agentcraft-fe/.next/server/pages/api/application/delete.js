"use strict";(()=>{var e={};e.id=4053,e.ids=[4053],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},9648:e=>{e.exports=import("axios")},6502:(e,a,t)=>{t.a(e,async(e,r)=>{try{t.r(a),t.d(a,{config:()=>c,default:()=>l,routeModule:()=>p});var s=t(1802),n=t(7153),o=t(6249),i=t(2217),d=e([i]);i=(d.then?(await d)():d)[0];let l=(0,o.l)(i,"default"),c=(0,o.l)(i,"config"),p=new s.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/application/delete",pathname:"/api/application/delete",bundlePath:"",filename:""},userland:i});r()}catch(e){r(e)}})},2217:(e,a,t)=>{t.a(e,async(e,r)=>{try{t.r(a),t.d(a,{default:()=>handler});var s=t(15),n=e([s]);async function handler(e,a){let{id:t}=e.query,r=await s.Z.delete(`/app/${t}`);s.Z.defaults.headers.common.Authorization=e.headers.authorization,a.status(r.status).json(r.data)}s=(n.then?(await n)():n)[0],r()}catch(e){r(e)}})},15:(e,a,t)=>{t.a(e,async(e,r)=>{try{t.d(a,{Z:()=>i});var s=t(9648),n=e([s]);s=(n.then?(await n)():n)[0];let o=s.default.create({baseURL:process.env.baseUrl||"",headers:{"Content-Type":"application/json"}});o.interceptors.response.use(e=>Promise.resolve(e),e=>{if(e.response.status){console.log("from backend server:",e);let{status:a,data:t}=e.response;return Promise.resolve({status:a,data:{code:a,message:t.detail}})}});let i=o;r()}catch(e){r(e)}})}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[4222],()=>__webpack_exec__(6502));module.exports=t})();