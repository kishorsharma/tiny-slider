var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false","null"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e){return localStorage.setItem(t,e),e}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function r(t,e){return Math.atan2(t,e)*(180/Math.PI)}function o(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function s(t,e){return t.hasAttribute(e)}function l(t,e){return t.getAttribute(e)}function c(t){return void 0!==t.item}function u(t,e){if(t=c(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function d(t,e){t=c(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function f(t){s(t,"hidden")||u(t,{hidden:""})}function v(t){s(t,"hidden")&&d(t,"hidden")}function h(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function p(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++){var i=t[n];if(void 0!==e.style[i])return i}return!1}function m(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function y(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&L;t.addEventListener(n,e[n],i)}}function g(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&L;t.removeEventListener(n,e[n],i)}}function b(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function x(t,e,n,i,a,r,o){function s(){r-=l,u+=d,t.style[e]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,r=Object,o="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in r||"__defineGetter__"in r[d]||null,v=function(t,e,n,i){r.defineProperty?r.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},h=function(t,e){var n=this,i=[],a={},d=0,f=0,h=function(){if(d>=f)for(;f<d;++f)!function(t){v(n,t,function(){return p(),i[t]},!1)}(f)},p=function(){var n,r,s=arguments,l=/\s+/;if(s[o])for(r=0;r<s[o];++r)if(l.test(s[r]))throw n=new SyntaxError('String "'+s[r]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},r=0;r<i[o];++r)a[i[r]]=!0;d=i[o],h()};return p(),v(n,o,function(){return p(),d}),n[s[6]]=n[s[5]]=function(){return p(),i.join(" ")},n.item=function(t){return p(),i[t]},n.contains=function(t){return p(),!!a[t]},n[l]=function(){p.apply(n,r=arguments);for(var r,s,l=0,c=r[o];l<c;++l)s=r[l],a[s]||(i.push(s),a[s]=!0);d!==i[o]&&(d=i[o]>>>0,t[e]=i.join(" "),h())},n[c]=function(){p.apply(n,r=arguments);for(var r,s={},l=0,c=[];l<r[o];++l)s[r[l]]=!0,delete a[r[l]];for(l=0;l<i[o];++l)s[i[l]]||c.push(i[l]);i=c,d=c[o]>>>0,t[e]=i.join(" "),h()},n[u]=function(t,e){return p.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[c](t),!1):a[t]?(n[c](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,r.defineProperty),n},p=function(t,e,n){v(t[d],e,function(){var t,i=this,r="__defineGetter__defineProperty"+e;if(i[r])return t;if(i[r]=!0,!1===f){for(var s,l=p.mirror=p.mirror||a.createElement("div"),c=l.childNodes,u=c[o],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),t=h.call(s,i,n)}else t=new h(i,n);return v(i,e,function(){return t}),delete i[r],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,s),2>t[o]&&(e=d[l],n=d[c],d[l]=function(){for(var t=0,n=arguments;t<n[o];++t)e.call(this,n[t])},d[c]=function(){for(var t=0,e=arguments;t<e[o];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:c](t),!!e});else{if(f)try{v({},"support")}catch(t){f=!1}h.polyfill=!0,i.DOMTokenList=h,p(i.Element,"classList","className"),p(i.HTMLLinkElement,"relList","rel"),p(i.HTMLAnchorElement,"relList","rel"),p(i.HTMLAreaElement,"relList","rel")}}();var T=function(){var t=document.styleSheets[0];return"insertRule"in t?function(t,e,n,i){t.insertRule(e+"{"+n+"}",i)}:"addRule"in t?function(t,e,n,i){t.addRule(e,n,i)}:void 0}(),E=function(){return document.styleSheets[0].cssRules?function(t){return t.cssRules.length}:function(t){return t.rules.length}}(),C=!1;try{var w=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,w)}catch(t){}var L=!!C&&{passive:!0},D=navigator.userAgent,M=localStorage;M.tnsApp?M.tnsApp!==D&&(M.tnsApp=D,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){M.removeItem(t)})):M.tnsApp=D;var O=document,A=window,N={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},P=e(M.tnsCalc||n("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,r=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],o=0;o<3;o++)if(a=r[o],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}())),k=e(M.tnsSubpixel||n("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var r=a.offsetTop!==t.offsetTop;return n.removeChild(i),r}())),S=e(M.tnsCSSMQ||n("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}())),W=e(M.tnsTf||n("tnsTf",p(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),I=e(M.tnsTsDu||n("tnsTsDu",p(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),H=e(M.tnsTsDe||n("tnsTsDe",p(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),R=e(M.tnsAnDu||n("tnsAnDu",p(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),z=e(M.tnsAnDe||n("tnsAnDe",p(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),B=e(M.tnsTsEn||n("tnsTsEn",m(I,"Transition"))),j=e(M.tnsAnEn||n("tnsAnEn",m(R,"Animation")));return S||(k=!1),function(e){function n(t){var n=e[t];return!n&&ee&&te.indexOf(t)>=0&&ee.forEach(function(e){Zt[e][t]&&(n=!0)}),n}function c(t,n){n=n?n:$t;var i;if("items"===t&&c("fixedWidth"))i=Math.floor(n/(c("fixedWidth")+c("gutter")));else if("slideBy"!==t||Bt)if("edgePadding"!==t||Bt)if("autoHeight"!==t||Bt&&"outer"!==ue){if(i=e[t],ee&&te.indexOf(t)>=0)for(var a=0,r=ee.length;a<r;a++){var o=ee[a];if(!(n>=o))break;t in Zt[o]&&(i=Zt[o][t])}}else i=!0;else i=!1;else i="page";return"items"===t&&(i=Math.max(1,Math.min(Jt,i))),"slideBy"===t&&"page"===i&&(i=c("items")),i}function p(t){return P?P+"("+100*t+"% / "+Ce+")":100*t/Ce+"%"}function m(t,e,n){var i="";if(t){var a=t;e&&(a+=e),i=n?"margin: 0px "+($t%(n+e)+e)/2+"px":Ut?"margin: 0 "+t+"px 0 "+a+"px;":"padding: "+a+"px 0 "+t+"px 0;"}else if(e&&!n){var r=Ut?"right":"bottom";i="margin-"+r+": -"+e+"px;"}return i}function C(t,e,n){n=Math.min(Jt,n);return t?(t+e)*Ce+"px":P?P+"("+100*Ce+"% / "+n+")":100*Ce/n+"%"}function w(t,e,n){n=Math.min(Jt,n);var i="";if(Ut){if(i="width:",t)i+=t+e+"px";else{var a=Bt?Ce:Math.min(Jt,n);i+=P?P+"(100% / "+a+")":100/a+"%"}i+=Fe+";"}return i}function L(t){var e="";if(t!==!1){e=(Ut?"padding-":"margin-")+(Ut?"right":"bottom")+": "+t+"px;"}return e}function D(t){t=t||A.event,clearTimeout(oe),oe=setTimeout(function(){$t!==Vt.clientWidth&&(M(),"outer"===ue&&He.emit("outerResized",Wt(t)))},100)}function M(){var t=ne,n=Ae,i=le,a=_e;if($t=Vt.clientWidth,qt=Xt.clientWidth,ee&&(ne=G()),t!==ne||ve){var r=he,o=ge,s=ve,l=fe,u=de,d=ne>0?Zt[ee[ne-1]]:e;if(le=c("items"),ce=c("slideBy"),_e=Jt<=le,le!==i&&(Se=Ce-le-Pe,Bn()),_e!==a&&_e&&(Ae=Bt?Ee:0),t!==ne&&(pe=d.speed||c("speed"),fe=d.edgePadding||c("edgePadding"),de=d.gutter||c("gutter"),ve=d.fixedWidth||c("fixedWidth"),ve!==s&&rt(),(ge=c("autoHeight"))!==o&&(ge||(Xt.style.height=""))),he=!_e&&(d.arrowKeys||c("arrowKeys")),he!==r&&(he?y(O,Ke):g(O,Ke)),Je){var h=sn,p=ln;sn=!_e&&(d.controls||c("controls")),ln=d.controlsText||c("controlsText"),sn!==h&&(sn?v(cn):f(cn)),ln!==p&&(nn.innerHTML=ln[0],an.innerHTML=ln[1])}if($e){var b=dn;dn=!_e&&(d.nav||c("nav")),dn!==b&&(dn?(v(fn),St()):f(fn))}if(tn){var x=Sn;Sn=!_e&&(d.touch||c("touch")),Sn!==x&&Bt&&(Sn?y(Kt,Ye):g(Kt,Ye))}if(en){var D=Hn;Hn=!_e&&(d.mouseDrag||c("mouseDrag")),Hn!==D&&Bt&&(Hn?y(Kt,Qe):g(Kt,Qe))}if(Ze){var M=bn,A=Cn,N=On,P=En;if(_e?bn=Cn=On=!1:(bn=d.autoplay||c("autoplay"),bn?(Cn=d.autoplayHoverPause||c("autoplayHoverPause"),On=d.autoplayResetOnVisibility||c("autoplayResetOnVisibility")):Cn=On=!1),En=d.autoplayText||c("autoplayText"),xn=d.autoplayTimeout||c("autoplayTimeout"),bn!==M&&(bn?(v(wn),Ln||ht()):(f(wn),Ln&&pt())),Cn!==A&&(Cn?y(Kt,Ve):g(Kt,Ve)),On!==N&&(On?y(O,Xe):g(O,Xe)),En!==P){var k=bn?1:0,W=wn.innerHTML,I=W.length-P[k].length;W.substring(I)===P[k]&&(wn.innerHTML=W.substring(0,I)+En[k])}}if(!S){fe===l&&de===u||(Xt.style.cssText=m(fe,de,ve)),Bt&&Ut&&(ve!==s||de!==u||le!==i)&&(Kt.style.width=C(ve,de,le));var H=w(ve,de,le);de!==u&&(H+=L(de)),H.length>0&&(be.removeRule(E(be)-1),T(be,"#"+Ge+" .tns-item",H,E(be))),ve||Ae!==n||st(0)}Ae!==n&&(He.emit("indexChanged",Wt()),st(0),Ne=Ae),le!==i&&(U(),J(),nt(),St(),$(),navigator.msMaxTouchPoints&&Q())}Ut||(Y(),Pt(),rt()),_(),V()}function G(){return ne=0,ee.forEach(function(t,e){$t>=t&&(ne=e+ie)}),ne}function _(){if(ve&&Ee)if(_e){if(!Qt[0].classList.contains("tns-transparent")){fe&&(Xt.style.margin="0");for(var t=Ee;t--;)Qt[t].classList.add("tns-transparent"),Qt[Ce-t-1].classList.add("tns-transparent")}}else if(fe&&($t<=ve+de?"0px"!==Xt.style.margin&&(Xt.style.margin="0"):Xt.style.cssText=m(fe,de,ve)),Qt[0].classList.contains("tns-transparent"))for(var t=Ee;t--;)Qt[t].classList.remove("tns-transparent"),Qt[Ce-t-1].classList.remove("tns-transparent")}function F(){Ln&&(pt(),Dn=!0)}function q(){!Ln&&Dn&&(ht(),Dn=!1)}function U(){if(xe){var t=Ae,e=Ae+le;for(fe&&(t-=1,e+=1);t<e;t++)[].forEach.call(Qt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[B]=function(t){t.stopPropagation()},y(t,e),t.classList.contains("loaded")||(t.src=l(t,"data-src"),t.classList.add("loaded"))})}}function V(){if(ge){for(var t=[],e=Ae;e<Ae+le;e++)[].forEach.call(Qt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?K():X(t)}}function X(t){t.forEach(function(e,n){h(e)&&t.splice(n,1)}),0===t.length?K():setTimeout(function(){X(t)},16)}function K(){for(var t,e=[],n=Ae;n<Ae+le;n++)e.push(Qt[n].offsetHeight);t=Math.max.apply(null,e),Xt.style.height!==t&&(I&&it(pe),Xt.style.height=t+"px")}function Y(){re=[0];for(var t,e=Qt[0].getBoundingClientRect().top,n=1;n<Ce;n++)t=Qt[n].getBoundingClientRect().top,re.push(t-e)}function Q(){Vt.style.msScrollSnapPointsX="snapInterval(0%, "+100/le+"%)"}function J(){for(var t=Ce;t--;){var e=Qt[t];t>=Ae&&t<Ae+le?s(e,"tabindex")&&(u(e,{"aria-hidden":"false"}),d(e,["tabindex"])):s(e,"tabindex")||u(e,{"aria-hidden":"true",tabindex:"-1"})}}function $(){dn&&(mn=pn!==-1?pn:(Ae-Pe)%Jt,pn=-1,mn!==yn&&(u(un[yn],{tabindex:"-1","aria-selected":"false"}),u(un[mn],{tabindex:"0","aria-selected":"true"}),yn=mn))}function Z(t){return"button"===t.nodeName.toLowerCase()}function tt(t){return"true"===t.getAttribute("aria-disabled")}function et(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function nt(){if(sn&&!ye){var t=rn?nn.disabled:tt(nn),e=on?an.disabled:tt(an),n=Ae===ke,i=!me&&Ae===Se;n&&!t&&et(rn,nn,!0),!n&&t&&et(rn,nn,!1),i&&!e&&et(on,an,!0),!i&&e&&et(on,an,!1)}}function it(t,e){t=t?t/1e3+"s":"",e=e||Kt,e.style[I]=t,Bt||(e.style[R]=t),Ut||(Xt.style[I]=t)}function at(){var t;if(Ut)if(ve)t=-(ve+de)*Ae+"px";else{var e=W?Ce:le;t=100*-Ae/e+"%"}else t=-re[Ae]+"px";return t}function rt(t){t||(t=at()),Kt.style[De]=Me+t+Oe}function ot(t,e,n,i){for(var a=t,r=t+le;a<r;a++){var o=Qt[a];i||(o.style.left=100*(a-Ae)/le+"%"),I&&it(pe,o),_t&&H&&(o.style[H]=o.style[z]=_t*(a-t)/1e3+"s"),o.classList.remove(e),o.classList.add(n),i&&Te.push(o)}}function st(t,e){void 0===t&&(t=pe),I&&it(t),jn(t,e)}function lt(){Le&&Bn(),Ae!==Ne&&(He.emit("indexChanged",Wt()),He.emit("transitionStart",Wt()),We=!0,st())}function ct(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(He.emit("transitionEnd",Wt(t)),!Bt&&Te.length>0)for(var n=0;n<le;n++){var i=Te[n];i.style.left="",I&&it(0,i),_t&&H&&(i.style[H]=i.style[z]=""),i.classList.remove(Gt),i.classList.add(Ft)}if(!t||!Bt&&t.target.parentNode===Kt||t.target===Kt&&e(t.propertyName)===e(De)){if(!Le){var a=Ae;Bn(),Ae!==a&&(I&&it(0),rt(),He.emit("indexChanged",Wt()))}J(),dn&&vn.indexOf(Ae%Jt)===-1&&St(),$(),nt(),U(),V(),"inner"===ue&&He.emit("innerLoaded",Wt()),We=!1,Ne=Ae}}function ut(t){if(!_e)if("prev"===t)dt(null,-1);else if("next"===t)dt(null,1);else if(!We){var e=Ae%Jt,n=0;if(e<0&&(e+=Jt),"first"===t)n=-e;else if("last"===t)n=Jt-le-e;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){var i=t%Jt;i<0&&(i+=Jt),!ye&&fe&&(i+=1),n=i-e}Ae+=n,Ae%Jt!=Ne%Jt&&lt()}}function dt(t,e){if(!We){var n;if(!e){t=t||A.event;for(var i=t.target||t.srcElement;i!==cn&&!s(i,"data-controls");)i=i.parentNode}(e===-1||i===nn)&&Ae>ke?(Ae-=ce,n=!0):1!==e&&i!==an||(me&&Ae===Se?ut(0):Ae<Se&&(Ae+=ce,n=!0)),n&&lt()}}function ft(t){if(!We){t=t||A.event;for(var e,n=t.target||t.srcElement;n!==fn&&!s(n,"data-nav");)n=n.parentNode;s(n,"data-nav")&&(e=pn=[].indexOf.call(un,n),ut(e))}}function vt(t,e){u(wn,{"data-action":t}),wn.innerHTML=Mn[0]+t+Mn[1]+e}function ht(){yt(),vt("stop",En[1]),Ln=!0}function pt(){mt(),vt("start",En[0]),Ln=!1}function mt(){Ln="paused",clearInterval(gn)}function yt(){Ln!==!0&&(clearInterval(gn),gn=setInterval(function(){dt(null,Tn)},xn))}function gt(){Ln?pt():ht()}function bt(){An!=O.hidden&&Ln!==!1&&(O.hidden?mt():yt()),An=O.hidden}function xt(t){switch(t=t||A.event,t.keyCode){case N.LEFT:dt(null,-1);break;case N.RIGHT:dt(null,1)}}function Tt(t){switch(t=t||A.event,t.keyCode){case N.LEFT:case N.UP:case N.PAGEUP:nn.disabled||dt(null,-1);break;case N.RIGHT:case N.DOWN:case N.PAGEDOWN:an.disabled||dt(null,1);break;case N.HOME:ut(0);break;case N.END:ut(Jt-1)}}function Et(t){t.focus()}function Ct(t){function n(t){return e.navContainer?t:vn[t]}var i=O.activeElement;if(s(i,"data-nav")){t=t||A.event;var a=t.keyCode,r=[].indexOf.call(un,i),o=vn.length,l=vn.indexOf(r);switch(e.navContainer&&(o=Jt,l=r),a){case N.LEFT:case N.PAGEUP:l>0&&Et(un[n(l-1)]);break;case N.UP:case N.HOME:l>0&&Et(un[n(0)]);break;case N.RIGHT:case N.PAGEDOWN:l<o-1&&Et(un[n(l+1)]);break;case N.DOWN:case N.END:l<o-1&&Et(un[n(o-1)]);break;case N.ENTER:case N.SPACE:pn=r,ut(r)}}}function wt(){st(0,Kt.scrollLeft()),Ne=Ae}function Lt(t){return t.target||t.srcElement}function Dt(t){return"a"===t.tagName.toLowerCase()}function Mt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ot(t){t=t||A.event,Dt(Lt(t))&&"touchstart"!==t.type&&Mt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Wn=parseInt(e.clientX),In=parseInt(e.clientY),Nn=parseFloat(Kt.style[De].replace(Me,"").replace(Oe,"")),"touchstart"===t.type?He.emit("touchStart",Wt(t)):(He.emit("dragStart",Wt(t)),Rn=!0)}function At(t){if(t=t||A.event,Rn&&"mousemove"===t.type&&!zn&&(zn=!0),null!==Wn){Dt(Lt(t))&&"touchmove"!==t.type&&Mt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Pn=parseInt(n.clientX)-Wn,kn=parseInt(n.clientY)-In,o(r(kn,Pn),15)===e.axis){se=!0,"touchmove"===t.type?He.emit("touchMove",Wt(t)):He.emit("dragMove",Wt(t));var i=Nn;if(Ut)if(ve)i+=Pn,i+="px";else{var a=W?Pn*le*100/(qt*Ce):100*Pn/qt;i+=a,i+="%"}else i+=kn,i+="px";W&&it(0),Kt.style[De]=Me+i+Oe}}}function Nt(t){if(t=t||A.event,Rn&&(Rn=!1),se){se=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Pn=parseInt(e.clientX)-Wn,kn=parseInt(e.clientY)-In,Wn=In=null,Ut){var n=-Pn*le/qt;n=Pn>0?Math.floor(n):Math.ceil(n),Ae+=n}else{var i=-(Nn+kn);if(i<=0)Ae=ke;else if(i>=re[re.length-1])Ae=Se;else{var a=0;do{a++,Ae=kn<0?a+1:a}while(a<Ce&&i>=re[a+1])}}0===t.type.indexOf("touch")?He.emit("touchEnd",Wt(t)):He.emit("dragEnd",Wt(t)),lt()}if(zn){zn=!1;var r=Lt(t);Dt(r)&&y(r,{click:function t(e){Mt(e),g(r,{click:t})}})}}function Pt(){Xt.style.height=re[Ae+le]-re[Ae]+"px"}function kt(){vn=[];for(var t=!ye&&fe?Ae-1:Ae,e=t%Jt%le;e<Jt;)!ye&&e+le>Jt&&(e=Jt-le),vn.push(e),e+=le;(ye&&vn.length*le<Jt||!ye&&vn[0]>0)&&vn.unshift(0)}function St(){dn&&!e.navContainer&&(kt(),vn!==hn&&(hn.length>0&&hn.forEach(function(t){u(un[t],{hidden:""})}),vn.length>0&&vn.forEach(function(t){d(un[t],"hidden")}),hn=vn))}function Wt(t){return{container:Kt,slideItems:Qt,navContainer:fn,navItems:un,controlsContainer:cn,prevButton:nn,nextButton:an,items:le,slideBy:ce,cloneCount:Ee,slideCount:Jt,slideCountNew:Ce,index:Ae,indexCached:Ne,navCurrent:mn,navCurrentCached:yn,visibleNavIndexes:vn,visibleNavIndexesCached:hn,event:t||{}}}if(e=t({container:O.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(t){"string"==typeof e[t]&&(e[t]=O.querySelector(e[t]))}),e.container&&e.container.nodeName&&!(e.container.children.length<2)){if(e.responsive){var It={},Ht=e.responsive;for(var Rt in Ht){var zt=Ht[Rt];It[Rt]="number"==typeof zt?{items:zt}:zt}e.responsive=It,It=null}var Bt="carousel"===e.mode;if(!Bt){e.axis="horizontal",e.rewind=!1,e.loop=!0;var jt="tns-fadeIn",Gt="tns-fadeOut",_t=!1,Ft=e.animateNormal||"tns-normal";B&&j&&(jt=e.animateIn||jt,Gt=e.animateOut||Gt,_t=e.animateDelay||_t)}var qt,Ut="horizontal"===e.axis,Vt=O.createElement("div"),Xt=O.createElement("div"),Kt=e.container,Yt=Kt.parentNode,Qt=Kt.children,Jt=Qt.length,$t=Yt.clientWidth,Zt=e.responsive,te=[],ee=!1,ne=0,ie=0;if(Zt){ee=Object.keys(Zt).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e}),ee.indexOf(0)<0&&(ie=1),ee.forEach(function(t){te=te.concat(Object.keys(Zt[t]))});var ae=[];te.forEach(function(t){ae.indexOf(t)<0&&ae.push(t)}),te=ae,ne=G()}var re,oe,se,le=c("items"),ce="page"===c("slideBy")?le:c("slideBy"),ue=e.nested,de=c("gutter"),fe=c("edgePadding"),ve=c("fixedWidth"),he=c("arrowKeys"),pe=c("speed"),me=e.rewind,ye=!me&&e.loop,ge=c("autoHeight"),be=a(),xe=e.lazyload,Te=[],Ee=ye?2*Jt:n("edgePadding")?1:0,Ce=Bt?Jt+2*Ee:Jt+Ee,we=!(!ve||ye||fe),Le=!Bt||!ye,De=Ut?"left":"top",Me="",Oe="",Ae=Bt?Ee:0,Ne=Ae,Pe=!ye&&n("edgePadding")?1:0,ke=Pe,Se=Ce-le-Pe,We=!1,Ie=e.onInit,He=new b,Re=Kt.id,ze=Kt.className,Be=Qt[0].id,je=Qt[0].className,Ge=Kt.id||i(),_e=Jt<=le,Fe="inner"===ue?" !important":"",qe={click:dt,keydown:Tt},Ue={click:ft,keydown:Ct},Ve={mouseover:F,mouseout:q},Xe={visibilitychange:bt},Ke={keydown:xt},Ye={touchstart:Ot,touchmove:At,touchend:Nt,touchcancel:Nt},Qe={mousedown:Ot,mousemove:At,mouseup:Nt,mouseleave:Nt},Je=n("controls"),$e=n("nav"),Ze=n("autoplay"),tn=n("touch"),en=n("mouseDrag");if(Je)var nn,an,rn,on,sn=c("controls"),ln=c("controlsText"),cn=e.controlsContainer;if($e)var un,dn=c("nav"),fn=e.navContainer,vn=[],hn=vn,pn=-1,mn=0,yn=0;if(Ze)var gn,bn=c("autoplay"),xn=c("autoplayTimeout"),Tn="forward"===e.autoplayDirection?1:-1,En=c("autoplayText"),Cn=c("autoplayHoverPause"),wn=e.autoplayButton,Ln=!1,Dn=!1,Mn=["<span class='tns-visually-hidden'>"," animation</span>"],On=c("autoplayResetOnVisibility"),An=!1;if(tn)var Nn,Pn,kn,Sn=c("touch"),Wn=null,In=null;if(en)var Hn=c("mouseDrag"),Rn=!1,zn=!1;_e&&(sn=dn=Sn=Hn=he=bn=Cn=On=!1),W&&(De=W,Me="translate",Me+=Ut?"X(":"Y(",Oe=")"),function(){Vt.appendChild(Xt),Yt.insertBefore(Vt,Kt),Xt.appendChild(Kt),qt=Xt.clientWidth;var t="tns-outer",i="tns-inner",a=" tns-slider tns-"+e.mode;if(Bt&&(Ut&&(n("edgePadding")||n("gutter")&&!e.fixedWidth)?t+=" tns-ovh":i+=" tns-ovh"),Vt.className=t,Xt.className=i,Xt.id=Ge+"-iw",ge&&(Xt.className+=" tns-ah",Xt.style[I]=pe/1e3+"s"),""===Kt.id&&(Kt.id=Ge),a+=k?" tns-subpixel":" tns-no-subpixel",a+=P?" tns-calc":" tns-no-calc",Bt&&(a+=" tns-"+e.axis),Kt.className+=a,Bt&&B){var r={};r[B]=ct,y(Kt,r)}t=i=a=null;for(var o=0;o<Jt;o++){var s=Qt[o];s.id=Ge+"-item"+o,s.classList.add("tns-item"),!Bt&&Ft&&s.classList.add(Ft),u(s,{"aria-hidden":"true",tabindex:"-1"})}if(ye||fe){for(var l=O.createDocumentFragment(),v=O.createDocumentFragment(),h=Ee;h--;){var g=h%Jt,b=Qt[g].cloneNode(!0);if(d(b,"id"),v.insertBefore(b,v.firstChild),Bt){var x=Qt[Jt-1-g].cloneNode(!0);d(x,"id"),l.appendChild(x)}}Kt.insertBefore(l,Kt.firstChild),Kt.appendChild(v),Qt=Kt.children}for(var N=Ae;N<Ae+le;N++){var s=Qt[N];u(s,{"aria-hidden":"false"}),d(s,["tabindex"]),Bt||(s.style.left=100*(N-Ae)/le+"%",s.classList.remove(Ft),s.classList.add(jt))}if(Bt&&Ut)if(k){var W=A.getComputedStyle(Qt[0]).fontSize;W.indexOf("em")>0&&(W=16*parseFloat(W)+"px"),T(be,"#"+Ge,"font-size:0;",E(be)),T(be,"#"+Ge+" .tns-item","font-size:"+W+";",E(be))}else[].forEach.call(Qt,function(t,e){t.style.marginLeft=p(e)});if(S){var H=m(e.edgePadding,e.gutter,e.fixedWidth);T(be,"#"+Ge+"-iw",H,E(be)),Bt&&Ut&&(H="width:"+C(e.fixedWidth,e.gutter,e.items),T(be,"#"+Ge,H,E(be))),(Ut||e.gutter)&&(H=w(e.fixedWidth,e.gutter,e.items)+L(e.gutter),T(be,"#"+Ge+" .tns-item",H,E(be)))}else if(Xt.style.cssText=m(fe,de,ve),Bt&&Ut&&(Kt.style.width=C(ve,de,le)),Ut||de){var H=w(ve,de,le)+L(de);T(be,"#"+Ge+" .tns-item",H,E(be))}if(Ut||(Y(),Pt()),Zt&&S&&ee.forEach(function(t){var e=Zt[t],i="",a="",r="",o="",s=c("items",t),l=c("fixedWidth",t),u=c("edgePadding",t),d=c("gutter",t);("edgePadding"in e||"gutter"in e)&&(a="#"+Ge+"-iw{"+m(u,d,l)+"}"),Bt&&Ut&&("fixedWidth"in e||"gutter"in e||"items"in e)&&(r="#"+Ge+"{width:"+C(l,d,s)+"}"),("fixedWidth"in e||n("fixedWidth")&&"gutter"in e)&&(o+=w(l,d,s)),"gutter"in e&&(o+=L(d)),o.length>0&&(o="#"+Ge+" .tns-item{"+o+"}"),i=a+r+o,i.length>0&&be.insertRule("@media (min-width: "+t/16+"em) {"+i+"}",be.cssRules.length)}),Bt&&rt(),navigator.msMaxTouchPoints&&(Vt.classList.add("ms-touch"),y(Vt,{scroll:wt}),Q()),$e){if(fn)u(fn,{"aria-label":"Carousel Pagination"}),un=fn.children,[].forEach.call(un,function(t,e){u(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":Ge+"-item"+e})});else{for(var R="",N=0;N<Jt;N++)R+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+Ge+"-item"+N+'" hidden type="button"></button>';R='<div class="tns-nav" aria-label="Carousel Pagination">'+R+"</div>",Vt.insertAdjacentHTML("afterbegin",R),[].forEach.call(Vt.children,function(t){t.classList.contains("tns-nav")&&(fn=t)}),un=fn.children,St()}u(un[0],{tabindex:"0","aria-selected":"true"}),y(fn,Ue),dn||f(fn)}if(Ze){var z=bn?"stop":"start";wn?u(wn,{"data-action":z}):(Xt.insertAdjacentHTML("beforebegin",'<button data-action="'+z+'" type="button">'+Mn[0]+z+Mn[1]+En[0]+"</button>"),wn=Vt.querySelector("[data-action]")),y(wn,{click:gt}),bn?(ht(),Cn&&y(Kt,Ve),On&&y(Kt,Xe)):f(wn)}Je&&(cn?(nn=cn.children[0],an=cn.children[1],u(cn,{"aria-label":"Carousel Navigation",tabindex:"0"}),u(nn,{"data-controls":"prev"}),u(an,{"data-controls":"next"}),u(cn.children,{"aria-controls":Ge,tabindex:"-1"})):(Vt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ge+'" type="button">'+ln[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ge+'" type="button">'+ln[1]+"</button></div>"),[].forEach.call(Vt.children,function(t){t.classList.contains("tns-controls")&&(cn=t)}),nn=cn.children[0],an=cn.children[1]),rn=Z(nn),on=Z(an),ye||et(rn,nn,!0),y(cn,qe),sn||f(cn)),Sn&&y(Kt,Ye),Hn&&y(Kt,Qe),he&&y(O,Ke),"inner"===ue?He.on("outerResized",function(){M(),He.emit("innerLoaded",Wt())}):(y(A,{resize:D}),"outer"===ue&&He.on("innerLoaded",V)),U(),V(),_(),"function"==typeof Ie&&Ie(Wt()),"inner"===ue&&He.emit("innerLoaded",Wt())}();var Bn=function(){return ye?function(){var t=ke,e=Se;Bt&&(t+=ce,e-=ce);var n=de?de:0;if(ve&&$t%(ve+n)>n&&(e-=1),Ae>e)for(;Ae>=t+Jt;)Ae-=Jt;else if(Ae<t)for(;Ae<=e-Jt;)Ae+=Jt}:function(){Ae=Math.max(ke,Math.min(Se,Ae))}}(),jn=function(){return Bt?function(t,e){if(e||(e=at()),we&&Ae===Se){var n=W?100*-((Ce-le)/Ce):100*-(Ce/le-1);e=Math.max(parseFloat(e),n)+"%"}I||!t?(rt(e),0===pe&&ct()):x(Kt,De,Me,Oe,e,pe,ct),Ut||Pt()}:function(){Te=[];var t={};t[B]=t[j]=ct,g(Qt[Ne],t),y(Qt[Ae],t),ot(Ne,jt,Gt,!0),ot(Ae,Ft,jt),B&&j&&0!==pe||setTimeout(ct,0)}}();return{getInfo:Wt,events:He,goTo:ut,destroy:function(){if(be.disabled=!0,ye)for(var t=Ee;t--;)Qt[0].remove(),Qt[Qt.length-1].remove();for(var n=Jt;n--;)Qt[n].id=Be||"",Qt[n].className=je||"";if(d(Qt,["style","aria-hidden","tabindex"]),Qt=Ge=Jt=Ce=Ee=null,sn&&(g(cn,qe),e.controlsContainer&&(d(cn,["aria-label","tabindex"]),d(cn.children,["aria-controls","aria-disabled","tabindex"])),cn=nn=an=null),dn&&(g(fn,Ue),e.navContainer&&(d(fn,["aria-label"]),d(un,["aria-selected","aria-controls","tabindex"])),fn=un=null),bn&&(g(wn,{click:gt}),g(Kt,Ve),g(Kt,Xe),e.autoplayButton&&d(wn,["data-action"])),Kt.id=Re||"",Kt.className=ze||"",Kt.style="",Bt&&B){var i={};i[B]=ct,g(Kt,i)}g(Kt,Ye),g(Kt,Qe),Yt.insertBefore(Kt,Vt),Vt.remove(),Vt=Xt=null,g(O,Ke),g(A,{resize:D})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
