(this["webpackJsonpweb-folio"]=this["webpackJsonpweb-folio"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},84:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n(2),s=n.n(i),a=n(23),o=n.n(a),r=(n(70),n(71),n(45)),l=n(21),j=n(106),d=n(60),h=n(107),b=n(61),u=n(62),m=n(64),x=n(108),f=n(105),O=(n(72),function(e){var t=Object(i.useState)({contactModal:!1}),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)(x.a,{className:"justify-content-between",sticky:"top",style:{backgroundColor:"#1A1A1D"},children:[Object(c.jsx)(x.a.Brand,{children:Object(c.jsx)("div",{style:{color:"#C3073F"},children:"Amartya Mishra"})}),Object(c.jsxs)(f.a,{alignRight:!0,id:"menu-btn",title:"Menu",children:[Object(c.jsx)(f.a.Item,{onClick:function(){window.open("https://1drv.ms/b/s!Akkr1QYilOQMicl_cFCz16x1wC_Gdg?e=Vd4cOc")},children:"View Resume"}),Object(c.jsx)(f.a.Item,{onClick:function(){return a(Object(r.a)(Object(r.a)({},s),{},{contactModal:!0}))},children:"Say Something"}),Object(c.jsx)(f.a.Divider,{style:{backgroundColor:"#00000030"}}),Object(c.jsx)(f.a.Item,{className:"ver-num",children:Object(c.jsx)("p",{children:"v0.1.4"})})]})]}),Object(c.jsx)(j.a,{show:s.contactModal,onHide:function(){a(Object(r.a)(Object(r.a)({},s),{},{contactModal:!1}))},children:Object(c.jsx)(d.a,{children:Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(b.a,{children:[Object(c.jsxs)(u.a,{children:["Email",Object(c.jsx)("span",{color:"red",children:"*"})]}),Object(c.jsx)(h.a.Control,{type:"email",placeholder:"Where to get back"})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{children:"Message: "}),Object(c.jsx)(h.a.Control,{as:"textarea",rows:8})]}),Object(c.jsx)(b.a,{children:Object(c.jsx)(m.a,{style:{backgroundColor:"#4E4E50",borderColor:"#4E4E50"},children:"Send"})})]})})})]})}),p=n(102),g=n(101),w=n(63),y=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};y.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span className="wrap">'+this.txt+"</span>";var n=this,c=200-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),c)},window.onload=function(){console.log("inserter");var e=document.getElementById("typewrite"),t=e.getAttribute("data-type"),n=e.getAttribute("data-period");t&&new y(e,JSON.parse(t),n);var c=document.createElement("style");c.type="text/css",c.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(c)};n(77),n(78);var v=n(38),N=n.n(v),k=n(50),S=n(59);S.a.initializeApp({apiKey:"AIzaSyD97-JqjKLSLR4tVg1W3MZTG94JgsZl5kg",authDomain:"web-folio-d329b.firebaseapp.com",databaseURL:"https://web-folio-d329b.firebaseio.com",projectId:"web-folio-d329b",storageBucket:"web-folio-d329b.appspot.com",messagingSenderId:"527366819681",appId:"1:527366819681:web:ee7a55a31e5cdd02da3f20",measurementId:"G-RFDYLG4T17"});var C=S.a.database(),I=function(){return C.ref("expdata/").once("value")},A=function(){return C.ref("edudata/").once("value")},D=function(){return C.ref("hits/")},T=function(){return Object(k.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.ref("hits/").once("value");case 2:return t=e.sent,n=t.val(),n++,C.ref("hits/").set(n),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()},E=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(i.useEffect)((function(){var e=(new Date).getTime(),t=localStorage.getItem("timeofwave");t&&e-parseInt(t)>864e5&&localStorage.setItem("waved","0"),"1"===localStorage.getItem("waved")&&a(!0)})),s?Object(c.jsx)("div",{className:"conf-text",children:"Cheers!"}):Object(c.jsx)("div",{onClick:function(e){e.preventDefault(),function(){T(),localStorage.setItem("waved","1");var e=(new Date).getTime();localStorage.setItem("timeofwave",e.toString()),a(!0)}()},className:"btn-container",children:Object(c.jsx)("a",{href:"#",className:"transparent cont-2",children:Object(c.jsxs)("p",{className:"the-p",children:[Object(c.jsx)("span",{className:"bgbg"}),Object(c.jsx)("span",{className:"base"}),Object(c.jsx)("span",{className:"text",children:e.text})]})})})},F=n(55),z=n(100),L=function(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),s=n[0],a=n[1],o=Object(i.useState)(0),r=Object(l.a)(o,2),j=r[0],d=r[1];return Object(i.useEffect)((function(){D().on("value",(function(e){d(e.val()),a(!1)}))})),s?Object(c.jsx)("div",{className:e.class,children:Object(c.jsx)(z.a,{variant:"light",animation:"grow"})}):Object(c.jsx)("div",{className:e.class,children:j})},M=(n(84),function(){return window.innerWidth<800?Object(c.jsxs)(w.a,{children:[Object(c.jsx)(g.a,{className:"justify-content-center align-items-center",children:Object(c.jsx)(E,{text:"say hi!"})}),Object(c.jsxs)(g.a,{className:"justify-content-center ",children:[Object(c.jsx)(F.a,{color:"white",size:40}),Object(c.jsx)(L,{class:"hi-counter"})]})]}):Object(c.jsxs)(g.a,{style:{paddingLeft:"3rem"},className:"align-items-center",children:[Object(c.jsx)(E,{text:"say hi!"}),Object(c.jsx)(L,{class:"hi-counter"}),Object(c.jsx)(F.a,{className:"hi-icon",color:"white",size:40})]})}),R=function(){return Object(c.jsx)(p.a,{fluid:!0,style:{backgroundColor:"#111112"},children:Object(c.jsxs)(g.a,{className:"mx-0",children:[Object(c.jsxs)(w.a,{xs:12,md:9,children:[Object(c.jsx)(g.a,{className:"pl-5 pr-2",children:Object(c.jsx)("h1",{style:{height:"5.4rem",color:"#C3073F"},children:Object(c.jsx)("div",{id:"typewrite","data-period":"2000","data-type":'[ "Hi, I Am Amartya.", "I Am A Coder.", "I Am A Fitness Enthusiast.", "I Like Solving Problems.","I Like Building Things."]',children:Object(c.jsx)("span",{className:"wrap"})})})}),Object(c.jsxs)(g.a,{className:"pt-5 px-3 pl-5",children:[Object(c.jsx)("p",{style:{color:"white",fontWeight:"lighter",fontSize:"1.3rem"},children:"Welcome to my portfolio. Scroll down to learn more about what I do."}),Object(c.jsx)("p",{style:{color:"white",fontWeight:"lighter",fontSize:"1.3rem"},children:"Don't forget to say hi or hesitate to shoot me a message if you have any questions."})]}),Object(c.jsx)(M,{})]}),Object(c.jsxs)(w.a,{xs:12,md:3,children:[Object(c.jsx)("div",{className:"image-wrapper"}),Object(c.jsx)(g.a,{style:{height:"100%"},className:"justify-content-center align-items-center",children:Object(c.jsx)("img",{className:"header-image",src:"https://media-exp1.licdn.com/dms/image/C5103AQFT0Iq52dzUtw/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=n9RgIyO4Vrl-40Iv-K0WQP9-tvHDwwLrbNe43SbqbQc",alt:"profileimg"})}),Object(c.jsx)("div",{className:"image-wrapper"})]})]})})},V=n(44),W=(n(88),n(39)),B=n(57),H=(n(91),function(){var e=Object(i.useState)(void 0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(void 0),o=Object(l.a)(a,2),r=o[0],j=o[1],d=Object(i.useState)(!0),h=Object(l.a)(d,2),b=h[0],u=h[1],m=function(){var e=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return t=e.sent,s(t.val()),e.next=6,A();case 6:return t=e.sent,j(t.val()),u(!1),e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){m()}),[]);return b?Object(c.jsxs)(g.a,{style:{height:"20rem"},className:"justify-content-center align-items-center",children:[Object(c.jsx)("p",{className:"pf-loading-text",children:"Loading"})," ",Object(c.jsx)(z.a,{animation:"grow",variant:"light"})]}):n?Object(c.jsxs)(g.a,{className:"justify-content-around mx-0",children:[Object(c.jsxs)(w.a,{xs:10,lg:4,children:[Object(c.jsx)("h3",{style:{color:"#ffffff",paddingTop:"30px"},children:"Experience"}),Object(c.jsx)(V.VerticalTimeline,{className:"custom-timeline",layout:"1-column",children:Object.keys(n).map((function(e){var t;return Object(c.jsxs)(V.VerticalTimelineElement,{contentStyle:{background:"".concat(n[e].color),color:"".concat(n[e].fontColor)},contentArrowStyle:{borderRight:"7px solid  ".concat(n[e].color)},date:n[e].date,iconStyle:{background:"".concat(n[e].color),color:"".concat(n[e].fontColor)},iconClassName:"timeline-icon-exp",icon:Object(c.jsx)(W.a,{className:"timeline-icon-fine-exp",icon:B.a}),onTimelineElementClick:function(){var t;(null===(t=n[e])||void 0===t?void 0:t.link)&&window.open("".concat(n[e].link))},children:[(null===(t=n[e])||void 0===t?void 0:t.link)?Object(c.jsx)("u",{children:Object(c.jsx)("h6",{children:e})}):Object(c.jsx)("h6",{children:e}),Object(c.jsx)("p",{style:{fontSize:"0.8rem",color:n[e].fontColor},children:n[e].description})]},e)}))})]}),Object(c.jsxs)(w.a,{xs:10,lg:4,children:[Object(c.jsx)("h3",{style:{color:"#ffffff",paddingTop:"30px"},children:"Projects"}),Object(c.jsx)(V.VerticalTimeline,{className:"custom-timeline",layout:"1-column-right",children:Object.keys(r).map((function(e){var t;return Object(c.jsxs)(V.VerticalTimelineElement,{contentStyle:{background:"".concat(r[e].color),color:"".concat(r[e].fontColor)},contentArrowStyle:{borderLeft:"7px solid  ".concat(r[e].color)},date:r[e].date,iconStyle:{background:"".concat(r[e].color),color:"".concat(r[e].fontColor)},iconClassName:"timeline-icon-pro",icon:Object(c.jsx)(W.a,{className:"timeline-icon-fine-pro",icon:B.a}),onTimelineElementClick:function(){var t;(null===(t=r[e])||void 0===t?void 0:t.link)&&window.open("".concat(r[e].link))},children:[(null===(t=r[e])||void 0===t?void 0:t.link)?Object(c.jsx)("u",{children:Object(c.jsx)("h6",{children:e})}):Object(c.jsx)("h6",{children:e}),Object(c.jsx)("p",{style:{fontSize:"0.8rem",color:r[e].fontColor},children:r[e].description})]},e)}))})]})]}):Object(c.jsx)(g.a,{className:"justify-content-center mx-0 px-2",children:Object(c.jsx)("h4",{style:{color:"#950740",fontWeight:"lighter",fontSize:"15px",textAlign:"center"},children:"Hmm... Looks like there was an error fetching this section. Please try reloading the page."})})}),P=n(58),G=n(103),J=n(104),Q=(n(92),function(){return Object(c.jsx)(p.a,{fluid:!0,style:{backgroundColor:"#1A1A1D"},children:Object(c.jsxs)(g.a,{className:"justify-content-center mx-0",children:[Object(c.jsx)(w.a,{xs:12,lg:4,children:Object(c.jsxs)(g.a,{className:"justify-content-center align-items-center pt-3",children:[Object(c.jsx)(W.a,{onClick:function(){window.open("https://www.linkedin.com/in/amartya-mishra/")},style:{color:"#0072b1"},className:"fa-2x",icon:P.b}),"\xa0\xa0\xa0",Object(c.jsx)(G.a,{color:"white",size:31,onClick:function(){window.open("https://github.com/Gamezordd/")}}),"\xa0\xa0\xa0",Object(c.jsx)(W.a,{onClick:function(){window.open("https://www.instagram.com/mr.mishraa/")},style:{color:"#FFFFFF"},className:"fa-2x",icon:P.a})]})}),Object(c.jsx)(w.a,{xs:12,lg:8,children:Object(c.jsxs)(g.a,{className:"justify-content-center align-items-center pt-3",children:[Object(c.jsx)(J.a,{style:{color:"#ffffff70"},size:18}),"\xa0",Object(c.jsx)("span",{style:{color:"#ffffff70",fontSize:"1rem"},children:"Amartya Mishra"})]})})]})})}),q=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{}),Object(c.jsx)(R,{}),Object(c.jsx)(H,{}),Object(c.jsx)(Q,{})]})};n(93);var _=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(q,{})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),K()}},[[94,1,2]]]);
//# sourceMappingURL=main.d75d280a.chunk.js.map