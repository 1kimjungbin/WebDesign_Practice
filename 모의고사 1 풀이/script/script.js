
$(function(){
    //navigation
    $(".menu>ul>li").hover(function(){
        $(".submenu").stop().slideDown(200);
    }, function(){
        $(".submenu").stop().slideUp(200);
    });

    //slide
    let currentIndex = 0;

    setInterval(function(){

        if(currentIndex<2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-300) + "px";
        
        $(".imgSlide").animate({top:slidePosition},400);

    }, 3000);

    //tabMenu

    let tabBtn = $(".tabBtn>ul>li");
    let tabCont = $(".cont>div");

    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(){
        let target = $(this);
        let index = target.index();

        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });
    
    let layerBg = $(".layer_bg");
    let layer = $(".layer");
    let layerPopup = $(".layerPopup");
    let cancel = $(".layer .cancel");

    layerPopup.click(function(){
        layer.show();
        layerBg.show();
    });
    cancel.click(function(){
        layer.hide();
        layerBg.hide();
    });
});