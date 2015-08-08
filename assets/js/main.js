$(function(){
	//      Setup mobile scroll left and right
	function turnLeft(){
		$(".main-container").css("left","-100%");
		$(".navicon").css({color: "wheat"});
	};
	function turnRight(){
		$(".main-container").css("left","0");
		$(".navicon").css({color: "#008080"});
	};
	$(".main-container").on('movestart', function(e) {
	  // If the movestart is heading off in an upwards or downwards
	  // direction, prevent it so that the browser scrolls normally.
	  if ((e.distX > e.distY && e.distX < -e.distY) ||
		  (e.distX < e.distY && e.distX > -e.distY)) {
		e.preventDefault();
	  }
	});
    $(".main-container").on("swipeleft",function(e){
	  if ($(this).offset().left == 0 && $(this).width() > $(window).width()) turnLeft();
	});
    $(".main-container").on("swiperight",function(e){
	  if ($(this).offset().left == -$(this).width()/2 && $(this).width() > $(window).width())
			turnRight();
	});
	
	// Setup menu button
    $('.navicon').click(function(){
		if ($('.main-container').offset().left == 0){
			turnLeft();
		}else{
			turnRight();
		}
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