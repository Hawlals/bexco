$(document).ready(function(){

    $('.nav li').hover(function(){
        $(this).find('.lnb').stop(true).slideDown();
    }, function(){
        $(this).find('.lnb').stop(true).slideUp();
    });

    $('.ham').click(function(){
        $('.ham-lnb').css('right','0');
    });

    $('.ham-X').click(function(){
        $('.ham-lnb').css('right','-36%');
    });

    AOS.init({
        duration: 1200,
    })

});
