webpackJsonp([4],{Bvnb:function(t,i){},Kjo5:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("weGg"),a=s("1PCG"),e=s("T452"),c={mixins:[s("F4+m").a],data:function(){return{topList:[]}},mounted:function(){this._getTopList()},methods:{_getTopList:function(){var t=this;Object(n.c)().then(function(i){i.code==e.a&&(t.topList=i.data.topList)}).catch(function(t){})},_toDetail:function(t){this.$router.push({path:"/rank_detail",query:{rank_id:t.id,rank_pic:t.picUrl,rank_title:t.topTitle}})},handlePlayList:function(t){var i=t.length>0?"70px":"";this.$refs.list.style.paddingBottom=i}},filters:{favirate:function(t){return Math.ceil(Number(t||0)/1e4)}},components:{Scroll:a.default}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:t.topList}},[s("div",{staticClass:"mod_topic"},[s("ul",{ref:"list"},t._l(t.topList,function(i,n){return s("li",{key:n,staticClass:"topic_item",on:{click:function(s){return t._toDetail(i)}}},[s("div",{staticClass:"topic_main"},[s("a",{staticClass:"topic_media"},[s("img",{attrs:{src:i.picUrl}}),t._v(" "),s("span",{staticClass:"listen_count"},[s("i",{staticClass:"icon icon_listen"}),t._v(" "+t._s(t._f("favirate")(i.listenCount))+"W")])]),t._v(" "),s("div",{staticClass:"topic_info"},[s("div",{staticClass:"topic_cont"},[s("h3",{staticClass:"topic_tit"},[t._v(t._s(i.topTitle))]),t._v(" "),t._l(i.songList,function(i,n){return s("p",{key:n},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(n+1)+"\n\t\t\t\t\t\t\t\t\t"),s("span",{staticClass:"text_name"},[t._v(t._s(i.songname)+" - "+t._s(i.singername))])])})],2),t._v(" "),s("i",{staticClass:"topic_arrow"})])])])}),0)])])],1)},staticRenderFns:[]};var l=s("C7Lr")(c,o,!1,function(t){s("Bvnb")},"data-v-b77905dc",null);i.default=l.exports}});
//# sourceMappingURL=4.cb7b46f7823e4e888cd0.js.map