if(document.body.clientWidth>992){function getBasicInfo(){var o=$(window).height(),n=$("body")[0].scrollHeight,e=$(window).scrollTop();return{ViewH:o,DocH:n,ScrollTop:e,Band_H:e/(n-o)*100,S_V:n-o}}function show(o){o.ScrollTop>.001?$(".neko").css("display","block"):$(".neko").css("display","none")}!function(o){o.fn.nekoScroll=function(n){var e=o.extend({top:"0",scroWidth:"6px",z_index:9999,zoom:.9,borderRadius:"5px",right:"20px",nekoImg:"https://bu.dusays.com/2022/07/20/62d812db74be9.png",hoverMsg:"喵喵喵~",color:"#1BF3F8",during:500,blog_body:"body"},n),r=""!==this.prop("className")?"."+this.prop("className"):""!==this.prop("id")?"#"+this.prop("id"):this.prop("nodeName");0==o(".neko").length&&this.after('<div class="neko" id='+e.nekoname+' data-msg="'+e.hoverMsg+'"></div>');let i=getBasicInfo();return o(r).css({position:"fixed",width:e.scroWidth,top:e.top,height:i.Band_H*e.zoom*i.ViewH*.01+"px","z-index":e.z_index,"background-color":e.bgcolor,"border-radius":e.borderRadius,right:e.right,"background-image":"url("+e.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"}),o("#"+e.nekoname).css({position:"fixed",top:i.Band_H*e.zoom*i.ViewH*.01-50+"px","z-index":10*e.z_index,right:e.right,"background-image":"url("+e.nekoImg+")"}),show(getBasicInfo()),o(window).scroll((function(){let n=getBasicInfo();show(n),o(r).css({position:"fixed",width:e.scroWidth,top:e.top,height:n.Band_H*e.zoom*n.ViewH*.01+"px","z-index":e.z_index,"background-color":e.bgcolor,"border-radius":e.borderRadius,right:e.right,"background-image":"url("+e.scImg+")","background-image":"-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)","border-radius":"2em","background-size":"contain"}),o("#"+e.nekoname).css({position:"fixed",top:n.Band_H*e.zoom*n.ViewH*.01-50+"px","z-index":10*e.z_index,right:e.right,"background-image":"url("+e.nekoImg+")"}),n.ScrollTop==n.S_V?o("#"+e.nekoname).addClass("showMsg"):(o("#"+e.nekoname).removeClass("showMsg"),o("#"+e.nekoname).attr("data-msg",e.hoverMsg))})),this.click((function(o){btf.scrollToDest(0,500)})),o("#"+e.nekoname).click((function(){btf.scrollToDest(0,500)})),this}}(jQuery),$(document).ready((function(){$("#myscoll").nekoScroll({bgcolor:"rgb(0 0 0 / .5)",borderRadius:"2em",zoom:.9})}))}