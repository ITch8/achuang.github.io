(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-health-index"],{"0d8b":function(t,e,a){"use strict";a.r(e);var i=a("328b"),n=a("86d3");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("8546");var c=a("2877"),r=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"d358b80a",null);e["default"]=r.exports},"1ecf":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page[data-v-e3c834c4]{height:100vh}.page .server_type_img[data-v-e3c834c4]{height:%?236?%;margin:0 %?1?%}.page .server_type_img_t[data-v-e3c834c4]{height:%?241?%;margin:0 %?1?%}.page .align-center-m[data-v-e3c834c4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}',""])},"1f07":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"search-bar"},[a("v-uni-view",{staticClass:"cu-bar search",class:{"bg-gradual-blue":t.isSearchBarActive}},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"icon-location"}),a("v-uni-text",{staticStyle:{"font-size":"28upx"}},[t._v("深圳")])],1),a("v-uni-view",{staticClass:"search-form round"},[a("v-uni-text",{staticClass:"icon-search"}),a("v-uni-input",{attrs:{"adjust-position":!1,type:"text",placeholder:t.placeholder,"confirm-type":"search"},on:{focus:function(e){e=t.$handleEvent(e),t.searchInputFocus(e)}},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},2582:function(t,e,a){"use strict";a.r(e);var i=a("8877"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"2e4b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-card article"},t._l(t.medicalsList,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item shadow",attrs:{"hover-class":"hover"},on:{click:function(a){a=t.$handleEvent(a),t.toDetail(e.title)}}},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"desc"},[a("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.content))])],1)],1)],1)}),1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"304e":function(t,e,a){"use strict";a.r(e);var i=a("da7e"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},"328b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"product-list bg-white",class:{"margin-top-header":t.isUnderHeader}},t._l(t.goodsList,function(e,i){return a("v-uni-view",{key:i,staticClass:"product",attrs:{"hover-class":"hover"},on:{click:function(a){a=t.$handleEvent(a),t.toGoodDetail(e)}}},[a("v-uni-image",{attrs:{mode:"widthFix",src:e.img,"lazy-load":"true"}}),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"price"},[t._v(t._s(e.price))]),a("v-uni-view",{staticClass:"slogan"},[t._v(t._s(e.slogan))])],1)],1)}),1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"3cfa":function(t,e,a){"use strict";a.r(e);var i=a("bde5"),n=a("2582");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("4f0c");var c=a("2877"),r=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"e3c834c4",null);e["default"]=r.exports},"4b18":function(t,e,a){"use strict";var i=a("dfb0"),n=a.n(i);n.a},"4f0c":function(t,e,a){"use strict";var i=a("e956"),n=a.n(i);n.a},7341:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cu-card>.cu-item[data-v-614086c4]{margin:0}.cu-card.article>.cu-item[data-v-614086c4]{padding-bottom:%?10?%}.cu-card.article>.cu-item .content[data-v-614086c4],.cu-card.article>.cu-item .title[data-v-614086c4]{padding:0 %?15?%}',""])},"73eb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"search-bar",data:function(){return{searchKey:""}},props:{isSearchBarActive:{type:Boolean,default:!1},placeholder:{type:String,default:"搜索医生、医院、科室"}},methods:{searchInputFocus:function(){uni.navigateTo({url:"/pages/search/searchResult"})}}};e.default=i},"77da":function(t,e,a){"use strict";a.r(e);var i=a("1f07"),n=a("8be0");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("4b18");var c=a("2877"),r=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"428b1352",null);e["default"]=r.exports},8546:function(t,e,a){"use strict";var i=a("a9bc"),n=a.n(i);n.a},"86d3":function(t,e,a){"use strict";a.r(e);var i=a("f0a3"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},8877:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("77da")),s=i(a("0d8b")),c=i(a("e23f")),r={data:function(){return{isSearchBarActive:!1,placeholder:"搜索关键词",swiperList:[{id:0,type:"image",url:"/static/img/temp/banner2.png"},{id:1,type:"image",url:"/static/img/temp/banner2.png"}],serverTypes:[{mode:"aspectFill",text:"去预约",src:"/static/img/temp/2_1.png"},{mode:"aspectFill",text:"附近医院",src:"/static/img/temp/2_2.png"},{mode:"aspectFill",text:"找医生",src:"/static/img/temp/2_3.png"}],productList:[{goods_id:"0",img:"../../static/img/health/temp/h_3_3.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_2.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_3.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_2.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_2.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_3.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_2.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"},{goods_id:"0",img:"../../static/img/health/temp/h_3_2.png",name:"香港九价HPV疫苗 周期0-2-6",price:"￥1600",slogan:"135人付款"}],medicalsList:[{title:"【癌症药物】Keytruda",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda是怎么了？",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda是怎么了？",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda是怎么了？",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda是怎么了？",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"},{title:"【癌症药物】Keytruda",content:"这是什么药什么药什么药这是什么药什么药什么药这是什么药什么药什么药这是什么药药…",url:"../../static/img/health/temp/h_4_1.png"}]}},methods:{pageScroll:function(t){this.isSearchBarActive=t.detail.scrollTop>150},clickitem:function(t,e){},searchInputFocus:function(){},searchInputBlur:function(){},toOtherPage:function(t){uni.navigateTo({url:t})}},components:{SearchBar:n.default,GoodsList:s.default,MedicalList:c.default}};e.default=r},"8be0":function(t,e,a){"use strict";a.r(e);var i=a("73eb"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},a4d4:function(t,e,a){var i=a("7341");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("97aca2c8",i,!0,{sourceMap:!1,shadowMode:!1})},a6d5:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.search-bar[data-v-428b1352]{position:fixed;top:0;z-index:99;width:100%;background:hsla(0,0%,100%,.1)}.search-bar .icon-search[data-v-428b1352],.search-bar .search[data-v-428b1352]{color:#fff}.search-bar .icon-location-title[data-v-428b1352]{font-size:%?28?%}.search-bar .search-form[data-v-428b1352]{background-color:rgba(242,250,255,.5)}',""])},a9bc:function(t,e,a){var i=a("e849");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("ad5e91e4",i,!0,{sourceMap:!1,shadowMode:!1})},bde5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":""},on:{scroll:function(e){e=t.$handleEvent(e),t.pageScroll(e)}}},[a("SearchBar",{attrs:{isSearchBarActive:t.isSearchBarActive,searchInputFocus:t.searchInputFocus,searchInputBlur:t.searchInputBlur,placeholder:t.placeholder}}),a("v-uni-swiper",{staticClass:"screen-swiper",class:"square-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,function(e,i){return a("v-uni-swiper-item",{key:i},["image"==e.type?a("v-uni-image",{attrs:{src:e.url,mode:"scaleToFill"}}):t._e(),"video"==e.type?a("v-uni-video",{attrs:{src:e.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)}),1),a("v-uni-view",{staticClass:"bg-white padding-sm"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{staticClass:"flex-sub server_type_img",attrs:{src:"../../static/img/health/h_1_1.png"},on:{click:function(e){e=t.$handleEvent(e),t.toOtherPage("/pages/vaccine/vaccine")}}}),a("v-uni-image",{staticClass:"flex-sub server_type_img margin-left-xs",attrs:{src:"../../static/img/health/h_1_2.png"},on:{click:function(e){e=t.$handleEvent(e),t.toOtherPage("/pages/medical/medical")}}})],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-image",{staticClass:"flex-sub server_type_img_t",attrs:{src:"../../static/img/health/h_2_1.png"},on:{click:function(e){e=t.$handleEvent(e),t.toOtherPage("/pages/goods/goodsList?type=检测服务")}}}),a("v-uni-image",{staticClass:"flex-sub server_type_img_t",attrs:{src:"../../static/img/health/h_2_2.png"},on:{click:function(e){e=t.$handleEvent(e),t.toOtherPage("/pages/goods/goodsList?type=医疗美容")}}}),a("v-uni-image",{staticClass:"flex-sub server_type_img_t",attrs:{src:"../../static/img/health/h_2_3.png"},on:{click:function(e){e=t.$handleEvent(e),t.toOtherPage("/pages/goods/goodsList?type=国外医疗")}}})],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action border-title"},[a("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("HPV疫苗")])],1)],1),a("goods-list",{attrs:{goodsList:t.productList}}),a("v-uni-view",{staticClass:"bg-img bg-white margin-top-sm align-center  align-center-m",staticStyle:{"background-image":"url('/static/img/temp/5_1.png')",height:"178upx",width:"100%"}},[a("v-uni-view",{staticClass:"text-white text-center"},[a("v-uni-view",{staticClass:"text-xxl text-bold"},[t._v("一键挂号 看病不用愁")]),a("v-uni-view",{staticClass:"text-xs"},[t._v("百汇健康为您提供最权威的专家远程诊疗 更方便")])],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white padding-top-sm"},[a("v-uni-view",{staticClass:"action border-title"},[a("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("新药研发")])],1)],1),a("v-uni-view",{staticClass:"medicals bg-white"},[a("medical-list",{attrs:{medicalsList:t.medicalsList}})],1),a("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},da7e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{medicalsList:{type:Array,default:null}},data:function(){return{status:"more",showIcon:!0}},methods:{loadData:function(t){this.status="loading",console.log("status===".concat(this.status))},toDetail:function(t){uni.navigateTo({url:"/pages/medical/medical_article?title="+t})}},components:{}};e.default=i},dfb0:function(t,e,a){var i=a("a6d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("256cf6e3",i,!0,{sourceMap:!1,shadowMode:!1})},e23f:function(t,e,a){"use strict";a.r(e);var i=a("2e4b"),n=a("304e");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("f740");var c=a("2877"),r=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"614086c4",null);e["default"]=r.exports},e849:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-list[data-v-d358b80a]{width:100%;padding:0 2% %?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.product-list .product[data-v-d358b80a]{width:49.5%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0;padding:%?10?%}.product-list .product.hover[data-v-d358b80a]{background-color:#eee}.product-list .product uni-image[data-v-d358b80a]{width:100%;border-radius:%?20?% %?20?% 0 0;will-change:transform}.product-list .product .name[data-v-d358b80a]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.product-list .product .info[data-v-d358b80a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.product-list .product .info .price[data-v-d358b80a]{color:#e65339;font-size:%?30?%;font-weight:600}.product-list .product .info .slogan[data-v-d358b80a]{color:#807c87;font-size:%?24?%}',""])},e956:function(t,e,a){var i=a("1ecf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("a70ea7e2",i,!0,{sourceMap:!1,shadowMode:!1})},f0a3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7f7f");var i={name:"goods-list",data:function(){return{}},props:{isUnderHeader:{type:Boolean,default:!1},goodsList:{type:Array,default:null}},methods:{toGoodDetail:function(t){uni.navigateTo({url:"/pages/goods/goodsDetail?title="+t.name})}},components:{}};e.default=i},f740:function(t,e,a){"use strict";var i=a("a4d4"),n=a.n(i);n.a}}]);