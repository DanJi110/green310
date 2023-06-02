$(document).ready(function () {
// window.onload 와 같은 개념
    // article 에 마우스가 들어갔을 때 , 본인이 커져라
    // article 에 마우스가 들어갔을 때 , 본인 안에 있는 비디오가 보여라
    $("article").mouseenter(function () {
    let vid = $(this).find('video').get(0);
    vid.currentTime = 0 // 시작점을 제시할 수 있다.
    vid.play()
    $(this).css({ width: "35%" });
    // article 에 마우스가 들어갔을 때 , 본인 안에 있는 video 가 보여라
    $(this).find('video').css({'opacity':'0.9'})
    // article 에 마우스가 들어갔을 때, 본인 안에 있는 h3 과 p 가 보여라
    $(this).find('h3').stop().animate({'right':"10px"},400)
	$(this).find('p').stop().animate({'right':'10px'},800)

    // article 에 마우스가 나갔을 때 , 본인이 작아져라
    // article 에 마우스가 나갔을 때 , 본인 안에 있는 비디오가 멈춰라
    $("article").mouseleave(function () {
    let vid = $(this).find('video').get(0);
    vid.pause()
    $(this).css({ width: "12%" });
    // article 에 마우스가 나갔을 때 , 본인 안에 있는 video 가 사라져라
    $(this).find('video').css({'opacity':'0'})
    // article 에 마우스가 나갔을 때, 본인 안에 있는 h3 과 p 가 사라져라
    $(this).find('h3').css({'opacity':'0'})
	$(this).find('p').css({'opacity':'0'})
    });
});
});
