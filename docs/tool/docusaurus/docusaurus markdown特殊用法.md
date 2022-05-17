---
sidebar_position: 2
description: 介绍docusaurus下的markdown特殊用法
---

# docusaurus markdown特殊用法

:::tip 详细用法参考

更多Markdown新增功能用法参考[**官方教程**](https://www.docusaurus.cn/docs/markdown-features)

:::

## 1. 选项卡Tabs

**使用方法：**

```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

**展示效果：**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>



## 2. 告示框Admonitions

**使用方法：**

```
:::note  (自定义标题，可省略)

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
```

**展示效果：**

:::note  (自定义标题，可省略)

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::



## 3. 细节 Details

**使用方法：**

```
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>
    This is the detailed content
    </div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
```



**效果展示：**

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content
    </div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>


<details>
  <summary><code>测试代码折叠</code> </summary>

```c
#include "debug.h"

int main(void)
{
    Delay_Init();
    USART_Printf_Init(115200);

    printf("ch32v307 hello world\r\n");

    while(1);  
}
```
</details>

