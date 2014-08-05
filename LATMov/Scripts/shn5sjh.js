/*{"version":"9883217","created":"2012-08-01T14:14:31Z","k":"0.17.0","mac":"1:dcb852d6f5e65a85b4b2b20ee35d023c79cd9104d0873fd75b9a786a4ff50763"}*/
;(function(window,document,undefined){
var g=void 0,m=!0,n=null,o=!1;function p(a){return function(){return this[a]}}var q;function r(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}}function s(a){this.m=a;this.w=g}s.prototype.createElement=function(a,c,b){a=this.m.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?this.pa(a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.m.createTextNode(b));return a};
function t(a,c,b){a=a.m.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function u(a){function c(){document.body?a():setTimeout(c,0)}c()}function v(a){a.parentNode&&a.parentNode.removeChild(a)}function w(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")}
function x(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")}function y(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return m;return o}s.prototype.pa=function(a,c){this.U()?a.setAttribute("style",c):a.style.cssText=c};s.prototype.U=function(){if(this.w===g){var a=this.m.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.w=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.w};
function z(a,c,b,d,e,f,h){this.W=a;this.Pa=c;this.wa=b;this.va=d;this.Ka=e;this.Ja=f;this.ua=h}q=z.prototype;q.getName=p("W");q.getVersion=p("Pa");q.getEngine=p("wa");q.getEngineVersion=p("va");q.getPlatform=p("Ka");q.getPlatformVersion=p("Ja");q.getDocumentMode=p("ua");function A(a,c){this.c=a;this.u=c}var ca=new z("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",g);
A.prototype.parse=function(){var a;if(-1!=this.c.indexOf("MSIE"))if(a=B(this.c,/(MSIE [\d\w\.]+)/,1),""!=a){var c=a.split(" ");a=c[0];c=c[1];a=new z(a,c,a,c,C(this),D(this),E(this.u),6<=G(c))}else a=new z("MSIE","Unknown","MSIE","Unknown",C(this),D(this),E(this.u));else if(-1!=this.c.indexOf("Opera"))a:{var c=a="Unknown",b=B(this.c,/(Presto\/[\d\w\.]+)/,1);""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.c.indexOf("Gecko")&&(a="Gecko"),b=B(this.c,/rv:([^\)]+)/,1),""!=b&&(c=b));if(-1!=this.c.indexOf("Opera Mini/"))b=
B(this.c,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new z("OperaMini",b,a,c,C(this),D(this),E(this.u));else{if(-1!=this.c.indexOf("Version/")&&(b=B(this.c,/Version\/([\d\.]+)/,1),""!=b)){a=new z("Opera",b,a,c,C(this),D(this),E(this.u),10<=G(b));break a}b=B(this.c,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new z("Opera",b,a,c,C(this),D(this),E(this.u),10<=G(b)):new z("Opera","Unknown",a,c,C(this),D(this),E(this.u))}}else if(-1!=this.c.indexOf("AppleWebKit")){a=C(this);c=D(this);b=B(this.c,/AppleWebKit\/([\d\.]+)/,
1);""==b&&(b="Unknown");var d="Unknown";-1!=this.c.indexOf("Chrome")||-1!=this.c.indexOf("CrMo")||-1!=this.c.indexOf("CriOS")?d="Chrome":-1!=this.c.indexOf("Safari")?d="Safari":-1!=this.c.indexOf("AdobeAIR")&&(d="AdobeAIR");var e="Unknown";-1!=this.c.indexOf("Version/")?e=B(this.c,/Version\/([\d\.\w]+)/,1):"Chrome"==d?e=B(this.c,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==d&&(e=B(this.c,/AdobeAIR\/([\d\.]+)/,1));"AdobeAIR"==d?(B(e,/\d+\.(\d+)/,1),2<G(e)||G(e)):(B(b,/\d+\.(\d+)/,1),526<=G(b)||
G(b));a=new z(d,e,"AppleWebKit",b,a,c,E(this.u))}else if(-1!=this.c.indexOf("Gecko")){c=a="Unknown";d=o;-1!=this.c.indexOf("Firefox")?(a="Firefox",b=B(this.c,/Firefox\/([\d\w\.]+)/,1),""!=b&&(d=B(b,/\d+\.(\d+)/,1),c=b,d=""!=b&&3<=G(b)&&5<=parseInt(d,10))):-1!=this.c.indexOf("Mozilla")&&(a="Mozilla");b=B(this.c,/rv:([^\)]+)/,1);if(""==b)b="Unknown";else if(!d){var d=G(b),e=parseInt(B(b,/\d+\.(\d+)/,1),10),f=parseInt(B(b,/\d+\.\d+\.(\d+)/,1),10);1<d||1==d&&9<e||1==d&&9==e&&2<=f||b.match(/1\.9\.1b[123]/)!=
n||b.match(/1\.9\.1\.[\d\.]+/)}a=new z(a,c,"Gecko",b,C(this),D(this),E(this.u))}else a=ca;return a};function C(a){var c=B(a.c,/(iPod|iPad|iPhone|Android)/,1);if(""!=c)return c;a=B(a.c,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}function D(a){var c=B(a.c,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=B(a.c,/(iPhone )?OS ([\d_]+)/,2)))return c;return(a=B(a.c,/Linux ([i\d]+)/,1))?a:"Unknown"}
function G(a){a=B(a,/(\d+)/,1);return""!=a?parseInt(a,10):-1}function B(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function E(a){if(a.documentMode)return a.documentMode}function da(a,c,b){this.j=a;this.l=c;this.$=b;this.p="wf";this.n=new H("-")}function I(a){x(a.l,a.n.k(a.p,"loading"));y(a.l,a.n.k(a.p,"active"))||w(a.l,a.n.k(a.p,"inactive"));J(a,"inactive")}function J(a,c,b,d){if(a.$[c])a.$[c](b,d)}function K(a,c,b,d,e){this.j=a;this.A=c;this.C=b;this.v=d;this.G=e;this.O=0;this.qa=this.ia=o}
K.prototype.watch=function(a,c,b,d,e){for(var f=a.length,h=0;h<f;h++){var i=a[h];c[i]||(c[i]=["n4"]);this.O+=c[i].length}e&&(this.ia=e);for(h=0;h<f;h++)for(var i=a[h],e=c[i],k=b[i],j=0,l=e.length;j<l;j++){var aa=e[j],F=this.A,L=i,ba=aa;w(F.l,F.n.k(F.p,L,ba,"loading"));J(F,"fontloading",L,ba);F=r(this,this.xa);L=r(this,this.ya);(new d(F,L,this.j,this.C,this.v,this.G,i,aa,k)).start()}};
K.prototype.xa=function(a,c){var b=this.A;x(b.l,b.n.k(b.p,a,c,"loading"));x(b.l,b.n.k(b.p,a,c,"inactive"));w(b.l,b.n.k(b.p,a,c,"active"));J(b,"fontactive",a,c);this.qa=m;ea(this)};K.prototype.ya=function(a,c){var b=this.A;x(b.l,b.n.k(b.p,a,c,"loading"));y(b.l,b.n.k(b.p,a,c,"active"))||w(b.l,b.n.k(b.p,a,c,"inactive"));J(b,"fontinactive",a,c);ea(this)};
function ea(a){0==--a.O&&a.ia&&(a.qa?(a=a.A,x(a.l,a.n.k(a.p,"loading")),x(a.l,a.n.k(a.p,"inactive")),w(a.l,a.n.k(a.p,"active")),J(a,"active")):I(a.A))}
function M(a,c,b,d,e,f,h,i,k){this.sa=a;this.Ca=c;this.j=b;this.C=d;this.v=e;this.G=f;this.Ia=new fa;this.Aa=new ga;this.Q=h;this.P=i;this.za=k||"BESbswy";this.ja=ha(this,"arial,'URW Gothic L',sans-serif");this.ka=ha(this,"Georgia,'Century Schoolbook L',serif");this.ga=this.ja;this.ha=this.ka;this.X=N(this,"arial,'URW Gothic L',sans-serif");this.Y=N(this,"Georgia,'Century Schoolbook L',serif")}M.prototype.start=function(){this.Na=this.G();this.aa()};
M.prototype.aa=function(){var a=this.C.T(this.X),c=this.C.T(this.Y);(this.ja!=a||this.ka!=c)&&this.ga==a&&this.ha==c?(a=this.sa,v(this.X),v(this.Y),a(this.Q,this.P)):5E3<=this.G()-this.Na?(a=this.Ca,v(this.X),v(this.Y),a(this.Q,this.P)):(this.ga=a,this.ha=c,ia(this))};function ia(a){a.v(function(a,b){return function(){b.call(a)}}(a,a.aa),25)}function ha(a,c){var b=N(a,c,m),d=a.C.T(b);v(b);return d}function N(a,c,b){c=a.j.createElement("span",{style:ja(a,c,a.P,b)},a.za);t(a.j,"body",c);return c}
function ja(a,c,b,d){b=a.Aa.expand(b);return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(d?"":a.Ia.quote(a.Q)+",")+c+";"+b}function H(a){this.Ga=a||"-"}H.prototype.k=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Ga)};function fa(){this.oa="'"}
fa.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.oa+d+this.oa)}return c.join(",")};function ga(){this.ma=ka;this.D=la}var ka=["font-style","font-weight"],la={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function ma(a,c,b){this.Da=a;this.La=c;this.D=b}ma.prototype.expand=function(a,c){for(var b=0;b<this.D.length;b++)if(c==this.D[b][0]){a[this.Da]=this.La+":"+this.D[b][1];break}};ga.prototype.expand=function(a){if(2!=a.length)return n;for(var c=[n,n],b=0,d=this.ma.length;b<d;b++){var e=this.ma[b];(new ma(b,e,this.D[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":n};function O(a){this.m=a;this.w=g}O.prototype=s.prototype;O.prototype.Ba=function(){return this.m.location.hostname};
function na(a,c,b){var d=a.m.getElementsByTagName("head")[0];if(d){var e=a.m.createElement("script");e.src=c;var f=o;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=m,b&&b(),e.onload=e.onreadystatechange=n,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e)}}O.prototype.pa=function(a,c){this.U()?a.setAttribute("style",c):a.style.cssText=c};
O.prototype.U=function(){if(this.w===g){var a=this.m.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.w=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.w};function oa(a){for(var c=a.Ma.join(","),b=[],d=0;d<a.ba.length;d++){var e=a.ba[d];b.push(e.name+":"+e.value+";")}return c+"{"+b.join("")+"}"}function P(a,c){this.B=a;this.F=c;this.da={};this.ca={}}P.prototype.z=function(a){return a?(this.da[a.H]||this.F).slice(0):this.F.slice(0)};
function pa(a,c,b){for(var d=[],e=a.B.split(",")[0].replace(/"|'/g,""),f=a.z(),h,i=[],k={},j=0;j<f.length;j++)h=f[j],0<h.length&&!k[h]&&(k[h]=m,i.push(h));b=b.na?b.na(e,i,d):i;c=c.H;a.da[c]=b;a.ca[c]=d}P.prototype.watch=function(a,c,b){var d=[],e={};qa(this,c,d,e);a(d,e,b)};function qa(a,c,b,d){b.push(a.B);d[a.B]=a.z(c);a=a.ca[c.H]||[];for(c=0;c<a.length;c++){for(var e=a[c],f=e.B,h=o,i=0;i<b.length;i++)b[i]==f&&(h=m);h||(b.push(f),d[f]=e.z())}}function ra(a,c){this.B=a;this.F=c}ra.prototype.z=p("F");
function sa(a){var c=new Image(1,1);c.src=a;c.onload=function(){c.onload=n}}function Q(a,c){this.H=a;this.fa=c}function R(a){ta.K.push(a)}function ua(a){this.j=a;this.r=this.c=this.J=n;this.ta=this.Ea=this.Fa=m;this.o=[];this.L=[];this.ra=this.R=this.M=this.N=n}
function va(a,c){a.c=c;if(a.J){var b;a:{b=a.J;for(var d=a.c,e=a.Fa,f=a.Ea,h=a.ta,i=0;i<b.K.length;i++){var k=b.K[i];if(k.fa&&k.fa(d.getName(),d.getVersion(),d.getEngine(),d.getEngineVersion(),d.getPlatform(),d.getPlatformVersion(),d.getDocumentMode(),e,f,h)){b=k;break a}}b=n}a.r=b}}q=ua.prototype;q.supportsConfiguredBrowser=function(){return!!this.r};
q.init=function(){for(var a=[],c=0;c<this.L.length;c++)a.push(oa(this.L[c]));var c=this.j,a=a.join(""),b=this.j.m.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));t(c,"head",b)};
q.load=function(a,c){var b=this.r.H;if(this.R)for(var d=wa(this.R,b),e=0;e<this.o.length;e++)pa(this.o[e],this.r,d);this.N&&(d=[],this.M&&(d=new xa(this.j,this.r,this.o),d=ya(this.M,b,d)),b=this.N.k("https:"==this.j.m.location.protocol,za(b,d)),t(this.j,"head",this.j.createElement("link",{rel:"stylesheet",href:b})));a&&u(function(a,b,c,e){return function(){for(var d=0;d<a.o.length;d++)a.o[d].watch(b,c,e&&d==a.o.length-1)}}(this,a,this.r,c))};
q.collectFontFamilies=function(a,c){for(var b=0;b<this.o.length;b++)qa(this.o[b],this.r,a,c)};q.performOptionalActions=function(a){this.V&&u(function(a,b,d,e){return function(){var b=a.V;if(b.la){var h=window.__adobewebfontsappname__,h=h?h.toString().substr(0,20):"";sa(b.la.k("https:"==e.m.location.protocol,{host:encodeURIComponent(e.m.location.hostname),app:encodeURIComponent(h),_:(+new Date).toString()}))}b=a.V;b.Z&&(b=b.Z.k(d,e),t(e,"body",b))}}(this,a,this.c,this.j))};
function S(a,c,b,d){this.Ha=a;this.j=c;this.l=b;this.v=d;this.q=[]}S.prototype.I=function(a){this.q.push(a)};S.prototype.load=function(a,c){var b=a,d=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)d=b||{},b=[];if(b.length)for(var e=this,f=b.length,h=0;h<b.length;h++)Aa(this,b[h],function(){0==--f&&Ba(e,d)});else Ba(this,d)};function Aa(a,c,b){na(a.j,a.Ha.k("https:"==a.j.m.location.protocol,{id:encodeURIComponent(c)}),b)}
function Ba(a,c){if(0!=a.q.length){for(var b=new da(a.j,a.l,c),d=o,e=0;e<a.q.length;e++)a.q[e].init(),d=d||a.q[e].supportsConfiguredBrowser();d?(w(b.l,b.n.k(b.p,"loading")),J(b,"loading"),Ca(a,b)):I(b);a.q=[]}}function Ca(a,c){function b(a,b,c){d.watch(a,b,{},M,c)}for(var d=new K(a.j,c,{T:function(a){return a.offsetWidth}},a.v,function(){return+new Date}),e=0;e<a.q.length;e++){var f=a.q[e];f.supportsConfiguredBrowser()&&(f.load(b,e==a.q.length-1),f.performOptionalActions(window))}}
function T(a,c){this.ea=a;this.v=c;this.q=[]}T.prototype.I=function(a){this.q.push(a)};T.prototype.load=function(){var a=this.ea.__webfonttypekitmodule__;if(a)for(var c=0;c<this.q.length;c++){var b=this.q[c],d=a[b.ra];if(d){var e=this.v;d(function(a,c,d){var c=[],k={};va(b,a);b.supportsConfiguredBrowser()&&(b.init(),b.load(n,e),b.collectFontFamilies(c,k),b.performOptionalActions(window));d(b.supportsConfiguredBrowser(),c,k)})}}};function U(a,c){this.W=a;this.na=c}U.prototype.getName=p("W");
function Da(a){var c=V;Ea(c,a.getName())||c.S.push(a)}function Ea(a,c){for(var b=0;b<a.S.length;b++){var d=a.S[b];if(c===d.getName())return d}return n}function wa(a,c){var b=a.s[c];return b?Ea(a,b):n}function ya(a,c,b){for(var d=[],a=a.t[c]||[],c=0;c<a.length;c++){var e;a:switch(a[c]){case "observeddomain":e=new Fa(b.j);break a;case "fontmask":e=new Ga(b.r,b.o);break a;default:e=n}e&&d.push(e)}return d}function xa(a,c,b){this.j=a;this.r=c;this.o=b}function Fa(a){this.j=a}
Fa.prototype.toString=function(){return encodeURIComponent(this.j.Ba?this.j.m.location.hostname:document.location.hostname)};function Ga(a,c){this.r=a;this.o=c}Ga.prototype.toString=function(){for(var a=[],c=0;c<this.o.length;c++)for(var b=this.o[c],d=b.z(),b=b.z(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<b.length;f++)if(d[e]===b[f]){f=m;break a}f=o}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(d=a.length;0<d;d-=4)b=a.slice(0>d-4?0:d-4,d),c.unshift(parseInt(b,2).toString(16));return c.join("")};
function W(a){this.Oa=a}W.prototype.k=function(a,c){var b=c||{},d=this.Oa.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,d){return d&&b[c]?"/"+b[c].join("/"):b[c]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function za(a,c){for(var b=[],d=0;d<c.length;d++)b.push(c[d].toString());return{format:a,extras:b}}var ta=new function(){this.K=[]};
R(new Q("a",function(a,c,b,d,e,f){if(o||("Windows"==e&&"Unknown"==f?m:o)||("Ubuntu"==e||"Linux"==e?m:o))a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=o}else a=o;return a}));
R(new Q("b",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b){if("AdobeAIR"==a){var c=/([0-9]+.[0-9]+)/.exec(b);if(c)return 2.5<=parseFloat(c[1])}return o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);
return!l&&!("Ubuntu"==e||"Linux"==e?m:o)?o:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c){var d=parseFloat(c[1]),e=parseInt(c[2],10),c=parseInt(c[3],10);if(!(6<=d)&&(4<d||4==d&&249<e||4==d&&249==e&&4<=c))return m}}return o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("d",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=(l=(l=(l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?m:o}(a,c,b,d,e,f,
h,i,k,j))||("Ubuntu"==e||"Linux"==e?m:o)||function(a,b,c,e,d,f,h,i,k,j){a=/([0-9]+).([0-9]+)/.exec(f);return j&&"Android"==d&&a?(d=parseInt(a[1],10),j=parseInt(a[2],10),3==d&&1<=j||3<d):o}(a,c,b,d,e,f,h,i,k,j))||"CrOS"==e||function(a,b,c,e,d,f,h,i,j){return j&&"iPad"==d?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):o:o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,d,e,f,h,i){return i&&("iPhone"==e||"iPod"==e)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):o:o}(a,c,b,d,e,f,h,i,k,j);return!l?
o:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return m}}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||function(a,b,c,e,d,f,h,i,j){return j&&"iPad"==d&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,e,d,f,h,i){if(i&&("iPhone"==d||"iPod"==d))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b;return o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return m}}(a,
c,b,d,e,f,h,i,k,j)}));R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):o}(a,c,b,d,e,f,h,i,k,j);return!l&&!("Ubuntu"==e||"Linux"==e?m:o)?o:function(a,b,c,e){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(e)&&!a.test(e)):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("b",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b,c,e){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(e)&&!a.test(e)):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("d",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);
return!(l||("Ubuntu"==e||"Linux"==e?m:o)||j&&"Android"==e)?o:function(a,b,c,e){return"Gecko"==c&&(b=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(e))?(a=parseFloat(b[1]),b=parseInt(b[3],10),1.9<a||1.9<=a&&1<b):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("i",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b,c,e,d,f,h){if("MSIE"==a)return(a=/([0-9]+.[0-9]+)/.exec(b))?6<=parseFloat(a[1])&&(h===g||9>h):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("d",function(a,c,b,d,e,f,h){if(!(c=o))b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==e&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=6<c||6==c&&1<=b):c=o;a=c||("Windows"==e&&"6.0"==f?m:o)?"MSIE"==a?9<=h:g:o;return a}));
R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):o}(a,c,b,d,e,f,h,i,k,j);return!l&&!("Ubuntu"==e||"Linux"==e?m:o)?o:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("b",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("d",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);
return!(l||("Ubuntu"==e||"Linux"==e?m:o)||j&&"Android"==e)?o:"Opera"==a?11.1<=parseFloat(c):o}));
R(new Q("b",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b,c,d){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(d))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):o}(a,c,b,d,e,f,h,i,k,j);return!l?o:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("d",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||("Windows"==e&&"5.1"==f?m:o)||("Windows"==e&&"5.2"==f?m:o)||("Windows"==e&&"6.0"==f?m:o)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?m:o}(a,c,b,d,e,f,h,i,k,j);
return!l?o:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?534.5<=parseFloat(a[1]):o}(a,c,b,d,e,f,h,i,k,j)}));
R(new Q("a",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=(l=o||function(a,b,c,e,d,f,h,i,j,k){a=/([0-9]+).([0-9]+)/.exec(f);return k&&"Android"==d&&a?(d=parseInt(a[1],10),k=parseInt(a[2],10),2==d&&2<=k||3==d&&1>k):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,e,d,f,h,i,j){return j&&"iPad"==d&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,e,d,f,h,i){if(i&&("iPhone"==d||"iPod"==d))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],
10),4==parseInt(a[1],10)&&2<=b;return o}(a,c,b,d,e,f,h,i,k,j);return!l?o:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?m:o}));R(new Q("f",function(a,c,b,d,e,f,h,i,k,j){if(!(c=o))f=/([0-9]+).([0-9]+)/.exec(f),j&&"Android"==e&&f?(j=parseInt(f[1],10),f=parseInt(f[2],10),c=3==j&&1<=f||3<j):c=o;return!c?o:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?m:o}));
R(new Q("d",function(a,c,b,d,e,f,h,i,k,j){var l;l=(l=o||function(a,b,c,d,e,f,h,i,j){return j&&"iPad"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):o:o}(a,c,b,d,e,f,h,i,k,j))||function(a,b,c,e,d,f,h,i){return i&&("iPhone"==d||"iPod"==d)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):o:o}(a,c,b,d,e,f,h,i,k,j);return!l?o:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?m:o}));var V=new function(){this.S=[];this.s={}};
Da(new U("AllFonts",function(a,c){return c}));
Da(new U("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var d=0;d<c.length;d++){var e=c[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;b.push(new ra(f,[e]))}a={};for(e=0;e<c.length;e++)b=c[e],d=b.charAt(1),(a[d]||(a[d]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<b.length;e++)for(var f=b[e],h=0;h<f.length;h++){var i=f[h];if(a[i]){d=d.concat(a[i]);break}}b=d;d={};a=[];for(e=0;e<b.length;e++)f=b[e],d[f]||(d[f]=m,a.push(f));b=[];for(d=0;d<c.length;d++){e=c[d];
for(f=0;f<a.length;f++)h=a[f],h==e&&b.push(h)}return b}));V.s.a="AllFonts";V.s.b="AllFonts";V.s.d="AllFonts";V.s.e="AllFonts";V.s.f="AllFonts";V.s.g="AllFonts";V.s.h="AllFonts";V.s.i="DefaultFourFontsWithSingleFvdFamilies";var X=new function(){this.t={}};X.t.a=[];X.t.b=[];X.t.d=[];X.t.e=[];X.t.f=["observeddomain"];X.t.g=["observeddomain"];X.t.h=["observeddomain"];X.t.i=["observeddomain","fontmask"];window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var Ha=function(a,c){setTimeout(a,c)},Y=new S(new W("//use.typekit.com/{id}.js"),new O(document),document.documentElement,Ha),Z=new T(window,Ha);window.Typekit.load=function(){Y.load.apply(Y,arguments)};window.Typekit.addKit=function(){Y.I.apply(Y,arguments)}}var Ia,$;Ia=new function(){this.la=this.Z=n};$=new ua(new O(document));$.ra="shn5sjh";$.N=new W("//use.typekit.com/k/shn5sjh-{format}.css?3bb2a6e53c9684ffdc9a9bf51f5b2a62e77d9d6d2de4b3b4786eaae18dee33d115de4d09619182d275e90b521025efc9bb8cc2f5f41e95b81988b1ead67bc1b9858a79a225ff6f4b5d2e6a94880fa160c935b7b3328f431a949f7e50e39b1ad890b77ab9c2410d2ea84c774dea6dcacd485c92723b2c4b8f936c9b1d52d51a1411d457ec3f2eeb");
$.V=Ia;$.o.push(new P("ff-tisa-web-pro",["n4","i4","n7","i7"]));$.L.push(new function(){this.Ma=[".tk-ff-tisa-web-pro"];this.ba=[{value:'"ff-tisa-web-pro",serif',name:"font-family"}]});$.J=ta;$.M=X;$.R=V;Z&&Z.ea.__webfonttypekitmodule__?(Z.I($),Z.load()):(va($,(new A(navigator.userAgent,document)).parse()),window.Typekit.addKit($));
})(this,document);
window.Typekit.config={"p":"//p.typekit.net/p.gif?s=1&k=shn5sjh&ht=tk&h={host}&f=5018.4616.5045.4455&a=499012&_={_}"};
/*{"k":"1.8.6","created":"2014-07-23 13:47:02 UTC"}*/
;(function(window,document,undefined){
function e(a){return function(){return this[a]}}var f=this;function h(a,b){var d=a.split("."),c=f;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&void 0!==b?c[g]=b:c=c[g]?c[g]:c[g]={}}function k(a,b,d){this.N=a;this.L=b;this.M=d}h("webfont.BrowserInfo",k);k.prototype.B=e("N");k.prototype.hasWebFontSupport=k.prototype.B;k.prototype.C=e("L");k.prototype.hasWebKitFallbackBug=k.prototype.C;k.prototype.D=e("M");k.prototype.hasWebKitMetricsBug=k.prototype.D;
function l(a,b,d,c,g,j,u,v,w,x,y){this.F=a;this.R=b;this.K=d;this.q=c;this.P=g;this.o=j;this.H=u;this.Q=v;this.G=w;this.n=x;this.l=y}h("webfont.UserAgent",l);l.prototype.getName=e("F");l.prototype.getName=l.prototype.getName;l.prototype.A=e("K");l.prototype.getVersion=l.prototype.A;l.prototype.t=e("q");l.prototype.getEngine=l.prototype.t;l.prototype.u=e("o");l.prototype.getEngineVersion=l.prototype.u;l.prototype.w=e("H");l.prototype.getPlatform=l.prototype.w;l.prototype.z=e("G");
l.prototype.getPlatformVersion=l.prototype.z;l.prototype.s=e("n");l.prototype.getDocumentMode=l.prototype.s;l.prototype.r=e("l");l.prototype.getBrowserInfo=l.prototype.r;function m(a){this.f=a}m.prototype.toString=function(){return encodeURIComponent(this.f.c.location.hostname||this.f.e.location.hostname)};function n(a,b){this.I=a;this.g=b}
n.prototype.toString=function(){for(var a=[],b=0;b<this.g.length;b++)for(var d=this.g[b],c=d.v(),d=d.v(this.I),g=0;g<c.length;g++){var j;a:{for(j=0;j<d.length;j++)if(c[g]===d[j]){j=!0;break a}j=!1}a.push(j?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(c=a.length;0<c;c-=4)d=a.slice(0>c-4?0:c-4,c),b.unshift(parseInt(d,2).toString(16));return b.join("")};function p(a){this.J=a}
p.prototype.m=function(a,b){var d=b||{},c=this.J.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,c){return c&&d[b]?"/"+d[b].join("/"):d[b]||""});c.match(/^\/\//)&&(c=(a?"https:":"http:")+c);return c.replace(/\/*\?*($|\?)/,"$1")};function q(a){var b=new Image(1,1);b.src=a;b.onload=function(){b.onload=null}}var r={};r.a=r.j=r.b=r.d=r.j=function(){return[]};r.i=function(a,b,d){return[new m(a),new n(b,d)]};r.k=function(a){return[new m(a)]};window.Typekit||(window.Typekit={});
var s=new function(){var a=window;this.c=this.e=a;this.O=this.c.document},t=new function(){this.h=new p(window.Typekit.config.p)},z=!1;
function A(){if(!z)for(var a=document.getElementsByTagName("link"),b=0;b<a.length;b++){var d=a[b].getAttribute("href");if(d&&0<=d.indexOf("use.typekit")){a=t;b=s;if(a.h){var d=(d=window.__adobewebfontsappname__)?d.toString().substr(0,20):"",c=b.c.location.protocol;"about:"==c&&(c=b.e.location.protocol);q(a.h.m("https:"===("https:"==c?"https:":"http:"),{host:encodeURIComponent(b.c.location.hostname||b.e.location.hostname),app:encodeURIComponent(d),_:(+new Date).toString()}))}z=!0;break}}}var B=window.Typekit.load;
window.Typekit.load=function(){B&&B.apply(window.Typekit,arguments);A()};window.__webfonttypekitmodule__&&A();
})(this,document);
