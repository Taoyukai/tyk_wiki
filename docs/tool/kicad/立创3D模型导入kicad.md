---
sidebar_position: 3
description: 立创商城中元器件得3D模型，导出为step文件，kicad可用
---

# 立创3D模型导入kicad

使用 kicad 绘制PCB时，有时候元器件的3D模型没有，这个时候可以直接从立创EDA导出3D模型。

步骤如下：

## 1. 立创EDA

- 打开[EDA专业版官网](https://pro.lceda.cn/)，点击 <kbd>**在线使用**</kbd>

![LC_EDA_website](img\LC_EDA_website.png)

- 新建一个PCB文件，导入所需的3D模型的元器件（以轻触按键为例）

    ![LC_EDA_button_test](img\LC_EDA_button_test.png)

- 导出3D step文件

    ![LC_EDA_output_3d](img\LC_EDA_output_3d.png)

## 2. FreeCAD

通过立创EAD导出的3D模型是带了PCB底板的，可以通过[FreeCAD](https://www.freecadweb.org/)这个软件删除PCB地板，并导出元器件单独的3D封装。

- 选择 file -> open ，打开立创EDA导出的3D封装，可以看到按键和PCB底座，点击删除PCB底座

![freecad_open_file](img\freecad_open_file.png)

:::tip

如果按键和PCB地址是一个整体，需要设置下freecad导入step时，把 `Enable STEP Compound merge` 项关掉

![freecad_disable_step_merge](img\freecad_disable_step_merge.png)

:::

- 删除PCB底座，直接导出step格式的3D文件即可，就可以在kicad软件中使用了。

![freecad_export_step](img\freecad_export_step.png)
