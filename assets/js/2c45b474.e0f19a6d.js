"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[4634],{4137:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>g});var a=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function p(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(s),m=r,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return s?a.createElement(g,o(o({ref:t},u),{},{components:s})):a.createElement(g,o({ref:t},u))}));function g(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,o=new Array(n);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<n;i++)o[i]=s[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},9912:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var a=s(7462),r=(s(7294),s(4137));const n={id:"Response_Getters",title:"Response Getters",sidebar_label:"Response Getters"},o=void 0,p={unversionedId:"Keywords/API/Response_Getters",id:"Keywords/API/Response_Getters",title:"Response Getters",description:"SHAFT API Getters",source:"@site/docs/Keywords/API/Response_Getters.md",sourceDirName:"Keywords/API",slug:"/Keywords/API/Response_Getters",permalink:"/docs/Keywords/API/Response_Getters",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Keywords/API/Response_Getters.md",tags:[],version:"current",frontMatter:{id:"Response_Getters",title:"Response Getters",sidebar_label:"Response Getters"},sidebar:"docs",previous:{title:"Request Builder",permalink:"/docs/Keywords/API/Request_Builder"},next:{title:"Response Validations",permalink:"/docs/Keywords/API/Response_Validations"}},l={},i=[{value:"SHAFT API Getters",id:"shaft-api-getters",level:2},{value:"Get Response Body",id:"get-response-body",level:3},{value:"Usage",id:"usage",level:4},{value:"Get Response Status Code",id:"get-response-status-code",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Get Response Time",id:"get-response-time",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Get Response JSON Value",id:"get-response-json-value",level:3},{value:"Usage",id:"usage-3",level:4},{value:"Get Response JSON Value As List",id:"get-response-json-value-as-list",level:3},{value:"Usage",id:"usage-4",level:4},{value:"Get Response XML Value",id:"get-response-xml-value",level:3},{value:"Get Response XML Value As List",id:"get-response-xml-value-as-list",level:3}],u={toc:i};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"shaft-api-getters"},"SHAFT API Getters"),(0,r.kt)("p",null,"After getting back the ",(0,r.kt)("a",{parentName:"p",href:"https://www.javadoc.io/doc/io.rest-assured/rest-assured/3.0.1/io/restassured/response/Response.html"},"REST-Assured response")," object, we can use the getters to continue working with it when needed."),(0,r.kt)("h3",{id:"get-response-body"},"Get Response Body"),(0,r.kt)("p",null,"Extracts the response body and returns it as a plain string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String body = api.getResponseBody();\n")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nString body = api.getResponseBody();\nSHAFT.Validations.assertThat().object(body).contains("Beverly Hills").perform();\n')),(0,r.kt)("h3",{id:"get-response-status-code"},"Get Response Status Code"),(0,r.kt)("p",null,"Extracts the response status code as integer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int statusCode = api.getResponseStatusCode();\n")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nint statusCode = api.getResponseStatusCode();\nSHAFT.Validations.assertThat().number(statusCode).isEqualTo(200).perform();\n')),(0,r.kt)("h3",{id:"get-response-time"},"Get Response Time"),(0,r.kt)("p",null,"Extracts the response time as long"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long responseTime = api.getResponseTime();\n")),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nlong responseTime = api.getResponseTime();\nSHAFT.Validations.verifyThat().number(responseTime).isGreaterThanOrEquals(1.1).perform();\nSHAFT.Validations.verifyThat().number(responseTime).isLessThanOrEquals(10000).perform();\n')),(0,r.kt)("h3",{id:"get-response-json-value"},"Get Response JSON Value"),(0,r.kt)("p",null,"Extracts a string value from the response body by parsing the target ",(0,r.kt)("strong",{parentName:"p"},"JSONPath.")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("em",{parentName:"em"}," To extract the desired value, please refer to these urls for examples: ",(0,r.kt)("br",null),"\nYou can learn the JSONPath Syntax from ",(0,r.kt)("a",{parentName:"em",href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"},"here")," ",(0,r.kt)("br",null),"\nAnd test your JSONPath ",(0,r.kt)("a",{parentName:"em",href:"http://jsonpath.com/"},"here")," "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String value = api.getResponseJSONValue("jsonPath");\n')),(0,r.kt)("h4",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").perform();\nString value = api.getResponseJSONValue("$[?(@.name==\'Ervin Howell\')].address.street");\nSHAFT.Validations.assertThat().object(value).isEqualTo("Victor Plains").perform();\n')),(0,r.kt)("h3",{id:"get-response-json-value-as-list"},"Get Response JSON Value As List"),(0,r.kt)("p",null,"Extracts the response as list by parsing the target ",(0,r.kt)("strong",{parentName:"p"},"JSONPath.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String value = api.getResponseJSONValueAsList("jsonPath");\n')),(0,r.kt)("h4",{id:"usage-4"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/todos").perform();\nList<Object> value = api.getResponseJSONValueAsList("$[?(@.completed==true)].completed");\nfor (Object completed : completedList) {\n    SHAFT.Validations.verifyThat().object(completed.toString()).isEqualTo("true").perform();\n}\n')),(0,r.kt)("h3",{id:"get-response-xml-value"},"Get Response XML Value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String value = api.getResponseXMLValue("xmlPath");\n')),(0,r.kt)("h3",{id:"get-response-xml-value-as-list"},"Get Response XML Value As List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Object> value = api.getResponseXMLValueAsList("xmlPath");\n')))}d.isMDXComponent=!0}}]);