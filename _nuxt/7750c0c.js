(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{411:function(t,e,n){"use strict";var o=n(18),c=n(156),r=n(157),l=n(382),d=n(383),f=n(379),v=n(21),h=(n(78),n(13),n(380),n(56),n(48),n(32),n(49),n(79),n(381));function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t){var e=k();return function(){var n,o=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}var O=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},j=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).defaultClass={"position-relative":!0,"w-auto":!0,"d-inline-flex":!0,"align-items-center":!0,"justify-content-center":!0,"overflow-hidden":!0,"h-40":!0,"w-40":!0,"p-0":!0,"text-center":!0,"transition-all":!0,"duration-300":!0,"border-radius-circle":!0,"border-none":!0,"border-radius-100":!0,"c-pointer":!0,"select-none":!0,"font-size-24":!0,"text-no-wrap":!0,"text-no-underline":!0},t}return Object(r.a)(n,[{key:"rootClass",get:function(){return y(y({"icon-button--active":this.active},this.defaultClass),this.buttonClass)}},{key:"toggleClass",get:function(){return this.toggle?"icon-button--on":""}},{key:"filledClass",get:function(){return this.filled?"icon-button--filled":""}},{key:"themeClass",get:function(){if(this.theme){var t={};return t["icon-button--".concat(this.theme)]=!0,t}return{}}}]),n}(h.d);O([Object(h.c)({type:String,default:null})],j.prototype,"icon",void 0),O([Object(h.c)({type:String,default:null})],j.prototype,"theme",void 0),O([Object(h.c)({type:Boolean,default:!1})],j.prototype,"active",void 0),O([Object(h.c)({type:String,default:null})],j.prototype,"toggleIcon",void 0),O([Object(h.c)({type:String,default:"button"})],j.prototype,"nativeType",void 0),O([Object(h.c)({type:String,default:"button"})],j.prototype,"tag",void 0),O([Object(h.c)({type:Boolean,default:!1})],j.prototype,"toggle",void 0),O([Object(h.c)({type:String,default:null})],j.prototype,"toggleIco",void 0),O([Object(h.c)({type:Boolean,default:!1})],j.prototype,"loading",void 0),O([Object(h.c)({type:Boolean,default:!1})],j.prototype,"filled",void 0),O([Object(h.c)({type:Object,default:function(){}})],j.prototype,"buttonClass",void 0),O([Object(h.c)({type:Object,default:function(){}})],j.prototype,"iconClass",void 0);var x=j=O([Object(h.a)({})],j),C=n(1),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(t.tag,{tag:"component",staticClass:"icon-button",class:[t.rootClass,t.themeClass,t.toggleClass,t.filledClass],attrs:{type:t.nativeType},on:{click:function(e){return t.$emit("click",e)}}},[t._t("default"),t._v(" "),t.icon?e("span",{staticClass:"icon-button__icon material-icons",class:t.iconClass},[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.toggleIcon?e("span",{staticClass:"icon-button__icon d-inline-block icon-button__icon--on material-icons",class:t.iconClass},[t._v(t._s(t.toggleIcon))]):t._e(),t._v(" "),t.loading?e("span",{staticClass:"button__overlay"},[t._t("loader",(function(){return[t._v(" Loading... ")]}))],2):t._e()],2)}),[],!1,null,null,null);e.a=component.exports},448:function(t,e,n){t.exports={}},450:function(t,e,n){t.exports={}},461:function(t,e,n){"use strict";n(40),n(81),n(48),n(60);var o={components:{},props:{linkInfo:{type:Object,required:!0},baseUrl:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{}},c=(n(478),n(1)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex position-relative border-1 gst-policy-card border-solid border-radius-12 p-12 md:p-16 align-items-center",staticStyle:{"border-color":"rgba(206, 168, 121, 0.9)"}},[e("a",{staticClass:"position-absolute top-0 left-0 w-full h-full z-index-1",attrs:{href:"".concat(t.baseUrl,"/gst-policy/#").concat(t.linkInfo.link)},on:{click:function(e){return e.preventDefault(),t.$emit("linkClicked","jump-link",t.linkInfo.link)}}}),t._v(" "),t.linkInfo.disableTitle?e("div",{staticClass:"flex-1"},[e("img",{staticClass:"w-auto mr-12 md:mr-16 h-32 md:h-44",attrs:{height:"90",width:"402",src:"/images/generic-icons/".concat(t.linkInfo.icon),alt:t.linkInfo.icon}})]):e("div",{staticClass:"flex-shrink-0"},[e("img",{staticClass:"w-40 h-auto mr-12 md:mr-16",attrs:{width:"32",height:"32",src:"/images/generic-icons/".concat(t.linkInfo.icon),alt:t.linkInfo.icon}})]),t._v(" "),t.linkInfo.disableTitle?t._e():e("div",{staticClass:"flex-1"},[e("p",{staticClass:"font-16 md:font-20 font-700 line-height-1-2 md:line-height-1 mb-4"},[t._v(t._s(t.linkInfo.title))]),t._v(" "),e("p",{staticClass:"font-14 md:font-16 line-height-1-2 font-400 opacity-70"},[t._v(t._s(t.linkInfo.description))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"ml-8 md:ml-16 flex-shrink-0"},[t("img",{staticClass:"w-24 md:w-32 h-auto",attrs:{src:"/images/generic-icons/right-arrow.svg",alt:"right arrow"}})])},function(){var t=this._self._c;return t("div",{staticClass:"position-absolute top-0 right-0 pointer-none h-full w-auto"},[t("img",{staticClass:"w-auto h-full",attrs:{src:"/images/generic-icons/pattern.svg",alt:"right arrow"}})])}],!1,null,null,null);e.a=component.exports},462:function(t,e,n){"use strict";var o={provide:function(){return{Accordion:this.Accordion}},props:{},data:function(){return{Accordion:{count:0,active:null}}}},c=(n(482),n(1)),component=Object(c.a)(o,(function(){return(0,this._self._c)("ul",{staticClass:"accordion m-0 p-0"},[this._t("default")],2)}),[],!1,null,"5fad1068",null);e.a=component.exports},478:function(t,e,n){"use strict";n(448)},482:function(t,e,n){"use strict";n(450)},548:function(t,e,n){t.exports={}},549:function(t,e,n){t.exports={}},692:function(t,e,n){"use strict";n(81),n(32),n(13),n(19),n(20);var o=n(462),c={inject:["Accordion"],props:{itemprop:{type:String,required:!1,default:""},itemtype:{type:String,required:!1,default:""}},data:function(){return{index:null,shown:!1,accordionReady:!1}},computed:{visible:function(){return this.index===this.Accordion.active}},mounted:function(){var t=this;this.$nextTick((function(){t.accordionReady=!0}))},created:function(){this.index=this.Accordion.count++},methods:{open:function(){this.shown?this.Accordion.active=null:(this.Accordion.active=this.index,this.$emit("activeIndex",this.index),this.$emit("trackEvent"))},beforeEnter:function(t){t.style.height=0},onEnter:function(t,e){t.addEventListener("transitionend",(function(){e()})),t.style.height=t.scrollHeight+"px",this.$emit("accordionStart")},onAfterEnter:function(t){t.style.height="",this.$emit("accordionEnd"),this.shown=!0,t.removeEventListener("transitionend",(function(){}))},onBeforeLeave:function(t){t.style.height=t.scrollHeight+"px"},onLeave:function(t,e){t.addEventListener("transitionend",(function(){e()}))},onAfterLeave:function(t){var e=this;this.shown=!1,this.$nextTick((function(){t.style.height="",e.$emit("accordionEnd"),t.removeEventListener("transitionend",(function(){}))}))}}},r=(n(727),n(1)),l=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"gst-accordion__item position-relative bg-background border-radius-12",class:{"gst-accordion__item--active":t.shown},attrs:{itemscope:!0,itemprop:t.itemprop,itemtype:t.itemtype}},[e("div",{staticClass:"accordion__trigger position-relative d-flex justify-content-between pt-12 pb-12 pr-16 pl-16 md:pt-16 md:pb-16 cursor-pointer",class:{accordion__trigger_active:t.shown},on:{click:t.open}},[t._t("accordion-trigger"),t._v(" "),e("div",{staticClass:"gst-accordion__icon right-0 position-absolute transition-all duration-300"})],2),t._v(" "),e("transition",{attrs:{name:"accordion","leave-active-class":"accordion--closing","enter-active-class":"accordion--opening","enter-to-class":"accordion--enter-to","leave-to-class":"accordion--leave-to","leave-class":"accordion--leave"},on:{"before-leave":t.onBeforeLeave,"before-enter":t.beforeEnter,enter:t.onEnter,leave:t.onLeave,"after-enter":t.onAfterEnter,"after-leave":t.onAfterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible&&t.accordionReady,expression:"visible && accordionReady"}],staticClass:"accordion__content"},[e("div",{staticClass:"pt-12 pb-12 pr-16 pl-16 md:pt-16 md:pb-16"},[t._t("accordion-content")],2)])])],1)}),[],!1,null,null,null).exports,d=n(523),f={components:{Accordion:o.a,GstAccordionItem:l,GstVideo:d.a},props:{sectionInfo:{type:Object,required:!0},isAppView:{type:Boolean,required:!1,default:!1}},data:function(){return{localActiveIndex:0,loading:!1,accordionStateArr:[]}},computed:{},mounted:function(){this.accordionStateArr.push(0);var t=this.$refs.accordion;0===this.activeIndex&&t&&(t.Accordion.active=0)},methods:{getFilterItem:function(t){return t.filter((function(t){return!t.videoList||t.videoList.length}))},trackGAEvent:function(t){var e=window.dataLayer;e&&e.push({event:"gst-click",category:this.isAppView?"app-ques-".concat(t.title):"ques-".concat(t.title),action:"click",noninteraction:!1})},onActiveIndexAccordion:function(t){this.localActiveIndex=t},onAccordionEnd:function(){if(this.accordionStateArr.includes(this.localActiveIndex)){if(0!==this.activeIndex)return 0;this.accordionStateArr=[],this.localActiveIndex=0}else this.accordionStateArr.push(this.localActiveIndex)}}},v=(n(728),Object(r.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-16 pb-16 md:pt-24 md:pb-24 position-relative"},[t._m(0),t._v(" "),e("div",{staticClass:"container-v1 container-v1--box gutter-3 md:gutter-4 pt-16 pb-16 md:pt-24 md:pb-24"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col--12"},[e("h2",{staticClass:"font-24 md:font-36 font-700 line-height-1-2 md:line-height-1-5 mb-16 md:mb-24"},[t._v(t._s(t.sectionInfo.title))]),t._v(" "),t.sectionInfo.videoList&&t.sectionInfo.videoList.length?[e("gst-video",{attrs:{videos:t.sectionInfo.videoList,"section-link":t.sectionInfo.link,"is-app-view":t.isAppView}})]:t._e(),t._v(" "),e("div",{},[e("accordion",{ref:"accordion",staticClass:"gst-accordion"},t._l(t.getFilterItem(t.sectionInfo.faqs),(function(n,o){return e("gst-accordion-item",{key:o,staticClass:"mb-8 md:mb-16",on:{accordionEnd:t.onAccordionEnd,activeIndex:t.onActiveIndexAccordion,trackEvent:function(e){return t.trackGAEvent(n)}},scopedSlots:t._u([{key:"accordion-trigger",fn:function(){return[e("h2",{staticClass:"font-12 md:font-20 text-on-surface-variant pr-16 font-700 line-height-1-5 md:line-height-1-2",attrs:{itemprop:"name"}},[t._v("\n                  "+t._s(n.title)+"\n                ")])]},proxy:!0},{key:"accordion-content",fn:function(){return[n.videoList&&n.videoList.length?[e("gst-video",{attrs:{videos:n.videoList,"section-link":t.sectionInfo.link,"is-app-view":t.isAppView,"is-faq":!0,question:n.title}})]:t._e(),t._v(" "),e("div",{domProps:{innerHTML:t._s(n.content)}})]},proxy:!0}],null,!0)})})),1)],1)],2)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"position-absolute top-0 left-0 w-full justify-content-center align-items-center d-flex",staticStyle:{transform:"translateY(-50%)",top:"0"}},[e("div",{staticClass:"flex-1 gst-divider mr-12"}),t._v(" "),e("div",{staticClass:"flex-shrink-0 h-12 sm:h-18 md:h-32"},[e("img",{staticClass:"w-auto h-12 sm:h-18 md:h-32",attrs:{src:"/images/generic-icons/divider.svg",alt:"divider"}})]),t._v(" "),e("div",{staticClass:"flex-1 gst-divider gst-divider--inverse ml-12"})])}],!1,null,null,null));e.a=v.exports},696:function(t,e,n){"use strict";n(81),n(40);var o=n(156),c=n(157),r=n(382),l=n(383),d=n(379),f=n(21),v=(n(78),n(13),n(380),n(381));function h(t){var e=m();return function(){var n,o=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var y=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},_=function(t){Object(r.a)(n,t);var e=h(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"onReadyChange",value:function(t){var e=document.querySelector('[data-link="'+t+'"]');this.scrollTo(e)}},{key:"mounted",value:function(){var t=window.location.hash,e=document.querySelector('[data-link="'+t+'"]');this.scrollTo(e)}},{key:"scrollTo",value:function(t){if(t){var e=t.offsetLeft+t.offsetWidth,n=t.parentNode.offsetLeft+t.parentNode.offsetWidth;e>=n+t.parentNode.scrollLeft?t.parentNode.scrollLeft=e-n:e<=t.parentNode.offsetLeft+t.parentNode.scrollLeft&&(t.parentNode.scrollLeft=t.offsetLeft-t.parentNode.offsetLeft)}}}]),n}(v.d);y([Object(v.c)({type:Array,default:[]})],_.prototype,"gstFeatureList",void 0),y([Object(v.c)({type:String,default:""})],_.prototype,"activeSectionId",void 0),y([Object(v.c)({type:String,default:""})],_.prototype,"baseUrl",void 0),y([Object(v.e)("activeSectionId",{immediate:!1})],_.prototype,"onReadyChange",null);var k=_=y([Object(v.a)({components:{}})],_),O=n(1),component=Object(O.a)(k,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"position-fixed gst-links-wrapper w-full top-0 left-0 z-index-10 bg-background gst-tabs text-left",attrs:{id:"gst-tabs-link"}},[e("div",{staticClass:"container-v1 container-v1--box h-full"},[e("ul",{staticClass:"m-0 gst-tabs text-left d-flex w-full overflow-x-auto align-items-center transition-all duration-300 h-full"},t._l(t.gstFeatureList,(function(n,o){return e("li",{key:o,staticClass:"position-relative flex-shrink-0 h-full ml-4 md:ml-16 gst-links-list",attrs:{"data-link":"".concat(n.link)}},[e("a",{staticClass:"d-flex align-items-center justify-content-center h-full border-radius-24 md:font-20 font-12 line-height-20 w-full pl-12 md:pl-24 pr-12 md:pr-24 gst-links",class:{"text-on-primary bg-primary":t.activeSectionId===n.link},attrs:{href:"".concat(t.baseUrl,"/gst-policy/#").concat(n.link)},on:{click:function(e){return e.preventDefault(),t.$emit("linkClicked","sticky-nav",n.link)}}},[e("span",{staticClass:"text-left no-events"},[t._v(t._s(n.title))])])])})),0)])])}),[],!1,null,null,null);e.a=component.exports},727:function(t,e,n){"use strict";n(548)},728:function(t,e,n){"use strict";n(549)}}]);
//# sourceMappingURL=7750c0c.js.map