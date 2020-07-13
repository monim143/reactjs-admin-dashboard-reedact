(this["webpackJsonpreedact-react"]=this["webpackJsonpreedact-react"]||[]).push([[18],{1044:function(e,t,a){"use strict";a.r(t);var n=a(143),o=a(93),s=a(6),l=a.n(s),r=a(32),c=a(228),i=a(230),u=a(188),m=a(192),d=a(650),p=a(654),h=a(656),b=a(670),f=a(380),g=a(653),E=a(90),y=a(95),v=a(96),C=a(1),O=a(101),k=a(105),N=a(136),j=a(92),T=l.a.memo((function(e){var t=e.item,a=e.handleCheckChange,n=e.isSelected;return l.a.createElement(y.a,{xxs:"12"},l.a.createElement(O.a,{className:"card d-flex flex-row mb-3"},l.a.createElement("div",{className:"d-flex flex-grow-1 min-width-zero"},l.a.createElement(k.a,{className:"align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"},l.a.createElement(j.b,{to:"/app/applications/survey/".concat(t.id),className:"list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"},l.a.createElement("i",{className:"".concat("COMPLETED"===t.status?"simple-icon-check heading-icon":"simple-icon-refresh heading-icon")}),l.a.createElement("span",{className:"align-middle d-inline-block"},t.title)),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},t.category),l.a.createElement("p",{className:"mb-1 text-muted text-small w-15 w-xs-100"},t.createDate),l.a.createElement("div",{className:"w-15 w-xs-100"},l.a.createElement(N.a,{color:t.labelColor,pill:!0},t.label))),l.a.createElement("div",{className:"custom-control custom-checkbox pl-1 align-self-center mr-4"},l.a.createElement(d.a,{className:"itemCheck mb-0",type:"checkbox",id:"check_".concat(t.id),checked:n,onChange:function(e){return a(e,t.id)},label:""})))))})),M=a(0),x=a(304),A=a(290),w=a(291),S=a(649),_=a(433),I=a(292),P=a(120),F=a(121),B={title:"",label:{},category:{},status:"ACTIVE"},D=Object(r.b)((function(e){var t=e.surveyListApp;return{labels:t.labels,categories:t.categories}}),{addSurveyItemAction:C.eb})((function(e){var t=e.modalOpen,a=e.toggleModal,n=e.labels,r=e.categories,c=e.addSurveyItemAction,i=Object(s.useState)(B),m=Object(o.a)(i,2),p=m[0],h=m[1];return l.a.createElement(x.a,{isOpen:t,toggle:a,wrapClassName:"modal-right",backdrop:"static"},l.a.createElement(A.a,{toggle:a},l.a.createElement(E.a,{id:"survey.add-new-title"})),l.a.createElement(w.a,null,l.a.createElement(S.a,{className:"mt-4"},l.a.createElement(E.a,{id:"survey.title"})),l.a.createElement(_.a,{type:"text",defaultValue:p.title,onChange:function(e){return h(Object(M.a)(Object(M.a)({},p),{},{title:e.target.value}))}}),l.a.createElement(S.a,{className:"mt-4"},l.a.createElement(E.a,{id:"survey.category"})),l.a.createElement(P.a,{components:{Input:F.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:r.map((function(e,t){return{label:e,value:e,key:t}})),value:p.category,onChange:function(e){return h(Object(M.a)(Object(M.a)({},p),{},{category:e}))}}),l.a.createElement(S.a,{className:"mt-4"},l.a.createElement(E.a,{id:"survey.label"})),l.a.createElement(P.a,{components:{Input:F.a},className:"react-select",classNamePrefix:"react-select",name:"form-field-name",options:n.map((function(e,t){return{label:e.label,value:e.label,key:t,color:e.color}})),value:p.label,onChange:function(e){return h(Object(M.a)(Object(M.a)({},p),{},{label:e}))}}),l.a.createElement(S.a,{className:"mt-4"},l.a.createElement(E.a,{id:"survey.status"})),l.a.createElement(d.a,{type:"radio",id:"exCustomRadio",name:"customRadio",label:"COMPLETED",checked:"COMPLETED"===p.status,onChange:function(e){return h(Object(M.a)(Object(M.a)({},p),{},{status:"on"===e.target.value?"COMPLETED":"ACTIVE"}))}}),l.a.createElement(d.a,{type:"radio",id:"exCustomRadio2",name:"customRadio2",label:"ACTIVE",checked:"ACTIVE"===p.status,onChange:function(e){return h(Object(M.a)(Object(M.a)({},p),{},{status:"on"!==e.target.value?"COMPLETED":"ACTIVE"}))}})),l.a.createElement(I.a,null,l.a.createElement(u.a,{color:"secondary",outline:!0,onClick:a},l.a.createElement(E.a,{id:"survey.cancel"})),l.a.createElement(u.a,{color:"primary",onClick:function(){return function(){var e={title:p.title,label:p.label.value,labelColor:p.label.color,category:p.category.value,status:p.status};c(e),a(),h(B)}()}},l.a.createElement(E.a,{id:"survey.submit"}))))})),L=a(672),z=a(145),R=a.n(z),V=a(87),K=a.n(V),W=a(243),U=Object(r.b)((function(e){var t=e.surveyListApp;return{surveyItems:t.surveyItems,filter:t.filter,allSurveyItems:t.allSurveyItems,loading:t.loading,labels:t.labels,categories:t.categories}}),{getSurveyListWithFilterAction:C.tb})((function(e){var t=e.surveyItems,a=e.filter,n=e.allSurveyItems,o=e.loading,s=e.labels,r=e.categories,c=e.getSurveyListWithFilterAction,i=function(e,t){c(e,t)};return l.a.createElement(W.a,null,l.a.createElement(R.a,{options:{suppressScrollX:!0,wheelPropagation:!1}},l.a.createElement("div",{className:"p-4"},l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"survey.status"}),"Status"),l.a.createElement("ul",{className:"list-unstyled mb-5"},l.a.createElement(L.a,{className:K()({active:!a})},l.a.createElement(j.b,{to:"#",onClick:function(){return i("","")},location:{}},l.a.createElement("i",{className:"simple-icon-reload"}),l.a.createElement(E.a,{id:"survey.all-surveys"}),l.a.createElement("span",{className:"float-right"},o&&n.length))),l.a.createElement(L.a,{className:K()({active:a&&"status"===a.column&&"ACTIVE"===a.value})},l.a.createElement(j.b,{to:"#",location:{},onClick:function(){return i("status","ACTIVE")}},l.a.createElement("i",{className:"simple-icon-refresh"}),l.a.createElement(E.a,{id:"survey.active-surveys"}),l.a.createElement("span",{className:"float-right"},o&&t.filter((function(e){return"ACTIVE"===e.status})).length))),l.a.createElement(L.a,{className:K()({active:a&&"status"===a.column&&"COMPLETED"===a.value})},l.a.createElement(j.b,{to:"#",location:{},onClick:function(){return i("status","COMPLETED")}},l.a.createElement("i",{className:"simple-icon-check"}),l.a.createElement(E.a,{id:"survey.completed-surveys"}),l.a.createElement("span",{className:"float-right"},o&&t.filter((function(e){return"COMPLETED"===e.status})).length)))),l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"survey.categories"})),l.a.createElement("ul",{className:"list-unstyled mb-5"},r.map((function(e,t){return l.a.createElement(L.a,{key:t},l.a.createElement("div",{onClick:function(){return i("category",e)}},l.a.createElement("div",{className:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",className:"custom-control-input",defaultChecked:a&&"category"===a.column&&a.value===e}),l.a.createElement("label",{className:"custom-control-label"},e))))}))),l.a.createElement("p",{className:"text-muted text-small"},l.a.createElement(E.a,{id:"survey.labels"})),l.a.createElement("div",null,s.map((function(e,t){return l.a.createElement("p",{className:"d-sm-inline-block mb-1",key:t},l.a.createElement(j.b,{to:"#",location:{},onClick:function(){return i("label",e.label)}},l.a.createElement(N.a,{className:"mb-1",color:"".concat(a&&"label"===a.column&&a.value===e.label?e.color:"outline-".concat(e.color)),pill:!0},e.label)))}))))))})),q=function(e,t,a){for(var n=0;n<t.length;n+=1)if(t[n][a]===e)return n;return-1};t.default=Object(c.c)(Object(r.b)((function(e){var t=e.surveyListApp;return{surveyItems:t.surveyItems,searchKeyword:t.searchKeyword,loading:t.loading,orderColumn:t.orderColumn,orderColumns:t.orderColumns,selectedItems:t.selectedItems}}),{getSurveyListAction:C.rb,getSurveyListWithOrderAction:C.ub,getSurveyListSearchAction:C.sb,selectedSurveyItemsChangeAction:C.Fb})((function(e){var t=e.match,a=e.intl,r=e.surveyItems,c=e.searchKeyword,C=e.loading,O=e.orderColumn,k=e.orderColumns,N=e.selectedItems,j=e.getSurveyListAction,M=e.getSurveyListWithOrderAction,x=e.getSurveyListSearchAction,A=e.selectedSurveyItemsChangeAction,w=Object(s.useState)(!1),S=Object(o.a)(w,2),_=S[0],I=S[1],P=Object(s.useState)(!1),F=Object(o.a)(P,2),B=F[0],L=F[1],z=Object(s.useState)(null),R=Object(o.a)(z,2),V=R[0],K=R[1],W=Object(s.useState)(!1),J=Object(o.a)(W,2),X=J[0],$=J[1];Object(s.useEffect)((function(){return document.body.classList.add("right-menu"),j(),function(){document.body.classList.remove("right-menu")}}),[j]);var G=function(e,t){null==V&&K(t);var a=Object.assign([],N);if(a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t),A(a),e.shiftKey){var o,s=r,l=q(t,s,"id"),c=q(V,s,"id");s=s.slice(Math.min(l,c),Math.max(l,c)+1),(o=a).push.apply(o,Object(n.a)(s.map((function(e){return e.id})))),a=Array.from(new Set(a)),A(a)}},H=function(){C&&(N.length>=r.length?A([]):A(r.map((function(e){return e.id}))))},Q=a.messages;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{className:"app-row survey-app"},l.a.createElement(y.a,{xxs:"12"},l.a.createElement("div",{className:"mb-2"},l.a.createElement("h1",null,l.a.createElement(E.a,{id:"menu.survey"})),C&&l.a.createElement("div",{className:"text-zero top-right-button-container"},l.a.createElement(u.a,{color:"primary",size:"lg",className:"top-right-button mr-1",onClick:function(){return I(!0)}},l.a.createElement(E.a,{id:"survey.add-new"})),l.a.createElement(m.a,{isOpen:B,toggle:function(){return L(!B)}},l.a.createElement("div",{className:"btn btn-primary btn-lg pl-4 pr-0 check-button check-all"},l.a.createElement(d.a,{className:"custom-checkbox mb-0 d-inline-block",type:"checkbox",id:"checkAll",checked:N.length>=r.length,onClick:function(){return H()},onChange:function(){return H()},label:l.a.createElement("span",{className:"custom-control-label ".concat(N.length>0&&N.length<r.length?"indeterminate":"")})})),l.a.createElement(p.a,{caret:!0,color:"primary",className:"dropdown-toggle-split btn-lg"}),l.a.createElement(h.a,{right:!0},l.a.createElement(b.a,null,l.a.createElement(E.a,{id:"survey.delete"})),l.a.createElement(b.a,null,l.a.createElement(E.a,{id:"survey.another-action"}))))),l.a.createElement(v.a,{match:t})),l.a.createElement("div",{className:"mb-2"},l.a.createElement(u.a,{color:"empty",className:"pt-0 pl-0 d-inline-block d-md-none",onClick:function(){$(!X)}},l.a.createElement(E.a,{id:"survey.display-options"})," ",l.a.createElement("i",{className:"simple-icon-arrow-down align-middle"})),l.a.createElement(f.a,{id:"displayOptions",className:"d-md-block mb-2",isOpen:X},l.a.createElement("div",{className:"d-block d-md-inline-block"},l.a.createElement(g.a,{className:"mr-1 float-md-left btn-group mb-1"},l.a.createElement(p.a,{caret:!0,color:"outline-dark",size:"xs"},l.a.createElement(E.a,{id:"survey.orderby"}),O?O.label:""),l.a.createElement(h.a,null,k.map((function(e,t){return l.a.createElement(b.a,{key:t,onClick:function(){return M(e.column)}},e.label)})))),l.a.createElement("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top"},l.a.createElement("input",{type:"text",name:"keyword",id:"search",placeholder:Q["menu.search"],defaultValue:c,onKeyPress:function(e){"Enter"===e.key&&x(e.target.value)}}))))),l.a.createElement(y.b,{className:"mb-5"}),l.a.createElement(i.a,null,C?r.map((function(e,t){return l.a.createElement(T,{key:"todo_item_".concat(t),item:e,handleCheckChange:G,isSelected:!!C&&N.includes(e.id)})})):l.a.createElement("div",{className:"loading"})))),C&&l.a.createElement(U,null),l.a.createElement(D,{toggleModal:function(){return I(!_)},modalOpen:_}))})))},121:function(e,t,a){"use strict";var n=a(0),o=a(6),s=a.n(o),l=a(446);t.a=function(e){var t=Object(n.a)({},e);return delete t.autoCorrect,delete t.autoCapitalize,s.a.createElement(l.z.Input,t)}},136:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(6),l=a.n(s),r=a(41),c=a.n(r),i=a(87),u=a.n(i),m=a(88),d={color:c.a.string,pill:c.a.bool,tag:m.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.innerRef,c=e.pill,i=e.tag,d=Object(o.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(m.mapToCssModules)(u()(t,"badge","badge-"+s,!!c&&"badge-pill"),a);return d.href&&"span"===i&&(i="a"),l.a.createElement(i,Object(n.a)({},d,{className:p,ref:r}))};p.propTypes=d,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(210);var o=a(209);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},192:function(e,t,a){"use strict";var n=a(11),o=a(6),s=a.n(o),l=a(41),r=a.n(l),c=a(163),i={children:r.a.node},u=function(e){return s.a.createElement(c.a,Object(n.a)({group:!0},e))};u.propTypes=i,t.a=u},219:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(100),l=a(97),r=a(6),c=a.n(r),i=a(41),u=a.n(i),m=a(87),d=a.n(m),p=a(88),h={tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.active,l=e.tag,r=e.innerRef,i=Object(o.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(p.mapToCssModules)(d()(t,"nav-link",{disabled:i.disabled,active:s}),a);return c.a.createElement(l,Object(n.a)({},i,{ref:r,onClick:this.onClick,className:u}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={tag:"a"},t.a=b},243:function(e,t,a){"use strict";var n=a(93),o=a(6),s=a.n(o),l=a(219);t.a=function(e){var t=e.children,a=Object(o.useRef)(),r=Object(o.useState)(!1),c=Object(n.a)(r,2),i=c[0],u=c[1],m=function(e){if(i){var t=a.current;if(t.contains(e.target)||t===e.target)return;u(!1)}};return Object(o.useEffect)((function(){return["click","touchstart"].forEach((function(e){return document.addEventListener(e,m,!1)})),function(){["click","touchstart"].forEach((function(e){return document.removeEventListener(e,m,!1)}))}}),[i]),s.a.createElement("div",{ref:a,className:"app-menu ".concat(i?"shown":"")},t,s.a.createElement(l.a,{className:"app-menu-button d-inline-block d-xl-none",onClick:function(){return u(!i)}},s.a.createElement("i",{className:"simple-icon-options"})))}},290:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(6),l=a.n(s),r=a(41),c=a.n(r),i=a(87),u=a.n(i),m=a(88),d={tag:m.tagPropType,wrapTag:m.tagPropType,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},p=function(e){var t,a=e.className,s=e.cssModule,r=e.children,c=e.toggle,i=e.tag,d=e.wrapTag,p=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(m.mapToCssModules)(u()(a,"modal-header"),s);if(!b&&c){var E="number"===typeof h?String.fromCharCode(h):h;t=l.a.createElement("button",{type:"button",onClick:c,className:Object(m.mapToCssModules)("close",s),"aria-label":p},l.a.createElement("span",{"aria-hidden":"true"},E))}return l.a.createElement(d,Object(n.a)({},f,{className:g}),l.a.createElement(i,{className:Object(m.mapToCssModules)("modal-title",s)},r),b||t)};p.propTypes=d,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},291:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(6),l=a.n(s),r=a(41),c=a.n(r),i=a(87),u=a.n(i),m=a(88),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(t,"modal-body"),a);return l.a.createElement(s,Object(n.a)({},r,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},292:function(e,t,a){"use strict";var n=a(11),o=a(15),s=a(6),l=a.n(s),r=a(41),c=a.n(r),i=a(87),u=a.n(i),m=a(88),d={tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(m.mapToCssModules)(u()(t,"modal-footer"),a);return l.a.createElement(s,Object(n.a)({},r,{className:c}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},304:function(e,t,a){"use strict";var n=a(118),o=a(11),s=a(100),l=a(97),r=a(6),c=a.n(r),i=a(41),u=a.n(i),m=a(87),d=a.n(m),p=a(21),h=a.n(p),b=a(88),f={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);g.propTypes=f;var E=g,y=a(164);function v(){}var C=u.a.shape(y.a.propTypes),O={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,scrollable:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:C,modalTransition:C,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func]),unmountOnClose:u.a.bool,returnFocusAfterClose:u.a.bool,container:b.targetPropType},k=Object.keys(O),N={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:b.TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.TransitionTimeouts.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},j=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.focusableElements.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.keyCodes.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(b.getTarget)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(b.getOriginalBodyPadding)(),Object(b.conditionallyUpdateScrollbar)(),0===t.openCount&&(document.body.className=d()(document.body.className,Object(b.mapToCssModules)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.mapToCssModules)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.setScrollbarWidth)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.omit)(this.props,k);return c.a.createElement("div",Object(o.a)({},a,{className:Object(b.mapToCssModules)(d()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(b.mapToCssModules)(d()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,l=a.modalClassName,r=a.backdropClassName,i=a.cssModule,u=a.isOpen,m=a.backdrop,p=a.role,h=a.labelledBy,f=a.external,g=a.innerRef,v={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:p,tabIndex:"-1"},C=this.props.fade,O=Object(n.a)({},y.a.defaultProps,{},this.props.modalTransition,{baseClass:C?this.props.modalTransition.baseClass:"",timeout:C?this.props.modalTransition.timeout:0}),k=Object(n.a)({},y.a.defaultProps,{},this.props.backdropTransition,{baseClass:C?this.props.backdropTransition.baseClass:"",timeout:C?this.props.backdropTransition.timeout:0}),N=m&&(C?c.a.createElement(y.a,Object(o.a)({},k,{in:u&&!!m,cssModule:i,className:Object(b.mapToCssModules)(d()("modal-backdrop",r),i)})):c.a.createElement("div",{className:Object(b.mapToCssModules)(d()("modal-backdrop","show",r),i)}));return c.a.createElement(E,{node:this._element},c.a.createElement("div",{className:Object(b.mapToCssModules)(s)},c.a.createElement(y.a,Object(o.a)({},v,O,{in:u,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.mapToCssModules)(d()("modal",l,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:g}),f,this.renderModalDialog()),N))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);j.propTypes=O,j.defaultProps=N,j.openCount=0;t.a=j},96:function(e,t,a){"use strict";var n=a(6),o=a.n(n),s=a(102),l=a(103),r=a(92),c=a(90),i=function(e){return o.a.createElement(c.a,{id:"menu.".concat(e)})},u=function(e,t,a){return 0===a?"":e.split(t)[0]+t},m=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,n){return o.a.createElement(l.a,{key:n,active:a.length===n+1},a.length!==n+1?o.a.createElement(r.b,{to:"/".concat(u(t,e,n))},i(e)):i(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("h1",null,o.a.createElement(c.a,{id:t})),o.a.createElement(m,{match:a}))}}}]);
//# sourceMappingURL=application-survey.5b94b41a.chunk.js.map