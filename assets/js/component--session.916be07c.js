(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,a){t.exports=a.p+"assets/img/generic-profile.fb2c2b3c.png"},193:function(t,e,a){"use strict";a.d(e,"c",function(){return r}),a.d(e,"b",function(){return i}),a.d(e,"a",function(){return o});var n=a(0),s=n.default.observable({});function r(t,e){return n.default.set(s,t,e)}function i(t){return s[t]}function o(t,e){var a=e.matched[0],n=a?a.components.default:{};if(t.stringified&&n.__file)return console.error("An error occurred while executing "+"page-query for ".concat(n.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},194:function(t,e,a){"use strict";var n=a(0),s=a(193),r=a(71),i=n.default.config.optionMergeStrategies;e.a=function(t){var e=t.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=n;else{e.__pageQuery=n,e.computed=i.computed({$page:function(){return Object(s.b)(this.$route.path)}},e.computed);var o=function(t){e[t]=i[t]([c(e)],e[t])},c=function(){return function(t,n,i){a.e(48).then(a.bind(null,213)).then(function(a){a.default(t,e.__pageQuery).then(function(e){404===e.code?i({name:r.b,params:{0:t.path}}):i()}).catch(function(e){e.code===r.a||404===e.code?(console.error(e),i({name:r.b,params:{0:t.path}})):Object(s.a)(e,t)})})}};o("beforeRouteEnter"),o("beforeRouteUpdate")}}},212:function(t,e,a){},245:function(t,e,a){"use strict";var n=a(212);a.n(n).a},301:function(t,e,a){"use strict";a.r(e);var n={components:{Layout:a(69).a},metaInfo:function(){return{title:this.$page.session.speaker}}},s=(a(245),a(18)),r=a(194),i=function(t){Object(r.a)(t,void 0)},o=Object(s.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Layout",[n("v-content",{staticClass:"my-5"},[n("v-container",{attrs:{"ma-0":"","pa-0":"",fluid:""}},[n("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm4:"","pa-3":"","align-self-center":""}},[n("v-img",{attrs:{src:a(192),"aspect-ratio":1,contain:""}})],1),n("v-flex",{attrs:{xs12:"",sm8:"","pa-3":""}},[n("div",[n("h2",{staticClass:"primary--text underline-primary"},[t._v("\n                "+t._s(t.$page.session.speaker)+"\n                "),n("span",{staticClass:"pl-5"},[n("v-btn",{staticClass:"px-3",attrs:{flat:"",icon:"",color:"primary"}},[n("v-icon",{staticClass:"primary--text px-3"},[t._v("fab fa-linkedin")])],1),n("v-btn",{staticClass:"px-3",attrs:{flat:"",icon:"",color:"primary"}},[n("v-icon",{staticClass:"primary--text px-3"},[t._v("fab fa-twitter")])],1),n("v-btn",{staticClass:"px-3",attrs:{flat:"",icon:"",color:"primary"}},[n("v-icon",{staticClass:"primary--text px-3"},[t._v("fas fa-globe")])],1)],1)])]),n("br"),n("p",[t._v(t._s(t.$page.session.bio))])])],1),n("v-layout",{attrs:{"ma-0":"","pa-0":"",row:"",wrap:"","justify-space-between":"","fill-height":""}},[n("v-flex",{attrs:{xs12:"",md8:"","pa-3":""}},[n("h2",{staticClass:"underline-secondary secondary--text"},[t._v(t._s(t.$page.session.title))]),n("br"),n("p",[t._v(t._s(t.$page.session.abstract))])]),n("v-flex",{attrs:{xs12:"",md4:"","pa-3":""}},[n("h2",{staticClass:"underline-primary primary--text"},[t._v("Session Information")]),n("br"),n("h3",{staticClass:"font-weight-light"},[t._v("Time: "+t._s(t.$page.session.time))]),n("br"),n("h3",{staticClass:"font-weight-light"},[t._v("Room: "+t._s(t.$page.session.room))])])],1)],1)],1)],1)],1)},[],!1,null,"cf1501da",null);"function"==typeof i&&i(o);e.default=o.exports}}]);