/* Navigation */
$('.menu li').mouseenter(function(){
    $('.sub-menu, .sub-back').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $('.sub-menu, .sub-back').stop().slideUp()
})

/* Modal */
$('.open-modal').click(function(){
    $('.modal').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal').fadeOut()
})

//slide

/*let currentIndex = 0;

setInterval(function(){

    if(currentIndex<2){
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    let slidePosition = currentIndex* (-1210) + "px";
    $(".slideList").animate({left:slidePosition},300)

}, 3000);*/