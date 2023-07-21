$(document).ready(function(){
    // 메뉴버튼을 클릭 했을 때, nav 와 section 이 바뀌어라
    $('#wrap em').click(function(){
        $('#wrap nav').addClass('on');
        $('#wrap section').addClass('on');
        // 본인 스스로는 서서히 사라져라
        $(this).fadeOut(600)
    });

    // gnb 의 li 를 클릭 했을 때, 본인의 순번을 찾고
    // section 의 div 순번에 맞추어 on 값을 주어라.

    $('.gnb li').click(function(){
        let i = $(this).index()
        console.log(i)
        $('section div').removeClass('on')
        $('section div').eq(i).addClass('on')

        $('#wrap nav').removeClass('on');
        $('#wrap section').removeClass('on');
        $('#wrap em').fadeIn();
    })
})