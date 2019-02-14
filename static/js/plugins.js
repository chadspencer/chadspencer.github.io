(function(h,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():h.Rellax=g()})(this,function(){var h=function(g,n){var a=Object.create(h.prototype),k=0,p=0,l=0,q=0,e=[],r=!0,z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},A=window.transformProp||function(){var a=document.createElement("div");
if(null===a.style.transform){var b=["Webkit","Moz","ms"],d;for(d in b)if(void 0!==a.style[b[d]+"Transform"])return b[d]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1,callback:function(){}};n&&Object.keys(n).forEach(function(c){a.options[c]=n[c]});g||(g=".rellax");var m="string"===typeof g?document.querySelectorAll(g):[g];if(0<m.length)a.elems=m;else throw Error("The elements you're trying to select don't exist.");if(a.options.wrapper&&
!a.options.wrapper.nodeType)if(m=document.querySelector(a.options.wrapper))a.options.wrapper=m;else throw Error("The wrapper you're trying to use don't exist.");var u=function(){for(var c=0;c<e.length;c++)a.elems[c].style.cssText=e[c].style;e=[];p=window.innerHeight;q=window.innerWidth;v();for(c=0;c<a.elems.length;c++){var b=a.elems[c],d=b.getAttribute("data-rellax-percentage"),t=b.getAttribute("data-rellax-speed"),g=b.getAttribute("data-rellax-zindex")||0,h=a.options.wrapper?a.options.wrapper.scrollTop:
window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=a.options.vertical?d||a.options.center?h:0:0,k=a.options.horizontal?d||a.options.center?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;h=f+b.getBoundingClientRect().top;var l=b.clientHeight||b.offsetHeight||b.scrollHeight,m=k+b.getBoundingClientRect().left,n=b.clientWidth||b.offsetWidth||b.scrollWidth;f=d?d:(f-h+p)/(l+p);d=d?d:(k-m+q)/(n+q);a.options.center&&(f=d=.5);t=t?t:a.options.speed;
d=w(d,f,t);b=b.style.cssText;f="";0<=b.indexOf("transform")&&(f=b.indexOf("transform"),f=b.slice(f),f=(k=f.indexOf(";"))?" "+f.slice(11,k).replace(/\s/g,""):" "+f.slice(11).replace(/\s/g,""));e.push({baseX:d.x,baseY:d.y,top:h,left:m,height:l,width:n,speed:t,style:b,transform:f,zindex:g})}r&&(window.addEventListener("resize",u),r=!1);x()},v=function(){var c=k,b=l;k=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;
l=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;return c!=k&&a.options.vertical||b!=l&&a.options.horizontal?!0:!1},w=function(c,b,d){var e={};c=100*d*(1-c);b=100*d*(1-b);e.x=a.options.round?Math.round(c):Math.round(100*c)/100;e.y=a.options.round?Math.round(b):Math.round(100*b)/100;return e},y=function(){v()&&!1===r&&x();z(y)},x=function(){for(var c,b=0;b<a.elems.length;b++){c=w((l-e[b].left+q)/(e[b].width+
q),(k-e[b].top+p)/(e[b].height+p),e[b].speed);var d=c.y-e[b].baseY,g=c.x-e[b].baseX;a.elems[b].style[A]="translate3d("+(a.options.horizontal?g:"0")+"px,"+(a.options.vertical?d:"0")+"px,"+e[b].zindex+"px) "+e[b].transform}a.options.callback(c)};a.destroy=function(){for(var c=0;c<a.elems.length;c++)a.elems[c].style.cssText=e[c].style;r||(window.removeEventListener("resize",u),r=!0)};u();y();a.refresh=u;return a};return h});

/*
 *	SnapPoint jQuery Plugin
 *	Version 2.05
 *	Author: Robert Spangler (http://robspangler.com/)
 *
 *	Copyright (c) 2012
 *	Licensed under the MIT license.
 *
 *
 *	Left-to-Right snap added by
 *
 *	Ken Frederick
 *	ken.frederick@gmx.de
 *
 *	http://cargocollective.com/kenfrederick/
 *	http://kenfrederick.blogspot.com/
 *
 */
(function(b){jQuery.browser={};jQuery.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());jQuery.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase());jQuery.browser.opera=/opera/.test(navigator.userAgent.toLowerCase());jQuery.browser.msie=/msie/.test(navigator.userAgent.toLowerCase());var a=null;b.fn.snapPoint=function(c,f){var e={scrollDelay:550,scrollSpeed:90,outerTopOffset:200,innerTopOffset:0,outerLeftOffset:200,innerLeftOffset:0,ease:"swing"};c=b.extend({},e,c);elArray=this;b(window).scroll(function(){if(a){clearTimeout(a)}a=setTimeout(d,c.scrollDelay)});a=null;function d(){elArray.each(function(){var g=b(this).position();elementPosTop=g.top;elementPosLeft=g.left;windowPosTop=b(jQuery.browser.webkit?"body":"html").scrollTop();if(windowPosTop+c.outerTopOffset>=elementPosTop&&elementPosTop+c.innerTopOffset>=windowPosTop&&windowPosTop!=elementPosTop){b(jQuery.browser.webkit?"body":"html").animate({scrollTop:elementPosTop},c.scrollSpeed,c.ease,f)}windowPosLeft=b(jQuery.browser.webkit?"body":"html").scrollLeft();if(windowPosLeft+c.outerLeftOffset>=elementPosLeft&&elementPosLeft+c.innerLeftOffset>=windowPosLeft&&windowPosLeft!=elementPosLeft){b(jQuery.browser.webkit?"body":"html").animate({scrollLeft:elementPosLeft},c.scrollSpeed,c.ease,f)}})}}})(jQuery);
