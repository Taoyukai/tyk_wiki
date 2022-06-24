---
sidebar_position: 2
description: docusaurust添加本地搜索，支持中英文检索。
---

# docusaurust添加本地搜索

## 1. easyops-cn/docusaurus-search-local

插件地址：https://github.com/easyops-cn/docusaurus-search-local



## 安装步骤

1. ```c
    npm install --save @easyops-cn/docusaurus-search-local
    # or
    yarn add @easyops-cn/docusaurus-search-local
    ```

    

2.  `docusaurus.config.js`中添加

    ```js
     themes: [
            // ... Your other themes.
            [
              require.resolve("@easyops-cn/docusaurus-search-local"),
              {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                // language: ["en", "zh"],
                // ```
              },
            ],
          ],
    ```

    

