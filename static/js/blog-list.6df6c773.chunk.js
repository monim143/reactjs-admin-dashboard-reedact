(this["webpackJsonpreedact-react"]=this["webpackJsonpreedact-react"]||[]).push([[24],{101:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.color,r=e.body,c=e.inverse,o=e.outline,u=e.tag,p=e.innerRef,g=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(m()(a,"card",!!c&&"text-white",!!r&&"card-body",!!n&&(o?"border":"bg")+"-"+n),t);return i.a.createElement(u,Object(s.a)({},g,{className:b,ref:p}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},102:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,c=e.tag,o=e.listTag,u=e["aria-label"],p=Object(l.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(d.mapToCssModules)(m()(a),n),b=Object(d.mapToCssModules)(m()("breadcrumb",t),n);return i.a.createElement(c,Object(s.a)({},p,{className:g,"aria-label":u}),i.a.createElement(o,{className:b},r))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},103:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,c=Object(l.a)(e,["className","cssModule","active","tag"]),o=Object(d.mapToCssModules)(m()(a,!!n&&"active","breadcrumb-item"),t);return i.a.createElement(r,Object(s.a)({},c,{className:o,"aria-current":n?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},105:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,r=e.tag,c=Object(l.a)(e,["className","cssModule","innerRef","tag"]),o=Object(d.mapToCssModules)(m()(a,"card-body"),t);return i.a.createElement(r,Object(s.a)({},c,{className:o,ref:n}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},136:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={color:c.a.string,pill:c.a.bool,tag:d.tagPropType,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.color,r=e.innerRef,c=e.pill,o=e.tag,u=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.mapToCssModules)(m()(a,"badge","badge-"+n,!!c&&"badge-pill"),t);return u.href&&"span"===o&&(o="a"),i.a.createElement(o,Object(s.a)({},u,{className:p,ref:r}))};p.propTypes=u,p.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=p},213:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:d.tagPropType},p=function(e){var a=e.active,t=e.className,n=e.cssModule,r=e.disabled,c=e.tag,o=Object(l.a)(e,["active","className","cssModule","disabled","tag"]),u=Object(d.mapToCssModules)(m()(t,"page-item",{active:a,disabled:r}),n);return i.a.createElement(c,Object(s.a)({},o,{className:u}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p},214:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,first:c.a.bool,last:c.a.bool,tag:d.tagPropType},p=function(e){var a,t=e.className,n=e.cssModule,r=e.next,c=e.previous,o=e.first,u=e.last,p=e.tag,g=Object(l.a)(e,["className","cssModule","next","previous","first","last","tag"]),b=Object(d.mapToCssModules)(m()(t,"page-link"),n);c?a="Previous":r?a="Next":o?a="First":u&&(a="Last");var f,y=e["aria-label"]||a;c?f="\u2039":r?f="\u203a":o?f="\xab":u&&(f="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),g.href||"a"!==p||(p="button"),(c||r||o||u)&&(h=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||f),i.a.createElement("span",{className:"sr-only",key:"sr"},y)]),i.a.createElement(p,Object(s.a)({},g,{className:b,"aria-label":y}),h)};p.propTypes=u,p.defaultProps={tag:"a"},a.a=p},215:function(e,a,t){"use strict";var s=t(11),l=t(15),n=t(6),i=t.n(n),r=t(41),c=t.n(r),o=t(87),m=t.n(o),d=t(88),u={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:d.tagPropType,listTag:d.tagPropType,"aria-label":c.a.string},p=function(e){var a,t=e.className,n=e.listClassName,r=e.cssModule,c=e.size,o=e.tag,u=e.listTag,p=e["aria-label"],g=Object(l.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(d.mapToCssModules)(m()(t),r),f=Object(d.mapToCssModules)(m()(n,"pagination",((a={})["pagination-"+c]=!!c,a)),r);return i.a.createElement(o,{className:b,"aria-label":p},i.a.createElement(u,Object(s.a)({},g,{className:f})))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},466:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return l}));var s=[{title:"Distinctively Exploit Optimal Alignments with Mentality Networks",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate via plug-and-play networks.",thumb:"/assets/img/detail-small-5.jpg",badge:"NEW",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-2.jpg",badge:"UPDATE",type:"video"},{title:"Assertively Iterate Resource Maximizing",description:"Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",thumb:"/assets/img/detail-small-3.jpg",type:"image"},{title:"Podcasting Operational Change Management Inside of Workflows",description:"Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.",thumb:"/assets/img/detail-small-7.jpg",badge:"TRENDING",type:"image"},{title:"Objectively Innovate Empowered Manufactured Products",description:"Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-1.jpg",type:"image"},{title:"Completely Pursue Scalable Customer Service",description:"Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital.",thumb:"/assets/img/detail-small-6.jpg",type:"image"},{title:"Dynamically Procrastinate B2C Users After Installed Base Benefits",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets.",thumb:"/assets/img/detail-small-7.jpg",type:"image"},{title:"Progressively Maintain Extensive Infomediaries",description:"Dramatically maintain clicks-and-mortar solutions without functional solutions.",thumb:"/assets/img/detail-small-8.jpg",type:"image"}],l=[{title:"Using the Template",link:"#",icon:"iconsminds-director"},{title:"Security",link:"#",icon:"iconsminds-security-settings"},{title:"Account Settings",link:"#",icon:"iconsminds-male"},{title:"Policies and Docs",link:"#",icon:"iconsminds-newspaper"}]},860:function(e,a,t){"use strict";t.r(a);var s=t(6),l=t.n(s),n=t(230),i=t(101),r=t(136),c=t(105),o=t(215),m=t(213),d=t(214),u=t(703),p=t.n(u),g=t(704),b=t.n(g),f=t(92),y=t(96),h=t(95),v=t(466),N=b()()(p.a);a.default=function(e){var a=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,null,l.a.createElement(h.a,{xxs:"12"},l.a.createElement(y.a,{heading:"menu.blog-list",match:a}),l.a.createElement(h.b,{className:"mb-5"})),v.b.map((function(e,a){return l.a.createElement(h.a,{xxs:"12",lg:"6",className:"mb-5",key:"blogItem_".concat(a)},l.a.createElement(i.a,{className:"flex-row listing-card-container"},l.a.createElement("div",{className:"w-40 position-relative"},l.a.createElement(f.b,{to:"blog-detail"},l.a.createElement("img",{className:"card-img-left",src:e.thumb,alt:"Card cap"}),e.badge&&l.a.createElement(r.a,{color:"primary",pill:!0,className:"position-absolute badge-top-left"},e.badge))),l.a.createElement("div",{className:"w-60 d-flex align-items-center"},l.a.createElement(c.a,null,l.a.createElement(f.b,{to:"blog-detail"},l.a.createElement(N,{className:"mb-3 listing-heading",text:e.title,maxLine:"2",trimRight:!0,basedOn:"words",component:"h5"})),l.a.createElement(N,{className:"listing-desc text-muted",text:e.description,maxLine:"3",trimRight:!0,basedOn:"words",component:"p"})))))}))),l.a.createElement(n.a,null,l.a.createElement(h.a,{xxs:"12"},l.a.createElement(o.a,{listClassName:"justify-content-center"},l.a.createElement(m.a,null,l.a.createElement(d.a,{className:"prev",href:"#"},l.a.createElement("i",{className:"simple-icon-arrow-left"}))),l.a.createElement(m.a,{active:!0},l.a.createElement(d.a,{href:"#"},"1")),l.a.createElement(m.a,null,l.a.createElement(d.a,{href:"#"},"2")),l.a.createElement(m.a,null,l.a.createElement(d.a,{href:"#"},"3")),l.a.createElement(m.a,null,l.a.createElement(d.a,{className:"next",href:"#"},l.a.createElement("i",{className:"simple-icon-arrow-right"})))))))}},96:function(e,a,t){"use strict";var s=t(6),l=t.n(s),n=t(102),i=t(103),r=t(92),c=t(90),o=function(e){return l.a.createElement(c.a,{id:"menu.".concat(e)})},m=function(e,a,t){return 0===t?"":e.split(a)[0]+a},d=function(e){var a=e.match.path.substr(1),t=a.split("/");return t[t.length-1].indexOf(":")>-1&&(t=t.filter((function(e){return-1===e.indexOf(":")}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},t.map((function(e,s){return l.a.createElement(i.a,{key:s,active:t.length===s+1},t.length!==s+1?l.a.createElement(r.b,{to:"/".concat(m(a,e,s))},o(e)):o(e))}))))};a.a=function(e){var a=e.heading,t=e.match;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("h1",null,l.a.createElement(c.a,{id:a})),l.a.createElement(d,{match:t}))}}}]);
//# sourceMappingURL=blog-list.6df6c773.chunk.js.map