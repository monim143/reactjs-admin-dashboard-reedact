(this["webpackJsonpreedact-react"]=this["webpackJsonpreedact-react"]||[]).push([[42],{1053:function(e,t,a){"use strict";a.r(t);var l=a(6),n=a.n(l),r=a(230),c=a(101),s=a(105),m=a(112),o=a(331),i=a(90),u=a(95),d=a(96),E=a(236),g=a(87),h=a.n(g),b=a(238),p=a(166);function k(e){var t=e.columns,a=e.data,l=e.divided,r=void 0!==l&&l,c=e.defaultPageSize,s=void 0===c?6:c,m=Object(E.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:s}},E.useSortBy,E.usePagination),o=m.getTableProps,i=m.getTableBodyProps,u=m.prepareRow,d=m.headerGroups,g=m.page,p=m.canPreviousPage,k=m.canNextPage,C=m.pageCount,f=m.gotoPage,y=m.setPageSize,w=m.state,N=w.pageIndex,v=w.pageSize;return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",Object.assign({},o(),{className:"r-table table ".concat(h()({"table-divided":r}))}),n.a.createElement("thead",null,d.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e,t){return n.a.createElement("th",Object.assign({key:"th_".concat(t)},e.getHeaderProps(e.getSortByToggleProps()),{className:e.isSorted?e.isSortedDesc?"sorted-desc":"sorted-asc":""}),e.render("Header"),n.a.createElement("span",null))})))}))),n.a.createElement("tbody",i(),g.map((function(e){return u(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((function(e,t){return n.a.createElement("td",Object.assign({key:"td_".concat(t)},e.getCellProps({className:e.column.cellClass})),e.render("Cell"))})))})))),n.a.createElement(b.a,{page:N,pages:C,canPrevious:p,canNext:k,pageSizeOptions:[4,10,20,30,40,50],showPageSizeOptions:!1,showPageJump:!1,defaultPageSize:v,onPageChange:function(e){return f(e)},onPageSizeChange:function(e){return y(e)},paginationMaxSize:C}))}var C=function(){var e=n.a.useMemo((function(){return[{Header:"Name",accessor:"title",cellClass:"list-item-heading w-40",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Sales",accessor:"sales",cellClass:"text-muted w-10",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Stock",accessor:"stock",cellClass:"text-muted w-10",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Category",accessor:"category",cellClass:"text-muted w-40",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}}]}),[]);return n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.react-pagination"})),n.a.createElement(k,{columns:e,data:p.a})))},f=function(){var e=n.a.useMemo((function(){return[{Header:"Name",accessor:"title",cellClass:"list-item-heading w-40",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Sales",accessor:"sales",cellClass:"text-muted  w-10",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Stock",accessor:"stock",cellClass:"text-muted  w-10",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}},{Header:"Category",accessor:"category",cellClass:"text-muted  w-40",Cell:function(e){return n.a.createElement(n.a.Fragment,null,e.value)}}]}),[]);return n.a.createElement("div",{className:"mb-4"},n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.divided"})),n.a.createElement(k,{columns:e,data:p.a,divided:!0}))};t.default=function(e){var t=e.match;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(u.a,{xxs:"12"},n.a.createElement(d.a,{heading:"menu.tables",match:t}),n.a.createElement(u.b,{className:"mb-5"}))),n.a.createElement(r.a,{className:"mb-5"},n.a.createElement(u.a,{xxs:"12"},n.a.createElement("h3",{className:"mb-4"},n.a.createElement(i.a,{id:"table.bootstrap-tables"}))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-basic"})),n.a.createElement(o.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Mark"),n.a.createElement("td",null,"Otto"),n.a.createElement("td",null,"@mdo")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Jacob"),n.a.createElement("td",null,"Thornton"),n.a.createElement("td",null,"@fat")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Larry"),n.a.createElement("td",null,"the Bird"),n.a.createElement("td",null,"@twitter"))))))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-striped"})),n.a.createElement(o.a,{striped:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Mark"),n.a.createElement("td",null,"Otto"),n.a.createElement("td",null,"@mdo")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Jacob"),n.a.createElement("td",null,"Thornton"),n.a.createElement("td",null,"@fat")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Larry"),n.a.createElement("td",null,"the Bird"),n.a.createElement("td",null,"@twitter"))))))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-bordered"})),n.a.createElement(o.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Mark"),n.a.createElement("td",null,"Otto"),n.a.createElement("td",null,"@mdo")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Jacob"),n.a.createElement("td",null,"Thornton"),n.a.createElement("td",null,"@fat")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Larry"),n.a.createElement("td",null,"the Bird"),n.a.createElement("td",null,"@twitter"))))))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-borderless"})),n.a.createElement(o.a,{borderless:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Mark"),n.a.createElement("td",null,"Otto"),n.a.createElement("td",null,"@mdo")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Jacob"),n.a.createElement("td",null,"Thornton"),n.a.createElement("td",null,"@fat")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Larry"),n.a.createElement("td",null,"the Bird"),n.a.createElement("td",null,"@twitter"))))))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-hoverable"})),n.a.createElement(o.a,{hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Username"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Mark"),n.a.createElement("td",null,"Otto"),n.a.createElement("td",null,"@mdo")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Jacob"),n.a.createElement("td",null,"Thornton"),n.a.createElement("td",null,"@fat")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Larry"),n.a.createElement("td",null,"the Bird"),n.a.createElement("td",null,"@twitter"))))))),n.a.createElement(u.a,{xxs:"6"},n.a.createElement(c.a,{className:"mb-4"},n.a.createElement(s.a,null,n.a.createElement(m.a,null,n.a.createElement(i.a,{id:"table.bootstrap-responsive"})),n.a.createElement(o.a,{responsive:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Table heading"),n.a.createElement("th",null,"Table heading"),n.a.createElement("th",null,"Table heading"),n.a.createElement("th",null,"Table heading"),n.a.createElement("th",null,"Table heading"),n.a.createElement("th",null,"Table heading"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell"),n.a.createElement("td",null,"Table cell")))))))),n.a.createElement(r.a,null,n.a.createElement(u.a,{xxs:"12"},n.a.createElement("h3",{className:"mb-4"},n.a.createElement(i.a,{id:"table.react-tables"}))),n.a.createElement(u.a,{xxs:"12"},n.a.createElement(C,null)),n.a.createElement(u.a,{xxs:"12"},n.a.createElement(f,null)," ")))}},166:function(e,t,a){"use strict";t.a=[{id:1,title:"Marble Cake",img:"/assets/img/marble-cake-thumb.jpg",category:"Cakes",createDate:"02.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:1647,stock:62},{id:2,title:"Fat Rascal",category:"Cupcakes",img:"/assets/img/fat-rascal-thumb.jpg",createDate:"01.04.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:1240,stock:48},{id:3,title:"Chocolate Cake",img:"/assets/img/chocolate-cake-thumb.jpg",category:"Cakes",createDate:"25.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:1080,stock:57},{id:4,title:"Goose Breast",img:"/assets/img/goose-breast-thumb.jpg",category:"Cakes",createDate:"21.03.2018",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:1014,stock:41},{id:5,title:"Petit G\xe2teau",category:"Cupcakes",img:"/assets/img/petit-gateau-thumb.jpg",createDate:"02.06.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:985,stock:23},{id:6,title:"Salzburger Nockerl",img:"/assets/img/salzburger-nockerl-thumb.jpg",category:"Desserts",createDate:"14.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Wedding cake decorated with donuts and wild berries",sales:962,stock:34},{id:7,title:"Napoleonshat",img:"/assets/img/napoleonshat-thumb.jpg",category:"Desserts",createDate:"05.02.2018",status:"PROCESSED",statusColor:"secondary",description:"Cheesecake with fresh berries and mint for dessert",sales:921,stock:31},{id:8,title:"Cheesecake",img:"/assets/img/cheesecake-thumb.jpg",category:"Cakes",createDate:"18.08.2018",status:"ON HOLD",statusColor:"primary",description:"Delicious vegan chocolate cake",sales:887,stock:21},{id:9,title:"Financier",img:"/assets/img/financier-thumb.jpg",category:"Cakes",createDate:"15.03.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:865,stock:53},{id:10,title:"Genoise",img:"/assets/img/genoise-thumb.jpg",category:"Cupcakes",createDate:"11.06.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:824,stock:55},{id:11,title:"Gingerbread",img:"/assets/img/gingerbread-thumb.jpg",category:"Cakes",createDate:"10.04.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake decorated with donuts and wild berries",sales:714,stock:12},{id:12,title:"Magdalena",img:"/assets/img/magdalena-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Christmas fruit cake, pudding on top",sales:702,stock:14},{id:13,title:"Parkin",img:"/assets/img/parkin-thumb.jpg",category:"Cakes",createDate:"22.08.2018",status:"ON HOLD",statusColor:"primary",description:"White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate",sales:689,stock:78},{id:14,title:"Streuselkuchen",img:"/assets/img/streuselkuchen-thumb.jpg",category:"Cakes",createDate:"22.07.2018",status:"PROCESSED",statusColor:"secondary",description:"Delicious vegan chocolate cake",sales:645,stock:55},{id:15,title:"Tea loaf",img:"/assets/img/tea-loaf-thumb.jpg",category:"Cakes",createDate:"10.09.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with fresh berries and mint for dessert",sales:632,stock:20},{id:16,title:"Merveilleux",img:"/assets/img/merveilleux-thumb.jpg",category:"Cakes",createDate:"18.02.2018",status:"ON HOLD",statusColor:"primary",description:"Chocolate cake with mascarpone",sales:621,stock:6},{id:17,title:"Fruitcake",img:"/assets/img/fruitcake-thumb.jpg",category:"Cakes",createDate:"12.01.2019",status:"PROCESSED",statusColor:"secondary",description:"Chocolate cake with berries",sales:595,stock:17},{id:18,title:"Bebinca",img:"/assets/img/bebinca-thumb.jpg",category:"Cakes",createDate:"04.02.2019",status:"PROCESSED",statusColor:"secondary",description:"Homemade cheesecake with fresh berries and mint",sales:574,stock:16},{id:19,title:"Cremeschnitte",img:"/assets/img/cremeschnitte-thumb.jpg",category:"Desserts",createDate:"04.03.2018",status:"ON HOLD",statusColor:"primary",description:"Cheesecake with chocolate cookies and Cream biscuits",sales:562,stock:9},{id:20,title:"Souffl\xe9",img:"/assets/img/souffle-thumb.jpg",category:"Cupcakes",createDate:"16.01.2018",status:"ON HOLD",statusColor:"primary",description:"Wedding cake with flowers Macarons and blueberries",sales:524,stock:14}]},238:function(e,t,a){"use strict";var l=a(93),n=a(6),r=a.n(n),c=a(213),s=a(214),m=a(670),o=a(653),i=a(654),u=a(656),d=a(215);t.a=function(e){var t=e.page,a=e.pages,E=e.canPrevious,g=e.canNext,h=e.pageSizeOptions,b=e.showPageSizeOptions,p=e.showPageJump,k=e.defaultPageSize,C=e.onPageChange,f=e.onPageSizeChange,y=e.paginationMaxSize,w=Object(n.useState)(t),N=Object(l.a)(w,2),v=N[0],O=N[1],x=Object(n.useState)(k),S=Object(l.a)(x,2),D=S[0],P=S[1];Object(n.useEffect)((function(){O(t)}),[t]);var T=function(e){var l=function(e){var l=e;return Number.isNaN(e)&&(l=t),Math.min(Math.max(l,0),a-1)}(e);l!==v&&(O(l),C(l))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center"},p&&r.a.createElement("div",{className:"float-left pt-2"},r.a.createElement("span",null,"Page "),r.a.createElement(o.a,{className:"d-inline-block"},r.a.createElement(i.a,{caret:!0,color:"outline-primary",size:"xs"},v+1),r.a.createElement(u.a,{direction:"left"},function(){for(var e=[],t=function(t){e.push(r.a.createElement(m.a,{key:t,onClick:function(){return T(t)}},t+1))},l=0;l<a;l+=1)t(l);return e}())),r.a.createElement("span",null," of "),a),r.a.createElement(d.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example"},r.a.createElement(c.a,{className:"".concat(!E&&"disabled")},r.a.createElement(s.a,{className:"prev",onClick:function(){E&&T(t-1)},disabled:!E},r.a.createElement("i",{className:"simple-icon-arrow-left"}))),function(){var e=a,t=a,l=v,n=0,m=y;m&&t>m&&((t=(n=Math.max(l+1-Math.floor(m/2),1))+m-1)>e&&(n=(t=e)-m+1),n-=1);for(var o=[],i=function(e){var t=l===e;o.push(r.a.createElement(c.a,{key:e,active:t},r.a.createElement(s.a,{onClick:function(){T(e)}},e+1)))},u=n;u<t;u+=1)i(u);return o}(),r.a.createElement(c.a,{className:"".concat(!g&&"disabled")},r.a.createElement(s.a,{className:"next",onClick:function(){g&&T(t+1)},disabled:!g},r.a.createElement("i",{className:"simple-icon-arrow-right"})))),b&&r.a.createElement("div",{className:"float-right pt-2"},r.a.createElement("span",{className:"text-muted text-small mr-1"},"Items "),r.a.createElement(o.a,{className:"d-inline-block"},r.a.createElement(i.a,{caret:!0,color:"outline-primary",size:"xs"},D),r.a.createElement(u.a,{right:!0},h.map((function(e,t){return r.a.createElement(m.a,{key:t,onClick:function(){return function(e){f(e),P(e)}(e)}},e)})))))))}},96:function(e,t,a){"use strict";var l=a(6),n=a.n(l),r=a(102),c=a(103),s=a(92),m=a(90),o=function(e){return n.a.createElement(m.a,{id:"menu.".concat(e)})},i=function(e,t,a){return 0===a?"":e.split(t)[0]+t},u=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,l){return n.a.createElement(c.a,{key:l,active:a.length===l+1},a.length!==l+1?n.a.createElement(s.b,{to:"/".concat(i(t,e,l))},o(e)):o(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return n.a.createElement(n.a.Fragment,null,t&&n.a.createElement("h1",null,n.a.createElement(m.a,{id:t})),n.a.createElement(u,{match:a}))}}}]);
//# sourceMappingURL=components-tables.4cb099b9.chunk.js.map