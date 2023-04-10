"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[9289],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),c=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,h=d["".concat(r,".").concat(p)]||d[p]||m[p]||o;return a?i.createElement(h,s(s({ref:t},u),{},{components:a})):i.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(4137));const o={id:"Objects",title:"Object",sidebar_labe:"Object"},s=void 0,l={unversionedId:"Keywords/Validations/Objects",id:"Keywords/Validations/Objects",title:"Object",description:"We can make many assertions and verifications on objects by using the Class NativeValidationsBuilder through using the following methods:",source:"@site/docs/Keywords/Validations/Objects.md",sourceDirName:"Keywords/Validations",slug:"/Keywords/Validations/Objects",permalink:"/docs/Keywords/Validations/Objects",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Keywords/Validations/Objects.md",tags:[],version:"current",frontMatter:{id:"Objects",title:"Object",sidebar_labe:"Object"},sidebar:"docs",previous:{title:"File",permalink:"/docs/Keywords/Validations/Files"},next:{title:"Number",permalink:"/docs/Keywords/Validations/Nums"}},r={},c=[{value:"We can make many assertions and verifications on objects by using the <em>Class NativeValidationsBuilder</em> through using the following methods:",id:"we-can-make-many-assertions-and-verifications-on-objects-by-using-the-class-nativevalidationsbuilder-through-using-the-following-methods",level:4},{value:"isEqualTo():",id:"isequalto",level:3},{value:"equals():",id:"equals",level:3},{value:"doesNotEqual():",id:"doesnotequal",level:3},{value:"contains():",id:"contains",level:3},{value:"doesNotContain():",id:"doesnotcontain",level:3},{value:"matchesRegex():",id:"matchesregex",level:3},{value:"doesNotMatchRegex():",id:"doesnotmatchregex",level:3},{value:"equalsIgnoringCaseSensitivity():",id:"equalsignoringcasesensitivity",level:3},{value:"doesNotEqualIgnoringCaseSensitivity():",id:"doesnotequalignoringcasesensitivity",level:3},{value:"isNull():",id:"isnull",level:3},{value:"isNotNull():",id:"isnotnull",level:3},{value:"isTrue():",id:"istrue",level:3},{value:"13. isFalse():",id:"13-isfalse",level:6}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"we-can-make-many-assertions-and-verifications-on-objects-by-using-the-class-nativevalidationsbuilder-through-using-the-following-methods"},"We can make many assertions and verifications on objects by using the ",(0,n.kt)("em",{parentName:"h4"},"Class NativeValidationsBuilder")," through using the following methods:"),(0,n.kt)("h3",{id:"isequalto"},"isEqualTo():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is equal to the expected value."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"equals"},"equals():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This method overrides the default object method equals and is the same as calling isEqualTo(expectedValue).perform();"),(0,n.kt)("li",{parentName:"ul"},"So we use this method to check that the actual object is equal to the expected value."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a boolean value true if passed and throws AssertionError if failed (return value can be safely ignored).")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).equals((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).equals((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"doesnotequal"},"doesNotEqual():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is not equal to the expected value."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotEqual((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotEqual((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"contains"},"contains():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object contains the expected value."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).contains((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).contains((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"doesnotcontain"},"doesNotContain():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object does not contain the expected value."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotContain((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotContain((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"matchesregex"},"matchesRegex():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object matches the expected regular expression."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected regular expression for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).matchesRegex((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).matchesRegex((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"doesnotmatchregex"},"doesNotMatchRegex():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object does not match the expected regular expression."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected regular expression for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotMatchRegex((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotMatchRegex((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"equalsignoringcasesensitivity"},"equalsIgnoringCaseSensitivity():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is equal to the expected value (ignoring case sensitivity)."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).equalsIgnoringCaseSensitivity((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).equalsIgnoringCaseSensitivity((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"doesnotequalignoringcasesensitivity"},"doesNotEqualIgnoringCaseSensitivity():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is not equal to the expected value (ignoring case sensitivity)."),(0,n.kt)("li",{parentName:"ul"},"Needed parameters: expectedValue - the test data / expected value for the object under test."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).doesNotEqualIgnoringCaseSensitivity((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).doesNotEqualIgnoringCaseSensitivity((Object) expectedValue)).perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"isnull"},"isNull():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is null."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isNull().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isNull().perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"isnotnull"},"isNotNull():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is not null."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isNotNull().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isNotNull().perform();\n    }\n}\n")),(0,n.kt)("h3",{id:"istrue"},"isTrue():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is true."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isTrue().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isTrue().perform();\n    }\n}\n")),(0,n.kt)("h6",{id:"13-isfalse"},"13. isFalse():"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use this method to check that the actual object is false."),(0,n.kt)("li",{parentName:"ul"},"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isFalse().perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isFalse().perform();\n    }\n}\n")))}d.isMDXComponent=!0}}]);