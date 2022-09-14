(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return a?s.a.createElement(m,p(p({ref:t},c),{},{components:a})):s.a.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<r;c++)o[c]=a[c];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(2),s=a(6),r=(a(0),a(105)),o={id:"Response_Getters",title:"Response Getters",sidebar_label:"Response Getters"},p={unversionedId:"API/Response_Getters",id:"API/Response_Getters",isDocsHomePage:!1,title:"Response Getters",description:"SHAFT API Getters",source:"@site/docs/API/Response_Getters.md",permalink:"/SHAFT_Engine_Docusaurus/docs/API/Response_Getters",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/API/Response_Getters.md",sidebar_label:"Response Getters",sidebar:"someSidebar",previous:{title:"Request Builder",permalink:"/SHAFT_Engine_Docusaurus/docs/API/Request_Builder"},next:{title:"Validations Overview",permalink:"/SHAFT_Engine_Docusaurus/docs/Validations/Overview"}},i=[{value:"SHAFT API Getters",id:"shaft-api-getters",children:[{value:"Get Response Body",id:"get-response-body",children:[]},{value:"Get Response Status Code",id:"get-response-status-code",children:[]},{value:"Get Response Time",id:"get-response-time",children:[]},{value:"Get Response JSON Value",id:"get-response-json-value",children:[]},{value:"Get Response JSON Value As List",id:"get-response-json-value-as-list",children:[]},{value:"Get Response XML Value",id:"get-response-xml-value",children:[]},{value:"Get Response XML Value As List",id:"get-response-xml-value-as-list",children:[]}]}],c={rightToc:i};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"shaft-api-getters"},"SHAFT API Getters"),Object(r.b)("p",null,"After getting back the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.javadoc.io/doc/io.rest-assured/rest-assured/3.0.1/io/restassured/response/Response.html"}),"REST-Assured response")," object, we can use the getters to continue working with it when needed."),Object(r.b)("h3",{id:"get-response-body"},"Get Response Body"),Object(r.b)("p",null,"Extracts the response body and returns it as a plain string"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String body = api.getResponseBody();\n")),Object(r.b)("h4",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nString body = api.getResponseBody();\nSHAFT.Validations.assertThat().object(body).contains("Beverly Hills").perform();\n')),Object(r.b)("h3",{id:"get-response-status-code"},"Get Response Status Code"),Object(r.b)("p",null,"Extracts the response status code as integer"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"int statusCode = api.getResponseStatusCode();\n")),Object(r.b)("h4",{id:"usage-1"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nint statusCode = api.getResponseStatusCode();\nSHAFT.Validations.assertThat().number(statusCode).isEqualTo(200).perform();\n')),Object(r.b)("h3",{id:"get-response-time"},"Get Response Time"),Object(r.b)("p",null,"Extracts the response time as long"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"long responseTime = api.getResponseTime();\n")),Object(r.b)("h4",{id:"usage-2"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("http://api.zippopotam.us/");\napi.get("us/90210").perform();\nlong responseTime = api.getResponseTime();\nSHAFT.Validations.verifyThat().number(responseTime).isGreaterThanOrEquals(1.1).perform();\nSHAFT.Validations.verifyThat().number(responseTime).isLessThanOrEquals(10000).perform();\n')),Object(r.b)("h3",{id:"get-response-json-value"},"Get Response JSON Value"),Object(r.b)("p",null,"Extracts a string value from the response body by parsing the target ",Object(r.b)("strong",{parentName:"p"},"JSONPath.")," ",Object(r.b)("br",null),"\n",Object(r.b)("em",{parentName:"p"},Object(r.b)("em",{parentName:"em"}," To extract the desired value, please refer to these urls for examples: ",Object(r.b)("br",null),"\nYou can learn the JSONPath Syntax from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"}),"here")," ",Object(r.b)("br",null),"\nAnd test your JSONPath ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://jsonpath.com/"}),"here")," "))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String value = api.getResponseJSONValue;\n")),Object(r.b)("h4",{id:"usage-3"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/users").perform();\nString value = api.getResponseJSONValue("$[?(@.name==\'Ervin Howell\')].address.street");\nSHAFT.Validations.assertThat().object(value).isEqualTo("Victor Plains").perform();\n')),Object(r.b)("h3",{id:"get-response-json-value-as-list"},"Get Response JSON Value As List"),Object(r.b)("p",null,"Extracts the response as list by parsing the target ",Object(r.b)("strong",{parentName:"p"},"JSONPath.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"String value = api.getResponseJSONValueAsList();\n")),Object(r.b)("h4",{id:"usage-4"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'SHAFT.API api = new SHAFT.API("https://jsonplaceholder.typicode.com");\napi.get("/todos").perform();\nList<Object> value = api.getResponseJSONValueAsList("$[?(@.completed==true)].completed");\nfor (Object completed : completedList) {\n    SHAFT.Validations.verifyThat().object(completed.toString()).isEqualTo("true").perform();\n}\n')),Object(r.b)("h3",{id:"get-response-xml-value"},"Get Response XML Value"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'String value = api.getResponseXMLValue("xmlPath");\n')),Object(r.b)("h3",{id:"get-response-xml-value-as-list"},"Get Response XML Value As List"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'List<Object> value = api.getResponseXMLValueAsList("xmlPath");\n')))}l.isMDXComponent=!0}}]);