(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{OPu5:function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return o})),t.d(r,"default",(function(){return p}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),n=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/http_headers/referrer_policy.mdx"}});var l={_frontmatter:o},c=n.a;function p(e){var r=e.components,t=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(a.b)(c,i({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"http-header-referrer-policy"},"HTTP Header: Referrer Policy"),Object(a.b)("h2",{id:"the-attack"},"The attack"),Object(a.b)("p",null,"The Referrer Policy module can control the behavior of the ",Object(a.b)("inlineCode",{parentName:"p"},"Referer")," header by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"Referrer-Policy")," header."),Object(a.b)("p",null,"The ",Object(a.b)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/HTTP_referer"}),Object(a.b)("inlineCode",{parentName:"a"},"Referer")," HTTP header")," is typically set by web browsers to tell a server where it’s coming from. For example, if you click a link on ",Object(a.b)("inlineCode",{parentName:"p"},"example.com/index.html")," that takes you to ",Object(a.b)("inlineCode",{parentName:"p"},"wikipedia.org"),", Wikipedia’s servers will see ",Object(a.b)("inlineCode",{parentName:"p"},"Referer: example.com"),"."),Object(a.b)("p",null,"This can have privacy implications—websites can see where users are coming from."),Object(a.b)("h2",{id:"the-header"},"The header"),Object(a.b)("p",null,"The new ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.w3.org/TR/referrer-policy/#referrer-policy-header"}),Object(a.b)("inlineCode",{parentName:"a"},"Referrer-Policy")," HTTP header")," lets authors control how browsers set the ",Object(a.b)("inlineCode",{parentName:"p"},"Referer")," header."),Object(a.b)("p",null,"For example, when supported browsers see this header, they will set no ",Object(a.b)("inlineCode",{parentName:"p"},"Referer")," header at all:"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"Referrer-Policy: no-referrer\n")),Object(a.b)("p",null,"There are other directives, too. ",Object(a.b)("inlineCode",{parentName:"p"},"same-origin"),", for example, will only send the ",Object(a.b)("inlineCode",{parentName:"p"},"Referer")," header for pages on the same origin."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"Referrer-Policy: same-origin\n")),Object(a.b)("p",null,"You can see the full list of directives on ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.w3.org/TR/referrer-policy/#referrer-policies"}),"the specification")," and ",Object(a.b)("a",i({parentName:"p"},{href:"http://caniuse.com/#feat=referrer-policy"}),"support in all browsers")),Object(a.b)("h2",{id:"the-code"},"The code"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const helmet = require('helmet')\n\n// Sets \"Referrer-Policy: same-origin\".\napp.use(helmet.referrerPolicy({ policy: 'same-origin' }))\n")),Object(a.b)("h3",{id:"refs"},"Refs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://helmetjs.github.io/docs/referrer-policy"}),"Helmet | Referrer Policy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://caniuse.com/#feat=referrer-policy"}),"Can I use | referrer-policy")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/HTTP_referer"}),"Wikipedia | HTTP Referer "))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/http_headers/referrer_policy.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-http-headers-referrer-policy-mdx-c9a1ff4e5fb2238db001.js.map