---
sidebar_position: 2
description: Embedded IDE的实用小技巧
---

# eide实用小技巧

## 1. 查看程序资源视图

:::tip

该功能只支持`GCC`、`ARMCC`

:::

成功编译项目后，build 目录下会生成一个 `*.map.view` 文件，打开它，即可显示各个文件的资源占用情况

同时也提供与上次编译后的对比数据，方便检查两次编译间的程序大小变化。

![eide_show_map_view](img\eide_show_map_view.gif)



## 2. 查看反汇编

:::tip

该功能只支持`GCC`、`ARMCC`

:::

编译项目后，打开某一个源文件，在右键菜单中选择**Show Disassembly(查看反汇编)**，即可打开该源文件的反汇编代码。

![eide_show_disassembly](img\eide_show_disassembly.gif)
