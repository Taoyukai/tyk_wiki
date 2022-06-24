---
sidebar_position: 1
description: ld链接文件简介
---

# RISC-V MCU ld链接文件

## 1. 什么是ld链接文件？

通常，程序编译的最后一步就是**链接**，此过程根据**“*.ld”**链接文件将多个目标文件**(.o)**和库文件**(.a)**输入文件链接成一个可执行输出文件**(.elf)**。涉及到对**空间和地址的分配**以及**符号解析与重定位**。

而ld链接脚本控制这整个链接过程，主要用于规定各输入文件中的程序、数据等内容段在输出文件中的空间和地址如何分配。通俗的讲，链接脚本用于描述输入文件中的段，将其映射到输出文件中，并指定输出文件中的内存分配。

![](img\text_data_bss.png)

## 2. ld链接文件的主要内容

### 2.1 链接配置(可选)

常见的配置有入口地址、输出格式、符号变量的定义等。如：

```
ENTRY( _start ) /* 入口地址 */ 

__stack_size = 2048; /* 定义栈大小 */
PROVIDE( _stack_size = __stack_size );/* 定义_stack_size符号，类似于全局变量 */
```

### 2.2 内存布局定义

对MCU的Flash及RAM空间进行分配，其中以**ORIGIN**定义地址空间的起始地址，**LENGTH**定义地址空间的长度。

语法如下：

```
MEMORY
{
	name[(attr)] : ORIGIN = origin, LENGTH = length
	...
}
```

> 这里的**attr**只能由以下特性组成
>
> **'R'** - Read-only section
>
> **'W'** - Read/write section
>
> **'X'** - Executable section
>
> **'A'** - Allocatable section
>
> **'I'** - Initialized section
>
> **'L'** - Same as I
>
> **''!''** - Invert the sense of any of the attributes that follow



### 2.3 段链接定义

用于定义目标文件**(.o)**的**text**、**data**、**bss**等段的链接分布。语法如下：

```
SECTIONS
{
	section [address] [(type)] :
    [AT(lma)]
    [ALIGN(section_align) | ALIGN_WITH_INPUT]
    [SUBALIGN(subsection_align)]
    [constraint]
    {
        output-section-command
        output-section-command
        ...
    } [>region] [AT>lma_region] [:phdr :phdr ...] [=fillexp] [,]
    
    ...
}

/* 大多数的段仅使用了上述部分属性，可以简写成如下形式 */
SECTIONS
{
      ...
      secname :
      { 
        output-section-command 
      } 
      ...
}
```

链接脚本本质就是描述输入和输出。**secname**表示输出文件的段，而**output-section-command**用来描述输出文件的这个段从哪些文件里抽取而来，即输入目标文件**(.o)**和库文件**(.a)**。

**Section** 分为**loadable**(可加载)和**allocatable**(可分配)两种类型。不可加载也不可分配的内存段，通常包含一些调试等信息。
**loadable**：程序运行时，该段应该被加载到内存中。
**allocatable**：该段内容被预留出，同时不应该加载任何其他内容（某些情况下，这些内存必须归零）。

loadable和allocatable的section都有两个地址："**VMA**"和"**LMA**"。
**VMA** (the vortual memory address)：运行输出文件时，该section的地址。可选项，可不配置。
 **LAM** (load memory address)：加载section时的地址。
**在大多数情况下，这两个地址时相同的**。但有些情况下，需将代码从Flash中加载至RAM运行，此时Flash地址为LAM，RAM地址为VMA。如：

```
.data :
	{
    	*(.data .data.*)
		. = ALIGN(8);
    	PROVIDE( __global_pointer$ = . + 0x800 );
    	*(.sdata .sdata.*)
		*(.sdata2.*)
    	. = ALIGN(4);
		PROVIDE( _edata = .);
	} >RAM AT>FLASH
```

上述示例中，.data段的内容会放在Flash中，但是运行时，会加载至RAM中（通常为初始化全局变量），即**.data段的VMA为RAM，LMA为Flash**。



## 3. 常用关键字及命令

### 3.1 ENTRY

语法：ENTRY(symbol)，程序中要执行的第一个指令，也称入口点。

示例：

```
/* Entry Point */
ENTRY( _start ) /* CH32V103为启动文件 j handle_reset 指令*/
```

### 3.2 PROVIDE

语法：PROVIDE (symbol = expression)，用于定义一个可被引用的符号，类似于全局变量。示例：

```
PROVIDE( end = . ); 
```



### 3.3 HIDDEN

语法：HIDDEN (symbol = expression)，对于ELF目标端口，符号将被隐藏且不被导出。示例：

```
HIDDEN (mySymbol = .);
```



### 3.4 PROVIDE_HIDDEN

语法：PROVIDE_HIDDEN (symbol = expression)，是PROVIDE 和HIDDEN的结合体，类似于局部变量。示例：

```
PROVIDE_HIDDEN (__preinit_array_start = .);
```



### 3.5 点位符号 '.' 

‘.’表示当前地址，它是一个变量，总是代表输出文件中的一个地址（根据输入文件section的大小不断增加，不能倒退，且只用于SECTIONS指令中）。它可以被赋值也可以赋值给某个变量；也可进行算术运算用于产生指定长度的内存空间。示例：

```
PROVIDE( end = . );   /* 当前地址赋值给 end符号 */

.stack ORIGIN(RAM) + LENGTH(RAM) - __stack_size :
{
    . = ALIGN(4); 
    PROVIDE(_susrstack = . );
    . = . + __stack_size;    /* 当前地址加上__stack_size长度，产生__stack_size长度的空间*/
    PROVIDE( _eusrstack = .);
} >RAM 
```



### 3.6 KEEP

当链接器使用（'--gc-sections'）进行垃圾回收时，KEEP()可以使得被标记段的内容不被清除。示例

```
.init :
{
    _sinit = .;
    . = ALIGN(4);
    KEEP(*(SORT_NONE(.init))) 
    . = ALIGN(4);
    _einit = .;
} >FLASH AT>FLASH
```



### 3.7 ASSERT

语法：ASSERT(exp, message)，确保exp是非零值，如果为零，将以错误码的形式退出链接文件，并输出message。主要用于添加断言，定位问题。

示例：

```
/* The usage of ASSERT */
PROVIDE (__stack_size = 0x100);

.stack
{
	PROVIDE (__stack = .);
	ASSERT ((__stack > (_end + __stack_size)), "Error: No room left for the stack");
}
/* 当"__stack" 大于 "_end + __stack_size"时，在链接时，会出现错误，并提示"Error: No room left for the stack" */

```



## 4. 完整ld链接脚本示例

以RISC-V MCU CH32V103为例。

```
ENTRY( _start )  

__stack_size = 2048;

PROVIDE( _stack_size = __stack_size );


MEMORY
{
  FLASH (rx) : ORIGIN = 0x00000000 , LENGTH = 0x10000
  RAM (xrw) : ORIGIN = 0x20000000 , LENGTH = 0x5000
}


SECTIONS
{

	.init :
	{
		_sinit = .;
		. = ALIGN(4);
		KEEP(*(SORT_NONE(.init)))
		. = ALIGN(4);
		_einit = .;
	} >FLASH AT>FLASH

  .vector :
  {
      *(.vector);
	  . = ALIGN(64);
  } >FLASH AT>FLASH

  .flag :
  {
	  . = ORIGIN(FLASH)+0x8000;
	  KEEP(*(SORT_NONE(.myBufSection)))
  }>FLASH AT>FLASH

	.text :
	{
		. = ALIGN(4);
		*(.text)
		*(.text.*)
		*(.rodata)
		*(.rodata*)
		*(.glue_7)
		*(.glue_7t)
		*(.gnu.linkonce.t.*)
		. = ALIGN(4);
	} >FLASH AT>FLASH 

	.fini :
	{
		KEEP(*(SORT_NONE(.fini)))
		. = ALIGN(4);
	} >FLASH AT>FLASH

	PROVIDE( _etext = . );
	PROVIDE( _eitcm = . );	

	.preinit_array  :
	{
	  PROVIDE_HIDDEN (__preinit_array_start = .);
	  KEEP (*(.preinit_array))
	  PROVIDE_HIDDEN (__preinit_array_end = .);
	} >FLASH AT>FLASH 
	
	.init_array     :
	{
	  PROVIDE_HIDDEN (__init_array_start = .);
	  KEEP (*(SORT_BY_INIT_PRIORITY(.init_array.*) SORT_BY_INIT_PRIORITY(.ctors.*)))
	  KEEP (*(.init_array EXCLUDE_FILE (*crtbegin.o *crtbegin?.o *crtend.o *crtend?.o ) .ctors))
	  PROVIDE_HIDDEN (__init_array_end = .);
	} >FLASH AT>FLASH 
	
	.fini_array     :
	{
	  PROVIDE_HIDDEN (__fini_array_start = .);
	  KEEP (*(SORT_BY_INIT_PRIORITY(.fini_array.*) SORT_BY_INIT_PRIORITY(.dtors.*)))
	  KEEP (*(.fini_array EXCLUDE_FILE (*crtbegin.o *crtbegin?.o *crtend.o *crtend?.o ) .dtors))
	  PROVIDE_HIDDEN (__fini_array_end = .);
	} >FLASH AT>FLASH 
	
	.ctors          :
	{
	  /* gcc uses crtbegin.o to find the start of
	     the constructors, so we make sure it is
	     first.  Because this is a wildcard, it
	     doesn't matter if the user does not
	     actually link against crtbegin.o; the
	     linker won't look for a file to match a
	     wildcard.  The wildcard also means that it
	     doesn't matter which directory crtbegin.o
	     is in.  */
	  KEEP (*crtbegin.o(.ctors))
	  KEEP (*crtbegin?.o(.ctors))
	  /* We don't want to include the .ctor section from
	     the crtend.o file until after the sorted ctors.
	     The .ctor section from the crtend file contains the
	     end of ctors marker and it must be last */
	  KEEP (*(EXCLUDE_FILE (*crtend.o *crtend?.o ) .ctors))
	  KEEP (*(SORT(.ctors.*)))
	  KEEP (*(.ctors))
	} >FLASH AT>FLASH 
	
	.dtors          :
	{
	  KEEP (*crtbegin.o(.dtors))
	  KEEP (*crtbegin?.o(.dtors))
	  KEEP (*(EXCLUDE_FILE (*crtend.o *crtend?.o ) .dtors))
	  KEEP (*(SORT(.dtors.*)))
	  KEEP (*(.dtors))
	} >FLASH AT>FLASH 

	.dalign :
	{
		. = ALIGN(4);
		PROVIDE(_data_vma = .);
	} >RAM AT>FLASH	

	.dlalign :
	{
		. = ALIGN(4); 
		PROVIDE(_data_lma = .);
	} >FLASH AT>FLASH

	.data :
	{
    	*(.gnu.linkonce.r.*)
    	*(.data .data.*)
    	*(.gnu.linkonce.d.*)
		. = ALIGN(8);
    	PROVIDE( __global_pointer$ = . + 0x800 );
    	*(.sdata .sdata.*)
		*(.sdata2.*)
    	*(.gnu.linkonce.s.*)
    	. = ALIGN(8);
    	*(.srodata.cst16)
    	*(.srodata.cst8)
    	*(.srodata.cst4)
    	*(.srodata.cst2)
    	*(.srodata .srodata.*)
    	. = ALIGN(4);
		PROVIDE( _edata = .);
	} >RAM AT>FLASH

	.bss :
	{
		. = ALIGN(4);
		PROVIDE( _sbss = .);
  	    *(.sbss*)
        *(.gnu.linkonce.sb.*)
		*(.bss*)
     	*(.gnu.linkonce.b.*)		
		*(COMMON*)
		. = ALIGN(4);
		PROVIDE( _ebss = .);
	} >RAM AT>FLASH

	PROVIDE( _end = _ebss);
	PROVIDE( end = . );

    .stack ORIGIN(RAM) + LENGTH(RAM) - __stack_size :
    {
        . = ALIGN(4);
        PROVIDE(_susrstack = . );
        . = . + __stack_size;
        PROVIDE( _eusrstack = .);
    } >RAM 

}




```

