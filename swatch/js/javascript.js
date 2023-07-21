$(document).ready(function(){
    let ht = $(window).height()
        $('section').height(ht)
        $(window).resize(function(){
        let ht = $(window).height()
        $('section').height(ht)
    });
    // nav li 를 클릭할 때마다 scrollTop 의 위치를 바꾸어라
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        $('h1').text(sc)
        let ht = $(window).height()

        // if(sc>=ht*0 && sc<ht*1){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(0).addClass('on')
        // }
        // if(sc>=ht*1 && sc<ht*2){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(1).addClass('on')
        // }
        // if(sc>=ht*2 && sc<ht*3){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(2).addClass('on')
        // } 
        // if(sc>=ht*3 && sc<ht*4){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(3).addClass('on')
        // }

        // 반복문을 활용한 축약 설정
        for(var a=0; a<4; a++){
            if(sc>=ht*a && sc<ht*a+1){
            $('nav li').removeClass('on')
            $('nav li').eq(a).addClass('on')
            }
        }

    });
    $('nav li').click(function(e){
        e.preventDefault()
        let i = $(this).index()
        let ht = $(window).height()

        $('html ,body').stop().animate({scrollTop:ht*i},1400)
        $('nav li').removeClass('on')
        $(this).addClass('on')
    });
    // section 위에서 마우스를 올릴 때, 내릴 때 이벤트가 발생한다.
    $('section').mousewheel(function(event,delta){
        if(delta>0){
            let prev = $(this).prev().offset().top
            $('html,body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
        }
        else if(delta<0){
            let next = $(this).next().offset().top
            $('html,body').stop().animate({scrollTop:next},1400,'easeOutBounce')
        }
    });

    
    // 예제 윈도우에서 마우스를 올렸을 때, 마우스 올림 글씨 출력
    // 윈도우에서 마우스를 내렸을 때, 마우스 내림 글씨 출력
    // $(window).mousewheel(function(event,delta){
    //     event.preventDefault()
    //     // 마우스를 올렸을 때
    //     if(delta>0){
    //         $('h1').text('마우스올림')
    //     }
    //     else if(delta<0){
    //         $('h1').text('마우스내림')
    //     }
    // })


    $('section').mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;
        
        $(this).find('.p11').css({'bottom':20+(y/30),'right':20+(x/30)})
        $(this).find('.p12').css({'bottom':-40-(y/40),'right':130-(x/40)})
        $(this).find('.p13').css({'top':180+(y/30),'right':60+(x/30)})

        $(this).find('.p21').css({'bottom':-480+(y/30),'right':-180+(x/30)})
        $(this).find('.p22').css({'bottom':-40-(y/40),'right':130-(x/40)})
        
        $(this).find('.p31').css({'bottom':30+(y/30),'right':180+(x/30)})
        $(this).find('.p32').css({'bottom':-270-(y/40),'right':110-(x/40)})
        $(this).find('.p33').css({'bottom':-130+(y/30),'right':-70+(x/30)})
        
        $(this).find('.p41').css({'bottom':-120+(y/30),'right':20+(x/30)})
        $(this).find('.p42').css({'bottom':-180-(y/40),'right':0-(x/40)})
    })


}) // 제이쿼리 END