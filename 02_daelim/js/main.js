$(function(){
    $('.search').click(function(){
        $('.search_form').toggle();
    })

    // 전체메뉴
    $('.btn_menu').click(function(){
        $('.allmenu_wrap').show();
    })
    $('.btn_close').click(function(){
        $('.allmenu_wrap').hide();
    })

    $('.allmenu .menu_slider').slick({
        autoplay: true,
        arrows: false,
        dots : true,
        pauseOnHover: false
    });


    // 모달팝업 (제목, 문단, 유튜브 주소 배열에 삽입)
    let video_tit = ['D TOWER','Canakkale 1915 Bridge','Petrochemical Plant']
    let video_p = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.']
    let video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/vM8b0CZd2Ww','https://www.youtube.com/embed/gehtA1gfXPc']

    $('.list li').click(function(){
        let num = $(this).index()
        console.log(num)

        $('.modal_wrap').fadeIn()
        //동적으로 제목 삽입
        $('.tit h2').text(video_tit[num])
        //동적으로 문단 삽입
        $('.tit p').text(video_p[num])
        //동적으로 유튜브 동영상 링크 삽입
        $('.tit iframe').attr('src',video_url[num])

        $('.btn_list .prev').click(function(){
            if(num==0){
                num=2;
            }else{
                num--;
            };
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        })

        $('.btn_list .next').click(function(){
            if(num==2){
                num=0;
            }else{
                num++;
            };
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        })
        
    })
    // x버튼 클릭
        $('.btn_list .close').click(function(){
            $('.modal_wrap').fadeOut()
        })


    // 2단메뉴
    $('.gnb>li').mouseenter(function(){
        $('.header_wrap').stop().animate({height:340},300)
        $('.depth2').stop().slideDown(300)
    })
    $('.header_wrap').mouseleave(function(){
        $('.depth2').stop().slideUp(300)
        $('.header_wrap').stop().animate({height:70},300)
    })

    // 패밀리 사이트
    $('.btn_left').click(function(){
        $('.right_family').hide();
        $('.btn_right').removeClass('on');
        $('.left_family').toggle();
        $('.btn_left').toggleClass('on');
    })

    $('.btn_right').click(function(){
        $('.left_family').hide();
        $('.btn_left').removeClass('on');
        $('.right_family').toggle();
        $('.btn_right').toggleClass('on');
    })

    // 슬릭슬라이드
    $(document).ready(function(){
        $('.visual').slick({
            autoplay: true,
            arrows: false,
            fade: true,
            pauseOnHover: false
        });

    });

})


