---
sidebar_position: 1
description: risc-v RV32I汇编指令总览
---



# risc-v汇编指令总览

## 1. RISC-V 汇编指令操作对象

### 1.1 寄存器

RV32I支持**32个通用寄存器**x0~x31，每个寄存器长度均为32位，其中寄存器x0恒为0，剩余31个为任意读/写的通用寄存器。

为了增加汇编程序的阅读性，汇编编程时通常采用应用程序二进制接口协议（Application Binary Interface，ABI）定义的寄存器名称。

RV32I通用寄存器如下：

| 寄存器名称 | ABI名称  | 说明                                               | 存储者 |
| ---------- | -------- | -------------------------------------------------- | ------ |
| x0         | zero     | 读取时总为0，写入时不起任何效果                    | N/A    |
| x1         | ra       | 程序返回地址                                       | Caller |
| x2         | sp       | 栈空间指针                                         | callee |
| x3         | gp       | 全局变量指针（基地址）                             | /      |
| x4         | tp       | 线程变量指针（基地址）                             | /      |
| x5 ~ x7    | t0 ~ t2  | 临时寄存器                                         | Caller |
| x8         | s0/fp    | 保存寄存器/帧指针（配合栈指针界定函数栈）          | Callee |
| x9         | s1       | 保存寄存器（被调用函数使用时需备份并在退出时恢复） | Callee |
| x10, x11   | a0, a1   | 函数参数寄存器（用于函数参数/返回值）              | Caller |
| x12 ~ x17  | a2 ~ a7  | 函数参数寄存器（用于函数参数）                     | Caller |
| x18 ~ x27  | s2 ~ s11 | 保存寄存器（被调用函数使用时需备份并在退出时恢复） | Callee |
| x28 ~ x31  | t3 ~ t6  | 临时寄存器                                         | Caller |

:::tip

在risc-v中，Hart在执行算术逻辑运算时所操纵的数据必须直接来自寄存器

:::

### 1.2 内存

- Hart 可以执行在寄存器和内存之间的数据读写操作
- 读写操作使用字节（Byte）为基本单位进行寻址
- RV32可以访问的内存空间最大为2^32 Byte

## 2. RISC-V 汇编指令编码格式



![risc-v_ISA_format_1_](img\risc-v_ISA_format_1.png)

- 指令长度：**ILEN1** = 32 bits(RV32I)

- 指令对齐：IALIGN = 32 bits(RV32I)

- 32个 bit 被划分成不同的**域（field）**

- funct3/funct7和opcode一起决定最终的指令类型

- 指令在内存中按照**小端序**排列

	:::tip  主机字节序（HBO - Host Byte Order）

	- 一个**多字节整数**在计算机内存中存储的字节顺序称为主机字节序（HBO - Host Byte Order），或称为本地字节序
	- 不同类型CPU的设计不同，HBO也不同，分为**大端序（Big-Endian）**和**小端序（Little-Endian）**
	    - 大端序（Big-Endian）- 从**高位**开始按照从低地址到高地址的顺序存放数据
	    - 小端序（Little-Endian）- 从**低位**开始按照从低地址到高地址的顺序存放数据
	
	:::
	
- 6种指令格式

  - **R-type**：Register，每条指令中有用于指定3个寄存器参数的3个fields（rd，rs1，rs2）
  - **I-type**：Immediate，每条指令除了带有两个寄存器参数外，还带有一个立即数参数（宽度为12 bits）
  - **S-type**：Store，每条指令除了带有两个寄存器参数外，还带有一个立即数参数（宽度为12 bits，但fields的组织方式不同于 I-type）
  - **B-type**：Branch，每条指令除了带有两个寄存器参数外，还带有一个立即数参数（宽度为12 bits，但取值为2的倍数）
  - **U-type**：Upper，每条指令含有一个寄存器参数，再加上一个立即数参数（宽度为20 bits，用于表示一个立即数的高20位），因为一条32位指令中无法表示高达32位的数据
  - **J-type**：Jump，每条指令含有一个寄存器参数再加上一个立即数参数（宽度为20 bits）

  



:::info risc-v支持用户自定义指令扩展

opcode位的取值含义参考[RISC-V非特权规范](https://riscv.org/technical/specifications/)

![risc-v_ISA_format_2](img\risc-v_ISA_format_2.png)

**opcode**域的最低两位固定为11，其他位代表的类型详见上表，其中**custom**代表用户自定义指令扩展

:::



## 3 RISC-V 常见汇编指令

### 3.1 常见汇编指令

![risc-v_assembly_overview](img\risc-v_assembly_overview.png)

### 3.2 伪指令

详细伪指令见规范手册第25章- risc-v assembly programmer‘s handbook

![risc-v_pseudoinstructions_overview](img\risc-v_pseudoinstructions_overview.png)
