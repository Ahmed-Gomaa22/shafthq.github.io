(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[4678],{9114:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var s=n(7294),a=n(5893);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:o.length>0?(0,a.jsx)(a.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var c=n(512),r=n(7325),i=n(3702);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,a.jsx)("div",{className:(0,c.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:c}=e;return(0,a.jsxs)(d,{type:t,className:c,children:[s||n?(0,a.jsx)(u,{title:s,icon:n}):null,(0,a.jsx)(m,{children:o})]})}function p(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,a.jsx)(p,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,a.jsx)(h,{...f,...e,className:(0,c.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,a.jsx)(h,{...j,...e,className:(0,c.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,a.jsx)(v,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,a.jsx)(h,{...y,...e,className:(0,c.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,a.jsx)(C,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Z={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:g,tip:b,info:N,warning:function(e){return(0,a.jsx)(h,{...B,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(h,{...w,...e,className:(0,c.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(g,{title:"secondary",...e}),important:e=>(0,a.jsx)(N,{title:"important",...e}),success:e=>(0,a.jsx)(b,{title:"success",...e}),caution:function(e){return(0,a.jsx)(h,{...Z,...e,className:(0,c.Z)("alert alert--warning",e.className),children:e.children})}}};function L(e){const t=o(e),n=(s=t.type,_[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),_.info));var s;return(0,a.jsx)(n,{...t})}},3669:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});n(7294);var s=n(512),a=n(7325),o=n(3702),c=n(4791);const r={iconEdit:"iconEdit_Z9Sw"};var i=n(5893);function l(e){let{className:t,...n}=e;return(0,i.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,i.jsxs)(c.Z,{to:t,className:o.k.common.editThisPage,children:[(0,i.jsx)(l,{}),(0,i.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n(3991);function m(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,i.jsx)(a.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function h(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(a.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,i.jsxs)("span",{className:o.k.common.lastUpdated,children:[(0,i.jsx)(a.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,i.jsx)(m,{lastUpdatedAt:t}):"",byUser:n?(0,i.jsx)(h,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const f={lastUpdated:"lastUpdated_JAkA"};function g(e){let{className:t,editUrl:n,lastUpdatedAt:a,lastUpdatedBy:o}=e;return(0,i.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,i.jsx)("div",{className:"col",children:n&&(0,i.jsx)(d,{editUrl:n})}),(0,i.jsx)("div",{className:(0,s.Z)("col",f.lastUpdated),children:(a||o)&&(0,i.jsx)(p,{lastUpdatedAt:a,lastUpdatedBy:o})})]})}},2219:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var s=n(7294),a=n(1514),o=n(1048),c=n(512),r=n(9200),i=n(107);function l(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,r.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(3702),u=n(7594),m=n.n(u);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,f={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},g={...f,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},x=Object.keys(f);function j(e,t){const n=e.map((e=>{const{start:n,end:s}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:a,metastring:o}=t;if(o&&p.test(o)){const e=o.match(p).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,s=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return j(["tex"],t);case"lua":case"haskell":case"sql":return j(["lua"],t);case"wasm":return j(["wasm"],t);case"vb":case"vba":case"visual-basic":return j(["vb","rem"],t);case"vbnet":return j(["vbnet","rem"],t);case"batch":return j(["rem"],t);case"basic":return j(["rem","f90"],t);case"fsharp":return j(["js","ml"],t);case"ocaml":case"sml":return j(["ml"],t);case"fortran":return j(["f90"],t);case"cobol":return j(["cobol"],t);default:return j(x,t)}}(s,a),r=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<r.length;){const e=r[m].match(c);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${m},`:d[t]?i[d[t]].start=m:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${m-1},`),r.splice(m,1)}n=r.join("\n");const h={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}const v={codeBlockContainer:"codeBlockContainer_Ckt0"};var y=n(5893);function N(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,a]=e;const o=t[s];o&&"string"==typeof a&&(n[o]=a)})),n}(l());return(0,y.jsx)(t,{...n,style:s,className:(0,c.Z)(n.className,v.codeBlockContainer,d.k.common.codeBlock)})}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return(0,y.jsx)(N,{as:"pre",tabIndex:0,className:(0,c.Z)(k.codeBlockStandalone,"thin-scrollbar",n),children:(0,y.jsx)("code",{className:k.codeBlockLines,children:t})})}var C=n(3768);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Z(e,t){const[n,a]=(0,s.useState)(),o=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=w);const a=(0,C.zX)(t),o=(0,C.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(2573);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:o}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=a({line:t,className:(0,c.Z)(n,s&&L.codeLine)}),i=t.map(((e,t)=>(0,y.jsx)("span",{...o({token:e})},t)));return(0,y.jsxs)("span",{...r,children:[s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:L.codeLineNumber}),(0,y.jsx)("span",{className:L.codeLineContent,children:i})]}):i,(0,y.jsx)("br",{})]})}var T=n(7325);function A(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function z(e){let{code:t,className:n}=e;const[a,o]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),a=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),c&&(o.removeAllRanges(),o.addRange(c)),a&&a.focus()}(t),o(!0),r.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,y.jsx)("button",{type:"button","aria-label":a?(0,T.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,T.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,T.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,I.copyButton,a&&I.copyButtonCopied),onClick:i,children:(0,y.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,y.jsx)(A,{className:I.copyButtonIcon}),(0,y.jsx)(S,{className:I.copyButtonSuccessIcon})]})})}function U(e){return(0,y.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,y.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const M={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,T.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,y.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,s&&M.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,y.jsx)(U,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function R(e){let{children:t,className:n="",metastring:a,title:o,showLineNumbers:r,language:d}=e;const{prism:{defaultLanguage:u,magicComments:m}}=(0,i.L)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=l(),g=function(){const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Z(o,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:c}}(),x=function(e){return e?.match(h)?.groups.title??""}(a)||o,{lineClassNames:j,code:v}=b(t,{metastring:a,language:p,magicComments:m}),B=r??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return(0,y.jsxs)(N,{as:"div",className:(0,c.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[x&&(0,y.jsx)("div",{className:k.codeBlockTitle,children:x}),(0,y.jsxs)("div",{className:k.codeBlockContent,children:[(0,y.jsx)(_.y$,{theme:f,code:v,language:p??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:o}=e;return(0,y.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,c.Z)(t,k.codeBlock,"thin-scrollbar"),style:n,children:(0,y.jsx)("code",{className:(0,c.Z)(k.codeBlockLines,B&&k.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,y.jsx)(E,{line:e,getLineProps:a,getTokenProps:o,classNames:j[t],showLineNumbers:B},t)))})})}}),(0,y.jsxs)("div",{className:k.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,y.jsx)(H,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,y.jsx)(z,{className:k.codeButton,code:v})]})]})]})}function V(e){let{children:t,...n}=e;const a=(0,o.Z)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof c?R:B;return(0,y.jsx)(r,{...n,children:c},String(a))}function W(e){return(0,y.jsx)("code",{...e})}var $=n(4791);var P=n(168),D=n(4639);const O={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function F(e,t){return!!e&&(e===t||F(e.parentElement,t))}function G(e){let{summary:t,children:n,...a}=e;(0,P.Z)().collectAnchor(a.id);const r=(0,o.Z)(),i=(0,s.useRef)(null),{collapsed:l,setCollapsed:d}=(0,D.u)({initialState:!a.open}),[u,m]=(0,s.useState)(a.open),h=s.isValidElement(t)?t:(0,y.jsx)("summary",{children:t??"Details"});return(0,y.jsxs)("details",{...a,ref:i,open:u,"data-collapsed":l,className:(0,c.Z)(O.details,r&&O.isBrowser,a.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&F(t,i.current)&&(e.preventDefault(),l?(d(!1),m(!0)):d(!0))},children:[h,(0,y.jsx)(D.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,y.jsx)("div",{className:O.collapsibleContent,children:n})})]})}const J={details:"details_b_Ee"},Q="alert alert--info";function X(e){let{...t}=e;return(0,y.jsx)(G,{...t,className:(0,c.Z)(Q,J.details,t.className)})}function Y(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,y.jsx)(y.Fragment,{children:t.filter((e=>e!==n))});return(0,y.jsx)(X,{...e,summary:n,children:a})}var K=n(3899);function ee(e){return(0,y.jsx)(K.Z,{...e})}const te={containsTaskList:"containsTaskList_mC6p"};function ne(e){if(void 0!==e)return(0,c.Z)(e,e?.includes("contains-task-list")&&te.containsTaskList)}const se={img:"img_ev3q"};var ae=n(9114);const oe={Head:a.Z,details:Y,Details:Y,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,y.jsx)(W,{...e}):(0,y.jsx)(V,{...e})},a:function(e){return(0,y.jsx)($.Z,{...e})},pre:function(e){return(0,y.jsx)(y.Fragment,{children:e.children})},ul:function(e){return(0,y.jsx)("ul",{...e,className:ne(e.className)})},li:function(e){return(0,P.Z)().collectAnchor(e.id),(0,y.jsx)("li",{...e})},img:function(e){return(0,y.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,c.Z)(t,se.img))});var t},h1:e=>(0,y.jsx)(ee,{as:"h1",...e}),h2:e=>(0,y.jsx)(ee,{as:"h2",...e}),h3:e=>(0,y.jsx)(ee,{as:"h3",...e}),h4:e=>(0,y.jsx)(ee,{as:"h4",...e}),h5:e=>(0,y.jsx)(ee,{as:"h5",...e}),h6:e=>(0,y.jsx)(ee,{as:"h6",...e}),admonition:ae.Z,mermaid:()=>null}},2381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var s=n(1151),a=n(4308),o=n(5893);function c(e){let{children:t}=e;return(0,o.jsx)(s.Z,{components:a.Z,children:t})}},3672:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(4791),o=n(5893);function c(e){const{permalink:t,title:n,subLabel:c,isNext:r}=e;return(0,o.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[c&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:c}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3852:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(7294);var s=n(512),a=n(4791);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var c=n(5893);function r(e){let{permalink:t,label:n,count:r}=e;return(0,c.jsxs)(a.Z,{href:t,className:(0,s.Z)(o.tag,r?o.tagWithCount:o.tagRegular),children:[n,r&&(0,c.jsx)("span",{children:r})]})}},4597:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(7294);var s=n(512),a=n(7325),o=n(3852);const c={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(5893);function i(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.Z)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,r.jsx)("li",{className:c.tag,children:(0,r.jsx)(o.Z,{label:t,permalink:n})},n)}))})]})}},3991:(e,t,n)=>{"use strict";n.d(t,{P:()=>a});var s=n(9962);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.Z)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r,a:()=>c});var s=n(7294);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);