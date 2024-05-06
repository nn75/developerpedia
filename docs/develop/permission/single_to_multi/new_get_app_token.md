---
sidebar_position: 3
---

# 获取应用的 Access Token [新🔥]

如果你的应用使用到了应用权限点，推荐你使用此文档获取应用的 Access Token。

:::info Note
**一个应用在开发时，就是一个应用。应用只有在被分发时，才被区分为"内部"还是"三方"。**
- 原来的钉钉开放平台应用在创建时就区分了"企业内部应用"和"企业三方应用"，但随着业务的发展，平台和开发者们逐渐发现应用在开发时没有必要区分是"内部"还是"三方"。
- 如果这个应用最终仅被应用开发者组织使用，即应用被分发给开发者组织，那么这个应用可以被称为企业内部应用。
- 如果这个应用最终通过应用市场被其他组织使用，即应用被分发给其他组织使用，那么这个应用可以被称为企业三方应用。
:::

:::info Note
* 企业内部应用由于只能运行在开发该应用的组织里，因此被归类为**单组织应用（Single-tenant Application）**。
* 企业三方应用、企业上下游应用和企业上下级应用等应用由于能通过应用市场开通、上下游分发等分发渠道，最终运行在多个组织内，因此被归类为**多组织应用（Multi-tenant Application）**。
:::

:::info Note
**推荐使用此文档获取应用的 Access Token，原来的一些文档由于存在局限性（比如不能满足应用从单组织到多组织的快速切换），将逐步下线。**
- 原来企业内部应用获取应用 Access Token 的文档为：[获取企业内部应用的 Access Token](https://open.dingtalk.com/document/orgapp/obtain-the-access_token-of-an-internal-app)
- 原来企业三方应用获取应用 Access Token 的文档为：[获取第三方应用授权企业的 Access Token](https://open.dingtalk.com/document/isvapp/obtain-the-access_token-of-the-authorized-enterprise)
:::

## 一、获取应用的 ClientId 和 ClientSecret
1. 登录钉钉开发者后台。
2. 进入已创建的应用，在“凭证与基础信息”里可以看到应用的 ClientId 和 ClientSecret 。
   ![应用的ClientId和ClientSecret](/img/develop/permission/client_id_secret.png)


## 二、请求方法
```http request
POST /v1.0/oauth2/{corpId}/token HTTP/1.1
Host:api.dingtalk.com
Content-Type:application/json

{
  "client_id" : "ding123",
  "client_secret" : "*******",
  "grant_type" : "client_credentials"
}
```

| 参数            | 是否必填 | 说明                             |
|:--------------|:-----|:-------------------------------|
| corpId        | 是    | 组织ID，应用运行在哪个组织就填写哪个组织的 corpId。 |
| client_id     | 是    | 应用的 ClientID。                  |
| client_secret | 是    | 应用的 ClientSecret。              |
| grant_type    | 是    | 必须是 client_credentials。        |


```http title="成功的响应"
{
  "access_token": "0a7*********657",
  "expires_in": 7200
}
```

| 参数           | 说明                             |
|:-------------|:-------------------------------|
| access_token | 访问凭证                           |
| expires_in   | 访问凭证有效的时长，单位秒。                 |


## 错误码

| 状态码 | 错误码                    | 错误原因                         |
|-----|------------------------|------------------------------|
| 400 | invalid.client         | 无效的 ClientID 或 ClientSecret。 |
| 400 | unsupported.grant.type | 不支持此授权类型，请检查授权类型参数。          |
| 400 | unauthorized.client    | 应用未被授权。                      |
| 500 | server.error           | 服务器意外错误。                     |




