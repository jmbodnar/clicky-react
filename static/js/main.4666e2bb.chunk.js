(this["webpackJsonpclicky-react"]=this["webpackJsonpclicky-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),c=a(7),n=a.n(c),r=a(1),l=a(2),m=a(4),g=a(3),u=a(5),o=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"game-header"},i.a.createElement("div",null,"Current Clicks: ",i.a.createElement("span",null,this.props.clicks)),i.a.createElement("div",null,"Current Best: ",i.a.createElement("span",null,this.props.best)),i.a.createElement("div",null,"Total Wins: ",i.a.createElement("span",null,this.props.wins)))}}]),t}(s.Component),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).updateClicked=function(){var e=a.state.clicked;return a.setState({clicked:!e})},a.state={clicked:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("input",{type:"image",className:"card",src:this.props.imageUrl,alt:this.props.alt,onClick:function(t){e.props.clicked(e.props.alt),e.updateClicked()}})}}]),t}(s.Component),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={clicks:0,best:0,wins:0,cards:[{imageUrl:"assets/images/img01.jpg",alt:"one"},{imageUrl:"assets/images/img02.jpg",alt:"two"},{imageUrl:"assets/images/img03.jpg",alt:"three"},{imageUrl:"assets/images/img04.jpg",alt:"four"},{imageUrl:"assets/images/img05.jpg",alt:"five"},{imageUrl:"assets/images/img06.jpg",alt:"six"},{imageUrl:"assets/images/img07.jpg",alt:"seven"},{imageUrl:"assets/images/img08.jpg",alt:"eight"},{imageUrl:"assets/images/img09.jpg",alt:"nine"},{imageUrl:"assets/images/img10.jpg",alt:"ten"},{imageUrl:"assets/images/img11.jpg",alt:"eleven"},{imageUrl:"assets/images/img12.jpg",alt:"twelve"}],clicked:[]},a.checkClicked=function(e){var t=a.state,s=t.clicked,i=t.best,c=t.clicks,n=t.cards;if(s.includes(e))return alert("That's a duplicate. \nYour current best is ".concat(i,".\nLet's play again!")),a.setState({clicks:0}),a.setState({clicked:[]}),void a.setState({cards:a.shuffle(n)});c+1===12?a.processWin():(s.push(e),a.setState({clicks:c+1}),a.checkBest(c+1),a.setState({cards:a.shuffle(n)}))},a.processWin=function(){var e=a.state,t=e.wins,s=e.cards;a.setState({wins:t+1}),a.setState({clicks:0}),a.setState({clicked:[]}),a.setState({best:0}),a.setState({cards:a.shuffle(s,!0)})},a.checkBest=function(e){a.state.best<e&&a.setState({best:e})},a.shuffle=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t,a=e.slice(),s=a.length;s;){var i=[a[t=Math.floor(Math.random()*s--)],a[s]];a[s]=i[0],a[t]=i[1]}return a},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.cards.map((function(t){return i.a.createElement(p,{alt:t.alt,imageUrl:t.imageUrl,clicked:e.checkClicked,key:t.alt})}));return i.a.createElement("div",{className:"game mb-4"},i.a.createElement(o,{clicks:this.state.clicks,best:this.state.best,wins:this.state.wins}),i.a.createElement("div",{className:"game-board"},[t]))}}]),t}(s.Component);n.a.render(i.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.4666e2bb.chunk.js.map