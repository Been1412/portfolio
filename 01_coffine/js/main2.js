$(function(){
    $('.close').click(function(){
        $('.popup').slideUp();
    })

    $('.gnb').mouseenter(function(){
        $('.header_wrap').stop().animate({'height':400},300)
        $('.depth2').stop().slideDown();
    })

    $('.header_wrap').mouseleave(function(){
        $('.depth2').stop().slideUp();
        $('.header_wrap').stop().animate({'height':103},300)
    })

    $('.ask_banner .top').click(function(){
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    })

    $('.tab li').click(function(){
        let num = $(this).index();
        console.log(num)

        $('.tab li').removeClass('on')
        $(this).addClass('on')

        $('.list').hide();
        $('.list').eq(num).show();
    })

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        pauseOnHover:false
    });
        
    $('#section4 .left').slick({
        autoplay: true,
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 2,
     });


    // 스크롤바를 아래로 내리면 top 버튼이 서서이 나타나게
    // 스크롤바를 아래로 내리는 이벤트
    $(window).scroll(function(){
        // 스크롤바의 위치를 알려주는 함수 -> scrollTop()
        let num =  $(this).scrollTop()
        console.log(num)

        if(num>=800){
            $('.btn_top').fadeIn()
        }else{
            $('.btn_top').fadeOut()
        }
    })
    
    // top 버튼을 누르면 스크롤바의 위치를 맨 위(0)로 이동
    $('.btn_top').click(function(){
        $('body,html').animate({'scrollTop':0})
    })
})