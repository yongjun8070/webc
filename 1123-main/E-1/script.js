$(document).ready(function(){
    $(function(){
        $(".gtab").click(function(){
            $(".gallery").show();
            $(".notice").hide();
        })
    })
    $(function(){
        $(".ntab").click(function(){
            $(".gallery").hide();
            $(".notice").show();
        })
    })
})
$(function(){
    $(".menu>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    })
    $(".menu>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })
})

setInterval(function(){
        $(".slidewrap").delay(2000);
        $(".slidewrap").animate({marginLeft:-800})
        $(".slidewrap").delay(2000);
        $(".slidewrap").animate({marginLeft:-1600})
        $(".slidewrap").delay(2000);
        $(".slidewrap").animate({marginLeft:0})
})
$(function(){
    $(".notice>ul>li>a:nth-child(1)").click(function(){
        $(".popup").show();
        
    })
    $(".button").click(function(){
        $(".popup").hide();
    })
})

    


