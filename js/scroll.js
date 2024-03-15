window.onload = function () {
    var bodyWidth = document.documentElement.clientWidth
    window.addEventListener('resize', function(){
        bodyWidth = document.documentElement.clientWidth
        console.log(bodyWidth);

        if(bodyWidth > 1439){
            $(".box").each(function () {
                // 개별적으로 Wheel 이벤트 적용
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
                        }
                    }
                    // 화면 이동 0.5초(500)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 500, complete: function () {
                            // 맨 위로 올라가기
                        }
                    });
                });
        
            });
        } else {
            $(".box").off("mousewheel DOMMouseScroll");
        }
    });

    

    // let bodyWidth = document.documentElement.clientWidth
    // console.log(bodyWidth);

    // if(조건:바디의 넓이가 > 특정넓이) {
    //     풀페이지 실행하세요
    // }
}