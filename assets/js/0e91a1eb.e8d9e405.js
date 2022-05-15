"use strict";(self.webpackChunktyk_wiki=self.webpackChunktyk_wiki||[]).push([[3796],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,v=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return t?a.createElement(v,i(i({ref:n},m),{},{components:t})):a.createElement(v,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},297:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return w},metadata:function(){return g},toc:function(){return T}});var a=t(7462),r=t(3366),o=t(7294),i=t(3905),s=t(2389),l=t(7392),u=t(7094),m=t(2466),c=t(6010),p="tabList_uSqn",d="tabItem_LplD";function v(e){var n,t,r,i=e.lazy,s=e.block,v=e.defaultValue,k=e.values,h=e.groupId,f=e.className,N=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=k?k:N.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(w,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===v?v:null!=(n=null!=v?v:null==(t=N.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=N[0])?void 0:r.props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),T=y.tabGroupChoices,x=y.setTabGroupChoices,C=(0,o.useState)(g),O=C[0],E=C[1],_=[],z=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=T[h];null!=I&&I!==O&&w.some((function(e){return e.value===I}))&&E(I)}var j=function(e){var n=e.currentTarget,t=_.indexOf(n),a=w[t].value;a!==O&&(z(n),E(a),null!=h&&x(h,a))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,c.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},w.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return _.push(e)},onKeyDown:M,onFocus:j,onClick:j},r,{className:(0,c.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},N.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function k(e){var n=(0,s.Z)();return o.createElement(v,(0,a.Z)({key:String(n)},e))}var h="tabItem_OmH5";function f(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,c.Z)(h,a),hidden:t},n)}var N=["components"],w={sidebar_position:2,description:"\u4ecb\u7ecddocusaurus\u4e0b\u7684markdown\u7279\u6b8a\u7528\u6cd5"},b="docusaurus markdown\u7279\u6b8a\u7528\u6cd5",g={unversionedId:"tool/docusaurus/docusaurus markdown\u7279\u6b8a\u7528\u6cd5",id:"tool/docusaurus/docusaurus markdown\u7279\u6b8a\u7528\u6cd5",title:"docusaurus markdown\u7279\u6b8a\u7528\u6cd5",description:"\u4ecb\u7ecddocusaurus\u4e0b\u7684markdown\u7279\u6b8a\u7528\u6cd5",source:"@site/docs/tool/docusaurus/docusaurus markdown\u7279\u6b8a\u7528\u6cd5.md",sourceDirName:"tool/docusaurus",slug:"/tool/docusaurus/docusaurus markdown\u7279\u6b8a\u7528\u6cd5",permalink:"/docs/tool/docusaurus/docusaurus markdown\u7279\u6b8a\u7528\u6cd5",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u4ecb\u7ecddocusaurus\u4e0b\u7684markdown\u7279\u6b8a\u7528\u6cd5"},sidebar:"TOOL",previous:{title:"Docusaurus\u642d\u5efa\u4e2a\u4ebawiki",permalink:"/docs/tool/docusaurus/docusaurus\u642d\u5efawiki"},next:{title:"eide_tutorial",permalink:"/docs/category/eide_tutorial"}},y={},T=[{value:"1. \u9009\u9879\u5361Tabs",id:"1-\u9009\u9879\u5361tabs",level:2},{value:"2. \u544a\u793a\u6846Admonitions",id:"2-\u544a\u793a\u6846admonitions",level:2}],x={toc:T};function C(e){var n=e.components,t=(0,r.Z)(e,N);return(0,i.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docusaurus-markdown\u7279\u6b8a\u7528\u6cd5"},"docusaurus markdown\u7279\u6b8a\u7528\u6cd5"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8be6\u7ec6\u7528\u6cd5\u53c2\u8003")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u66f4\u591aMarkdown\u65b0\u589e\u529f\u80fd\u7528\u6cd5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://www.docusaurus.cn/docs/markdown-features"},(0,i.kt)("strong",{parentName:"a"},"\u5b98\u65b9\u6559\u7a0b"))))),(0,i.kt)("h2",{id:"1-\u9009\u9879\u5361tabs"},"1. \u9009\u9879\u5361Tabs"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,i.kt)("p",null,"\u5c55\u793a\u6548\u679c\uff1a"),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(f,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,i.kt)(f,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(f,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,i.kt)("h2",{id:"2-\u544a\u793a\u6846admonitions"},"2. \u544a\u793a\u6846Admonitions"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":::note  (\u81ea\u5b9a\u4e49\u6807\u9898\uff0c\u53ef\u7701\u7565)\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,i.kt)("p",null,"\u5c55\u793a\u6548\u679c\uff1a"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"(\u81ea\u5b9a\u4e49\u6807\u9898\uff0c\u53ef\u7701\u7565)")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some ",(0,i.kt)("strong",{parentName:"p"},"content")," with ",(0,i.kt)("em",{parentName:"p"},"markdown")," ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,i.kt)("a",{parentName:"p",href:"#"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"api")),"."))))}C.isMDXComponent=!0}}]);