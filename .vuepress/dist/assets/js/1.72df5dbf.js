(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(142).concat([function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return g}));n(17),n(65),n(107),n(185),n(186),n(37),n(39),n(171),n(60),n(187),n(66);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return a.test(r)?t:r+".html"+n}function h(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function f(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:p(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||a.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,c)})):[]}return[]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},,,,function(t,e,n){"use strict";var i=n(0),r=n(28).some,a=n(38),s=n(14),o=a("some"),l=s("some");i({target:"Array",proto:!0,forced:!o||!l},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,,,,,,,function(t,e,n){"use strict";n(146),n(62),n(182);var i=n(142),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},a=n(27),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.a=s.exports},function(t,e,n){"use strict";var i=n(98),r=n(8),a=n(12),s=n(16),o=n(99),l=n(100);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),c=String(this);if(!s.global)return l(s,c);var u=s.unicode;s.lastIndex=0;for(var p,h=[],f=0;null!==(p=l(s,c));){var d=String(p[0]);h[f]=d,""===d&&(s.lastIndex=o(c,a(s.lastIndex),u)),f++}return 0===f?null:h}]}))},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var i=n(159);n.n(i).a},function(t,e,n){"use strict";n.r(e);n(146);var i=n(142),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(181).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(174).default},methods:{isActive:i.e}},a=(n(202),n(27)),s=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(37);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,r,a,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),s=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,f=Object(i.e)(a,p.path),d="auto"===p.type?f||p.children.some((function(t){return Object(i.e)(a,p.basePath+"#"+t.slug)})):f,v="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,d),g=r.frontmatter.sidebarDepth||h||c.sidebarDepth||s.sidebarDepth,m=null==g?1:g,b=c.displayAllHeaders||s.displayAllHeaders;return"auto"===p.type?[v,l(t,p.children,p.basePath,a,m)]:(d||b)&&p.headers&&!i.d.test(p.path)?[v,l(t,Object(i.c)(p.headers),p.path,a,m)]:v}};n(203);var u={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(a.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some((function(e){return"page"===e.type&&Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(a.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},function(t,e,n){"use strict";n(194),n(37),n(146),n(62),n(195),n(39),n(196),n(171),n(60);var i=n(35),r=n(170),a=n(181),s={components:{NavLink:r.a,DropdownTransition:a.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(n(198),n(27)),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"dropdown-arrow",class:t.open?"down":"right"},[n("svg",{attrs:{width:"13px",height:"8px",viewBox:"0 0 13 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"General",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"01",transform:"translate(-986.000000, -53.000000)","stroke-width":"2"}},[n("g",{attrs:{id:"Group-2",transform:"translate(715.000000, 45.000000)"}},[n("g",{attrs:{id:"Group",transform:"translate(177.000000, 0.000000)"}},[n("polyline",{attrs:{id:"Stroke-1",points:"106 9 100.500146 14.499854 95 9"}})])])])])])])]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports,c=n(142),u={components:{NavLink:r.a,DropdownLink:l},computed:{aboutNav:function(){return this.$themeLocaleConfig.aboutnav||this.$site.themeConfig.aboutnav||[]},userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},servicesDropdown:function(){return{text:this.$themeLocaleConfig.servicesName,items:this.$themeLocaleConfig.services}},languageDropdown:function(){var t=this,e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{};return{text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(locales).map((function(r){var a,s=locales[r],o=i[r]&&i[r].label||s.lang;return s.lang===t.$lang?a=e:(a=e.replace(t.$localeConfig.path,r),n.some((function(t){return t.path===a}))||(a=r)),{text:o,link:a}}))}},nav:function(){var t=this.$site.locales;return t&&Object.keys(t).length>1?[].concat(Object(i.a)(this.aboutNav),Object(i.a)(this.userNav)):this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(c.j)(t),{items:(t.items||[]).map(c.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(199),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},function(t,e,n){"use strict";n(190),n(193);var i=n(27);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var a={props:["isFixed","hasBigLogo"],components:{SidebarButton:Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(175).a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},s=(n(200),Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{navbar:!0,fixed:t.isFixed}},[n("main",{staticClass:"navbar__content"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{class:{logo:!0,big:t.hasBigLogo},attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"})],1)],1)])}),[],!1,null,null,null));e.a=s.exports},,function(t,e,n){"use strict";var i={components:{NavLink:n(170).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(189),n(27)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";n(39),n(60);var i=n(142);function r(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var a=i[r];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[r+n]}}var a={props:["sidebarItems","hasCustomContent"],computed:{footerText:function(){return this.$themeLocaleConfig.copyright},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,r(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,r(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,a=t.docsBranch,s=void 0===a?"master":a,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,r,s,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,a){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},s=(n(201),n(27)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{class:{"theme-default-content":!0,custom:t.hasCustomContent}}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom"),t._v(" "),n("div",{staticClass:"copyright"},[n("div",{staticClass:"copyright__content"},[n("span",[t._v(t._s(t.footerText))]),t._v(" "),t._m(0)])])],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"copyright__doneby"},[e("span",{staticClass:"copyright__design"},[this._v("Designed by "),e("a",{attrs:{target:"_blank",href:"https://www.behance.net/LenkaSiva/"}},[this._v("Lenka Sivá")])]),this._v(" "),e("span",{staticClass:"copyright__programming"},[this._v(" developed by "),e("a",{attrs:{target:"_blank",href:"https://michalweiser.com"}},[this._v("Michał Weiser")])])])}],!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i=n(174),r=n(175),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},s=(n(204),n(27)),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(197),n(27)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=n(0),r=n(183);i({target:"String",proto:!0,forced:n(184)("link")},{link:function(t){return r(this,"a","href",t)}})},function(t,e,n){var i=n(16),r=/"/g;t.exports=function(t,e,n,a){var s=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"}},function(t,e,n){var i=n(2);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e,n){n(0)({target:"Array",stat:!0},{isArray:n(40)})},function(t,e,n){"use strict";var i=n(0),r=n(41),a=n(10),s=n(38),o=[].join,l=r!=Object,c=s("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},function(t,e,n){"use strict";var i=n(98),r=n(96),a=n(8),s=n(16),o=n(188),l=n(99),c=n(12),u=n(100),p=n(44),h=n(2),f=[].push,d=Math.min,v=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);for(var o,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=new RegExp(t.source,h+"g");(o=p.call(v,i))&&!((l=v.lastIndex)>d&&(u.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&f.apply(u,o.slice(1)),c=o[0].length,d=l,u.length>=a));)v.lastIndex===o.index&&v.lastIndex++;return d===i.length?!c&&v.test("")||u.push(""):u.push(i.slice(d)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var p=a(t),h=String(this),f=o(p,RegExp),g=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),b=new f(v?p:"^(?:"+p.source+")",m),_=void 0===r?4294967295:r>>>0;if(0===_)return[];if(0===h.length)return null===u(b,h)?[h]:[];for(var k=0,x=0,C=[];x<h.length;){b.lastIndex=v?x:0;var $,w=u(b,v?h:h.slice(x));if(null===w||($=d(c(b.lastIndex+(v?0:x)),h.length))===k)x=l(h,x,g);else{if(C.push(h.slice(k,x)),C.length===_)return C;for(var L=1;L<=w.length-1;L++)if(C.push(w[L]),C.length===_)return C;x=k=$}}return C.push(h.slice(k)),C}]}),!v)},function(t,e,n){var i=n(8),r=n(61),a=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||null==(n=i(s)[a])?e:r(n)}},function(t,e,n){"use strict";var i=n(149);n.n(i).a},function(t,e,n){var i=n(0),r=n(191);i({global:!0,forced:parseInt!=r},{parseInt:r})},function(t,e,n){var i=n(3),r=n(192).trim,a=n(172),s=i.parseInt,o=/^[+-]?0[Xx]/,l=8!==s(a+"08")||22!==s(a+"0x16");t.exports=l?function(t,e){var n=r(String(t));return s(n,e>>>0||(o.test(n)?16:10))}:s},function(t,e,n){var i=n(16),r="["+n(172)+"]",a=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},function(t,e,n){"use strict";var i=n(150);n.n(i).a},function(t,e,n){"use strict";var i=n(0),r=n(2),a=n(40),s=n(4),o=n(13),l=n(12),c=n(64),u=n(101),p=n(43),h=n(1),f=n(102),d=h("isConcatSpreadable"),v=f>=51||!r((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=p("concat"),m=function(t){if(!s(t))return!1;var e=t[d];return void 0!==e?!!e:a(t)};i({target:"Array",proto:!0,forced:!v||!g},{concat:function(t){var e,n,i,r,a,s=o(this),p=u(s,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?s:arguments[e],m(a)){if(h+(r=l(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,h++)n in a&&c(p,h,a[n])}else{if(h>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(p,h++,a)}return p.length=h,p}})},function(t,e,n){var i=n(6),r=n(3),a=n(63),s=n(105),o=n(7).f,l=n(42).f,c=n(96),u=n(97),p=n(104),h=n(11),f=n(2),d=n(18).set,v=n(106),g=n(1)("match"),m=r.RegExp,b=m.prototype,_=/a/g,k=/a/g,x=new m(_)!==_,C=p.UNSUPPORTED_Y;if(i&&a("RegExp",!x||C||f((function(){return k[g]=!1,m(_)!=_||m(k)==k||"/a/i"!=m(_,"i")})))){for(var $=function(t,e){var n,i=this instanceof $,r=c(t),a=void 0===e;if(!i&&r&&t.constructor===$&&a)return t;x?r&&!a&&(t=t.source):t instanceof $&&(a&&(e=u.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=s(x?new m(t,e):m(t,e),i?this:b,$);return C&&n&&d(o,{sticky:n}),o},w=function(t){t in $||o($,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},L=l(m),y=0;L.length>y;)w(L[y++]);b.constructor=$,$.prototype=b,h(r,"RegExp",$)}v("RegExp")},function(t,e,n){"use strict";var i=n(11),r=n(8),a=n(2),s=n(97),o=RegExp.prototype,l=o.toString,c=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(c||u)&&i(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in o)?s.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var i=n(151);n.n(i).a},function(t,e,n){"use strict";var i=n(152);n.n(i).a},function(t,e,n){"use strict";var i=n(153);n.n(i).a},function(t,e,n){"use strict";var i=n(154);n.n(i).a},function(t,e,n){"use strict";var i=n(155);n.n(i).a},function(t,e,n){"use strict";var i=n(156);n.n(i).a},function(t,e,n){"use strict";var i=n(157);n.n(i).a},function(t,e,n){"use strict";var i=n(158);n.n(i).a}])]);