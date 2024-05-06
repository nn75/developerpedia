"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:2},i="2. \u521b\u5efa AI \u52a9\u7406",s={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant",id:"explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant",title:"2. \u521b\u5efa AI \u52a9\u7406",description:"\u9996\u5148\u6211\u4eec\u9700\u8981\u518d\u9489\u9489\u5ba2\u6237\u7aef\u521b\u5efa\u4e00\u4e2a AI \u52a9\u7406\uff0c\u521b\u5efa AI \u52a9\u7406\u7684\u8fc7\u7a0b\u53ef\u4ee5\u53c2\u8003\u9489\u9489\u7684\u5b98\u65b9\u6587\u6863\u521b\u5efa\u7ec4\u7ec7\u5185\u4f7f\u7528\u7684 AI \u52a9\u7406",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode/java",slug:"/explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/java/create_ai_assistant.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \u4ecb\u7ecd",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/intro"},next:{title:"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"2-\u521b\u5efa-ai-\u52a9\u7406"},"2. \u521b\u5efa AI \u52a9\u7406"),(0,n.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u518d\u9489\u9489\u5ba2\u6237\u7aef\u521b\u5efa\u4e00\u4e2a AI \u52a9\u7406\uff0c\u521b\u5efa AI \u52a9\u7406\u7684\u8fc7\u7a0b\u53ef\u4ee5\u53c2\u8003\u9489\u9489\u7684\u5b98\u65b9\u6587\u6863",(0,n.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/ai-dev/create-a-dingtalk-ai-assistant"},"\u521b\u5efa\u7ec4\u7ec7\u5185\u4f7f\u7528\u7684 AI \u52a9\u7406")))}d.isMDXComponent=!0}}]);