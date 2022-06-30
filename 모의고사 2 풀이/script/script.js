
$(function(){
    //menu

    let mainMenu = $(".menu ul>li");
    let subMenu = $(".menu ul>li>ul.submenu");


    $(mainMenu).hover(function () {
            // over
            $(this).find(subMenu).stop().slideDown();
        }, function () {
            // out
            $(this).find(subMenu).stop().slideUp();
        }
    );

    //slide

    let current = 0;
    let slideBox = $(".slideBox");

    setInterval(function(){
        let next = (current+1)%3;

        $(slideBox).find(".slideImg").eq(current).fadeOut();
        $(slideBox).find(".slideImg").eq(next).fadeIn();

        current = next;
    }, 3000);

    //closeBtn

    let closeBtn = $(".layer>.layerF>.close>.closeBtn");

    $(closeBtn).click(function(){
        $(".layer_bg").hide();
        $(".layer").hide();
    });

    //layerPopup

    let layerPopup = $(".layerPopup");

    $(layerPopup).click(function(){
        $(".layer_bg").css("display", "block");
        $(".layer").css("display", "block");
    });
});