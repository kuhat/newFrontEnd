(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[667],{13745:function(Y,T,t){"use strict";t.r(T),t.d(T,{default:function(){return Q}});var k=t(13062),v=t(71230),q=t(89032),I=t(15746),ee=t(62350),L=t(75443),U=t(86582),te=t(34792),E=t(48086),h=t(3182),B=t(69610),W=t(54941),b=t(81306),Z=t(72936),ne=t(402),y=t(72031),se=t(58024),M=t(39144),F=t(94043),u=t.n(F),j=t(67294),H=t(95357),z=t(8212),w=t(73171),N=t(65278),$=t(57895),g=t(11021),O=t(90672),C=t(26743),x=t(37476),A=t(5966),S=t(49101),V=t(29811),r=t(21010),G=t(97749),e=t(85893),J=M.Z.Meta,R=y.Z.Title,Q=function(X){(0,b.Z)(P,X);var K=(0,Z.Z)(P);function P(){var _;(0,B.Z)(this,P);for(var m=arguments.length,D=new Array(m),a=0;a<m;a++)D[a]=arguments[a];return _=K.call.apply(K,[this].concat(D)),_.state={topics:[],file:""},_.teacher_info=j.createRef(),_.formRef=j.createRef(),_.getTopics=(0,h.Z)(u().mark(function c(){var l,n;return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,V.ar)();case 2:return l=s.sent,_.teacher_info.current=l.data,s.next=6,(0,g.D0)(_.teacher_info.current.userid);case 6:n=s.sent,n.error_code==200&&_.setState({topics:n.data.map(function(i){var d=i.fields;return d.topic_id=i.pk,d.topic_img&&(d.topic_img={url:"/media/"+d.topic_img,name:d.topic_img}),d})});case 8:case"end":return s.stop()}},c)})),_.addNewTopic=function(){var c=(0,h.Z)(u().mark(function l(n){var o,s,i,d;return u().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(console.log(n),o=_.teacher_info.current.userid,!(!n.topic_content||!n.topic_title)){p.next=5;break}return E.default.error("please input the topic_title and the topic_content"),p.abrupt("return",!1);case 5:return p.next=7,(0,g.rq)(n.topic_title,n.topic_content,n.topic_description,_.state.file,o);case 7:if(s=p.sent,s.error_code!=200){p.next=16;break}return d={topic_id:s.id,topic_description:n.topic_description,topic_title:n.topic_title,topic_content:n.topic_content,topic_img:_.state.file},_.setState({topics:[].concat((0,U.Z)(_.state.topics),[d])}),E.default.success("topic has been created successfully"),(i=_.formRef.current)===null||i===void 0||i.resetFields(),p.abrupt("return",!0);case 16:return E.default.error(s.msg),p.abrupt("return",!1);case 18:case"end":return p.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),_.confirm=function(){var c=(0,h.Z)(u().mark(function l(n){var o;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,g.BK)(n);case 2:o=i.sent,o.error_code==200?(E.default.success("Delete success."),_.getTopics()):E.default.success("Fail to delete. Please try again later");case 4:case"end":return i.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),_.handleChange=function(){var c=(0,h.Z)(u().mark(function l(n){var o,s;return u().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(console.log(n),o=n.file,!(o&&o.status=="done"&&o.response)){d.next=6;break}o.name=o.response.imgUrl,d.next=12;break;case 6:if(o.status!="removed"){d.next=12;break}return d.next=9,(0,g.EI)(o.name,"Topic");case 9:s=d.sent,console.log(s),o=void 0;case 12:_.setState({file:o});case 13:case"end":return d.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),_}return(0,W.Z)(P,[{key:"componentDidMount",value:function(){this.getTopics()}},{key:"render",value:function(){var m=this,D=function(c){var l=c.icon,n=c.text;return(0,e.jsxs)("span",{children:[j.createElement(l,{style:{marginRight:8}}),n]})};return(0,e.jsx)("div",{style:{background:"#F5F7FA"},children:(0,e.jsxs)(N.ZP,{header:{title:(0,e.jsxs)(R,{level:2,children:[" ",(0,e.jsx)(r._H,{id:"pages.courseAdmin.title"})]}),ghost:!0,breadcrumb:{}},children:[(0,e.jsx)(M.Z,{children:(0,e.jsx)(v.Z,{gutter:{xs:16,sm:24,md:32},children:this.state.topics.map(function(a){return(0,e.jsx)(I.Z,{span:8,children:(0,e.jsxs)(M.Z,{hoverable:!0,className:"course-card",style:{marginTop:"20px"},cover:(0,e.jsx)("img",{alt:a.topic_img.title,src:a.topic_img.url,onClick:function(){m.props.history.push("/courseAdmin/courseList?topic_title=".concat(a.topic_title))}}),actions:[(0,e.jsx)("a",{href:"/courseAdmin/courseList?topic_title=".concat(a.topic_title),children:(0,e.jsx)(D,{icon:H.Z,text:(0,e.jsx)(r._H,{id:"pages.common.view"})},"list-vertical-message")}),(0,e.jsxs)(x.Z,{title:(0,e.jsx)(r._H,{id:"pages.common.edit"}),initialValues:a,trigger:(0,e.jsx)("a",{children:(0,e.jsx)(D,{icon:z.Z,text:(0,e.jsx)(r._H,{id:"pages.common.edit"})},"list-vertical-star-o")}),autoFocusFirstInput:!0,onFinish:function(){var c=(0,h.Z)(u().mark(function l(n){var o;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(console.log(n),!(!n.topic_content&&!n.topic_title&&!n.topic_img&&!n.topic_description)){i.next=6;break}return E.default.info("Nothing changed"),i.abrupt("return",!0);case 6:return n.topic_img&&(n.topic_img=n.topic_img[0]),i.next=9,(0,g.wA)(a.topic_id,n);case 9:if(o=i.sent,o.error_code!=200){i.next=16;break}return m.getTopics(),E.default.success("topic infomation changed success"),i.abrupt("return",!0);case 16:return E.default.error(o.msg),i.abrupt("return",!1);case 18:case"end":return i.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),submitter:{searchConfig:{submitText:(0,e.jsx)(r._H,{id:"pages.common.submit"}),resetText:(0,e.jsx)(r._H,{id:"pages.common.cancel"})}},children:[(0,e.jsx)(A.Z,{width:"md",name:"topic_title",label:(0,e.jsx)(r._H,{id:"pages.courseAdmin.topicTitle"}),placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u6807\u9898":"please input a topic title"}),(0,e.jsx)(O.Z,{name:"topic_description",label:"topic description",placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u63CF\u8FF0":"please input a topic description"}),(0,e.jsx)(O.Z,{name:"topic_content",label:"topic content",placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u5185\u5BB9\u4ECB\u7ECD":"please input a topic content"}),(0,e.jsx)(C.Z,{name:"topic_img",beforeUpload:m.handleBeforeUpload,fieldProps:{name:"topic_img",listType:"picture-card",accept:".jpg, .png, .jpeg, .gif"},action:"/server/V1/course/upload_topic_img/",onChange:function(){var c=(0,h.Z)(u().mark(function l(n){var o,s,i;return u().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(console.log(n),o=m.state.topics,s=n.file,s.status!="removed"){f.next=8;break}return f.next=6,(0,g.EI)(s.name,"Topic");case 6:i=f.sent,console.log(i);case 8:o.map(function(p){return p.topic_id==a.topic_id&&(s.status=="removed"?p.topic_img="":(s&&s.status=="done"&&s.response&&(s.name=s.response.imgUrl),p.topic_img=s)),p}),m.setState({topics:o});case 10:case"end":return f.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),label:(0,e.jsx)(r._H,{id:"pages.courseAdmin.upload"}),max:1,value:a.topic_img?[a.topic_img]:[]})]}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(r._H,{id:"pages.des.delTopic"}),onConfirm:function(){return m.confirm(a.topic_id)},okText:(0,e.jsx)(r._H,{id:"pages.common.yes"}),cancelText:(0,e.jsx)(r._H,{id:"pages.common.no"}),children:(0,e.jsx)("a",{children:(0,e.jsx)(D,{icon:w.Z,text:(0,e.jsx)(r._H,{id:"pages.common.delete"})},"list-vertical-like-o")})})],children:[(0,e.jsx)(J,{title:a.topic_title,description:a.topic_description,onClick:function(){m.props.history.push("/courseAdmin/courseList?topic_title=".concat(a.topic_title))}}),(0,e.jsx)($.ZP,{title:(0,e.jsx)(r._H,{id:"pages.courseList.showCourses"}),ghost:!0,gutter:8,collapsible:!0,defaultCollapsed:!0,children:(0,e.jsx)(G.default,{topic_info:{topic_title:a.topic_title,topic_id:a.topic_id}})})]})})})})}),(0,e.jsxs)(x.Z,{title:(0,e.jsx)(r._H,{id:"pages.courseAdmin.newTopic"}),trigger:(0,e.jsx)(M.Z,{bordered:!1,style:{backgroundColor:"white",cursor:"pointer",marginTop:"10px"},children:(0,e.jsx)(v.Z,{justify:"center",children:(0,e.jsxs)(R,{level:5,style:{color:"grey",fontWeight:"normal"},children:[(0,e.jsx)(S.Z,{}),"\xA0",(0,e.jsx)(r._H,{id:"pages.courseList.newTopic"})]})})}),formRef:this.formRef,autoFocusFirstInput:!0,onFinish:function(c){return m.addNewTopic(c)},submitter:{searchConfig:{submitText:(0,e.jsx)(r._H,{id:"pages.common.submit"}),resetText:(0,e.jsx)(r._H,{id:"pages.common.cancel"})}},children:[(0,e.jsx)(A.Z,{width:"md",name:"topic_title",label:(0,e.jsx)(r._H,{id:"pages.courseAdmin.topicTitle"}),placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u6807\u9898":"please input a topic title"}),(0,e.jsx)(O.Z,{name:"topic_description",label:"topic description",placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u63CF\u8FF0":"please input a topic description"}),(0,e.jsx)(O.Z,{name:"topic_content",label:"topic content",placeholder:(0,r.Kd)()=="zh-CN"?"\u8BF7\u8F93\u5165\u8BE5\u4E3B\u9898\u7684\u5185\u5BB9\u4ECB\u7ECD":"please input a topic content"}),(0,e.jsx)(C.Z,{name:"topic_img",label:(0,e.jsx)(r._H,{id:"pages.courseAdmin.upload"}),max:1,beforeUpload:this.handleBeforeUpload,fieldProps:{name:"topic_img",listType:"picture-card",accept:".jpg, .png, .jpeg, .gif"},action:"/server/V1/course/upload_topic_img/",onChange:this.handleChange})]})]})})}}]),P}(j.Component)}}]);
