(this["webpackJsonpreedact-react"]=this["webpackJsonpreedact-react"]||[]).push([[15],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return y})),a.d(t,"c",(function(){return w})),a.d(t,"d",(function(){return x})),a.d(t,"e",(function(){return E})),a.d(t,"f",(function(){return O})),a.d(t,"g",(function(){return S})),a.d(t,"h",(function(){return W})),a.d(t,"i",(function(){return B}));var r=a(93),o=a(6),l=a.n(o),n=a(99),s=a(124),i={backgroundColor:Object(s.a)().foregroundColor,titleFontColor:Object(s.a)().primaryColor,borderColor:Object(s.a)().separatorColor,borderWidth:.5,bodyFontColor:Object(s.a)().primaryColor,bodySpacing:10,xPadding:15,yPadding:15,cornerRadius:.15},d={afterDatasetsUpdate(e){},beforeDraw(e){var t=e.chartArea.right,a=e.chartArea.bottom,r=e.chart.ctx;r.restore();var o=e.data.labels[0],l=e.data.datasets[0].data[0],n=e.data.datasets[0],i=n._meta[Object.keys(n._meta)[0]],d=i.total,c=parseFloat((l/d*100).toFixed(1));c=e.legend.legendItems[0].hidden?0:c,e.pointAvailable&&(o=e.data.labels[e.pointIndex],l=e.data.datasets[e.pointDataIndex].data[e.pointIndex],d=(i=(n=e.data.datasets[e.pointDataIndex])._meta[Object.keys(n._meta)[0]]).total,c=parseFloat((l/d*100).toFixed(1)),c=e.legend.legendItems[e.pointIndex].hidden?0:c),r.font="36px Nunito, sans-serif",r.fillStyle=Object(s.a)().primaryColor,r.textBaseline="middle";var h="".concat(c,"%"),u=Math.round((t-r.measureText(h).width)/2),p=a/2;r.fillText(h,u,p),r.font="14px Nunito, sans-serif",r.textBaseline="middle";var m=o,C=Math.round((t-r.measureText(m).width)/2),b=a/2-30;r.fillText(m,C,b),r.save()},beforeEvent(e,t,a){var r=e.getElementAtEvent(t)[0];r&&(e.pointIndex=r._index,e.pointDataIndex=r._datasetIndex,e.pointAvailable=!0)}},c={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,tooltips:i,plugins:{datalabels:{display:!1}},scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:5,min:50,max:70,padding:20}}],xAxes:[{gridLines:{display:!1}}]}},h={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{display:!1}},plugins:{datalabels:{display:!1}},tooltips:i},u={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,tooltips:i,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:5,min:50,max:70,padding:20}}],xAxes:[{gridLines:{display:!1}}]}},p={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:20,min:-80,max:80,padding:20}}],xAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)"}}]},tooltips:i},m={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,lineWidth:1,color:"rgba(0,0,0,0.1)",drawBorder:!1},ticks:{beginAtZero:!0,stepSize:100,min:300,max:800,padding:20}}],xAxes:[{gridLines:{display:!1}}]},tooltips:i},C={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,scale:{ticks:{display:!1}},tooltips:i},b={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,title:{display:!1},layout:{padding:{bottom:20}},tooltips:i},f={legend:{position:"bottom",labels:{padding:30,usePointStyle:!0,fontSize:12}},responsive:!0,maintainAspectRatio:!1,title:{display:!1},cutoutPercentage:80,layout:{padding:{bottom:20}},tooltips:i},g={layout:{padding:{left:5,right:5,top:10,bottom:10}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0},display:!1}],xAxes:[{display:!1}]}},v=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.lineWithShadow=n.Chart.defaults.line,n.Chart.controllers.lineWithShadow=n.Chart.controllers.line.extend({draw(e){n.Chart.controllers.line.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,t.stroke(),n.Chart.controllers.line.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"lineWithShadow":"line",options:u,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},y=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.global.datasets.barWithShadow=n.Chart.defaults.global.datasets.bar,n.Chart.defaults.barWithShadow=n.Chart.defaults.bar,n.Chart.controllers.barWithShadow=n.Chart.controllers.bar.extend({draw(e){n.Chart.controllers.bar.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=5,t.shadowOffsetY=7,t.responsive=!0,n.Chart.controllers.bar.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"barWithShadow":"bar",options:m,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},w=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),c=Object(o.useState)(null),h=Object(r.a)(c,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.doughnutWithShadow=n.Chart.defaults.doughnut,n.Chart.controllers.doughnutWithShadow=n.Chart.controllers.doughnut.extend({draw(e){n.Chart.controllers.doughnut.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,n.Chart.controllers.doughnut.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"doughnutWithShadow":"doughnut",options:f,plugins:[d],data:t});h(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},x=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),h=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.controllers.lineWithShadow=n.Chart.controllers.line,n.Chart.controllers.lineWithShadow=n.Chart.controllers.line.extend({draw(e){n.Chart.controllers.line.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,t.stroke(),n.Chart.controllers.line.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"lineWithShadow":"line",options:c,data:t});h(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},E=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.pieWithShadow=n.Chart.defaults.pie,n.Chart.controllers.pieWithShadow=n.Chart.controllers.pie.extend({draw(e){n.Chart.controllers.pie.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.15)",t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=10,t.responsive=!0,n.Chart.controllers.pie.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"pieWithShadow":"pie",options:b,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},O=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.polarWithShadow=n.Chart.defaults.polarArea,n.Chart.controllers.polarWithShadow=n.Chart.controllers.polarArea.extend({draw(e){n.Chart.controllers.radar.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=0,t.shadowOffsetY=7,t.responsive=!0,n.Chart.controllers.radar.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"polarWithShadow":"polarArea",options:h,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},S=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.radarWithShadow=n.Chart.defaults.radar,n.Chart.controllers.radarWithShadow=n.Chart.controllers.radar.extend({draw(e){n.Chart.controllers.radar.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=0,t.shadowOffsetY=7,t.responsive=!0,n.Chart.controllers.radar.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"radarWithShadow":"radar",options:C,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},W=function(e){var t=e.data,a=e.shadow,s=void 0!==a&&a,i=Object(o.useRef)(null),d=Object(o.useState)(null),c=Object(r.a)(d,2)[1];return Object(o.useEffect)((function(){if(i&&i.current){s&&(n.Chart.defaults.scatterWithShadow=n.Chart.defaults.scatter,n.Chart.controllers.scatterWithShadow=n.Chart.controllers.scatter.extend({draw(e){n.Chart.controllers.scatter.prototype.draw.call(this,e);var t=this.chart.ctx;t.save(),t.shadowColor="rgba(0,0,0,0.2)",t.shadowBlur=7,t.shadowOffsetX=0,t.shadowOffsetY=7,t.responsive=!0,n.Chart.controllers.scatter.prototype.draw.apply(this,arguments),t.restore()}}));var e=i.current.getContext("2d"),a=new n.Chart(e,{type:s?"scatterWithShadow":"scatter",options:p,data:t});c(a)}}),[i,t,s]),l.a.createElement("canvas",{ref:i})},k=a(0),j=function(e){for(var t=(e+="").split("."),a=t[0],r=t.length>1?".".concat(t[1]):"",o=/(\d+)(\d{3})/;o.test(a);)a=a.replace(o,"$1,$2");return a+r},B=function(e){var t=e.data,a=Object(o.useRef)(null),s=Object(o.useState)(null),i=Object(r.a)(s,2)[1],d=Object(o.useState)(""),c=Object(r.a)(d,2),h=c[0],u=c[1],p=Object(o.useState)(""),m=Object(r.a)(p,2),C=m[0],b=m[1],f=function(e,t){u(e),b(t)};return Object(o.useEffect)((function(){if(a&&a.current){n.Chart.controllers.lineWithLine=n.Chart.controllers.line,n.Chart.controllers.lineWithLine=n.Chart.controllers.line.extend({draw(e){n.Chart.controllers.line.prototype.draw.call(this,e);var t=this.chart,a=t.ctx,r=t.tooltip,o=t.scales;if(r._active&&r._active[0]){var l=r._active[0].tooltipPosition().x,s=o["y-axis-0"].top,i=o["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(l,s),a.lineTo(l,i),a.lineWidth=1,a.strokeStyle="rgba(0,0,0,0.1)",a.stroke(),a.restore()}}});var e=a.current.getContext("2d"),r=new n.Chart(e,{type:"lineWithLine",options:Object(k.a)(Object(k.a)({},g),{},{tooltips:{intersect:!1,enabled:!1,custom(e){if(e&&e.dataPoints){var t=e.dataPoints[0].yLabel,a=e.dataPoints[0].xLabel,r=e.body[0].lines[0].split(":")[0];f("$".concat(j(t)),"".concat(r,"-").concat(a))}}}}),plugins:[{afterInit(e,t){var a=e.data.datasets[0].data[0],r=e.data.labels[0],o=e.data.datasets[0].label;f("$".concat(j(a)),"".concat(o,"-").concat(r))}}],data:t});i(r)}}),[a,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",{className:"lead color-theme-1 mb-1 value"},h),l.a.createElement("p",{className:"mb-0 label text-small"},C)),l.a.createElement("div",{className:"chart"},l.a.createElement("canvas",{ref:a})))}},119:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"i",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return c})),a.d(t,"f",(function(){return h})),a.d(t,"d",(function(){return u})),a.d(t,"j",(function(){return p})),a.d(t,"k",(function(){return m})),a.d(t,"l",(function(){return C})),a.d(t,"m",(function(){return b})),a.d(t,"c",(function(){return f}));var r=a(124),o=Object(r.a)(),l={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[54,63,60,65,60,68,60],borderColor:o.themeColor1,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.foregroundColor,pointRadius:6,pointBorderWidth:2,pointHoverRadius:8,fill:!1}]},n={labels:["Sales","Orders","Stock"],datasets:[{data:[80,90,70],borderWidth:2,borderColor:[o.themeColor1,o.themeColor2,o.themeColor3],backgroundColor:[o.themeColor1_10,o.themeColor2_10,o.themeColor3_10]}]},s={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[54,63,60,65,60,68,60],borderColor:o.themeColor1,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.foregroundColor,pointRadius:4,pointBorderWidth:2,pointHoverRadius:5,fill:!0,borderWidth:2,backgroundColor:o.themeColor1_10}]},i={datasets:[{borderWidth:2,showLine:!1,label:"Cakes",borderColor:o.themeColor1,backgroundColor:o.themeColor1_10,data:[{x:62,y:-78},{x:-0,y:74},{x:-67,y:45},{x:-26,y:-43},{x:-15,y:-30},{x:65,y:-68},{x:-28,y:-61}]},{borderWidth:2,showLine:!1,label:"Desserts",borderColor:o.themeColor2,backgroundColor:o.themeColor2_10,data:[{x:79,y:62},{x:62,y:0},{x:-76,y:-81},{x:-51,y:41},{x:-9,y:9},{x:72,y:-37},{x:62,y:-26}]}]},d={labels:["January","February","March","April","May","June"],datasets:[{label:"Cakes",borderColor:o.themeColor1,backgroundColor:o.themeColor1_10,data:[456,479,324,569,702,600],borderWidth:2},{label:"Desserts",borderColor:o.themeColor2,backgroundColor:o.themeColor2_10,data:[364,504,605,400,345,320],borderWidth:2}]},c={datasets:[{label:"Stock",borderWidth:2,pointBackgroundColor:o.themeColor1,borderColor:o.themeColor1,backgroundColor:o.themeColor1_10,data:[80,90,70]},{label:"Order",borderWidth:2,pointBackgroundColor:o.themeColor2,borderColor:o.themeColor2,backgroundColor:o.themeColor2_10,data:[68,80,95]}],labels:["Cakes","Desserts","Cupcakes"]},h={labels:["Cakes","Cupcakes","Desserts"],datasets:[{label:"",borderColor:[o.themeColor1,o.themeColor2,o.themeColor3],backgroundColor:[o.themeColor1_10,o.themeColor2_10,o.themeColor3_10],borderWidth:2,data:[15,25,20]}]},u={labels:["Cakes","Cupcakes","Desserts"],datasets:[{label:"",borderColor:[o.themeColor3,o.themeColor2,o.themeColor1],backgroundColor:[o.themeColor3_10,o.themeColor2_10,o.themeColor1_10],borderWidth:2,data:[15,25,20]}]},p={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[1250,1300,1550,921,1810,1106,1610],datalabels:{align:"end",anchor:"end"}}]},m={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Pending Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[115,120,300,222,105,85,36],datalabels:{align:"end",anchor:"end"}}]},C={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[350,452,762,952,630,85,158],datalabels:{align:"end",anchor:"end"}}]},b={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Total Orders",borderColor:o.themeColor1,pointBorderColor:o.themeColor1,pointHoverBackgroundColor:o.themeColor1,pointHoverBorderColor:o.themeColor1,pointRadius:2,pointBorderWidth:3,pointHoverRadius:2,fill:!1,borderWidth:2,data:[200,452,250,630,125,85,20],datalabels:{align:"end",anchor:"end"}}]},f={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"",data:[65,60,68,60,58,63,60],borderColor:o.themeColor2,pointBackgroundColor:o.foregroundColor,pointBorderColor:o.themeColor2,pointHoverBackgroundColor:o.themeColor2,pointHoverBorderColor:o.foregroundColor,pointRadius:4,pointBorderWidth:2,pointHoverRadius:5,fill:!0,borderWidth:2,backgroundColor:o.themeColor2_10}]}},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(){var e=getComputedStyle(document.body);return{themeColor1:e.getPropertyValue("--theme-color-1").trim(),themeColor2:e.getPropertyValue("--theme-color-2").trim(),themeColor3:e.getPropertyValue("--theme-color-3").trim(),themeColor4:e.getPropertyValue("--theme-color-4").trim(),themeColor5:e.getPropertyValue("--theme-color-5").trim(),themeColor6:e.getPropertyValue("--theme-color-6").trim(),themeColor1_10:e.getPropertyValue("--theme-color-1-10").trim(),themeColor2_10:e.getPropertyValue("--theme-color-2-10").trim(),themeColor3_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor4_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor5_10:e.getPropertyValue("--theme-color-3-10").trim(),themeColor6_10:e.getPropertyValue("--theme-color-3-10").trim(),primaryColor:e.getPropertyValue("--primary-color").trim(),foregroundColor:e.getPropertyValue("--foreground-color").trim(),separatorColor:e.getPropertyValue("--separator-color").trim()}}},289:function(e,t,a){"use strict";var r=a(6),o=a.n(r),l=a(101),n=a(105),s=a(653),i=a(654),d=a(656),c=a(670),h=a(90),u=a(116),p=a(119);t.a=function(e){var t=e.className,a=void 0===t?"":t,r=e.controls,m=void 0===r||r;return o.a.createElement(l.a,{className:"".concat(a," dashboard-filled-line-chart")},o.a.createElement(n.a,null,o.a.createElement("div",{className:"float-left float-none-xs"},o.a.createElement("div",{className:"d-inline-block"},o.a.createElement("h5",{className:"d-inline"},o.a.createElement(h.a,{id:"dashboards.website-visits"})),o.a.createElement("span",{className:"text-muted text-small d-block"},o.a.createElement(h.a,{id:"dashboards.unique-visitors"})))),m&&o.a.createElement("div",{className:"btn-group float-right float-none-xs mt-2"},o.a.createElement(s.a,null,o.a.createElement(i.a,{caret:!0,color:"primary",className:"btn-xs",outline:!0},o.a.createElement(h.a,{id:"dashboards.this-week"})),o.a.createElement(d.a,{right:!0},o.a.createElement(c.a,null,o.a.createElement(h.a,{id:"dashboards.last-week"})),o.a.createElement(c.a,null,o.a.createElement(h.a,{id:"dashboards.this-month"})))))),o.a.createElement("div",{className:"chart card-body pt-0"},o.a.createElement(u.a,{shadow:!0,data:p.a})))}},385:function(e,t,a){"use strict";var r=a(6),o=a.n(r),l=a(101),n=a(216),s=a(105),i=a(112),d=a(240);t.a=o.a.memo((function(e){var t=e.title,a=void 0===t?"title":t,r=e.percent,c=void 0===r?50:r,h=e.isSortable,u=void 0!==h&&h;return o.a.createElement(l.a,null,u&&o.a.createElement(n.a,{className:"p-0 position-relative"},o.a.createElement("div",{className:"position-absolute handle card-icon"},o.a.createElement("i",{className:"simple-icon-shuffle"}))),o.a.createElement(s.a,{className:"d-flex justify-content-between align-items-center"},o.a.createElement(i.a,{className:"mb-0"},a),o.a.createElement("div",{className:"progress-bar-circle"},o.a.createElement(d.a,{strokeWidth:4,value:c,text:"".concat(c,"%")}))))}))},386:function(e,t,a){"use strict";var r=a(6),o=a.n(r),l=a(230),n=a(101),s=a(105),i=a(95),d=a(116),c=a(119);t.a=function(e){var t=e.itemClass,a=void 0===t?"dashboard-small-chart":t;return o.a.createElement(l.a,null,o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(n.a,{className:a},o.a.createElement(s.a,null,o.a.createElement(d.i,{data:c.j})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(n.a,{className:a},o.a.createElement(s.a,null,o.a.createElement(d.i,{data:c.k})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(n.a,{className:a},o.a.createElement(s.a,null,o.a.createElement(d.i,{data:c.l})))),o.a.createElement(i.a,{xxs:"6",className:"mb-4"},o.a.createElement(n.a,{className:a},o.a.createElement(s.a,null,o.a.createElement(d.i,{data:c.m})))))}},96:function(e,t,a){"use strict";var r=a(6),o=a.n(r),l=a(102),n=a(103),s=a(92),i=a(90),d=function(e){return o.a.createElement(i.a,{id:"menu.".concat(e)})},c=function(e,t,a){return 0===a?"":e.split(t)[0]+t},h=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((function(e,r){return o.a.createElement(n.a,{key:r,active:a.length===r+1},a.length!==r+1?o.a.createElement(s.b,{to:"/".concat(c(t,e,r))},d(e)):d(e))}))))};t.a=function(e){var t=e.heading,a=e.match;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement("h1",null,o.a.createElement(i.a,{id:t})),o.a.createElement(h,{match:a}))}}}]);
//# sourceMappingURL=15.830d3ed9.chunk.js.map