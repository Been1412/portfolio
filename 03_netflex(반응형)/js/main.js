$(function(){
    $('header .btn_login').click(function(){
        $('.modal_login').fadeIn()
        $('body').addClass('on')
    })

    $('.modal_login .btn_close').click(function(){
        $('.modal_login').fadeOut()
        $('body').removeClass('on')
    })

    $('.faq ul li button').click(function(){
        $(this).next().slideToggle().parent().siblings().find('p').slideUp();
        $(this).find('span').toggleClass('on').parent().parent().siblings().find('span').removeClass('on')
    })

})