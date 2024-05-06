"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[6888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(v,i(i({ref:t},s),{},{components:r})):a.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1},i="1. \u4ecb\u7ecd",l={unversionedId:"explore/tutorials/stream/advanced_ability/java/intro",id:"explore/tutorials/stream/advanced_ability/java/intro",title:"1. \u4ecb\u7ecd",description:"\u672c\u6587\u4ee5\u53ca\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u6307\u5f15\uff0c\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Stream \u6a21\u5f0f\u5f00\u53d1 AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b\u3002",source:"@site/docs/explore/tutorials/stream/advanced_ability/java/intro.md",sourceDirName:"explore/tutorials/stream/advanced_ability/java",slug:"/explore/tutorials/stream/advanced_ability/java/intro",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java/intro",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/advanced_ability/java/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java"},next:{title:"2. \u521b\u5efa AI \u52a9\u7406",permalink:"/developerpedia/docs/explore/tutorials/stream/advanced_ability/java/create_ai_assistant"}},p={},c=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,n.kt)("p",null,"\u672c\u6587\u4ee5\u53ca\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u6307\u5f15\uff0c\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Stream \u6a21\u5f0f\u5f00\u53d1 AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b\u3002"),(0,n.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u6559\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5b66\u4f1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,n.kt)("li",{parentName:"ol"},"\u642d\u5efa AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b\u540e\u7aef\u670d\u52a1")),(0,n.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9489\u9489\u8d26\u53f7\uff0c\u83b7\u5f97\u5f00\u53d1\u8005\u6743\u9650\u3002\u5173\u4e8e\u5f00\u53d1\u8005\u6743\u9650\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"li",href:"/docs/explore/portal/grant-admin"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u83b7\u5f97\u76f8\u5173\u64cd\u4f5c\u6307\u5357\uff1b"),(0,n.kt)("li",{parentName:"ol"},"Java\u5f00\u53d1\u73af\u5883\uff1b")))}u.isMDXComponent=!0}}]);