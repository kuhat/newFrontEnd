(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[412],{5966:function(z,Z,e){"use strict";var h=e(22122),g=e(81253),i=e(67294),r=e(12536),A=["fieldProps","proFieldProps"],B=["fieldProps","proFieldProps"],M="text",I=function(D){var b=D.fieldProps,W=D.proFieldProps,l=(0,g.Z)(D,A);return i.createElement(r.Z,(0,h.Z)({mode:"edit",valueType:M,fieldProps:b,filedConfig:{valueType:M},proFieldProps:W},l))},y=function(D){var b=D.fieldProps,W=D.proFieldProps,l=(0,g.Z)(D,B);return i.createElement(r.Z,(0,h.Z)({mode:"edit",valueType:"password",fieldProps:b,proFieldProps:W,filedConfig:{valueType:M}},l))},O=I;O.Password=y,O.displayName="ProFormComponent",Z.Z=O},15196:function(z,Z,e){"use strict";e.d(Z,{UW:function(){return U},ZP:function(){return _}});var h=e(9715),g=e(41003),i=e(22122),r=e(67294),A=e(49111),B=e(19650),M=e(96156),I=e(84305),y=e(39559),O=e(28481),C=e(28991),D=e(8812),b=e(66758),W=e(63891),l=e(56725),a=e(53621),n=e(94184),o=e.n(n),u=r.forwardRef(function(p,E){var f=r.useContext(b.Z),d=f.groupProps,c=(0,C.Z)((0,C.Z)({},d),p),P=c.children,x=c.collapsible,j=c.defaultCollapsed,L=c.style,K=c.labelLayout,G=c.title,m=G===void 0?p.label:G,J=c.tooltip,X=c.align,ae=X===void 0?"start":X,se=c.direction,k=c.size,ie=k===void 0?32:k,le=c.titleStyle,q=c.titleRender,$=c.spaceProps,V=c.extra,ee=c.autoFocus,ue=(0,l.Z)(function(){return j||!1},{value:p.collapsed,onChange:p.onCollapse}),te=(0,O.Z)(ue,2),Y=te[0],de=te[1],ce=(0,r.useContext)(y.ZP.ConfigContext),_e=ce.getPrefixCls,S=_e("pro-form-group"),re=x&&r.createElement(D.Z,{style:{marginRight:8},rotate:Y?void 0:90}),ne=r.createElement(a.Z,{label:re?r.createElement("div",null,re,m):m,tooltip:J}),oe=q?q(ne,p):ne,N=[],pe=r.Children.toArray(P).map(function(T,H){var Q;return r.isValidElement(T)&&(T==null||(Q=T.props)===null||Q===void 0?void 0:Q.hidden)?(N.push(T),null):H===0&&r.isValidElement(T)&&ee?r.cloneElement(T,(0,C.Z)((0,C.Z)({},T.props),{},{autoFocus:ee})):T});return r.createElement("div",{className:o()(S,(0,M.Z)({},"".concat(S,"-twoLine"),K==="twoLine")),style:L,ref:E},N.length>0&&r.createElement("div",{style:{display:"none"}},N),(m||J||V)&&r.createElement("div",{className:"".concat(S,"-title"),style:le,onClick:function(){de(!Y)}},V?r.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},oe,r.createElement("span",{onClick:function(H){return H.stopPropagation()}},V)):oe),x&&Y?null:r.createElement(B.Z,(0,i.Z)({},$,{className:"".concat(S,"-container"),size:ie,align:ae,direction:se,style:(0,C.Z)({rowGap:0},$==null?void 0:$.style)}),pe))});u.displayName="ProForm-Group";var s=u,t=e(60758),R=e(82785);function v(p){return r.createElement(t.Z,(0,i.Z)({layout:"vertical",submitter:{render:function(f,d){return d.reverse()}},contentRender:function(f,d){return r.createElement(r.Fragment,null,f,d)}},p))}v.Group=s,v.useForm=g.Z.useForm,v.Item=R.Z;var F=v,w=e(69989),U=F.Group,_=F},32185:function(z,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return R}});var h=e(34792),g=e(48086),i=e(3182),r=e(69610),A=e(54941),B=e(81306),M=e(72936),I=e(94043),y=e.n(I),O=e(67294),C=e(15196),D=e(5966),b=e(5234),W=e.n(b),l=e(72757),a=e.n(l),n=e(11021),o=e(39265),u=e(78009),s=e(85224),t=e(85893),R=function(v){(0,B.Z)(w,v);var F=(0,M.Z)(w);function w(U){var _;return(0,r.Z)(this,w),_=F.call(this,U),_.state={id:_.props.location.query.id,courseDetail:{},isDisabled:_.props.location.query.id},_.getExercise=(0,i.Z)(y().mark(function p(){var E,f,d;return y().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return E=_.state.id,f=_.props.location.query.topic_title,P.next=4,(0,n.Sp)(f,E);case 4:d=P.sent,d.error_code==200?_.setState({courseDetail:d.data}):g.default.error(d.msg);case 6:case"end":return P.stop()}},p)})),_.save=function(){var p=(0,i.Z)(y().mark(function E(f){var d,c,P,x,j,L,K;return y().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(d=_.state.courseDetail,console.log(d.content,888),d.title){m.next=6;break}g.default.warning("please input the course title"),m.next=22;break;case 6:if(d.content){m.next=10;break}g.default.warning("please input the course content"),m.next=22;break;case 10:if(c=_.props.location.query,P=c.topic_title,x=c.id,j=1,!x){m.next=18;break}return m.next=15,(0,n.tu)(x,P,f.title,d.content,j);case 15:L=m.sent,m.next=21;break;case 18:return m.next=20,(0,n.xH)(P,f.title,d.content,j);case 20:L=m.sent;case 21:L.error_code==200?(g.default.success("Save success"),K=L.data.id,_.props.history.push("/courseAdmin/courseDisplay?topic_title=".concat(P,"&id=").concat(K))):g.default.error("Save error! "+L.msg);case 22:case"end":return m.stop()}},E)}));return function(E){return p.apply(this,arguments)}}(),_}return(0,A.Z)(w,[{key:"componentDidMount",value:function(){this.props.location.query.id&&this.getExercise()}},{key:"render",value:function(){var _=this,p=this.state.courseDetail;return console.log(p),(0,t.jsx)(u.ZP,{ghost:!0,onBack:function(){return _.props.history.go(-1)},header:{title:p.id?"Edit Course":"Add Course"},children:(0,t.jsx)(o.ZP,{children:(0,t.jsxs)(C.ZP,{submitter:{render:function(f,d){return(0,t.jsx)(s.Z,{children:d})},searchConfig:{submitText:"Submit"},resetButtonProps:{style:{display:"none"}}},onFinish:this.save,children:[(0,t.jsx)(D.Z,{width:"md",name:"title",label:"Course Title",placeholder:"input course title here",value:p.title,onChange:function(f){p.title=f.target.value,_.setState({courseDetail:p})}}),(0,t.jsx)(C.ZP.Item,{name:"content",label:"Course Content",value:p.content,children:(0,t.jsx)(l.CKEditor,{editor:W(),data:p.content,config:{toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","indent","outdent","|","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"],shouldNotGroupWhenFull:!1},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},ckfinder:{uploadUrl:"\u3010\u670D\u52A1\u5668\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3011"}},onChange:function(f,d){var c=_.state.courseDetail,P=d.getData();c.content=P,_.setState({courseDetail:c})},onError:function(f){var d=f.willEditorRestart;d&&_.editor.ui.view.toolbar.element.remove()}})})]})})})}}]),w}(O.Component)},11021:function(z,Z,e){"use strict";e.d(Z,{D0:function(){return A},wA:function(){return B},tu:function(){return M},rq:function(){return I},xH:function(){return y},G$:function(){return O},Sp:function(){return C},A:function(){return D},BK:function(){return b},BW:function(){return W}});var h=e(3182),g=e(94043),i=e.n(g),r=e(21010),A=function(){var l=(0,h.Z)(i().mark(function a(n){var o;return i().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o="/server/V1/course/topicsByTeacher/?teacher_id=".concat(n),s.abrupt("return",(0,r.WY)(o));case 2:case"end":return s.stop()}},a)}));return function(n){return l.apply(this,arguments)}}(),B=function(){var l=(0,h.Z)(i().mark(function a(n,o){var u;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u="/server/V1/course/edit/",t.abrupt("return",(0,r.WY)(u,{method:"post",data:{request_entity:"Topic",content:{topic_id:n,topic_info:o}}}));case 2:case"end":return t.stop()}},a)}));return function(n,o){return l.apply(this,arguments)}}(),M=function(){var l=(0,h.Z)(i().mark(function a(n,o,u,s,t){var R;return i().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return R="/server/V1/course/edit/",F.abrupt("return",(0,r.WY)(R,{method:"post",data:{request_entity:"Course",content:{id:n,related_topic:o,title:u,content:s,teacher_id:t}}}));case 2:case"end":return F.stop()}},a)}));return function(n,o,u,s,t){return l.apply(this,arguments)}}(),I=function(){var l=(0,h.Z)(i().mark(function a(n,o,u,s){var t;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t="/server/V1/course/create/",v.abrupt("return",(0,r.WY)(t,{method:"post",data:{request_entity:"Topic",content:{topic_title:n,topic_content:o,topic_img:u,teacher_id:s}}}));case 2:case"end":return v.stop()}},a)}));return function(n,o,u,s){return l.apply(this,arguments)}}(),y=function(){var l=(0,h.Z)(i().mark(function a(n,o,u,s){var t;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return t="/server/V1/course/create/",v.abrupt("return",(0,r.WY)(t,{method:"post",data:{request_entity:"Course",content:{related_topic:n,title:o,content:u,teacher_id:s}}}));case 2:case"end":return v.stop()}},a)}));return function(n,o,u,s){return l.apply(this,arguments)}}(),O=function(){var l=(0,h.Z)(i().mark(function a(n){var o;return i().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o="/server/V1/course/courses/".concat(n,"/"),s.abrupt("return",(0,r.WY)(o));case 2:case"end":return s.stop()}},a)}));return function(n){return l.apply(this,arguments)}}(),C=function(){var l=(0,h.Z)(i().mark(function a(n,o){var u;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u="/server/V1/course/courseDetail/".concat(n,"/").concat(o,"/"),t.abrupt("return",(0,r.WY)(u));case 2:case"end":return t.stop()}},a)}));return function(n,o){return l.apply(this,arguments)}}(),D=function(){var l=(0,h.Z)(i().mark(function a(n,o){var u;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u="/server/V1/course/delete/",t.abrupt("return",(0,r.WY)(u,{method:"post",data:{request_entity:"Course",related_topic:n,content:o}}));case 2:case"end":return t.stop()}},a)}));return function(n,o){return l.apply(this,arguments)}}(),b=function(){var l=(0,h.Z)(i().mark(function a(n){var o;return i().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return o="/server/V1/course/delete/",s.abrupt("return",(0,r.WY)(o,{method:"post",data:{request_entity:"Topic",content:n}}));case 2:case"end":return s.stop()}},a)}));return function(n){return l.apply(this,arguments)}}(),W=function(){var l=(0,h.Z)(i().mark(function a(n,o){var u;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u="/server/V1/course/sort/",t.abrupt("return",(0,r.WY)(u,{method:"post",data:{request_entity:"Course",related_topic:n,content:o}}));case 2:case"end":return t.stop()}},a)}));return function(n,o){return l.apply(this,arguments)}}()},63891:function(){},69989:function(){}}]);
