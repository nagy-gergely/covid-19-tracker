(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},38:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),s=a(2),i=a(3),l=a.n(i),u=c.a.createContext();var m=function(e){var t=e.children,a=Object(n.useState)([]),r=Object(s.a)(a,2),o=r[0],i=r[1],m=Object(n.useState)("Hungary"),d=Object(s.a)(m,2),h=d[0],v=d[1];return Object(n.useEffect)((function(){l.a.get("https://covid19.mathdro.id/api/countries").then((function(e){if(e.data&&e.data.countries&&Array.isArray(e.data.countries)){var t=e.data.countries.map((function(e){return e.name}));i(t)}})).catch((function(e){console.error(e.message)}))}),[]),c.a.createElement(u.Provider,{value:{country:h,setCountry:v,availableCountreis:o}},t)};var d=function(){var e=Object(n.useContext)(u),t=e.country,a=e.setCountry,r=e.availableCountreis.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)}));return c.a.createElement("div",{className:"row mr-3"},c.a.createElement("select",{className:"custom-select",onChange:function(e){a(e.target.value)},value:t},r))};var h=function(){return c.a.createElement("nav",{className:"navbar navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("img",{src:"https://i.ibb.co/7QpKsCX/image.png",height:"30",className:"d-inline-block align-top",alt:""}),c.a.createElement("span",{className:"ml-3"},"Tracker")),c.a.createElement(d,null))};var v=function(){var e=Object(n.useState)(new Date(1970,1,1)),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){l.a.get("https://covid19.mathdro.id/api").then((function(e){e.data&&r(new Date(e.data.lastUpdate))})).catch((function(e){console.log(e.message)}))}),[]),c.a.createElement("div",{className:"col col-md-6 mt-3"},"Last Update: ",a.toLocaleString())};var f=function(){return c.a.createElement("div",{className:"col col-md-6 mt-3"},c.a.createElement("p",null,"Data: \xa0",c.a.createElement("a",{href:"https://covid19.mathdro.id/api"},"https://covid19.mathdro.id/api"),", \xa0",c.a.createElement("a",{href:"https://pomber.github.io/covid19/timeseries.json"},"https://pomber.github.io/covid19/timeseries.json")))};a(38);var E=function(e){var t=e.value,a=e.text,n=e.bgColorClass;return c.a.createElement("div",{className:"col col-lg-3 min-height-15 rounded "+n},c.a.createElement("div",{className:"row align-items-center justify-content-center  h-50"},c.a.createElement("div",{className:"h1 white-text"},t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))),c.a.createElement("div",{className:"row align-items-center justify-content-center h-50"},c.a.createElement("div",{className:"h5 white-text"},a)))};var p=function(e){var t=e.total,a=Object(n.useContext)(u).country,r=Object(n.useState)(0),o=Object(s.a)(r,2),i=o[0],m=o[1],d=Object(n.useState)(0),h=Object(s.a)(d,2),v=h[0],f=h[1],p=Object(n.useState)(0),b=Object(s.a)(p,2),g=b[0],C=b[1];return Object(n.useEffect)((function(){a&&!t?l.a.get("https://covid19.mathdro.id/api/countries/".concat(a,"/confirmed")).then((function(e){if(e.data&&Array.isArray(e.data)){var t=0,a=0,n=0;e.data.forEach((function(e){t+=e.confirmed,a+=e.recovered,n+=e.deaths})),m(t),f(a),C(n)}})).catch((function(e){console.error(e.message)})):l.a.get("https://covid19.mathdro.id/api").then((function(e){e.data&&(m(e.data.confirmed.value),f(e.data.recovered.value),C(e.data.deaths.value))})).catch((function(e){console.log(e.message)}))}),[a]),c.a.createElement("div",{className:"row justify-content-around mt-3"},c.a.createElement(E,{value:i,text:"Confirmed",bgColorClass:"bg-danger"}),c.a.createElement(E,{value:v,text:"Recovered",bgColorClass:"bg-success"}),c.a.createElement(E,{value:g,text:"Deaths",bgColorClass:"bg-dark"}))},b=a(4);var g=function(){var e=Object(n.useContext)(u).country,t=Object(n.useState)([["Date","Confirmed","Deaths"]]),a=Object(s.a)(t,2),r=a[0],o=a[1],i={title:"Total Confirmed Cases & Total Deaths in ".concat(e),curveType:"function",legend:{position:"top"}};return Object(n.useEffect)((function(){l.a.get("https://pomber.github.io/covid19/timeseries.json").then((function(t){if(t.data&&t.data[e]&&Array.isArray(t.data[e])){var a=[["Date","Confirmed","Deaths"]];t.data[e].forEach((function(e){var t=e.date,n=e.confirmed,c=e.deaths;a.push([t,n,c])})),o(a)}})).catch((function(e){console.error(e.message)}))}),[e]),c.a.createElement("div",{className:"row"},c.a.createElement(b.a,{chartType:"LineChart",width:"100%",height:"400px",data:r,options:i}))};var C=function(){var e=Object(n.useState)([["Date","Confirmed","Deaths"]]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){l.a.get("https://covid19.mathdro.id/api/daily").then((function(e){var t=[["Date","Confirmed","Deaths"]];e.data&&Array.isArray(e.data)&&(e.data.forEach((function(e){var a=e.reportDate,n=e.confirmed,c=e.deaths;t.push([a,n.total,c.total])})),r(t))})).catch((function(e){console.error(e.message)}))}),[]),c.a.createElement("div",{className:"row"},c.a.createElement(b.a,{chartType:"LineChart",width:"100%",height:"400px",data:a,options:{title:"Total Confirmed Cases & Total Deaths",curveType:"function",legend:{position:"top"}}}))};var j=function(){var e=Object(n.useContext)(u).country;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-6"},c.a.createElement("div",{className:"h3"},"Total Cases"),c.a.createElement(p,{total:!0}),c.a.createElement(C,null)),c.a.createElement("div",{className:"col-xl-6"},c.a.createElement("div",{className:"h3"},"Cases in ",e),c.a.createElement(p,null),c.a.createElement(g,null))),c.a.createElement("div",{className:"row"},c.a.createElement(v,null),c.a.createElement(f,null))))};a(42);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null,c.a.createElement(j,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ba6fe1f5.chunk.js.map