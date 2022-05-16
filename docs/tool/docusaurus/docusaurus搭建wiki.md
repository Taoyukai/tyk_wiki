---
sidebar_position: 1
description: 介绍Docusaurus静态网站生成器，利用Github Pages搭建个人wiki。
---

# docusaurus搭建个人wiki

## 1. docusaudrus简介

Docusaurus是 Facebook 开源的一个静态网站生成器，主要用来给开源项目生成帮助文档或博客，其功能和Hexo或Jekyll功能类似，可以根据Markdown文件生成静态页面，然后部署到Github Pages之类的纯静态环境。

- [Docusaurus github 仓库](https://github.com/facebook/docusaurus) 
- [Docusaurus 使用说明](https://docusaurus.io/)



![docusaurus_logo](img\docusaurus_logo.png)

## 2. 安装Docusaurus

> 参考[Docusaurus快速使用教程](https://docusaurus.io/docs/installation)。

:::note

Docusaurus是使用Node.js开发的，安装前需确保电脑上已经安装了[Node.js](https://nodejs.org/)。

:::

使用npm安装：

```js
npx create-docusaurus@latest my-website classic
```

其中**my-website**就是项目或者文档的名称，**classic** 是 Docusaurus 的默认模板名称。

安装完成后，进入my-website路径，已生成网站的对应文件

> 项目结构概要
>- `/blog/` - 包含博客的 Markdown 文件。如果你关闭了博客功能，则可以将此目录删除。你还可以通过设置 `path` 参数来改变此目录的名称。在 [博客功能指南](https://www.docusaurus.cn/docs/blog) 文档中可以找到更多详细信息
>- `/docs/` - 包含文档的 Markdown 文件。可在 `sidebars.js` 中自定义文档在侧边栏中的顺序。如果你关闭了文档功能，则可以删除该目录。你还可以通过设置 `path` 参数来改变此目录的名称。在 [文档功能指南](https://www.docusaurus.cn/docs/docs-markdown-features) 中可以找到更多详细信息
>- `/src/`- 非文档文件，例如独立页面（pages）或自定义的 React 组件。你不必严格地遵守将非文档文件放到这里，但是将它们集中在此目录下可以更轻松地进行管理，以便您需要进行某些格式校验或处理
>- `/src/pages` - 此目录中的任何扩展名为 JSX/TSX/MDX 文件都将被转换为网站的独立页面(page)。 可以在 [独立页面（pages）指南](https://www.docusaurus.cn/docs/creating-pages) 中找到更多详细信息
>- `/static/` - 存放静态文件的目录。此处的所有内容都将被复制到最终的 `build` 目录的根目录下
>- `/docusaurus.config.js` - 包含站点配置的配置文件。与 Docusaurus 1 中的 `siteConfig.js` 文件等价
>- `/package.json` - Docusaurus 网站也是一个 React 应用程序。你可以在其中安装和使用所需的任何 npm 软件包
>- `/sidebar.js` - 生成文档时使用此文件来指定侧边栏中的文档顺序



运行项目：

```
npm run start
```

Docusaurus 编译后会启动一个本地服务器，在浏览器中输入 [http://localhost:3000/](http://localhost:3000/) 即可访问页面

![docusaurus_demo](img\docusaurus_demo.png)

此时编辑**docs**或**blog**文件夹下的markdown文件，会在该页面实时更新。

需要编译静态部署页面可执行如下命令：

```
npm run build
```

编译完成后会生成**build**文件夹，可通过如下命令查看编译生成的网页：

```
npm run serve
```

## 3. 站点信息配置

1. 在项目根目录下的’`docusaurus.config.js` 文件，用于配置站点信息、页头、页脚。
2. 在项目根目录下的 `sidebars.js` 文件，用于侧边栏配置。
3. 在项目根目录的 `src` 目录，`src` 目录中又有一个 `pages` 目录，`pages` 目录中的 `index.js` 就是首页文件。在 `index.js`中有一个 `features` 数组，数组中的内容就是首页的项目描述。

详细的配置信息可以根据个人喜好进行配置。

:::tip

官方分享的[Docusaurus案例展示](https://docusaurus.io/showcase)，可以借鉴。

:::

## 4. 部署到GitHub Pages



### 4.1 创建GitHub项目仓库

- 创建一个项目，然后在setting里面设置`GitHub Pages`, 把构建的分支改为`gh-pages`,这个分支是要自己建立的，目前里面什么都不用有，把当前的项目代码都推到`master`分支。

![github_pages_set](img\github_pages_set.png)

- 参考Github Pages中的路径，配置`docusaurus.config.js`中的页面url和baseUrl等信息

```js
  url: 'https://taoyukai.github.io', 
  baseUrl: '/tyk_wiki/',   
```

### 4.2 设置自动部署

- 设置`push`到`master`分支之后自动部署，这个时候就要用到刚才建立好的`gh-pages`分支了，在根目录建立`.github/workflows/deploy_documentation.yml`文件，参考[阮一峰大佬的博客](https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2019%2F09%2Fgetting-started-with-github-actions.html)

- 要注意一下`ACCESS_TOKEN`的配置，这个要提前在`github`中配置一下。参考[github官网](https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fen%2Fgithub%2Fauthenticating-to-github%2Fcreating-a-personal-access-token)

- 要注意一下`CNAME`文件，如果你有自己的域名用的不是`username.github.io`这个域名的话，需要建立`CNAME`文件，并在里面写上自己的域名。

deploy_documentation.yml文件内容如下：

```js
name: Deploy Github pages
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master
      with:
        persist-credentials: false
    - name: Install and Build
      run: |
        npm install
        npm run-script build
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: ${{ secrets.DOC_DEPLOY }}
        BRANCH: gh-pages
        FOLDER: build
        BUILD_SCRIPT: npm install && npm run build
```

### 4.3 推送项目

把当前的项目文件都推送到`master`分支上，这个时候如果没有什么问题，`github`的`action`就开始工作自动部署了。

![github_pages_actions](img\github_pages_actions.png)

## 5. 部署到Vercel

Vercel，一个开箱即用的网站托管服务，类似于Github Pages，但比Github Pages强大，速度也快得多。

- [Vercel官网](https://vercel.com)

### 5.1 注册并登录Vercel

推荐使用Github账号一键登录。



![vercel_login_page](img\vercel_login_page.png)

### 5.2 导入github上的网站项目

- 在vercel的Overview菜单下，点击按钮 New Project
- 在Import Git Repository选项下，选择需要导入的项目，点击Import

![vercel_import](img\vercel_import.png)

### 5.3 部署项目

- 点击Deploy按钮，vercel就开始构建和部署了

    ![vercel_deploy](img\vercel_deploy.png)

构建完之后，可以在Overview菜单下，看到新建的项目,至此项目已经创建完成，可以通过vercel自动配置的子域名访问了。

![vercel_deploy_ok](img\vercel_deploy_ok.png)

### 5.4 添加自己的域名

vercel支持使用自己注册的域名访问。

在Settings->Domains页面下，输入框中填入想设置的域名，点击Add按钮，并设置相应的解析即可。

![vercel_add_domains](img\vercel_add_domains.png)
