(this["webpackJsonphijri-cal"]=this["webpackJsonphijri-cal"]||[]).push([[0],{12:function(t,c,e){},18:function(t,c,e){"use strict";e.r(c);var n=e(1),a=e.n(n),i=e(6),r=e.n(i),s=(e(11),e(12),e(0)),o=function(){return Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("h1",{className:"app-title",children:"\ud83c\udf19 Hijri Calendar"})})})},j=function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("a",{href:"https://productivemuslim.com/the-islamic-calendar-letsgohijri",target:"blank",children:"Why Hijri Calendar"})})})},l=e(4),d=e(20),h=e(21),u=function(t){var c=t.hijriYear,e=t.hijriMonth,n=t.hijriMonthName,a=t.onPreviousClick,i=t.onTodayClick,r=t.onNextClick;return Object(s.jsxs)("div",{className:"calendar-title",children:[Object(s.jsxs)("h2",{className:"text-center",children:[e,". ",n,", ",c]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"btn mr-2 warning",onClick:i,children:"Today"}),Object(s.jsx)("button",{className:"btn mr-1 success",onClick:a,children:Object(s.jsx)(d.a,{color:"#fff"})}),Object(s.jsx)("button",{className:"btn success",onClick:r,children:Object(s.jsx)(h.a,{color:"#fff"})})]})]})},b=e(3),m=e.n(b),f=function(t){return Number(m()("".concat(t),"YYYY").format("iYYYY"))},O=function(t,c,e){return Number(m()("".concat(t,"/").concat(c,"/").concat(e),"YYYY/M/D").format("iM"))},Y=function(t,c){return m()("".concat(t,"/").concat(c,"/30"),"iYYYY/iM/iD").isValid()?30:29},x=function(t){var c,e,n=t.hijriYear,a=t.hijriMonth,i=t.hijriDate,r=Array.from({length:(c=n,e=a,m()("".concat(c,"/").concat(e,"/1"),"iYYYY/iM/iD").day())},(function(t,c){return c})),o=Array.from({length:Y(n,a)},(function(t,c){return c+1}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"calendar-grid-header",children:["Al 'Ahad","Al 'Ithnayn","Ath Thulathaa'","Al Arbi'aa'","Al Khamees","Al Juma'a","As Sabt"].map((function(t,c){return Object(s.jsx)("div",{className:"calendar-grid-item",children:t},c)}))}),Object(s.jsxs)("div",{className:"calendar-grid",children:[r.map((function(t,c){return Object(s.jsx)("div",{className:"calendar-grid-item"},c)})),o.map((function(t,c){return Object(s.jsx)("div",{className:"calendar-grid-item ".concat((e=t,"".concat(n,"/").concat(a,"/").concat(e)===i?"today":"")),children:t},c);var e}))]})]})},M=function(){var t=new Date,c=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),i=Object(n.useState)(f(c)),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)(O(c,e,a)),h=Object(l.a)(d,2),b=h[0],Y=h[1],M=Object(n.useState)(m()().format("iYYYY/iM/iD")),v=Object(l.a)(M,2),N=v[0],g=(v[1],Object(n.useState)(function(t,c,e){return m()("".concat(t,"/").concat(c,"/").concat(e),"YYYY/M/D").format("iMMMM")}(c,e,a))),p=Object(l.a)(g,2),k=p[0],A=p[1];return Object(n.useEffect)((function(){A(function(t,c){return m()("".concat(t,"/").concat(c),"iYYYY/iM").format("iMMMM")}(o,b))}),[b,o]),Object(s.jsxs)("div",{className:"container calendar",children:[Object(s.jsx)(u,{hijriYear:o,hijriMonth:b,hijriMonthName:k,onPreviousClick:function(){b>1?Y(b-1):(j(o-1),Y(12))},onTodayClick:function(){j(f(c)),Y(O(c,e,a))},onNextClick:function(){b<12?Y(b+1):(j(o+1),Y(1))}}),Object(s.jsx)(x,{hijriYear:o,hijriMonth:b,hijriDate:N})]})},v=function(){return m.a.locale("en"),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"content-wrap",children:[Object(s.jsx)(o,{}),Object(s.jsx)(M,{})]}),Object(s.jsx)(j,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.066e6ba2.chunk.js.map