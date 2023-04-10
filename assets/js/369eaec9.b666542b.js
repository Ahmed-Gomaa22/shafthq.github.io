"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[7857],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,h=m["".concat(u,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={slug:"self-managed-appium-execution",title:"New Feature Announcement - Self-managed Appium Execution",authors:["mohab"],tags:["selenium","appium","shaft_engine"]},o=void 0,l={permalink:"/blog/self-managed-appium-execution",editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/blog/2023-02-12-self-managed-appium-execution.md",source:"@site/blog/2023-02-12-self-managed-appium-execution.md",title:"New Feature Announcement - Self-managed Appium Execution",description:"A new Major feature approaches!",date:"2023-02-12T00:00:00.000Z",formattedDate:"February 12, 2023",tags:[{label:"selenium",permalink:"/blog/tags/selenium"},{label:"appium",permalink:"/blog/tags/appium"},{label:"shaft_engine",permalink:"/blog/tags/shaft-engine"}],readingTime:.675,hasTruncateMarker:!1,authors:[{name:"Mohab Mohie",title:"SHAFT_Engine creator",url:"https://github.com/MohabMohie",imageURL:"https://github.com/MohabMohie.png",key:"mohab"}],frontMatter:{slug:"self-managed-appium-execution",title:"New Feature Announcement - Self-managed Appium Execution",authors:["mohab"],tags:["selenium","appium","shaft_engine"]},prevItem:{title:"Dear SHAFT users, we need your support!",permalink:"/blog/we-need-your-support"},nextItem:{title:"Selenium Ecosystem",permalink:"/blog/selenium-ecosystem"}},u={authorsImageUrls:[void 0]},p=[{value:"What is self-managed appium execution?",id:"what-is-self-managed-appium-execution",level:2},{value:"Watch the demo and explore the code \u2b8a",id:"watch-the-demo-and-explore-the-code-",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A new Major feature approaches!"),(0,r.kt)("h1",{id:"shaft_engine-will-now-manage-its-own-appium-execution-environment-"},(0,r.kt)("b",null,"SHAFT_Engine")," will now manage its own Appium Execution Environment \ud83c\udf89\ud83c\udf89"),(0,r.kt)("a",{href:"https://github.com/ShaftHQ/SHAFT_ENGINE",target:"_blank"},(0,r.kt)("img",{src:"https://raw.githubusercontent.com/ShaftHQ/SHAFT_ENGINE/master/src/main/resources/images/shaft.png",alt:"Selenium WebDriver",height:"50px"})),"    \ud83e\udd1d    ",(0,r.kt)("a",{href:"https://appium.github.io/appium/docs/en/2.0/",target:"_blank"},(0,r.kt)("img",{src:"https://appium.github.io/appium/docs/en/2.0/assets/images/appium-logo-horiz.png",alt:"Appium",height:"50px"})),(0,r.kt)("h2",{id:"what-is-self-managed-appium-execution"},"What is self-managed appium execution?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One of the common challenges for mobile application test automation is achieving and maintaining a proper testing environment."),(0,r.kt)("li",{parentName:"ul"},"A Testing environment consists of several elements; Android SDK CLI tools, Android System Image, Android Emulator, Support for Hardware acceleration, NPM, Appium 2.x server, drivers and plugins."),(0,r.kt)("li",{parentName:"ul"},"SHAFT will now download, and setup your testing environment."),(0,r.kt)("li",{parentName:"ul"},"SHAFT will also maintain everything in your environment to ensure that it's all up-to-date."),(0,r.kt)("li",{parentName:"ul"},"SHAFT will then initialize the Emulator, initialize the Appium server, and synchronize everything before starting test execution.")),(0,r.kt)("h2",{id:"watch-the-demo-and-explore-the-code-"},(0,r.kt)("a",{parentName:"h2",href:"https://youtu.be/JFuu9qyEgNM"},"Watch the demo and explore the code \u2b8a")))}m.isMDXComponent=!0}}]);