(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{103:function(t,e,n){"use strict";n(59),n(107),n(50),n(143);var i=n(25),a={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(0),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.a=r.exports},124:function(t,e,n){"use strict";n.r(e);n(50);var i=n(25),a={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(131).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(124).default},methods:{isActive:i.e}},s=(n(201),n(0)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(68);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,a,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),l(t,e.children,n,a,s,r+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,a=n.$page,s=(n.$site,n.$route),r=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(i.e)(s,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(i.e)(s,p.basePath+"#"+t.slug)})):d,v="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),m=a.frontmatter.sidebarDepth||h||c.sidebarDepth||r.sidebarDepth,g=null==m?1:m,b=c.displayAllHeaders||r.displayAllHeaders;return"auto"===p.type?[v,l(t,p.children,p.basePath,s,g)]:(f||b)&&p.headers&&!i.d.test(p.path)?[v,l(t,Object(i.c)(p.headers),p.path,s,g)]:v}};n(202);var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var a=e[n];if("group"===a.type&&a.children.some((function(e){return"page"===e.type&&Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},p=Object(s.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},125:function(t,e,n){"use strict";n(155),n(109);var i=n(217),a=(n(50),n(73),n(59),n(107),n(68),n(103)),s=n(131),r={components:{NavLink:a.a,DropdownTransition:s.a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},o=(n(197),n(0)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"dropdown-arrow",class:t.open?"down":"right"},[n("svg",{attrs:{width:"13px",height:"8px",viewBox:"0 0 13 8",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{id:"General",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"01",transform:"translate(-986.000000, -53.000000)","stroke-width":"2"}},[n("g",{attrs:{id:"Group-2",transform:"translate(715.000000, 45.000000)"}},[n("g",{attrs:{id:"Group",transform:"translate(177.000000, 0.000000)"}},[n("polyline",{attrs:{id:"Stroke-1",points:"106 9 100.500146 14.499854 95 9"}})])])])])])])]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports,c=n(25),u={components:{NavLink:a.a,DropdownLink:l},computed:{aboutNav:function(){return this.$themeLocaleConfig.aboutnav||this.$site.themeConfig.aboutnav||[]},userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},servicesDropdown:function(){return{text:this.$themeLocaleConfig.servicesName,items:this.$themeLocaleConfig.services}},languageDropdown:function(){var t=this,e=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{};return{text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(locales).map((function(a){var s,r=locales[a],o=i[a]&&i[a].label||r.lang;return r.lang===t.$lang?s=e:(s=e.replace(t.$localeConfig.path,a),n.some((function(t){return t.path===s}))||(s=a)),{text:o,link:s}}))}},nav:function(){var t=this.$site.locales;return t&&Object.keys(t).length>1?[].concat(Object(i.a)(this.aboutNav),Object(i.a)(this.userNav)):this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(c.j)(t),{items:(t.items||[]).map(c.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(198),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},126:function(t,e,n){"use strict";n(154);var i=n(0);function a(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var s={props:["isFixed","hasBigLogo"],components:{SidebarButton:Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(125).a},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(a(this.$el,"paddingLeft"))+parseInt(a(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},r=(n(199),Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{navbar:!0,fixed:t.isFixed}},[n("main",{staticClass:"navbar__content"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{class:{logo:!0,big:t.hasBigLogo},attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[n("NavLinks",{staticClass:"can-hide"})],1)],1)])}),[],!1,null,null,null));e.a=r.exports},128:function(t,e,n){"use strict";var i={components:{NavLink:n(103).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},a=(n(153),n(0)),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},129:function(t,e,n){"use strict";n(73);var i=n(25);function a(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var s={props:["sidebarItems","hasCustomContent"],computed:{footerText:function(){return this.$themeLocaleConfig.copyright},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,s=t.docsBranch,r=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,a,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,a,s){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(a,"/")+(n?n.replace(i.a,"")+"/":"")+s}}},r=(n(200),n(0)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{class:{"theme-default-content":!0,custom:t.hasCustomContent}}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom"),t._v(" "),n("div",{staticClass:"copyright"},[n("div",{staticClass:"copyright__content"},[n("span",[t._v(t._s(t.footerText))]),t._v(" "),t._m(0)])])],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"copyright__doneby"},[e("span",{staticClass:"copyright__design"},[this._v("Designed by "),e("a",{attrs:{target:"_blank",href:"https://www.behance.net/LenkaSiva/"}},[this._v("Lenka Sivá")])]),this._v(" "),e("span",{staticClass:"copyright__programming"},[this._v(" developed by "),e("a",{attrs:{target:"_blank",href:"https://michalweiser.com"}},[this._v("Michał Weiser")])])])}],!1,null,null,null);e.a=o.exports},130:function(t,e,n){"use strict";var i=n(124),a=n(125),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:a.a},props:["items"]},r=(n(203),n(0)),o=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},131:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},a=(n(196),n(0)),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},153:function(t,e,n){"use strict";var i=n(74);n.n(i).a},154:function(t,e,n){"use strict";var i=n(75);n.n(i).a},196:function(t,e,n){"use strict";var i=n(84);n.n(i).a},197:function(t,e,n){"use strict";var i=n(85);n.n(i).a},198:function(t,e,n){"use strict";var i=n(86);n.n(i).a},199:function(t,e,n){"use strict";var i=n(87);n.n(i).a},200:function(t,e,n){"use strict";var i=n(88);n.n(i).a},201:function(t,e,n){"use strict";var i=n(89);n.n(i).a},202:function(t,e,n){"use strict";var i=n(90);n.n(i).a},203:function(t,e,n){"use strict";var i=n(91);n.n(i).a},25:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(145),n(146),n(67),n(59),n(147),n(68),n(148),n(109),n(73);var i=/#.*$/,a=/\.(md|html)$/,s=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(a,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",a=o(t);return s.test(a)?t:a+".html"+n}function h(t,e){var n=t.hash,a=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!a||n===a)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var a=e.split("/");n&&a[a.length-1]||a.pop();for(var s=t.replace(/^\//,"").split("/"),r=0;r<s.length;r++){var o=s[r];".."===o?a.pop():"."!==o&&a.push(o)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));for(var i=o(e),a=0;a<t.length;a++)if(o(t[a].regularPath)===i)return Object.assign({},t[a],{type:"page",path:p(t[a].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var a=n.pages,s=n.themeConfig,r=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||r.sidebar||s.sidebar))return function(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,a+1)})),collapsable:!1!==e.collapsable}}(t,a,c)})):[]}return[]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},74:function(t,e,n){},75:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){}}]);