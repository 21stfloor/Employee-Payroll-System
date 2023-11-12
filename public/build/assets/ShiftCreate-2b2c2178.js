import{T as b,a as v,b as S,d as s,u as e,_ as l,Z as y,e as n,f as a,t as c,j as g,n as i,k as p,h as V,F as k,p as f}from"./app-3d54a562.js";import{_ as x}from"./GoBackNavLink-2ba85873.js";import{_ as w}from"./OrgTabs-2c9b7349.js";import{_ as m}from"./InputLabel-328c38c7.js";import{_ as u}from"./TextInput-84ae9dfa.js";import{_ as d}from"./InputError-6701b647.js";import{P as T}from"./PrimaryButton-04539e19.js";import{l as _}from"./vue-datepicker-0bb17557.js";/* empty css             */import{_ as C}from"./Card-10199975.js";import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"py-8"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"card-header !mb-6"},E=["onSubmit"],N={class:"mt-2"},U={class:"mt-2"},j={class:"mt-2"},q={class:"mt-2"},A={class:"flex items-center justify-end mt-4"},R={__name:"ShiftCreate",setup(F){const t=b({name:"",start_time:"",end_time:"",shift_payment_multiplier:"",description:""}),h=()=>{t.post(route("shifts.store"),{preserveScroll:!0,onError:()=>{f().error(l("Error Creating Shift"))},onSuccess:()=>{f().success(l("Shift Created Successfully")),document.getElementById("closeShiftModal").click(),t.reset()}})};return(M,r)=>(v(),S(k,null,[s(e(y),{title:e(l)("Shift Create")},null,8,["title"]),s(x,null,{tabs:n(()=>[s(w)]),default:n(()=>[a("div",$,[a("div",B,[s(C,{class:"!mt-0"},{default:n(()=>[a("h1",D,c(e(l)("Add A Shift")),1),a("form",{onSubmit:g(h,["prevent"])},[a("div",null,[s(m,{for:"shift_name",value:e(l)("Shift Name")},null,8,["value"]),s(u,{id:"shift_name",type:"text",class:i(["mt-1 block w-full",{"border border-red-500":e(t).errors.name}]),modelValue:e(t).name,"onUpdate:modelValue":r[0]||(r[0]=o=>e(t).name=o),required:"",autocomplete:"off",placeholder:e(l)("Day Shift")},null,8,["class","modelValue","placeholder"]),s(d,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",N,[s(m,{for:"start_time",value:e(l)("Shift Start Time")},null,8,["value"]),s(e(_),{id:"start_time",modelValue:e(t).start_time,"onUpdate:modelValue":r[1]||(r[1]=o=>e(t).start_time=o),class:i(["mt-1 block w-full",{"border border-red-500":e(t).errors.start_time}]),placeholder:e(l)("Select a Time..."),"time-picker":"","is-24":!1,dark:p("isDark").value,required:""},null,8,["modelValue","class","placeholder","dark"]),s(d,{class:"mt-2",message:e(t).errors.start_time},null,8,["message"])]),a("div",U,[s(m,{for:"end_time",value:e(l)("Shift End Time")},null,8,["value"]),s(e(_),{id:"end_time",modelValue:e(t).end_time,"onUpdate:modelValue":r[2]||(r[2]=o=>e(t).end_time=o),class:i(["mt-1 block w-full",{"border border-red-500":e(t).errors.end_time}]),placeholder:e(l)("Select a Time..."),"time-picker":"","is-24":!1,dark:p("isDark").value,required:""},null,8,["modelValue","class","placeholder","dark"]),s(d,{class:"mt-2",message:e(t).errors.end_time},null,8,["message"])]),a("div",j,[s(m,{for:"shift_payment_multiplier",value:e(l)("Multiplier")},null,8,["value"]),s(u,{id:"shift_payment_multiplier",type:"number",class:i(["mt-1 block w-full",{"border border-red-500":e(t).errors.shift_payment_multiplier}]),modelValue:e(t).shift_payment_multiplier,"onUpdate:modelValue":r[3]||(r[3]=o=>e(t).shift_payment_multiplier=o),autocomplete:"off",placeholder:"1 ("+e(l)("default")+")",min:"0",step:"0.0001"},null,8,["class","modelValue","placeholder"]),s(d,{class:"mt-2",message:e(t).errors.shift_payment_multiplier},null,8,["message"])]),a("div",q,[s(m,{for:"description",value:e(l)("Description")},null,8,["value"]),s(u,{id:"description",type:"text",class:i(["mt-1 block w-full",{"border border-red-500":e(t).errors.description}]),modelValue:e(t).description,"onUpdate:modelValue":r[4]||(r[4]=o=>e(t).description=o),autocomplete:"off",placeholder:e(l)("Normal day shift, small amount of customers expected during this shift.")},null,8,["class","modelValue","placeholder"]),s(d,{class:"mt-2",message:e(t).errors.description},null,8,["message"])]),a("div",A,[s(T,{class:i(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(t).processing}]),disabled:e(t).processing},{default:n(()=>[V(c(e(l)("Add Shift")),1)]),_:1},8,["class","disabled"])])],40,E)]),_:1})])])]),_:1})],64))}};export{R as default};
