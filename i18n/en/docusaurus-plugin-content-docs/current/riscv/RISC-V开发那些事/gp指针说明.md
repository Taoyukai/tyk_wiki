---
sidebar_position: 1
---

**gp**，**g**lobal **p**ointer，全局指针寄存器，RISC-V 32个寄存器之一，为了优化±2KB内全局变量的访问。

gp寄存器在启动代码中加载为`__global_pointer$`的地址，并且之后不能被改变。

linker时使用**__global_pointer$**来比较全局变量的地址，如果在范围内，就替换掉**lui**或**puipc**指令的 absolute/pc-relative寻址，变为gp-relative寻址，使得代码效率更高。该过程被称为**linker relaxation**(链接器松弛)，也可以使用`-Wl,--no-relax`来disable此功能。

如：需要读取全局变量 **tao_global**的值，地址位**0x20000100**，gp指针地址为**0x20000800**；

- 普通调用方式为：

```c
lui a5,0x20000   /* 将0x20000100 高20位 左移12位赋给a5寄存器 */
lw  a5,256(a5)   /* 加载a5+256（0x100，0x20000100低12位）的值值a5寄存器 */
```

- gp指针优化调用方式：

```C
lw a5,-1792(gp)  /* 加载gp-1792地址处的值至a5，即0x20000100处的值*/
```

通过gp指针，访问其值±2KB，即4KB范围内的全局变量，可以节约一条指令。

4KB区域可以位于寻址内存中任意位置，但是为了使优化更有效率，最好覆盖最频繁使用的RAM区域。对于标准的newlib应用程序，这是分配.sdata部分的区域，因为它包含了诸如_impure_ptr、malloc_sbrk_base等变量。因此，定义应该被放在.sdata部分之前。具体分配在ld文件中定义：

```C
.data :
	{
    	*(.gnu.linkonce.r.*)
    	*(.data .data.*)
    	*(.gnu.linkonce.d.*)
		. = ALIGN(8);
    	PROVIDE( __global_pointer$ = . + 0x800 );  /* gp */
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
```

