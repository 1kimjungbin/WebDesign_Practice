$(function(){
    //menu
    let menu = $(".menu>ul>li")
    let submenu = $(".menu>ul>li>.submenu");

    $(menu).hover(function(){
        $(submenu).stop().slideDown(300);
    }, function(){
        $(submenu).stop().slideUp(300);
    });

    //slide

    let currentIndex = 0;

    setInterval(function(){

        if(currentIndex<0){
            currentIndex++;
        }

    });
});