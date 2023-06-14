$(function(){
    $('.close').click(function(){
        $('.popup').slideUp();
    })

    $('.gnb').mouseenter(function(){
        $('.header_wrap').stop().animate({'height':480},300)
        $('.depth2').show();
    })

    $('.header_wrap').mouseleave(function(){
        $('.depth2').hide();
        $('.header_wrap').stop().animate({'height':206},300)
    })
    

    $(document).ready(function(){
        $('.slider').slick({
        // 슬라이드 자동 실행
        autoplay: true,
        autoplaySpeed: 5000,
        // 페이지 버튼
        dots: true,
        // 좌우버튼
        arrows: true,

    });
    });


})