(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{31:function(e,t,o){e.exports=o(60)},36:function(e,t,o){},37:function(e,t,o){},60:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(27),c=o.n(r),l=(o(36),o(30)),d=o(12),i=o(10),u=o(1),s=(o(37),{background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",float:"right",cursor:"pointer"}),m=function(e){return a.a.createElement("div",{style:{backgroundColor:"#f4f4f4",border:"2px dotted",padding:"20px 20px",textDecoration:e.todos.completed?"line-through":"none"}},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:function(){return e.markComplete(e.todos.id)}})," ",e.todos.title,a.a.createElement("button",{style:s,onClick:function(){return e.deleteTodo(e.todos.id)}},"x")))},p=function(e){return e.todos.map((function(t){return a.a.createElement(m,{key:t.id,todos:t,markComplete:e.markComplete,deleteTodo:e.deleteTodo})}))};function f(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TODO List"),a.a.createElement(i.b,{style:b,to:"/"},"Home")," ","|"," ",a.a.createElement(i.b,{style:b,to:"/about"},"About"))}var h={background:"#333",color:"#fff",padding:"10px",textAlign:"center"},b={color:"white",textDecoration:"underline"},E=o(29);function g(e){var t=Object(n.useState)({title:""}),o=Object(d.a)(t,2),r=o[0],c=o[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(r.title),c({title:""})},style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"9",padding:"10px"},placeholder:"Add Todo",onChange:function(e){c(Object(E.a)({},e.target.name,e.target.value))},value:r.title}),a.a.createElement("button",{className:"btn",style:{flex:"2"}},"Submit"))}function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the Todo app. I am learning React."))}var y=o(13),v=o.n(y),k=function(){var e=Object(n.useState)({todos:[]}),t=Object(d.a)(e,2),o=t[0],r=t[1];Object(n.useEffect)((function(){v.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return r({todos:e.data})}))}),[]);var c=function(e){r({todos:o.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},s=function(e){v.a.delete("https://jsonplaceholder.typicode.com/todos/$(id)").then((function(t){return r({todos:o.todos.filter((function(t){return t.id!==e}))})}))},m=function(e){v.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return r({todos:[].concat(Object(l.a)(o.todos),[e.data])})}))};return a.a.createElement(i.a,{basename:window.location.pathname||""},a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(g,{addTodo:m}),a.a.createElement(p,{todos:o.todos,markComplete:c,deleteTodo:s}))}}),a.a.createElement(u.a,{path:"/about",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d9bab86e.chunk.js.map