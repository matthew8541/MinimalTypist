(this["webpackJsonpminimal-typist"]=this["webpackJsonpminimal-typist"]||[]).push([[0],{24:function(e,t,n){e.exports={header:"NavBar_header__1wxDw",logo:"NavBar_logo__2FY1p",nav:"NavBar_nav__xAdj3",active:"NavBar_active__hqGOc",hamburger:"NavBar_hamburger__1geu8"}},48:function(e,t,n){e.exports={intro:"Intro_intro__mrlq7"}},58:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),o=n.n(r),a=(n(58),n(16)),i=n(11),s=n(14),l=n(24),u=n.n(l),j=n(2),b=function(e){return Object(j.jsxs)("button",{className:u.a.hamburger,onClick:e.click,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})},d=function(e){return Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("div",{children:Object(j.jsx)(s.b,{to:"/",className:u.a.logo,children:"MinimalTypist"})}),Object(j.jsx)("nav",{className:u.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/home",activeClassName:u.a.active,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab1",activeClassName:u.a.active,children:"Tab1"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab2",activeClassName:u.a.active,children:"Tab2"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab3",activeClassName:u.a.active,children:"Tab3"})})]})}),Object(j.jsx)(b,{click:e.clickDropDown})]})},h=(n(68),function(e){var t=["dropdown"];return e.show&&(t=["dropdown","open"]),Object(j.jsx)("nav",{className:t.join(" "),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/home",className:"link",children:" Home "})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab1",className:"link",children:" tab1 "})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab2",className:"link",children:" tab2 "})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/tab3",className:"link",children:" tab3 "})})]})})}),m=(n(69),function(e){return Object(j.jsx)("div",{className:"backdrop",onClick:e.click})}),f=n(20),O=n(103),g=n(106),x=n(108),v=n(109),p=n(15),y=n(36),w="start",k="progress",N="over",_={timer:30,totalWords:0,correctWords:0,gameStatus:w,showResult:!1},S=Object(y.b)({name:"counter",initialState:_,reducers:{tictok:function(e){e.timer--},resetTimer:function(e){e.timer=30},incrementTotalWords:function(e){e.totalWords++},incrementCorrectWords:function(e){e.correctWords++},changeGameStatus:function(e,t){console.log(t),e.gameStatus=t.payload.type,console.log("Current Game Status",e.gameStatus)},setTotalWords:function(e,t){e.totalWords=t.payload.amount},changeResultStatus:function(e){e.showResult=!e.showResult}}}),E=S.actions,W=E.tictok,C=E.incrementTotalWords,T=E.incrementCorrectWords,I=E.changeGameStatus,M=E.resetTimer,R=E.setTotalWords,B=S.reducer,D="at right above world sea help school their line near got of all kind does list letter come then own write to about him in stop here line cut form could what man be the young feet or will until picture well river sound white as write had three went took turn earth list own without and when new cut young men far so song home off left think up country only place him girl thing it\u2019s keep often away we those or year but group or they not eye point again big few me leave while show along very got girl saw each eat over before family many look always boy night above close up mountain large around get only high more talk use such at read page is saw just father enough young kind day turn really song may put add but might something only its list begin find well big important near got far find your right very earth sea father where need because too word move might book use said letter about an can got were two mother man they before idea high we begin through form family go great even river place sentence us ask next use it hear water boy do men sea picture question when big while point around them not read being must call stop man before time next play him where her near talk to one to found quick end day good not above spell left begin or far must this turn might earth really light often make second around of for its water word try us took here us in each our out food could second being which may car can just mother seem cut that start light feet".split(" "),q="highlighted",F=(n(71),Object(O.a)({textField_Input:{color:"white",alignSelf:"center",fontSize:24,margin:"30px 30px"},button:{}})),G=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),i=Object(a.a)(o,2),s=i[0],l=i[1],u=Object(c.useState)([]),b=Object(a.a)(u,2),d=b[0],h=b[1],m=Object(c.useState)(0),O=Object(a.a)(m,2),y=O[0],N=O[1],_=Object(p.b)(),S=Object(p.c)((function(e){return e.counter.timer})),E=Object(p.c)((function(e){return e.counter.gameStatus})),W=F();Object(c.useEffect)((function(){l(R()),h(R())}),[]),Object(c.useEffect)((function(){n&&!A()?P("highlightedError"):P(q)}),[n]),Object(c.useEffect)((function(){N(y)}),[s,y]),Object(c.useEffect)((function(){P(q)}),[y,d]);var R=function(){for(var e=[],t=0;t<10;t++){var n=D[Math.floor(Math.random()*D.length)];e.push({word:n,status:"new"})}return e},B=function(e){return e.map((function(e,t){var n=e.word,c=e.status;return Object(j.jsx)("span",{className:"word ".concat(c),children:n},t)}))},G=function(){!function(){var e=Object(f.a)(s);s[y].word===n.trim()?(e[y].status="correct",_(T())):e[y].status="wrong",l(e)}(),y===s.length-1?(N(0),l(d),h(R())):N(y+1)},P=function(e){var t=Object(f.a)(s);t.length&&(t[y].status=e,l(t))},A=function(){return s[y].word.substring(0,n.length)===n};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:S}),Object(j.jsxs)("div",{children:[Object(j.jsx)(g.a,{children:B(s)}),Object(j.jsx)(g.a,{children:B(d)})]}),Object(j.jsx)("div",{className:"typing",children:Object(j.jsx)(x.a,{autoComplete:"off",autoFocus:!0,id:"filled-basic",InputProps:{className:W.textField_Input},onChange:function(e){r(e.target.value.trim())},onKeyPress:function(e){E===w&&_(I({type:k}))," "===e.key&&n.trim().length&&(G(),_(C()),r(""))},value:n})}),Object(j.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){_(M()),l(R()),h(R()),_(I({type:w}))},children:"Refresh"})]})},P=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.counter.totalWords})),n=Object(p.c)((function(e){return e.counter.correctWords}));Object(c.useEffect)((function(){return document.body.addEventListener("keydown",o),function(){return document.body.removeEventListener("keydown",o)}}),[]);var r=function(){e(M()),e(I({type:"start"})),e(R({amount:0}))},o=function(e){" "===e.key&&r()};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"centered",children:"Result"}),Object(j.jsx)("h2",{className:"centered",children:"Speed: ".concat(Math.floor(t/.5)," WPM")}),Object(j.jsx)("h2",{className:"centered",children:"Accurary: ".concat(Math.floor(100*n/t),"%")}),Object(j.jsx)(v.a,{variant:"contained",color:"primary",onClick:r,children:"Restart"})]})},A=(n(73),function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.counter.timer})),n=Object(p.c)((function(e){return e.counter.gameStatus}));return Object(c.useEffect)((function(){document.body.className="body"}),[]),Object(c.useEffect)((function(){console.log("home useEffect");var c=null;return n===N?clearInterval(c):t<=0?e(I({type:N})):n===k&&(c=setInterval((function(){e(W())}),1e3)),function(){return clearInterval(c)}}),[t,n]),Object(j.jsxs)("div",{className:"centered",children:[n!==N&&Object(j.jsx)(G,{}),n===N&&Object(j.jsx)(P,{})]})}),H=n(48),J=n.n(H),L=function(){return Object(c.useEffect)((function(){document.body.className="intro-body"}),[]),Object(j.jsxs)("div",{className:"".concat(J.a.intro," centered"),children:[Object(j.jsx)("h1",{children:"Welcome to MinimalTypist"}),Object(j.jsx)("h3",{children:"Enjoy the minimalistic typing environment"}),Object(j.jsx)(v.a,{variant:"contained",color:"inherit",children:Object(j.jsx)(s.b,{to:"/home",style:{textDecoration:"none",color:"#000000"},children:"Start Typing"})})]})},z=function(){return Object(c.useEffect)((function(){document.body.className="body"}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"centered",children:"Result are not found..."})})};var K=function(){var e,t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1];return r&&(e=Object(j.jsx)(m,{click:function(){o(!1)}})),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{clickDropDown:function(){o((function(e){return!e}))}}),Object(j.jsx)(h,{show:r}),e,Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,children:Object(j.jsx)(L,{})}),Object(j.jsx)(i.a,{path:"/home",children:Object(j.jsx)(A,{})}),Object(j.jsx)(i.a,{path:"*",children:Object(j.jsx)(z,{})})]})]})},Y=Object(y.a)({reducer:{counter:B}});o.a.render(Object(j.jsx)(p.a,{store:Y,children:Object(j.jsx)(s.a,{basename:"/MinimalTypist",children:Object(j.jsx)(K,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6f43a971.chunk.js.map