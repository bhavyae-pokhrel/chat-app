"use strict";(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[285],{6571:function(n,e,r){r(2791);e.Z=r.p+"static/media/logo.ccfbd90732828204fa6989c0f15638c0.svg"},285:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,o=r(168),a=r(5861),i=r(4942),s=r(1413),c=r(9439),u=r(7757),d=r.n(u),l=r(2791),p=r(4569),f=r.n(p),m=r(6444),h=r(7689),g=r(1087),b=r(6571),w=r(577),O=(r(5462),r(8204)),v=r(184);function j(){var n=(0,h.s0)(),e={position:"bottom-right",autoClose:8e3,pauseOnHover:!0,draggable:!0,theme:"dark"},r=(0,l.useState)({username:"",email:"",password:"",confirmPassword:""}),t=(0,c.Z)(r,2),o=t[0],u=t[1];(0,l.useEffect)((function(){localStorage.getItem({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_LOCALHOST_KEY)&&n("/")}),[]);var p=function(n){u((0,s.Z)((0,s.Z)({},o),{},(0,i.Z)({},n.target.name,n.target.value)))},m=function(){var n=o.password,r=o.confirmPassword,t=o.username,a=o.email;return n!==r?(w.Am.error("Password and confirm password should be same.",e),!1):t.length<3?(w.Am.error("Username should be greater than 3 characters.",e),!1):n.length<8?(w.Am.error("Password should be equal or greater than 8 characters.",e),!1):""!==a||(w.Am.error("Email is required.",e),!1)},j=function(){var r=(0,a.Z)(d().mark((function r(t){var a,i,s,c,u;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),!m()){r.next=9;break}return a=o.email,i=o.username,s=o.password,r.next=5,f().post(O.X0,{username:i,email:a,password:s});case 5:c=r.sent,!1===(u=c.data).status&&w.Am.error(u.msg,e),!0===u.status&&(localStorage.setItem({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_LOCALHOST_KEY,JSON.stringify(u.user)),n("/"));case 9:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{children:(0,v.jsxs)("form",{action:"",onSubmit:function(n){return j(n)},children:[(0,v.jsxs)("div",{className:"brand",children:[(0,v.jsx)("img",{src:b.Z,alt:"logo"}),(0,v.jsx)("h1",{children:"snappy"})]}),(0,v.jsx)("input",{type:"text",placeholder:"Username",name:"username",onChange:function(n){return p(n)}}),(0,v.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:function(n){return p(n)}}),(0,v.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:function(n){return p(n)}}),(0,v.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"confirmPassword",onChange:function(n){return p(n)}}),(0,v.jsx)("button",{type:"submit",children:"Create User"}),(0,v.jsxs)("span",{children:["Already have an account ? ",(0,v.jsx)(g.rU,{to:"/login",children:"Login."})]})]})}),(0,v.jsx)(w.Ix,{})]})}var x=m.ZP.div(t||(t=(0,o.Z)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n  background-color: #131324;\n  .brand {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    justify-content: center;\n    img {\n      height: 5rem;\n    }\n    h1 {\n      color: white;\n      text-transform: uppercase;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    background-color: #00000076;\n    border-radius: 2rem;\n    padding: 3rem 5rem;\n  }\n  input {\n    background-color: transparent;\n    padding: 1rem;\n    border: 0.1rem solid #4e0eff;\n    border-radius: 0.4rem;\n    color: white;\n    width: 100%;\n    font-size: 1rem;\n    &:focus {\n      border: 0.1rem solid #997af0;\n      outline: none;\n    }\n  }\n  button {\n    background-color: #4e0eff;\n    color: white;\n    padding: 1rem 2rem;\n    border: none;\n    font-weight: bold;\n    cursor: pointer;\n    border-radius: 0.4rem;\n    font-size: 1rem;\n    text-transform: uppercase;\n    &:hover {\n      background-color: #4e0eff;\n    }\n  }\n  span {\n    color: white;\n    text-transform: uppercase;\n    a {\n      color: #4e0eff;\n      text-decoration: none;\n      font-weight: bold;\n    }\n  }\n"])))},8204:function(n,e,r){r.d(e,{ho:function(){return t},VU:function(){return o},X0:function(){return a},p_:function(){return i},pK:function(){return s},JC:function(){return c},Bw:function(){return u},TC:function(){return d}});var t="http://localhost:5000",o="".concat(t,"/api/auth/login"),a="".concat(t,"/api/auth/register"),i="".concat(t,"/api/auth/logout"),s="".concat(t,"/api/auth/allusers"),c="".concat(t,"/api/messages/addmsg"),u="".concat(t,"/api/messages/getmsg"),d="".concat(t,"/api/auth/setavatar")},4942:function(n,e,r){function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}r.d(e,{Z:function(){return t}})},1413:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(4942);function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,t.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}}}]);
//# sourceMappingURL=285.9888c1c8.chunk.js.map