(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),c=a.n(o),i=a(11),l=a(12),m=a(14),u=a(13),s=a(15),p=a(84),d=a(85),E=a(86),h=a(87),f=a(88),b=a(89),g=a(90),O=a(91),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(d.a,null,r.a.createElement(E.a,{href:"/"},"ShoppingList"),r.a.createElement(h.a,{onClick:this.toggle}),r.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(O.a,{href:"https://github.com/austinbeaufort"},"Github")))))))}}]),t}(n.Component),v=a(92),y=a(93),I=a(94),_=a(102),k=a(103),w=a(19),T=a(22),D=a.n(T),S=function(){return{type:"ITEMS_LOADING"}},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){a.props.deleteItem(e)},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(d.a,null,r.a.createElement(v.a,null,r.a.createElement(_.a,{className:"shopping-list"},t.map(function(t){var a=t._id,n=t.name;return r.a.createElement(k.a,{key:a,timeout:500,classNames:"fade"},r.a.createElement(y.a,null,r.a.createElement(I.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,a)},"\xd7"),n))}))))}}]),t}(n.Component),C=Object(w.b)(function(e){return{item:e.item}},{getItems:function(){return function(e){e(S()),D.a.get("/api/items").then(function(t){return e({type:"GET_ITEMS",payload:t.data})})}},deleteItem:function(e){return function(t){D.a.delete("/api/items/".concat(e)).then(function(a){return t({type:"DELETE_ITEM",payload:e})})}}})(A),N=a(21),M=a(101),L=a(95),G=a(96),X=a(97),x=a(98),B=a(99),J=a(100),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},a.toggle=function(){a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t={name:a.state.name};a.props.addItem(t),a.toggle()},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),r.a.createElement(M.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(L.a,{toggle:this.toggle},"Add To Shopping List"),r.a.createElement(G.a,null,r.a.createElement(X.a,{onSubmit:this.onSubmit},r.a.createElement(x.a,null,r.a.createElement(B.a,{for:"item"},"Item"),r.a.createElement(J.a,{type:"text",name:"name",id:"item",placeholder:"Add shopping item",onChange:this.onChange}),r.a.createElement(I.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add Item"))))))}}]),t}(n.Component),U=Object(w.b)(function(e){return{item:e.item}},{addItem:function(e){return function(t){D.a.post("/api/items",e).then(function(e){return t({type:"ADD_ITEM",payload:e.data})})}}})(R),V=a(16),W=a(44),z=a(45),$=a(8),q={items:[],loading:!1},F=Object(V.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object($.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object($.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ADD_ITEM":return Object($.a)({},e,{items:[t.payload].concat(Object(z.a)(e.items))});case"ITEMS_LOADING":return Object($.a)({},e,{loading:!0});default:return e}}}),H=[W.a],K=Object(V.e)(F,{},Object(V.d)(V.a.apply(void 0,H),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),P=(a(80),a(81),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{store:K},r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(d.a,null,r.a.createElement(U,null),r.a.createElement(C,null))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.9252a570.chunk.js.map