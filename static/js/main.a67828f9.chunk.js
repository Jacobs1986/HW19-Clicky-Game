(this["webpackJsonpclicky-memory-game"]=this["webpackJsonpclicky-memory-game"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"name":"Storm","image":"https://cdn.vox-cdn.com/thumbor/tsaIdT2qu5CszwTVQy8yt7BYJzk=/0x0:1440x1920/1200x800/filters:focal(566x384:796x614)/cdn.vox-cdn.com/uploads/chorus_image/image/60323251/xmenstorm2.0.jpg","clicked":false},{"id":2,"name":"Jean Grey","image":"https://www.sideshow.com/wp/wp-content/uploads/2014/04/300173-3C116p6w2.jpg","clicked":false},{"id":3,"name":"Wolverine","image":"https://static1.srcdn.com/wordpress/wp-content/uploads/2018/12/Wolverine-Classic-Costume.jpg","clicked":false},{"id":4,"name":"Cyclops","image":"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/06/Xmen-New-Cyclops-Blue-Costume.jpg","clicked":false}]')},13:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(3),s=a.n(r),i=a(4),o=a(5),l=a(7),m=a(6);var u=function(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brand"},"Memory Game!"),n.a.createElement("li",null,"Click on an image to start the game!"),n.a.createElement("li",null,"Score: ",e.score," | High Score: ",e.highscore))))};var h=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){e.imageClick(e.index)}})))},d=a(1),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={characters:d,score:0,highscore:0},e.shuffle=function(e){for(var t,a,c=e.length;0!==c;)a=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[a],e[a]=t;return e},e.imageClick=function(t){d[t].clicked?(console.log("GAME OVER"),e.state.score>e.state.highscore&&e.setState({highscore:e.state.score}),e.setState({score:0}),d.forEach((function(e){e.clicked=!1})),e.setState({characters:e.shuffle(d)})):(d[t].clicked=!0,e.setState({score:e.state.score+1}),e.setState({characters:e.shuffle(d)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({characters:this.shuffle(d)})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{score:this.state.score,highscore:this.state.highscore}),this.state.characters.map((function(t,a){return n.a.createElement(h,{imageClick:e.imageClick,index:a,key:t.id,id:t.id,name:t.name,image:t.image,clicked:t.clicked})})))}}]),a}(n.a.Component);s.a.render(n.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.a67828f9.chunk.js.map