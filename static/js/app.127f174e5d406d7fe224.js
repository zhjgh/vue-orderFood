webpackJsonp([1],{"0ka3":function(t,o){},AazO:function(t,o){},Hs1y:function(t,o){},NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("MVMM"),a=s("dVeB"),n=s.n(a),i=(s("0ka3"),{render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-shouyin"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-msnui-shop"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-shangpin"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-huiyuan"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-tongji"}),t._v(" "),s("div",[t._v("统计")])])])])}]});var d={name:"app",components:{leftNav:s("Z0/y")({name:"leftNav",data:function(){return{}}},i,!1,function(t){s("h8c8")},"data-v-86083880",null).exports}},c={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("leftNav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l=s("Z0/y")(d,c,!1,function(t){s("Hs1y")},null,null).exports,r=s("zO6J"),p=s("aozt"),g=s.n(p),u={name:"Pos",data:function(){return{tableData:[],oftenGoods:[{goodsId:1,goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsName:"和风汉堡",price:15},{goodsId:4,goodsName:"大包薯条",price:18},{goodsId:5,goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsName:"魔法鸡块",price:20},{goodsId:7,goodsName:"可乐大杯",price:10},{goodsId:8,goodsName:"雪顶咖啡",price:18},{goodsId:9,goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsName:"快乐全家桶",price:99}],type0Goods:[{goodsId:1,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"香辣鸡腿堡",price:18},{goodsId:2,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"田园鸡腿堡",price:15},{goodsId:3,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"和风汉堡",price:15}],type1Goods:[{goodsId:4,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"大包薯条",price:18},{goodsId:5,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"脆皮炸鸡腿",price:20},{goodsId:6,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"魔法鸡块",price:20}],type2Goods:[{goodsId:7,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",goodsName:"可乐大杯",price:10},{goodsId:8,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",goodsName:"雪顶咖啡",price:18}],type3Goods:[{goodsId:9,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",goodsName:"儿童欢乐套餐",price:25},{goodsId:10,goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",goodsName:"快乐全家桶",price:99}],totalCount:0,totalMoney:0}},methods:{addOrderList:function(t){for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力!",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},created:function(){var t=this;"zhjgh.github.io"!=window.location.host&&(g.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(o){t.oftenGoods=o.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),g.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(o){t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")}))}},m={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("div",{attrs:{id:"order-list"}},[s("el-row",[s("el-col",{attrs:{span:7}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"}},[t._v("增加")])]}}])})],1)],1)],1),t._v(" "),s("el-row",{staticClass:"goodsMsg",attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:6}},[t._v("数量："+t._s(t.totalCount))]),t._v(" "),s("el-col",{attrs:{span:6}},[t._v("金额："+t._s(t.totalMoney)+"元")])],1),t._v(" "),s("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(o){t.delAllGoods()}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(o){t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])],1)],1)])],1)],1)])},staticRenderFns:[]};var v=s("Z0/y")(u,m,!1,function(t){s("AazO")},"data-v-1ae8e718",null).exports;e.default.use(r.a);var f=new r.a({routes:[{path:"/",name:"Pos",component:v}]});e.default.config.productionTip=!0,e.default.use(n.a),new e.default({el:"#app",router:f,components:{App:l},template:"<App/>"})},h8c8:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.127f174e5d406d7fe224.js.map