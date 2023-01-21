"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[2815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={id:"retryFailedTests",title:"Retry Failed Tests",sidebar_label:"Retry Failed Tests"},a=void 0,s={unversionedId:"Configuration/retryFailedTests",id:"Configuration/retryFailedTests",title:"Retry Failed Tests",description:"Objective",source:"@site/docs/Configuration/retryFailedTests.md",sourceDirName:"Configuration",slug:"/Configuration/retryFailedTests",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/retryFailedTests",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/docs/Configuration/retryFailedTests.md",tags:[],version:"current",frontMatter:{id:"retryFailedTests",title:"Retry Failed Tests",sidebar_label:"Retry Failed Tests"},sidebar:"docs",previous:{title:"GUI Built-in checks",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/GUI_Elements_Features"},next:{title:"Jira/Xray Integration",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/XrayIntegration"}},l={},u=[{value:"Objective",id:"objective",level:2},{value:"Implementaion",id:"implementaion",level:2},{value:"through the configuration manager",id:"through-the-configuration-manager",level:3},{value:"through properties files",id:"through-properties-files",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"objective"},"Objective"),(0,i.kt)("p",null,"If a test method fails it will be re-executed for up to the desired number of times or until the test passes."),(0,i.kt)("br",null),(0,i.kt)("b",null,"NOTE")," : although you can configure the number of retries, it is recommended that the max number of retries is kept at 5.",(0,i.kt)("h2",{id:"implementaion"},"Implementaion"),(0,i.kt)("p",null,"you can enable this feature one of two ways :"),(0,i.kt)("h3",{id:"through-the-configuration-manager"},"through the configuration manager"),(0,i.kt)("p",null,"by openeing the flags tab on the ",(0,i.kt)("a",{parentName:"p",href:"https://mohabmohie.github.io/SHAFT_ENGINE/"},"Configuration Manager")," you can enable the option ",(0,i.kt)("b",null,"Automatically Retry Failed Tests")," then save the propirity file and replace the existing one in the poject folder."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configurationMnagerRetry",src:r(3330).Z,width:"1306",height:"239"})),(0,i.kt)("h3",{id:"through-properties-files"},"through properties files"),(0,i.kt)("p",null,"by openning the PlatformFlags.properties file in your project you can edit the property ",(0,i.kt)("b",null,"retryMaximumNumberOfAttempts")," with the maximun number of retries you would like."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"properityFileRetry1",src:r(5455).Z,width:"281",height:"345"}),"\n",(0,i.kt)("img",{alt:"properityFileRetry2",src:r(8448).Z,width:"966",height:"678"})))}p.isMDXComponent=!0},3330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/retryFailedTests1-b536e2aa85b2c228d6e44201a2e9ec2e.PNG"},5455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/retryFailedTests2-b2835694147407da65afdf11fab27382.PNG"},8448:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/retryFailedTests3-a1f7b3a4512fece696bf09be56f75739.PNG"}}]);