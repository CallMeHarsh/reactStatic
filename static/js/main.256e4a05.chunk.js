(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{172:function(e,t){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(61),s=a.n(l),r=a(26),i=(a(70),a(62)),c=a.n(i),m=a(3),h=a.p+"static/media/smokeLogo1.65c37787.png";var u=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top bg-light"},o.a.createElement("div",{className:"container my-2"},o.a.createElement(m.b,{to:"/",className:"navbar-brand text-dark font-weight-bold"},o.a.createElement("span",null,o.a.createElement("img",{src:h,width:"50",height:"30",alt:"",loading:"lazy"}))," Home"),o.a.createElement(m.b,{to:"/contact",className:"ml-auto mx-3"},o.a.createElement("button",{className:"btn btn-outline-info ml-auto mx-3"},"Contact me")),o.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#collapseNav"},o.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),o.a.createElement("div",{className:"collapse navbar-collapse flex-grow-0",id:"collapseNav"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement("a",{href:"#project",className:"nav-item nav-link text-dark  h6 mx-1 my-auto"},"Projects"),o.a.createElement("a",{href:"#blog",className:"nav-item nav-link text-dark  h6 mx-1 my-auto"},"Blogs")))))};var d=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"container-fluid text-center",style:{backgroundColor:"black"}},o.a.createElement("div",{className:"py-5"},o.a.createElement("h2",{className:"text-light"},"Intrested in working with me?"),o.a.createElement(m.b,{to:"/contact"},o.a.createElement("button",{className:"btn btn-outline-light bt-lg"},"Let's Talk!"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-4 py-3"},o.a.createElement("h5",{className:"text-info pb-3"},"More Links"),o.a.createElement("a",{href:"/",className:"text-light d-block"},"Blogs"),o.a.createElement("a",{href:"/",className:"text-light d-block"},"Home"),o.a.createElement("a",{href:"/",className:"text-light d-block"},"Projects"),o.a.createElement(m.b,{to:"/contact",className:"text-light d-block"},"Contact me"),o.a.createElement(m.b,{to:"/write-a-recommendation",className:"text-light d-block"},"Write a recommendation ",o.a.createElement("i",{className:"fa fa-heart text-light"}))),o.a.createElement("div",{className:"col-12 col-md-4 text-light text-justify py-3"},"If you are intrested feel free to contact me and tell me about your project in Contact me section , I would love to hear. I am a designer too! Also if you face any errors on site, please tell me! Good day ;)",o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("p",{class:"text-info font-bold"},"Special Thanks to Gaurav for Creating that cool logo in navbar!!"),o.a.createElement("p",{class:"text-info font-italic"},"Want a cool logo for your web site?",o.a.createElement("br",null),"Contact Gaurav: ",o.a.createElement("span",null,o.a.createElement("u",null,"+91 930064 40760")))),o.a.createElement("div",{className:"col-12 col-md-4 py-3"},o.a.createElement("h5",{className:"text-info pb-3"},"Social"),o.a.createElement("a",{href:"https://www.linkedin.com/in/harsh-shukla-b20bb818a/"},o.a.createElement("i",{className:"fa fa-linkedin fa-lg text-light d-block py-1"})),o.a.createElement("a",{href:"https://github.com/CallMeHarsh"},o.a.createElement("i",{className:"fa fa-github fa-lg text-light d-block py-1"})),o.a.createElement("a",{href:"https://twitter.com/CallMe_Harsh"},o.a.createElement("i",{className:"fa fa-twitter fa-lg text-light d-block py-1"})))),o.a.createElement("div",{className:"text-muted py-3"},o.a.createElement("p",null,"I do not have copy rights!"))))},g=a(36),p=a.n(g);var b=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1]);return o.a.createElement("div",{className:"container my-5 py-5"},o.a.createElement("h1",{className:"font-weight-light text-center py-5"},o.a.createElement("span",{className:"text-info"},"Thank you! "),"for your interest"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-11 col-lg-5"},o.a.createElement("form",{className:"contact-form bg-light",onSubmit:function(e){e.preventDefault(),a(!0),p.a.sendForm("service_txty6as","template_chun92i",e.target,"user_ycxTVV07zdKbn4oqbyERb").then((function(e){console.log(e.text),alert("Message recieved !!!"),a(!1)}),(function(e){console.log(e.text),a(!0)})),e.target.reset()}},o.a.createElement("input",{type:"hidden",name:"contact_number"}),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Name"),o.a.createElement("input",{type:"text",placeholder:"Enter name",className:"form-control",name:"name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email"),o.a.createElement("input",{type:"email",placeholder:"Enter email",className:"form-control",name:"email"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Message"),o.a.createElement("textarea",{placeholder:"Tell me about your project or leave a little message :)",className:"form-control",name:"message"})),o.a.createElement("input",{type:"submit",value:"Send",className:"btn btn-dark float-right",style:{backgroundColor:"black"}})))))},f=a(1);var y=a(27),v=a(11),E=a(12),w=a(15),N=a(14),x=o.a.createContext(),k=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).handler=function(t,a){switch(t){case"ADD_PROJECT":e.setState({projects:[a].concat(Object(y.a)(e.state.projects))});break;case"ADD_BLOG":e.setState({blogs:[a].concat(Object(y.a)(e.state.blogs))});break;case"ADD_RECOMMENDATION":e.setState({recommendations:[a].concat(Object(y.a)(e.state.recommendations))})}},e.state={handler:e.handler,projects:[{id:1,title:"Real Buisness Website",imageUrl:"https://i.ibb.co/1bVyVtx/Screenshot-from-2021-04-14-22-12-48.png",excerpt:"https://i.ibb.co/3sX9yCy/index-removebg-preview.png",body:"I created this website for a real client while working in DuoLivre!!",link:"http://www.venerableintel.com"},{id:2,title:"Parallax Page",imageUrl:"https://i.ibb.co/DbLTV7H/paralax.png",excerpt:"https://i.ibb.co/ySNLGMJ/kisspng-css3-cascading-style-sheets-logo-html-beautify-5ae0bb6f802b43-421174781524677487525-1.png",body:"This is just a page I created for one of may favourate show. This page is smooth, sexy and responsive with parallax scrolling effect.",link:"https://callmeharsh.github.io/paralax/"},{id:3,title:"Restaurant Website",imageUrl:"https://i.ibb.co/cc9K6MB/confusion.png",excerpt:"https://i.ibb.co/44xp9Jm/Pin-Clipart-com-eclipse-mars-svn-353932-1.png",body:"I created this restaurant website, it is fully responsive and smooth.",link:"https://callmeharsh.github.io/conFusionRest/index.html"},{id:4,title:"Food Website Design",imageUrl:"https://i.ibb.co/zNwZBHQ/Screenshot-from-2021-04-14-22-23-38.png",excerpt:"https://i.ibb.co/KxgrfvL/kisspng-user-interface-design-figma-computer-software-user-5b224261078575-0726675615289718730308.png",body:"Aesthetic Figma Web-Design with little prototyping!",link:"https://www.figma.com/file/vnXJS9iyZqSVK757cSdLCG/food-website?node-id=0%3A1"},{id:5,title:"App Design",imageUrl:"https://i.ibb.co/LC33PrF/Screenshot-from-2021-04-14-22-50-57.png",excerpt:"https://i.ibb.co/KxgrfvL/kisspng-user-interface-design-figma-computer-software-user-5b224261078575-0726675615289718730308.png",body:"Clean and profeesional looking app design with constant spacing and prototyping!",link:"https://www.figma.com/file/GrOWA0RDns5fAWHXwvC6Wn/App-Design?node-id=0%3A1"},{id:6,title:"Logo Design",imageUrl:"https://i.ibb.co/9p9CK1P/Screenshot-from-2021-04-14-22-54-54.png",excerpt:"https://i.ibb.co/KxgrfvL/kisspng-user-interface-design-figma-computer-software-user-5b224261078575-0726675615289718730308.png",body:"Clean and profeesional Logo Design!",link:"https://www.figma.com/proto/NBQjzpcaZ2ypsbNaOfzBtB/Logo?node-id=1%3A2&scaling=scale-down&page-id=0%3A1"}],blogs:[{id:1,title:"DEDUCING NOTHING",imageUrl:"https://inteng-storage.s3.amazonaws.com/img/iea/lV6D1XW1wx/sizes/reflective-thinking-2_resize_md.jpg",excerpt:"Looking back at the millennia...",body:"Looking back at the millennia of model building and deduction that has occurred, not a century has gone by when the prevailing opinion hasn\u2019t been that a perfectly empty vacuum is impossible.Aristotle\u2019s Aether blends seamlessly into the 19th century Ether. In this century, overlapping quantum waves and virtual particles have finally taken root as the New Ether, though it is now infinitely more ephemeral than anything Aristotle or Maxwell could have imagined. We have also seen how the Atomist School of ancient Greece reached its final vindication in the hands of 19th century scientists such as Boltzman. By the 20th century, the Atomist\u2019s paradigm has even been extended to include not just the graininess of matter, but the possible quantum graininess of the vacuum and space itself. In the virtual particles that animate matter, we finally glimpse the world which Heinrich Hertz warned us about nearly a century ago when he said that we would eventually have to reach some accommodation with \u201cinvisible confederates\u201d existing alongside what we can see, to make our whole model of reality more logically self-consistent.Even by the start of the 21st Century, we have reached this accommodation only by shrugging our shoulders and honestly admitting that there are things going on in the world that seem to defy human intuition. What impresses me most about the evolution of our vision of the vacuum is that the imagery we find so potent today\xa0is actually in some sense thousands of years old.It is difficult to imagine that humans would be drawn to the same understanding of physics and astronomy that we now enjoy if our brains had been wired only slightly differently. Without sight and mobility we could not form the slightest notion of 3-D space and geometry. This is what Kant spoke about, what Henri Poincare described at great length without the benefit of 20th century neuroscience, and what Jacob Bronowski described in his book The Origins of Knowledge and Imagination with the benefit of such knowledge. But the object of science is more than just making sense of our senses. It must also guide us towards a deeper understanding of the physical world. This understanding must be self-consistent, and independent of whether we are sensorially or neurologically handicapped. Mathematics as the premier language of physical model building, seems uniquely suited to providing us with an understanding of the physical world. Mathematics lets us see the world in a way that all of the other human languages do not."},{id:2,title:"STOP FOCUSING ON MEANING CRAP",imageUrl:"https://www.scotthyoung.com/blog/wp-content/uploads/2019/06/meaning-moderation.png",excerpt:"I\u2019m suspicious of those things...",body:"I\u2019m suspicious of those things where more is always supposed to be better. Nature prefers moderation, so good things can harm you when you get too much of them. Drinking more water is good. Too much and you\u2019ll drown. I think \u201cmeaning\u201d is one of those things that is usually good, but that can cause you problems when there is too much of it. Meaning is a slippery word, so it\u2019s hard to be clear we\u2019re using it the same way. However, we all know when a person, thing, goal or idea feels significant to us, and when those same things feel ordinary. The difference is meaning.In addition to being a feeling, meaning is also an idea. When someone asks you what something means, they\u2019re asking for you to explain it in words. They want its definition, cause or likely implications. Meanings are words and ideas you weave together in your head. More meaning tends to be better. A complete absence of meaning usually (although perhaps not always) feels awful. Similarly, a lack of meaning in the conceptual sense is confusion and ignorance. We\u2019d prefer to say what things mean and believe it, than to simply shrug our shoulders and say, \u201cI don\u2019t know.\u201dI think there\u2019s two ways you can have too much meaning.First, you could feel too strongly about the significance of something. We\u2019ve all had anxiety and fears when something is so important to us that we\u2019re unable to function. That relationship that you wanted to hold onto even though the other person wasn\u2019t in love with you. That job which meant everything to you\u2014until you got fired. That conviction you held to desperately, until it started to unravel.Feelings are mental tools. They put our minds into a state that allows certain ideas, actions and thoughts to flow more easily than others. However, to allow some ideas to flow more easily, that must necessarily mean you\u2019re blocking others. The feeling of significance therefore will be useful in some contexts and harmful in others, just like anger, fear, optimism, joy, love, sadness and everything else you feel.The second way you can have too much meaning is related to the intellectual idea of meaning. If you have a strong set of ideas about what something means, either in terms of its definition, explanation or implied effects, that can \u201clock\u201d you into a certain way of seeing things. Too much meaning can prevent you from seeing something in another way, and other perspectives may be necessary to solve certain problems."},{id:3,title:"LIVE IT LIKE ADVENTURE AND GET THINGS DONE",imageUrl:"https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg",excerpt:"Is it possible to spend...",body:"Is it possible to spend your life having adventures, but still make meaningful accomplishments? The answer to this question matters to me because, like many of you, I\u2019d like to have both.The challenge is that most advice-givers put the two in either-or categories. Being good requires focus, perhaps decades of it. The world tends to rewards people with painstakingly developed talent, not perpetual dabblers.But while I\u2019d like to sustain such a Newportian focus in my life, I crave variety. Psychological time depends on it, so living adventurously may be the secret to compressing the most life into the brief time we have.Is it possible to have both adventure and accomplishment?Most people tend to fall into one category. There are hard-focusing achievement-oriented people. The kind who studied hard all through school but rarely went to parties. And then there are novelty-seeking adventurers who are a lot of fun but often lag years behind their more ambitious peers.One way to explain this clustering is that the two life approaches really are mutually exclusive. The traits and beliefs to fulfill one naturally omit the other. Like being a jockey or a basketball player, the attributes to be good at one contradict the other.However looking deeper, I\u2019ve managed to find many people who don\u2019t fit the pattern. People who seem to possess both in great enough quantities that the two philosophies may not contradict.Richard Feynman is a perfect example. He was a Nobel-laureate and physicist on the Manhattan project. But he was also a painter, lock-picker and bongo player, fluent in Portuguese. I highly recommend his autobiography.This leads me to another explanation for the clustering. People tend to be either ambitious or adventurous, not because those philosophies contradict, but because the attributes you need to be good at one are different.Instead of a jockey or basketball player, it may be closer to being a basketball player and a pianist. It\u2019s not that one skill hurts the other, but simply that the two are orthogonal"}],recommendations:[],skills:[{id:1,name:"HTML5",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",starsTotal:3,starsActive:3},{id:2,name:"CSS3",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/css3.png",starsTotal:3,starsActive:3},{id:3,name:"Javascript",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/javascript.png",starsTotal:3,starsActive:2},{id:4,name:"Bootstrap 4",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",starsTotal:3,starsActive:3},{id:5,name:"React",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/react.png",starsTotal:3,starsActive:2},{id:6,name:"Figma",imageUrl:"https://i.ibb.co/KxgrfvL/kisspng-user-interface-design-figma-computer-software-user-5b224261078575-0726675615289718730308.png",starsTotal:3,starsActive:2},{id:7,name:"Python",imageUrl:"https://i.ibb.co/hcn2Qmc/oxygen-logo.png",starsTotal:3,starsActive:3},{id:8,name:"Flask",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/flask.png",starsTotal:3,starsActive:1}]},e}return Object(E.a)(a,[{key:"render",value:function(){return o.a.createElement(x.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=x.Consumer,C=a(13),I=a.n(C);var T=function(e){return o.a.createElement(j,null,(function(t){var a=t.projects,n=e.match.params.id,l=a.filter((function(e){return e.id==n}))[0],s=l.imageUrl,r=l.title,i=l.body,c=l.link;return o.a.createElement("div",{className:"container py-5 my-5 markdown"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("img",{src:s,alt:r,className:"w-100"})),o.a.createElement("h1",{className:"font-weight-light text-center my-5"},r),o.a.createElement(I.a,{source:i}),o.a.createElement("h1",null,o.a.createElement("a",{href:c,target:"_blank",className:"font-weight-light text-info"},"Take a look!")))}))};var O=function(e){return o.a.createElement(j,null,(function(t){var a=t.blogs,n=e.match.params.id,l=a.filter((function(e){return e.id==n}))[0],s=l.imageUrl,r=l.title,i=l.body;return o.a.createElement("div",{className:"container py-5 my-5 markdown"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("img",{src:s,alt:r,className:"w-100"})),o.a.createElement("h1",{className:"font-weight-light text-center my-5 bold"},r),o.a.createElement(I.a,{source:i}))}))},A=a.p+"static/media/ProfileImage1.8fdafc53.png";var U=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row text-center align-items-center my-5 py-5"},o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("img",{className:"image-fluid rounded-circle w-75 h-75",src:A})),o.a.createElement("div",{className:"col-12 col-md-6"},o.a.createElement("div",{className:"font-weight-light",style:{fontSize:"50px"}},"Hi, I am ",o.a.createElement("span",{className:"text-info"},"Harsh")),o.a.createElement("h4",{className:"font-weight-light"},"I am a Web Developer and a curious Primate"))))};var S=function(e){var t=e.project,a=t.id,n=t.title,l=t.excerpt,s=t.imageUrl;return o.a.createElement("div",{className:"cardbody"},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"box box1",style:{backgroundImage:"url("+s+")"}},o.a.createElement("div",{className:"cover"},o.a.createElement("h5",{className:"name"},n),o.a.createElement("img",{src:l,className:"title",alt:"..."}),o.a.createElement(m.b,{to:"/project/".concat(a),className:"stretched-link"})))))};var M=function(){return o.a.createElement(j,null,(function(e){var t=e.projects;return o.a.createElement("div",{className:"container text-center my-5",id:"project"},o.a.createElement("h1",{className:"font-weight-light"},o.a.createElement("span",{className:"text-info"},"My")," Projects"),o.a.createElement("div",{className:"lead py-3"},"I build products, just like this website"),o.a.createElement("div",{className:"row my-5 pt-3"},t.slice(0,6).map((function(e){return o.a.createElement("div",{key:e.id,className:"col-12 col-md-4 my-2"},o.a.createElement(S,{project:e}))}))),o.a.createElement("div",{className:"my-5"},o.a.createElement(m.b,{to:"/all-projects",className:"text-dark text-right"},o.a.createElement("h5",null))))}))};var D=function(){return o.a.createElement("div",{className:"bg-light my-5"},o.a.createElement("div",{className:"container text-center py-5"},o.a.createElement("h1",{className:"text-center font-weight-light"},o.a.createElement("span",{className:"text-info"},"About")," me"),o.a.createElement("div",{className:"lead"},"I can develop websites and web apps"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-6 px-5 pt-5"},o.a.createElement("h5",null,"What I can do?"),o.a.createElement("p",{className:"text-justify"},"I can make websites and web apps using a variety web technologies,I can Design professional looking websites and vector art using figma.")),o.a.createElement("div",{className:"col-12 col-md-6 px-5 pt-5"},o.a.createElement("h5",null,"What am I doing currently?"),o.a.createElement("p",{className:"text-justify"},"Currently, I am doing BTech(ECE) at Thapar University.  Besides that, I work on projects related to electronics, design and the web regularly.")),o.a.createElement("div",{className:"col-12 col-md-6 px-5 pt-5"},o.a.createElement("h5",null,"What do I believe in?"),o.a.createElement("p",{className:"text-justify"},"I believe that a lot of things can make life better and worse at the same time, ultimately cancelling both the states and leaving us neutral.")),o.a.createElement("div",{className:"col-12 col-md-6 px-5 pt-5"},o.a.createElement("h5",null,"How I can help you?"),o.a.createElement("p",{className:"text-justify"},"I can help you make websites and web apps using a variety web technologies,I can manage site functionality and implement application features.")))))},B=a(198);var P=function(e){for(var t=e.skill,a=t.name,n=t.imageUrl,l=t.starsTotal,s=t.starsActive,r=[],i=0;i<l;i++)i<s?r.push(o.a.createElement("span",{key:Object(B.a)(),className:"text-info"},"\u2605")):r.push(o.a.createElement("span",{key:Object(B.a)()},"\u2605"));return o.a.createElement("div",null,o.a.createElement("img",{className:"",src:n,alt:a,style:{width:"75px",height:"75px"}}),o.a.createElement("div",{className:"text-center"},r),o.a.createElement("div",{className:"text-center"}))};var L=function(){return o.a.createElement(j,null,(function(e){for(var t=e.skills,a=[],n=0;n<t.length/4;n++){var l=t.slice(4*n,4*(n+1));console.log(l),a.push(o.a.createElement("div",{key:Object(B.a)(),className:"d-flex justify-content-around py-3 "},l.map((function(e){return o.a.createElement(P,{key:Object(B.a)(),skill:e})}))))}return o.a.createElement("div",{className:"bg-light w-100"},o.a.createElement("div",{className:"container text-center py-5"},o.a.createElement("h1",{className:"font-weight-light"},o.a.createElement("span",{className:"text-info"},"Technology")," Stack"),o.a.createElement("div",{className:"lead py-3"},"I design, develop and deliver with these weapons")),a)}))};var W=function(e){var t=e.blog,a=t.id,n=t.title,l=t.excerpt,s=t.imageUrl;return o.a.createElement("div",{className:"card shadow h-100"},o.a.createElement("img",{className:"card-img-top",src:s,alt:n}),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},n),o.a.createElement("p",{className:"card-text"},l),o.a.createElement(m.b,{to:"/blog/".concat(a),className:"stretched-link"})))};var H=function(){return o.a.createElement(j,null,(function(e){var t=e.blogs;return o.a.createElement("div",{className:"container text-center my-5",id:"blog"},o.a.createElement("h1",{className:"font-weight-light"},"My ",o.a.createElement("span",{className:"text-info"},"Blogs")),o.a.createElement("div",{className:"lead"},"I share my views on various topics related in these blogs"),o.a.createElement("div",{className:"row my-5 pt-3"},t.slice(0,3).map((function(e){return o.a.createElement("div",{key:e.id,className:"col-12 col-md-4 my-2"},o.a.createElement(W,{blog:e}))}))),o.a.createElement("div",{className:"my-5"},o.a.createElement(m.b,{to:"/allblogs",className:"text-dark text-right"})))}))};var F=function(){return o.a.createElement("div",null,o.a.createElement(U,null),o.a.createElement(M,null),o.a.createElement(D,null),o.a.createElement(L,null),o.a.createElement(H,null))},G=a(24),q=a(25),_=a.n(q),z=(a(52),function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={imageUrl:"",title:"",excerpt:"",body:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.onBodyChange=function(t){e.setState({body:t})},e.onSubmit=function(t,a){a.preventDefault();e.setState({submitMessage:"Project published successfully",submitMessageTextColor:"text-info"}),t("ADD_PROJECT",{id:Object(B.a)(),imageUrl:e.state.imageUrl,title:e.state.title,excerpt:e.state.excerpt,body:e.state.body})},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(j,null,(function(t){var a=e.state,n=a.imageUrl,l=a.title,s=a.body,r=a.submitMessage,i=a.submitMessageTextColor,c=t.handler;return o.a.createElement("div",{className:"container-fluid my-5 py-5"},o.a.createElement("h1",{className:"text-center my-5 font-weight-light"},"Add ",o.a.createElement("span",{className:"text-info"},"Project")),o.a.createElement("div",{className:"row px-3 px-lg-5"},o.a.createElement("div",{className:"col-12 col-lg-6 px-lg-5"},o.a.createElement("form",{onSubmit:e.onSubmit.bind(e,c)},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"imageUrl"},"Featured Image Url *"),o.a.createElement("input",{type:"text",name:"imageUrl",id:"imageUrl",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title"},"Title *"),o.a.createElement("input",{type:"text",name:"title",id:"title",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"excerpt"},"Excerpt *"),o.a.createElement("input",{type:"text",name:"excerpt",id:"excerpt",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement(_.a,{onChange:e.onBodyChange,options:{hideIcons:["preview","side-by-side","fullscreen"]}}),o.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block my-5",style:{backgroundColor:"black"}},"Publish")),o.a.createElement("div",{className:"text-center"},o.a.createElement("h5",{className:i},r))),o.a.createElement("div",{className:"col-12 col-lg-6 markdown"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("img",{src:n,alt:l})),o.a.createElement("h1",{className:"font-weight-light text-center my-5"},l),o.a.createElement(I.a,{source:s}))))}))}}]),a}(n.Component)),R=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={imageUrl:"",title:"",excerpt:"",body:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(G.a)({},t.target.name,t.target.value))},e.onBodyChange=function(t){e.setState({body:t})},e.onSubmit=function(t,a){a.preventDefault();e.setState({submitMessage:"Blog published successfully",submitMessageTextColor:"text-info"}),t("ADD_BLOG",{id:Object(B.a)(),imageUrl:e.state.imageUrl,title:e.state.title,excerpt:e.state.excerpt,body:e.state.body})},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(j,null,(function(t){var a=e.state,n=a.imageUrl,l=a.title,s=a.body,r=a.submitMessage,i=a.submitMessageTextColor,c=t.handler;return o.a.createElement("div",{className:"container-fluid my-5 py-5"},o.a.createElement("h1",{className:"text-center my-5 font-weight-light"},"Add ",o.a.createElement("span",{className:"text-info"},"Blog")),o.a.createElement("div",{className:"row px-3 px-lg-5"},o.a.createElement("div",{className:"col-12 col-lg-6 px-lg-5"},o.a.createElement("form",{onSubmit:e.onSubmit.bind(e,c)},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"imageUrl"},"Featured Image Url *"),o.a.createElement("input",{type:"text",name:"imageUrl",id:"imageUrl",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"title"},"Title *"),o.a.createElement("input",{type:"text",name:"title",id:"title",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"excerpt"},"Excerpt *"),o.a.createElement("input",{type:"text",name:"excerpt",id:"excerpt",className:"form-control",onChange:e.onChange,required:!0})),o.a.createElement(_.a,{onChange:e.onBodyChange,options:{hideIcons:["preview","side-by-side","fullscreen"]}}),o.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block my-5",style:{backgroundColor:"black"}},"Publish")),o.a.createElement("div",{className:"text-center"},o.a.createElement("h5",{className:i},r))),o.a.createElement("div",{className:"col-12 col-lg-6 markdown"},o.a.createElement("div",{className:"justify-content-center"},o.a.createElement("img",{src:n,alt:l})),o.a.createElement("h1",{className:"font-weight-light text-center my-5"},l),o.a.createElement(I.a,{source:s}))))}))}}]),a}(n.Component);var K=function(){var e=Object(f.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},J=a(39),V=a.n(J),X=a(64),Q=a(65),Z=a.n(Q),$=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).onClick=Object(X.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("");case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(E.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"py-5 my-5"},o.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.onClick},"Click me!"))}}]),a}(n.Component);var Y=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){l(!0),setTimeout((function(){l(!1)}),2e3)}),[]),o.a.createElement("div",{className:"App"},a?o.a.createElement(c.a,{size:50,color:"#5bc0de ",loading:a}):o.a.createElement("header",{className:"App-header"},o.a.createElement(k,null,o.a.createElement(m.a,null,o.a.createElement(K,null),o.a.createElement(u,null),o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/",component:F}),o.a.createElement(f.a,{exact:!0,path:"/contact",component:b}),o.a.createElement(f.a,{exact:!0,path:"/blog/add",component:R}),o.a.createElement(f.a,{exact:!0,path:"/project/add",component:z}),o.a.createElement(f.a,{exact:!0,path:"/project/:id",component:T}),o.a.createElement(f.a,{exact:!0,path:"/blog/:id",component:O}),o.a.createElement(f.a,{exact:!0,path:"/test",component:$}),o.a.createElement(f.a,{component:F})),o.a.createElement(d,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(192),a(193);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){}},[[196,1,2]]]);
//# sourceMappingURL=main.256e4a05.chunk.js.map