$(function(){
	// Setup menu button
    $('.navicon').click(function(){
        $('.main-container').toggleClass( "turn-left" );
        $(this).toggleClass( "hold" );
    });
	// Setup roll top button
	$(window).scroll(function() {
		if($(this).scrollTop() >= $(this).height()) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	// Setup roll to any anchor by link
	$('.roll-to-anchor').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
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
	
	//Show call button
	if(jQuery.browser.mobile){$('.call-button').show();}
});