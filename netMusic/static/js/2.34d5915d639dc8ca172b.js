webpackJsonp([2],{"Sgn/":function(t,i,s){"use strict";i.b=function(){var t={"-":"getUCGI8040122966070598",g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq.json",needNewCode:0,data:c()({comm:{ct:24,cv:0},singerList:{module:"Music.SingerListServer",method:"get_singer_list",param:{area:-100,sex:-100,genre:-100,index:-100,sin:0,cur_page:1}}})};return Object(u.a)("https://u.y.qq.com/cgi-bin/musicu.fcg?",t,{})},i.a=function(t){var i={g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq.json",needNewCode:0},s={"-":"getUCGI16316501972998343",data:c()({comm:{ct:24,cv:0},singer:{method:"get_singer_detail_info",param:{sort:5,singermid:t,sin:0,num:20},module:"music.web_singer_info_svr"}})};return Object(u.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?",a()(i,s),{})};var n=s("aA9S"),a=s.n(n),e=s("rVsN"),r=(s.n(e),s("3cXf")),c=s.n(r),o=s("84iU"),u=(s.n(o),s("Gak4"));s("T452")},dGhF:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("3cXf"),a=s.n(n),e=s("Sgn/"),r=s("1PCG"),c=s("T+mS"),o=s("Baa2"),u=(s("T452"),{data:function(){return{singermid:"0025NhlN2yWrP4",singer_pic:"",singer_name:"",total:"",songs:[]}},mounted:function(){this.singermid=this.$route.query.singermid,this.singer_pic=this.$route.query.singer_pic},activated:function(){this.singermid=this.$route.query.singermid,this.singer_pic=this.$route.query.singer_pic,this._getSingerDetail()},methods:{_getSingerDetail:function(){var t=this;Object(e.a)(this.singermid).then(function(i){var s=i.data.list||[];t.total=i.data.total||0,t.singer_name=i.data.singer_name;var n=[];console.log("歌曲==="+a()(s)),s.forEach(function(t){n.push(new o.a(t.musicData.songid,t.musicData.songname,t.musicData.albumname,t.musicData.singer[0].name,t.musicData.singer[0].mid,t.musicData.strMediaMid))}),t.songs=n||[]}).catch(function(t){})}},components:{Scroll:r.default,SongList:c.default}}),g={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"info_box"},[s("div",{staticClass:"info_box__bd"},[s("div",{staticClass:"album"},[s("div",{staticClass:"album__media"},[s("img",{staticClass:"album__cover",attrs:{src:t.singer_pic}})]),t._v(" "),s("div",{staticClass:"album__bd"},[s("h1",{staticClass:"album__name"},[t._v(t._s(t.singer_name))]),t._v(" "),s("p",{staticClass:"total"},[t._v("单曲 "+t._s(t.total))])])])])]),t._v(" "),s("scroll",{ref:"scroll",staticClass:"scroll",attrs:{data:t.songs}},[s("song-list",{attrs:{data:t.songs}})],1)],1)},staticRenderFns:[]};var m=s("C7Lr")(u,g,!1,function(t){s("nj/I")},"data-v-9829a9b2",null);i.default=m.exports},"nj/I":function(t,i){}});
//# sourceMappingURL=2.34d5915d639dc8ca172b.js.map