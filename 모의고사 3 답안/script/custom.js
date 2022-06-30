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