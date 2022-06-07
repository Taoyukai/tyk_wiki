"use strict";(self.webpackChunktyk_wiki=self.webpackChunktyk_wiki||[]).push([[746],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7145:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={sidebar_position:2,description:"risc-v\u6c47\u7f16\u8bed\u8a00\u6982\u5ff5\u53ca\u8bed\u6cd5\u4ecb\u7ecd"},i="risc-v\u6c47\u7f16\u8bed\u8a00",c={unversionedId:"riscv/risc-v\u6c47\u7f16\u8bed\u8a00",id:"riscv/risc-v\u6c47\u7f16\u8bed\u8a00",title:"risc-v\u6c47\u7f16\u8bed\u8a00",description:"risc-v\u6c47\u7f16\u8bed\u8a00\u6982\u5ff5\u53ca\u8bed\u6cd5\u4ecb\u7ecd",source:"@site/docs/riscv/risc-v\u6c47\u7f16\u8bed\u8a00.md",sourceDirName:"riscv",slug:"/riscv/risc-v\u6c47\u7f16\u8bed\u8a00",permalink:"/en/docs/riscv/risc-v\u6c47\u7f16\u8bed\u8a00",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"risc-v\u6c47\u7f16\u8bed\u8a00\u6982\u5ff5\u53ca\u8bed\u6cd5\u4ecb\u7ecd"},sidebar:"RISCV",previous:{title:"risc-v\u7b80\u4ecb",permalink:"/en/docs/riscv/risc-v\u7b80\u4ecb"},next:{title:"risc-v\u6c47\u7f16\u6307\u4ee4-RV32I",permalink:"/en/docs/category/risc-v\u6c47\u7f16\u6307\u4ee4-rv32i"}},u={},s=[{value:"1. \u6c47\u7f16\u8bed\u8a00\u6982\u5ff5",id:"1-\u6c47\u7f16\u8bed\u8a00\u6982\u5ff5",level:2},{value:"2. \u6c47\u7f16\u8bed\u8a00\u8bed\u6cd5\u4ecb\u7ecd",id:"2-\u6c47\u7f16\u8bed\u8a00\u8bed\u6cd5\u4ecb\u7ecd",level:2},{value:"2.1 \u6c47\u7f16\u8bed\u53e5\u683c\u5f0f",id:"21-\u6c47\u7f16\u8bed\u53e5\u683c\u5f0f",level:3},{value:"2.2 label\u6807\u7b7e\u8be6\u89e3",id:"22-label\u6807\u7b7e\u8be6\u89e3",level:3},{value:"2.3 \u5e38\u7528\u4f2a\u64cd\u4f5c",id:"23-\u5e38\u7528\u4f2a\u64cd\u4f5c",level:3}],m={toc:s};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"risc-v\u6c47\u7f16\u8bed\u8a00"},"risc-v\u6c47\u7f16\u8bed\u8a00"),(0,l.kt)("h2",{id:"1-\u6c47\u7f16\u8bed\u8a00\u6982\u5ff5"},"1. \u6c47\u7f16\u8bed\u8a00\u6982\u5ff5"),(0,l.kt)("p",null,"\u6c47\u7f16\u8bed\u8a00\uff08Assembly Language\uff09\u662f\u4e00\u79cd\u201c\u4f4e\u7ea7\u8bed\u8a00\u201d\uff0c\u901a\u5e38\u5177\u6709",(0,l.kt)("strong",{parentName:"p"},"\u96be\u8bfb"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u96be\u5199"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u96be\u79fb\u690d"),"\u7684\u7f3a\u70b9\uff0c"),(0,l.kt)("p",null,"\u4f46\u6c47\u7f16\u8bed\u8a00\u662f\u76f4\u63a5\u5728\u786c\u4ef6\u4e4b\u4e0a\u5de5\u4f5c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5177\u6709",(0,l.kt)("strong",{parentName:"p"},"\u7075\u6d3b"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u5f3a\u5927"),"\u7684\u4f18\u70b9\u3002"),(0,l.kt)("p",null,"\u6c47\u7f16\u8bed\u8a00\u901a\u5e38\u5e94\u7528\u5728\u5982\u4e0b\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u76f4\u63a5\u8bbf\u95ee\u5e95\u5c42\u786c\u4ef6\u7684\u573a\u666f\uff0c\u5982\u5e95\u5c42\u9a71\u52a8\u3001\u5f15\u5bfc\u7a0b\u5e8f"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5bf9\u4ee3\u7801\u6267\u884c\u6027\u80fd\u6781\u81f4\u4f18\u5316\u7684\u573a\u666f\uff0c\u5982\u9ad8\u6027\u80fd\u7b97\u6cd5\u5e93\u3001OS\u7684\u4e0a\u4e0b\u6587\u5207\u6362")),(0,l.kt)("h2",{id:"2-\u6c47\u7f16\u8bed\u8a00\u8bed\u6cd5\u4ecb\u7ecd"},"2. \u6c47\u7f16\u8bed\u8a00\u8bed\u6cd5\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u6c47\u7f16\u8bed\u6cd5\u7248\u672c\u6709GNU\u548cIntel\u7b49\uff0c\u56e0\u4e3aRISC-V\u91c7\u7528GNU Compiler Collection\uff08GCC\uff09\u7f16\u8bd1\uff0c\u672c\u5c0f\u8282\u5c06\u7b80\u8981\u4ecb\u7ecdGNU\u7248\u672c\u7684\u6c47\u7f16\u8bed\u6cd5\uff0c\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u81ea\u884c\u67e5\u9605GUN\u6c47\u7f16\u8bed\u6cd5\u624b\u518c\u6df1\u5165\u4e86\u89e3\u3002"),(0,l.kt)("h3",{id:"21-\u6c47\u7f16\u8bed\u53e5\u683c\u5f0f"},"2.1 \u6c47\u7f16\u8bed\u53e5\u683c\u5f0f"),(0,l.kt)("p",null,"\u4e00\u6761\u5178\u578b\u7684RISC-V \u6c47\u7f16\u8bed\u53e5\u75313\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[label:] [operation] [comment]  # []\u5185\u7684\u90e8\u5206\u53ef\u4ee5\u7701\u7565\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label\uff08\u6807\u7b7e\uff09\uff1a"),"GNU\u6c47\u7f16\u4e2d\uff0c\u4efb\u4f55\u4ee5\u5192\u53f7\u7ed3\u5c3e\u7684\u6807\u8bc6\u7b26\u90fd\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u6807\u7b7e\uff0c\u800c\u4e0d\u4e00\u5b9a\u975e\u8981\u5728\u4e00\u884c\u7684\u5f00\u59cb\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"operation\uff08\u64cd\u4f5c\u7801\uff09\uff1a"),"\u64cd\u4f5c\u7801\u90e8\u5206\u6709\u4ee5\u4e0b\u591a\u79cd\u7c7b\u578b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"instruction\uff08\u6307\u4ee4\uff09\uff1a\u76f4\u63a5\u5bf9\u5e94\u4e8c\u8fdb\u5236\u673a\u5668\u6307\u4ee4\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ul"},"pseudo-instruction\uff08\u4f2a\u6307\u4ee4\uff09\uff1a\u4e00\u6761\u4f2a\u6307\u4ee4\u5728\u6c47\u7f16\u65f6\u4f1a\u751f\u6210\u591a\u6761\u5b9e\u9645\u7684\u6c47\u7f16\u6307\u4ee4\uff0c\u4f7f\u7528\u4f2a\u6307\u4ee4\u53ef\u63d0\u9ad8\u4ee3\u7801\u7684\u7f16\u5199\u6548\u7387"),(0,l.kt)("li",{parentName:"ul"},"directive\uff08\u6307\u793a/ \u4f2a\u64cd\u4f5c\uff09\uff1a\u901a\u8fc7\u7c7b\u4f3c\u6307\u4ee4\u7684\u5f62\u5f0f\uff08\u4ee5\u201c.\u201d\u5f00\u5934\uff09\uff0c\u901a\u77e5\u6c47\u7f16\u5668\u5982\u4f55\u63a7\u5236\u4ee3\u7801\u7684\u4ea7\u751f\u7b49\uff0c\u4e0d\u5bf9\u5e94\u5177\u4f53\u7684\u6307\u4ee4"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"comment\uff08\u6ce8\u91ca\uff09\uff1a"),'\u4ee3\u7801\u6ce8\u91ca\uff0c\u4ee5"',(0,l.kt)("strong",{parentName:"li"},"#"),'"\u6216\u201c',(0,l.kt)("strong",{parentName:"li"},";"),"\u201d\u5f00\u59cb\u5230\u5f53\u524d\u884c\u7ed3\u675f")),(0,l.kt)("h3",{id:"22-label\u6807\u7b7e\u8be6\u89e3"},"2.2 label\u6807\u7b7e\u8be6\u89e3"),(0,l.kt)("p",null,"\u6807\u7b7e\u7684\u672c\u8d28\u662f\u4ee3\u8868\u5b83\u6240\u5728\u7684\u5730\u5740\uff0c\u56e0\u6b64\u6807\u7b7e\u53ef\u4ee5\u5f53\u4f5c",(0,l.kt)("strong",{parentName:"p"},"\u53d8\u91cf"),"\u6216",(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570"),"\u6765\u4f7f\u7528\u3002\u5e38\u89c1\u7684\u6807\u7b7e\u5206\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u6587\u672c\u6807\u7b7e"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u6570\u5b57\u6807\u7b7e"),"\u3002"),(0,l.kt)("p",null,"\u6807\u7b7e\u53ea\u80fd\u7531a\uff5ez\uff0cA\uff5eZ\uff0c0\uff5e9\uff0c\u201c.\u201d\uff0c\u201c_\u201d\u8fd9\u4e9b\u70b9\u3001\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7b49\u5b57\u7b26\u7ec4\u6210\uff0c\u9664\u6570\u5b57\u6807\u7b7e\u5916\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff081\uff09\u6587\u4ef6\u6807\u7b7e"),"\u5728\u7a0b\u5e8f\u6587\u4ef6\u4e2d\u662f\u5168\u5c40\u53ef\u89c1\u7684\uff0c\u6240\u4ee5\u5728\u5b9a\u4e49\u662f\u4e0d\u53ef\u91cd\u590d\u3002\u6587\u672c\u6807\u7b7e\u901a\u5e38\u88ab\u4f5c\u4e3a\u5206\u652f\u6216\u8df3\u8f6c\u6307\u4ee4\u7684\u76ee\u6807\u5730\u5740\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"loop\uff1a  # \u5b9a\u4e49\u4e00\u4e2aloop\u6807\u7b7e\n    ...\n    j loop # \u8df3\u8f6c\u5230loop\u6807\u7b7e\u5904\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff082\uff09\u6570\u5b57\u6807\u7b7e"),"\u5c5e\u4e8e\u4e00\u79cd\u5c40\u90e8\u6807\u7b7e\uff0c\u53ef\u91cd\u590d\u5b9a\u4e49\uff0c\u901a\u5e38\u75280~9\u4e4b\u95f4\u7684\u6570\u5b57\u5b9a\u4e49\u3002\u5728\u88ab\u5f15\u7528\u65f6\uff0c\u6570\u5b57\u6807\u7b7e\u901a\u5e38\u9700\u8981\u5e26\u4e0a\u5b57\u6bcd\u201c",(0,l.kt)("strong",{parentName:"p"},"f"),"\u201d\u6216\u201c",(0,l.kt)("strong",{parentName:"p"},"b"),"\u201d\u5b57\u6bcd\u540e\u7f00\uff0c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"f\uff1a"),"\u6307\u793a\u7f16\u8bd1\u5668\u5411\u524d\u641c\u7d22\uff0c\u5373\u4ee3\u7801\u884c\u6570\u589e\u52a0\u7684\u65b9\u5411"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"b\uff1a"),"\u6307\u793a\u7f16\u8bd1\u5668\u5411\u540e\u641c\u7d22\uff0c\u5373\u4ee3\u7801\u884c\u6570\u51cf\u5c11\u7684\u65b9\u5411")),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    j 1f # \u5411\u524d\u5bfb\u627e\u5e76\u8df3\u8f6c\u81f3\u7b2c\u4e00\u4e2a\u6570\u5b57\u4e3a1\u7684\u6807\u7b7e\u5904\n    ...\n1:       #\u6570\u5b57\u6807\u7b7e1\n    ...\n    j 1b # \u5411\u540e\u5bfb\u627e\u5e76\u8df3\u8f6c\u81f3\u7b2c\u4e00\u4e2a\u6570\u5b57\u4e3a1\u7684\u6807\u7b7e\u5904\n")),(0,l.kt)("h3",{id:"23-\u5e38\u7528\u4f2a\u64cd\u4f5c"},"2.3 \u5e38\u7528\u4f2a\u64cd\u4f5c"),(0,l.kt)("p",null,"\u4f2a\u64cd\u4f5c\u901a\u5e38\u4ee5\u201c",(0,l.kt)("strong",{parentName:"p"},"."),"\u201d\u5f00\u5934\uff0c\u5728\u6c47\u7f16\u7a0b\u5e8f\u4e2d\u7684\u4f5c\u7528\u662f\u6307\u5bfc\u6c47\u7f16\u5668\u5904\u7406\u6c47\u7f16\u7a0b\u5e8f\u7684\u884c\u4e3a\uff0c\u4ec5\u5728\u6c47\u7f16\u8fc7\u7a0b\u4e2d\u8d77\u4f5c\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff081\uff09.file filename")),(0,l.kt)("p",null,".file \u4f2a\u64cd\u4f5c\uff0c\u6307\u793a\u6c47\u7f16\u5668\u8be5\u6c47\u7f16\u7a0b\u5e8f\u7684\u903b\u8f91\u6587\u4ef6\u540d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff082\uff09.global symbol_name\u6216.globl symbol_name")),(0,l.kt)("p",null,".global\u548c.globl\u4f2a\u64cd\u4f5c\uff0c\u7528\u4e8e\u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u7684\u7b26\u53f7\uff0c\u4f7f\u5f97\u5176\u4ed6\u6587\u4ef6\u4e5f\u53ef\u8c03\u7528\u8be5symbol_name"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff083\uff09.local symbol_name")),(0,l.kt)("p",null,".local\u4f2a\u64cd\u4f5c\uff0c\u7528\u4e8e\u5b9a\u4e49\u5c40\u90e8\u7b26\u53f7\uff0c\u4f7f\u5f97\u8be5symbol_name\u5bf9\u5176\u4ed6\u6587\u4ef6\u4e0d\u53ef\u89c1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff084\uff09.weak symbol_name")),(0,l.kt)("p",null,"\u5728\u6c47\u7f16\u7a0b\u5e8f\u4e2d\uff0c\u7b26\u53f7\u7684\u9ed8\u8ba4\u5c5e\u6027\u4e3a\u5f3a\uff08strong\uff09\uff0c.weak\u4f2a\u64cd\u4f5c\u7528\u4e8e\u8bbe\u7f6e\u7b26\u53f7\u7684\u5c5e\u6027\u4e3a\u5f31\uff08weak\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff085\uff09.type name\uff0ctype description")),(0,l.kt)("p",null,".type\u4f2a\u64cd\u4f5c\u7528\u4e8e\u5b9a\u4e49\u7b26\u53f7\u7684\u7c7b\u578b\u3002\u5982\u201c.type symbol,@function\u201d\u8868\u793a\u5c06\u540d\u4e3asymbol\u7684\u7b26\u53f7\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u51fd\u6570\uff08function\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff086\uff09.align integer")),(0,l.kt)("p",null,".align\u4f2a\u64cd\u4f5c\uff0c\u7528\u4e8e\u5b9a\u4e49\u63a5\u4e0b\u6765\u7684\u5730\u5740\u6309\u71672\u7684integer\u6b21\u65b9\u5bf9\u9f50\u3002\u5982\u201c.align 2\u201d\u8868\u793a\u6309\u71674\u5b57\u8282\u5bf9\u9f50\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff087\uff09.section name ","[,subsection]")),(0,l.kt)("p",null,".section\u4f2a\u64cd\u4f5c\u6307\u793a\u5c06\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u6c47\u7f16\u94fe\u63a5\u5230\u540d\u4e3aname\u7684\u6bb5\u4e2d\uff08Section\uff09\uff0c\u8fd8\u53ef\u4ee5\u6307\u5b9a\u53ef\u9009\u7684\u5b50\u6bb5\uff08Subsection\uff09\uff0c\u5e38\u89c1\u7684\u6bb5\u6709.text\u3001.data\u3001.bss."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u201c.section .text\u201d \u5c06\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u6c47\u7f16\u94fe\u63a5\u5230.text\u6bb5\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u201c.section .data\u201d \u5c06\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u6c47\u7f16\u94fe\u63a5\u5230.data\u6bb5\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u201c.section .bss\u201d \u5c06\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u6c47\u7f16\u94fe\u63a5\u5230.bss\u6bb5\u4e2d")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uff088\uff09.macro\u548c.endm\u5b8f\u5b9a\u4e49")),(0,l.kt)("p",null,".macro\u548c.endm\u7528\u4e8e\u5b9a\u4e49\u5b8f\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".macro mutil_add a,b,c  #\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3amutil_add\u7684\u5b8f\uff0c\u53c2\u6570\u4e3aa\u3001b\u3001c\nadd t0,a,b              #\u5c06a\u548cb\u76f8\u52a0\uff0c\u503c\u5199\u5165t0\u5bc4\u5b58\u5668\nadd c,c,t0              #\u52a0t0\u548cc\u76f8\u52a0\uff0c\u503c\u5199\u5165c\n.endm                   #\u5b8f\u5b9a\u4e49\u7ed3\u675f\n\nmutil_add x1,x2,x3      #\u8c03\u7528mutil_add\n")))}k.isMDXComponent=!0}}]);