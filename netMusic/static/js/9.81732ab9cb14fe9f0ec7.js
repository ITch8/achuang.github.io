webpackJsonp([9],{"4gLu":function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("T+mS"),e=s("1PCG"),n=s("9cIF"),_=(s("T452"),s("Baa2")),o={data:function(){return{album__name:"",album__cover:"",author__name:"",album__desc:"",author__avatar:"",disstid:"",songs:[]}},mounted:function(){},methods:{_getRadioDetail:function(){var a=this;Object(n.a)(this.disstid).then(function(t){var s=t.cdlist[0],i=s.songlist||[],e=[];a.album__name=s.dissname,a.album__cover=s.logo,a.author__name=s.nickname,a.album__desc=s.visitnum,a.author__avatar=s.headurl,i.forEach(function(a){e.push(new _.a(a.songid,a.songname,a.albumname,a.singer[0].name,a.singer[0].mid,a.strMediaMid))}),a.songs=e}).catch(function(a){})}},activated:function(){this.disstid=this.$route.query.disstid||"",this._getRadioDetail(),console.log(this.disstid)},components:{SongList:i.default,Scroll:e.default},filters:{numFilter:function(a){return Math.ceil(Number(a||0)/1e4)}}},r={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"info_box"},[s("div",{staticClass:"info_box__bd"},[s("div",{staticClass:"album"},[s("div",{staticClass:"album__media"},[s("img",{staticClass:"album__cover js_open_music",attrs:{src:a.album__cover}})]),a._v(" "),s("div",{staticClass:"album__bd"},[s("h1",{staticClass:"album__name js_info_show"},[a._v(a._s(a.album__name))]),a._v(" "),s("div",{staticClass:"author js_open_author"},[s("img",{staticClass:"author__avatar",attrs:{src:a.author__avatar}}),a._v(" "),s("div",{staticClass:"author__bd"},[s("span",{staticClass:"author__name"},[a._v(a._s(a.author__name))])])]),a._v(" "),s("div",{staticClass:"album__desc"},[a._v("播放量："+a._s(a._f("numFilter")(a.album__desc))+"万")])])])])]),a._v(" "),s("scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:a.songs}},[s("song-list",{attrs:{data:a.songs}})],1)],1)},staticRenderFns:[]};var u=s("C7Lr")(o,r,!1,function(a){s("TgtN")},"data-v-183a2b1a",null);t.default=u.exports},TgtN:function(a,t){}});
//# sourceMappingURL=9.81732ab9cb14fe9f0ec7.js.map