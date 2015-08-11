$(function(){
	//Detect mobile device base on TouchEvent 
	function isMobile() {
	  try{ document.createEvent("TouchEvent"); return true; }
	  catch(e){ return false; }
	}
	// Setup swipe left and right event
	var rootOffset = 320;
	var swipedest = $(window);
	function turnLeft(){
		console.log("Start turn left");
		if ($(window).width() == $(".main-container").width() && $(".main-container").offset().left <= 0){
			$(".main-container").css("left","-"+rootOffset+"px");
			$(".navicon").css({color: "wheat"});
			console.log("<<<");
		}
		console.log("End turn left");
	};
	function turnRight(){
		console.log("Start turn right");
		if ($(window).width() == $(".main-container").width() && $(".main-container").offset().left >= -(rootOffset)){
			$(".main-container").css("left","0");
			$(".navicon").css({color: "#008080"});
			console.log(">>>");
		}
		console.log("End turn right");
	};
	if(isMobile()){
		swipedest.on('movestart', function(e) {
		  // If the movestart is heading off in an upwards or downwards
		  // direction, prevent it so that the browser scrolls normally.
			if ((e.distX > e.distY && e.distX < -e.distY) ||
				(e.distX < e.distY && e.distX > -e.distY)) {
				e.preventDefault();
			  }
		});
		swipedest.on("swipeleft",function(e){
			turnLeft();
		});
		swipedest.on("swiperight",function(e){
			turnRight();
		});
	}
	// Setup menu button
    $('.navicon').click(function(){
		if ($('.main-container').offset().left == 0){
			turnLeft();
		}else{
			turnRight();
		}
    });
	//Setup Call button
	if(isMobile()){
	 $(".call-button").css({display: "inline-block"});
	}else{}
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