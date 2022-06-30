$(function(){
    //menu

    let menu = $(".menu ul li");
    let submenu = $(".menu ul li ul.submenu");
    let submenu_bg = $(".menu .submenu_bg");

    $(menu).hover(function(){
        $(submenu).stop().slideDown(200);
        $(submenu_bg).stop().slideDown(200);
    }, function(){
        $(submenu).stop().slideUp(200);
        $(submenu_bg).stop().slideUp(200);
    });

    //slide

    let currentIndex = 0;

    setInterval(function(){
        if(currentIndex<2) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        let slidePosition = currentIndex * (-1210) + "px";
        $(".slideList").animate({left:slidePosition}, 300);
    }, 3000);
});