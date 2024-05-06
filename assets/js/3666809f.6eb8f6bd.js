"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[68],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},i="3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",l={unversionedId:"explore/tutorials/stream/bot/java/build-bot",id:"explore/tutorials/stream/bot/java/build-bot",title:"3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",description:"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Java \u5f00\u53d1\u4e00\u4e2a\u804a\u5929\u673a\u5668\u4eba\u670d\u52a1\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002",source:"@site/docs/explore/tutorials/stream/bot/java/build-bot.md",sourceDirName:"explore/tutorials/stream/bot/java",slug:"/explore/tutorials/stream/bot/java/build-bot",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/java/build-bot",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/explore/tutorials/stream/bot/java/build-bot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. \u521b\u5efa\u673a\u5668\u4eba\u5e94\u7528",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/java/create-bot"},next:{title:"4. \u4f53\u9a8c\u804a\u5929\u673a\u5668\u4eba",permalink:"/developerpedia/docs/explore/tutorials/stream/bot/java/test-bot"}},p={},c=[{value:"\u521b\u5efa Java \u6a21\u5757",id:"\u521b\u5efa-java-\u6a21\u5757",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",id:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1",level:2},{value:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1",id:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"},"3. \u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u7528 Java \u5f00\u53d1\u4e00\u4e2a\u804a\u5929\u673a\u5668\u4eba\u670d\u52a1\uff0c\u5b9e\u73b0\u57fa\u672c\u7684\u4ecb\u7ecd\u548c\u53d1\u9001\u6d88\u606f\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u7684\u5b8c\u6574\u4ee3\u7801\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-dingtalk/dingtalk-tutorial-java"},"GitHub \u4ed3\u5e93"),"\u4e2d\u83b7\u53d6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u672c\u6587\u4e2d\u6784\u5efa\u6b65\u9aa4\uff0c\u76f4\u63a5\u4ece GitHub \u4e2d clone \u76f8\u5173\u4ee3\u7801\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-java-\u6a21\u5757"},"\u521b\u5efa Java \u6a21\u5757"),(0,r.kt)("p",null,"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"Spring Quickstart Guide")," \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 Spring \u5de5\u7a0b\u3002\n\u63a8\u8350\u65b0\u624b\u91c7\u7528\u672c\u6559\u7a0b\u76f8\u540c\u7684\u914d\u7f6e\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.7.17&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=bot-echo-text&name=bot-echo-text&description=Demo%20project%20for%20DingTalk&packageName=com.example.bot-echo-text"},"\u70b9\u6b64\u94fe\u63a5"),"\u8fdb\u5165 spring intializr\uff0c\u672c\u6559\u7a0b\u76f8\u5173\u7684\u53c2\u6570\u5df2\u7ecf\u901a\u8fc7 URL \u53c2\u6570\u81ea\u52a8\u643a\u5e26\u8fc7\u53bb\u3002"),(0,r.kt)("p",null,"\u672c\u6559\u7a0b\u4f7f\u7528\u7684\u4e3b\u8981\u53c2\u6570\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project\uff1aMaven"),(0,r.kt)("li",{parentName:"ul"},"Language\uff1aJava"),(0,r.kt)("li",{parentName:"ul"},"Spring Boot\uff1a2.7.15"),(0,r.kt)("li",{parentName:"ul"},"Java\uff1a8")),(0,r.kt)("p",null,"\u8fdb\u5165\u9875\u9762\u540e\uff0c\u70b9\u51fb GENERATE \u6309\u94ae\u540e\u4f1a\u4e0b\u8f7d\u751f\u6210\u597d Spring \u5de5\u7a0b\u6587\u4ef6\uff0c\u89e3\u538b\u7f29\u540e\u53ef\u4ee5\u5b8c\u6210 Java \u6a21\u5757\u521b\u5efa\u3002"),(0,r.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u793a",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u9700\u8981\u5728\u5df2\u6709\u7684 Java \u5de5\u7a0b\u4e2d\u5f00\u53d1\u9489\u9489\u804a\u5929\u673a\u5668\u4eba\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e00\u3001\u5728 pom.xml \u4e2d\u6dfb\u52a0\u4f9d\u8d56\u9879\uff08\u672c\u6587\u6863\u4e2d\u7248\u672c\u53f7\u4ec5\u7528\u4e8e\u793a\u4f8b\uff0c\u5f3a\u70c8\u63a8\u8350\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"https://s01.oss.sonatype.org/?#nexus-search;quick~dingtalk-stream"},"\u6700\u65b0\u7248\u672c"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml" {4-8} showLineNumbers',title:'"pom.xml"',"{4-8}":!0,showLineNumbers:!0},"\x3c!-- ... --\x3e\n    <dependencies>\n        \x3c!-- ... --\x3e\n        <dependency>\n            <groupId>com.dingtalk.open</groupId>\n            <artifactId>dingtalk-stream</artifactId>\n            <version>1.2.0</version>\n        </dependency>\n        \x3c!-- ... --\x3e\n    </dependencies>\n\x3c!-- ... --\x3e\n")),(0,r.kt)("p",null,"\u4e8c\u3001\u5728\u547d\u4ee4\u884c\u4e2d pom.xml \u6240\u5728\u76ee\u5f55\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean package")," \u547d\u4ee4\u83b7\u5f97\u6700\u65b0\u4f9d\u8d56\u9879\uff0c\u6216\u8005\u5728 IDE \u4e2d\u6267\u884c\u76f8\u5173\u52a8\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"},"\u5f00\u53d1\u673a\u5668\u4eba\u670d\u52a1"),(0,r.kt)("p",null,"\u4e00\u3001\u5728 ./src/main/resources/application.properties \u4e2d\u6dfb\u52a0\u5e94\u7528\u51ed\u636e\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="./src/main/resources/application.properties" showLineNumbers',title:'"./src/main/resources/application.properties"',showLineNumbers:!0},"dingtalk.app.client-id=put-your-client-id-here\ndingtalk.app.client-secret=put-your-client-secret-here\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'\u52a1\u5fc5\u5c06\u4ee5\u4e0a\u547d\u4ee4\u4e2d"put-your-client-id-here"\u548c"put-your-client-secret-here"\u66ff\u6362\u6210\u5b9e\u9645\u7684\u503c\u540e\u518d\u8fd0\u884c\uff0c\u5426\u5219\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u8fde\u63a5\u3002Client ID \u548c Client Secret \u53ef\u4ee5\u901a\u8fc7',(0,r.kt)("a",{parentName:"p",href:"create-bot"},"\u6b65\u9aa4\u4e8c: \u521b\u5efa\u5e94\u7528\u6587\u6863"),"\u83b7\u53d6\u3002")),(0,r.kt)("p",null,"\u4e8c\u3001\u5728 com.example.botechotext \u5305\u4e0b\u9762\u521b\u5efa BotEchoTextConsumer \u7c7b\uff0c\u7528\u4e8e\u5904\u7406\u6765\u81ea\u7684 IM \u6d88\u606f\u63a8\u9001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BotEchoTextConsumer.java" showLineNumbers',title:'"BotEchoTextConsumer.java"',showLineNumbers:!0},'package com.example.botechotext;\n\nimport com.dingtalk.open.app.api.callback.OpenDingTalkCallbackListener;\nimport com.dingtalk.open.app.api.chatbot.BotReplier;\nimport com.dingtalk.open.app.api.models.bot.ChatbotMessage;\nimport org.springframework.stereotype.Component;\n\nimport java.io.IOException;\n\n@Component\npublic class BotEchoTextConsumer implements OpenDingTalkCallbackListener<ChatbotMessage, Void> {\n\n    @Override\n    public Void execute(ChatbotMessage message) {\n        String response = String.format("echo received message: [%s]", message.getText().getContent().trim());\n        try {\n            BotReplier.fromWebhook(message.getSessionWebhook()).replyText(response);\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n        return null;\n    }\n}\n')),(0,r.kt)("p",null,"\u4e09\u3001\u5728 com.example.botechotext \u5305\u4e0b\u9762\u521b\u5efa BotEchoTextListener \u7c7b\uff0c\u7528\u4e8e\u521b\u5efa IM \u6d88\u606f\u7684\u76d1\u542c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BotEchoTextListener.java" showLineNumbers',title:'"BotEchoTextListener.java"',showLineNumbers:!0},'package com.example.botechotext;\n\nimport com.dingtalk.open.app.api.OpenDingTalkClient;\nimport com.dingtalk.open.app.api.OpenDingTalkStreamClientBuilder;\nimport com.dingtalk.open.app.api.callback.DingTalkStreamTopics;\nimport com.dingtalk.open.app.api.security.AuthClientCredential;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.stereotype.Component;\n\nimport javax.annotation.PostConstruct;\n\n@Component\npublic class BotEchoTextListener {\n    @Value("${dingtalk.app.client-id}")\n    private String clientId;\n\n    @Value("${dingtalk.app.client-secret}")\n    private String clientSecret;\n\n    private final BotEchoTextConsumer botEchoTextConsumer;\n\n    @Autowired\n    public BotEchoTextListener(BotEchoTextConsumer botEchoTextConsumer) {\n        this.botEchoTextConsumer = botEchoTextConsumer;\n    }\n\n    @PostConstruct\n    public void init() throws Exception {\n        // init stream client\n        OpenDingTalkClient client = OpenDingTalkStreamClientBuilder\n                .custom()\n                .credential(new AuthClientCredential(clientId, clientSecret))\n                .registerCallbackListener(DingTalkStreamTopics.BOT_MESSAGE_TOPIC, botEchoTextConsumer)\n                .build();\n        client.start();\n    }\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u5b9e\u73b0\u4e86\u8fd9\u4e9b\u80fd\u529b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u8bfb\u53d6 Client ID \u548c Client Secret \u9009\u9879"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Client ID \u548c Client Secret \u521b\u5efa Stream Client"),(0,r.kt)("li",{parentName:"ol"},"\u5728 Stream Client \u4e2d\u6ce8\u518c\u673a\u5668\u4eba\u6d88\u606f\u56de\u8c03\u65b9\u6cd5\uff0c\u5b9e\u73b0\u6d88\u606f\u63a5\u6536\u80fd\u529b"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6d88\u606f\u56de\u8c03\u65b9\u6cd5\u4e2d\uff0c\u7b80\u5355 echo \u673a\u5668\u4eba\u6d88\u606f\u56de\u53bb\uff0c\u5b9e\u73b0\u6d88\u606f\u53d1\u9001(\u56de\u590d)\u80fd\u529b")),(0,r.kt)("h2",{id:"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1"},"\u8fd0\u884c\u673a\u5668\u4eba\u670d\u52a1"),(0,r.kt)("p",null,"\u5728 IDE \u4e2d\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"BotEchoTextApplication.java")," \u4e2d main \u51fd\u6570\uff0c\u5f53\u770b\u5230\u8fd9\u6837\u7684\u65e5\u5fd7\u8f93\u51fa\u65f6\u5019\u8868\u793a\u8fd0\u884c\u6210\u529f ",(0,r.kt)("inlineCode",{parentName:"p"},"[DingTalk] connection is established, connectionId=...")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u6210\u529f\u5b8c\u6210\u673a\u5668\u4eba\u670d\u52a1\u5f00\u53d1\u548c\u90e8\u7f72\u3002\u63a5\u4e0b\u6765\u53ef\u4ee5\u4f53\u9a8c\u81ea\u5df1\u5f00\u53d1\u7684\u673a\u5668\u4eba\u670d\u52a1\u4e86\u3002"),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'\u52a1\u5fc5\u5c06\u4ee5\u4e0a\u547d\u4ee4\u4e2d"put-your-client-id-here"\u548c"put-your-client-secret-here"\u66ff\u6362\u6210\u5b9e\u9645\u7684\u503c\u540e\u518d\u8fd0\u884c\uff0c\u5426\u5219\u65e0\u6cd5\u6210\u529f\u5efa\u7acb\u8fde\u63a5\u3002Client ID \u548c Client Secret \u53ef\u4ee5\u901a\u8fc7',(0,r.kt)("a",{parentName:"p",href:"create-bot"},"\u6b65\u9aa4\u4e8c: \u521b\u5efa\u673a\u5668\u4eba\u5e94\u7528\u6587\u6863"),"\u83b7\u53d6\u3002")),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u4f60\u5df2\u6210\u529f\u5b8c\u6210\u673a\u5668\u4eba\u670d\u52a1\u5f00\u53d1\u548c\u90e8\u7f72\u3002\u63a5\u4e0b\u6765\u53ef\u4ee5\u4f53\u9a8c\u81ea\u5df1\u5f00\u53d1\u7684\u673a\u5668\u4eba\u670d\u52a1\u4e86\u3002"),(0,r.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-dingtalk/dingtalk-tutorial-java"},"GitHub \u4e0a\u793a\u4f8b\u4ee3\u7801"))))}u.isMDXComponent=!0}}]);