import{r as p,O as w,w as v,a as h,b,d as a,u as y,Z as N,e,f as i,t as l,m as g,z as E,h as t,F as $,l as B,g as O}from"./app-3d54a562.js";import{_ as D}from"./GoBackNavLink-2ba85873.js";import{_ as S}from"./EmployeeTabs-5534f28a.js";import{_ as T}from"./SearchBar-e5af0cd6.js";import{d as V}from"./index-a6e2f917.js";import{_ as A,a as o}from"./TableHead-ac4fde50.js";import{_ as d,T as C}from"./TableRow-44e6b520.js";import{_ as k}from"./TableBodyHeader-f85ba53c.js";import{_ as j}from"./Card-10199975.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Paginator-0cfef6a8.js";const x={class:"py-8"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"flex justify-between items-center gap-4 pb-4"},I={class:"card-header !mb-4"},R=["placeholder"],W={__name:"ArchievedEmployees",props:{employees:Object},setup(_){const m=p(""),f=p("id"),n=p(!0),c=V(()=>{w.visit(route("employees.archived",{term:m.value,sort:f.value,sort_dir:n.value}),{preserveState:!0,preserveScroll:!0})},400);return v(m,c),v(f,c),v(n,c),(r,u)=>(h(),b($,null,[a(y(N),{title:r.__("Archived Employees")},null,8,["title"]),a(D,null,{tabs:e(()=>[a(S)]),default:e(()=>[i("div",x,[i("div",F,[a(j,{class:"!mt-0"},{default:e(()=>[i("div",H,[i("h1",I,l(r.__("Archived Employees")),1),a(T,null,{default:e(()=>[g(i("input",{type:"text",id:"table-search-users","onUpdate:modelValue":u[0]||(u[0]=s=>m.value=s),class:"input-class",placeholder:r.__("Search for an archived Employee")},null,8,R),[[E,m.value]])]),_:1})]),a(A,{links:_.employees.links,showingNumber:_.employees.data.length,totalNumber:_.employees.total},{Head:e(()=>[a(o,{onClick:u[1]||(u[1]=s=>{f.value="id",n.value=!n.value}),sortable:""},{default:e(()=>[t(l(r.__("ID"))+" ↕",1)]),_:1}),a(o,{onClick:u[2]||(u[2]=s=>{f.value="name",n.value=!n.value}),sortable:""},{default:e(()=>[t(l(r.__("Name"))+" ↕",1)]),_:1}),a(o,null,{default:e(()=>[t(l(r.__("Email")),1)]),_:1}),a(o,null,{default:e(()=>[t(l(r.__("Phone")),1)]),_:1}),a(o,null,{default:e(()=>[t(l(r.__("Employee ID")),1)]),_:1}),a(o,null,{default:e(()=>[t(l(r.__("Hired On")),1)]),_:1}),a(o,null,{default:e(()=>[t(l(r.__("Released On")),1)]),_:1})]),Body:e(()=>[(h(!0),b($,null,B(_.employees.data,s=>(h(),O(C,{key:s.id},{default:e(()=>[a(k,null,{default:e(()=>[t(l(s.id),1)]),_:2},1024),a(k,null,{default:e(()=>[t(l(s.name),1)]),_:2},1024),a(d,null,{default:e(()=>[t(l(s.email),1)]),_:2},1024),a(d,null,{default:e(()=>[t(l(s.phone),1)]),_:2},1024),a(d,null,{default:e(()=>[t(l(s.employee_id),1)]),_:2},1024),a(d,null,{default:e(()=>[t(l(s.hired_on),1)]),_:2},1024),a(d,null,{default:e(()=>[t(l(s.released_on),1)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["links","showingNumber","totalNumber"])]),_:1})])])]),_:1})],64))}};export{W as default};
