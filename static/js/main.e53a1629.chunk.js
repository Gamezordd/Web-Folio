(this["webpackJsonpweb-folio"]=this["webpackJsonpweb-folio"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(2),s=n.n(a),i=n(26),r=n.n(i),o=(n(86),n(87),n(16)),l=n.n(o),j=n(27),d=n(17),u=n(141),b=n(138),h="6LeYp_gZAAAAAIllwi00dLJEi_CKq4KXKUMocSBm",f=(n(89),function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{className:"justify-content-between",sticky:"top",style:{backgroundColor:"#1A1A1D"},children:[Object(c.jsx)(u.a.Brand,{children:Object(c.jsx)("div",{style:{color:"#C3073F"},children:"Amartya Mishra"})}),Object(c.jsxs)(b.a,{alignRight:!0,id:"menu-btn",title:"Menu",children:[Object(c.jsx)(b.a.Item,{onClick:function(){e.CVlink&&window.open(e.CVlink)},children:"View Resume"}),Object(c.jsx)(b.a.Divider,{style:{backgroundColor:"#00000030"}}),Object(c.jsx)("p",{className:"ver-num px-4",children:"v0.2.0"})]})]})})}),m=n(135),x=n(134),O=n(73),p=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};p.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span className="wrap">'+this.txt+"</span>";var n=this,c=200-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){n.tick()}),c)},window.onload=function(){var e=document.getElementById("typewrite");if(e){var t=e.getAttribute("data-type"),n=e.getAttribute("data-period");t&&new p(e,JSON.parse(t),n);var c=document.createElement("style");c.type="text/css",c.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(c)}};n(93),n(94);var g=n(63);g.a.initializeApp({apiKey:"AIzaSyD97-JqjKLSLR4tVg1W3MZTG94JgsZl5kg",authDomain:"web-folio-d329b.firebaseapp.com",databaseURL:"https://web-folio-d329b.firebaseio.com",projectId:"web-folio-d329b",storageBucket:"web-folio-d329b.appspot.com",messagingSenderId:"527366819681",appId:"1:527366819681:web:ee7a55a31e5cdd02da3f20",measurementId:"G-RFDYLG4T17"});var v=g.a.database(),y={fetchExp:function(){return v.ref("expdata/").once("value")},fetchEdu:function(){return v.ref("edudata/").once("value")},attachHitsWatcher:function(){return v.ref("hits/")},hiAction:function(){return Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.ref("hits/").once("value");case 2:return t=e.sent,n=t.val(),n++,v.ref("hits/").set(n),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()},fetchCV:function(){return v.ref("CVlink/").once("value")},incrementUserCount:function(){return Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.ref("visits/").once("value");case 2:return t=e.sent,e.next=5,v.ref("visits/").set(t.val()+1);case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})))()}},w=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){var e=(new Date).getTime(),t=localStorage.getItem("timeofwave");t&&e-parseInt(t)>864e5&&localStorage.setItem("waved","0"),"1"===localStorage.getItem("waved")&&i(!0)}),[]),s?Object(c.jsx)("div",{className:"conf-text",children:"Cheers!"}):Object(c.jsx)("div",{onClick:function(e){e.preventDefault(),function(){y.hiAction(),localStorage.setItem("waved","1");var e=(new Date).getTime();localStorage.setItem("timeofwave",e.toString()),i(!0)}()},className:"btn-container",children:Object(c.jsx)("a",{href:"#",className:"transparent cont-2",children:Object(c.jsxs)("p",{className:"the-p",children:[Object(c.jsx)("span",{className:"bgbg"}),Object(c.jsx)("span",{className:"base"}),Object(c.jsx)("span",{className:"text",children:e.text})]})})})},k=n(74),C=n(133),N=function(e){var t=Object(a.useState)(!0),n=Object(d.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(0),o=Object(d.a)(r,2),l=o[0],j=o[1],u=Object(a.useRef)(null);return Object(a.useEffect)((function(){u.current=y.attachHitsWatcher(),u.current.on("value",(function(e){j(e.val()),i(!1)}))}),[]),s?Object(c.jsx)("div",{className:e.class,children:Object(c.jsx)(C.a,{variant:"light",animation:"grow"})}):Object(c.jsx)("div",{className:e.class,children:l})},S=(n(99),function(){return Object(c.jsxs)(x.a,{children:[Object(c.jsx)(O.a,{xs:12,md:"auto",children:Object(c.jsx)(x.a,{className:"valbtn-cont mb-3 justify-content-center justify-content-md-start",children:Object(c.jsx)(w,{text:"say hi \ud83d\udc4b"})})}),Object(c.jsx)(O.a,{xs:12,md:"auto",className:"align-self-center",children:Object(c.jsxs)(x.a,{className:"align-items-center mb-3 mx-4 justify-content-center justify-content-md-start",children:[Object(c.jsx)(N,{class:"hi-counter"}),"\xa0\xa0\xa0",Object(c.jsx)(k.a,{color:"white",size:40})]})})]})}),A=function(){return Object(c.jsx)(m.a,{fluid:!0,style:{backgroundColor:"#111112"},children:Object(c.jsxs)(x.a,{className:"mx-0",children:[Object(c.jsxs)(O.a,{xs:12,md:9,children:[Object(c.jsx)(x.a,{className:"".concat(window.innerWidth>801?"pl-5 pr-2":""),children:Object(c.jsx)("h1",{style:{height:"5.4rem",color:"#C3073F"},children:Object(c.jsx)("div",{id:"typewrite","data-period":"2000","data-type":'[ "Hi, I Am Amartya.", "I Am A Software Developer.", "I Am A Fitness Enthusiast.", "I Like Solving Problems.","I Like Building Things."]',children:Object(c.jsx)("span",{className:"wrap"})})})}),Object(c.jsx)(x.a,{className:"pt-5 ".concat(window.innerWidth>801?"px-3 pl-5":""),children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x.a,{children:Object(c.jsxs)("p",{style:{color:"white",fontWeight:"lighter",fontSize:"1.3rem",paddingTop:"1rem",paddingBottom:"1rem"},children:["Hi, I am a Software Developer with love for all of technology specializing in Frontend and Backend development. Please scroll down to learn more about me or use the tab to the bottom right to shoot me a message.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," Hope you have a nice day!"]})}),Object(c.jsx)(S,{})]})})]}),Object(c.jsxs)(O.a,{xs:12,md:3,children:[Object(c.jsx)("div",{className:"image-wrapper"}),Object(c.jsx)(x.a,{style:{height:"100%"},className:"justify-content-center align-items-center",children:Object(c.jsx)("img",{className:"header-image",src:"https://firebasestorage.googleapis.com/v0/b/web-folio-d329b.appspot.com/o/linkedin_profile.jpeg?alt=media&token=bafafc3b-20b7-4d2b-b98b-fa5962ee6a53",alt:"profileimg"})}),Object(c.jsx)("div",{className:"image-wrapper"})]})]})})},I=n(72),E=n(47),T=(n(103),n(43)),D=n(59),M=(n(106),function(e){var t=Object(a.useState)(void 0),n=Object(d.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(void 0),o=Object(d.a)(r,2),u=o[0],b=o[1],h=Object(a.useState)(!0),f=Object(d.a)(h,2),m=f[0],p=f[1],g=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.fetchExp();case 2:return t=e.sent,i(t.val()),e.next=6,y.fetchEdu();case 6:return t=e.sent,b(t.val()),p(!1),e.abrupt("return");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){g()}),[]);return m?Object(c.jsxs)(x.a,{style:{height:"20rem"},className:"justify-content-center align-items-center",children:[Object(c.jsx)("p",{className:"pf-loading-text",children:"Loading"})," ",Object(c.jsx)(C.a,{animation:"grow",variant:"light"})]}):s?Object(c.jsxs)("div",{children:[Object(c.jsxs)(x.a,{className:"justify-content-around mx-0",children:[Object(c.jsxs)(O.a,{xs:10,lg:4,children:[Object(c.jsx)("h3",{style:{color:"#ffffff",paddingTop:"30px"},children:"Experience"}),Object(c.jsx)(E.VerticalTimeline,{layout:"1-column",children:Object.keys(s).map((function(e){var t;return Object(c.jsxs)(E.VerticalTimelineElement,{contentStyle:{background:"".concat(s[e].color),color:"".concat(s[e].fontColor)},contentArrowStyle:{borderRight:"7px solid  ".concat(s[e].color)},date:s[e].date,iconStyle:{background:"".concat(s[e].color),color:"".concat(s[e].fontColor)},icon:Object(c.jsx)(T.a,{className:"timeline-icon-fine-exp",icon:D.a}),onTimelineElementClick:function(){var t;(null===(t=s[e])||void 0===t?void 0:t.link)&&window.open("".concat(s[e].link))},children:[(null===(t=s[e])||void 0===t?void 0:t.link)?Object(c.jsx)("a",{href:"#",className:"exp-link",children:Object(c.jsx)("h6",{children:e})}):Object(c.jsx)("h6",{children:e}),Object(c.jsx)("p",{style:{fontSize:"0.8rem",color:s[e].fontColor},children:s[e].description})]},e)}))})]}),Object(c.jsxs)(O.a,{xs:10,lg:4,children:[Object(c.jsx)("h3",{style:{color:"#ffffff",paddingTop:"30px"},children:"Projects"}),Object(c.jsx)(E.VerticalTimeline,{layout:"1-column",children:Object.keys(u).map((function(e){var t;return Object(c.jsxs)(E.VerticalTimelineElement,{contentStyle:{background:"".concat(u[e].color),color:"".concat(u[e].fontColor)},contentArrowStyle:{borderRight:"7px solid  ".concat(u[e].color)},date:u[e].date,iconStyle:{background:"".concat(u[e].color),color:"".concat(u[e].fontColor)},icon:Object(c.jsx)(T.a,{className:"timeline-icon-fine-pro",icon:D.a}),onTimelineElementClick:function(){var t;(null===(t=u[e])||void 0===t?void 0:t.link)&&window.open("".concat(u[e].link))},children:[(null===(t=u[e])||void 0===t?void 0:t.link)?Object(c.jsx)("a",{className:"exp-link",href:"#",children:Object(c.jsx)("h6",{children:e})}):Object(c.jsx)("h6",{children:e}),Object(c.jsx)("p",{style:{fontSize:"0.8rem",color:u[e].fontColor},children:u[e].description})]},e)}))})]})]}),Object(c.jsx)(x.a,{className:"justify-content-center align-items-center p-4 mx-0",children:Object(c.jsx)(I.a,{onClick:function(){e.CVlink&&window.open(e.CVlink)},className:"okbtn",style:{backgroundColor:"#950740",borderColor:"#950740"},children:"Download CV"})})]}):Object(c.jsx)(x.a,{className:"justify-content-center mx-0 px-2",children:Object(c.jsx)("h4",{style:{color:"#950740",fontWeight:"lighter",fontSize:"15px",textAlign:"center"},children:"Hmm... Looks like there was an error fetching this section. Please try reloading the page."})})}),B=n(60),F=n(136),L=(n(107),function(){return Object(c.jsx)(m.a,{fluid:!0,style:{backgroundColor:"#1A1A1D"},children:Object(c.jsxs)(x.a,{className:"justify-content-center mx-0",children:[Object(c.jsx)(O.a,{xs:12,lg:6,children:Object(c.jsxs)(x.a,{className:"justify-content-center align-items-center pt-3",children:[Object(c.jsx)(T.a,{onClick:function(){window.open("https://www.linkedin.com/in/amartya-mishra/")},style:{color:"#0072b1"},className:"fa-2x",icon:B.b}),"\xa0\xa0\xa0",Object(c.jsx)(F.a,{color:"white",size:31,onClick:function(){window.open("https://github.com/Gamezordd/")}}),"\xa0\xa0\xa0",Object(c.jsx)(T.a,{onClick:function(){window.open("https://www.instagram.com/mr.mishraa/")},style:{color:"#FFFFFF"},className:"fa-2x",icon:B.a})]})}),Object(c.jsx)(O.a,{xs:12,lg:6,children:Object(c.jsx)(x.a,{className:"justify-content-center align-items-center pt-3",children:Object(c.jsxs)("span",{style:{color:"#ffffff70",fontSize:"1rem",maxWidth:"70%",textAlign:"center"},children:["Made with ",Object(c.jsx)("strong",{style:{color:"red"},children:"\u2764 "}),"by Amartya Mishra"]})})})]})})}),V=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),s=n[0],i=n[1],r=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.fetchCV();case 2:t=e.sent,i(t.val());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.incrementUserCount();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r(),o()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{CVlink:s}),Object(c.jsx)(A,{}),Object(c.jsx)(M,{CVlink:s}),Object(c.jsx)(L,{})]})},R=n(25),z=n(137),H=n(61),W=n.n(H),P=n(62),G=n(75),J=n.n(G),K=n(139),U=n(77),_=n(140),Z=n(78),q=n(79),Y=n(76),X=n.n(Y),Q=(n(125),n(55)),$={contactModal:!1,success:!1,buttonDisable:!0},ee=function(){var e,t=Object(a.useState)($),n=Object(d.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(!1),o=Object(d.a)(r,2),u=o[0],b=o[1],f=Object(a.useState)(!1),m=Object(d.a)(f,2),p=m[0],g=m[1];Object(a.useEffect)((function(){Object(P.loadReCaptcha)(h)}),[]);return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("div",{onClick:function(){return i(Object(R.a)(Object(R.a)({},s),{},{contactModal:!0}))},className:"rect-big",children:Object(c.jsxs)(x.a,{style:{height:"100%"},className:"align-items-center mx-0 px-1",children:[Object(c.jsx)(O.a,{xs:"5",children:Object(c.jsx)(x.a,{style:{height:"100%"},className:"justify-content-center align-items-center",children:Object(c.jsx)(z.a,{className:"cont-icn",size:40})})}),Object(c.jsx)(O.a,{xs:"7",children:Object(c.jsx)(x.a,{style:{height:"100%"},className:"cont-text",children:"Email Me!"})}),Object(c.jsx)(O.a,{})]})}),function(){var t=function(){var e,t,n,c=null===(e=document.getElementById("contact"))||void 0===e?void 0:e.value,a=null===(t=document.getElementById("subject"))||void 0===t?void 0:t.value,s=null===(n=document.getElementById("messageBody"))||void 0===n?void 0:n.value;return""!==c&&""!==a&&""!==s},n=function(){var e=Object(j.a)(l.a.mark((function e(n){var c,a,r,o,j,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t()&&n){e.next=3;break}return e.abrupt("return");case 3:return o=null===(c=document.getElementById("contact"))||void 0===c?void 0:c.value,j=null===(a=document.getElementById("subject"))||void 0===a?void 0:a.value,d=null===(r=document.getElementById("messageBody"))||void 0===r?void 0:r.value,e.next=8,J.a.post("https://us-central1-web-folio-d329b.cloudfunctions.net/verify_reCAPTCHA",{token:n,contact:o,subject:j,message:d});case 8:if(!e.sent.data.success){e.next=14;break}i(Object(R.a)(Object(R.a)({},s),{},{contactModal:!1})),W.a.fire("Message Sent","Thank you for getting in touch, I will get back ASAP.","success"),e.next=15;break;case 14:throw new Error("Invalid Response from Google.");case 15:return g(!1),e.abrupt("return");case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),g(!1),W.a.fire("Error","That's unusual, please try again.","error");case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),a=X.a.debounce((function(){t()?i(Object(R.a)(Object(R.a)({},s),{},{buttonDisable:!1})):i(Object(R.a)(Object(R.a)({},s),{},{buttonDisable:!0}))}),1e3);return Object(c.jsxs)(K.a,{show:s.contactModal,onHide:function(){i($)},children:[Object(c.jsx)(Q.a,{className:"pl-3 pt-2 pb-0",children:Object(c.jsx)("h5",{children:"Get In Touch"})}),Object(c.jsx)(U.a,{children:Object(c.jsxs)(_.a,{children:[Object(c.jsxs)(Z.a,{children:[Object(c.jsxs)(q.a,{children:["Email Address / Phone Number",Object(c.jsx)("span",{color:"red",children:"*"})]}),Object(c.jsx)(_.a.Control,{onChange:function(){return a()},id:"contact",type:"email",placeholder:"Where to get back"})]}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(q.a,{children:"Subject"}),Object(c.jsx)(_.a.Control,{onChange:function(){return a()},id:"subject",placeholder:"What is this about?"})]}),Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(q.a,{children:"Message: "}),Object(c.jsx)(_.a.Control,{onChange:function(){return a()},id:"messageBody",as:"textarea",rows:8})]}),Object(c.jsx)(Z.a,{children:Object(c.jsx)(P.ReCaptcha,{sitekey:h,action:"Message",verifyCallback:function(e){return n(e)},ref:function(t){return e=t}})}),Object(c.jsx)(Z.a,{children:Object(c.jsxs)(q.a,{children:[" ",u?p?null:Object(c.jsx)("p",{color:"danger",children:"An error has occured. Did you fill all the fields?"}):Object(c.jsxs)("p",{children:["All fields are mandatory. ",window.innerWidth>801?"":"Secured by ReCAPTCHA."]})," "]})}),Object(c.jsx)(Z.a,{children:Object(c.jsxs)(x.a,{className:"align-items-center justify-content-start px-3",children:[Object(c.jsx)(I.a,{disabled:s.buttonDisable,onClick:function(){t()?(b(!1),e&&(g(!0),e.execute())):b(!0)},className:"okbtn2",children:"Send"}),Object(c.jsx)("a",{onClick:function(){return i(Object(R.a)(Object(R.a)({},s),{},{contactModal:!1}))},href:"#",className:"mr-3",children:"Cancel"}),p?Object(c.jsx)(C.a,{style:{color:"#C3073F"},animation:"border"}):null]})})]})})]})}()]})};n(127);var te=function(){return Object(a.useEffect)((function(){var e=document.getElementById("loader-main");e&&(e.classList.add("cont-available"),setTimeout((function(){e.outerHTML=""}),2e3))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(V,{}),Object(c.jsx)(ee,{})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(te,{})}),document.getElementById("root")),ne()},86:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},99:function(e,t,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.e53a1629.chunk.js.map