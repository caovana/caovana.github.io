$(function(){
    $('.navicon').click(function(){
        $('.main-container').toggleClass( "turn-left" );
        $(this).toggleClass( "hold" );
    });

//      Setup mobile scroll left and right
    var current = 0,
        startX = '',
        startY = '',
        endX = '',
        endY = '',
        start = '',
        end = '',
    /* default */
    swipeDuration = 1000,
    swipeDistanceX = 50,
    swipeDistanceY = 50,
    thresholdX = 30,
    thresholdY = 30;
    $(document).on("touchstart", ".main-container", function (e, ui) {
        startX = e.originalEvent.touches[0].pageX;
        startY = e.originalEvent.touches[0].pageY;
        start = new Date().getTime();
    }).on("touchmove", ".main-container", function (e, ui) {
       // e.preventDefault();
    }).on("touchend", ".main-container", function (e, ui) {
        endX = e.originalEvent.changedTouches[0].pageX;
        endY = e.originalEvent.changedTouches[0].pageY;
        end = new Date().getTime();
        if ((end - start) < swipeDuration) {
            if (startX > endX && Math.abs(startY - endY) <= thresholdY && Math.abs(startX - endX) >= swipeDistanceX) {
                $('.main-container').addClass( "turn-left" );
                $('.navicon').addClass( "hold" );
            } else if (startX < endX && Math.abs(startY - endY) <= thresholdY && Math.abs(startX - endX) >= swipeDistanceX) {
                $('.main-container').removeClass( "turn-left" );
                $('.navicon').removeClass( "hold" );
            } else if (startY > endY && Math.abs(startX - endX) <= thresholdX && Math.abs(startY - endY) >= swipeDistanceY) {
//                 Swipe Up action
            } else if (startY < endY && Math.abs(startX - endX) <= thresholdX && Math.abs(startY - endY) >= swipeDistanceY) {
//                 Swipe Down action
            }
        }
    });
});