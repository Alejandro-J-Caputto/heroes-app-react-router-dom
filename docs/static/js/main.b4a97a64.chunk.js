(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{29:function(e,r,a){},47:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a(1),s=a(21),n=a.n(s),i=(a(29),a(10)),l=a(4),o=a(2),h=Object(c.createContext)(),j="[auth] login",d="[auth] logout",u=function(e){var r=e.history,a=Object(c.useContext)(h),s=a.user,n=a.dispatch,i=JSON.parse(localStorage.getItem("lastPath"))||"/";console.log(s);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"LoginScreen"}),Object(t.jsx)("hr",{}),Object(t.jsx)("button",{className:"btn btn-primary",onClick:function(){n({type:j,payload:{name:"Alejandro"}}),r.replace(i)},children:"login"})]})},b=function(){var e=Object(o.g)(),r=Object(c.useContext)(h),a=r.user,s=r.dispatch;return Object(t.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(t.jsx)("div",{className:"navbar-collapse",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar-collapse  d-flex justify-content-end",children:Object(t.jsxs)("div",{className:"navbar-nav",children:[Object(t.jsx)("p",{className:"nav-item nav-ling text-info",children:!0===a.logged&&a.name}),Object(t.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",onClick:function(){s({type:d,payload:null}),e.replace("/login")},exact:!0,to:"/login",children:"Logout"})]})})]})})},m=a(5),p=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],O=function(e){var r=e.id,a=e.superhero,c=(e.publisher,e.alter_ego),s=e.first_appearance,n=e.characters;return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"row mt-5 mb-5",children:Object(t.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(t.jsxs)("div",{className:"row no-gutters",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsx)("img",{className:"card-img",src:"../assets/".concat(r,".jpg"),alt:a})}),Object(t.jsx)("div",{className:"col-md-8",children:Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:a}),Object(t.jsxs)("p",{className:"card-text",children:[" ",c," "]}),c!==n&&Object(t.jsx)("p",{className:"card-text",children:n}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{className:"text-muted",children:s})}),Object(t.jsx)(l.b,{className:"btn btn-primary",to:"./hero/".concat(r),children:"More..."})]})})]})})})})},v=function(e){var r=e.publisher,a=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," doesnt exist"));return p.filter((function(r){return r.publisher===e}))}(r)}),[r]);return Object(t.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 animate_animated animate__fadeIn",children:a.map((function(e){return Object(t.jsx)(O,Object(m.a)({},e),e.id)}))})},x=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Marvel Heroes"}),Object(t.jsx)("hr",{}),Object(t.jsx)(v,{publisher:"Marvel Comics"})]})},g=function(e){var r=e.history,a=Object(o.i)().heroId;console.log(a);var s=Object(c.useMemo)((function(){return e=a,p.find((function(r){return r.id===e}));var e}),[a]);if(!s)return Object(t.jsx)(o.a,{to:"/"});var n=s.superhero,i=s.publisher,l=s.alter_ego,h=s.first_appearance,j=s.characters;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{src:"../assets/".concat(a,".jpg"),className:"img-thumbnail",alt:n})}),Object(t.jsxs)("div",{className:"col-8",children:[Object(t.jsx)("h3",{children:n}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Alter ego:"})," ",l]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"Publisher:"})," ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:[Object(t.jsx)("b",{children:"First Appareance:"})," ",h]})]}),Object(t.jsx)("h5",{className:"mt-2",children:j}),Object(t.jsx)("button",{onClick:function(){r.goBack()},className:"btn btn-outline-info",children:" return "})]})]})},f=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{children:"DC Heroes"}),Object(t.jsx)("hr",{}),Object(t.jsx)(v,{publisher:"DC Comics"})]})},C=a(23),N=a.n(C),_=a(12),y=function(e){var r=e.history,a=Object(o.h)(),s=N.a.parse(a.search).q,n=void 0===s?"":s,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(c.useState)(e),a=Object(i.a)(r,2),t=a[0],s=a[1];return[t,function(e){var r=e.target;console.log(r.value),s(Object(_.a)({},r.name,r.value))},function(r){s(e)}]}({search:n}),h=Object(i.a)(l,2),j=h[0],d=h[1],u=j.search,b=Object(c.useMemo)((function(){return p.filter((function(e){return e.superhero===u}))}),[n]);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"SearchScreen"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-5",children:[Object(t.jsx)("h4",{children:"Search"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.push("?q=".concat(u))},className:"form-group",children:[Object(t.jsx)("input",{onChange:d,className:"form-control",name:"search",autoComplete:"off",value:u,type:"text"}),Object(t.jsx)("button",{className:"btn btn-warning",type:"submit",children:"FIND HERO"})]})]}),Object(t.jsxs)("div",{className:"col-7",children:[Object(t.jsx)("h4",{children:"Results"}),Object(t.jsx)("hr",{}),""!==n&&0===b.length&&Object(t.jsx)("div",{className:"alert alert-warning",children:"There is not a hero with the provided name"}),b.map((function(e){return Object(t.jsx)(O,Object(m.a)({},e),e.id)}))]})]})]})},M=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(b,{}),Object(t.jsx)("div",{className:"container",children:Object(t.jsxs)(o.d,{children:[Object(t.jsx)(o.b,{exact:!0,path:"/marvel",component:x}),Object(t.jsx)(o.b,{exact:!0,path:"/hero/:heroId",component:g}),Object(t.jsx)(o.b,{exact:!0,path:"/dc",component:f}),Object(t.jsx)(o.b,{exact:!0,path:"/search",component:y}),Object(t.jsx)(o.a,{to:"/marvel"})]})})]})},S=a(13),k=function(e){var r=e.isAuthenticated,a=e.component,c=Object(S.a)(e,["isAuthenticated","component"]);return console.log(c),localStorage.setItem("lastPath",JSON.stringify(c.location.pathname)),Object(t.jsx)(o.b,Object(m.a)(Object(m.a)({},c),{},{component:function(e){return r?Object(t.jsx)(a,Object(m.a)({},e)):Object(t.jsx)(o.a,{to:"/login"})}}))},D=function(e){var r=e.isAuthenticated,a=e.component,c=Object(S.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(o.b,Object(m.a)(Object(m.a)({},c),{},{component:function(e){return r?Object(t.jsx)(o.a,{to:"/"}):Object(t.jsx)(a,Object(m.a)({},e))}}))},w=function(){var e=Object(c.useContext)(h).user;return Object(t.jsx)(l.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(o.d,{children:[Object(t.jsx)(D,{exact:!0,path:"/login",component:u,isAuthenticated:e.logged}),Object(t.jsx)(k,{path:"/",component:M,isAuthenticated:e.logged})]})})})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,a=r.type,t=r.payload;switch(a){case j:return Object(m.a)(Object(m.a)({},t),{},{logged:!0});case d:return{logged:!1};default:return e}},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},J=function(){var e=Object(c.useReducer)(A,{},B),r=Object(i.a)(e,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(t.jsx)(h.Provider,{value:{user:a,dispatch:s},children:Object(t.jsx)(w,{})})};n.a.render(Object(t.jsx)(J,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b4a97a64.chunk.js.map