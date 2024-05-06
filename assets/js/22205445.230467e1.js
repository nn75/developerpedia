"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[8161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},l="3. \u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",o={unversionedId:"explore/tutorials/stream/event/go/build-listener",id:"explore/tutorials/stream/event/go/build-listener",title:"3. \u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Go \u5f00\u53d1\u4e00\u4e2a\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\uff0c\u63a5\u6536\u9489\u9489\u5e73\u53f0\u63a8\u9001\u7684\u53d8\u66f4\u901a\u77e5\u3002",source:"@site/docs/explore/tutorials/stream/event/go/build-listener.md",sourceDirName:"explore/tutorials/stream/event/go",slug:"/explore/tutorials/stream/event/go/build-listener",permalink:"/developerpedia/docs/explore/tutorials/stream/event/go/build-listener",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/event/go/build-listener.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa\u5e94\u7528",permalink:"/developerpedia/docs/explore/tutorials/stream/event/go/create-app"},next:{title:"4. \u8ba2\u9605\u4e8b\u4ef6\u7c7b\u578b",permalink:"/developerpedia/docs/explore/tutorials/stream/event/go/subscribe-topic"}},p={},c=[{value:"\u521b\u5efa Go \u6a21\u5757",id:"\u521b\u5efa-go-\u6a21\u5757",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",id:"\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",level:2},{value:"\u8fd0\u884c\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",id:"\u8fd0\u884c\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"3-\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"},"3. \u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"),(0,i.kt)("p",null,"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Go \u5f00\u53d1\u4e00\u4e2a\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\uff0c\u63a5\u6536\u9489\u9489\u5e73\u53f0\u63a8\u9001\u7684\u53d8\u66f4\u901a\u77e5\u3002"),(0,i.kt)("p",null,"\u672c\u6559\u7a0b\u7684\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-tutorial-go"},"GitHub \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\u4e2d\u6784\u5efa\u6b65\u9aa4\uff0c\u76f4\u63a5\u4ece GitHub \u4e2d clone \u76f8\u5173\u4ee3\u7801\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa-go-\u6a21\u5757"},"\u521b\u5efa Go \u6a21\u5757"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir event_chat_update\ncd event_chat_update\ngo mod init event_chat_update\n")),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/open-dingtalk/dingtalk-stream-sdk-go\n")),(0,i.kt)("h2",{id:"\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"},"\u5f00\u53d1\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"),(0,i.kt)("p",null,"\u5728 go.mod \u76f8\u540c\u7684\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"event_handler.go")," \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="event_handler.go" {13-32} showLineNumbers',title:'"event_handler.go"',"{13-32}":!0,showLineNumbers:!0},'package main\n\nimport (\n    "context"\n    "flag"\n    "github.com/open-dingtalk/dingtalk-stream-sdk-go/client"\n    "github.com/open-dingtalk/dingtalk-stream-sdk-go/event"\n    "github.com/open-dingtalk/dingtalk-stream-sdk-go/logger"\n    "github.com/open-dingtalk/dingtalk-stream-sdk-go/payload"\n    "time"\n)\n\nfunc OnEventReceived(_ context.Context, df *payload.DataFrame) (*payload.DataFrameResponse, error) {\n    eventHeader := event.NewEventHeaderFromDataFrame(df)\n    if eventHeader.EventType != "chat_update_title" {\n        // ignore events not equals `chat_update_title`; \u5ffd\u7565`chat_update_title`\u4e4b\u5916\u7684\u5176\u4ed6\u4e8b\u4ef6\uff1b\n        // \u8be5\u793a\u4f8b\u4ec5\u6f14\u793a chat_update_title \u7c7b\u578b\u7684\u4e8b\u4ef6\u8ba2\u9605\uff1b\n        return event.NewSuccessResponse()\n    }\n\n    logger.GetLogger().Infof("received event, delay=%s, eventType=%s, eventId=%s, eventBornTime=%d, eventCorpId=%s, eventUnifiedAppId=%s, data=%s",\n        time.Duration(time.Now().UnixMilli()-eventHeader.EventBornTime)*time.Millisecond,\n        eventHeader.EventType,\n        eventHeader.EventId,\n        eventHeader.EventBornTime,\n        eventHeader.EventCorpId,\n        eventHeader.EventUnifiedAppId,\n        df.Data)\n    // put your code here; \u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0\u4f60\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u5904\u7406\u4e8b\u4ef6\u8ba2\u9605\u7684\u4e1a\u52a1\u903b\u8f91\uff1b\n\n    return event.NewSuccessResponse()\n}\n\nfunc main() {\n    var clientId, clientSecret string\n    flag.StringVar(&clientId, "client_id", "", "your-client-id, AppKey or SuiteKey")\n    flag.StringVar(&clientSecret, "client_secret", "", "your-client-secret, AppSecret or SuiteSecret")\n    flag.Parse()\n    if len(clientId) == 0 || len(clientSecret) == 0 {\n        panic("command line options --client_id and --client_secret required")\n    }\n\n    logger.SetLogger(logger.NewStdTestLogger())\n\n    cli := client.NewStreamClient(client.WithAppCredential(client.NewAppCredentialConfig(clientId, clientSecret)))\n    cli.RegisterAllEventRouter(OnEventReceived)\n\n    err := cli.Start(context.Background())\n    if err != nil {\n        panic(err)\n    }\n\n    defer cli.Close()\n\n    select {}\n}\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u4e0d\u8d85\u8fc7 60 \u884c\u7684\u4ee3\u7801\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u80fd\u529b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u8bfb\u53d6 Client ID \u548c Client Secret \u9009\u9879"),(0,i.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Client ID \u548c Client Secret \u521b\u5efa Stream Client"),(0,i.kt)("li",{parentName:"ol"},"\u5728 Stream Client \u4e2d\u6ce8\u518c\u4e8b\u4ef6\u63a8\u9001\u7684\u76d1\u542c\u670d\u52a1\uff0c\u5b9e\u73b0\u53d8\u66f4\u901a\u77e5\u7684\u63a5\u6536\u80fd\u529b"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u4e8b\u4ef6\u56de\u8c03\u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7\u65e5\u5fd7\u8bb0\u5f55\u53d8\u66f4\u901a\u77e5\u7684\u6d88\u606f\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u53ef\u4ee5\u6539\u9020\u8fd9\u6bb5\u4ee3\u7801\uff0c\u5c06\u53d8\u66f4\u901a\u77e5\u5199\u5165\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d")),(0,i.kt)("h2",{id:"\u8fd0\u884c\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"},"\u8fd0\u884c\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1"),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u8fd0\u884c\u4f60\u7684\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\uff0c\u5f53\u770b\u5230\u8fd9\u6837\u7684\u65e5\u5fd7\u8f93\u51fa\u65f6\u5019\u8868\u793a\u8fd0\u884c\u6210\u529f ",(0,i.kt)("inlineCode",{parentName:"p"},"[INFO] connect success, sessionId=[...]")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'go mod tidy\ngo run event_handler.go --client_id="your-client-id" --client_secret="your-client-secret"\n')),(0,i.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'\u52a1\u5fc5\u5c06\u4ee5\u4e0a\u547d\u4ee4\u4e2d"your-client-id"\u548c"your-client-secret"\u66ff\u6362\u6210\u5b9e\u9645\u7684\u503c\u540e\u518d\u8fd0\u884c\uff0c\u5426\u5219\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u8fde\u63a5\u3002Client ID \u548c Client Secret \u53ef\u4ee5\u901a\u8fc7',(0,i.kt)("a",{parentName:"p",href:"create-app"},"\u6b65\u9aa4\u4e8c: \u521b\u5efa\u5e94\u7528\u6587\u6863"),"\u83b7\u53d6\u3002")),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u6210\u529f\u5b8c\u6210\u4e8b\u4ef6\u8ba2\u9605\u670d\u52a1\u5f00\u53d1\u548c\u90e8\u7f72\u3002\u63a5\u4e0b\u6765\u53ef\u4ee5\u5728",(0,i.kt)("a",{parentName:"p",href:"https://open-dev.dingtalk.com"},"\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),"\u52fe\u9009\u9700\u8981\u8ba2\u9605\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u7136\u540e\u4f53\u9a8c\u6574\u4e2a\u63a5\u6536\u6d41\u7a0b\u3002"),(0,i.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5f00\u53d1\u8fc7\u9489\u9489\u804a\u5929\u673a\u5668\u4eba\u7684\u6d88\u606f\u63a5\u6536\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u5728\u804a\u5929\u673a\u5668\u4eba\u4ee3\u7801\u4e2d\uff0c\u9700\u8981\u6307\u5b9a\u8ba2\u9605\u7684 Topic\uff0c\u800c\u4e8b\u4ef6\u8ba2\u9605\u7684\u4ee3\u7801\u4e2d\u6ca1\u6709\u6307\u5b9a Topic\u3002\u539f\u56e0\u662f\u9489\u9489\u4e8b\u4ef6\u8ba2\u9605\u5e73\u53f0\u7684\u4e8b\u4ef6\u7c7b\u578b\uff08Topic\uff09\u662f\u901a\u8fc7\u7f51\u9875\u5f62\u5f0f\uff08\u5728\u5f00\u53d1\u8005\u540e\u53f0\uff09\u52fe\u9009\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u4ee3\u7801\u65b9\u5f0f\u6307\u5b9a Topic\u3002\n\u63a5\u4e0b\u6765\u7684\u6587\u6863\u4f1a\u63d0\u4f9b\u6307\u5f15\uff0c\u4ecb\u7ecd\u5982\u4f55\u5728\u5f00\u53d1\u8005\u540e\u53f0\u52fe\u9009\u9700\u8981\u8ba2\u9605\u7684\u4e8b\u4ef6\u7c7b\u578b\uff08Topic\uff09\u3002")),(0,i.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-dingtalk/dingtalk-tutorial-go"},"GitHub \u4e0a\u793a\u4f8b\u4ee3\u7801"))))}u.isMDXComponent=!0}}]);