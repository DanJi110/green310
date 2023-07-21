$(document).ready(function(){
    let imgs = '';
    for(var i = 0; i<200; i++){
        imgs+='<img src="img/pic'+i+'.jpg" alt="">'
    };
    $('section').html(imgs);

    // 마우스를 움직일 때 마다 한 장씩 사진이 보여라
    $('section').mousemove(function(e){
        let x = e.pageX;
        let wd = $(window).width();

        let percent = Math.floor((x/wd)*200)
        $('h1').text(percent);
        $('section>img').hide();
        $('section>img').eq(percent).show();

    });
}) //제이쿼리 END