(()=>{"use strict";var e,t={269:(e,t,n)=>{var r=n(540),a=n(961),c=n(625),l=n(347),u=n(902),s=n(467),o=n(848),i=n(296),m=n(756),p=n.n(m);const d=function(){return r.createElement("div",{className:"lds__ring"},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))};var f=n(29),v=n(901),E=n(266),h=function(){return(0,v.A)((function e(){(0,f.A)(this,e)}),null,[{key:"getAllUsers",value:(n=(0,o.A)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.A.get("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"getUserPosts",value:(t=(0,o.A)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.A.get("https://jsonplaceholder.typicode.com/posts?userId="+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"getUserAlbums",value:(e=(0,o.A)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.A.get("https://jsonplaceholder.typicode.com/albums?userId="+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})}]);var e,t,n}(),g=function(e){var t=(0,r.useState)(!1),n=(0,i.A)(t,2),a=n[0],c=n[1],l=(0,r.useState)(""),u=(0,i.A)(l,2),s=u[0],m=u[1],d=function(){var t=(0,o.A)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),m(t.t0.message);case 9:return t.prev=9,c(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[d,a,s]},b=n(458);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,s.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=(0,r.useState)([]),t=(0,i.A)(e,2),n=t[0],a=t[1],l=(0,r.useState)({sort:"",query:""}),s=(0,i.A)(l,2),m=s[0],f=s[1],v=g((0,o.A)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAllUsers();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))),E=(0,i.A)(v,3),y=E[0],A=E[1],O=E[2];(0,r.useEffect)((function(){y()}),[]);var x=function(e,t,n){var a=function(e,t){return(0,r.useMemo)((function(){return"asc"===t?(0,b.A)(e).sort((function(e,t){return e.username.localeCompare(t.username)})):"desc"===t?(0,b.A)(e).sort((function(e,t){return t.username.localeCompare(e.username)})):e}),[t,e])}(e,t);return(0,r.useMemo)((function(){return a.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}))}),[n,a])}(n,m.sort,m.query);return r.createElement("div",null,r.createElement(u.mg,null,r.createElement("title",null,"users seo title!"),r.createElement("meta",{name:"description",content:"users seo description"})),r.createElement("label",{htmlFor:"search"},"Поиск"),r.createElement("input",{type:"text",id:"search",value:m.query,onChange:function(e){return f(w(w({},m),{},{query:e.target.value}))},placeholder:"Поиск..."}),r.createElement("select",{value:m.sort,onChange:function(e){return f(w(w({},m),{},{sort:e.target.value}))}},r.createElement("option",{disabled:!0,value:""},"Соритировка по"),[{value:"asc",name:"По возрастанию"},{value:"desc",name:"По убыванию"}].map((function(e){return r.createElement("option",{key:e.value,value:e.value},e.name)}))),O&&r.createElement("h1",null,"Произошла ошибка!"),A?r.createElement("div",null,r.createElement(d,null)):r.createElement("div",null,r.createElement("h1",{style:{textAlign:"center"}},"Список пользователей"),x.map((function(e){return r.createElement("div",{className:"post"},r.createElement("div",{className:"post__content"},r.createElement("strong",null,e.id,". ",e.name),r.createElement("div",null,"Username is: ",r.createElement("b",null,e.username))),r.createElement("div",{className:"post__btn"},r.createElement(c.k2,{to:"/user/post/".concat(e.id),exact:!0},"Открыть список постов"),r.createElement("br",null),r.createElement(c.k2,{to:"/user/albums/".concat(e.id),exact:!0},"Открыть список альбомов")))}))))},O=n(915),x=function(){var e=(0,O.g)().id,t=(0,r.useState)([]),n=(0,i.A)(t,2),a=n[0],c=n[1],l=g((0,o.A)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getUserPosts(e);case 2:n=t.sent,c(n.data);case 4:case"end":return t.stop()}}),t)})))),s=(0,i.A)(l,3),m=s[0],f=s[1],v=s[2];return(0,r.useEffect)((function(){m()}),[]),r.createElement("div",{className:"ui-post"},r.createElement(u.mg,null,r.createElement("title",null,"Post seo title!"),r.createElement("meta",{name:"description",content:"Post seo description"})),v&&r.createElement("h1",null,"Произошла ошибка!"),r.createElement("div",null,r.createElement("h1",null,"Вы открыли страницу постов пользователя с ID ",e),f?r.createElement(d,null):r.createElement("div",null,a.map((function(e){return r.createElement("div",{className:"post"},r.createElement("div",{className:"post__content"},r.createElement("strong",null,e.id,". ",e.title),r.createElement("div",null,e.body)))})))))},_=function(){var e=(0,O.g)().id,t=(0,r.useState)([]),n=(0,i.A)(t,2),a=n[0],c=n[1],l=g((0,o.A)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getUserAlbums(e);case 2:n=t.sent,c(n.data);case 4:case"end":return t.stop()}}),t)})))),s=(0,i.A)(l,3),m=s[0],f=s[1],v=s[2];return(0,r.useEffect)((function(){m()}),[]),r.createElement("div",{className:"ui-post"},r.createElement(u.mg,null,r.createElement("title",null,"Post seo title!"),r.createElement("meta",{name:"description",content:"Post seo description"})),v&&r.createElement("h1",null,"Произошла ошибка!"),r.createElement("div",null,r.createElement("h1",null,"Вы открыли страницу альбомов пользователя с ID ",e),f?r.createElement(d,null):r.createElement("div",null,a.map((function(e){return r.createElement("div",{className:"post"},r.createElement("div",{className:"post__content"},r.createElement("strong",null,e.id,"."),r.createElement("div",null,e.title)))})))))},k=function(){return r.createElement(u.vd,{context:{}},r.createElement(u.mg,null,r.createElement("title",null,"React App"),r.createElement("meta",{name:"description",content:"Web site created using create-react-app"})),r.createElement("div",{className:"ui-app"},r.createElement("div",{className:"ui-app__navigation"},r.createElement(c.k2,{className:"ui-app__navigation__link",activeClassName:"ui-app__navigation__link--active",to:"/",exact:!0},"Users")),r.createElement(l.Switch,null,r.createElement(l.Route,{path:"/",exact:!0,component:A}),r.createElement(l.Route,{path:"/user/post/:id",exact:!0,component:x}),r.createElement(l.Route,{path:"/user/albums/:id",exact:!0,component:_}))))};a.hydrate(r.createElement(c.Kd,null,r.createElement(k,null)),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=(t,n,a,c)=>{if(!n){var l=1/0;for(i=0;i<e.length;i++){for(var[n,a,c]=e[i],u=!0,s=0;s<n.length;s++)(!1&c||l>=c)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(u=!1,c<l&&(l=c));if(u){e.splice(i--,1);var o=a();void 0!==o&&(t=o)}}return t}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[n,a,c]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,c,[l,u,s]=n,o=0;if(l.some((t=>0!==e[t]))){for(a in u)r.o(u,a)&&(r.m[a]=u[a]);if(s)var i=s(r)}for(t&&t(n);o<l.length;o++)c=l[o],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},n=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[121],(()=>r(269)));a=r.O(a)})();
//# sourceMappingURL=main.js.map