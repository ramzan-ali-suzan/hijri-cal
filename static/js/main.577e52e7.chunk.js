(this["webpackJsonphijri-cal"]=this["webpackJsonphijri-cal"]||[]).push([[0],{12:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(6),i=a.n(r),s=(a(11),a(12),a(4)),o=a(2),j=a.n(o),l=a(0),d=function(e){var t=e.showGDate,a=e.onGDateChange,c=e.dateAdjust,n=e.onDateAjdust;return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"app-title",children:"\ud83c\udf19 Hijri Calendar"}),Object(l.jsxs)("div",{className:"control-container",children:[Object(l.jsx)("div",{className:"g-date-control",children:Object(l.jsxs)("label",{className:"g-date-label",children:["Gregorian Date:",Object(l.jsx)("input",{name:"gregorianDate",type:"checkbox",checked:t,onChange:a})]})}),Object(l.jsxs)("div",{className:"date-adjust-control",children:[Object(l.jsx)("label",{htmlFor:"date-adjust-select",children:"Adjust Date: "}),Object(l.jsxs)("select",{name:"date-adjust",id:"date-adjust-select",value:c,onChange:function(e){return n(e)},children:[Object(l.jsx)("option",{value:"0",children:"0"}),Object(l.jsx)("option",{value:"+1",children:"+1"}),Object(l.jsx)("option",{value:"-1",children:"-1"})]})]})]})]})})},u=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("a",{href:"https://productivemuslim.com/the-islamic-calendar-letsgohijri",target:"blank",children:"Why Hijri Calendar"})})})},h=a(20),b=a(21),m=function(e){var t=e.hijriYear,a=e.hijriMonth,c=e.hijriMonthName,n=e.onPreviousClick,r=e.onTodayClick,i=e.onNextClick;return Object(l.jsxs)("div",{className:"calendar-title",children:[Object(l.jsxs)("h2",{className:"text-center",children:[a,". ",c,", ",t]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"btn mr-2 warning",onClick:r,children:"Today"}),Object(l.jsx)("button",{className:"btn mr-1 success","aria-label":"Previous Month",onClick:n,children:Object(l.jsx)(h.a,{color:"#fff"})}),Object(l.jsx)("button",{className:"btn success","aria-label":"Next Month",onClick:i,children:Object(l.jsx)(b.a,{color:"#fff"})})]})]})},O=function(e){return Number(j()("".concat(e),"YYYY").format("iYYYY"))},x=function(e,t,a){return Number(j()("".concat(e,"/").concat(t,"/").concat(a),"YYYY/M/D").format("iM"))},f=function(e){return j()().add(Number(e),"days").format("iYYYY/iM/iD")},Y=function(e,t){return j()("".concat(e,"/").concat(t,"/1"),"iYYYY/iM/iD").day()},v=function(e,t,a,c){return j()("".concat(e,"/").concat(t,"/").concat(a),"iYYYY/iM/iD").add(-Number(c),"days").format("D-MMM-YYYY")},N=function(e){var t,a,c=e.showGDate,n=e.hijriYear,r=e.hijriMonth,i=e.hijriDate,s=e.dateAdjust,o=Array.from({length:Y(n,r)+-Number(s)===7?0:Y(n,r)+-Number(s)},(function(e,t){return t})),d=Array.from({length:(t=n,a=r,j()("".concat(t,"/").concat(a,"/30"),"iYYYY/iM/iD").isValid()?30:29)},(function(e,t){return t+1}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"calendar-grid-header",children:["Al 'Ahad","Al 'Ithnayn","Ath Thulathaa'","Al Arbi'aa'","Al Khamees","Al Juma'a","As Sabt"].map((function(e,t){return Object(l.jsx)("div",{className:"calendar-grid-item",children:e},t)}))}),Object(l.jsxs)("div",{className:"calendar-grid",children:[o.map((function(e,t){return Object(l.jsx)("div",{className:"calendar-grid-item"},t)})),d.map((function(e,t){return Object(l.jsxs)("div",{className:"calendar-grid-item ".concat((a=e,"".concat(n,"/").concat(r,"/").concat(a)===i?"today":"")),children:[Object(l.jsx)("span",{children:e}),c&&Object(l.jsx)("span",{className:"g-date",children:v(n,r,e,s)})]},t);var a}))]})]})},g=function(e){var t=e.showGDate,a=e.dateAdjust,n=new Date,r=n.getFullYear(),i=n.getMonth()+1,o=n.getDate(),d=Object(c.useState)(O(r)),u=Object(s.a)(d,2),h=u[0],b=u[1],Y=Object(c.useState)(x(r,i,o)),v=Object(s.a)(Y,2),g=v[0],M=v[1],D=Object(c.useState)(f(a)),p=Object(s.a)(D,2),A=p[0],C=p[1],k=Object(c.useState)(function(e,t,a){return j()("".concat(e,"/").concat(t,"/").concat(a),"YYYY/M/D").format("iMMMM")}(r,i,o)),y=Object(s.a)(k,2),w=y[0],S=y[1];return Object(c.useEffect)((function(){C(f(a)),S(function(e,t){return j()("".concat(e,"/").concat(t),"iYYYY/iM").format("iMMMM")}(h,g))}),[a,h,g]),Object(l.jsxs)("div",{className:"container calendar",children:[Object(l.jsx)(m,{hijriYear:h,hijriMonth:g,hijriMonthName:w,onPreviousClick:function(){g>1?M(g-1):(b(h-1),M(12))},onTodayClick:function(){b(O(r)),M(x(r,i,o))},onNextClick:function(){g<12?M(g+1):(b(h+1),M(1))}}),Object(l.jsx)(N,{showGDate:t,hijriYear:h,hijriMonth:g,hijriDate:A,dateAdjust:a})]})},M=function(){j.a.locale("en");var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(localStorage.getItem("date-adjust")||""),i=Object(s.a)(r,2),o=i[0],h=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"content-wrap",children:[Object(l.jsx)(d,{showGDate:a,onGDateChange:function(){n(!a)},dateAdjust:o,onDateAjdust:function(e){var t=e.target.value;h(t),localStorage.setItem("date-adjust",t)}}),Object(l.jsx)(g,{showGDate:a,dateAdjust:o})]}),Object(l.jsx)(u,{})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.577e52e7.chunk.js.map