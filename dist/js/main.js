function stickyHeader(){var e=document.getElementById("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")}$(document).ready(function(e){stickyHeader(),$("pre code").each(function(e,t){hljs.highlightBlock(t)}),$(".slider").slick({dots:!1,infinite:!0,speed:400,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]}),(new WOW).init(),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on("click",function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-"90"},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),$("code").each(function(){if($(this).hasClass("html")){var e=$(this),t=e.html().trim();e.empty(),e.text(t)}}),hljs.initHighlightingOnLoad()}),window.onscroll=function(){stickyHeader()};