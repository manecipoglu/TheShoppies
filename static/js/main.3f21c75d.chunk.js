(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(22),r=n.n(s),i=n.p+"static/media/logo.44f20ece.png",o=n(2);function a(){return Object(o.jsxs)("header",{className:"center",children:[Object(o.jsx)("img",{src:i,alt:""}),Object(o.jsx)("h1",{children:"The Shoppies - Movie Awards for Entrepreneurs"})]})}var j=n(24),l=n(20),d="SET_SEARCH_RESULTS",b="SET_SEARCH_FAILURE",u="SET_NOMINEES",h=n(86),O=n.n(h),m=n(94);function x(e){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw n=e.sent,new Error(n);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){throw console.error("API call failed. "+e),e}function p(e){return{type:u,nominees:e}}function g(e){return function(t){return function(e){return fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("f205c853")).then(x).catch(v)}(e).then((function(e){var n;"False"!==e.Response?t({type:d,searchResults:e}):t((n=e.Error,{type:b,errorMessage:n}))})).catch((function(e){throw e}))}}var y=n.p+"static/media/poster.a0e63666.jpg";var w={setNominees:p},S=Object(l.b)((function(e){return{nominees:e.movieReducer.nominees}}),w)((function(e){var t=e.nominee,n=e.nominees,c=e.setNominees;function s(){var e=n.filter((function(e){return e.imdbID!==t.imdbID}));c(e),window.localStorage.setItem("nominees",JSON.stringify(e))}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"nmf",className:"card",children:Object(o.jsxs)("div",{className:"card-inner",children:[Object(o.jsx)("div",{className:"card-front",children:Object(o.jsx)("img",{src:t.Poster?t.Poster:y,alt:"movie poster"})}),Object(o.jsxs)("div",{className:"card-back",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t.Title}),Object(o.jsx)("h3",{children:t.Year})]}),Object(o.jsx)("button",{className:"btn",onClick:s,children:"Remove"})]})]})}),Object(o.jsx)("ul",{id:"mf",children:Object(o.jsxs)("li",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.Title," - ",t.Year,Object(o.jsx)("button",{className:"btn",onClick:s,children:"Remove"})]})})]})})),N=n(144),R=n(140),E=n(145),I=n(146);var k={setNominees:p},D=Object(l.b)((function(e){return{nominees:e.movieReducer.nominees}}),k)((function(e){var t=e.nominees,n=e.setNominees,s=Object(c.useState)(!0),r=Object(j.a)(s,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){var e=window.localStorage.getItem("nominees");(e=JSON.parse(e))&&n(e),a(!1)}),[]),i?Object(o.jsx)(N.a,{active:!0,children:Object(o.jsx)(R.a,{})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{style:{height:"100px"},children:t.length>=5&&Object(o.jsx)(E.a,{success:!0,header:"Thank you for choosing your nominees!",content:"Should you decide to change your list, simply remove the existing nominees to add new ones."})}),Object(o.jsx)("div",{style:{height:"420px"},children:Object(o.jsx)("section",{className:"cards",children:[0,1,2,3,4].map((function(e){return t[e]?Object(o.jsx)(S,{nominee:t[e]},e+t[e].imdbID):Object(o.jsx)(I.a,{id:"nmf",inverted:!0,style:{height:"300px",width:"200px",margin:"0"},children:Object(o.jsx)(I.a.Image,{})})}))})})]})})),C=n(141);var T={loadMovies:g},_=Object(l.b)((function(){return{}}),T)((function(e){var t=e.loadMovies,n=Object(c.useState)(""),s=Object(j.a)(n,2),r=s[0],i=s[1];return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{style:{textAlign:"center"},children:"Choose 5 movies to Nominate!"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),0!==r.length&&t(r)},children:Object(o.jsx)(C.a,{action:{icon:"search",color:"green",content:"Search",labelPosition:"right"},fluid:!0,onChange:function(e){return i(e.target.value)},placeholder:"Search movies by title"})})]})})),M=n(78);function P(e){var t=e.imdbID,n=Object(c.useState)({}),s=Object(j.a)(n,2),r=s[0],i=s[1],a=Object(c.useState)(!0),l=Object(j.a)(a,2),d=l[0],b=l[1];return Object(c.useEffect)((function(){fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat("f205c853")).then((function(e){return e.json()})).then((function(e){return i(e)})),b(!1)}),[t]),d?Object(o.jsx)(N.a,{active:!0,children:Object(o.jsx)(R.a,{})}):Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"Director:"})," ",r.Director]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"Actors:"})," ",r.Actors]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"Plot:"})," ",r.Plot]}),Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"IMDB Rating:"})," ",r.imdbRating]})]})}var A=n(148),J=n(143),F=n(39),z=n(98),H=n(126),L=n(142);var U={setNominees:p,loadMovies:g},Y=Object(l.b)((function(e){var t=e.movieReducer,n=t.nominees;return{searchResults:t.searchResults,nominees:n}}),U)((function(e){var t=e.searchResults,n=e.nominees,s=e.setNominees,r=(e.loadMovies,Object(c.useState)(-1)),i=Object(j.a)(r,2),a=i[0],l=i[1];return Object(o.jsx)(A.a,{inverted:!0,style:{minHeight:"500px"},children:"Movie not found!"!==t[0]?t.map((function(e,t){return Object(o.jsxs)(J.a,{inverted:!0,fluid:!0,children:[Object(o.jsx)(J.a.Title,{active:a===t,index:t,children:Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(o.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[Object(o.jsx)(F.a,{size:"large",onClick:function(){return l(a===t?-1:t)},name:a===t?"chevron down":"chevron right"}),Object(o.jsx)(z.a,{id:"nmf",src:e.Poster?e.Poster:y,alt:"movie poster",size:a===t?"medium":"tiny",spaced:"right"}),Object(o.jsxs)(A.a,{inverted:!0,style:{marginTop:"0"},children:[Object(o.jsxs)("h3",{children:[e.Title," - ",e.Year]}),a===t&&Object(o.jsx)(P,{imdbID:e.imdbID})]})]}),Object(o.jsx)(H.a,{size:"medium",circular:!0,inverted:!0,color:"green",content:"Nominate",disabled:n.some((function(t){return t.imdbID===e.imdbID}))||n.length>=5,onClick:function(){return function(e){var t=[].concat(Object(M.a)(n),[e]);s(t),window.localStorage.setItem("nominees",JSON.stringify(t))}(e)}})]})}),Object(o.jsx)(J.a.Content,{active:a===t,className:"expand"}),Object(o.jsx)(L.a,{inverted:!0})]},t+e.imdbID)})):Object(o.jsx)("h3",{children:t[0]})})}));var B=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(a,{}),Object(o.jsx)(D,{}),Object(o.jsx)(_,{}),Object(o.jsx)(Y,{})]})},X=n(52),V=n(40),q={searchResults:[],nominees:[]};var G=Object(X.b)({movieReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(V.a)(Object(V.a)({},e),{},{searchResults:Object(M.a)(t.searchResults.Search)});case b:return Object(V.a)(Object(V.a)({},e),{},{searchResults:[t.errorMessage]});case u:return Object(V.a)(Object(V.a)({},e),{},{nominees:t.nominees});default:return e}}}),K=n(96),Q=n.n(K),W=n(97);n(123),n(124);var Z=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c;return Object(X.d)(G,e,t(Object(X.a)(W.a,Q()())))}();r.a.render(Object(o.jsx)(l.a,{store:Z,children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.3f21c75d.chunk.js.map