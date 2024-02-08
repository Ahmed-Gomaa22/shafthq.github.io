"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[717],{6055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var s=t(5893),o=t(1151);const a={id:"PropertyTypes",title:"Property Types",sidebar_label:"Types"},i=void 0,n={id:"Properties/PropertyTypes",title:"Property Types",description:"Priority Heirarchy",source:"@site/docs/Properties/PropertyTypes.md",sourceDirName:"Properties",slug:"/Properties/PropertyTypes",permalink:"/docs/Properties/PropertyTypes",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Properties/PropertyTypes.md",tags:[],version:"current",frontMatter:{id:"PropertyTypes",title:"Property Types",sidebar_label:"Types"},sidebar:"docs",previous:{title:"First Steps",permalink:"/docs/Getting_Started/first_steps"},next:{title:"List",permalink:"/docs/Properties/PropertiesList"}},p={},l=[{value:"Priority Heirarchy",id:"priority-heirarchy",level:3},{value:"File-based",id:"file-based",level:3},{value:"Code-based",id:"code-based",level:3},{value:"CLI-based",id:"cli-based",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"priority-heirarchy",children:"Priority Heirarchy"}),"\n",(0,s.jsx)(r.p,{children:"Since there are many ways to configure SHAFT properties you need to know how the priorities work.\nSimply put, the values to the left override the values to the right."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"#code-based",children:"Code-based"})," > ",(0,s.jsx)(r.a,{href:"#cli-based",children:"CLI-based"})," > ",(0,s.jsx)(r.a,{href:"#file-based",children:"File-based"})," > ",(0,s.jsx)(r.a,{href:"PropertiesList",children:"Default Values"})]}),"\n",(0,s.jsx)(r.h3,{id:"file-based",children:"File-based"}),"\n",(0,s.jsxs)(r.p,{children:["The traditional way of configuring SHAFT properties, using this approach you can simply create your own ",(0,s.jsx)(r.code,{children:"custom.properties"})," file."]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"You should use this approach if you have some properties that are global and not expected to change during execution, or properties that you wish to later override from your CLI execution (CI/CD server)."})}),"\n",(0,s.jsx)(r.p,{children:"Here's what it can look like:"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Example"}),": Setting up properties for basic web browser automation"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",metastring:'showLineNumbers title="src/main/resources/properties/custom.properties"',children:"baseURL=http://www.mytestdomain.com\nexecutionAddress=local\ntargetOperatingSystem=WINDOWS\ntargetBrowserName=firefox\nheadlessExecution=true\ncreateAnimatedGif=true\nvideoParams_recordVideo=true\n"})}),"\n",(0,s.jsxs)(r.p,{children:["You can add all your custom properties in one or more files as you see fit. For more info you can refer to our ",(0,s.jsx)(r.a,{href:"PropertiesList",children:"full list of supported properties"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"code-based",children:"Code-based"}),"\n",(0,s.jsx)(r.p,{children:"You can read/write any property programmatically to provide more flexibility and control during runtime."}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["You should use this approach if you have some properties that are specific for a certain test class/method or to a specific part of your test. For global properties it is recommended to use the ",(0,s.jsx)(r.a,{href:"#file-based",children:"File-based approach"}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Example"}),": Setting up properties for basic mobile automation"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",metastring:'showLineNumbers title="src/test/java/testPackage/TestClass.java"',children:'import com.shaft.driver.SHAFT;\nimport org.testng.annotations.BeforeMethod;\nimport org.openqa.selenium.Platform;\nimport io.appium.java_client.remote.AutomationName;\n\nprivate SHAFT.GUI.WebDriver driver;\n\n@BeforeMethod\npublic void setup(){\n\tSHAFT.Properties.platform.set().targetPlatform(Platform.ANDROID.name());\n\tSHAFT.Properties.mobile.set().automationName(AutomationName.ANDROID_UIAUTOMATOR2);\n\tSHAFT.Properties.platform.set().executionAddress("localhost:4723");\n\tSHAFT.Properties.mobile.set().app("src/test/resources/testDataFiles/apps/ApiDemos-debug.apk");\n\tdriver = new SHAFT.GUI.WebDriver();\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Example"}),": Reading values used for BrowserStack integration"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",metastring:'showLineNumbers title="src/test/java/testPackage/TestClass.java"',children:"import com.shaft.driver.SHAFT;\nimport org.testng.annotations.BeforeClass;\n\n@BeforeClass\npublic void beforeClass(){\n\tvar username = SHAFT.Properties.browserStack.username();\n\tvar accessKey = SHAFT.Properties.browserStack.accessKey();\n\tvar platformVersion = SHAFT.Properties.browserStack.platformVersion();\n\tvar deviceName = SHAFT.Properties.browserStack.deviceName();\n\tvar appUrl = SHAFT.Properties.browserStack.appUrl();\n\tvar customID = SHAFT.Properties.browserStack.customID();\n\tvar appName = SHAFT.Properties.browserStack.appName();\n}\n"})}),"\n",(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.p,{children:["Note that per the above examples we prefer to use ",(0,s.jsx)(r.a,{href:"https://appium.github.io/java-client/io/appium/java_client/remote/AutomationName.html",children:"AutomationName"})," and ",(0,s.jsx)(r.a,{href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/Platform.html",children:"Platform"})," to ensure setting the relevant values correctly. You can also use ",(0,s.jsx)(r.a,{href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/remote/Browser.html",children:"Browser"})," to set the ",(0,s.jsx)(r.code,{children:"targetBrowserName"})," property programattically."]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",metastring:'showLineNumbers title="src/test/java/testPackage/TestClass.java"',children:"import org.openqa.selenium.remote.Browser;\n\nSHAFT.Properties.web.set().targetBrowserName(Browser.FIREFOX.browserName());\n"})})]}),"\n",(0,s.jsx)(r.h3,{id:"cli-based",children:"CLI-based"}),"\n",(0,s.jsx)(r.p,{children:"You can set some properties via the CLI command that you use to execute your tests."}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["You should use this approach if you want to override some specifc properties for the current test run from CLI. This is usually relevant for unattended CI/CD pipeline execution. You would usually need to use the ",(0,s.jsx)(r.a,{href:"#file-based",children:"File-based approach"})," to set these properties first, and then override them via CLI."]})}),"\n",(0,s.jsx)(r.p,{children:"Here's a sample command that you can execute from your terminal window to parameterize your test command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:'mvn -e test "-DretryMaximumNumberOfAttempts=2" "-DexecutionAddress=localhost:4444" "-DtargetOperatingSystem=LINUX" "-DtargetBrowserName=firefox" "-DheadlessExecution=true" "-DgenerateAllureReportArchive=true" "-Dtest=${GLOBAL_TESTING_SCOPE}"\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Note that you can refer to ",(0,s.jsx)(r.a,{href:"https://maven.apache.org/surefire/maven-surefire-plugin/examples/single-test.html",children:"the official Maven Surefire guide"})," to learn how to run certain test classes or packages."]})})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>n,a:()=>i});var s=t(7294);const o={},a=s.createContext(o);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);