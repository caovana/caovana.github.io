$(function(){
	//      Setup mobile scroll left and right
    $(".main-container").on("swipeleft",function(){
	  $(".main-container").css("left","-100%");
	});
    $(".main-container").on("swiperight",function(){
	  $(".main-container").css("left","0");
	});
	
	// Setup menu button
	
    $('.navicon').click(function(){
		if ($('.main-container').offset().left == 0){
			$(".main-container").css("left","-100%");
		}else{
			$(".main-container").css("left","0");
		}
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

	//Show call button
	//if(typeof jQuery.browser.mobile != 'undefined'){$('.call-button').show()};
});