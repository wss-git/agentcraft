"use strict";exports.id=1346,exports.ids=[1346],exports.modules={7125:(t,a,e)=>{e.a(t,async(t,i)=>{try{e.d(a,{E9:()=>addApplication,RV:()=>getApplications,qr:()=>d,rw:()=>deleteApplication});var p=e(9890),n=e(3602),o=e(2393),s=t([p,n,o]);[p,n,o]=s.then?(await s)():s;let d=(0,p.create)()((0,n.devtools)(t=>({appList:[],open:!1,loading:!1,updateAppList:a=>t(t=>({appList:a})),setLoading:a=>t(t=>({loading:a})),setOpen:a=>t(t=>({open:a}))})));async function getApplications(){let t=d.getState(),a=t.updateAppList,e=await (0,o.W)("/api/application/list"),i=e.data;i&&a(i)}async function deleteApplication(t){return await (0,o.W)(`/api/application/delete?id=${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})}async function addApplication(t){return await (0,o.W)("/api/application/create",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}i()}catch(t){i(t)}})}};