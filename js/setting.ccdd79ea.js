(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{"4ef5":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"setting"}},[l("b-container",[l("b-row",[l("b-col",{staticClass:"col-12 mb-5"},[l("h1",{staticStyle:{color:"#FF6F61"}},[t._v("RINGTONES")])]),l("b-col",{staticClass:"col-12 mb-5",staticStyle:{background:"#FF6F61"}},[l("h3",{staticClass:"text-white pl-3"},[t._v("WORKS")])]),l("b-col",{staticClass:"col-12"},[l("b-table",{attrs:{items:t.items,fields:t.fields},on:{"row-clicked":t.select},scopedSlots:t._u([{key:"cell(src)",fn:function(t){return[l("audio",{attrs:{controls:"",src:s("1771")("./"+t.value)}})]}},{key:"cell(select)",fn:function(e){return[t.sound===e.item.src?l("b-icon",{staticClass:"h1",attrs:{icon:"file-earmark-play-fill"}}):t._e()]}}])})],1)],1)],1)],1)},c=[],n={name:"Setting",data:function(){return{items:[{name:"鈴聲",src:"alarm.mp3"},{name:"Yay",src:"yay.mp3"}],fields:[{key:"name",label:"名稱"},{key:"src",label:"試聽"},{key:"select",label:"選擇"}]}},computed:{sound:function(){return this.$store.state.sound}},methods:{select:function(t){this.$store.commit("selectSound",t.src)}}},a=n,i=s("2877"),o=Object(i["a"])(a,l,c,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=setting.ccdd79ea.js.map