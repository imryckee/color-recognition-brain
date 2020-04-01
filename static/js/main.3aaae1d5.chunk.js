(this["webpackJsonpcolor-recognition-brain"]=this["webpackJsonpcolor-recognition-brain"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/brain.8580a503.png"},35:function(e,t,a){e.exports=a(83)},40:function(e,t,a){},41:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),r=a.n(i),l=(a(40),a(34)),o=a(7),c=a(8),m=a(10),u=a(9),d=a(11),h=(a(41),a(29)),p=a.n(h),g={particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},f=a(30),b=a.n(f),E=function(e){var t=e.onRouteChange,a=e.onSigninStatusChange,n=e.isSignedIn,i=e.changeToInitialStatus;return n?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){t("home"),a(!1),i()},className:"f4 link dim white pa3 pointer underline"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between"}},s.a.createElement("p",{onClick:function(){t("home"),i()},className:"f4 link dim white pa3 pointer underline"},"Home Page"),s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){t("signin")},className:"f4 link dim white pa3 pointer underline"},"Sign In"),s.a.createElement("p",{onClick:function(){t("register")},className:"f4 link dim white pa3 pointer underline "},"Register")))},w={signInEmail:"",signInPassword:"",passwordWrong:"",noSuchUser:"",dbfailed:""},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(e){e.target.parentNode.parentNode.firstChild.childNodes[1].lastChild.value="",e.target.parentNode.parentNode.firstChild.childNodes[2].lastChild.value="",fetch(a.props.server+"/signin",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){a.setState((function(){return w})),"wrong password"===e?a.setState((function(){return{passwordWrong:!0}})):"no such user"===e?a.setState((function(){return{noSuchUser:!0}})):"there is something wrong with database"===e?a.setState((function(){return{dbfailed:!0}})):(a.props.onSigninStatusChange(!0),a.props.loadUser(e),a.props.changeToInitialStatus(),a.props.onRouteChange("home"))})).catch((function(e){console.log("Can't connect to database."),a.setState((function(){return{dbfailed:!0}}))}))},a.state=w,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw10 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign In"}))),!0===this.state.passwordWrong?s.a.createElement("p",{className:"white"},"Password is wrong."):!0===this.state.noSuchUser?s.a.createElement("p",{className:"white"},"No such user."):!0===this.state.dbfailed?s.a.createElement("div",{className:"white"},s.a.createElement("p",null,"Can't connect to database."),s.a.createElement("p",null,"Try it later.")):s.a.createElement("div",null)))}}]),t}(s.a.Component),N={name:"",email:"",password:"",submissionFormat:"",emailExisted:"",dbfailed:""},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitRegister=function(e){e.target.parentNode.parentNode.firstChild.childNodes[1].lastChild.value="",e.target.parentNode.parentNode.firstChild.childNodes[2].lastChild.value="",e.target.parentNode.parentNode.firstChild.childNodes[3].lastChild.value="",fetch(a.props.server+"/register",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){a.setState((function(){return N})),"incorrect form submission"===e?a.setState((function(){return{submissionFormat:!1}})):"email has existed"===e?a.setState((function(){return{emailExisted:!0}})):"there is something wrong with database"===e?a.setState((function(){return{dbfailed:!0}})):a.props.onRouteChange("signin")})).catch((function(e){console.log("Can't connect to database."),a.setState((function(){return{dbfailed:!0}}))}))},a.state=N,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw10 shadow-5 center"},s.a.createElement("main",{className:"pl5 pr5 pt4 pb3 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f3 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))),!0===this.state.emailExisted?s.a.createElement("p",{className:"white"},"This email has existed."):!1===this.state.submissionFormat?s.a.createElement("div",{className:"white"},s.a.createElement("p",null,"Incorrect form submission."),s.a.createElement("p",null,"Follow the following rules.")):!0===this.state.dbfailed?s.a.createElement("div",{className:"white"},s.a.createElement("p",null,"Can't connect to database."),s.a.createElement("p",null,"Try it later.")):s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("p",null,"Name shouldn't be empty."),s.a.createElement("p",null,"Email should be valid. "),s.a.createElement("p",null,"Password should be greater than 6 digits."))))}}]),t}(s.a.Component),C=a(31),y=a.n(C),k=a(32),I=a.n(k),x=(a(79),function(){return s.a.createElement("div",{className:"center ma4 mt0"},s.a.createElement(y.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:130,width:130}},s.a.createElement("div",{className:"Tilt-inner"},s.a.createElement("img",{alt:"logo",src:I.a}))))}),j=function(e){var t=e.isSignedIn,a=e.name,n=e.entries;return!0===t?s.a.createElement("div",null,s.a.createElement("div",{className:"white f4 pa2"},"".concat(a,", your have detected ").concat(n," times for now."))):null},O=(a(80),function(e){var t=e.onInputChange,a=e.onSubmitDetect,n=e.onUpload;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3 white pa2"},"This Magic Brain will detect colors in your pictures. Give it a try !"),s.a.createElement("div",{className:"pa2 center"},s.a.createElement("div",{className:"center form pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Enter an image url",onChange:t}),s.a.createElement("button",{className:"w-30 grow f5 link ph2 pv2 dib white bg-light-purple",onClick:a},"Detect"))),s.a.createElement("div",null,s.a.createElement("label",{className:"w-20 center upload-button pa2 bg-light-silver mt4 mb4",htmlFor:"image-button"},"Upload Image"),s.a.createElement("input",{className:"icon-button",type:"file",accept:"image/*",id:"image-button",onChange:n})))}),R=(a(81),a(33)),T=a.n(R),U=function(e){var t=e.hex,a=e.name,n=e.percent,i=T.a.findTextColor(t);return s.a.createElement("li",{className:"color-block",style:{backgroundColor:t,height:"40px",color:i}},s.a.createElement("div",{className:"color-info"},s.a.createElement("strong",null,a)," ",t),s.a.createElement("div",{className:"color-percent"},n))},F=function(e){var t=e.link,a=e.colors,n=e.linkstatus;if("true"===n){var i=a.map((function(e){return s.a.createElement(U,{hex:e.hex,name:e.name,percent:e.percent,key:e.hex})}));return s.a.createElement("div",{className:"center mt3 mb3"},s.a.createElement("div",{className:"pa2"},s.a.createElement("img",{src:t,alt:"",width:"500px"})),s.a.createElement("section",{className:"pa1",style:{width:"500px"}},s.a.createElement("ul",{className:"pa1"},i)))}return"invalidUrl"===n?s.a.createElement("div",null,s.a.createElement("p",{className:"light-red f3"},"This isn't a valid image url. Please enter again."),s.a.createElement("p",{className:"gold f4"},"Or you tried it too fast, slow down !")):"invalidFile"===n?s.a.createElement("div",null,s.a.createElement("p",{className:"light-red f3"},"This isn't an image file. Please upload again."),s.a.createElement("p",{className:"gold f4"},"Or you tried it too fast, slow down !")):null},P=new b.a.App({apiKey:"7a4d95ae63234c00b04756627ab81528"}),_="http://localhost:3001",D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).changeToInitialStatus=function(){e.setState({input:"",link:"",colors:[{hex:"",name:"",percent:""}],linkstatus:""})},e.onRouteChange=function(t){e.setState({route:t})},e.onSigninStatusChange=function(t){e.setState({isSignedIn:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,entries:parseInt(t.entries)}})},e.updateEntries=function(){e.state.isSignedIn&&fetch(_+"/image",{method:"put",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){"no such user"===t||"update\xa0entries\xa0failed"===t?console.log("There is something wrong with the user info. Update\xa0entries\xa0failed."):e.setState({user:Object(l.a)({},e.state.user,{entries:t})})})).catch((function(e){console.log("Update\xa0entries\xa0failed. May be there is something wrong with database."),console.log(e)}))},e.abstractColorInfo=function(e){var t=e.outputs[0].data.colors.map((function(e){return{hex:e.raw_hex,name:e.w3c.name,percent:Number(100*e.value).toFixed(1)+"%"}}));return t.sort((function(e,t){return t.percent.substr(0,t.percent.length-1)-e.percent.substr(0,e.percent.length-1)})),t},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmitDetect=function(t){t.target.parentNode.firstChild.value="",P.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e.state.input).then((function(t){return e.setState({colors:e.abstractColorInfo(t)})})).then(e.setState((function(){return{input:"",link:e.state.input,linkstatus:"true"}}))).then((function(){e.updateEntries()})).catch((function(){e.setState({linkstatus:"invalidUrl"})}))},e.onUpload=function(t){var a=new FileReader;a.onload=function(t){P.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",t.target.result.split("base64,")[1]).then((function(t){return e.setState({colors:e.abstractColorInfo(t)})})).then(e.setState((function(){return{link:t.target.result,linkstatus:"true"}}))).then((function(){e.updateEntries()})).catch((function(){return e.setState({linkstatus:"invalidFile"})}))};var n=t.target.files[0];n&&a.readAsDataURL(n)},e.state={input:"",link:"",colors:[{hex:"",name:"",percent:""}],linkstatus:"",route:"home",isSignedIn:!1,user:{id:-1,name:"",entries:0}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p.a,{className:"particles",params:g}),s.a.createElement(E,{onRouteChange:this.onRouteChange,onSigninStatusChange:this.onSigninStatusChange,isSignedIn:this.state.isSignedIn,changeToInitialStatus:this.changeToInitialStatus}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(x,null),s.a.createElement(j,{isSignedIn:this.state.isSignedIn,name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(O,{onInputChange:this.onInputChange,onSubmitDetect:this.onSubmitDetect,onUpload:this.onUpload}),s.a.createElement(F,{link:this.state.link,linkstatus:this.state.linkstatus,colors:this.state.colors})):"signin"===this.state.route?s.a.createElement(v,{onRouteChange:this.onRouteChange,onSigninStatusChange:this.onSigninStatusChange,loadUser:this.loadUser,changeToInitialStatus:this.changeToInitialStatus,server:_}):"register"===this.state.route?s.a.createElement(S,{onRouteChange:this.onRouteChange,server:_}):s.a.createElement("div",null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);r.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3aaae1d5.chunk.js.map