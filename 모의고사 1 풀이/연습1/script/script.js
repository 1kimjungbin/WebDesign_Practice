$(function(){
    //menu

    let menu = $(".menu>ul>li");
    let submenu = $(".submenu");

    $(menu).hover(function(){
        $(submenu).stop().slideDown(200);
    }, function(){
        $(submenu).stop().slideUp(200);
    });

    //slide

    let currentIndex = 0;

    setInterval(function(){
        if(currentIndex<2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-303) + "px";

        $(".slideList").animate({top:slidePosition}, 300);
    }, 3000);

    //tabMenu

    let tabBtn = $(".Cont>.btn");
    let tabCont = $(".Cont>div");

    tabCont.hide().eq(0).show();
    
    tabBtn.click(function{
        let target = $(this);
        let index = target.index();
    });
});