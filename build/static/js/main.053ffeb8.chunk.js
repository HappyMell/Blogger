(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(29),r=s.n(n),i=s(3),l=s.n(i),o=s(8),j=s(2),u=(s(36),s(4)),b=(s(37),s(0));function p(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("div",{className:"headerTitles",children:[Object(b.jsx)("span",{className:"headerTitleSm",children:"Mellisa's"}),Object(b.jsx)("span",{className:"headerTitleLg",children:"Blogger"})]}),Object(b.jsx)("img",{className:"headerImg",src:"https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",alt:""})]})}s(39),s(40);var d=s(6);function O(e){var t=e.post;return Object(b.jsxs)("div",{className:"post",children:[t.photo&&Object(b.jsx)("img",{className:"postImg",src:"https://shielded-basin-70006.herokuapp.com/images/"+t.photo,alt:""}),Object(b.jsxs)("div",{className:"postInfo",children:[Object(b.jsx)("div",{className:"postCategories",children:t.categories.map((function(e){return Object(b.jsx)("span",{className:"postCat",children:e.name})}))}),Object(b.jsx)(d.b,{to:"/post/".concat(t._id),className:"link",children:Object(b.jsx)("span",{className:"postTitle",children:t.title})}),Object(b.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(b.jsx)("p",{className:"postDesc",children:t.desc})]})}function m(e){var t=e.posts;return Object(b.jsx)("div",{className:"posts",children:t.map((function(e){return Object(b.jsx)(O,{post:e},e._id)}))})}s(46);var h=s(19),x=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!0,error:!0};case"LOGOUT":return{user:null,isFetching:!0,error:!1};case"UPDATE_START":return Object(h.a)(Object(h.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!0,error:!0};default:return e}},f={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},g=Object(a.createContext)(f),N=function(e){var t=e.children,s=Object(a.useReducer)(x,f),c=Object(j.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(b.jsx)(g.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},v=s(7),w=s.n(v);function I(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useContext)(g).user;return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"sidebar",children:[n&&Object(b.jsxs)("div",{className:"sidebarItem",children:[Object(b.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(b.jsx)("img",{src:"https://shielded-basin-70006.herokuapp.com/images/"+n.profilePic,alt:""}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut pellentesque massa, quis iaculis lorem."})]}),Object(b.jsxs)("div",{className:"sidebarItem",children:[Object(b.jsx)("span",{className:"sidebarTitle",children:"Categories"}),Object(b.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(b.jsx)(d.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(b.jsx)("li",{className:"sidebarListItem",children:e.name})},e._id)}))})]}),Object(b.jsxs)("div",{className:"sidebarItem",children:[Object(b.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(b.jsxs)("div",{className:"sidebarSocial",children:[Object(b.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(b.jsx)("i",{className:"sidebarIcon fab fa-pinterest-square"})]})]})]})}function y(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(u.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(m,{posts:s}),Object(b.jsx)(I,{})]})]})}s(65);function S(){var e=Object(a.useContext)(g),t=e.user,s=e.dispatch;return Object(b.jsxs)("div",{className:"top",children:[Object(b.jsxs)("div",{className:"topLeft",children:[Object(b.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-instagram-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(b.jsx)("i",{className:"topIcon fab fa-pinterest-square"})]}),Object(b.jsx)("div",{className:"topCenter",children:Object(b.jsxs)("ul",{className:"topList",children:[Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{to:"/",className:"link",children:"HOME"})}),Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{to:"/write",className:"link",children:"WRITE"})}),Object(b.jsx)("li",{className:"topListItem",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(b.jsx)("div",{className:"topRight",children:t?Object(b.jsx)(d.b,{to:"/settings",children:Object(b.jsx)("img",{className:"topImg",src:"https://shielded-basin-70006.herokuapp.com/images/"+t.profilePic,alt:""})}):Object(b.jsxs)("ul",{className:"topList",children:[Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{to:"/login",className:"link",children:"LOGIN"})}),Object(b.jsx)("li",{className:"topListItem",children:Object(b.jsx)(d.b,{to:"/register",className:"link",children:"REGISTER"})})]})})]})}s(66),s(67);function k(){var e=Object(u.f)().pathname.split("/")[2],t=Object(a.useContext)(g).user,s=Object(a.useState)(""),c=Object(j.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(""),p=Object(j.a)(i,2),O=p[0],m=p[1],h=Object(a.useState)(!1),x=Object(j.a)(h,2),f=x[0],N=x[1],v=Object(a.useState)({}),I=Object(j.a)(v,2),y=I[0],S=I[1];Object(a.useEffect)((function(){(function(){var t=Object(o.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/posts/"+e);case 2:s=t.sent,S(s.data),r(s.data.title),m(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var k=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.delete("/posts/".concat(y._id),{data:{username:t.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.put("/posts/".concat(y._id),{username:t.username,title:n,desc:O});case 3:N(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"singlePost",children:Object(b.jsxs)("div",{className:"singlePostWrapper",children:[y.photo&&Object(b.jsx)("img",{src:"https://shielded-basin-70006.herokuapp.com/images/"+y.photo,alt:"",className:"singlePostImg"}),f?Object(b.jsx)("input",{type:"text",value:n,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return r(e.target.value)}}):Object(b.jsxs)("h1",{className:"singlePostTitle",children:[n,y.username===(null===t||void 0===t?void 0:t.username)&&Object(b.jsxs)("div",{className:"singlePostEdit",children:[Object(b.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return N(!0)}}),Object(b.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k})]})]}),Object(b.jsxs)("div",{className:"singlePostInfo",children:[Object(b.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(b.jsx)(d.b,{className:"link",to:"/?user=".concat(y.username),children:Object(b.jsx)("b",{children:y.username})})]}),Object(b.jsx)("span",{className:"singlePostDate",children:new Date(y.createdAt).toDateString()})]}),f?Object(b.jsx)("textarea",{className:"singlePostDescInput",value:O,onChange:function(e){return m(e.target.value)}}):Object(b.jsx)("p",{className:"singlePostDesc",children:O}),f&&Object(b.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})}function T(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"single",children:[Object(b.jsx)(k,{}),Object(b.jsx)(I,{})]})})}s(68);function C(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],p=Object(a.useState)(null),d=Object(j.a)(p,2),O=d[0],m=d[1],h=Object(a.useContext)(g).user,x=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:h.username,title:s,desc:i},!O){e.next=15;break}return c=new FormData,n=Date.now()+O.name,c.append("name",n),c.append("file",O),a.photo=n,e.prev=8,e.next=11,w.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,w.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"write",children:[O&&Object(b.jsx)("img",{src:URL.createObjectURL(O),alt:"",className:"writeImage"}),Object(b.jsxs)("form",{className:"writeForm",onSubmit:x,children:[Object(b.jsxs)("div",{className:"writeFormGroup",children:[Object(b.jsx)("label",{htmlFor:"fileInput",children:Object(b.jsx)("i",{className:" writeIcon fas fa-plus"})}),Object(b.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(b.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(b.jsx)("div",{className:"writeFormGroup",children:Object(b.jsx)("textarea",{placeholder:"Tell your story",type:"text",className:"writeInput writeText",onChange:function(e){return u(e.target.value)}})}),Object(b.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(69);function L(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],p=Object(a.useState)(""),d=Object(j.a)(p,2),O=d[0],m=d[1],h=Object(a.useState)(""),x=Object(j.a)(h,2),f=x[0],N=x[1],v=Object(a.useState)(!1),y=Object(j.a)(v,2),S=y[0],k=y[1],T=Object(a.useContext)(g),C=T.user,L=T.dispatch,P=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L({type:"UPDATE_START"}),a={userId:C._id,username:i,email:O,password:f},!s){e.next=16;break}return c=new FormData,n=Date.now()+s.name,c.append("name",n),c.append("file",s),a.profilePic=n,e.prev=9,e.next=12,w.a.post("/upload",c);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,w.a.put("/users/"+C._id,a);case 19:r=e.sent,k(!0),L({type:"UPDATE_SUCCESS",payload:r.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),L({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"setting",children:[Object(b.jsxs)("div",{className:"settingWrapper",children:[Object(b.jsxs)("div",{className:"settingTitle",children:[Object(b.jsx)("span",{className:"settingUpdateTitle",children:"Update your account"}),Object(b.jsx)("span",{className:"settingDeleteTitle",children:"Delete account"})]}),Object(b.jsxs)("form",{className:"settingForm",onSubmit:P,children:[Object(b.jsx)("label",{children:"Profile Picture"}),Object(b.jsxs)("div",{className:"settingPP",children:[Object(b.jsx)("img",{src:s?URL.createObjectURL(s):"https://shielded-basin-70006.herokuapp.com/images/"+C.profilePic,alt:""}),Object(b.jsx)("label",{htmlFor:"fileInput",children:Object(b.jsx)("i",{className:"settingPPIcon far fa-user-circle"})}),Object(b.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return c(e.target.files[0])}})]}),Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholer:C.username,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",placeholer:C.email,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",onChange:function(e){return N(e.target.value)}}),Object(b.jsx)("button",{className:"settingSubmit",type:"submit",children:"Update"}),S&&Object(b.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated!"})]})]}),Object(b.jsx)(I,{})]})}s(70);function P(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(g),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(o.a)(l.a.mark((function s(a){var n;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,w.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("span",{className:"loginTitle",children:"Login"}),Object(b.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(b.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(b.jsx)("button",{className:"loginRegisterButton",children:Object(b.jsx)(d.b,{to:"/register",className:"link",children:"Register"})})]})}s(71);function E(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(j.a)(n,2),i=r[0],u=r[1],p=Object(a.useState)(""),O=Object(j.a)(p,2),m=O[0],h=O[1],x=Object(a.useState)(!1),f=Object(j.a)(x,2),g=f[0],N=f[1],v=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!1),e.prev=2,e.next=5,w.a.post("/auth/register",{username:s,email:m,password:i});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"register",children:[Object(b.jsx)("span",{className:"registerTitle",children:"Register"}),Object(b.jsxs)("form",{className:"registerForm",onSubmit:v,children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(b.jsx)("button",{className:"registerLoginButton",children:Object(b.jsx)(d.b,{to:"/login",className:"link",children:"Login"})}),g&&Object(b.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}var F=function(){var e=Object(a.useContext)(g).user;return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(S,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)(y,{})}),Object(b.jsx)(u.a,{path:"/register",children:e?Object(b.jsx)(y,{}):Object(b.jsx)(E,{})}),Object(b.jsx)(u.a,{path:"/login",children:e?Object(b.jsx)(y,{}):Object(b.jsx)(P,{})}),Object(b.jsx)(u.a,{path:"/write",children:e?Object(b.jsx)(C,{}):Object(b.jsx)(P,{})}),Object(b.jsx)(u.a,{path:"/post/:postId",children:Object(b.jsx)(T,{})}),Object(b.jsx)(u.a,{path:"/settings",children:e?Object(b.jsx)(L,{}):Object(b.jsx)(P,{})})]})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{children:Object(b.jsx)(F,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.053ffeb8.chunk.js.map