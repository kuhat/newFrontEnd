(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[193],{52953:function(){},44887:function(){},16513:function(ie,N,e){"use strict";e.r(N),e.d(N,{default:function(){return pe}});var f=e(98858),j=e(4914),d=e(62350),n=e(75443),Y=e(34792),U=e(48086),J=e(57663),p=e(71577),F=e(3182),P=e(69610),W=e(54941),H=e(81306),V=e(72936),w=e(402),Q=e(72031),v=e(94043),a=e.n(v),s=e(67294),_=e(5234),i=e.n(_),t=e(72757),l=e.n(t),C=e(11021),u=e(65278),E=e(57895),M=e(21010),r=e(29656),o=e(4631),c=e.n(o),O=e(71707),A=e.n(O),y=e(48991),h=e.n(y),x=e(20017),S=e.n(x),b=e(88657),I=e.n(b),L=e(89700),X=e.n(L),$=e(35688),B=e.n($),k=e(9898),ne=e.n(k),q=e(82801),K=e.n(q),D=e(93411),m=e.n(D),g=e(99762),re=e.n(g),oe=e(36629),se=e.n(oe),ee=e(5321),Pe=e.n(ee),me=e(7999),_e=e.n(me),ae=e(960),ye=e.n(ae),Oe=e(88386),Te=e.n(Oe),Ce=e(69109),Be=e.n(Ce),T=e(85893),Me=Q.Z.Title,pe=function(he){(0,H.Z)(ve,he);var De=(0,V.Z)(ve);function ve(){var G;(0,P.Z)(this,ve);for(var te=arguments.length,de=new Array(te),R=0;R<te;R++)de[R]=arguments[R];return G=De.call.apply(De,[this].concat(de)),G.state={topic_title:G.props.location.query.topic_title,id:G.props.location.query.id,courseDetail:{}},G.getExercise=(0,F.Z)(a().mark(function ue(){var Ee,z,Z,ce;return a().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return Ee=G.state,z=Ee.topic_title,Z=Ee.id,fe.next=3,(0,C.Sp)(z,Z);case 3:ce=fe.sent,ce.error_code==200&&G.setState({courseDetail:ce.data});case 5:case"end":return fe.stop()}},ue)})),G}return(0,W.Z)(ve,[{key:"componentDidMount",value:function(){this.props.location.query.id&&this.getExercise()}},{key:"render",value:function(){var te=this,de=this.state,R=de.courseDetail,ue=de.topic_title,Ee=de.id;return(0,T.jsx)("div",{style:{background:"#F5F7FA"},children:(0,T.jsxs)(u.ZP,{ghost:!0,onBack:function(){return te.props.history.push("/courseAdmin/courseList?topic_title="+ue)},header:{title:(0,T.jsx)(Me,{level:2,children:R.title}),breadcrumb:{},extra:[(0,T.jsx)(p.Z,{onClick:function(){return te.props.history.push("/courseAdmin/courseManager?topic_title=".concat(ue,"&id=").concat(Ee))},type:"primary",children:"EDIT"},"1"),(0,T.jsx)(n.Z,{title:(0,T.jsx)(M._H,{id:"pages.des.del"}),onConfirm:(0,F.Z)(a().mark(function z(){var Z;return a().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,(0,C.A)(te.props.location.query.topic_title,[Ee]);case 2:Z=le.sent,Z.error_code==200?U.default.success("Delete success"):U.default.error("Delete error"),te.props.history.push("/courseAdmin/courseList?topic_title="+ue);case 5:case"end":return le.stop()}},z)})),okText:"Yes",cancelText:"No",children:(0,T.jsx)(p.Z,{type:"primary",danger:!0,children:"DELETE"},"2")})]},content:(0,T.jsxs)(j.Z,{column:3,style:{marginBottom:-12,marginLeft:15},children:[(0,T.jsx)(j.Z.Item,{label:(0,T.jsx)(M._H,{id:"pages.common.relatedTopic"}),children:ue}),(0,T.jsx)(j.Z.Item,{label:(0,T.jsx)(M._H,{id:"pages.common.updateDate"}),children:R.update_date}),(0,T.jsx)(j.Z.Item,{label:(0,T.jsx)(M._H,{id:"pages.common.views"}),children:R.views})]}),children:[(0,T.jsx)(E.ZP,{ghost:!0,children:(0,T.jsx)(t.CKEditor,{editor:i(),disabled:!0,data:R.content,config:{toolbar:{items:[]}},onError:function(Z){var ce=Z.willEditorRestart;ce&&te.editor.ui.view.toolbar.element.remove()}})}),(0,T.jsx)(E.ZP,{title:(0,T.jsx)(M._H,{id:"pages.courseManager.code"}),style:{minHeight:100},children:(0,T.jsx)(r.fk,{className:"editor",options:{mode:"python",readOnly:!0,autofocus:!0,styleActiveLine:!0,lineNumbers:!0,smartIndent:!0,lineWrapping:!0,foldGutter:!0,placeholder:(0,M.Kd)()=="zh-CN"?"\u4EE3\u7801\u8F93\u5165\u533A...":"code goes here",gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],matchBrackets:!0,autoCloseBrackets:!0,scrollbarStyle:"simple",cursorScrollMargin:5,extraKeys:{Ctrl:"autocomplete","Ctrl-S":function(Z){Z.codeSave(Z)},"Ctrl-Z":function(Z){Z.undo()},F8:function(Z){Z.redo()}}},value:R==null?void 0:R.code,onBeforeChange:function(Z,ce,le){R.code=le,te.setState({courseDetail:R})}})}),(0,T.jsx)(E.ZP,{title:(0,T.jsx)(M._H,{id:"pages.common.answer"}),style:{minHeight:100},children:R==null?void 0:R.answer}),(0,T.jsx)(E.ZP,{title:(0,T.jsx)(M._H,{id:"pages.common.hint"}),style:{minHeight:100},children:R==null?void 0:R.hint})]})})}}]),ve}(s.Component)},11021:function(ie,N,e){"use strict";e.d(N,{D0:function(){return Y},wA:function(){return U},tu:function(){return J},rq:function(){return p},xH:function(){return F},G$:function(){return P},Sp:function(){return W},A:function(){return H},BK:function(){return V},BW:function(){return w},EI:function(){return Q}});var f=e(3182),j=e(94043),d=e.n(j),n=e(21010),Y=function(){var v=(0,f.Z)(d().mark(function a(s){var _;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(9999),console.log(s,9999),_="/server/V1/course/topicsByTeacher/?teacher_id=".concat(s),t.abrupt("return",(0,n.WY)(_));case 4:case"end":return t.stop()}},a)}));return function(s){return v.apply(this,arguments)}}(),U=function(){var v=(0,f.Z)(d().mark(function a(s,_){var i;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i="/server/V1/course/edit/",l.abrupt("return",(0,n.WY)(i,{method:"post",data:{request_entity:"Topic",content:{topic_id:s,topic_info:_}}}));case 2:case"end":return l.stop()}},a)}));return function(s,_){return v.apply(this,arguments)}}(),J=function(){var v=(0,f.Z)(d().mark(function a(s,_,i,t,l,C,u){var E;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return E="/server/V1/course/edit/",r.abrupt("return",(0,n.WY)(E,{method:"post",data:{request_entity:"Course",content:{id:s,related_topic:_,title:i,content:t,answer:l,hint:C,code:u}}}));case 2:case"end":return r.stop()}},a)}));return function(s,_,i,t,l,C,u){return v.apply(this,arguments)}}(),p=function(){var v=(0,f.Z)(d().mark(function a(s,_,i,t,l){var C;return d().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return C="/server/V1/course/create/",E.abrupt("return",(0,n.WY)(C,{method:"post",data:{request_entity:"Topic",content:{topic_title:s,topic_content:_,topic_description:i,topic_img:t,teacher_id:l}}}));case 2:case"end":return E.stop()}},a)}));return function(s,_,i,t,l){return v.apply(this,arguments)}}(),F=function(){var v=(0,f.Z)(d().mark(function a(s,_,i,t,l,C){var u;return d().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return u="/server/V1/course/create/",M.abrupt("return",(0,n.WY)(u,{method:"post",data:{request_entity:"Course",content:{related_topic:s,title:_,content:i,answer:t,hint:l,code:C}}}));case 2:case"end":return M.stop()}},a)}));return function(s,_,i,t,l,C){return v.apply(this,arguments)}}(),P=function(){var v=(0,f.Z)(d().mark(function a(s){var _;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return _="/server/V1/course/courses/".concat(s,"/"),t.abrupt("return",(0,n.WY)(_));case 2:case"end":return t.stop()}},a)}));return function(s){return v.apply(this,arguments)}}(),W=function(){var v=(0,f.Z)(d().mark(function a(s,_){var i;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i="/server/V1/course/courseDetail/".concat(s,"/").concat(_,"/"),l.abrupt("return",(0,n.WY)(i));case 2:case"end":return l.stop()}},a)}));return function(s,_){return v.apply(this,arguments)}}(),H=function(){var v=(0,f.Z)(d().mark(function a(s,_){var i;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i="/server/V1/course/delete/",l.abrupt("return",(0,n.WY)(i,{method:"post",data:{request_entity:"Course",related_topic:s,content:_}}));case 2:case"end":return l.stop()}},a)}));return function(s,_){return v.apply(this,arguments)}}(),V=function(){var v=(0,f.Z)(d().mark(function a(s){var _;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return _="/server/V1/course/delete/",t.abrupt("return",(0,n.WY)(_,{method:"post",data:{request_entity:"Topic",content:s}}));case 2:case"end":return t.stop()}},a)}));return function(s){return v.apply(this,arguments)}}(),w=function(){var v=(0,f.Z)(d().mark(function a(s,_){var i;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i="/server/V1/course/sort/",l.abrupt("return",(0,n.WY)(i,{method:"post",data:{request_entity:"Course",related_topic:s,content:_}}));case 2:case"end":return l.stop()}},a)}));return function(s,_){return v.apply(this,arguments)}}(),Q=function(){var v=(0,f.Z)(d().mark(function a(s,_){var i;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i="/server/V1/course/delete_img/",l.abrupt("return",(0,n.WY)(i,{method:"post",data:{request_entity:_,fname:s}}));case 2:case"end":return l.stop()}},a)}));return function(s,_){return v.apply(this,arguments)}}()},86743:function(ie,N,e){"use strict";var f=e(22122),j=e(28481),d=e(67294),n=e(30470),Y=e(71577),U=e(73839);function J(F){return!!(F&&!!F.then)}var p=function(P){var W=d.useRef(!1),H=d.useRef(),V=(0,n.Z)(!1),w=(0,j.Z)(V,2),Q=w[0],v=w[1];d.useEffect(function(){var C;if(P.autoFocus){var u=H.current;C=setTimeout(function(){return u.focus()})}return function(){C&&clearTimeout(C)}},[]);var a=function(u){var E=P.close;!J(u)||(v(!0),u.then(function(){v(!1,!0),E.apply(void 0,arguments),W.current=!1},function(M){console.error(M),v(!1,!0),W.current=!1}))},s=function(u){var E=P.actionFn,M=P.close;if(!W.current){if(W.current=!0,!E){M();return}var r;if(P.emitEvent){if(r=E(u),P.quitOnNullishReturnValue&&!J(r)){W.current=!1,M(u);return}}else if(E.length)r=E(M),W.current=!1;else if(r=E(),!r){M();return}a(r)}},_=P.type,i=P.children,t=P.prefixCls,l=P.buttonProps;return d.createElement(Y.Z,(0,f.Z)({},(0,U.n)(_),{onClick:s,loading:Q,prefixCls:t},l,{ref:H}),i)};N.Z=p},4914:function(ie,N,e){"use strict";e.d(N,{K:function(){return i},Z:function(){return M}});var f=e(96156),j=e(28481),d=e(90484),n=e(67294),Y=e(94184),U=e.n(Y),J=e(50344),p=e(24308),F=e(53124),P=e(22122);function W(r){return r!=null}var H=function(o){var c=o.itemPrefixCls,O=o.component,A=o.span,y=o.className,h=o.style,x=o.labelStyle,S=o.contentStyle,b=o.bordered,I=o.label,L=o.content,X=o.colon,$=O;if(b){var B;return n.createElement($,{className:U()((B={},(0,f.Z)(B,"".concat(c,"-item-label"),W(I)),(0,f.Z)(B,"".concat(c,"-item-content"),W(L)),B),y),style:h,colSpan:A},W(I)&&n.createElement("span",{style:x},I),W(L)&&n.createElement("span",{style:S},L))}return n.createElement($,{className:U()("".concat(c,"-item"),y),style:h,colSpan:A},n.createElement("div",{className:"".concat(c,"-item-container")},(I||I===0)&&n.createElement("span",{className:U()("".concat(c,"-item-label"),(0,f.Z)({},"".concat(c,"-item-no-colon"),!X)),style:x},I),(L||L===0)&&n.createElement("span",{className:U()("".concat(c,"-item-content")),style:S},L)))},V=H;function w(r,o,c){var O=o.colon,A=o.prefixCls,y=o.bordered,h=c.component,x=c.type,S=c.showLabel,b=c.showContent,I=c.labelStyle,L=c.contentStyle;return r.map(function(X,$){var B=X.props,k=B.label,ne=B.children,q=B.prefixCls,K=q===void 0?A:q,D=B.className,m=B.style,g=B.labelStyle,re=B.contentStyle,oe=B.span,se=oe===void 0?1:oe,ee=X.key;return typeof h=="string"?n.createElement(V,{key:"".concat(x,"-").concat(ee||$),className:D,style:m,labelStyle:(0,P.Z)((0,P.Z)({},I),g),contentStyle:(0,P.Z)((0,P.Z)({},L),re),span:se,colon:O,component:h,itemPrefixCls:K,bordered:y,label:S?k:null,content:b?ne:null}):[n.createElement(V,{key:"label-".concat(ee||$),className:D,style:(0,P.Z)((0,P.Z)((0,P.Z)({},I),m),g),span:1,colon:O,component:h[0],itemPrefixCls:K,bordered:y,label:k}),n.createElement(V,{key:"content-".concat(ee||$),className:D,style:(0,P.Z)((0,P.Z)((0,P.Z)({},L),m),re),span:se*2-1,component:h[1],itemPrefixCls:K,bordered:y,content:ne})]})}var Q=function(o){var c=n.useContext(i),O=o.prefixCls,A=o.vertical,y=o.row,h=o.index,x=o.bordered;return A?n.createElement(n.Fragment,null,n.createElement("tr",{key:"label-".concat(h),className:"".concat(O,"-row")},w(y,o,(0,P.Z)({component:"th",type:"label",showLabel:!0},c))),n.createElement("tr",{key:"content-".concat(h),className:"".concat(O,"-row")},w(y,o,(0,P.Z)({component:"td",type:"content",showContent:!0},c)))):n.createElement("tr",{key:h,className:"".concat(O,"-row")},w(y,o,(0,P.Z)({component:x?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},c)))},v=Q,a=function(o){var c=o.children;return c},s=a,_=e(96159),i=n.createContext({}),t={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function l(r,o){if(typeof r=="number")return r;if((0,d.Z)(r)==="object")for(var c=0;c<p.c4.length;c++){var O=p.c4[c];if(o[O]&&r[O]!==void 0)return r[O]||t[O]}return 3}function C(r,o,c){var O=r;return(o===void 0||o>c)&&(O=(0,_.Tm)(r,{span:c})),O}function u(r,o){var c=(0,J.Z)(r).filter(function(h){return h}),O=[],A=[],y=o;return c.forEach(function(h,x){var S,b=(S=h.props)===null||S===void 0?void 0:S.span,I=b||1;if(x===c.length-1){A.push(C(h,b,y)),O.push(A);return}I<y?(y-=I,A.push(h)):(A.push(C(h,I,y)),O.push(A),y=o,A=[])}),O}function E(r){var o,c=r.prefixCls,O=r.title,A=r.extra,y=r.column,h=y===void 0?t:y,x=r.colon,S=x===void 0?!0:x,b=r.bordered,I=r.layout,L=r.children,X=r.className,$=r.style,B=r.size,k=r.labelStyle,ne=r.contentStyle,q=n.useContext(F.E_),K=q.getPrefixCls,D=q.direction,m=K("descriptions",c),g=n.useState({}),re=(0,j.Z)(g,2),oe=re[0],se=re[1],ee=l(h,oe);n.useEffect(function(){var _e=p.ZP.subscribe(function(ae){(0,d.Z)(h)==="object"&&se(ae)});return function(){p.ZP.unsubscribe(_e)}},[]);var Pe=u(L,ee),me=n.useMemo(function(){return{labelStyle:k,contentStyle:ne}},[k,ne]);return n.createElement(i.Provider,{value:me},n.createElement("div",{className:U()(m,(o={},(0,f.Z)(o,"".concat(m,"-").concat(B),B&&B!=="default"),(0,f.Z)(o,"".concat(m,"-bordered"),!!b),(0,f.Z)(o,"".concat(m,"-rtl"),D==="rtl"),o),X),style:$},(O||A)&&n.createElement("div",{className:"".concat(m,"-header")},O&&n.createElement("div",{className:"".concat(m,"-title")},O),A&&n.createElement("div",{className:"".concat(m,"-extra")},A)),n.createElement("div",{className:"".concat(m,"-view")},n.createElement("table",null,n.createElement("tbody",null,Pe.map(function(_e,ae){return n.createElement(v,{key:ae,index:ae,colon:S,prefixCls:m,vertical:I==="vertical",bordered:b,row:_e})}))))))}E.Item=s;var M=E},98858:function(ie,N,e){"use strict";var f=e(38663),j=e.n(f),d=e(52953),n=e.n(d)},75443:function(ie,N,e){"use strict";var f=e(22122),j=e(28481),d=e(68855),n=e(94184),Y=e.n(n),U=e(21770),J=e(15105),p=e(67294),F=e(71577),P=e(73839),W=e(53124),H=e(42051),V=e(7734),w=e(55241),Q=e(86743),v=e(81643),a=e(96159),s=void 0,_=function(t,l){var C={};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&l.indexOf(u)<0&&(C[u]=t[u]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,u=Object.getOwnPropertySymbols(t);E<u.length;E++)l.indexOf(u[E])<0&&Object.prototype.propertyIsEnumerable.call(t,u[E])&&(C[u[E]]=t[u[E]]);return C},i=p.forwardRef(function(t,l){var C=p.useContext(W.E_),u=C.getPrefixCls,E=(0,U.Z)(!1,{value:t.visible,defaultValue:t.defaultVisible}),M=(0,j.Z)(E,2),r=M[0],o=M[1],c=function(D,m){var g;o(D,!0),(g=t.onVisibleChange)===null||g===void 0||g.call(t,D,m)},O=function(D){c(!1,D)},A=function(D){var m;return(m=t.onConfirm)===null||m===void 0?void 0:m.call(s,D)},y=function(D){var m;c(!1,D),(m=t.onCancel)===null||m===void 0||m.call(s,D)},h=function(D){D.keyCode===J.Z.ESC&&r&&c(!1,D)},x=function(D){var m=t.disabled;m||c(D)},S=function(D,m){var g=t.okButtonProps,re=t.cancelButtonProps,oe=t.title,se=t.cancelText,ee=t.okText,Pe=t.okType,me=t.icon,_e=t.showCancel,ae=_e===void 0?!0:_e;return p.createElement("div",{className:"".concat(D,"-inner-content")},p.createElement("div",{className:"".concat(D,"-message")},me,p.createElement("div",{className:"".concat(D,"-message-title")},(0,v.Z)(oe))),p.createElement("div",{className:"".concat(D,"-buttons")},ae&&p.createElement(F.Z,(0,f.Z)({onClick:y,size:"small"},re),se||m.cancelText),p.createElement(Q.Z,{buttonProps:(0,f.Z)((0,f.Z)({size:"small"},(0,P.n)(Pe)),g),actionFn:A,close:O,prefixCls:u("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},ee||m.okText)))},b=t.prefixCls,I=t.placement,L=t.children,X=t.overlayClassName,$=_(t,["prefixCls","placement","children","overlayClassName"]),B=u("popover",b),k=u("popconfirm",b),ne=Y()(k,X),q=p.createElement(H.Z,{componentName:"Popconfirm",defaultLocale:V.Z.Popconfirm},function(K){return S(B,K)});return p.createElement(w.Z,(0,f.Z)({},$,{prefixCls:B,placement:I,onVisibleChange:x,visible:r,_overlay:q,overlayClassName:ne,ref:l}),(0,a.Tm)(L,{onKeyDown:function(D){var m,g;p.isValidElement(L)&&((g=L==null?void 0:(m=L.props).onKeyDown)===null||g===void 0||g.call(m,D)),h(D)}}))});i.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:p.createElement(d.Z,null),disabled:!1},N.Z=i},62350:function(ie,N,e){"use strict";var f=e(38663),j=e.n(f),d=e(20136),n=e(57663),Y=e(44887),U=e.n(Y)}}]);
