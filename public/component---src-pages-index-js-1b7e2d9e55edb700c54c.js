(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(148),i=n(35),o=n.n(i),c=n(7),u=n.n(c),d=n(187),h=n(147),l=(n(188),n(189),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return u()(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"intro-container"},a.a.createElement("div",{className:"intro-inner-container"},a.a.createElement("h1",{className:"intro-title"}," You are about to play the hardest Game of thrones Quiz out there."),a.a.createElement("p",{className:"intro-warrning"},"Made for true Game of thrones superfans."),a.a.createElement("p",null,"Are you ready?"),a.a.createElement("button",{className:"intro-button",onClick:this.props.startQuiz},"START QUIZ")))},t}(a.a.Component)),g=(n(190),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n.makeScoreText=n.makeScoreText.bind(o()(n)),n}u()(t,e);var n=t.prototype;return n.makeScoreText=function(e){var t;return e<5?t="Please try again!":e<10?t="Not impressive, Try again!":e<15?t="Not bad":e<20?t="Well done!":24===e?t="WOW, you missed only one question. Great job!":25===e&&(t="CONGRATULATIONS! You answered everything right. You are a true Game of thrones superfan!"),t},n.render=function(){return a.a.createElement("div",{className:"final-score-container"},a.a.createElement("div",{className:"final-score-inner-container"},a.a.createElement("h1",null,this.makeScoreText(this.props.correctAnswers)),a.a.createElement("h2",null,"You got ",this.props.correctAnswers," questions right out of 25"),a.a.createElement("button",{onClick:this.props.restartQuiz,className:"try-again-button"},"Try Again")))},t}(a.a.Component)),p=n(153),m=n.n(p),f=n(154),w=n.n(f),b=n(155),j=n.n(b),y=n(156),A=n.n(y),v=n(157),Q=n.n(v),q=n(158),k=n.n(q),E=n(159),N=n.n(E),S=n(160),x=n.n(S),W=n(161),T=n.n(W),z=n(162),M=n.n(z),C=n(163),H=n.n(C),B=n(164),J=n.n(B),D=n(165),F=n.n(D),L=n(166),R=n.n(L),G=n(167),O=n.n(G),I=n(168),Y=n.n(I),K=n(169),P=n.n(K),U=n(170),V=n.n(U),_=n(171),Z=n.n(_),X=n(172),$=n.n(X),ee=n(173),te=n.n(ee),ne=n(174),re=n.n(ne),ae=n(175),se=n.n(ae),ie=n(176),oe=n.n(ie),ce=n(177),ue=n.n(ce),de=[m.a,w.a,j.a,A.a,Q.a,k.a,N.a,x.a,T.a,M.a,H.a,J.a,F.a,R.a,O.a,Y.a,P.a,V.a,Z.a,$.a,te.a,re.a,se.a,oe.a,ue.a],he=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentQuestionNumber:0,numberOfQuestions:24,startQuiz:!1,quizFinished:!1,correctAnswers:0,incorrectAnswers:0,actualQuestionNumber:1,actualNumberOfQuestions:25},n.getAnswers=n.getAnswers.bind(o()(n)),n.getQuestion=n.getQuestion.bind(o()(n)),n.getImage=n.getImage.bind(o()(n)),n.answerClicked=n.answerClicked.bind(o()(n)),n.checkAnswer=n.checkAnswer.bind(o()(n)),n.startQuiz=n.startQuiz.bind(o()(n)),n.finishQuiz=n.finishQuiz.bind(o()(n)),n.restartQuiz=n.restartQuiz.bind(o()(n)),n}u()(t,e);var r=t.prototype;return r.answerClicked=function(e,t,n,r){for(var a=document.getElementsByClassName("answers"),s=0;s<a.length;s++)a[s].style.pointerEvents="none";n<this.state.numberOfQuestions?(this.checkAnswer(e,r,n,t),setTimeout(function(){this.setState(function(e){return{currentQuestionNumber:e.currentQuestionNumber+1,actualQuestionNumber:e.actualQuestionNumber+1}})}.bind(this),800)):(setTimeout(function(){this.setState(function(){return{currentQuestionNumber:0,actualQuestionNumber:1}})}.bind(this),800),this.checkAnswer(e,r,n,t),this.finishQuiz())},r.getAnswers=function(e,t){var n=this,r=[];return e.allQuestionsJson.edges[t].node.answers.forEach(function(s){return r.push(a.a.createElement("h2",{onClick:function(r){return n.answerClicked(r,s,t,e)},key:s,className:"answers"},s))}),r},r.getQuestion=function(e,t){return e.allQuestionsJson.edges[t].node.question},r.getImage=function(e,t){var r=e.allQuestionsJson.edges[t].node.image;return n(191)("./"+r)},r.checkAnswer=function(e,t,n,r){r===t.allQuestionsJson.edges[n].node.correctAnswer?(this.setState({correctAnswers:this.state.correctAnswers+1}),e.target.classList.add("green")):(e.target.classList.add("red"),this.setState({incorrectAnswers:this.state.incorrectAnswers+1}))},r.finishQuiz=function(){setTimeout(function(){this.setState({quizFinished:!this.state.quizFinished})}.bind(this),700)},r.startQuiz=function(){this.setState({startQuiz:!this.state.startQuiz,correctAnswers:0,incorrectAnswers:0})},r.restartQuiz=function(){this.setState({currentQuestionNumber:0,actualQuestionNumber:1,startQuiz:!0,quizFinished:!1,correctAnswers:0,incorrectAnswers:0})},r.componentDidMount=function(){for(var e=0;e<25;e++){(new Image).src=de[e]}},r.render=function(){var e=this;return a.a.createElement(h.a,{query:"1449559817",render:function(t){return a.a.createElement(a.a.Fragment,null,e.state.startQuiz?a.a.createElement("div",null,e.state.quizFinished?a.a.createElement(g,{restartQuiz:e.restartQuiz,correctAnswers:e.state.correctAnswers,incorrectAnswers:e.state.incorrectAnswers}):a.a.createElement("div",null,a.a.createElement("h1",{className:"question"},e.getQuestion(t,e.state.currentQuestionNumber)),a.a.createElement("img",{className:"question-image",src:de[e.state.currentQuestionNumber],alt:"question"}),a.a.createElement("div",{className:"answers-container"},e.getAnswers(t,e.state.currentQuestionNumber)),a.a.createElement("div",{className:"score"},a.a.createElement("p",null,"question ",e.state.actualQuestionNumber,"/",e.state.actualNumberOfQuestions),a.a.createElement("p",null,"correct: ",e.state.correctAnswers),a.a.createElement("p",null,"incorrect: ",e.state.incorrectAnswers)))):a.a.createElement(l,{startQuiz:e.startQuiz}))},data:d})},t}(a.a.Component);t.default=function(){return a.a.createElement(s.a,null,a.a.createElement(he,null))}},146:function(e,t,n){var r;e.exports=(r=n(150))&&r.default||r},147:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),s=n(4),i=n.n(s),o=(n(33),n(146),a.a.createContext({})),c=function(e){return a.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){"use strict";var r=n(149),a=n(0),s=n.n(a),i=n(147);n(151);t.a=function(e){var t=e.children;return s.a.createElement(i.a,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{margin:"0 auto",maxWidth:750,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",{className:"main"},t)))},data:r})}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},150:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),s=n(4),i=n.n(s),o=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,n){e.exports=n.p+"static/nightking-3980506c8abc3984cc6533ff0796287a.jpg"},154:function(e,t,n){e.exports=n.p+"static/wildfire-dc1307895d0f9f4158003bdc71d5208b.jpg"},155:function(e,t,n){e.exports=n.p+"static/beric-3ba0fc7c19572d7eb8cec1761366b92a.jpg"},156:function(e,t,n){e.exports=n.p+"static/shaggydog-a38b3d538420171dd8d25d0e07eba220.jpg"},157:function(e,t,n){e.exports=n.p+"static/ice-6b4f7f6adcd3adf80108438a092d05fd.jpg"},158:function(e,t,n){e.exports=n.p+"static/arthur-4b611e01d6fc5de57587d526693e42dc.jpg"},159:function(e,t,n){e.exports=n.p+"static/hotpie-35a95221b5536e7b4da1b3abc0a94976.jpg"},160:function(e,t,n){e.exports=n.p+"static/hornhill-95aaef974c8a862ca441ae58221b3f99.png"},161:function(e,t,n){e.exports=n.p+"static/viserion-c16641f4a0a4883d8b22ca9f0fedb5c8.jpg"},162:function(e,t,n){e.exports=n.p+"static/jonarryn-36ffdc6990f5d17f8c71a79f59716aa6.jpg"},163:function(e,t,n){e.exports=n.p+"static/braavoscoin-6873ecad2c493a82410d11d119b18b10.jpg"},164:function(e,t,n){e.exports=n.p+"static/butcher-98ea18200afd3ebca1a7f975c804ec91.jpg"},165:function(e,t,n){e.exports=n.p+"static/jaqen-9d83658f66d2445a32da75c7d8001d0d.png"},166:function(e,t,n){e.exports=n.p+"static/harrenhall-9079ce1098f64b248f6ebaa9bae86d55.jpg"},167:function(e,t,n){e.exports=n.p+"static/cake-cbe9e7e880c4c2ce19ab350fda91918c.jpg"},168:function(e,t,n){e.exports=n.p+"static/balerion-4a22ac723de9507ef78385968ea2058e.jpg"},169:function(e,t,n){e.exports=n.p+"static/throne-3db8c16069b811635ac8a68a476a65a7.jpg"},170:function(e,t,n){e.exports=n.p+"static/sigil-d055b875fd17580c43d5f844373b96de.jpg"},171:function(e,t,n){e.exports=n.p+"static/grey-6dca4dd6e4c47a3b95fc051b2f073243.jpg"},172:function(e,t,n){e.exports=n.p+"static/dontos-db3f032f13aaf4a2a0c2d656d0afa310.jpg"},173:function(e,t,n){e.exports=n.p+"static/shireen-e5f05987cd68559cb999227c78c28427.jpg"},174:function(e,t,n){e.exports=n.p+"static/wedding-2634a478dda2b71d6da850e788e38ef4.jpeg"},175:function(e,t,n){e.exports=n.p+"static/raeghar-0b042f561b8d1240505a9c2749a4b5bb.jpg"},176:function(e,t,n){e.exports=n.p+"static/hardhome-39b41192220f6d5cceeebdacf16104dc.jpg"},177:function(e,t,n){e.exports=n.p+"static/bones-05b61ebb41cf18d5686459728428d941.jpg"},187:function(e){e.exports={data:{allQuestionsJson:{edges:[{node:{image:"nightking.jpg",question:"How old is the Night King?",answers:["1000 years","3000 years","8000 years","10000 years"],correctAnswer:"10000 years"}},{node:{image:"wildfire.jpg",question:"What is the only thing that can put out Wildfire?",answers:["Wind","Sand","Water","Ice"],correctAnswer:"Sand"}},{node:{image:"beric.jpg",question:"How many times had Beric Dondarrion been brought back to life?",answers:["Three times","Five times","Six times","Seven times"],correctAnswer:"Six times"}},{node:{image:"shaggydog.jpg",question:"What is the name of Rickon Stark's Direwolf?",answers:["Shaggydog","North","Summer","Nymeria"],correctAnswer:"Shaggydog"}},{node:{image:"ice.jpg",question:"Where was the smith who melted down Ned Stark's sword from?",answers:["Pentos","Winterfell","King's Landing","Braavos"],correctAnswer:"Braavos"}},{node:{image:"arthur.jpg",question:"Known as the best sword fighter in Westeros, what is the name of the man in the picture?",answers:["Arthur Dayne","Barristan Selmy","Qhorin Halfhand","Yoren"],correctAnswer:"Arthur Dayne"}},{node:{image:"hotpie.jpg",question:"How does Hotpie call Winterfell?",answers:["Winterfell","Winterhell","Winterland","Winterfall"],correctAnswer:"Winterhell"}},{node:{image:"hornhill.png",question:"What is the name of the castle in the picture?",answers:["Horn Hill","Highgarden","Castely Rock","Moat Cailin"],correctAnswer:"Horn Hill"}},{node:{image:"viserion.jpg",question:"What is the name of the dragon in the picture?",answers:["Drogon","Balerion","Viserion","Rhaegal"],correctAnswer:"Viserion"}},{node:{image:"jonarryn.jpg",question:"What were the last words of Jon Arryn upon his death?",answers:["The true heir is ...","Winter is coming","Valar morghulis","The seed is strong"],correctAnswer:"The seed is strong"}},{node:{image:"braavoscoin.jpg",question:"From what metal is the Braavos coin made?",answers:["Iron","Steel","Bronze","Copper"],correctAnswer:"Iron"}},{node:{image:"butcher.jpg",question:"What was the name of the butcher's boy who got killed by the Hound?",answers:["Lerry","Mike","Mycah","Gendry"],correctAnswer:"Mycah"}},{node:{image:"jaqen.png",question:"What was the third name that Arya gave to Jaqen h'ghar for him to kill?",answers:["Tywin Lannister","Jaqen h'ghar","Walder Frey","Meryn Trant"],correctAnswer:"Jaqen h'ghar"}},{node:{image:"harrenhall.jpg",question:"What is the name of the castle in the picture?",answers:["Moat Cailin","Storm's End","Harrenhall","The Eyrie"],correctAnswer:"Harrenhall"}},{node:{image:"cake.jpg",question:'Who said "Even now i could cut through the five of you like carving a cake" ?',answers:["Syrio Forel","The Hound","Jaime Lannister","Barristan Selmy"],correctAnswer:"Barristan Selmy"}},{node:{image:"balerion.jpg",question:"To which Dragon did the skull in the picture belong?",answers:["Meraxes","Sunfyre","Vhagar","Balerion"],correctAnswer:"Balerion"}},{node:{image:"throne.jpg",question:"About how many swords are there in the Iron Throne?",answers:["over 100","over 200","over 500","over 1000"],correctAnswer:"over 100"}},{node:{image:"sigil.jpg",question:"What is the personal sigil of Petyr Baelish?",answers:["Titans head","Mockingbird","Onion","Yellow flower"],correctAnswer:"Mockingbird"}},{node:{image:"grey.jpg",question:"What is the name of Robb Stark's direwolf?",answers:["Barwolf","Nymeria","Young","Grey Wind"],correctAnswer:"Grey Wind"}},{node:{image:"dontos.jpg",question:"What is the name of the man in the picture?",answers:["Meryn Trant","Willis Wode","Dontos Hollard","Jaremy Mallister"],correctAnswer:"Dontos Hollard"}},{node:{image:"shireen.jpg",question:"A passing merchant gave a infected doll to shireen from which she got the greyscale.Where was that merchant from?",answers:["Braavos","King's Landing","Iron Islands","Dorne"],correctAnswer:"Dorne"}},{node:{image:"wedding.jpeg",question:"Continue the phrase: Father, Smith, Warrior...",answers:["Mother, Maiden, Crone, Stranger","Mother, Heir, Maiden, Stranger","Mother, Crown, Maiden, Stranger","Mother, Maiden, Cloak, Stranger"],correctAnswer:"Mother, Maiden, Crone, Stranger"}},{node:{image:"raeghar.jpg",question:"Who killed Rhaegar Targaryen at the battle of the Trident",answers:["Eddard Stark","Robert Baratheon","Jaime Lannister","Tywin Lannister"],correctAnswer:"Robert Baratheon"}},{node:{image:"hardhome.jpg",question:"What is the name of the village in the picture?",answers:["The North Grove","Greywater Watch","Last Hearth","Hardhome"],correctAnswer:"Hardhome"}},{node:{image:"bones.jpg",question:"Who killed the Lord of Bones?",answers:["Qhorin Halfhand","Jon Snow","Tormund Giantsbane","Ygritte"],correctAnswer:"Tormund Giantsbane"}}]}}}},191:function(e,t,n){var r={"./arthur.jpg":158,"./balerion.jpg":168,"./beric.jpg":155,"./bones.jpg":177,"./braavoscoin.jpg":163,"./butcher.jpg":164,"./cake.jpg":167,"./dontos.jpg":172,"./grey.jpg":171,"./hardhome.jpg":176,"./harrenhall.jpg":166,"./hornhill.png":160,"./hotpie.jpg":159,"./ice.jpg":157,"./jaqen.png":165,"./jonarryn.jpg":162,"./nightking.jpg":153,"./raeghar.jpg":175,"./shaggydog.jpg":156,"./shireen.jpg":173,"./sigil.jpg":170,"./throne.jpg":169,"./viserion.jpg":161,"./wall.jpg":192,"./wedding.jpeg":174,"./wildfire.jpg":154};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=191},192:function(e,t,n){e.exports=n.p+"static/wall-8bcd0f693886186684192b7a93cd43cd.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-1b7e2d9e55edb700c54c.js.map