(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,name:"bear",image:"assets/images/bear.jpg",clicked:!1},{id:2,name:"bird",image:"assets/images/bird.jpg",clicked:!1},{id:3,name:"cow",image:"assets/images/cow.jpg",clicked:!1},{id:4,name:"deer",image:"assets/images/deer.jpg",clicked:!1},{id:5,name:"dog",image:"assets/images/dog.jpg",clicked:!1},{id:6,name:"elephant",image:"assets/images/elephant.jpg",clicked:!1},{id:7,name:"flamingo",image:"assets/images/flamingo.jpg",clicked:!1},{id:8,name:"fox",image:"assets/images/fox.jpg",clicked:!1},{id:9,name:"koala",image:"assets/images/koala.jpg",clicked:!1},{id:10,name:"owl",image:"assets/images/owl.jpg",clicked:!1},{id:11,name:"sloth",image:"assets/images/sloth.jpg",clicked:!1},{id:12,name:"whale",image:"assets/images/whale.jpg",clicked:!1}]},,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),i=t.n(r),o=(t(15),t(1)),s=t(4),l=t(5),m=t(8),u=t(6),d=t(9),g=(t(17),function(e){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement("li",null,"Good Luck"),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))}),f=(t(19),function(){return c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement("h1",null,"Memory Game"),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}),p=(t(21),function(e){return c.a.createElement("main",{className:"container"},e.children)}),h=(t(23),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.cardClicked(e.id)}},c.a.createElement("div",{className:"card-img"},c.a.createElement("img",{alt:e.name,src:e.image})))}),k=(t(25),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",null,"Memory Game"))}),E=t(7),v=(t(27),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={score:0,topScore:0,images:E},t.shuffleImgArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},t.correctGuess=function(e){var a=t.state,n=a.topScore,c=a.score+1,r=Math.max(c,n);t.setState({images:t.shuffleImgArray(e),score:c,topScore:r})},t.wrongGuess=function(e){t.setState({images:t.resetData(e),score:0})},t.resetData=function(e){var a=e.map(function(e){return Object(o.a)({},e,{clicked:!1})});return t.shuffleImgArray(a)},t.cardClicked=function(e){var a=!1,n=t.state.images.map(function(t){var n=Object(o.a)({},t);return n.id===e&&(n.clicked||(n.clicked=!0,a=!0)),n});a?t.correctGuess(n):t.wrongGuess(n)},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(f,null),c.a.createElement(p,null,this.state.images.map(function(a){return c.a.createElement(h,{key:a.id,id:a.id,cardClicked:e.cardClicked,image:a.image})})),c.a.createElement(k,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.56c4463e.chunk.js.map