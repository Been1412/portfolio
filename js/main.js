$(function(){
    
    $('ul.gnb li').click(function(){
        $('ul.gnb li a').removeClass('on')
        $(this).find('a').addClass('on')
    })

    $('ul.gnb li:eq(0) a, h1 a').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    })
    $('ul.gnb li:eq(1) a').click(function(){
        $('html,body').animate({scrollTop:1080},1000)
    })
    $('ul.gnb li:eq(2) a').click(function(){
        $('html,body').animate({scrollTop:2513},1000)
    })
    $('ul.gnb li:eq(3) a').click(function(){
        $('html,body').animate({scrollTop:3436},1000)
    })


    $(window).scroll(function(){
        let num = $(this).scrollTop()
        console.log(num)

        if(num>=0 && num<1080){
            $('ul.gnb li a').removeClass('on')
            $('.home').addClass('on')
        }else if(num>=1080 && num<2513){
            $('ul.gnb li a').removeClass('on')
            $('.work').addClass('on')
        }else if(num>=2513 && num<3436){
            $('ul.gnb li a').removeClass('on')
            $('.about').addClass('on')
        }else if(num>=3436){
            $('ul.gnb li a').removeClass('on')
            $('.contact').addClass('on')
        }

        if(num>=2358){
            $('.chart .bar1').css({width:'85%'})
            $('.chart .bar2').css({width:'90%'})
            $('.chart .bar3').css({width:'90%'})
            $('.chart .bar4').css({width:'80%'})
            $('.chart .bar5').css({width:'50%'})
            $('.chart .bar6').css({width:'60%'})
        }
    })

    $('ul.box li a').mouseenter(function(){
        $(this).find('.gallery_cover').stop().fadeIn()
    })
    $('ul.box li a').mouseleave(function(){
        $(this).find('.gallery_cover').stop().fadeOut()
    })

    $('ul.box li a').lightBox({
        overlayBgColor:'#000', //cover 색
        overlayOpacity:0.9, //cover 투명도
        imageLoading:"./images/lightbox_btn_loading.gif", // 이미지로딩
        imageBtnClose:"./images/lightbox_btn_close.png", // 이미지 닫기 버튼
        imageBtnPrev:"./images/lightbox_btn_prev.png", // 이전버튼
        imageBtnNext:"./images/lightbox_btn_next.png", // 다음버튼
        txtImage:"work", //작품
        containerResizeSpeed:1000, //팝업 속도 조절
    })

})