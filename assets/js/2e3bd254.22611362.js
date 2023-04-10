"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[3736],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,g=u["".concat(s,".").concat(p)]||u[p]||w[p]||n;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const n={id:"Browser_Actions",title:"Browser Actions",sidebar_label:"Browser Actions"},i=void 0,l={unversionedId:"Keywords/GUI/Browser_Actions",id:"Keywords/GUI/Browser_Actions",title:"Browser Actions",description:"Web Driver",source:"@site/docs/Keywords/GUI/Browser_Actions.md",sourceDirName:"Keywords/GUI",slug:"/Keywords/GUI/Browser_Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Browser_Actions",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Keywords/GUI/Browser_Actions.md",tags:[],version:"current",frontMatter:{id:"Browser_Actions",title:"Browser Actions",sidebar_label:"Browser Actions"},sidebar:"docs",previous:{title:"Properties",permalink:"/SHAFT_Engine_Docusaurus/docs/Properties/"},next:{title:"Element Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Element_Actions"}},s={},d=[{value:"Web Driver",id:"web-driver",level:2},{value:"Browser Actions",id:"browser-actions",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Navigate To URL",id:"navigate-to-url",level:3},{value:"Navigate Back",id:"navigate-back",level:3},{value:"Navigate Forward",id:"navigate-forward",level:3},{value:"Refresh page",id:"refresh-page",level:3},{value:"Get Current Url",id:"get-current-url",level:3},{value:"Browser Windows&#39; Manipulation",id:"browser-windows-manipulation",level:2},{value:"Full Screen Window",id:"full-screen-window",level:3},{value:"Close Current Window",id:"close-current-window",level:3},{value:"Get Window Title",id:"get-window-title",level:3},{value:"Maximize Window",id:"maximize-window",level:3},{value:"Resize Window",id:"resize-window",level:3},{value:"Get Window Size",id:"get-window-size",level:3},{value:"Switching Windows or tabs",id:"switching-windows-or-tabs",level:3},{value:"Get Page Source\u200b",id:"get-page-source",level:3},{value:"Cookies",id:"cookies",level:2},{value:"Add Cookie",id:"add-cookie",level:3},{value:"Get Cookie",id:"get-cookie",level:3},{value:"Get All Cookies",id:"get-all-cookies",level:3},{value:"Get Cookie Domain",id:"get-cookie-domain",level:3},{value:"Get Cookie Value",id:"get-cookie-value",level:3},{value:"Get Cookie Path",id:"get-cookie-path",level:3},{value:"Delete Cookie",id:"delete-cookie",level:3},{value:"Delete All Cookies",id:"delete-all-cookies",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"web-driver"},"Web Driver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In order to interact with web pages you will need an instance of ",(0,a.kt)("a",{parentName:"li",href:"https://www.selenium.dev/documentation/en/webdriver/"},"WebDriver"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver = new SHAFT.GUI.WebDriver();\n")),(0,a.kt)("p",null,"Upon Executing this line SHAFT ENGINE will detect your desired configuration from the ",(0,a.kt)("a",{parentName:"p",href:"#"},"properties files"),", if you have not set those don't worry, SHAFT has a set of\n",(0,a.kt)("a",{parentName:"p",href:"#"},"default configurations")," that will be used and you can always ",(0,a.kt)("a",{parentName:"p",href:"#"},"edit configurations")," .",(0,a.kt)("br",null),"\nExecution environment is defaulted to Local i.e tests will be run on your own machine, so SHAFT will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bonigarcia/webdrivermanager"},"webdrivermanager")," to auto-detect your operating system and the version of the default browser , searches for the appropriate WebDriver version on your machine and download it if it can't be found,and finally run it which is openning a new browser window."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in order to close all running driver instances use")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.quit();\n")),(0,a.kt)("h2",{id:"browser-actions"},"Browser Actions"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://mohabmohie.github.io/SHAFT_ENGINE/apidocs/com/shaft/gui/browser/BrowserActions.html"},"BrowserActions")," class handles browser actions like navigation and window controls"),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("h3",{id:"navigate-to-url"},"Navigate To URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'driver.browser().navigateToURL("https://www.google.com");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigates to the specified URL if it's different from the current URL, else refreshes the current page."),(0,a.kt)("li",{parentName:"ul"},"To confirm successful navigation to target URL you can add a string parameter containing text that should exist in the URL after navigation like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'driver.browser().navigateToURL("https://www.google.com/","google");\n')),(0,a.kt)("h3",{id:"navigate-back"},"Navigate Back"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().navigateBack();\n")),(0,a.kt)("p",null,"Navigates one step back from the browsers history"),(0,a.kt)("h3",{id:"navigate-forward"},"Navigate Forward"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().navigateForward();\n")),(0,a.kt)("p",null,"Navigates one step forward from the browsers history"),(0,a.kt)("h3",{id:"refresh-page"},"Refresh page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().refreshCurrentPage();\n")),(0,a.kt)("p",null,"Refresh the current page."),(0,a.kt)("h3",{id:"get-current-url"},"Get Current Url"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().getCurrentURL();\n")),(0,a.kt)("p",null,"Returns the URL of the current page as a string"),(0,a.kt)("h2",{id:"browser-windows-manipulation"},"Browser Windows' Manipulation"),(0,a.kt)("h3",{id:"full-screen-window"},"Full Screen Window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().fullScreenWindow();\n")),(0,a.kt)("p",null,"Resizes the current window to become full screen"),(0,a.kt)("h3",{id:"close-current-window"},"Close Current Window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().closeCurrentWindow\u200b();\n")),(0,a.kt)("p",null,"Closes the current browser window"),(0,a.kt)("h3",{id:"get-window-title"},"Get Window Title"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().getCurrentWindowTitle();\n")),(0,a.kt)("p",null,"Returnss the current window title as a string"),(0,a.kt)("h3",{id:"maximize-window"},"Maximize Window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().maximizeWindow();\n")),(0,a.kt)("p",null,"Maximizes current window size based on screen size minus 5%"),(0,a.kt)("h3",{id:"resize-window"},"Resize Window"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int width = 1440; // specify wanted window width\nint height =900; // specify wanted window height\ndriver.browser().setWindowSize\u200b(width,height);\n")),(0,a.kt)("p",null,"Resizes the current window size based on the provided width and height"),(0,a.kt)("h3",{id:"get-window-size"},"Get Window Size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"String windowSize = driver.browser().getWindowSize();\n")),(0,a.kt)("p",null,"Returnss the current window size as a string"),(0,a.kt)("h3",{id:"switching-windows-or-tabs"},"Switching Windows or tabs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"String windowHandle = driver.browser().getWindowHandle\u200b(); //store the current window handle\n/*\nsome code that opens a new window\n*/\n\ndriver.browser().switchToWindow(windowHandle); // switch back to the original window\n")),(0,a.kt)("p",null,"The method getWindowHandle\u200b() returns a String containing the window handle, which is a unique identifier to that window and is used to move between tabs and windows"),(0,a.kt)("h3",{id:"get-page-source"},"Get Page Source\u200b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"String pageSource = driver.browser().getPageSource();\n")),(0,a.kt)("p",null,"Gets the current page source and returns it as a string"),(0,a.kt)("h2",{id:"cookies"},"Cookies"),(0,a.kt)("h3",{id:"add-cookie"},"Add Cookie"),(0,a.kt)("p",null,"Adds a cookie to the current browsing context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'driver.browser().addCookie("cookieName", "cookieValue");\n')),(0,a.kt)("h3",{id:"get-cookie"},"Get Cookie"),(0,a.kt)("p",null,"Gets a cookie with a given name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Cookie cookie = driver.browser().getCookie("cookieName");\n')),(0,a.kt)("h3",{id:"get-all-cookies"},"Get All Cookies"),(0,a.kt)("p",null,"Gets all cookies for the current browsing context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Set cookies = driver.browser().getAllCookies();\n")),(0,a.kt)("h3",{id:"get-cookie-domain"},"Get Cookie Domain"),(0,a.kt)("p",null,"Gets the cookie domain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String cookieDomain = driver.browser().getCookieDomain("cookieName");\n')),(0,a.kt)("h3",{id:"get-cookie-value"},"Get Cookie Value"),(0,a.kt)("p",null,"Gets the cookie value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String cookieValue = driver.browser().getCookieValue("cookieName");\n')),(0,a.kt)("h3",{id:"get-cookie-path"},"Get Cookie Path"),(0,a.kt)("p",null,"Gets the cookie path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String cookiePath = driver.browser().getCookiePath("cookieName");\n')),(0,a.kt)("h3",{id:"delete-cookie"},"Delete Cookie"),(0,a.kt)("p",null,"Deletes the cookie data matching with the provided cookie name for the current browsing context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'driver.browser().deleteCookie("cookieName");\n')),(0,a.kt)("h3",{id:"delete-all-cookies"},"Delete All Cookies"),(0,a.kt)("p",null,"Deletes all the cookies of the current browsing context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"driver.browser().deleteAllCookies();\n")),(0,a.kt)("p",null,"As you skim through the console output you will notice the awesome reporting SHAFT provides for each performed action, and it gets even better, please see the ",(0,a.kt)("a",{parentName:"p",href:"#"},"reporting")," section for more on that."))}u.isMDXComponent=!0}}]);