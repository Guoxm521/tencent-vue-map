!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueBaiduMap=t():e.VueBaiduMap=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));const o=e=>Object.prototype.toString.call(e).slice(8,-1),i=e=>!!(e.sw&&e.ne&&e.sw.lat&&e.sw.lng&&e.ne.lat&&e.ne.lng),s=e=>-1!==["TOP_LEFT","TOP_CENTER","TOP_RIGHT","CENTER_LEFT","CENTER","CENTER_RIGHT","BOTTOM_LEFT","BOTTOM_CENTER","BOTTOM_RIGHT"].indexOf(e),r=e=>-1!==["vector","satellite","traffic"].indexOf(e)},function(e,t,n){"use strict";var o={"tencent-map":["idle","tilesloaded","click","rightclick","dblclick","mousedown","mouseup","mousemove","touchstart","touchmove","touchend","dragstart","drag","dragend","panstart","pan","panend","rotatestart","rotate","rotateend","pitchstart","pitch","pitchend","zoom","resize","center_changed","bounds_changed","scale_changed","control_added","control_removed","animation_playing","animation_looped","animation_ended","animation_stopped"],"tencent-marker":["click","dblclick","mousedown","mouseup","mouseout","mouseover","hover","moving","move_ended","move_stopped","move_paused","move_resumed"],"tencent-label":["click","dblclick","mousedown","mouseup","mouseover","mousemove","hover"],"bm-polyline":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-polygon":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-circle":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-label":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],"bm-info-window":["close","open","maximize","restore","clickclose"],"bm-ground":["click","dblclick"],"bm-autocomplete":["onconfirm","onhighlight"],"bm-point-collection":["click","mouseover","mouseout"]};t.a=function(e,t){const n=t||o[this.$options.name];n&&n.forEach(t=>{const n="on"===t.slice(0,2)?t.slice(2):t,o=this.$listeners[n];o&&e.on(t,o.fns)})}},function(e,t,n){"use strict";(function(e){var o=n(1),i=n(0);t.a={name:"tencent-map",props:{ak:{type:String},center:{type:[Object,String]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},mapClick:{type:Boolean,default:!0},dragging:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!0},doubleClickZoom:{type:Boolean,default:!0},rotation:{type:Number},pitch:{type:Number},scale:{type:Number},offset:{type:Object},boundary:{type:Object},pitchable:{type:Boolean},rotatable:{type:Boolean}},watch:{center(e,t){const{map:n,zoom:o}=this;"String"===Object(i.d)(e)&&e!==t&&n.centerAndZoom(e,o)},"center.lng"(e,t){const{TMap:n,map:o,zoom:i,center:s}=this;e!==t&&e>=-180&&e<=180&&o.centerAndZoom(new n.Point(e,s.lat),i)},"center.lat"(e,t){const{TMap:n,map:o,zoom:i,center:s}=this;e!==t&&e>=-74&&e<=74&&o.centerAndZoom(new n.Point(s.lng,e),i)},zoom(e,t){const{map:n}=this;e!==t&&e>=3&&e<=19&&n.setZoom(e)},minZoom(e){const{map:t}=this;t.setMinZoom(e)},maxZoom(e){const{map:t}=this;t.setMaxZoom(e)},mapClick(){this.reset()},dragging(e){const{map:t}=this;t.setDraggable(Boolean(e))},scrollable(e){const{map:t}=this;e?t.setScrollable(!0):t.setScrollable(!1)},doubleClickZoom(e){const{map:t}=this;e?t.setDoubleClickZoom(!0):t.setDoubleClickZoom(!1)},rotation(e){const{map:t,TMap:n}=this;e&&t.setRotation(e)},pitch(e){const{map:t,TMap:n}=this;e&&t.setPitch(e)},scale(e){const{map:t,TMap:n}=this;e&&t.setScale(e)},offset(e,t){const{TMap:n,map:o}=this;e!==t&&o.setOffset(e)},boundary(e,t){const{TMap:n,map:o,setLatLngBounds:i}=this;e!==t&&i(e)},pitchable(e){const{map:t,TMap:n}=this;e?t.setPitchable(!0):t.setPitchable(!1)},rotatable(e){const{map:t,TMap:n}=this;e?t.setRotatable(!0):t.setPitchable(!1)}},methods:{setMapOptions(){const{map:e,TMap:t,minZoom:n,maxZoom:o,dragging:i,scrollable:s,doubleClickZoom:r,rotation:a,pitch:l,scale:c,offset:p,boundary:d,setLatLngBounds:u,pitchable:m,rotatable:h}=this;n&&e.setMinZoom(n),o&&e.setMaxZoom(o),i?e.setDraggable(!0):e.setDraggable(!1),s?e.setScrollable(!0):e.setScrollable(!1),r?e.setDoubleClickZoom(!0):e.setDoubleClickZoom(!1),a&&e.setRotation(a),l&&e.setPitch(l),c&&e.setScale(c),p&&e.setOffset(p),d&&u(d),m&&e.setPitchable(!0),h&&e.setPitchable(!0)},init(e){if(this.map)return;let t=this.$refs.view;for(let e of this.$slots.default||[])e.componentOptions&&"tencent-view"===e.componentOptions.tag&&(this.hasBmView=!0,t=e.elm);const n=new e.Map(t,{enableMapClick:this.mapClick,showControl:!1});this.map=n;const{setMapOptions:i,zoom:s,getCenterPoint:r}=this;i(),o.a.call(this,n),n.setCenter(this.getCenterPoint()),this.$emit("ready",{TMap:e,map:n})},getCenterPoint(){const{center:e,map:t}=this;switch(Object(i.d)(e)){case"String":return e;case"Object":return t.setCenter(e.lng,e.lat);default:return t.getCenter()}},initMap(e){this.TMap=e,this.init(e)},getMapScript(){if(e.TMap)return e.TMap._preloader?e.TMap._preloader:Promise.resolve(e.TMap);{const t=this.ak||this._TMap().ak;return e.TMap={},e.TMap._preloader=new Promise((n,o)=>{e._initBaiduMap=function(){n(e.TMap),e.document.body.removeChild(i),e.TMap._preloader=null,e._initBaiduMap=null};const i=document.createElement("script");e.document.body.appendChild(i),i.src=`https://map.qq.com/api/gljs?v=1.exp&key=${t}&callback=_initBaiduMap`}),e.TMap._preloader}},reset(){const{getMapScript:e,initMap:t}=this;e().then(t).catch(e=>{console.log(e)})},setLatLngBounds(){const{map:e,TMap:t,boundary:n}=this;if(Object(i.b)(n)){let o=new t.LatLng(n.sw.lat,n.sw.lng),i=new t.LatLng(n.ne.lat,n.ne.lng),s=new t.LatLngBounds(o,i);e.setBoundary(s)}}},mounted(){this.reset()},data:()=>({hasBmView:!1})}}).call(this,n(3))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"TencentMap",(function(){return a})),n.d(t,"TencentView",(function(){return p})),n.d(t,"TencentScale",(function(){return b})),n.d(t,"TencentMapType",(function(){return v})),n.d(t,"TencentRotation",(function(){return T})),n.d(t,"TencentZoom",(function(){return w})),n.d(t,"TencentLabel",(function(){return B})),n.d(t,"TencentMarker",(function(){return E}));var o=n(2),i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.hasBmView?this._e():t("div",{ref:"view",staticStyle:{width:"100%",height:"100%"}}),this._v(" "),this._t("default")],2)};function s(e,t,n,o,i,s,r,a){var l=typeof(e=e||{}).default;"object"!==l&&"function"!==l||(e=e.default);var c,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),o&&(p.functional=!0),s&&(p._scopeId=s),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(p.functional){p._injectStyles=c;var d=p.render;p.render=function(e,t){return c.call(t),d(e,t)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:p}}i._withStripped=!0;var r=s(o.a,i,[],!1,null,null,null);r.options.__file="src\\components\\map\\Map.vue";var a=r.exports,l=function(){var e=this.$createElement;return(this._self._c||e)("div")};l._withStripped=!0;var c=s({name:"tencent-view"},l,[],!1,null,null,null);c.options.__file="src\\components\\map\\MapView.vue";var p=c.exports;const d=e=>e.abstract||e.$el===e.$children[0].$el?d(e.$parent):e;function u(){const{unload:e,renderByParent:t,$parent:n}=this;t&&n.reload(),e()}class m{constructor(e){this.methods={ready(){const e=d(this.$parent),t=this.TMap=e.TMap,n=this.map=e.map;this.load(),this.$emit("ready",{TMap:t,map:n})},transmitEvent(e){this.$emit(e.replace(/^on/,""),e)},reload(){this&&this.TMap&&this.$nextTick(()=>{this.unload(),this.$nextTick(this.load)})},unload(){let{map:t,originInstance:n}=this;try{switch(e.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"marker":case"label":n.setMap(null),n=null;break;case"control":return t.removeControl(n)}}catch(e){throw new Error(e)}}},this.computed={renderByParent(){return this.$parent.preventChildrenRender}},this.mounted=function(){const e=d(this.$parent),t=e.map,{ready:n}=this;t?n():e.$on("ready",n)},this.destroyed=u,this.beforeDestroy=u}}var h=e=>new m({type:e}),g=n(0),f=s({name:"tencent-scale",render(){},mixins:[h("control")],props:{position:{type:String},className:{type:String}},watch:{position(){this.reload()},className(e){this.reload()}},methods:{load(){const{TMap:e,map:t,anchor:n,offset:o}=this;this.originInstance=e.constants.DEFAULT_CONTROL_ID.SCALE;let i=t.getControl(this.originInstance);t.addControl(i),Object(g.c)(this.position)&&i.setPosition(e.constants.CONTROL_POSITION[this.position]),this.className&&i.setClassName(this.className)}}},void 0,void 0,!1,null,null,null);f.options.__file="src\\components\\controls\\Scale.vue";var b=f.exports,y=s({name:"tencent-zoom",mixins:[h("mapType")],render(){},props:{type:{type:String},features:{type:Array},filter:{type:Array},opacity:{type:Number},flowColor:{type:Array},flowSpeed:{type:Array}},computed:{baseMap(){return{type:this.type,features:this.features,filter:this.filter,opacity:this.opacity,flowColor:this.flowColor,flowSpeed:this.flowSpeed}}},watch:{baseMap:{handler(e){this.reload()},deep:!0}},methods:{load(){const{TMap:e,map:t,baseMap:n}=this;if(Object(g.a)(this.baseMap.type)){let e=JSON.parse(JSON.stringify(this.baseMap));t.setBaseMap(e)}}}},void 0,void 0,!1,null,null,null);y.options.__file="src\\components\\controls\\MapType.vue";var v=y.exports,_=s({name:"tencent-zoom",render(){},mixins:[h("control")],props:{position:{type:String},className:{type:String}},watch:{position(){this.reload()},className(e){this.reload()}},methods:{load(){const{TMap:e,map:t,anchor:n,offset:o}=this;this.originInstance=e.constants.DEFAULT_CONTROL_ID.ROTATION;let i=t.getControl(this.originInstance);t.addControl(i),Object(g.c)(this.position)&&i.setPosition(e.constants.CONTROL_POSITION[this.position]),this.className&&i.setClassName(this.className)}}},void 0,void 0,!1,null,null,null);_.options.__file="src\\components\\controls\\Rotation.vue";var T=_.exports,M=s({name:"tencent-zoom",render(){},mixins:[h("control")],props:{position:{type:String},className:{type:String},numVisible:{type:Boolean}},watch:{position(){this.reload()},className(e){this.reload()},numVisible(e){this.reload()}},methods:{load(){const{TMap:e,map:t,anchor:n,offset:o}=this;this.originInstance=e.constants.DEFAULT_CONTROL_ID.ZOOM;let i=t.getControl(this.originInstance);t.addControl(i),Object(g.c)(this.position)&&i.setPosition(e.constants.CONTROL_POSITION[this.position]),this.className&&i.setClassName(this.className),this.numVisible&&i.setNumVisible(this.numVisible)}}},void 0,void 0,!1,null,null,null);M.options.__file="src\\components\\controls\\Zoom.vue";var w=M.exports,C=n(1);function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{width:n,height:o,anchor:i,src:s,faceTo:r,rotate:a,color:l,strokeColor:c,strokeWidth:p,size:d,direction:u,offset:m}=t;return new e.MarkerStyle({width:n,height:o,anchor:i,src:s,faceTo:String(r),rotate:a,color:l,strokeColor:c,strokeWidth:p,size:d,direction:String(u),offset:m})}function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{id:n,styleId:o,position:i,rank:s,properties:r,content:a}=t;return{id:n,styleId:o,position:new e.LatLng(i.lat,i.lng,i.height),rank:s,properties:r,content:a}}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{color:n,size:o,offset:i,angle:s,alignment:r,verticalAlignment:a,height:l,width:c,backgroundColor:p,padding:d,borderWidth:u,borderRadius:m,borderColor:h}=t;return new e.LabelStyle({color:n,size:o,offset:i,angle:s,alignment:r,verticalAlignment:a,height:l,width:c,backgroundColor:p,padding:d,borderWidth:u,borderRadius:m,borderColor:h})}var k={name:"tencent-label",mixins:[h("label")],props:{id:{type:String},styles:{type:Object},enableCollision:{type:Boolean},geometries:{type:Array},visible:{type:Boolean}},watch:{setStyles:{handler(e,t){this.originInstance?this.originInstance.setStyles(e):this.reload()},deep:!0},geometries:{handler(e,t){this.originInstance?this.originInstance.setGeometries(e):this.reload()},deep:!0},visible(e){this.originInstance?this.originInstance.setVisible(e):this.reload()}},methods:{load(){const{TMap:e,map:t,renderByParent:n,id:o,enableCollision:i,styles:s,geometries:r}=this;for(const t in s)s[t]=S(e,s[t]);let a=[];r&&r.map(t=>{a.push(O(e,t))});const l=new e.MultiLabel({map:t,styles:s,enableCollision:i,id:o,geometries:a});this.originInstance=l,this.$emit("getMultiLabel",l),C.a.call(this,l),n&&$parent.reload()},clear(){this.originInstance.setMap(null),this.originInstance=null},getMap(){let{originInstance:e}=this;return e?e.getMap():""},getId(){let{originInstance:e}=this;return e?e.getId():""},getGeometries(){let{originInstance:e}=this;return e?e.getGeometries():""},getStyles(){let{originInstance:e}=this;return e?e.getStyles():""},getVisible(){let{originInstance:e}=this;return e?e.getVisible():""},getGeometryById(e){let{originInstance:t}=this;return t?t.getGeometryById(e):""},updateGeometries(e){let{originInstance:t}=this;return t?t.updateGeometries(e):""},add(e){let{originInstance:t}=this;return t?t.add(e):""},remove(e){let{originInstance:t}=this;return t?t.remove(e):""}}},N=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)};N._withStripped=!0;var x=s(k,N,[],!1,null,null,null);x.options.__file="src\\components\\overlays\\Label.vue";var B=x.exports,$={name:"tencent-marker",mixins:[h("marker")],props:{id:{type:String},styles:{type:Object},enableCollision:{type:Boolean},geometries:{type:Array},visible:{type:Boolean}},watch:{setStyles:{handler(e,t){this.originInstance?this.originInstance.setStyles(e):this.reload()},deep:!0},geometries:{handler(e,t){this.originInstance?this.originInstance.setGeometries(e):this.reload()},deep:!0},visible(e){this.originInstance?this.originInstance.setVisible(e):this.reload()}},methods:{load(){const{TMap:e,map:t,renderByParent:n,id:o,enableCollision:i,styles:s,geometries:r}=this;for(const t in s)s[t]=I(e,s[t]);let a=[];r&&r.map(t=>{a.push(O(e,t))});const l=new e.MultiMarker({map:t,styles:s,enableCollision:i,id:o,geometries:a});this.originInstance=l,this.$emit("getMultiMarker",l),C.a.call(this,l),n&&$parent.reload()},clear(){this.originInstance.setMap(null),this.originInstance=null},getMap(){let{originInstance:e}=this;return e?e.getMap():""},getId(){let{originInstance:e}=this;return e?e.getId():""},getGeometries(){let{originInstance:e}=this;return e?e.getGeometries():""},getStyles(){let{originInstance:e}=this;return e?e.getStyles():""},getVisible(){let{originInstance:e}=this;return e?e.getVisible():""},getGeometryById(e){let{originInstance:t}=this;return t?t.getGeometryById(e):""},updateGeometries(e){let{originInstance:t}=this;return t?t.updateGeometries(e):""},add(e){let{originInstance:t}=this;return t?t.add(e):""},remove(e){let{originInstance:t}=this;return t?t.remove(e):""}}},L=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)};L._withStripped=!0;var P=s($,L,[],!1,null,null,null);P.options.__file="src\\components\\overlays\\Marker.vue";var E=P.exports;t.default={install(e,t){const{ak:n}=t;e.prototype._TMap=()=>({ak:n}),e.component("tencent-map",a),e.component("tencent-view",p),e.component("tencent-scale",b),e.component("tencent-map-type",v),e.component("tencent-rotation",T),e.component("tencent-zoom",w),e.component("tencent-label",B),e.component("tencent-marker",E)}}}])}));