(this.webpackJsonpwhtsapp=this.webpackJsonpwhtsapp||[]).push([[0],{60:function(e,a,t){e.exports=t(86)},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),o=(t(65),t(10)),s=(t(66),t(67),t(49)),m=t.n(s),i=t(50),u=t.n(i),d=t(36),p=t.n(d),E=t(100),h=t(98),f=t(31),v=t.n(f),b=(t(68),t(24)),g=t.n(b);g.a.initializeApp({apiKey:"AIzaSyDnpVzl6su53gIfxxcoV7jDT6tlu0CEhaU",authDomain:"whatsappclone-56301.firebaseapp.com",databaseURL:"https://whatsappclone-56301.firebaseio.com",projectId:"whatsappclone-56301",storageBucket:"whatsappclone-56301.appspot.com",messagingSenderId:"53412985781",appId:"1:53412985781:web:d994150b2f993c29c277fc",measurementId:"G-TYHJS7K8E5"});var j=g.a.firestore(),O=g.a.auth(),N=new g.a.auth.GoogleAuthProvider,w=j,S=t(27);var y=function(e){var a,t=e.id,l=e.name,r=e.addNewChat,s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],u=m[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),h=p[0],f=p[1];return Object(n.useEffect)((function(){t&&w.collection("rooms").doc(t).collection("messeges").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){u(Math.floor(5e3*Math.random()))}),[]),r?c.a.createElement("div",{onClick:function(){var e=prompt("Enter a new name for chat");e&&w.collection("rooms").add({name:e}),i},className:"chat"},c.a.createElement("h2",null,"Add new chat")):c.a.createElement(S.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"chat"},c.a.createElement(E.a,{src:"https://avatars.dicebear.com/api/human/".concat(i,".svg")}),c.a.createElement("div",{className:"chatInfo"},c.a.createElement("h2",null,l),c.a.createElement("p",null,null===(a=h[0])||void 0===a?void 0:a.message))))},C=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(C.Provider,{value:Object(n.useReducer)(a,t)},l)},I=function(){return Object(n.useContext)(C)};var k=function(){var e=I(),a=Object(o.a)(e,2),t=a[0].user,l=(a[1],Object(n.useState)([])),r=Object(o.a)(l,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){w.collection("rooms").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))})),c.a.createElement("div",{className:"Left"},c.a.createElement("div",{className:"left_header"},c.a.createElement("div",{className:"pic"},c.a.createElement(E.a,{src:null===t||void 0===t?void 0:t.photoURL})),c.a.createElement("div",{className:"left_header_icons"},c.a.createElement(h.a,null,c.a.createElement(m.a,null)),c.a.createElement(h.a,null,c.a.createElement(u.a,null)),c.a.createElement(h.a,null,c.a.createElement(p.a,null)))),c.a.createElement("div",{className:"left_search"},c.a.createElement("div",{className:"searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{type:"text",placeholder:"Search or start a new chat"}))),c.a.createElement("div",{className:"Button"},c.a.createElement("button",{type:"submit"},c.a.createElement(h.a,null,c.a.createElement(v.a,null)))),c.a.createElement("div",{className:"left_chats"},c.a.createElement(y,{addNewChat:!0}),s.map((function(e){return c.a.createElement(y,{key:e.id,id:e.id,name:e.data.name})}))))},x=t(52),D=t.n(x),A=t(51),B=t.n(A),T=t(54),U=t.n(T),M=t(5),W=(t(84),t(53)),L=t.n(W);var R=function(){var e,a,t=Object(n.useState)(""),l=Object(o.a)(t,2),r=l[0],s=l[1],m=Object(n.useState)(""),i=Object(o.a)(m,2),u=i[0],d=i[1],f=Object(n.useState)([]),b=Object(o.a)(f,2),j=b[0],O=b[1],N=Object(M.f)().roomId,S=Object(n.useState)(""),y=Object(o.a)(S,2),C=y[0],_=y[1],k=I(),x=Object(o.a)(k,2),A=x[0].user;return x[1],Object(n.useEffect)((function(){N&&(w.collection("rooms").doc(N).onSnapshot((function(e){_(e.data().name)})),w.collection("rooms").doc(N).collection("messeges").orderBy("timestamp","asc").onSnapshot((function(e){O(e.docs.map((function(e){return e.data()})))})))}),[N]),Object(n.useEffect)((function(){s(Math.floor(5e3*Math.random()))}),[N]),c.a.createElement("div",{className:"Chat"},c.a.createElement("div",{className:"Chat_header"},c.a.createElement(E.a,{src:"https://avatars.dicebear.com/api/human/".concat(r,".svg")}),c.a.createElement("div",{className:"header_info"},c.a.createElement("h3",null,C),c.a.createElement("p",null,"last seen"," ",new Date(null===(e=j[j.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"header_icons"},c.a.createElement(h.a,null,c.a.createElement(v.a,null)),c.a.createElement(h.a,null,c.a.createElement(B.a,null)),c.a.createElement(h.a,null,c.a.createElement(p.a,null)))),c.a.createElement("div",{className:"Chat_body"},j.map((function(e){var a;return c.a.createElement("p",{className:"messege ".concat(e.name===A.displayName&&"chat_reciever")},c.a.createElement("span",{className:"chat_name"},e.name),e.message,c.a.createElement("span",{className:"timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"Chat_info"},c.a.createElement(h.a,null,c.a.createElement(D.a,null)),c.a.createElement("form",null,c.a.createElement("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Send a messege"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),w.collection("rooms").doc(N).collection("messeges").add({message:u,name:A.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}).then((function(){console.log("Done")})).catch((function(e){console.error(e)})),d("")},type:"submit"},c.a.createElement(h.a,null,c.a.createElement(L.a,null)))),c.a.createElement(h.a,null,c.a.createElement(U.a,null))))},z=t(55),G=t(99),J=(t(85),t(40)),P="SET_USER",V=function(e,a){switch(console.log(a),a.type){case P:return Object(J.a)(Object(J.a)({},e),{},{user:a.user});default:return e}};var K=function(){var e=I(),a=Object(o.a)(e,2);Object(z.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"Login"},c.a.createElement("div",{className:"loginContainer"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",alt:"whatsapp_img"}),c.a.createElement("div",{className:"text"},c.a.createElement("h1",null,"Sign In")),c.a.createElement(G.a,{onClick:function(){O.signInWithPopup(N).then((function(e){t({type:P,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In via Google")))};var F=function(){var e=I(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"App"},t?c.a.createElement("div",{className:"App_body"},c.a.createElement(S.a,null,c.a.createElement(k,null),c.a.createElement(M.c,null,c.a.createElement(M.a,{path:"/rooms/:roomId"},c.a.createElement(R,null)),c.a.createElement(M.a,{path:"/"},c.a.createElement(R,null))))):c.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{user:null},reducer:V},c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.ddb17830.chunk.js.map