import{T as x,w as V,a as n,b as c,d as a,u as e,_ as r,Z as k,e as i,f as t,t as m,j as q,m as w,v as C,F as g,l as R,n as u,C as v,k as S,h as D,K as b,p}from"./app-3d54a562.js";import{_ as $}from"./GoBackNavLink-2ba85873.js";import{_}from"./InputLabel-328c38c7.js";import{_ as j}from"./TextInput-84ae9dfa.js";import{_ as f}from"./InputError-6701b647.js";import{P as M}from"./PrimaryButton-04539e19.js";import{_ as T}from"./ReqTabs-b73794b0.js";import{l as B}from"./vue-datepicker-0bb17557.js";/* empty css             */import{_ as E}from"./Card-10199975.js";import"./_plugin-vue_export-helper-c27b6911.js";const Y={class:"py-8"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},I={class:"card-header !mb-4"},N=["onSubmit"],U={class:"grid grid-cols-2 gap-4"},z={selected:"",value:""},P=["value"],A={class:"grid grid-cols-1 gap-4 mt-4"},K={class:"flex items-center justify-end mt-4"},ae={__name:"RequestCreate",props:{types:Array},setup(y){const s=x({type:"",date:"",message:""});V(()=>s.type,o=>{o==="leave"&&(s.date="")});const h=()=>{Object.keys(s.date).forEach(function(o){s.date[o]&&!/^\d{4}-\d{2}-\d{2}$/.test(s.date[o])&&(s.date[o]=v(s.date[o]).format("YYYY-MM-DD"))}),console.log(s.date),s.post(route("requests.store"),{preserveScroll:!0,onError:()=>{b().props.errors.past_leave?p().error(b().props.errors.past_leave):p().error(r("Error Creating Request"))},onSuccess:()=>{p().success(r("Request Created Successfully")),s.reset()}})};return(o,d)=>(n(),c(g,null,[a(e(k),{title:e(r)("Request Create")},null,8,["title"]),a($,null,{tabs:i(()=>[a(T)]),default:i(()=>[t("div",Y,[t("div",F,[a(E,{class:"!mt-0"},{default:i(()=>[t("h1",I,m(e(r)("Create a Request")),1),t("form",{onSubmit:q(h,["prevent"])},[t("div",U,[t("div",null,[a(_,{for:"type_id",value:e(r)("Type")},null,8,["value"]),w(t("select",{id:"manager_id",class:"fancy-selector","onUpdate:modelValue":d[0]||(d[0]=l=>e(s).type=l)},[t("option",z,m(e(r)("Choose a Request Type")),1),(n(!0),c(g,null,R(y.types,l=>(n(),c("option",{key:l.id,value:l},m(l),9,P))),128))],512),[[C,e(s).type]]),a(f,{class:"mt-2",message:e(s).errors.type},null,8,["message"])]),t("div",null,[a(_,{for:"date",value:e(r)("Date (Range selection is available)")},null,8,["value"]),a(e(B),{id:"date",modelValue:e(s).date,"onUpdate:modelValue":d[1]||(d[1]=l=>e(s).date=l),class:u(["py-1 block w-full",{"border border-red-500":e(s).errors.date}]),placeholder:e(r)("Select Date..."),"enable-time-picker":!1,"min-date":e(s).type==="leave"?e(v)().tz().format():"",dark:S("isDark").value,range:"",required:""},null,8,["modelValue","class","placeholder","min-date","dark"]),a(f,{class:"mt-2",message:e(s).errors.date},null,8,["message"])])]),t("div",A,[t("div",null,[a(_,{for:"message",value:e(r)("Message")},null,8,["value"]),a(j,{id:"message",type:"text",class:u(["mt-1 block w-full",{"border border-red-500":e(s).errors.message}]),modelValue:e(s).message,"onUpdate:modelValue":d[2]||(d[2]=l=>e(s).message=l),autocomplete:"off",placeholder:e(r)("I will be absent for 3 days because I'm sick.")},null,8,["class","modelValue","placeholder"]),a(f,{class:"mt-2",message:e(s).errors.message},null,8,["message"])])]),t("div",K,[a(M,{class:u(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:i(()=>[D(m(e(r)("Initiate Request")),1)]),_:1},8,["class","disabled"])])],40,N)]),_:1})])])]),_:1})],64))}};export{ae as default};
