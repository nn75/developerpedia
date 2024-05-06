"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),u=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,s]=f({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),v(e)}),[s,v,i]),tabValues:i}}var b=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=v(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},8439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(74866),a(85162);const i={sidebar_position:4},l="4. \u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1",o={unversionedId:"explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",id:"explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",title:"4. \u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Java \u5f00\u53d1\u4e00\u4e2a\u76f4\u901a\u6a21\u5f0f\u4e0b\u7684\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002\u672c\u6587\u5c06\u901a\u8fc7 Stream \u534f\u8bae\u7684\u6a21\u5f0f\u4e3a\u4f60\u5c55\u793a\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76f4\u901a\u6a21\u5f0f\u4e0b\u7684 Java \u5e94\u7528\u3002",source:"@site/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f.md",sourceDirName:"explore/tutorials/assistant_ability/passthrough_mode/java",slug:"/explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. \u5f00\u901a\u76f4\u901a\u6a21\u5f0f",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/open_passthrough"},next:{title:"5. \u4f53\u9a8c\u76f4\u901a\u6a21\u5f0f AI \u52a9\u7406",permalink:"/developerpedia/docs/explore/tutorials/assistant_ability/passthrough_mode/java/\u4f53\u9a8c\u76f4\u901a\u6a21\u5f0fAI\u52a9\u7406"}},u={},s=[{value:"\u521b\u5efa Java \u6a21\u5757",id:"\u521b\u5efa-java-\u6a21\u5757",level:2},{value:"\u5f15\u5165maven\u4f9d\u8d56",id:"\u5f15\u5165maven\u4f9d\u8d56",level:2},{value:"\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",id:"\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f",level:2},{value:"\u8fd0\u884c AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b",id:"\u8fd0\u884c-ai-\u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1"},"4. \u5f00\u53d1\u76f4\u901a\u6a21\u5f0f\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Java \u5f00\u53d1\u4e00\u4e2a\u76f4\u901a\u6a21\u5f0f\u4e0b\u7684\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002\u672c\u6587\u5c06\u901a\u8fc7 Stream \u534f\u8bae\u7684\u6a21\u5f0f\u4e3a\u4f60\u5c55\u793a\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u76f4\u901a\u6a21\u5f0f\u4e0b\u7684 Java \u5e94\u7528\u3002\n\u672c\u6559\u7a0b\u7684\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-tutorial-java/tree/main/ai-actions-stream"},"GitHub")," \u4ed3\u5e93\u4e2d\u83b7\u53d6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\u4e2d\u6784\u5efa\u6b65\u9aa4\uff0c\u76f4\u63a5\u4ece GitHub \u4e2d clone \u76f8\u5173\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-java-\u6a21\u5757"},"\u521b\u5efa Java \u6a21\u5757"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"Spring Quickstart Guide")," \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 Spring \u5de5\u7a0b\u3002 \u63a8\u8350\u65b0\u624b\u91c7\u7528\u672c\u6559\u7a0b\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u70b9\u6b64\u94fe\u63a5\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"p",href:"https://start.spring.io#!type=maven-project&language=java&platformVersion=3.1.10&packaging=jar&jvmVersion=17&groupId=com.example&artifactId=ai-actions-stream&name=ai-actions-stream&description=Demo%20project%20for%20DingTalk&packageName=com.example.ai.actions"},"spring initializr"),"\uff0c\u672c\u6559\u7a0b\u76f8\u5173\u7684\u53c2\u6570\u5df2\u7ecf\u901a\u8fc7 URL \u53c2\u6570\u81ea\u52a8\u643a\u5e26\u8fc7\u53bb\u3002"),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528\u7684\u4e3b\u8981\u53c2\u6570\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project\uff1aMaven"),(0,r.kt)("li",{parentName:"ul"},"Language\uff1aJava"),(0,r.kt)("li",{parentName:"ul"},"Spring Boot\uff1a2.7.15"),(0,r.kt)("li",{parentName:"ul"},"Java\uff1a8")),(0,r.kt)("p",null,"\u8fdb\u5165\u9875\u9762\u540e\uff0c\u70b9\u51fb GENERATE \u6309\u94ae\u540e\u4f1a\u4e0b\u8f7d\u751f\u6210\u597d Spring \u5de5\u7a0b\u6587\u4ef6\uff0c\u89e3\u538b\u7f29\u540e\u53ef\u4ee5\u5b8c\u6210 Java \u6a21\u5757\u521b\u5efa\u3002"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u9700\u8981\u5728\u5df2\u6709\u7684 Java \u5de5\u7a0b\u4e2d\u5f00\u53d1 AI\u52a9\u7406 Action\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002")),(0,r.kt)("h2",{id:"\u5f15\u5165maven\u4f9d\u8d56"},"\u5f15\u5165maven\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- ... --\x3e\n    <dependencies>\n        \x3c!-- ... --\x3e\n        <dependency>\n            <groupId>com.dingtalk.open</groupId>\n            <artifactId>dingtalk-stream</artifactId>\n            <version>1.3.2</version>\n        </dependency>\n        \x3c!-- ... --\x3e\n    </dependencies>\n\x3c!-- ... --\x3e\n")),(0,r.kt)("h2",{id:"\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f"},"\u5f00\u53d1\u76f4\u901a\u6a21\u5f0f"),(0,r.kt)("p",null,"\u4e00\u3001\u5728 src/main/resources/application.properties \u4e2d\u6dfb\u52a0\u5e94\u7528\u51ed\u636e\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dingtalk.app.client-id=put-your-client-id-here\ndingtalk.app.client-secret=put-your-client-secret-here\n\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'\u52a1\u5fc5\u5c06\u4ee5\u4e0a\u547d\u4ee4\u4e2d"put-your-client-id-here"\u548c"put-your-client-secret-here"\u66ff\u6362\u6210\u5b9e\u9645\u7684\u503c\u540e\u518d\u8fd0\u884c\uff0c\u5426\u5219\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u8fde\u63a5\u3002Client ID \u548c Client Secret \u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u81ea\u5b9a\u4e49\u80fd\u529b\u83b7\u53d6\u3002')),(0,r.kt)("p",null,"\u4e8c\u3001\u5728 com.example.ai.actions.direct \u5305\u4e0b\u9762\u521b\u5efa WeatherController \u7c7b\uff0c\u5b9e\u73b0\u6211\u4eec\u4e1a\u52a1\u7684 HTTP \u63a5\u53e3, \u6211\u4eec\u4ee5\u5929\u6c14\u67e5\u8be2\u4e3a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javas"},'@RestController\n@RequestMapping("/v1/actions/example/weather")\npublic class WeatherController {\n    @GetMapping("/get")\n    @ResponseBody\n    public Map<String, Object> get(@RequestParam(value = "input", required = false) String input,\n                                   @RequestParam(value = "inputAttribute", required = false) String attribute,\n                                   @RequestParam(value = "sender", required = false) String sender) {\n        Map<String, Object> result = new HashMap<>();\n        String location = "\u676d\u5dde";\n        String dateStr = (new SimpleDateFormat("yyyy-MM-dd")).format(new Date());\n        result.put("location", location);\n        result.put("dateStr", dateStr);\n        result.put("text", "\u6674\u5929");\n        result.put("temperature", 22);\n        result.put("humidity", 65);\n        result.put("wind_direction", "\u4e1c\u5357\u98ce");\n        return result;\n    }\n}\n')),(0,r.kt)("p",null,"\u7136\u540e\u6211\u4eec\u914d\u7f6e\u6211\u4eec\u7684 Stream \u5ba2\u6237\u7aef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class StreamClientConfigure {\n\n    @Value("${dingtalk.app.client-id}")\n    private String clientId;\n\n    @Value("${dingtalk.app.client-secret}")\n    private String clientSecret;\n\n    @Bean(initMethod = "start")\n    public OpenDingTalkClient configure() {\n        return OpenDingTalkStreamClientBuilder.custom()\n                .credential(new AuthClientCredential(clientId, clientSecret))\n                .forwardGraphRequestToHTTP(8080)\n                .build();\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86 Stream \u6a21\u5f0f\u7684\u8f6c\u53d1\u80fd\u529b\uff0c\u53ef\u4ee5\u5c06 Graph \u8bf7\u6c42\u8f6c\u53d1\u5bf9\u5e94\u7684 HTTP \u7aef\u53e3\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u884c-ai-\u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b"},"\u8fd0\u884c AI \u52a9\u7406\u81ea\u5b9a\u4e49\u80fd\u529b"),(0,r.kt)("p",null,"\u5728 IDE \u4e2d\u8fd0\u884c AiActionsDirectApplication.java \u4e2d main \u51fd\u6570\uff0c\u5f53\u770b\u5230\u8fd9\u6837\u7684\u65e5\u5fd7\u8f93\u51fa\u65f6\u5019\u8868\u793a\u8fd0\u884c\u6210\u529f ","[DingTalk]"," connection is established, connectionId=xxxxxxx ,\u81f3\u6b64\uff0c\u4f60\u5df2\u6210\u529f\u57fa\u4e8e Stream \u534f\u8bae\u7684\u76f4\u901a\u6a21\u5f0f\u5e94\u7528\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u548c AI \u52a9\u7406\u5bf9\u8bdd\uff0c\u4f53\u9a8c\u81ea\u5df1\u5f00\u53d1\u7684 AI \u76f4\u901a\u6a21\u5f0f\u3002"))}d.isMDXComponent=!0}}]);