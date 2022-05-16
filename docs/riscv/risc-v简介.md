---
sidebar_position: 1
description: RISC-V 简介
---

# risc-v简介

## 1. 指令集架构ISA

了解RISC-V之前，先熟悉一个概念，指令集架构（**I**nstruction **S**et **A**rchitecture，**ISA**）。

还记得用C语言的编写的hello world程序吗？

``` c
void main()
{
    printf("Hello, World！");
}
```

该程序在PC、8位MCU、32位MCU这些不同的平台上都能正常运行，这是为什么呢？

答案就是有一套标准规范，正因为编译器和芯片设计时都遵循这套规范，使得高级语言编写的程序经指定编译器编译后能直接运行在对应的芯片上。

这套标准规范就是**指令集架构**（Instruction Set Architecture，ISA）。

ISA主要分为复杂指令集（Complex Instruction Set Computer，CISC）和精简指令集（Reduced Instruction Set Computer，RISC），典型代表如下：

<table>
    <tr>
        <td>类型</td>
        <td>名称</td>
        <td>特点</td>
        <td>应用领域</td>
    </tr>
    <tr>
        <td>复杂指令集CISC</td>
        <td>x86</td>
        <td>性能高<br/> 速度快<br/> 兼容性好</td>
        <td>PC<br/>服务器</td>
    </tr>
    <tr>
        <td rowspan="2">精简指令集RISC</td>
        <td>ARM</td>
        <td>生态成熟<br/>非离散<br/>需授权</td>
        <td>移动设备<br/>嵌入式设备</td>
    </tr>
     <tr>
        <td>RISC-V</td>
        <td>开源<br/>模块化<br/>简洁<br/>可拓展</td>
        <td>物联网<br/>人工智能<br/>边缘计算</td>
    </tr>
</table>




ISA是底层硬件电路面向上层软件程序提供的一层**接口规范**，即机器语言程序所运行的计算机硬件和软件之间的“**桥梁**”。ISA主要定义了如下内容：

* 基本数据类型及格式（byte、int、word……）

* 指令格式，寻址方式和可访问地址空间大小

* 程序可访问的通用寄存器的个数、位数和编号

* 控制寄存器的定义

* I/O空间的编址方式

* 异常或中断的处理方式

* 机器工作状态的定义和切换

* ……

ISA规定了机器级程序的格式和行为，即ISA具有软件看得见（能感觉到）的特性，因此用机器指令或汇编指令编写机器级程序时，必须熟悉对应平台的ISA。

不过程序员大多使用高级语言（C/C++、Java）编写程序，由工具链编译转换为对应的机器语言，不需要了解ISA和底层硬件的执行机理。

## 2. 开源指令集RISC-V

![riscv_1](img\riscv_1.png)



**RISC**由美国加州大学伯克利分校教授David Patterson发明。

**RISC-V**（读作”risk-five“），表示第五代精简指令集，起源于2010年伯克利大学并行计算实验室(Par Lab) 的Krste Asanovic教授、Andrew Waterman和Yunsup Lee研究生的一个项目（该项目也由David Patterson指导），希望选择一款指令集用于科研和教学，该项目在x86、ARM等指令集架构中徘徊，最终决定自己设计一个全新的指令集，RISC-V由此诞生。RISC-V的最初目标是实用、开源、可在学术上使用，并且在任何硬件或软件设计中部署时无需版税。

![riscv_2](img\riscv_2.png)

2015年，为了更好的推动RISC-V在技术和商业上的发展，3位创始人做了如下安排：

* 成立RISC-V基金会，维护指令集架构的完整性和非碎片化

* 成立SiFive公司，推动RISC-V商业化

2019年，RISC-V基金会宣布将总部迁往瑞士，改名**[RISC-V国际基金会](https://riscv.org/)**。

通过十多年的发展，RISC-V这一星星之火已有燎原之势。倪光南院士表示，未来RISC-V很可能发展成为世界主流CPU之一，从而在CPU领域形成Intel (x86)、RAM、RISC-V三分天下的格局。

:::note 友情链接

- [**RISC-V官网**](https://riscv.org/)

- [**RISC-V 官方指令集规范下载**](https://riscv.org/technical/specifications/ )

:::

