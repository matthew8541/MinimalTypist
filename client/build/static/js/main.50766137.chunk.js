(this["webpackJsonpminimal-typist"]=this["webpackJsonpminimal-typist"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(9),a=n.n(c),o=(n(71),n(12)),i=n(7),s=n(13),u=n(15),l=n(29),j=Object(l.b)({name:"auth",initialState:{id:"",isLogin:!1,username:null,email:null,record:[]},reducers:{login:function(e,t){var n=t.payload._id;e.id=n,e.isLogin=!0},logout:function(e){e.id="",e.isLogin=!1,e.username=null,e.email=null,e.record=[],localStorage.clear()},register:function(e,t){var n=t.payload,r=n.username,c=n.email;e.username=r,e.email=c,e.isLogin=!0},setProfile:function(e,t){var n=t.payload,r=n.currUser,c=n.profile,a=r.email,o=r.username,i=r._id,s=c.record;e.id=i,e.username=o,e.email=a,e.record=s},newRecord:function(e,t){var n=t.payload,r=n.wpm,c=n.accuracy,a=n.date;e.record.unshift({wpm:r,accuracy:c,date:a})}}}),d=j.actions,b=d.login,h=d.logout,f=d.register,O=d.setProfile,m=(d.newRecord,j.reducer),p=n(24),x=n.n(p),v=n(2),g=function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.auth.isLogin}));return Object(v.jsxs)("header",{className:x.a.header,children:[Object(v.jsx)("div",{children:Object(v.jsx)(u.b,{to:"/",className:x.a.logo,children:"MinimalTypist"})}),n?Object(v.jsx)(y,{logout:function(){t(h())}}):Object(v.jsx)(k,{}),Object(v.jsx)(w,{click:e.clickDropDown})]})},w=function(e){return Object(v.jsxs)("button",{className:x.a.hamburger,onClick:e.click,children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})},y=function(e){return Object(v.jsx)("nav",{className:x.a.nav,children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/home",activeClassName:x.a.active,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/profile",activeClassName:x.a.active,children:"Profile"})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",onClick:e.logout,children:"Logout"})})]})})},k=function(){return Object(v.jsx)("nav",{className:x.a.nav,children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/home",activeClassName:x.a.active,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/login",activeClassName:x.a.active,children:"Login"})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/register",activeClassName:x.a.active,children:"Register"})})]})})},N=(n(82),function(e){var t=Object(i.c)((function(e){return e.auth.isLogin})),n=Object(i.b)(),c=Object(s.g)();Object(r.useEffect)((function(){return c.listen((function(t){e.closeDropDown()}))}),[c]);var a=["dropdown"];e.show&&(a=["dropdown","open"]);return t?Object(v.jsx)("nav",{className:a.join(" "),children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/home",className:"link",children:" Home "})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/profile",className:"link",children:" Profile "})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",className:"link",onClick:function(){n(h())},children:" Logout "})})]})}):Object(v.jsx)("nav",{className:a.join(" "),children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/home",className:"link",children:" Home "})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/login",className:"link",children:" Login "})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/register",className:"link",children:" Register "})})]})})}),S=(n(83),function(e){return Object(v.jsx)("div",{className:"backdrop",onClick:e.click})}),C=n(23),_=n(142),E=n(145),R=n(147),L=n(148),W="start",D="progress",I="over",P={timer:30,totalWords:0,correctWords:0,gameStatus:W,showResult:!1},M=Object(l.b)({name:"counter",initialState:P,reducers:{tictok:function(e){e.timer--},resetTimer:function(e){e.timer=30},incrementTotalWords:function(e){e.totalWords++},incrementCorrectWords:function(e){e.correctWords++},changeGameStatus:function(e,t){e.gameStatus=t.payload.type},setTotalWords:function(e,t){e.totalWords=t.payload.amount},changeResultStatus:function(e){e.showResult=!e.showResult}}}),F=M.actions,T=F.tictok,U=F.incrementTotalWords,z=F.incrementCorrectWords,B=F.changeGameStatus,H=F.resetTimer,q=F.setTotalWords,A=M.reducer,G="at right above world sea help school their line near got of all kind does list letter come then own write to about him in stop here line cut form could what man be the young feet or will until picture well river sound white as write had three went took turn earth list own without and when new cut young men far so song home off left think up country only place him girl thing it\u2019s keep often away we those or year but group or they not eye point again big few me leave while show along very got girl saw each eat over before family many look always boy night above close up mountain large around get only high more talk use such at read page is saw just father enough young kind day turn really song may put add but might something only its list begin find well big important near got far find your right very earth sea father where need because too word move might book use said letter about an can got were two mother man they before idea high we begin through form family go great even river place sentence us ask next use it hear water boy do men sea picture question when big while point around them not read being must call stop man before time next play him where her near talk to one to found quick end day good not above spell left begin or far must this turn might earth really light often make second around of for its water word try us took here us in each our out food could second being which may car can just mother seem cut that start light feet".split(" "),J="highlighted",Y=(n(84),Object(_.a)({textField_Input:{color:"white",alignSelf:"center",fontSize:24,margin:"30px 30px"}})),K=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(o.a)(a,2),u=s[0],l=s[1],j=Object(r.useState)([]),d=Object(o.a)(j,2),b=d[0],h=d[1],f=Object(r.useState)(0),O=Object(o.a)(f,2),m=O[0],p=O[1],x=Object(i.b)(),g=Object(i.c)((function(e){return e.counter.timer})),w=Object(i.c)((function(e){return e.counter.gameStatus})),y=Y();Object(r.useEffect)((function(){l(k()),h(k())}),[]),Object(r.useEffect)((function(){n&&!I()?_("highlightedError"):_(J)}),[n]),Object(r.useEffect)((function(){p(m)}),[u,m]),Object(r.useEffect)((function(){_(J)}),[m,b]);var k=function(){for(var e=[],t=0;t<10;t++){var n=G[Math.floor(Math.random()*G.length)];e.push({word:n,status:"new"})}return e},N=function(e){return e.map((function(e,t){var n=e.word,r=e.status;return Object(v.jsx)("span",{className:"word ".concat(r),children:n},t)}))},S=function(){!function(){var e=Object(C.a)(u);u[m].word===n.trim()?(e[m].status="correct",x(z())):e[m].status="wrong",l(e)}(),m===u.length-1?(p(0),l(b),h(k())):p(m+1)},_=function(e){var t=Object(C.a)(u);t.length&&(t[m].status=e,l(t))},I=function(){return u[m].word.substring(0,n.length)===n};return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:g}),Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{children:N(u)}),Object(v.jsx)(E.a,{children:N(b)})]}),Object(v.jsx)("div",{className:"typing",children:Object(v.jsx)(R.a,{autoComplete:"off",autoFocus:!0,id:"filled-basic",InputProps:{className:y.textField_Input},onChange:function(e){c(e.target.value.trim())},onKeyPress:function(e){w===W&&x(B({type:D}))," "===e.key&&n.trim().length&&(S(),x(U()),c(""))},value:n})}),Object(v.jsx)(L.a,{variant:"contained",color:"primary",onClick:function(){x(H()),l(k()),h(k()),x(B({type:W}))},children:"Refresh"})]})},V=n(16),Q=n.n(V),X=n(19),Z=n(47),$=function(){var e=Object(X.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("/profile?id=".concat(t));case 3:return n=e.sent,e.abrupt("return",{currUser:n.data.currUser,profile:n.data.profile});case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(X.a)(Q.a.mark((function e(t,n){var r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.put("/home",{userId:t,newRecord:n});case 3:r=e.sent,console.log("updateRecordAction: ",r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),te=function(){var e=Object(i.c)((function(e){return e.auth.isLogin})),t=Object(i.c)((function(e){return e.auth.id})),n=Object(i.c)((function(e){return e.counter.totalWords})),c=Object(i.c)((function(e){return e.counter.correctWords})),a=Object(i.b)(),o=new Date,s=[o.getMonth(),o.getDate(),o.getFullYear()],u=s[0],l=s[1],j=s[2];Object(r.useEffect)((function(){if(document.body.addEventListener("keydown",b),e){var r={wpm:Math.floor(n/.5),accuracy:Math.floor(100*c/n),date:"".concat(u+1,"/").concat(l,"/").concat(j)};ee(t,r)}return function(){return document.body.removeEventListener("keydown",b)}}),[]);var d=function(){a(H()),a(B({type:"start"})),a(q({amount:0}))},b=function(e){13===e.keyCode&&d()};return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"centered",children:"Result"}),Object(v.jsx)("h2",{className:"centered",children:"Speed: ".concat(Math.floor(n/.5)," WPM")}),Object(v.jsx)("h2",{className:"centered",children:"Accurary: ".concat(Math.floor(100*c/n),"%")}),Object(v.jsx)(L.a,{variant:"contained",color:"primary",onClick:d,children:"Restart"})]})},ne=(n(105),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.counter.timer})),n=Object(i.c)((function(e){return e.counter.gameStatus}));Object(r.useEffect)((function(){return function(){return c()}}),[]),Object(r.useEffect)((function(){var r=null;return n===I?clearInterval(r):t<=0?e(B({type:I})):n===D&&(r=setInterval((function(){e(T())}),1e3)),function(){return clearInterval(r)}}),[t,n]);var c=function(){e(H()),e(B({type:W}))};return Object(v.jsxs)("div",{className:"centered",children:[n!==I&&Object(v.jsx)(K,{}),n===I&&Object(v.jsx)(te,{})]})}),re=n(60),ce=n.n(re),ae=function(){return Object(r.useEffect)((function(){return document.body.className="intro-body",function(){document.body.className="body"}}),[]),Object(v.jsxs)("div",{className:"".concat(ce.a.intro," centered"),children:[Object(v.jsx)("h1",{children:"Welcome to MinimalTypist"}),Object(v.jsx)("h3",{children:"Enjoy the minimalistic typing environment"}),Object(v.jsx)(L.a,{variant:"contained",color:"inherit",children:Object(v.jsx)(u.b,{to:"/home",style:{textDecoration:"none",color:"#000000"},children:"Start Typing"})})]})},oe=n(47),ie=function(){var e=Object(X.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.post("/login",t);case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(X.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.post("/register",t);case 3:if(201!==e.sent.status){e.next=6;break}return e.abrupt("return",!0);case 6:e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(X.a)(Q.a.mark((function e(t,n){var r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(r=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),r=""),e.prev=2,e.next=5,oe.post("/tokenIsValid",{Headers:{"x-auth-token":r}});case 5:if(!e.sent.data){e.next=11;break}return e.next=9,oe.get("/users",{headers:{"x-auth-token":r}});case 9:c=e.sent,t(n(c.data.user));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e,t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)(null),h=Object(o.a)(d,2),f=h[0],O=h[1],m=Object(i.b)(),p=function(){var e=Object(X.a)(Q.a.mark((function e(t){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,ie({email:c,password:l});case 4:200===(n=e.sent).status?(localStorage.setItem("auth-token",n.data.token),m(b(n.data.result))):O(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return e=!1===f?{color:"red",fontSize:"12px"}:{visibility:"hidden",fontSize:"12px"},Object(v.jsxs)("main",{className:"centered userCard",children:[Object(v.jsx)("h2",{children:"Login"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",id:"email",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",id:"password",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(v.jsx)("h4",{style:e,children:"Invalid Email or Password"}),Object(v.jsx)(L.a,{variant:"contained",color:"primary",onClick:p,children:"Login"})]})]})},je=function(){var e,t=Object(r.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)(""),b=Object(o.a)(d,2),h=b[0],O=b[1],m=Object(r.useState)(null),p=Object(o.a)(m,2),x=p[0],g=p[1],w=Object(i.b)(),y=function(){var e=Object(X.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,se({username:c,email:l,password:h});case 3:e.sent?w(f({username:c,email:l})):g(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return e=!1===x?{color:"red",fontSize:"12px"}:{visibility:"hidden",fontSize:"12px"},Object(v.jsxs)("main",{className:"centered userCard",children:[Object(v.jsx)("h2",{children:"Register"}),Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"user",children:"Username"}),Object(v.jsx)("input",{type:"user",id:"user",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email"}),Object(v.jsx)("input",{type:"email",id:"email",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"password",children:"Password"}),Object(v.jsx)("input",{type:"password",id:"password",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(v.jsx)("h4",{style:e,children:"Something went wrong"}),Object(v.jsx)(L.a,{variant:"contained",color:"primary",onClick:y,children:"Register"})]})]})},de=n(61),be=n.n(de),he=(n(106),function(e){var t=e.record,n=t.wpm,r=t.accuracy,c=t.date;return Object(v.jsxs)("div",{className:"list-box",children:[Object(v.jsx)("div",{className:"inner-box",children:Object(v.jsx)("p",{children:n})}),Object(v.jsx)("div",{className:"inner-box",children:Object(v.jsx)("p",{children:r})}),Object(v.jsx)("div",{className:"inner-box",children:Object(v.jsx)("p",{children:c})})]})}),fe=function(){var e=Object(i.c)((function(e){return e.auth.username})),t=Object(i.c)((function(e){return e.auth.email})),n=Object(i.c)((function(e){return e.auth.id})),c=Object(i.c)((function(e){return e.auth.record})),a=Object(i.b)(),o=Object(s.g)();return Object(r.useEffect)((function(){(function(){var e=Object(X.a)(Q.a.mark((function e(){var t,r,c;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(n);case 2:t=e.sent,r=t.currUser,c=t.profile,a(O({currUser:r,profile:c})),o.push("?id=".concat(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),e&&t&&c?Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"centered",children:"Profile"}),Object(v.jsxs)("h3",{className:"centered",children:["Username: ",e]}),Object(v.jsxs)("h3",{className:"centered",children:["Email: ",t]}),Object(v.jsxs)("div",{className:"centered",children:[Object(v.jsx)("h3",{children:"Record"}),Object(v.jsx)(he,{record:{wpm:"WPM",accuracy:"Accuracy",date:"Date"}}),c.map((function(e,t){return Object(v.jsx)(he,{record:e},t)}))]})]}):Object(v.jsx)("div",{className:"middle",children:Object(v.jsx)(be.a,{loading:!0,size:50,color:"#fff"})})};var Oe=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.c)((function(e){return e.auth.isLogin})),u=Object(i.b)();Object(r.useEffect)((function(){ue(u,b)}),[]);var l,j=function(){c(!1)};return n&&(l=Object(v.jsx)(S,{click:j})),Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{clickDropDown:function(){c((function(e){return!e}))}}),Object(v.jsx)(N,{show:n,closeDropDown:j}),l,Object(v.jsxs)(s.d,{children:[Object(v.jsx)(s.b,{path:"/",exact:!0,component:ae}),Object(v.jsx)(s.b,{path:"/home",component:ne}),Object(v.jsx)(s.b,{path:"/register",children:a?Object(v.jsx)(s.a,{to:"/home"}):Object(v.jsx)(je,{})}),Object(v.jsx)(s.b,{path:"/login",children:a?Object(v.jsx)(s.a,{to:"/home"}):Object(v.jsx)(le,{})}),Object(v.jsx)(s.b,{path:"/profile",children:a?Object(v.jsx)(fe,{}):Object(v.jsx)(s.a,{to:"/"})}),Object(v.jsx)(s.b,{path:"*",component:function(){return Object(v.jsx)(s.a,{to:"/"})}})]})]})},me=Object(l.b)({name:"rank",initialState:{ranking:[]},reducers:{fetchRanking:function(e){},updateRanking:function(e){}}}),pe=me.actions,xe=(pe.fetchRanking,pe.updateRanking,me.reducer),ve=Object(l.a)({reducer:{counter:A,auth:m,rank:xe}});a.a.render(Object(v.jsx)(i.a,{store:ve,children:Object(v.jsx)(u.a,{children:Object(v.jsx)(Oe,{})})}),document.getElementById("root"))},24:function(e,t,n){e.exports={header:"NavBar_header__1wxDw",logo:"NavBar_logo__2FY1p",nav:"NavBar_nav__xAdj3",active:"NavBar_active__hqGOc",hamburger:"NavBar_hamburger__1geu8"}},60:function(e,t,n){e.exports={intro:"Intro_intro__mrlq7"}},71:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.50766137.chunk.js.map