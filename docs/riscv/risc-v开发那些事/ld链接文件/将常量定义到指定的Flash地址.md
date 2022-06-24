---
sidebar_position: 2 
description: 通过定义ld段，将常量定义到指定的Flash地址
---

# 将常量定义到指定的Flash地址

Keil MDK开发ARM 内核的MCU时，将常量定义到指定的Flash地址中，使用 **\__attribute__( at(绝对地址) )**即可，如：

```C
//定位在flash中,其他flash补充为0 
const u32 myConstVariable_1[128] __attribute__((at(0x08001000))) = {0x12345678,0x22221111};
```

沁恒RISC-V MCU ，通过Mounriver Studio(MRS)开发时，暂时不支持**\__attribute__( at(绝对地址) )**命令。可通过如下步骤实现：

## 1. 编辑ld链接文件，添加SECTIONS段

```c
	.flash_test_address :
	{
		. = ALIGN(4);              /*4字节对齐*/
        
        /*ORIGIN(FLASH)为 MEMORY定义的FLASH的起始地址（CH32V103为0x08000000），指定到从FLASH起始的0x1000长度的位置*/
		. = ORIGIN(FLASH)+0x1000;  
        
        /*链接时*KEEP()可以使得被标记段的内容不被清除*/
		KEEP(*(SORT_NONE(.test_address_1)))  
            
		. = ALIGN(4);
	} >FLASH AT>FLASH 
```

如需将变量定义到Flash的最后，将此段添加到 **.text**段后面，注意指定的Flash地址要大于程序编译大小。

## 2. 函数中使用__attribute__((section(".xxx")))定义常量

### 2.1 定义单字节常量

```C
const uint8_t myConstVariable_1 __attribute__((section(".test_address_1"))) = 0x11;/*地址为0x00001000*/
```

查看map文件，常量地址如下:

![](img\const_variable_flash_address.png)

sections .flash_test_address段中以**4字节对齐**，其余3字节补0。

二进制bin文件0x1000地址信息如下;

![](img\const_variable_flash_address_bin.png)

### 2.2 定义连续的多个单字节常量

```C
const uint8_t myConstVariable_1 __attribute__((section(".test_address_1"))) = 0x11; /*地址为0x00001002*/
const uint8_t myConstVariable_2 __attribute__((section(".test_address_1"))) = 0x22; /*地址为0x00001001*/
const uint8_t myConstVariable_3 __attribute__((section(".test_address_1"))) = 0x33; /*地址为0x00001000*/
```

ld文件中flash_test_address 段默认从指定地址开始为其分配连续的地址，查看map文件，常量地址如下:

![](img\const_variable_flash_address_multi.png)

二进制bin文件0x1000地址信息如下;

![](img\const_variable_flash_address_multi_bin.png)

### 2.3 定义多个不连续的常量

此时需要修改**ld**文件

```C
.flash_test_address :
	{
		. = ALIGN(4);              /*4字节对齐*/
        
        /*ORIGIN(FLASH)为 MEMORY定义的FLASH的起始地址（CH32V103为0x08000000），指定到从FLASH起始的0x1000长度的位置*/
		. = ORIGIN(FLASH)+0x1000;  
        
        /*链接时*KEEP()可以使得被标记段的内容不被清除*/
		KEEP(*(SORT_NONE(.test_address_1)))  
   
        /*ORIGIN(FLASH)为 MEMORY定义的FLASH的起始地址（CH32V103为0x08000000），指定到从FLASH起始的0x1040长度的位置*/
        . = ORIGIN(FLASH)+0x1040;  
        
        /*链接时*KEEP()可以使得被标记段的内容不被清除*/
		KEEP(*(SORT_NONE(.test_address_2)))  
            
		. = ALIGN(4);
	} >FLASH AT>FLASH 
```

在函数中定义两个指定地址的常量

```C
const uint8_t myConstVariable_1[8] __attribute__((section(".test_address_1"))) = {0x11,0x22,0x33,0x44}; /*首地址为0x00001000*/
const uint8_t myConstVariable_2[4] __attribute__((section(".test_address_2"))) = {0x55,0x66}; /*首地址为0x00001040*/
```

查看map文件，常量地址如下:

![](img\const_variable_flash_address_no.png)

二进制bin文件0x1000地址信息如下;

![](img\const_variable_flash_address_no_bin.png)

**这样指定的方式会造成中间段有56个字节的flash无法分配内容，浪费了**，不建议这样指定，如果实在要这样做，需要严格控把控，可根据间隔的大小，指定编译后小于该间隔的**函数**存储到该flash块。

如指定函数**Delay_Init**编译后存放test_address_1块内，紧跟定义的常量后。

```C
/*******************************************************************************
* Function Name  : Delay_Init
* Description    : Initializes Delay Funcation.
* Input          : None
* Return         : None
*******************************************************************************/
__attribute__((section(".test_address_1"))) void Delay_Init(void)
{
	p_us=SystemCoreClock/8000000;
	p_ms=(uint16_t)p_us*1000;
}
```

Delay_Init函数编译后的大小为0x2a，编译后的map文件如下：

![](img\const_variable_flash_address_no_add.png)

二进制bin文件0x1000地址信息如下：

![](img\const_variable_flash_address_no_add_bin.png)

***（新增的A2 4A 04 指令暂时不详）***

