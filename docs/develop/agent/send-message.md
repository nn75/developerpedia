---
sidebar_position: 1
---

# AI 助理发送消息

本文介绍如何实现以 [AI 助理](https://open.dingtalk.com/document/ai-dev/introduction-to-ai-assistant) 身份发送消息，以及在不同场景下如何选择合适的接口。

## 概念

钉钉 AI 助理，它融合了钉钉平台的多项 AI 产品功能，以智能化的方式辅助企业日常的工作流程。钉钉 AI 助理具备多种智能能力，包括但不限于智能沟通、智能协同、智能管理等。

发送消息的模式分为**主动发送模式**和**回复消息模式**，两种模式对比如下：

| | 主动发送模式                                                                                                                                                                                                                                                  | 回复消息模式                                                                                                                                                                                                                                                               |
| --- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 说明 | 给指定用户（UnionID）发送单聊消息，或者给指定群组（OpenConversationID）发送群聊消息                                                                                                                                                                                                  | AI 助理（或机器人）收到来自单聊、群聊或者魔法棒中的消息后，完成请求处理，并以消息方式予以响应                                                                                                                                                                                                                     |
| 使用场景 | 在定时任务触发，产品主动推送或运营主动推送的场景下，主动给用户或者群组发送消息                                                                                                                                                                                                                 | 在有限的时间内回复来自聊天会话（单聊、群聊或魔法棒）中的请求                                                                                                                                                                                                                                       |                    |
| 特点 | 可以在任何时候主动发起调用                                                                                                                                                                                                                      | 简单易用，发起调用时候可以不用关心会话类型（单聊、群聊或魔法棒），一次简单的开发即可兼容所有的会话类型中回复消息。<br />在 AI 助理和机器人的开发中，回复消息是主流场景，为该场景特别提供更加易用的接口可以帮助你快速实现功能开发。<br />在回复消息模式中，你会先收到一条消息请求，然后回复它。在收到的消息请求中，你可以获得 SessionWebhook 或者 ConversationToken 参数，通过 SessionWebhook 或 ConversationToken 回复消息即可，无需关心会话类型。 |
| 使用限制 | 需要根据会话类型，选择不同的发送目标参数来调用。例如：<br />在**单聊**会话场景，需要指定用户 ID 来发送消息，也即 UnionID；<br />在**群聊**会话场景，需要指定群组的会话 ID 来发送消息，也即 OpenConversationID。<br />特别提醒：如果你在回复消息的场景中，使用主动发送模式的话，必须穷举所有会话类型的发送方式。否则会导致在特定会话类型中功能异常。例如：在 AI 助理（或机器人）回复用户消息的处理中，只实现了群聊类型，那么用户单聊中使用该功能将无法收到回复。 | 必须是在收到用户请求之后才能调用回复消息接口，并且有时间限制。<br />无论是 SessionWebhook 还是 ConversationToken，都存在过期时间。你必须在过期之前回复消息，否则会导致调用失败。通常该过期时间是足够的，你可以通过对应的接口文档了解具体的过期时长。                                                                                                                       |
| 使用建议 | 在没有聊天上下文的场景下，需要主动发送消息到单聊或群聊会话的时候，**只能**使用主动发送模式。                                                                                                                                                                                                        | 当你希望通过 AI 助理（或机器人）回复来自聊天会话中对话请求时候，强烈建议优先采用回复消息模式。当然，在这个场景下，你也可以使用主动发送模式，这种时候需要针对每种会话类型（单聊、群聊、魔法棒）分别实现对应的接口调用，否则会导致部分场景下功能异常。                                                                                                                                         |

## 接口说明

### 回复消息模式

| API                                                                                                                               | 说明                         | 使用场景                                                                                                                                                                             |
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AI 助理回复消息（SessionWebhook 方式）](https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-webhook-reply-message-mode) | 通过 SessionWebhook 来回复用户的消息 | 在 SessionWebhook 未过期场景下，采用该接口更简单易用。SessionWebhook 通过 TLS 安全信道和短周期的过期时间确保了其安全性，采用简单的 HTTP POST 方式即可完成调用，无需额外鉴权动作。SessionWebhook 的过期时间设计上，会满足绝大多数场景，如果你的场景是收到请求后立即回复，可以忽略该过期时间的约束。 |
| [AI 助理回复消息（OpenAPI 方式）](https://open.dingtalk.com/document/orgapp/ai-assistant-messages-reply-mode)                               | 通过 OpenAPI 来回复用户的消息        | 在 SessionWebhook 过期的场景下，选择回复消息模式的话，只能采用 OpenAPI 方式，需要按照 OpenAPI 调用规范，首先通过应用的 Client ID 和 Client secret 换取访问凭证（AccessToken），并使用访问凭证调用该接口。                                         |

### 主动发送模式

#### 直接发送

如果你的消息是一条完整且独立的消息，发送完成后不需要持续更新它，例如文本、图片、互动卡片等，可以使用该方法发送消息。

| API                  | 说明        | 使用场景                        |
|----------------------|-----------|-----------------------------|
| [AI 助理发消息（主动发送模式）](https://open.dingtalk.com/document/orgapp/api-send) | 直接发送一条消息  | 主动发送一条完整的消息，例如文本、图片、互动卡片消息等 |

#### 分步发送

如果你希望引入打字机模式，发送后还能持续更新该消息内容。可以使用以下分步发送消息的接口，请务必按照预备、更新、结束的顺序来调用。

| API                                                                         | 说明                                  |
|-----------------------------------------------------------------------------|-------------------------------------|
| [AI 助理预备发消息（主送发型模式）](https://open.dingtalk.com/document/orgapp/api-prepare) | 给用户发送一个状态为“准备中”的消息框，开发者收到钉钉颁发的会话凭证。 |
| [AI 助理更新消息（主动发送模式）](https://open.dingtalk.com/document/orgapp/api-update)   | 开发者使用会话凭证更新消息框中的内容，可以多次更新。          |
| [AI 助理结束发消息（主动发送模式）](https://open.dingtalk.com/document/orgapp/api-finish)                                                      | 结束该消息。                              |

## 总结

以上文档内容，描述了 AI 助理发送消息的各种接口及使用场景。如果想要了解完整的操作步骤，可以参考参考以下教学文档：

* [AI 助理发消息 - 回复消息模式](https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-openapi-reply-message-mode)
* [AI 助理发消息 - 主动发送模式](https://open.dingtalk.com/document/ai-dev/ai-assistant-messaging-active-sending-mode)

## 参考资料

* [AI 助理概述](https://open.dingtalk.com/document/ai-dev/introduction-to-ai-assistant)