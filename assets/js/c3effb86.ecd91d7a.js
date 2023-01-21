"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[5363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,m=g["".concat(p,".").concat(c)]||g[c]||h[c]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={id:"XrayIntegration",title:"Jira/Xray Integration",sidebar_label:"Jira/Xray Integration"},i=void 0,s={unversionedId:"Configuration/XrayIntegration",id:"Configuration/XrayIntegration",title:"Jira/Xray Integration",description:"Integration:",source:"@site/docs/Configuration/XrayRelatedFeatures.md",sourceDirName:"Configuration",slug:"/Configuration/XrayIntegration",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/XrayIntegration",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/docs/Configuration/XrayRelatedFeatures.md",tags:[],version:"current",frontMatter:{id:"XrayIntegration",title:"Jira/Xray Integration",sidebar_label:"Jira/Xray Integration"},sidebar:"docs",previous:{title:"Retry Failed Tests",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/retryFailedTests"},next:{title:"BrowserStack Integration",permalink:"/SHAFT_Engine_Docusaurus/docs/Configuration/BrowserStack"}},p={},u=[{value:"Integration:",id:"integration",level:3},{value:"Your Jira URL:",id:"your-jira-url",level:3},{value:"Project Key:",id:"project-key",level:3},{value:"Authorized username:",id:"authorized-username",level:3},{value:"Password/APIToken:",id:"passwordapitoken",level:3},{value:"Report the testcases execution results:",id:"report-the-testcases-execution-results",level:3},{value:"Results report path:",id:"results-report-path",level:3},{value:"Execution suite name:",id:"execution-suite-name",level:3},{value:"Execution description:",id:"execution-description",level:3},{value:"Reporting Bugs:",id:"reporting-bugs",level:3},{value:"Assignee:",id:"assignee",level:3},{value:"Allure.link.tms.pattern:",id:"allurelinktmspattern",level:3},{value:"Skip Tests With Linked Issues:",id:"skip-tests-with-linked-issues",level:3}],l={toc:u};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"integration"},"Integration:"),(0,r.kt)("p",null,"This feature allows us to report our test execution results and bugs. By default, SHAFT engine recommend keeping this feature disabled while creating/maintaining the automation scripts, to avoid reporting misleading results. Please note that if the integration property is disabled, the rest of XRay options will be disabled accordingly, regardless if they are enabled or disabled.\nPlease note that the execution reporting feature is not linked to the bug reporting, So you can disable one of them or enable them both."),(0,r.kt)("p",null,"To enable this integration you can change that default property from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager"},"Through configuration manager:"))),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Integration"))," by checking on the radio button on ",(0,r.kt)("strong",{parentName:"p"},"Enabled")," or ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerIntegration",src:a(9294).Z,width:"952",height:"737"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can change the value of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"jiraInteraction"))," to be ",(0,r.kt)("strong",{parentName:"p"},"ture")," or ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropIntegration",src:a(4534).Z,width:"927",height:"503"})),(0,r.kt)("h3",{id:"your-jira-url"},"Your Jira URL:"),(0,r.kt)("p",null,"Just we have to type our Jira URL. "),(0,r.kt)("p",null,"You can type the URL from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-1"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Your Jira URL"))," by typing your Jira URL and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerJiraURL",src:a(8192).Z,width:"952",height:"727"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-1"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type your Jira URL in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"jiraUrl"))," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropJiraURL",src:a(8482).Z,width:"928",height:"490"})),(0,r.kt)("h3",{id:"project-key"},"Project Key:"),(0,r.kt)("p",null,"Just we have to type our Project Key ",(0,r.kt)("em",{parentName:"p"},"(Project Key is the prefix of any ticket number)"),". "),(0,r.kt)("p",null,"You can type the Project Key from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-2"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Project Key"))," by typing your Project Key Value and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerProjectKey",src:a(4803).Z,width:"962",height:"732"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-2"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type your Project Key Value in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"projectKey"))," "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropProjectKey",src:a(1533).Z,width:"931",height:"495"})),(0,r.kt)("h3",{id:"authorized-username"},"Authorized username:"),(0,r.kt)("p",null,"Just we have to type the username of your Jira/XRay account. "),(0,r.kt)("p",null,"You can type the authorized username from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-3"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Authorized username"))," by typing your JIRA/XRay account username and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerAuthorizedUsername",src:a(19).Z,width:"961",height:"737"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-3"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type your JIRA/XRay account username value in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"authorization"))," before the colon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropAuthorizedUsername",src:a(4628).Z,width:"935",height:"507"})),(0,r.kt)("h3",{id:"passwordapitoken"},"Password/APIToken:"),(0,r.kt)("p",null,"Just we have to type the password of jira account username. "),(0,r.kt)("p",null,"You can type the password from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-4"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Password/APIToken"))," by typing the password or api-token of your JIRA/XRay account and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerPassword/APIToken",src:a(8669).Z,width:"972",height:"747"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-4"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type the password or api-token of your JIRA/XRay account in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"authorization"))," after the colon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropPassword/APIToken",src:a(4628).Z,width:"935",height:"507"})),(0,r.kt)("h3",{id:"report-the-testcases-execution-results"},"Report the testcases execution results:"),(0,r.kt)("p",null,"This feature allows us to report automatically the results of the test execution.  "),(0,r.kt)("p",null,"You can change this default feature from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-5"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Report the testcases execution results"))," by checking on the radio button on ",(0,r.kt)("strong",{parentName:"p"},"Enabled")," or ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerReportTheTestcasesExecutionResults",src:a(5703).Z,width:"968",height:"736"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-5"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can change the value of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"reportTestCasesExecution"))," to be ",(0,r.kt)("strong",{parentName:"p"},"ture")," or ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropIReportTheTestcasesExecutionResults",src:a(5055).Z,width:"926",height:"503"})),(0,r.kt)("h3",{id:"results-report-path"},"Results report path:"),(0,r.kt)("p",null,"This key-value is for determining the execution report results path. It's mandatory if reporting execution feature is enabled. The generated report should be either ",(0,r.kt)("strong",{parentName:"p"},"testng-results.xml")," or ",(0,r.kt)("strong",{parentName:"p"},"cucumber.json"),"."),(0,r.kt)("p",null,"You can change this default feature from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-6"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Results report path"))," you can select from the dropdown menu your configured and generated result reporting path and the other mandatory data then save the file and replace the corresponding config file in your project.\nPlease note that the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Configuration Manager"))," is only providing the default path for both of the reports, but feel free to update the value with your reports' path using the properties file ",(0,r.kt)("em",{parentName:"p"},"(Steps mentioned below)"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerIntegration",src:a(7432).Z,width:"963",height:"728"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-6"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type the path of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"reportPath")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropIntegration",src:a(5988).Z,width:"931",height:"498"})),(0,r.kt)("h3",{id:"execution-suite-name"},"Execution suite name:"),(0,r.kt)("p",null,"This is an optional feature that allows us to give a name for your execution suite. Just we have to type the name that you want. "),(0,r.kt)("p",null,"You can type the execution suite name from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-7"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Execution suite name"))," by typing the execution suite name save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerExecutionSuiteName",src:a(2336).Z,width:"972",height:"622"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-7"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type your test execution name value in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ExecutionName"))," before the colon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropIExecutionSuiteName",src:a(7128).Z,width:"933",height:"503"})),(0,r.kt)("h3",{id:"execution-description"},"Execution description:"),(0,r.kt)("p",null,"This is an optional feature that allows us to give a description for your execution suite. Just we have to type the description that you want. "),(0,r.kt)("p",null,"You can type the execution suite description from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-8"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Execution description"))," by typing the execution suite description and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerExecutionSuiteName",src:a(1320).Z,width:"942",height:"587"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-8"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type your test execution name value in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ExecutionDescription"))," before the colon."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropIExecutionDescription",src:a(1758).Z,width:"930",height:"501"})),(0,r.kt)("h3",{id:"reporting-bugs"},"Reporting Bugs:"),(0,r.kt)("p",null,"This feature allows us to report the detected issues from our execution. By default, SHAFT engine recommend keeping this feature disabled while creating/maintaining the automation scripts to avoid reporting misleading results. That is because enabling this option while tests are under maintenance might spam your jira board. the reporting will be done after each testcase run and bug will be created contains the execution attachments and log."),(0,r.kt)("p",null,"You can change this default feature from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-9"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Reporting Bugs"))," by checking on the radio button on ",(0,r.kt)("strong",{parentName:"p"},"Enabled")," or ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerReportingBugs",src:a(2882).Z,width:"975",height:"627"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-9"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can change the value of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ReportBugs"))," to be ",(0,r.kt)("strong",{parentName:"p"},"ture")," or ",(0,r.kt)("strong",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropReportingBugs",src:a(2528).Z,width:"932",height:"508"})),(0,r.kt)("h3",{id:"assignee"},"Assignee:"),(0,r.kt)("p",null,"This an optional feature that enables you to set the assignee for the created tickets ","[execution or bugs]",". "),(0,r.kt)("p",null,"You can type the assignee account from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-10"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Assignee"))," by typing the Jira user account to whom we want to assign the created tickets and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerAssignee",src:a(9648).Z,width:"967",height:"592"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-10"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type the Jira user account to whom we want to assign the created tickets in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"assignee")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropAssignee",src:a(2054).Z,width:"932",height:"505"})),(0,r.kt)("h3",{id:"allurelinktmspattern"},"Allure.link.tms.pattern:"),(0,r.kt)("p",null,"This feature enables you to autolink your Jira ticket, test case, user story or epic's link to the generated allure report. So we need to use tms annotation ",(0,r.kt)("em",{parentName:"p"},"@tms")," and to determine the pattern that allure must follow in order to build the ticket's link. Simply the pattern is the structure of your jira tickets before the /ProjectKey-TicketNumber.  "),(0,r.kt)("p",null,"You can enable the allure.link.tms.pattern account from 2 locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-configuration-manager-11"},"Through configuration manager:"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," XRay "))," tab on the ",(0,r.kt)("a",{parentName:"p",href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager"},"Configuration Manager"),", you can change the default configuration of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"allure.link.tms.pattern"))," by typing the type the pattern to be able to generate the autolink and the other mandatory data then save the file and replace the corresponding config file in your project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConfigurationManagerAllureLinkTMS",src:a(1858).Z,width:"956",height:"582"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"through-properties-files-11"},"Through properties files"))),(0,r.kt)("p",null,"By opening the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JiraXRay.properties"))," file you can type the pattern to be able to generate the autolink in the key of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"allure.link.tms.pattern")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PropAllureLinkTMS",src:a(3586).Z,width:"932",height:"507"})),(0,r.kt)("h3",{id:"skip-tests-with-linked-issues"},"Skip Tests With Linked Issues:"))}g.isMDXComponent=!0},1858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMAllureLinkTMS-b3d2421fb5a755f14775bfac719b9db1.jpg"},9648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMAssignee-f49f4903e66a837c3f9e7bc106bfc1e9.jpg"},1320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMExecutionDescription-d5a8d39f366debe97358fc547ddd2141.jpg"},2336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMExecutionSuiteName-b452b48dae96fe40b0e4790e9bbf3518.jpg"},9294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMIntegratio-f6f1a3628808bb211782ce7f2ab9b96d.jpg"},8669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMPassword-03e3fd411c5e73b03666c14154c26469.jpg"},4803:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMProjectKey-ffab27ad0e48609cfdfa89af899d0571.jpg"},5703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMReportTCSExecutionResults-95bb2d9ae1c8854857b690fe3b87400c.jpg"},2882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMReportingBugs-427c34214be1b7d3c80e8c22614c0539.jpg"},7432:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMResultReportingPath-d7bd1e06eb2a4cd04952640ee9a5cf3a.jpg"},19:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMUserName-8be34b3c2e6d66a11a98ebe1a65b5607.jpg"},8192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/CMYourJiraURL-14235177982d43d6ad512988d87ec0a1.jpg"},3586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropAllureLinkTMS-d8e0603816ef1ca3d90ebedfd679a1f7.jpg"},2054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropAssignee-315ea3f2a3e77927486b9960bc488a10.jpg"},1758:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropExecutionDesciption-bcf24162097b25ea594d4fcebb515a85.jpg"},7128:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropExecutionSuiteName-1509274e0a76be6c4715744546d0ed26.jpg"},4534:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropIntegration-3a91a1d5bfdace18eac32394887ebe3e.jpg"},1533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropProjectKey-9c679e0963f62202e1e4566622f88d80.jpg"},5055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropReportTCSExecutionResults-01df0377133f581f580bba3029c4f942.jpg"},2528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropReportingBug-7a53d5aed10986a80a9c02b3d91a10f4.jpg"},4628:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropUserNamePassword-5e0859d8d787cccbb5a7df120dbc29d3.jpg"},8482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropYourJiraURL-4782fd58dc8af4ea5f71c35d94a45f00.jpg"},5988:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PropreportPath-1eaba04402df714d166bdaa14c0fec7b.jpg"}}]);