(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(h,s(s({ref:t},c),{},{components:r})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(104)),i={id:"Features",title:"Features",sidebar_label:"Features"},s={unversionedId:"Features",id:"Features",isDocsHomePage:!0,title:"Features",description:"What ?",source:"@site/docs/Features.md",permalink:"/SHAFT_Engine_Docusaurus/docs/",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/Features.md",sidebar_label:"Features",sidebar:"someSidebar",next:{title:"Prerequisites",permalink:"/SHAFT_Engine_Docusaurus/docs/Prerequisites"}},l=[{value:"What ?",id:"what-",children:[]},{value:"How ?",id:"how-",children:[]},{value:"Why ?",id:"why-",children:[]},{value:"Sample test case:",id:"sample-test-case",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-"},"What ?"),Object(o.b)("p",null,"SHAFT ENGINE is an open-source Test Automation Engine that allows you to perform multiple actions to test a web application's functionality, behaviour and appearance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Interact with a web application like a normal user would through the following browsers: ",Object(o.b)("br",null),Object(o.b)("em",{parentName:"li"},"Chrome, Safari, Firefox, Edge & Internet Explorer")),Object(o.b)("li",{parentName:"ul"},"Verify the application response, through a wide variety of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/docs/Overview"}),"verification methods"),"."),Object(o.b)("li",{parentName:"ul"},"Document the process and produce highly-detailed reports.")),Object(o.b)("h2",{id:"how-"},"How ?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SHAFT comes prepacked with various industry-standard tools and frameworks that would otherwise need to be manually installed,configured and maintained, see ","[SHAFT components]",", along with our own components that were developed and maintained over the years since shaft came to light."),Object(o.b)("li",{parentName:"ul"},"All of those are abstracted away and preconfigured to provide the smoothest user experience, once you integrate SHAFT to your project it automatically detects your environment(ie: Operating System,browser version, etc...), sets up what is necessary,sets some defaults for you, and you are all set."),Object(o.b)("li",{parentName:"ul"},"later on you might need to change those defaults, you can always ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://shafthq.github.io/SHAFT_ENGINE/"}),"edit configurations"),".")),Object(o.b)("h2",{id:"why-"},"Why ?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Simulate real life user and browser interactions with the application. "),Object(o.b)("li",{parentName:"ul"},"Portability of tests across platforms and browsers without the need to modify the script."),Object(o.b)("li",{parentName:"ul"},'Consistent test results, thanks to our error handling techniques ignoring environmental test blockers enabling the "write once run many" principle of test automation.'),Object(o.b)("li",{parentName:"ul"},"Easily customizable reports that gives comprehensive insight into the testing process, and are readable by people from various backgrounds."),Object(o.b)("li",{parentName:"ul"},"Saves the configuration and conflict-resolution headache.")),Object(o.b)("h2",{id:"sample-test-case"},"Sample test case:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Shaft is an easy engine to use, just with these following lines of code you can interacte easily with web browsers, APIs, CLIs, Database. For example, on GUI level we can follow these basic lines of code: ")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class SampleTest {\n    private WebDriver driver = DriverFactory.getDriver();\n\n    @Test\n    public void navigateToGoogleHomeAndAssertPageTitle() {\n    BrowserActions.navigateToURL(driver, "https://www.google.com/ncr", "https://www.google.com");\n    Validations.assertThat().browser(driver.get()).attribute("title").isEqualTo("Google").perform();\n    }\n}\n')))}u.isMDXComponent=!0}}]);