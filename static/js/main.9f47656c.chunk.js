(this.webpackJsonptour=this.webpackJsonptour||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(2),n=c.n(r),i=c(19),j=c.n(i),a=c(14),l=c.n(a),o=c(20),d=c(10),b=c(9),h=c(3),u=c(17),O=function(e){var t=e.id,c=e.name,n=e.image,i=e.info,j=e.price,a=e.removeTour,l=e.color,o=Object(r.useState)(!1),b=Object(d.a)(o,2),h=b[0],u=b[1];return Object(s.jsxs)("article",{className:l?"single-tour dark":"single-tour",children:[Object(s.jsx)("img",{src:n,alt:c}),Object(s.jsxs)("footer",{children:[Object(s.jsxs)("div",{className:"tour-info",children:[Object(s.jsx)("h4",{children:c}),Object(s.jsxs)("h4",{className:"tour-price",children:["$",j]})]}),Object(s.jsxs)("p",{children:[h?i:"".concat(i.substring(0,200)," . . . . "),Object(s.jsx)("button",{onClick:function(){return u(!h)},children:h?"show less":"read more"})]}),Object(s.jsx)("button",{className:l?"delete-btn dark":"delete-btn",onClick:function(){return a(t)},children:"don't like"})]})]})},x=function(e){var t=e.tours,c=e.removeTour,r=e.color;return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"title",children:[Object(s.jsxs)("h2",{children:["our tours [",t.length,"]"]}),Object(s.jsx)("div",{className:"underline"})]}),Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsx)(O,Object(u.a)(Object(u.a)({},e),{},{removeTour:c,color:r}),e.id)}))})]})},m=c(25),v=c(23),f=c(24),p=c(21),N=function(e){var t=e.color;return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h3",{className:"header-text",children:"Eisa rezaei"}),Object(s.jsxs)("div",{className:"header-icons",children:[Object(s.jsx)("h3",{children:Object(s.jsx)(p.a,{onClick:t})}),Object(s.jsx)("h3",{children:Object(s.jsx)(b.b,{to:"/bio",children:Object(s.jsx)(v.a,{})})}),Object(s.jsx)("h3",{children:Object(s.jsx)(b.b,{to:"/addtour",children:Object(s.jsx)(f.a,{})})}),Object(s.jsx)("h3",{children:Object(s.jsx)(b.b,{to:"/tours",children:Object(s.jsx)(m.a,{})})})]})]})},g=(c(37),function(){return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"is loading . . ."}),Object(s.jsx)("div",{className:"underline"})]}),Object(s.jsx)("article",{className:"single-tour-loading",children:Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"tour-info-loading",children:Object(s.jsx)("h4",{className:"tour-price-loading",children:"created by eisa rezaei"})})})})]})});var k=function(){return Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"This is my biography "}),Object(s.jsx)("div",{className:"underline"})]})})};var w=function(){return Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"this is my Home page "}),Object(s.jsx)("div",{className:"underline"})]})})};var y=function(){return Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"This is Addtour page "}),Object(s.jsx)("div",{className:"underline"})]})})};var T=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)([]),j=Object(d.a)(i,2),a=j[0],u=j[1],O=Object(r.useState)(!1),m=Object(d.a)(O,2),v=m[0],f=m[1],p=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n(!1),u(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n(!1),console.log("error in loading url");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()}),[]),c?Object(s.jsx)("main",{children:Object(s.jsx)(g,{tours:a})}):0===a.length?Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{children:"no more tours left"}),Object(s.jsx)("div",{className:"underline"}),Object(s.jsx)("button",{className:"btn",onClick:p,children:"Reveiw"})]})}):Object(s.jsx)(b.a,{children:Object(s.jsxs)("main",{className:v?"dark":"",children:[Object(s.jsx)(N,{color:function(){return f(!v)}}),Object(s.jsx)(h.a,{path:"/",exact:!0,children:Object(s.jsx)(w,{})}),Object(s.jsx)(h.a,{path:"/tours",children:Object(s.jsx)(x,{tours:a,removeTour:function(e){var t=a.filter((function(t){return t.id!==e}));u(t)},color:v})}),Object(s.jsx)(h.a,{path:"/Bio",children:Object(s.jsx)(k,{})}),Object(s.jsx)(h.a,{path:"/addtour",children:Object(s.jsx)(y,{})})]})})};j.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9f47656c.chunk.js.map