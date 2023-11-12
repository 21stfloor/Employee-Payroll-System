import{T as B,o as I,a as y,b as k,d as t,u as e,_ as a,Z as S,e as _,f as s,t as n,j as T,n as c,h as r,i as U,F as v,l as C,g as O,m as b,x as h,p as E}from"./app-3d54a562.js";import{_ as N}from"./GoBackNavLink-2ba85873.js";import{_ as q}from"./OrgTabs-2c9b7349.js";import{_ as m}from"./InputLabel-328c38c7.js";import{_ as f}from"./TextInput-84ae9dfa.js";import{_ as u}from"./InputError-6701b647.js";import{P as $}from"./PrimaryButton-04539e19.js";import{S as w}from"./sweetalert2.all-506416b6.js";/* empty css             */import{i as j}from"./index-7c45f06a.js";import{_ as g}from"./ToolTip-bfdc8617.js";import{_ as A}from"./Card-10199975.js";import{_ as D}from"./Notice-ce8f6ac0.js";import{u as W}from"./switch-736b7def.js";import"./_plugin-vue_export-helper-c27b6911.js";const G={class:"py-8"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},M={class:"card-header !mb-6"},Y=["onSubmit"],J={class:"mt-2"},L={class:"underline text-purple-500 text-sm",target:"_blank",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},Z=s("br",null,null,-1),H={class:"mt-2"},K=s("br",null,null,-1),Q=s("br",null,null,-1),R=s("br",null,null,-1),X={class:"block"},ee={class:"mt-1"},le=s("br",null,null,-1),se=s("br",null,null,-1),ae=s("br",null,null,-1),oe=s("br",null,null,-1),te={key:0,class:"block text-xs"},ie=s("br",null,null,-1),ne={class:"mt-2"},re={class:"mt-2"},de={class:"mt-2"},ce={class:"mt-2"},ue=s("br",null,null,-1),me={class:"mt-2"},_e={class:"mt-2"},pe={class:"ul-checkbox mt-1",dir:"ltr"},fe={class:"li-checkbox"},be={class:"flex items-center pl-3"},he={for:"saturday-checkbox",class:"li-checkbox-label"},ye={class:"li-checkbox"},ge={class:"flex items-center pl-3"},xe={for:"sunday-checkbox",class:"li-checkbox-label"},ke={class:"li-checkbox"},ve={class:"flex items-center pl-3"},we={for:"monday-checkbox",class:"li-checkbox-label"},ze={class:"li-checkbox"},Ve={class:"flex items-center pl-3"},Pe={for:"tuesday-checkbox",class:"li-checkbox-label"},Be={class:"li-checkbox"},Ie={class:"flex items-center pl-3"},Se={for:"wednesday-checkbox",class:"li-checkbox-label"},Te={class:"li-checkbox"},Ue={class:"flex items-center pl-3"},Ce={for:"thursday-checkbox",class:"li-checkbox-label"},Oe={class:"w-full dark:border-gray-600"},Ee={class:"flex items-center pl-3"},Ne={for:"friday-checkbox",class:"li-checkbox-label"},qe={class:"flex items-center justify-end mt-4"},Re={__name:"GlobalsEdit",props:{globals:Object},setup(z){const d=z,l=B({organization_name:d.globals.organization_name,timezone:d.globals.timezone,is_ip_based:d.globals.is_ip_based,ip:d.globals.is_ip_based?JSON.parse(d.globals.ip).join(", "):"",email:d.globals.email,organization_address:d.globals.organization_address,absence_limit:d.globals.absence_limit,payroll_day:d.globals.payroll_day,weekend_off_days:JSON.parse(d.globals.weekend_off_days),income_tax:d.globals.income_tax}),V=()=>{w.mixin({customClass:{confirmButton:"mx-4 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",cancelButton:"text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900"},buttonsStyling:!1}).fire({title:a("Are you sure?"),text:a("Globals data is central to this application data integrity!"),icon:"warning",showCancelButton:!0,confirmButtonText:a("Yes, Confirm!"),cancelButtonText:a("No, Cancel!"),reverseButtons:!0}).then(i=>{i.isConfirmed&&(l.ip!==null&&!Array.isArray(l.ip)&&(l.ip=l.ip.split(",").map(o=>o.trim()).filter(o=>o!==null&&o!=="")),l.put(route("globals.update"),{preserveScroll:!0,onError:()=>{E().error(a("Error Editing Globals"))},onSuccess:()=>{w.fire(a("Global Data Changed Successfully"),"","success")}}))})};async function P(){l.ip="Fetching IP, Please Wait...",fetch("https://api.ipify.org/?format=json").then(p=>{if(!p.ok)throw new Error("Network response was not ok");return p.json()}).then(p=>{l.ip=p.ip}).catch(p=>{console.error("Error fetching IP:",p.message)})}return I(()=>{j()}),(p,i)=>(y(),k(v,null,[t(e(S),{title:e(a)("Edit Organization Data")},null,8,["title"]),t(N,null,{tabs:_(()=>[t(q)]),default:_(()=>[s("div",G,[s("div",F,[t(A,{class:"!mt-0"},{default:_(()=>[s("h1",M,n(e(a)("Edit Organization Data")),1),t(D,{type:"warning",bold:e(a)("Warning!"),br:"",text:e(a)("Changing timezone in production can cause unexepected behavior in the attendance system")+". "+e(a)("Please revise the attendance list of the current week after changing the timezone")+"."},null,8,["bold","text"]),s("form",{onSubmit:T(V,["prevent"])},[s("div",null,[t(m,{for:"organization_name",value:e(a)("Organization Name")},null,8,["value"]),t(f,{id:"organization_name",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.organization_name}]),modelValue:e(l).organization_name,"onUpdate:modelValue":i[0]||(i[0]=o=>e(l).organization_name=o),required:"",autocomplete:"off",placeholder:e(a)("Organization Name")},null,8,["class","modelValue","placeholder"]),t(u,{class:"mt-2",message:e(l).errors.organization_name},null,8,["message"])]),s("div",J,[t(m,{for:"timezone",value:e(a)("Time Zone"),class:"inline"},null,8,["value"]),s("a",L,n(" "+e(a)("(list)")),1),t(g,null,{default:_(()=>[r(n(e(a)("This is the timezone that will be used to calculate the time related data in the application."))+" ",1),Z,r(" "+n(e(a)("Please choose a timezone from the list.")),1)]),_:1}),t(f,{id:"timezone",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.timezone}]),modelValue:e(l).timezone,"onUpdate:modelValue":i[1]||(i[1]=o=>e(l).timezone=o),required:"",autocomplete:"off",placeholder:"Africa/Cairo"},null,8,["class","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.timezone},null,8,["message"])]),s("div",H,[t(m,{class:"inline",for:"is_remote",value:e(a)("Enable IP-Based Attendance?")},null,8,["value"]),t(g,null,{default:_(()=>[r(n(e(a)("The set IPs will be used to compare employee attendance's IP with it"))+". ",1),K,r(" "+n(e(a)("If the IPs mismatch, it means the employee is registering their attendance"))+" ",1),Q,r(" "+n(e(a)("from outside the organization. Thus, the attendance will be discarded"))+".",1),R,r(" "+n(e(a)("You can turn this option off on this page"))+". ",1)]),_:1}),s("div",X,[t(e(W),{dir:"ltr",modelValue:e(l).is_ip_based,"onUpdate:modelValue":i[2]||(i[2]=o=>e(l).is_ip_based=o),class:c([e(l).is_ip_based?"bg-purple-600":"bg-gray-400","col-span-4 mt-2 relative inline-flex h-6 w-11 items-center rounded-full"])},{default:_(()=>[s("span",{class:c([e(l).is_ip_based?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition"])},null,2)]),_:1},8,["modelValue","class"])]),t(u,{class:"mt-2",message:e(l).errors.is_ip_based},null,8,["message"])]),s("div",ee,[t(m,{for:"ip",value:e(a)("Organization Public IP Address(es) - Separate multiple values by commas"),class:"inline"},null,8,["value"]),t(g,null,{default:_(()=>[r(n(e(a)("This IP(s) will be used to compare employee attendance's IP with it."))+" ",1),le,r(" "+n(e(a)("If the IPs mismatch, it means the employee is registering their attendance"))+" ",1),se,r(" "+n(e(a)("from outside the organization. Thus, the attendance will be discarded.")),1),ae,r(" "+n(e(a)("You can turn this option off on this page"))+".",1),oe,r(" "+n(e(a)("Note: Supports IPv4 Only"))+". ",1)]),_:1}),e(l).is_ip_based?(y(),k("span",te,[s("a",{onClick:i[3]||(i[3]=o=>P()),class:"underline text-purple-500",href:"#"},n(e(a)("Grab Yours from Here,")),1),r(" "+n(e(a)("and make sure you are at your organization while setting this value, otherwise, all employee attendances will be rejected even if they are inside the organization."))+" ",1),ie,r(" "+n(e(a)("If this app is hosted locally, you can use '192.168.1.*'")),1)])):U("",!0),t(f,{id:"timezone",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.ip,"opacity-75 bg-gray-100 cursor-not-allowed":!e(l).is_ip_based}]),disabled:!e(l).is_ip_based,modelValue:e(l).ip,"onUpdate:modelValue":i[4]||(i[4]=o=>e(l).ip=o),required:"",autocomplete:"off",placeholder:"193.107.235.96"},null,8,["class","disabled","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.ip},null,8,["message"]),(y(!0),k(v,null,C(Object.keys(e(l).errors).filter(o=>o.startsWith("ip")).reduce((o,x)=>(o[x]=e(l).errors[x],o),{}),(o,x)=>(y(),O(u,{message:o},null,8,["message"]))),256))]),s("div",ne,[t(m,{for:"email",value:e(a)("Organization Email")},null,8,["value"]),t(f,{id:"email",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.email}]),modelValue:e(l).email,"onUpdate:modelValue":i[5]||(i[5]=o=>e(l).email=o),required:"",autocomplete:"off",placeholder:"ceo@oraby.com"},null,8,["class","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.email},null,8,["message"])]),s("div",re,[t(m,{for:"organization_address",value:e(a)("Organization Address")},null,8,["value"]),t(f,{id:"organization_address",type:"text",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.organization_address}]),modelValue:e(l).organization_address,"onUpdate:modelValue":i[6]||(i[6]=o=>e(l).organization_address=o),required:"",autocomplete:"off",placeholder:e(a)("114 Juhayna Sq. 6th of October City, Giza, Egypt")},null,8,["class","modelValue","placeholder"]),t(u,{class:"mt-2",message:e(l).errors.organization_address},null,8,["message"])]),s("div",de,[t(m,{for:"absence_limit",value:e(a)("Absence Limit")},null,8,["value"]),t(f,{id:"absence_limit",type:"number",min:"1",max:"365",step:"1",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.absence_limit}]),modelValue:e(l).absence_limit,"onUpdate:modelValue":i[7]||(i[7]=o=>e(l).absence_limit=o),required:"",autocomplete:"off",placeholder:"8"},null,8,["class","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.absence_limit},null,8,["message"])]),s("div",ce,[t(m,{for:"payroll_day",value:e(a)("Payroll Day"),class:"inline"},null,8,["value"]),t(g,null,{default:_(()=>[r(n(e(a)("Which day should the salaries be paid on. Payrolls will be generated automatically that day on 00:00."))+" ",1),ue,r(" "+n(e(a)("The generated payrolls account for the previous month's work, from day 1 until the end of the previous month.")),1)]),_:1}),t(f,{id:"payroll_day",type:"number",min:"1",max:"31",step:"1",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.payroll_day}]),modelValue:e(l).payroll_day,"onUpdate:modelValue":i[8]||(i[8]=o=>e(l).payroll_day=o),required:"",autocomplete:"off",placeholder:"8"},null,8,["class","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.payroll_day},null,8,["message"])]),s("div",me,[t(m,{for:"income_tax",value:e(a)("Income Tax Percentage")},null,8,["value"]),t(f,{id:"income_tax",type:"number",min:"0",max:"100",step:"0.1",class:c(["mt-1 block w-full",{"border border-red-500":e(l).errors.income_tax}]),modelValue:e(l).income_tax,"onUpdate:modelValue":i[9]||(i[9]=o=>e(l).income_tax=o),required:"",autocomplete:"off",placeholder:"14"},null,8,["class","modelValue"]),t(u,{class:"mt-2",message:e(l).errors.income_tax},null,8,["message"])]),s("div",_e,[t(m,{for:"weekend_off_days",value:e(a)("Weekend Off Days")},null,8,["value"]),s("ul",pe,[s("li",fe,[s("div",be,[b(s("input",{id:"saturday-checkbox",type:"checkbox","onUpdate:modelValue":i[10]||(i[10]=o=>e(l).weekend_off_days=o),value:"saturday",class:"li-checkbox-input",checked:""},null,512),[[h,e(l).weekend_off_days]]),s("label",he,n(e(a)("Saturday")),1)])]),s("li",ye,[s("div",ge,[b(s("input",{id:"sunday-checkbox",type:"checkbox","onUpdate:modelValue":i[11]||(i[11]=o=>e(l).weekend_off_days=o),value:"sunday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",xe,n(e(a)("Sunday")),1)])]),s("li",ke,[s("div",ve,[b(s("input",{id:"monday-checkbox",type:"checkbox","onUpdate:modelValue":i[12]||(i[12]=o=>e(l).weekend_off_days=o),value:"monday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",we,n(e(a)("Monday")),1)])]),s("li",ze,[s("div",Ve,[b(s("input",{id:"tuesday-checkbox",type:"checkbox","onUpdate:modelValue":i[13]||(i[13]=o=>e(l).weekend_off_days=o),value:"tuesday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",Pe,n(e(a)("Tuesday")),1)])]),s("li",Be,[s("div",Ie,[b(s("input",{id:"wednesday-checkbox",type:"checkbox","onUpdate:modelValue":i[14]||(i[14]=o=>e(l).weekend_off_days=o),value:"wednesday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",Se,n(e(a)("Wednesday")),1)])]),s("li",Te,[s("div",Ue,[b(s("input",{id:"thursday-checkbox",type:"checkbox","onUpdate:modelValue":i[15]||(i[15]=o=>e(l).weekend_off_days=o),value:"thursday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",Ce,n(e(a)("Thursday")),1)])]),s("li",Oe,[s("div",Ee,[b(s("input",{id:"friday-checkbox",type:"checkbox","onUpdate:modelValue":i[16]||(i[16]=o=>e(l).weekend_off_days=o),value:"friday",class:"li-checkbox-input"},null,512),[[h,e(l).weekend_off_days]]),s("label",Ne,n(e(a)("Friday")),1)])])]),t(u,{class:"mt-2",message:e(l).errors.weekend_off_days},null,8,["message"])]),s("div",qe,[t($,{class:c(["ltr:ml-4 rtl:mr-4",{"opacity-25":e(l).processing}]),disabled:e(l).processing},{default:_(()=>[r(n(e(a)("Edit Data")),1)]),_:1},8,["class","disabled"])])],40,Y)]),_:1})])])]),_:1})],64))}};export{Re as default};
