(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[132],{8212:function(ne,Z,a){"use strict";a.d(Z,{Z:function(){return E}});var s=a(28991),v=a(67294),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},U=e,R=a(27029),y=function(D,T){return v.createElement(R.Z,(0,s.Z)((0,s.Z)({},D),{},{ref:T,icon:U}))};y.displayName="EditOutlined";var E=v.forwardRef(y)},39144:function(ne,Z,a){"use strict";a.d(Z,{Z:function(){return We}});var s=a(96156),v=a(22122),e=a(67294),U=a(94184),R=a.n(U),y=a(98423),E=a(65632),P=function(p,c){var O={};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&c.indexOf(o)<0&&(O[o]=p[o]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(p);d<o.length;d++)c.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(p,o[d])&&(O[o[d]]=p[o[d]]);return O},D=function(c){var O=c.prefixCls,o=c.className,d=c.hoverable,ce=d===void 0?!0:d,H=P(c,["prefixCls","className","hoverable"]);return e.createElement(E.C,null,function(X){var Y=X.getPrefixCls,se=Y("card",O),F=R()("".concat(se,"-grid"),o,(0,s.Z)({},"".concat(se,"-grid-hoverable"),ce));return e.createElement("div",(0,v.Z)({},H,{className:F}))})},T=D,w=function(p,c){var O={};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&c.indexOf(o)<0&&(O[o]=p[o]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(p);d<o.length;d++)c.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(p,o[d])&&(O[o[d]]=p[o[d]]);return O},g=function(c){return e.createElement(E.C,null,function(O){var o=O.getPrefixCls,d=c.prefixCls,ce=c.className,H=c.avatar,X=c.title,Y=c.description,se=w(c,["prefixCls","className","avatar","title","description"]),F=o("card",d),ze=R()("".concat(F,"-meta"),ce),Ce=H?e.createElement("div",{className:"".concat(F,"-meta-avatar")},H):null,Te=X?e.createElement("div",{className:"".concat(F,"-meta-title")},X):null,Ie=Y?e.createElement("div",{className:"".concat(F,"-meta-description")},Y):null,Ae=Te||Ie?e.createElement("div",{className:"".concat(F,"-meta-detail")},Te,Ie):null;return e.createElement("div",(0,v.Z)({},se,{className:ze}),Ce,Ae)})},h=g,j=a(58634),Q=a(71230),f=a(15746),de=a(97647),Re=function(p,c){var O={};for(var o in p)Object.prototype.hasOwnProperty.call(p,o)&&c.indexOf(o)<0&&(O[o]=p[o]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(p);d<o.length;d++)c.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(p,o[d])&&(O[o[d]]=p[o[d]]);return O};function fe(p){var c=p.map(function(O,o){return e.createElement("li",{style:{width:"".concat(100/p.length,"%")},key:"action-".concat(o)},e.createElement("span",null,O))});return c}var oe=function(c){var O,o,d=e.useContext(E.E_),ce=d.getPrefixCls,H=d.direction,X=e.useContext(de.Z),Y=function(we){var ve;(ve=c.onTabChange)===null||ve===void 0||ve.call(c,we)},se=function(){var we;return e.Children.forEach(c.children,function(ve){ve&&ve.type&&ve.type===T&&(we=!0)}),we},F=c.prefixCls,ze=c.className,Ce=c.extra,Te=c.headStyle,Ie=Te===void 0?{}:Te,Ae=c.bodyStyle,ke=Ae===void 0?{}:Ae,Ge=c.title,Ke=c.loading,Ye=c.bordered,qe=Ye===void 0?!0:Ye,st=c.size,He=c.type,et=c.cover,be=c.actions,Oe=c.tabList,Fe=c.children,Je=c.activeTabKey,ut=c.defaultActiveTabKey,dt=c.tabBarExtraContent,ft=c.hoverable,tt=c.tabProps,vt=tt===void 0?{}:tt,pt=Re(c,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),S=ce("card",F),at=ke.padding===0||ke.padding==="0px"?{padding:24}:void 0,q=e.createElement("div",{className:"".concat(S,"-loading-block")}),mt=e.createElement("div",{className:"".concat(S,"-loading-content"),style:at},e.createElement(Q.Z,{gutter:8},e.createElement(f.Z,{span:22},q)),e.createElement(Q.Z,{gutter:8},e.createElement(f.Z,{span:8},q),e.createElement(f.Z,{span:15},q)),e.createElement(Q.Z,{gutter:8},e.createElement(f.Z,{span:6},q),e.createElement(f.Z,{span:18},q)),e.createElement(Q.Z,{gutter:8},e.createElement(f.Z,{span:13},q),e.createElement(f.Z,{span:9},q)),e.createElement(Q.Z,{gutter:8},e.createElement(f.Z,{span:4},q),e.createElement(f.Z,{span:3},q),e.createElement(f.Z,{span:16},q))),Me=Je!==void 0,yt=(0,v.Z)((0,v.Z)({},vt),(O={},(0,s.Z)(O,Me?"activeKey":"defaultActiveKey",Me?Je:ut),(0,s.Z)(O,"tabBarExtraContent",dt),O)),nt,rt=Oe&&Oe.length?e.createElement(j.Z,(0,v.Z)({size:"large"},yt,{className:"".concat(S,"-head-tabs"),onChange:Y}),Oe.map(function(De){return e.createElement(j.Z.TabPane,{tab:De.tab,disabled:De.disabled,key:De.key})})):null;(Ge||Ce||rt)&&(nt=e.createElement("div",{className:"".concat(S,"-head"),style:Ie},e.createElement("div",{className:"".concat(S,"-head-wrapper")},Ge&&e.createElement("div",{className:"".concat(S,"-head-title")},Ge),Ce&&e.createElement("div",{className:"".concat(S,"-extra")},Ce)),rt));var Et=et?e.createElement("div",{className:"".concat(S,"-cover")},et):null,gt=e.createElement("div",{className:"".concat(S,"-body"),style:ke},Ke?mt:Fe),ht=be&&be.length?e.createElement("ul",{className:"".concat(S,"-actions")},fe(be)):null,Ct=(0,y.Z)(pt,["onTabChange"]),lt=st||X,bt=R()(S,(o={},(0,s.Z)(o,"".concat(S,"-loading"),Ke),(0,s.Z)(o,"".concat(S,"-bordered"),qe),(0,s.Z)(o,"".concat(S,"-hoverable"),ft),(0,s.Z)(o,"".concat(S,"-contain-grid"),se()),(0,s.Z)(o,"".concat(S,"-contain-tabs"),Oe&&Oe.length),(0,s.Z)(o,"".concat(S,"-").concat(lt),lt),(0,s.Z)(o,"".concat(S,"-type-").concat(He),!!He),(0,s.Z)(o,"".concat(S,"-rtl"),H==="rtl"),o),ze);return e.createElement("div",(0,v.Z)({},Ct,{className:bt}),nt,Et,gt,ht)};oe.Grid=T,oe.Meta=h;var We=oe},58024:function(ne,Z,a){"use strict";var s=a(38842),v=a.n(s),e=a(83940),U=a.n(e),R=a(18106),y=a(13062),E=a(89032)},27049:function(ne,Z,a){"use strict";var s=a(22122),v=a(96156),e=a(67294),U=a(94184),R=a.n(U),y=a(65632),E=function(D,T){var w={};for(var g in D)Object.prototype.hasOwnProperty.call(D,g)&&T.indexOf(g)<0&&(w[g]=D[g]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,g=Object.getOwnPropertySymbols(D);h<g.length;h++)T.indexOf(g[h])<0&&Object.prototype.propertyIsEnumerable.call(D,g[h])&&(w[g[h]]=D[g[h]]);return w},P=function(T){return e.createElement(y.C,null,function(w){var g,h=w.getPrefixCls,j=w.direction,Q=T.prefixCls,f=T.type,de=f===void 0?"horizontal":f,Re=T.orientation,fe=Re===void 0?"center":Re,oe=T.orientationMargin,We=T.className,p=T.children,c=T.dashed,O=T.plain,o=E(T,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),d=h("divider",Q),ce=fe.length>0?"-".concat(fe):fe,H=!!p,X=fe==="left"&&oe!=null,Y=fe==="right"&&oe!=null,se=R()(d,"".concat(d,"-").concat(de),(g={},(0,v.Z)(g,"".concat(d,"-with-text"),H),(0,v.Z)(g,"".concat(d,"-with-text").concat(ce),H),(0,v.Z)(g,"".concat(d,"-dashed"),!!c),(0,v.Z)(g,"".concat(d,"-plain"),!!O),(0,v.Z)(g,"".concat(d,"-rtl"),j==="rtl"),(0,v.Z)(g,"".concat(d,"-no-default-orientation-margin-left"),X),(0,v.Z)(g,"".concat(d,"-no-default-orientation-margin-right"),Y),g),We),F=(0,s.Z)((0,s.Z)({},X&&{marginLeft:oe}),Y&&{marginRight:oe});return e.createElement("div",(0,s.Z)({className:se},o,{role:"separator"}),p&&e.createElement("span",{className:"".concat(d,"-inner-text"),style:F},p))})};Z.Z=P},48736:function(ne,Z,a){"use strict";var s=a(38842),v=a.n(s),e=a(62563),U=a.n(e)},97272:function(ne,Z,a){"use strict";a.d(Z,{Z:function(){return zt}});var s=a(22122),v=a(96156),e=a(67294),U=a(94184),R=a.n(U),y=a(42550),E=a(65632),P=a(21687),D=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l},T=function(r,l){var n=r.prefixCls,i=r.component,C=i===void 0?"article":i,A=r.className,M=r["aria-label"],W=r.setContentRef,z=r.children,K=D(r,["prefixCls","component","className","aria-label","setContentRef","children"]),re=l;return W&&((0,P.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),re=(0,y.sQ)(l,W)),e.createElement(E.C,null,function(J){var ue=J.getPrefixCls,N=J.direction,le=C,k=ue("typography",n),_=R()(k,(0,v.Z)({},"".concat(k,"-rtl"),N==="rtl"),A);return e.createElement(le,(0,s.Z)({className:_,"aria-label":M,ref:re},K),z)})},w=e.forwardRef(T);w.displayName="Typography";var g=w,h=g,j=a(90484),Q=a(98423),f=a(28481),de=a(21770),Re=a(50344),fe=a(20640),oe=a.n(fe),We=a(8212),p=a(79508),c=a(99165),O=a(48717),o=a(42051),d=a(34952),ce=a(79370),H=a(69713),X=a(15105),Y=a(28991),se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},F=se,ze=a(27029),Ce=function(r,l){return e.createElement(ze.Z,(0,Y.Z)((0,Y.Z)({},r),{},{ref:l,icon:F}))};Ce.displayName="EnterOutlined";var Te=e.forwardRef(Ce),Ie=a(45839),Ae=a(96159),ke=function(r){var l=r.prefixCls,n=r["aria-label"],i=r.className,C=r.style,A=r.direction,M=r.maxLength,W=r.autoSize,z=W===void 0?!0:W,K=r.value,re=r.onSave,J=r.onCancel,ue=r.onEnd,N=r.enterIcon,le=N===void 0?e.createElement(Te,null):N,k=e.useRef(),_=e.useRef(!1),ee=e.useRef(),pe=e.useState(K),B=(0,f.Z)(pe,2),Le=B[0],me=B[1];e.useEffect(function(){me(K)},[K]),e.useEffect(function(){if(k.current&&k.current.resizableTextArea){var $=k.current.resizableTextArea.textArea;$.focus();var x=$.value.length;$.setSelectionRange(x,x)}},[]);var Be=function(x){var I=x.target;me(I.value.replace(/[\n\r]/g,""))},xe=function(){_.current=!0},L=function(){_.current=!1},ie=function(x){var I=x.keyCode;_.current||(ee.current=I)},te=function(){re(Le.trim())},_e=function(x){var I=x.keyCode,ye=x.ctrlKey,Ee=x.altKey,Qe=x.metaKey,$e=x.shiftKey;ee.current===I&&!_.current&&!ye&&!Ee&&!Qe&&!$e&&(I===X.Z.ENTER?(te(),ue==null||ue()):I===X.Z.ESC&&J())},je=function(){te()},Se=R()(l,"".concat(l,"-edit-content"),(0,v.Z)({},"".concat(l,"-rtl"),A==="rtl"),i);return e.createElement("div",{className:Se,style:C},e.createElement(Ie.Z,{ref:k,maxLength:M,value:Le,onChange:Be,onKeyDown:ie,onKeyUp:_e,onCompositionStart:xe,onCompositionEnd:L,onBlur:je,"aria-label":n,rows:1,autoSize:z}),le!==null?(0,Ae.Tm)(le,{className:"".concat(l,"-edit-content-confirm")}):null)},Ge=ke;function Ke(t,r){return e.useMemo(function(){var l=!!t;return[l,(0,s.Z)((0,s.Z)({},r),l&&(0,j.Z)(t)==="object"?t:null)]},[t])}var Ye=function(t,r){var l=e.useRef(!1);e.useEffect(function(){l.current?t():l.current=!0},r)};function qe(t){var r=(0,j.Z)(t);return r==="string"||r==="number"}function st(t){var r=0;return t.forEach(function(l){qe(l)?r+=String(l).length:r+=1}),r}function He(t,r){for(var l=0,n=[],i=0;i<t.length;i+=1){if(l===r)return n;var C=t[i],A=qe(C),M=A?String(C).length:1,W=l+M;if(W>r){var z=r-l;return n.push(String(C).slice(0,z)),n}n.push(C),l=W}return t}var et=0,be=1,Oe=2,Fe=3,Je=4,ut=function(r){var l=r.enabledMeasure,n=r.children,i=r.text,C=r.width,A=r.rows,M=r.onEllipsis,W=e.useState([0,0,0]),z=(0,f.Z)(W,2),K=z[0],re=z[1],J=e.useState(et),ue=(0,f.Z)(J,2),N=ue[0],le=ue[1],k=(0,f.Z)(K,3),_=k[0],ee=k[1],pe=k[2],B=e.useState(0),Le=(0,f.Z)(B,2),me=Le[0],Be=Le[1],xe=e.useRef(null),L=e.useRef(null),ie=e.useMemo(function(){return(0,Re.Z)(i)},[i]),te=e.useMemo(function(){return st(ie)},[ie]),_e=e.useMemo(function(){return!l||N!==Fe?n(ie,!1):n(He(ie,ee),ee<te)},[l,N,n,ie,ee,te]);e.useLayoutEffect(function(){l&&C&&te&&(le(be),re([0,Math.ceil(te/2),te]))},[l,C,i,te,A]),e.useLayoutEffect(function(){var x;N===be&&Be(((x=xe.current)===null||x===void 0?void 0:x.offsetHeight)||0)},[N]),e.useLayoutEffect(function(){var x,I;if(me){if(N===be){var ye=((x=L.current)===null||x===void 0?void 0:x.offsetHeight)||0,Ee=A*me;ye<=Ee?(le(Je),M(!1)):le(Oe)}else if(N===Oe)if(_!==pe){var Qe=((I=L.current)===null||I===void 0?void 0:I.offsetHeight)||0,$e=A*me,Ne=_,ae=pe;_===pe-1?ae=_:Qe<=$e?Ne=ee:ae=ee;var Ot=Math.ceil((Ne+ae)/2);re([Ne,Ot,ae])}else le(Fe),M(!0)}},[N,_,pe,A,me]);var je={width:C,whiteSpace:"normal",margin:0,padding:0},Se=function(I,ye,Ee){return e.createElement("span",{"aria-hidden":!0,ref:ye,style:(0,s.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},Ee)},I)},$=function(I,ye){var Ee=He(ie,I);return Se(n(Ee,!0),ye,je)};return e.createElement(e.Fragment,null,_e,l&&N!==Fe&&N!==Je&&e.createElement(e.Fragment,null,Se("lg",xe,{width:9999}),N===be?Se(n(ie,!1),L,je):$(ee,L)))},dt=ut,ft=function(r){var l=r.title,n=r.enabledEllipsis,i=r.isEllipsis,C=r.children;return!l||!n?C:e.createElement(H.Z,{title:l,visible:i?void 0:!1},C)},tt=ft,vt=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l};function pt(t,r){var l=t.mark,n=t.code,i=t.underline,C=t.delete,A=t.strong,M=t.keyboard,W=t.italic,z=r;function K(re,J){!re||(z=e.createElement(J,{},z))}return K(A,"strong"),K(i,"u"),K(C,"del"),K(n,"code"),K(l,"mark"),K(M,"kbd"),K(W,"i"),z}function S(t,r,l){return t===!0||t===void 0?r:t||l&&r}function at(t){return Array.isArray(t)?t:[t]}var q="...",mt=e.forwardRef(function(t,r){var l=t.prefixCls,n=t.className,i=t.style,C=t.type,A=t.disabled,M=t.children,W=t.ellipsis,z=t.editable,K=t.copyable,re=t.component,J=t.title,ue=vt(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),N=e.useContext(E.E_),le=N.getPrefixCls,k=N.direction,_=(0,o.E)("Text")[0],ee=e.useRef(null),pe=e.useRef(null),B=le("typography",l),Le=(0,Q.Z)(ue,["mark","code","delete","underline","strong","keyboard","italic"]),me=Ke(z),Be=(0,f.Z)(me,2),xe=Be[0],L=Be[1],ie=(0,de.Z)(!1,{value:L.editing}),te=(0,f.Z)(ie,2),_e=te[0],je=te[1],Se=L.triggerType,$=Se===void 0?["icon"]:Se,x=function(u){var m;u&&((m=L.onStart)===null||m===void 0||m.call(L)),je(u)};Ye(function(){var b;_e||(b=pe.current)===null||b===void 0||b.focus()},[_e]);var I=function(u){u.preventDefault(),x(!0)},ye=function(u){var m;(m=L.onChange)===null||m===void 0||m.call(L,u),x(!1)},Ee=function(){var u;(u=L.onCancel)===null||u===void 0||u.call(L),x(!1)},Qe=Ke(K),$e=(0,f.Z)(Qe,2),Ne=$e[0],ae=$e[1],Ot=e.useState(!1),xt=(0,f.Z)(Ot,2),it=xt[0],St=xt[1],Pt=e.useRef(),Zt=function(){clearTimeout(Pt.current)},kt=function(u){var m;u.preventDefault(),ae.text===void 0&&(ae.text=String(M)),oe()(ae.text||""),St(!0),Zt(),Pt.current=setTimeout(function(){St(!1)},3e3),(m=ae.onCopy)===null||m===void 0||m.call(ae)};e.useEffect(function(){return Zt},[]);var Gt=e.useState(!1),Rt=(0,f.Z)(Gt,2),Tt=Rt[0],Ht=Rt[1],Ft=e.useState(!1),Mt=(0,f.Z)(Ft,2),Dt=Mt[0],Jt=Mt[1],Vt=e.useState(!1),Lt=(0,f.Z)(Vt,2),Qt=Lt[0],Xt=Lt[1],Yt=e.useState(!1),_t=(0,f.Z)(Yt,2),Nt=_t[0],qt=_t[1],ea=e.useState(!1),It=(0,f.Z)(ea,2),At=It[0],ta=It[1],aa=Ke(W,{expandable:!1}),Kt=(0,f.Z)(aa,2),Pe=Kt[0],G=Kt[1],ge=Pe&&!Qt,wt=G.rows,Ue=wt===void 0?1:wt,ot=e.useMemo(function(){return!ge||G.suffix!==void 0||G.onEllipsis||G.expandable||xe||Ne},[ge,G,xe,Ne]);e.useLayoutEffect(function(){Pe&&!ot&&(Ht((0,ce.G)("webkitLineClamp")),Jt((0,ce.G)("textOverflow")))},[ot,Pe]);var he=e.useMemo(function(){return ot?!1:Ue===1?Dt:Tt},[ot,Dt,Tt]),Bt=ge&&(he?At:Nt),na=ge&&Ue===1&&he,jt=ge&&Ue>1&&he,ra=function(u){var m;Xt(!0),(m=G.onExpand)===null||m===void 0||m.call(G,u)},la=e.useState(0),$t=(0,f.Z)(la,2),ia=$t[0],oa=$t[1],ca=function(u){var m=u.offsetWidth;oa(m)},sa=function(u){var m;qt(u),Nt!==u&&((m=G.onEllipsis)===null||m===void 0||m.call(G,u))};e.useEffect(function(){var b=ee.current;if(Pe&&he&&b){var u=b.offsetWidth<b.scrollWidth;At!==u&&ta(u)}},[Pe,he,M]);var ct=G.tooltip===!0?M:G.tooltip,Ut=e.useMemo(function(){var b=function(m){return["string","number"].includes((0,j.Z)(m))};if(!(!Pe||he)){if(b(M))return M;if(b(J))return J;if(b(ct))return ct}},[Pe,he,J,ct,Bt]);if(_e)return e.createElement(Ge,{value:typeof M=="string"?M:"",onSave:ye,onCancel:Ee,onEnd:L.onEnd,prefixCls:B,className:n,style:i,direction:k,maxLength:L.maxLength,autoSize:L.autoSize,enterIcon:L.enterIcon});var ua=function(){var u=G.expandable,m=G.symbol;if(!u)return null;var V;return m?V=m:V=_.expand,e.createElement("a",{key:"expand",className:"".concat(B,"-expand"),onClick:ra,"aria-label":_.expand},V)},da=function(){if(!!xe){var u=L.icon,m=L.tooltip,V=(0,Re.Z)(m)[0]||_.edit,Ze=typeof V=="string"?V:"";return $.includes("icon")?e.createElement(H.Z,{key:"edit",title:m===!1?"":V},e.createElement(d.Z,{ref:pe,className:"".concat(B,"-edit"),onClick:I,"aria-label":Ze},u||e.createElement(We.Z,{role:"button"}))):null}},fa=function(){if(!!Ne){var u=ae.tooltips,m=ae.icon,V=at(u),Ze=at(m),Xe=it?S(V[1],_.copied):S(V[0],_.copy),ma=it?_.copied:_.copy,ya=typeof Xe=="string"?Xe:ma;return e.createElement(H.Z,{key:"copy",title:Xe},e.createElement(d.Z,{className:R()("".concat(B,"-copy"),it&&"".concat(B,"-copy-success")),onClick:kt,"aria-label":ya},it?S(Ze[1],e.createElement(p.Z,null),!0):S(Ze[0],e.createElement(c.Z,null),!0)))}},va=function(u){return[u&&ua(),da(),fa()]},pa=function(u){return[u&&e.createElement("span",{"aria-hidden":!0,key:"ellipsis"},q),G.suffix,va(u)]};return e.createElement(O.Z,{onResize:ca,disabled:!ge||he},function(b){var u;return e.createElement(tt,{title:ct,enabledEllipsis:ge,isEllipsis:Bt},e.createElement(h,(0,s.Z)({className:R()((u={},(0,v.Z)(u,"".concat(B,"-").concat(C),C),(0,v.Z)(u,"".concat(B,"-disabled"),A),(0,v.Z)(u,"".concat(B,"-ellipsis"),Pe),(0,v.Z)(u,"".concat(B,"-single-line"),ge&&Ue===1),(0,v.Z)(u,"".concat(B,"-ellipsis-single-line"),na),(0,v.Z)(u,"".concat(B,"-ellipsis-multiple-line"),jt),u),n),style:(0,s.Z)((0,s.Z)({},i),{WebkitLineClamp:jt?Ue:void 0}),component:re,ref:(0,y.sQ)(b,ee,r),direction:k,onClick:$.includes("text")?I:null,"aria-label":Ut,title:J},Le),e.createElement(dt,{enabledMeasure:ge&&!he,text:M,rows:Ue,width:ia,onEllipsis:sa},function(m,V){var Ze=m;m.length&&V&&Ut&&(Ze=e.createElement("span",{key:"show-content","aria-hidden":!0},Ze));var Xe=pt(t,e.createElement(e.Fragment,null,Ze,pa(V)));return Xe})))})}),Me=mt,yt=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l},nt=function(r){var l=r.ellipsis,n=yt(r,["ellipsis"]),i=e.useMemo(function(){return l&&(0,j.Z)(l)==="object"?(0,Q.Z)(l,["expandable","rows"]):l},[l]);return(0,P.Z)((0,j.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),e.createElement(Me,(0,s.Z)({},n,{ellipsis:i,component:"span"}))},rt=nt,Et=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l},gt=function(r,l){var n=r.ellipsis,i=r.rel,C=Et(r,["ellipsis","rel"]);(0,P.Z)((0,j.Z)(n)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var A=e.useRef(null);e.useImperativeHandle(l,function(){return A.current});var M=(0,s.Z)((0,s.Z)({},C),{rel:i===void 0&&C.target==="_blank"?"noopener noreferrer":i});return delete M.navigate,e.createElement(Me,(0,s.Z)({},M,{ref:A,ellipsis:!!n,component:"a"}))},ht=e.forwardRef(gt),Ct=a(93355),lt=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(l[n[i]]=t[n[i]]);return l},bt=(0,Ct.a)(1,2,3,4,5),De=function(r){var l=r.level,n=l===void 0?1:l,i=lt(r,["level"]),C;return bt.indexOf(n)!==-1?C="h".concat(n):((0,P.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),C="h1"),e.createElement(Me,(0,s.Z)({},i,{component:C}))},we=De,ve=function(r){return e.createElement(Me,(0,s.Z)({},r,{component:"div"}))},Wt=ve,Ve=h;Ve.Text=rt,Ve.Link=ht,Ve.Title=we,Ve.Paragraph=Wt;var zt=Ve},402:function(ne,Z,a){"use strict";var s=a(38842),v=a.n(s),e=a(60557),U=a.n(e),R=a(22385),y=a(47673)},20640:function(ne,Z,a){"use strict";var s=a(11742),v={"text/plain":"Text","text/html":"Url",default:"Text"},e="Copy to clipboard: #{key}, Enter";function U(y){var E=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,E)}function R(y,E){var P,D,T,w,g,h,j=!1;E||(E={}),P=E.debug||!1;try{T=s(),w=document.createRange(),g=document.getSelection(),h=document.createElement("span"),h.textContent=y,h.style.all="unset",h.style.position="fixed",h.style.top=0,h.style.clip="rect(0, 0, 0, 0)",h.style.whiteSpace="pre",h.style.webkitUserSelect="text",h.style.MozUserSelect="text",h.style.msUserSelect="text",h.style.userSelect="text",h.addEventListener("copy",function(f){if(f.stopPropagation(),E.format)if(f.preventDefault(),typeof f.clipboardData=="undefined"){P&&console.warn("unable to use e.clipboardData"),P&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var de=v[E.format]||v.default;window.clipboardData.setData(de,y)}else f.clipboardData.clearData(),f.clipboardData.setData(E.format,y);E.onCopy&&(f.preventDefault(),E.onCopy(f.clipboardData))}),document.body.appendChild(h),w.selectNodeContents(h),g.addRange(w);var Q=document.execCommand("copy");if(!Q)throw new Error("copy command was unsuccessful");j=!0}catch(f){P&&console.error("unable to copy using execCommand: ",f),P&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(E.format||"text",y),E.onCopy&&E.onCopy(window.clipboardData),j=!0}catch(de){P&&console.error("unable to copy using clipboardData: ",de),P&&console.error("falling back to prompt"),D=U("message"in E?E.message:e),window.prompt(D,y)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(w):g.removeAllRanges()),h&&document.body.removeChild(h),T()}return j}ne.exports=R},79370:function(ne,Z,a){"use strict";a.d(Z,{G:function(){return U}});var s=a(98924),v=function(y){if((0,s.Z)()&&window.document.documentElement){var E=Array.isArray(y)?y:[y],P=window.document.documentElement;return E.some(function(D){return D in P.style})}return!1},e=function(y,E){if(!v(y))return!1;var P=document.createElement("div"),D=P.style[y];return P.style[y]=E,P.style[y]!==D};function U(R,y){return!Array.isArray(R)&&y!==void 0?e(R,y):v(R)}},11742:function(ne){ne.exports=function(){var Z=document.getSelection();if(!Z.rangeCount)return function(){};for(var a=document.activeElement,s=[],v=0;v<Z.rangeCount;v++)s.push(Z.getRangeAt(v));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return Z.removeAllRanges(),function(){Z.type==="Caret"&&Z.removeAllRanges(),Z.rangeCount||s.forEach(function(e){Z.addRange(e)}),a&&a.focus()}}},83940:function(){},62563:function(){},60557:function(){}}]);