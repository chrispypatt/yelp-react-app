(this["webpackJsonpyelp-app"]=this["webpackJsonpyelp-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(18),a=n.n(r),i=(n(30),n(31),n(10)),u=n.n(i),o=n(13),j=n(9),b=(n(33),n(71)),l="https://5igtrm1xeh.execute-api.us-east-1.amazonaws.com/dev",h="/businesses/search?",f=n(34);function p(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET"},e.next=3,fetch(l+h+f.stringify({location:t}),n).then((function(e){return e.json()})).catch((function(e){throw console.log(e),e}));case 3:return s=e.sent,e.abrupt("return",JSON.parse(s.body));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(37);var d=n(46),O=n(72),m=n(2);function g(e){var t=Object(s.useState)(e.defaultText),n=Object(j.a)(t,2),c=n[0],r=n[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.a,{className:"search-bar",children:Object(m.jsx)(O.a,{inputProps:{style:{textAlign:"center"}},placeholder:"Search for businesses",defaultValue:e.defaultText,onChange:function(e){r(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.onSubmit(c)}})})})}n(43);var v=n(66),y=(n(44),n(67)),S=n(69),N=n(68),w=n(70);function F(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{item:!0,xs:12,sm:8,md:6,lg:3,xl:2,children:Object(m.jsxs)(y.a,{className:"cell",children:[Object(m.jsx)(N.a,{className:"image",image:e.business.image_url,title:e.business.name}),Object(m.jsxs)(S.a,{className:"info",children:[Object(m.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.business.name}),Object(m.jsxs)(w.a,{variant:"body2",color:"textSecondary",component:"p",children:["Price - ",e.business.price,Object(m.jsx)("br",{}),e.business.rating,"/5"]})]})]})})})}function k(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{container:!0,className:"grid",spacing:3,xs:12,children:e.businesses.map((function(e){return Object(m.jsx)(F,{business:e})}))})})}var T="Minneapolis, MN";function C(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(j.a)(r,2),i=(a[0],a[1]),l=Object(s.useState)(!0),h=Object(j.a)(l,2),f=h[0],x=h[1],d=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,p(t);case 4:n=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),i(!0),x(!1),e.abrupt("return");case 12:x(!1),c(n.businesses);case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){d(T)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{children:"Search Businesses or Cities"}),Object(m.jsx)(g,{defaultText:T,onSubmit:function(e){d(e)}})]}),Object(m.jsx)("div",{className:"spacer"}),Object(m.jsx)("br",{}),f&&Object(m.jsx)(b.a,{}),!f&&(n?Object(m.jsx)(k,{businesses:n}):Object(m.jsx)("h1",{children:"Sorry, no businesses found"}))]})}var P=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(C,{})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),B()}},[[45,1,2]]]);
//# sourceMappingURL=main.6061ae2c.chunk.js.map