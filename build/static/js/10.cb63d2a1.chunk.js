/*! For license information please see 10.cb63d2a1.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[10],{1127:function(e,t){},1600:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(0),o=a.n(r),i=a(1017),l=a(1067),c=a(1072),u=a(1019),s=a(317),m=a(36),f=a(43),d=a(3),p=a(1068),h=a(1584),v=a(1050),g=a(1103),y=a.n(g),b=["className"],E=Object(i.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var w=function(e){var t=e.className,a=Object(m.a)(e,b),n=E();return o.a.createElement(p.a,Object.assign({className:Object(d.a)(n.root,t),container:!0,justify:"space-between",spacing:3},a),o.a.createElement(p.a,{item:!0},o.a.createElement(h.a,{separator:o.a.createElement(y.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(v.a,{variant:"body1",color:"inherit",to:"#",component:f.a},"Dashboard"),o.a.createElement(v.a,{variant:"body1",color:"inherit",to:"#",component:f.a},"Management"),o.a.createElement(u.a,{variant:"body1",color:"textPrimary"},"Account")),o.a.createElement(u.a,{variant:"h3",color:"textPrimary"},"Setting"),o.a.createElement(c.a,{mt:2})))},x=a(79),N=a(180),j=a(323),O=a.n(j),k=a(1172),S=a(1055),L=a(1064),P=a(1596),C=a(1592),T=a(1062),W=a(1063),A=a(1033),B=a(1051),I=a(1175),_=a(1176),G=a(1177),F=a(1178),U=a(1179),q=a(146),D=a(1128),K=a(1131),M=a(1593),z=a(1594),H=a(305),V=a(1582),Z=a.n(V),J=a(1181),R=a.n(J),Y=a(179),Q=a(591),X=a.n(Q),$=["children","value","index"],ee=["className","admin","staff","updateStaff","deleteStaff"];function te(){te=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,a){return e[t]=a}}function c(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new N(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=E(i,a);if(l){if(l===s)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var s={};function m(){}function f(){}function d(){}var p={};l(p,r,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&a.call(v,r)&&(p=v);var g=d.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=d,l(g,"constructor",d),l(d,"constructor",f),f.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new b(c(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),l(g,i,"Generator"),l(g,r,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var ae=Object(i.a)((function(e){return{root:{},queryField:{width:500},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{height:42,width:42,marginRight:e.spacing(1)},mailColor:{textDecoration:"none",color:e.palette.text.primary},appBar:{flexGrow:1,backgroundColor:e.palette.background.paper},input:{display:"none"}}}));function ne(e){var t=e.children,a=e.value,n=e.index,r=Object(m.a)(e,$);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),a===n&&o.a.createElement(c.a,{p:3},o.a.createElement(u.a,null,t)))}function re(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var oe={region:"eu-west-2",accessKeyId:"AKIAZOQGZVMVLILZ5JHS",secretAccessKey:"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",signatureVersion:"v4"};function ie(e){var t=e.className,a=e.admin,i=e.staff,l=e.updateStaff,s=e.deleteStaff,f=Object(m.a)(e,ee),p=ae(),h=o.a.useState(0),v=Object(n.a)(h,2),g=v[0],y=v[1],b=o.a.useState(null),E=Object(n.a)(b,2),w=E[0],j=E[1],V=Object(N.b)().enqueueSnackbar,J=Object(r.useState)(null),Q=Object(n.a)(J,2),$=Q[0],ie=Q[1],le=Object(Y.promisify)(X.a.randomBytes),ce=new R.a.S3(oe),ue=function(){var e=Object(x.a)(te().mark((function e(){var t,a,n,r,o;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!$){e.next=15;break}return e.next=3,le(16);case 3:return t=e.sent,a=t.toString("hex"),n={Bucket:"myfyapbucket",Key:a,Expires:60},e.next=8,ce.getSignedUrlPromise("putObject",n);case 8:return r=e.sent,e.next=11,fetch(r,{method:"PUT",headers:{"Content-Type":"multipart/form-data"},body:$});case 11:o=r.split("?")[0],H.a.generateAccount({profilePicture:o}).then((function(e){j(e.data),l()})).catch((function(e){console.log(e)})),e.next=16;break;case 15:V("Kindly Select a Profile Picture for the account",{variant:"error"});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(k.a,Object.assign({className:Object(d.a)(p.root,t)},f),o.a.createElement(S.a,null),o.a.createElement(c.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},o.a.createElement(c.a,{flexGrow:1})),o.a.createElement(O.a,null,o.a.createElement(c.a,{className:p.appBar,minWidth:700},o.a.createElement(L.a,{position:"static"},o.a.createElement(P.a,{value:g,onChange:function(e,t){ie(null),y(t)},"aria-label":"simple tabs example"},o.a.createElement(C.a,Object.assign({label:"Admin Info"},re(0))),o.a.createElement(C.a,Object.assign({label:"Generate Account"},re(1))),o.a.createElement(C.a,Object.assign({label:"Staff Accounts"},re(2))))),o.a.createElement(ne,{value:g,index:0},o.a.createElement(K.a,{initialValues:{username:null===a||void 0===a?void 0:a.username,email:null===a||void 0===a?void 0:a.email,firstName:null===a||void 0===a?void 0:a.firstName,lastName:null===a||void 0===a?void 0:a.lastName,password:""},validationSchema:D.b().shape({username:D.c().required(),email:D.c().required(),firstName:D.c().required(),lastName:D.c().required()}),onSubmit:function(){var e=Object(x.a)(te().mark((function e(t,n){var r,o,i,l,c,u,s,m;return te().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setErrors,n.setStatus,r=n.setSubmitting,e.prev=1,r(!0),o="",!$){e.next=20;break}if(""===(i=a.profilePicture.split("/").pop())){e.next=9;break}return e.next=9,ce.deleteObject({Bucket:"myfyapbucket",Key:i}).promise();case 9:return e.next=11,le(16);case 11:return l=e.sent,c=l.toString("hex"),u={Bucket:"myfyapbucket",Key:c,Expires:60},e.next=16,ce.getSignedUrlPromise("putObject",u);case 16:return s=e.sent,e.next=19,fetch(s,{method:"PUT",headers:{"Content-Type":"multipart/form-data"},body:$});case 19:o=s.split("?")[0];case 20:m={adminId:a.id,username:t.username,email:t.email,firstName:t.firstName,lastName:t.lastName,password:t.password,profilePicture:o},t.username!==a.username||t.email!==a.email||t.firstName!==a.firstName||t.lastName!==a.lastName||""!==t.password||$?H.a.updateAdmin(m).then((function(e){V("Profile Updated Successfully",{variant:"success"}),window.location.reload()})).catch((function(e){console.log(e),V("Error While Updating Profile",{variant:"error"})})):V("No Change Detected!",{variant:"error"}),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),console.log(e.t0),r(!1);case 28:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,r=e.handleBlur,i=e.handleChange,l=e.handleSubmit,u=(e.isSubmitting,e.touched),s=e.values;return o.a.createElement("form",Object.assign({onSubmit:l,className:Object(d.a)(p.root,t)},f),o.a.createElement(c.a,{minWidth:600,display:"flex"},o.a.createElement(c.a,{minWidth:600,p:2},o.a.createElement("input",{accept:"image/*",onChange:function(e){ie(e.target.files[0])},className:p.input,id:"networkIcon",type:"file"}),o.a.createElement("label",{htmlFor:"networkIcon"},o.a.createElement(T.a,{color:"primary","aria-label":"upload picture",component:"span"},o.a.createElement(Z.a,null)),$&&$.name||a.profilePicture))),o.a.createElement(c.a,{minWidth:400,display:"flex"},o.a.createElement(c.a,{minWidth:400,p:2},o.a.createElement(W.a,{error:Boolean(u.username&&n.username),helperText:u.username&&n.username,fullWidth:!0,label:"Username",name:"username",onChange:i,onBlur:r,value:s.username,variant:"outlined"})),o.a.createElement(c.a,{minWidth:400,p:2},o.a.createElement(W.a,{error:Boolean(u.email&&n.email),helperText:u.email&&n.email,fullWidth:!0,label:"Email",name:"email",onChange:i,onBlur:r,value:s.email,variant:"outlined"}))),o.a.createElement(c.a,{minWidth:400,display:"flex"},o.a.createElement(c.a,{minWidth:400,p:2},o.a.createElement(W.a,{error:Boolean(u.firstName&&n.firstName),helperText:u.firstName&&n.firstName,fullWidth:!0,label:"First Name",name:"firstName",onChange:i,onBlur:r,value:s.firstName,variant:"outlined"})),o.a.createElement(c.a,{minWidth:400,p:2},o.a.createElement(W.a,{error:Boolean(u.lastName&&n.lastName),helperText:u.lastName&&n.lastName,fullWidth:!0,label:"Last Name",name:"lastName",onChange:i,onBlur:r,value:s.lastName,variant:"outlined"}))),o.a.createElement(c.a,{minWidth:400,display:"flex"},o.a.createElement(c.a,{minWidth:400,p:2},o.a.createElement(W.a,{error:Boolean(u.password&&n.password),helperText:u.password&&n.password,fullWidth:!0,label:"Password",name:"password",onChange:i,onBlur:r,value:s.password,variant:"outlined",placeholder:"Your New Password"}))),n.submit&&o.a.createElement(c.a,{mt:3},o.a.createElement(A.a,{error:!0},n.submit)),o.a.createElement(c.a,{p:2},o.a.createElement(B.a,{color:"secondary",variant:"contained",type:"submit"},"Update")))}))),o.a.createElement(ne,{value:g,index:1},w&&o.a.createElement(c.a,{p:2},o.a.createElement(u.a,null,"Account Type: ",w.role),o.a.createElement(u.a,null,"Email: ",w.email),o.a.createElement(u.a,null,"password: ",w.orignalPass),o.a.createElement(c.a,{p:2},o.a.createElement(B.a,{color:"secondary",variant:"outlined",onClick:function(){navigator.clipboard.writeText("".concat(w.email," ").concat(w.orignalPass)),V("Copied To Clipboard",{variant:"success"})}},"Copy"))),o.a.createElement(c.a,{minWidth:600,display:"flex"},o.a.createElement(c.a,{minWidth:600,p:2},o.a.createElement("input",{accept:"image/*",onChange:function(e){ie(e.target.files[0])},className:p.input,id:"networkIcon",type:"file"}),o.a.createElement("label",{htmlFor:"networkIcon"},o.a.createElement(T.a,{color:"primary","aria-label":"upload picture",component:"span"},o.a.createElement(Z.a,null)),$&&$.name))),o.a.createElement(B.a,{color:"secondary",variant:"contained",onClick:ue},"Generate Account")),o.a.createElement(ne,{value:g,index:2},o.a.createElement(I.a,{className:p.table,"aria-label":"simple table"},o.a.createElement(_.a,null,o.a.createElement(G.a,null,o.a.createElement(F.a,null,"Email"),o.a.createElement(F.a,null,"Password"),o.a.createElement(F.a,null,"Account Type"),o.a.createElement(F.a,null,"Copy"),o.a.createElement(F.a,null,"Delete"))),o.a.createElement(U.a,null,i.map((function(e){return o.a.createElement(G.a,{hover:!0,key:null===e||void 0===e?void 0:e._id},o.a.createElement(F.a,null,null===e||void 0===e?void 0:e.email),o.a.createElement(F.a,null,null===e||void 0===e?void 0:e.orignalPass),o.a.createElement(F.a,null,null===e||void 0===e?void 0:e.role),o.a.createElement(F.a,null,o.a.createElement(T.a,{onClick:function(){navigator.clipboard.writeText("".concat(null===e||void 0===e?void 0:e.email," ").concat(null===e||void 0===e?void 0:e.orignalPass)),V("Copied To Clipboard",{variant:"success"})}},o.a.createElement(q.a,{fontSize:"small"},o.a.createElement(M.a,null)))),o.a.createElement(F.a,null,o.a.createElement(T.a,{onClick:function(){s(null===e||void 0===e?void 0:e._id)}},o.a.createElement(q.a,{fontSize:"small"},o.a.createElement(z.a,null)))))}))))))))}ie.defaultProps={customers:[]};var le=ie,ce=a(54),ue=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},textDiv:{color:e.palette.text.primary}}}));t.default=function(){var e=ue(),t=Object(r.useState)(null),a=Object(n.a)(t,2),i=a[0],m=a[1],f=Object(N.b)().enqueueSnackbar,d=Object(ce.c)((function(e){return e.account.user}));return Object(r.useEffect)((function(){"Admin"===d.role&&H.a.getStaff().then((function(e){m(e.data)}))}),[d]),o.a.createElement(s.a,{className:e.root,title:"MI - Settings"},o.a.createElement(l.a,{maxWidth:!1},o.a.createElement(w,null),"Admin"===d.role?o.a.createElement(c.a,null,d&&i&&o.a.createElement(c.a,{mt:3},o.a.createElement(le,{admin:d,updateStaff:function(){H.a.getStaff().then((function(e){m(e.data)}))},staff:i,deleteStaff:function(e){H.a.deleteStaff({staffId:e}).then((function(e){f("Deleted Successfully",{variant:"success"}),m(e.data)})).catch((function(e){console.log(e)}))}}))):o.a.createElement(c.a,{display:"flex",justifyContent:"center",alignItems:"center",minWidth:700,minHeight:700,mt:3},o.a.createElement(u.a,{className:e.textDiv,variant:"h3"},"Staff Account do not have access to this page"))))}}}]);
//# sourceMappingURL=10.cb63d2a1.chunk.js.map