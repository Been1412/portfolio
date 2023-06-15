$(function(){

    Splitting();
    
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
        $('html,body').animate({scrollTop:3482},1000)
    })
    $('ul.gnb li:eq(3) a').click(function(){
        $('html,body').animate({scrollTop:4382},1000)
    })

    $(window).scroll(function(){
        let num = $(this).scrollTop()
        console.log(num)

        if(num>=0 && num<1080){
            $('ul.gnb li a').removeClass('on')
            $('.home').addClass('on')
        }else if(num>=1080 && num<3482){
            $('ul.gnb li a').removeClass('on')
            $('.work').addClass('on')
        }else if(num>=3482 && num<4382){
            $('ul.gnb li a').removeClass('on')
            $('.about').addClass('on')
        }else if(num>=4382){
            $('ul.gnb li a').removeClass('on')
            $('.contact').addClass('on')
        }

        if(num>=3182){
            $('.chart .bar1').css({width:'85%'})
            $('.chart .bar2').css({width:'90%'})
            $('.chart .bar3').css({width:'90%'})
            $('.chart .bar4').css({width:'80%'})
            $('.chart .bar5').css({width:'50%'})
            $('.chart .bar6').css({width:'60%'})
        }
    })

    // 갤러리 호버
    $('ul.box li a').mouseenter(function(){
        $(this).find('.gallery_cover').stop().fadeIn()
    })
    $('ul.box li a').mouseleave(function(){
        $(this).find('.gallery_cover').stop().fadeOut()
    })

    // 디자인 작업물
    $('ul.box li').click(function(){
        $(this).find('.popup').show()
    })
    $('.popup a').click(function(){
        console.log('클릭')
        $('.popup').fadeOut()
    })

})