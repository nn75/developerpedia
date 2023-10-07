---
sidebar_position: 1
---

# 1. 介绍

本文以及接下来的步骤指引，介绍如何订阅钉钉平台的事件变更通知。

## 功能

通过这个教程，你可以学会

1. 创建钉钉应用，配置 Stream 模式的事件订阅
2. 开发事件订阅的处理代码，接收钉钉平台推送的事件推送消息

## 准备工作

1. 钉钉账号，获得开发者权限。关于开发者权限，你可以通过[这篇文章](/docs/explore/portal/grant-admin)获得相关操作指南
2. [Python](https://www.python.org/) 开发环境，推荐采用 3.11 及以上版本

:::tip
相关代码在 Python 3.11.5 版本中通过了测试。在旧的 Python3 中通常也是可以工作的，但是未经过测试，推荐采用最新版本。
:::

## 相关链接

* [官方文档：事件订阅 - 配置 Stream 推送](https://open.dingtalk.com/document/orgapp/stream)