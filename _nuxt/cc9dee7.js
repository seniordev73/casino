(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{497:function(e,t,n){"use strict";var l=n(412),o=n(389);function r(){return r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e},r.apply(this,arguments)}var d={update:function(){var e=this,t=e.rtl,n=e.params.pagination;if(n.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el,m=e.params.loop?Math.ceil((d-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>d-1-2*e.loopedSlides&&(r-=d-2*e.loopedSlides),r>m-1&&(r-=m),r<0&&"bullets"!==e.params.paginationType&&(r=m+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var h,v,y,C=e.pagination.bullets;if(n.dynamicBullets&&(e.pagination.bulletSize=C.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>n.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=n.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),h=r-e.pagination.dynamicBulletIndex,y=((v=h+(Math.min(C.length,n.dynamicMainBullets)-1))+h)/2),C.removeClass(n.bulletActiveClass+" "+n.bulletActiveClass+"-next "+n.bulletActiveClass+"-next-next "+n.bulletActiveClass+"-prev "+n.bulletActiveClass+"-prev-prev "+n.bulletActiveClass+"-main"),c.length>1)C.each((function(e){var t=Object(l.a)(e),o=t.index();o===r&&t.addClass(n.bulletActiveClass),n.dynamicBullets&&(o>=h&&o<=v&&t.addClass(n.bulletActiveClass+"-main"),o===h&&t.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),o===v&&t.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next"))}));else{var f=C.eq(r),w=f.index();if(f.addClass(n.bulletActiveClass),n.dynamicBullets){for(var x=C.eq(h),A=C.eq(v),i=h;i<=v;i+=1)C.eq(i).addClass(n.bulletActiveClass+"-main");if(e.params.loop)if(w>=C.length-n.dynamicMainBullets){for(var I=n.dynamicMainBullets;I>=0;I-=1)C.eq(C.length-I).addClass(n.bulletActiveClass+"-main");C.eq(C.length-n.dynamicMainBullets-1).addClass(n.bulletActiveClass+"-prev")}else x.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),A.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next");else x.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),A.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next")}}if(n.dynamicBullets){var _=Math.min(C.length,n.dynamicMainBullets+4),R=(e.pagination.bulletSize*_-e.pagination.bulletSize)/2-y*e.pagination.bulletSize,B=t?"right":"left";C.css(e.isHorizontal()?B:"top",R+"px")}}if("fraction"===n.type&&(c.find(Object(o.b)(n.currentClass)).text(n.formatFractionCurrent(r+1)),c.find(Object(o.b)(n.totalClass)).text(n.formatFractionTotal(m))),"progressbar"===n.type){var k;k=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var O=(r+1)/m,D=1,T=1;"horizontal"===k?D=O:T=O,c.find(Object(o.b)(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+D+") scaleY("+T+")").transition(e.params.speed)}"custom"===n.type&&n.renderCustom?(c.html(n.renderCustom(e,r+1,m)),e.emit("paginationRender",c[0])):e.emit("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](n.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,l=e.pagination.$el,r="";if("bullets"===t.type){var d=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&d>n&&(d=n);for(var i=0;i<d;i+=1)t.renderBullet?r+=t.renderBullet.call(e,i,t.bulletClass):r+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";l.html(r),e.pagination.bullets=l.find(Object(o.b)(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',l.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',l.html(r)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=Object(o.c)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var t=e.params.pagination;if(t.el){var n=Object(l.a)(t.el);0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&n.length>1&&(n=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(n.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",Object(o.b)(t.bulletClass),(function(t){t.preventDefault();var n=Object(l.a)(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)})),Object(o.e)(e.pagination,{$el:n,el:n[0]}),e.enabled||n.addClass(t.lockClass))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",Object(o.b)(t.bulletClass))}}};t.a={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){Object(o.a)(this,{pagination:r({dynamicBulletIndex:0},d)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var t=e.pagination.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,t){var n=t.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!Object(l.a)(n).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}},569:function(e,t,n){e.exports={}},748:function(e,t,n){"use strict";n(569)},902:function(e,t,n){"use strict";n.r(t);n(13),n(33),n(38),n(40);var l=n(691),o={name:"DownloadContent",components:{LazyImage:n(158).a},data:function(){return{}}},r=n(1),d=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"md:pt-[128px] pt-16 md:pb-[88px] pb-16 bg-[#E3D6C6] relative w-full overflow-hidden"},[t("div",{staticClass:"mx-auto max-w-[1178px] px-4 md:px-6"},[t("div",{staticClass:"grid grid-cols-12 gap-x-6 md:gap-x-12 md:gap-y-0 gap-y-6"},[t("div",{staticClass:"md:col-span-5 col-span-12"},[t("div",{staticClass:"grid grid-cols-12 gap-y-3 gap-x-3 md:gap-y-6 md:gap-x-6"},[t("div",{staticClass:"col-span-12 total-reviews flex items-center justify-center py-8 rounded-4 bg-[#DAC9B5]"},[t("LazyImage",{staticClass:"md:max-w-[240px] max-w-[200px] h-auto",attrs:{src:"/images/app-download/rummytime-review.png",width:"481",height:"365",alt:"rummytime reviews"}})],1),e._v(" "),t("div",{staticClass:"col-span-6 p-6 flex justify-center items-center rounded-4 bg-[#DAC9B5]"},[t("div",{staticClass:"text-center"},[t("div",{staticClass:"flex justify-center"},[t("LazyImage",{staticClass:"h-10 w-10 mb-1",attrs:{src:"/images/app-download/people-icon.png",width:"40",height:"40",alt:"1.7 crore users"}})],1),e._v(" "),t("p",{staticClass:"text-6 font-700 mb-1 line-height-8"},[e._v("1.7 Crore")]),e._v(" "),t("p",{staticClass:"text-3"},[e._v("players")])])]),e._v(" "),t("div",{staticClass:"col-span-6 py-6 flex justify-center items-center rounded-4 bg-[#DAC9B5]"},[t("div",{staticClass:"text-center"},[t("div",{staticClass:"flex justify-center"},[t("LazyImage",{staticClass:"h-10 w-10 mb-1",attrs:{src:"/images/app-download/18+.png",width:"40",height:"40",alt:"1.7 crore users"}})],1),e._v(" "),t("p",{staticClass:"text-6 font-700 mb-1 line-height-8"},[e._v("18+")]),e._v(" "),t("p",{staticClass:"text-3"},[e._v("Rated")])])])])]),e._v(" "),t("div",{staticClass:"md:col-span-7 col-span-12"},[t("div",{staticClass:"flex justify-between items-center"},[t("h1",{staticClass:"md:text-8 text-5 text-primary font-700 text-[#1B2541]"},[e._v("Download Rummy Game App")]),e._v(" "),t("LazyImage",{staticClass:"md:h-16 md:w-16 h-12 w-12 ml-4",attrs:{src:"/images/app-download/rounded-card-icon.png",width:"64",height:"64",alt:"rounded card"}})],1),e._v(" "),t("div",{staticClass:"md:mt-4 mt-2 text-on-secondary md:text-4 text-3.5 line-height-5 md:line-height-8"},[t("p",[e._v("\n            Do you love playing rummy? Well, then you will be amongst the millions of Indians who are passionate about "),t("nuxt-link",{staticClass:"text-[#51065d]",attrs:{to:"/"}},[e._v("rummy games")]),e._v(". It requires skill and strategy, and it is so much fun. Now, you can play the game any time you want by simply downloading the RummyTime app on your phone.\n          ")],1),e._v(" "),t("p",{staticClass:"mt-1"},[e._v("Ready?")]),e._v(" "),t("p",{staticClass:"mt-1"},[e._v("Why Choose RummyTime")]),e._v(" "),t("p",{staticClass:"mt-1"},[e._v("\n            RummyTime is one of the most popular apps to play rummy on. It offers thrilling variations of the game and it is a safe and secure gaming platform to play "),t("nuxt-link",{staticClass:"text-[#51065d]",attrs:{to:"/real-cash-rummy-game/"}},[e._v("cash rummy")]),e._v(" games. That’s why it is trusted by over 1.7 crore players across the country. You can download RummyTime either through the Google Play Store or the Apple App Store. You can even download it from the website. It is easy to install and you can be playing the "),t("nuxt-link",{staticClass:"text-[#51065d]",attrs:{to:"/indian-rummy-game/"}},[e._v("Indian Rummy")]),e._v(" game in minutes. The platform comes with a host of amazing features, rewards, and exciting cash prizes. What’s not to love?\n          ")],1)])])]),e._v(" "),t("div",{staticClass:"h-6 w-full absolute bottom-[-10px] left-0 z-index-1 bg-contain",staticStyle:{"background-image":"url('/images/app-download/frame-pattern.png')"}})])])}),[],!1,null,null,null).exports,c=n(693),m=n(697),h=n(698),v=n(699),y=n(393),C={name:"RummyGameAppDownload",components:{installsteps:function(){return Promise.resolve().then(n.bind(null,41))},popupBackdrop:n(399).default,appDownload:y.a,AppDownloadBanner:l.a,AppDownloadContent:d,AppDownloadHowTo:c.a,AppDownloadWhyRummyTime:m.a,AppDownloadFaq:h.a,AppDownloadReview:v.a},layout:"TransparentToDarkHeader",data:function(){return{showInstallInstructionsPopup:!1,sliders:[{id:1,bannerImageUrl:"/images/app-download/banner-image.png",targetUrl:"/trust-report/",title:"Rewards on RummyTime app",alt:"Rewards on RummyTime app"}],listItem:[{open:!1,text:"Can I win real money on RummyTime?",html:"Yes. If you join cash games or cash tournaments, then you stand a chance to win exciting cash prizes on RummyTime."},{open:!1,text:"Is RummyTime safe and secure?",html:"Yes. RummyTime is an ISO (ISO 17025) certified gaming platform. It is also RNG certified. The app has procedures in place that are of the highest standards."},{open:!1,text:"Is RummyTime a free app?",html:"You can install the app and register yourself without any payment. However, you will have to pay the Buy-In if you want to join cash games. RummyTime will take a small commission from the Buy-In. Otherwise, it is completely free."},{open:!1,text:"Can I play cash tournaments after signing up on RummyTime?",html:"Yes. All you have to do is register yourself and complete the KYC verification process. Then all you have to do is Add Cash and join a cash tournament."}]}},head:function(){return{title:"Rummy App - Download Online Rummy App for Android & iOS or Rummy APK",meta:[{hid:"description",name:"description",content:"Steps to Download Rummy Game App - ✔Direct APK ✔Rummy App from Google Play Store ✔Rummy App from iOS Store. RummyTime is India's Top Rummy App with 1.7 Crore + registered users."},{hid:"keywords",name:"keywords",content:"rummy apk, rummy app, rummy app download, rummy game app"},{hid:"og:url",property:"og:url",content:"".concat("https://www.rummytime.com").concat(this.$route.path)},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:locale",property:"og:locale",content:"en_US"},{hid:"robots",name:"robots",content:"index, follow"}],link:[{hid:"canonical",rel:"canonical",href:"".concat("https://www.rummytime.com").concat(this.$route.fullPath)}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.rummytime.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.rummytime.com/rummy-game-app-download/",name:"Download Rummy App"}}]}},{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"SoftwareApplication",name:"RummyTime",operatingSystem:"Android, iOS",applicationCategory:"GameApplication",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.5",ratingCount:"31000"},offers:{"@type":"Offer",price:"0",priceCurrency:"INR"}}}]}},mounted:function(){this.handleScroll()},methods:{onAppDownloadClicked:function(){this.showInstallInstructionsPopup=!0},handleScroll:function(){var e=0;window.addEventListener("scroll",(function(){var t=window.pageYOffset||document.documentElement.scrollTop,body=document.querySelector("body");t>e?t>591&&body&&body.classList.add("body-scrolled"):t<591&&body&&body.classList.remove("body-scrolled"),e=t<=0?0:t}),!1)}}},f=(n(748),Object(r.a)(C,(function(){var e=this,t=e._self._c;return t("div",[t("AppDownloadBanner",{staticClass:"pt-16 md:pt-20",attrs:{sliders:e.sliders},on:{appDownloadClicked:e.onAppDownloadClicked}}),e._v(" "),t("AppDownloadContent"),e._v(" "),t("AppDownloadHowTo"),e._v(" "),t("AppDownloadWhyRummyTime",{staticClass:"bg-[#E3D6C6]"}),e._v(" "),t("AppDownloadFaq",{attrs:{"list-item":e.listItem}}),e._v(" "),t("AppDownloadReview"),e._v(" "),t("transition",{attrs:{name:"slide-up"}},[t("installsteps",{directives:[{name:"show",rawName:"v-show",value:e.showInstallInstructionsPopup,expression:"showInstallInstructionsPopup"}],on:{closeInstallInstructionsPopup:function(t){e.showInstallInstructionsPopup=!1}}})],1),e._v(" "),e.showInstallInstructionsPopup?t("div",{staticClass:"popup-backdrop",on:{click:function(t){e.showInstallInstructionsPopup=!1}}}):e._e()],1)}),[],!1,null,null,null));t.default=f.exports}}]);
//# sourceMappingURL=cc9dee7.js.map