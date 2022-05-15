---
sidebar_position: 1
description: VS Code+Embedded IDE，搭建MCU开发新工具
---

# eide+vscode

## 1. Embedded IDE 简介

 [Embedded IDE](https://marketplace.visualstudio.com/items?itemName=CL.eide) (eide)是一款适用于 8051/STM8/Cortex-M/RISC-V 的单片机开发环境。

能够在 vscode 上提供 **8051**, **STM8**, **Cortex-M**, **RISC-V** 项目的 开发, 编译, 烧录 功能。

- [**eide 官网**](https://marketplace.visualstudio.com/items?itemName=CL.eide)
- [**eide 使用教程**](https://docs.em-ide.com/#/)

## 2. VS Code

[Visual Studion Code](https://code.visualstudio.com/) (VS Code)，是一款由微软开发且跨平台的免费源代码编辑器。该软件支持语法高亮、代码自动补全（又称 IntelliSense）、代码重构、查看定义功能，并且内置了命令行工具和 Git 版本控制系统。

- [**VS Code 官网**](https://code.visualstudio.com/)
- [**VS Code 官方文档**](https://code.visualstudio.com/docs)

## 3. vscode安装eide插件

![install_eide](img\install_eide.gif)



## 4. eide工具链配置

eide还需要调用相应的工具链才可完成MCU的工程编译，

如**8051 MCU** 的工具链`SDCC`或者`Keil C51`, **RISC-V MCU**的工具链`RISC-V GCC`。



**"设置工具链路径"** 中选项的图标表明了工具链路径设置的总体状态

- **√** ：某一个工具链已设置完毕
- **x** ：还没有为任何工具链设置安装路径

![eide_set_toolchain_1](img\eide_set_toolchain_1.png)
