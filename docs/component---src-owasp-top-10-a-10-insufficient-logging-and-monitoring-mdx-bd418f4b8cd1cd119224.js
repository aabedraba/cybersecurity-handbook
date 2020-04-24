(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{CO4q:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a10_insufficient_logging_and_monitoring.mdx"}});var s={_frontmatter:r},l=i.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(l,o({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"a10-insufficient-logging-and-monitoring"},"A10 Insufficient logging and monitoring"),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Insufficient logging and monitoring, coupled with missing or ineffective integration with incident\nresponse, allows attackers to further attack systems, maintain persistence, pivot to more systems,\nand tamper, extract, or destroy data. Most breach studies show time to detect a breach is over\n200 days, typically detected by external parties rather than internal processes or monitoring. "),Object(a.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Score: 4.0"),Object(a.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 2"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 3"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Detectability: 1"),Object(a.b)("li",{parentName:"ul"},"Impact Technical: 2")),Object(a.b)("h2",{id:"context"},"Context"),Object(a.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/IFF3tkUOF5E"}),Object(a.b)("p",null,"Exploitation of insufficient logging and\nmonitoring is the bedrock of nearly\nevery major incident."),Object(a.b)("p",null,"Attackers rely on the lack of\nmonitoring and timely response to\nachieve their goals without being\ndetected."),Object(a.b)("p",null,"This issue is included in the Top 10 based on an\n",Object(a.b)("a",o({parentName:"p"},{href:"https://owasp.blogspot.com/2017/08/owasp-top-10-2017-project-update.html"}),"industry survey"),"."),Object(a.b)("p",null,"One strategy for determining if you have sufficient\nmonitoring is to examine the logs following\npenetration testing. The testers’ actions should be\nrecorded sufficiently to understand what damages\nthey may have inflicted.\nMost successful attacks start with\nvulnerability probing. Allowing such\nprobes to continue can raise the\nlikelihood of successful exploit to\nnearly 100%."),Object(a.b)("p",null,"In 2016, identifying a breach took an\n",Object(a.b)("a",o({parentName:"p"},{href:"https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=SEL03130WWEN&"}),"average of 191 days")," – plenty of time\nfor damage to be inflicted."),Object(a.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(a.b)("p",null,"Insufficient logging, detection, monitoring and active response\noccurs any time:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Auditable events, such as logins, failed logins, and high-value\ntransactions are not logged."),Object(a.b)("li",{parentName:"ul"},"Warnings and errors generate no, inadequate, or unclear log\nmessages."),Object(a.b)("li",{parentName:"ul"},"Logs of applications and APIs are not monitored for suspicious\nactivity."),Object(a.b)("li",{parentName:"ul"},"Logs are only stored locally."),Object(a.b)("li",{parentName:"ul"},"Appropriate alerting thresholds and response escalation\nprocesses are not in place or effective."),Object(a.b)("li",{parentName:"ul"},"Penetration testing and scans by DAST tools (such as ",Object(a.b)("a",o({parentName:"li"},{href:"https://wiki.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project"}),"OWASP\nZAP"),") do not trigger alerts."),Object(a.b)("li",{parentName:"ul"},"The application is unable to detect, escalate, or alert for active\nattacks in real time or near real time.\nYou are vulnerable to information leakage if you make logging\nand alerting events visible to a user or an attacker (see ",Object(a.b)("a",o({parentName:"li"},{href:"/owasp/a3_sensitived_data_exposure"}),"A3:2017-\nSensitive Information Exposure"),").")),Object(a.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(a.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(a.b)("p",null,"An open source project forum software run by a\nsmall team was hacked using a flaw in its software. The\nattackers managed to wipe out the internal source code\nrepository containing the next version, and all of the forum\ncontents. Although source could be recovered, the lack of\nmonitoring, logging or alerting led to a far worse breach. The\nforum software project is no longer active as a result of this\nissue."),Object(a.b)("h3",{id:"scenario-2"},"Scenario #2:"),Object(a.b)("p",null,"An attacker uses scans for users using a common\npassword. They can take over all accounts using this password.\nFor all other users, this scan leaves only one false login behind.\nAfter some days, this may be repeated with a different password."),Object(a.b)("h3",{id:"scenario-3-a-major-us-retailer-reportedly-had-an-internal"},"Scenario #3: A major US retailer reportedly had an internal"),Object(a.b)("p",null,"malware analysis sandbox analyzing attachments. The sandbox\nsoftware had detected potentially unwanted software, but no one\nresponded to this detection. The sandbox had been producing\nwarnings for some time before the breach was detected due to\nfraudulent card transactions by an external bank."),Object(a.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(a.b)("p",null,"As per the risk of the data stored or processed by the\napplication:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure all login, access control failures, and server-side input\nvalidation failures can be logged with sufficient user context to\nidentify suspicious or malicious accounts, and held for sufficient\ntime to allow delayed forensic analysis."),Object(a.b)("li",{parentName:"ul"},"Ensure that logs are generated in a format that can be easily\nconsumed by a centralized log management solutions."),Object(a.b)("li",{parentName:"ul"},"Ensure high-value transactions have an audit trail with integrity\ncontrols to prevent tampering or deletion, such as append-only\ndatabase tables or similar."),Object(a.b)("li",{parentName:"ul"},"Establish effective monitoring and alerting such that suspicious\nactivities are detected and responded to in a timely fashion."),Object(a.b)("li",{parentName:"ul"},"Establish or adopt an incident response and recovery plan,\nsuch as ",Object(a.b)("a",o({parentName:"li"},{href:"https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"}),"NIST 800-61 rev 2")," or later.\nThere are commercial and open source application protection\nframeworks such as ",Object(a.b)("a",o({parentName:"li"},{href:"https://wiki.owasp.org/index.php/OWASP_AppSensor_Project"}),"OWASP AppSensor"),", web application\nfirewalls such as ModSecurity with the ",Object(a.b)("a",o({parentName:"li"},{href:"https://owasp.org/www-project-modsecurity-core-rule-set/"}),"OWASP ModSecurity\nCore Rule Set"),", and log correlation software with custom\ndashboards and alerting. ")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("h3",{id:"owasp"},"OWASP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Logging"))),Object(a.b)("h3",{id:"cwes"},"CWEs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/223.html"}),"CWE-223: Omission of Security-relevant Information")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/223.html"}),"CWE-778: Insufficient Logging"))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a10_insufficient_logging_and_monitoring.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-10-insufficient-logging-and-monitoring-mdx-bd418f4b8cd1cd119224.js.map