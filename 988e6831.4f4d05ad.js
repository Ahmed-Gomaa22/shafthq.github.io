(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||a;return r?i.a.createElement(d,s(s({ref:t},u),{},{components:r})):i.a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},175:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/retryFailedTests1-b536e2aa85b2c228d6e44201a2e9ec2e.PNG"},176:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/retryFailedTests2-b2835694147407da65afdf11fab27382.PNG"},177:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/retryFailedTests3-a1f7b3a4512fece696bf09be56f75739.PNG"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),i=r(6),a=(r(0),r(104)),o={id:"retryFailedTests",title:"Retry Failed Tests",sidebar_label:"Retry Failed Tests"},s={unversionedId:"features/retryFailedTests",id:"features/retryFailedTests",isDocsHomePage:!1,title:"Retry Failed Tests",description:"Objective",source:"@site/docs/features/retryFailedTests.md",permalink:"/SHAFT_Engine_Docusaurus/docs/features/retryFailedTests",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/features/retryFailedTests.md",sidebar_label:"Retry Failed Tests",sidebar:"someSidebar",previous:{title:"ForceFail Validations",permalink:"/SHAFT_Engine_Docusaurus/docs/Validations/ForceFail"},next:{title:"Browser Related Features",permalink:"/SHAFT_Engine_Docusaurus/docs/features/BrowserRelatedFeatures"}},c=[{value:"Objective",id:"objective",children:[]},{value:"Implementaion",id:"implementaion",children:[{value:"through the configuration manager",id:"through-the-configuration-manager",children:[]},{value:"through properties files",id:"through-properties-files",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"objective"},"Objective"),Object(a.b)("p",null,"If a test method fails it will be re-executed for up to the desired number of times or until the test passes."),Object(a.b)("br",null),Object(a.b)("b",null,"NOTE")," : although you can configure the number of retries, it is recommended that the max number of retries is kept at 5.",Object(a.b)("h2",{id:"implementaion"},"Implementaion"),Object(a.b)("p",null,"you can enable this feature one of two ways :"),Object(a.b)("h3",{id:"through-the-configuration-manager"},"through the configuration manager"),Object(a.b)("p",null,"by openeing the flags tab on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://mohabmohie.github.io/SHAFT_ENGINE/"}),"Configuration Manager")," you can enable the option ",Object(a.b)("b",null,"Automatically Retry Failed Tests")," then save the propirity file and replace the existing one in the poject folder."),Object(a.b)("p",null,Object(a.b)("img",{alt:"configurationMnagerRetry",src:r(175).default})),Object(a.b)("h3",{id:"through-properties-files"},"through properties files"),Object(a.b)("p",null,"by openning the PlatformFlags.properties file in your project you can edit the property ",Object(a.b)("b",null,"retryMaximumNumberOfAttempts")," with the maximun number of retries you would like."),Object(a.b)("p",null,Object(a.b)("img",{alt:"properityFileRetry1",src:r(176).default}),"\n",Object(a.b)("img",{alt:"properityFileRetry2",src:r(177).default})))}l.isMDXComponent=!0}}]);