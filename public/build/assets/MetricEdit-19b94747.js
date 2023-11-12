import{T as S,a as B,b as V,d as r,u as e,_ as s,Z as k,e as c,f as o,t as u,j as f,n,h as _,F as M,p as g}from"./app-3d54a562.js";import{_ as C}from"./GoBackNavLink-2ba85873.js";import{_ as U}from"./OrgTabs-2c9b7349.js";import{_ as m}from"./InputLabel-328c38c7.js";import{_ as d}from"./TextInput-84ae9dfa.js";import{_ as p}from"./InputError-6701b647.js";import{P as b}from"./PrimaryButton-04539e19.js";import{_ as $}from"./Card-10199975.js";import{S as h}from"./sweetalert2.all-506416b6.js";import"./_plugin-vue_export-helper-c27b6911.js";const T={class:"py-8"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},N={class:"card-header !mb-4"},j=["onSubmit"],q={class:"grid grid-cols-2 gap-4 mt-4"},R={class:"mt-1"},W={class:"mt-1"},D={class:"flex items-center justify-end mt-4"},F=["onSubmit"],K={__name:"MetricEdit",props:{metric:Object},setup(v){const l=v,t=S({criteria:l.metric.criteria,weight:l.metric.weight,step:l.metric.step*100}),x=()=>{t.put(route("metrics.update",{id:l.metric.id}),{preserveScroll:!0,onError:()=>{g().error(s("Error Updating Metric"))},onSuccess:()=>{g().success(s("Metric Updated Successfully"))}})},w=()=>{h.mixin({customClass:{confirmButton:"mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",cancelButton:"text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"},buttonsStyling:!1}).fire({title:s("Are you sure?"),text:s("You won't be able to revert this!"),icon:"warning",showCancelButton:!0,confirmButtonText:s("Yes, Delete!"),cancelButtonText:s("No, Cancel!"),reverseButtons:!0}).then(i=>{i.isConfirmed&&t.delete(route("metrics.destroy",{id:l.metric.id}),{preserveScroll:!0,onSuccess:()=>{h.fire(s("Metric Removed!"),"","success")}})})};return(y,i)=>(B(),V(M,null,[r(e(k),{title:e(s)("Metric Removed Successfully")},null,8,["title"]),r(C,null,{tabs:c(()=>[r(U)]),default:c(()=>[o("div",T,[o("div",E,[r($,{class:"!mt-0"},{default:c(()=>[o("h1",N,u(e(s)("Update Metric")),1),o("form",{onSubmit:f(x,["prevent"])},[o("div",null,[r(m,{for:"Criterion",value:e(s)("Metric Criterion")},null,8,["value"]),r(d,{id:"Criterion",type:"text",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.criteria}]),modelValue:e(t).criteria,"onUpdate:modelValue":i[0]||(i[0]=a=>e(t).criteria=a),required:"",autocomplete:"off",placeholder:e(s)("How effectively did the employee perform their duties and responsibilities?")},null,8,["class","modelValue","placeholder"]),r(p,{class:"mt-2",message:e(t).errors.criteria},null,8,["message"])]),o("div",q,[o("div",R,[r(m,{for:"weight",value:e(s)("Weight")},null,8,["value"]),r(d,{id:"weight",type:"number",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.weight}]),modelValue:e(t).weight,"onUpdate:modelValue":i[1]||(i[1]=a=>e(t).weight=a),min:"0",step:"0.001",required:"",autocomplete:"off",placeholder:"1"},null,8,["class","modelValue"]),r(p,{class:"mt-2",message:e(t).errors.weight},null,8,["message"])]),o("div",W,[r(m,{for:"step",value:e(s)("Step")+" (%)"},null,8,["value"]),r(d,{id:"step",type:"number",class:n(["mt-1 block w-full",{"border border-red-500":e(t).errors.step}]),modelValue:e(t).step,"onUpdate:modelValue":i[2]||(i[2]=a=>e(t).step=a),min:"0",step:"0.1",required:"",autocomplete:"off",placeholder:"5"},null,8,["class","modelValue"]),r(p,{class:"mt-2",message:e(t).errors.step},null,8,["message"])])]),o("div",D,[o("form",{onSubmit:f(w,["prevent"]),class:"inline"},[r(b,{class:"bg-red-600 hover:bg-red-700 ml-4"},{default:c(()=>[_(u(e(s)("Remove Metric")),1)]),_:1})],40,F),r(b,{class:n(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:c(()=>[_(u(e(s)("Update Metric")),1)]),_:1},8,["class","disabled"])])],40,j)]),_:1})])])]),_:1})],64))}};export{K as default};
