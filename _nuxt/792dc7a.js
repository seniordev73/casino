(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{377:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return w}));var r=n(3),o=(n(23),n(40),n(37)),c=n.n(o),l=n(10),d="".concat("https://www.rummytime.com").concat("/content");function f(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d).concat(l.a.API_URLS.fetchPageContentById).concat(e,"?_embed=true"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d).concat(l.a.API_URLS.fetchPostContentById));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d).concat(l.a.API_URLS.fetchPostContentById).concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return x.apply(this,arguments)}function x(){return(x=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("".concat(d).concat(l.a.API_URLS.fetchCategories));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},432:function(t,e,n){"use strict";var r=n(4),o=n(82).find,c=n(128),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},443:function(t,e,n){t.exports={}},469:function(t,e,n){"use strict";n(443)},492:function(t,e,n){"use strict";var r={name:"AppBreadcrumbs",props:{breadcrumb:{type:Array,default:function(){return[]}}},methods:{shortTitle:function(t){return t.text.split("-")[0].split("&#8211;")[0]}}},o=(n(469),n(1)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"display-flex breadcrumb-outer"},[t._l(t.breadcrumb,(function(n,r){return[n.active?t._e():e("li",{key:r+"list",style:{transitionDelay:"".concat(20*r,"ms")},attrs:{"data-aos":r?"translate-x-left":"fade"}},[e("nuxt-link",{staticClass:"d-inline-block text-primary pl-0 pr-0 line-height-2 text-primary text-black:hover",attrs:{to:n.to}},[t._v(t._s(n.text))]),t._v(" "),e("span",{staticClass:"link-spacing"},[n.active?t._e():e("svg",{key:r+"icon",attrs:{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M11 7.99165L5.99167 13L4.8125 11.8217L8.64583 7.98832L4.8125 4.15497L5.99167 2.98247L11 7.99165Z",fill:"#707486"}})])])],1),t._v(" "),n.active?e("li",{key:r,staticClass:"active-link-breadcrumb",style:{transitionDelay:"".concat(20*r,"ms")},attrs:{title:t.shortTitle(n),"data-aos":"translate-x-left"}},[e("div",{staticClass:"active-li",domProps:{innerHTML:t._s(t.shortTitle(n))}})]):t._e()]}))],2)}),[],!1,null,null,null);e.a=component.exports},667:function(t,e,n){t.exports={}},668:function(t,e,n){t.exports={}},847:function(t,e,n){"use strict";n(667)},848:function(t,e,n){"use strict";n(668)},897:function(t,e,n){"use strict";n.r(e);n(11);var r=n(3),o=(n(48),n(60),n(13),n(49),n(432),n(23),n(83),n(40),n(24),n(50),{name:"AppSeoLanding",props:{article:{type:Object,required:!0,default:null}},head:function(){var t,e,n,r,o,c,l,d,f,h,m;return{title:null===(t=this.article.yoast_head_json)||void 0===t?void 0:t.og_title,link:[{hid:"canonical",rel:"canonical",href:"https://www.rummytime.com".concat(this.$route.fullPath)}],meta:[{hid:"description",name:"description",content:null!==(e=this.article.yoast_head_json)&&void 0!==e&&e.description?null===(n=this.article.yoast_head_json)||void 0===n?void 0:n.description:null===(r=this.article.yoast_head_json)||void 0===r?void 0:r.title},{hid:"og:image",property:"og:image",content:null===(o=this.article)||void 0===o?void 0:o.jetpack_featured_media_url},{hid:"og:title",property:"og:title",content:null===(c=this.article.yoast_head_json)||void 0===c?void 0:c.og_title},{hid:"og:description",property:"og:description",content:null!==(l=this.article.yoast_head_json)&&void 0!==l&&l.description?null===(d=this.article.yoast_head_json)||void 0===d?void 0:d.description:null===(f=this.article.yoast_head_json)||void 0===f?void 0:f.title},{hid:"robots",name:"robots",content:"".concat(null===(h=this.article.yoast_head_json)||void 0===h||null===(h=h.robots)||void 0===h?void 0:h.index,", ").concat(null===(m=this.article.yoast_head_json)||void 0===m||null===(m=m.robots)||void 0===m?void 0:m.follow)}]}},methods:{getTitle:function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(e)}))}}}),c=(n(847),n(1)),l={name:"BlogCategorySlugView",components:{AppSeoLanding:Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inner-page-padding-bottom"},[e("div",{staticClass:"container blog-detail-wrapper container-mini"},[e("main",[t.article.jetpack_featured_media_url?e("img",{staticClass:"blog-image",attrs:{src:t.article.jetpack_featured_media_url,alt:t.getTitle(t.article.title.rendered),height:"375",width:"600"}}):t._e(),t._v(" "),t.article&&t.article.content?e("div",{staticClass:"blog-content",domProps:{innerHTML:t._s(t.article.content.rendered.split("<p>&nbsp;</p>").join(""))}}):t._e()])])])}),[],!1,null,"a47f1c00",null).exports},props:{payload:{type:Object,required:!0}},data:function(){return{lastScrollTop:0}},mounted:function(){window.addEventListener("scroll",this.onWindowScroll.bind(this),!1)},beforeDestroy:function(){var body=document.querySelector("body");window.removeEventListener("scroll",this.onWindowScroll),body&&body.classList.remove("body-sidebar");var t=document.querySelector(".side-send-link");t&&(t.style.top="",t.style.left="")},methods:{onWindowScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop,body=document.querySelector("body"),e=document.querySelector(".side-send-link");if(t>this.lastScrollTop){if(t>140&&body){if(e){var rect=e.getBoundingClientRect();e.style.top="30px",e.style.left="".concat(rect.left,"px")}body.classList.add("body-sidebar")}}else t<140&&body&&(body.classList.remove("body-sidebar"),e&&(e.style.top="",e.style.left=""));this.lastScrollTop=t<=0?0:t}}},d=Object(c.a)(l,(function(){var t=this._self._c;return t("main",{attrs:{"data-template":"blog-slug"}},[t("app-seo-landing",{attrs:{article:this.payload}})],1)}),[],!1,null,null,null).exports,f=n(377),h={name:"BlogPagination",components:{AppBreadcrumbs:n(492).a,BlogCategorySlugView:d},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.prev=1,console.log("params->",n),e.next=5,Object(f.d)(null==n?void 0:n.view);case 5:return r=e.sent,e.next=8,Object(f.c)();case 8:return o=e.sent,e.abrupt("return",{payload:r.data[0],categoryList:o.data});case 12:throw e.prev=12,e.t0=e.catch(1),new Error("Blogs API failed (from wordpress & middleware) "+e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()},data:function(){return{payload:null,slug:null}},head:function(){var t,e,n,r,o=this.$route.params;return isNaN(o.id)?{title:null===(t=this.payload.yoast_head_json)||void 0===t?void 0:t.title,meta:[{hid:"description",name:"description",content:null!==(e=this.payload.yoast_head_json)&&void 0!==e&&e.description?null===(n=this.payload.yoast_head_json)||void 0===n?void 0:n.description:null===(r=this.payload.yoast_head_json)||void 0===r?void 0:r.title}]}:{title:"Rummytime Blogs",meta:[{hid:"description",name:"description",content:""}]}},computed:{breadcrumb:function(){return[{text:"Home",to:"/"},{text:"Blog",to:"/blog/"},{text:this.payload&&this.payload.title.rendered?this.payload.title.rendered:"",active:!0}]}},methods:{findCategoryItems:function(t){var e=this,n=[];return t.categories.length&&t.categories.forEach((function(t){var r=e.categoryList.find((function(e){return parseInt(e.id)===parseInt(t)}));n.length<2&&n.push(r)})),n},formatData:function(t){return new Date(t).toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})}}},m=(n(848),Object(c.a)(h,(function(){var t=this,e=t._self._c;return e("div",[t.breadcrumb?e("div",{staticClass:"breadcrumbs"},[e("div",{staticClass:"container container-mini"},[e("app-breadcrumbs",{attrs:{breadcrumb:t.breadcrumb}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"container container-mini"},[e("div",{staticClass:"blog-bottom"},[e("div",{staticClass:"d-flex"},t._l(t.findCategoryItems(t.payload),(function(n,i){return e("a",{key:i,staticClass:"tag-names",attrs:{href:"/blog/".concat(n.slug)}},[t._v("\n          "+t._s(n.name)+"\n        ")])})),0),t._v(" "),e("div",{staticClass:"blog-date"},[t._v("\n        "+t._s(t.formatData(t.payload.date))+"\n      ")])])]),t._v(" "),e("blog-category-slug-view",{attrs:{payload:t.payload&&t.payload}})],1)}),[],!1,null,null,null));e.default=m.exports}}]);
//# sourceMappingURL=792dc7a.js.map