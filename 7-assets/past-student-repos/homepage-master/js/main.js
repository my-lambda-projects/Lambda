// **************************************
// jQuery to collapse the navbar on scroll
// **************************************

$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});



// ****************************************************************
// jQuery for page scrolling feature - requires jQuery Easing plugin
// ****************************************************************

$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});


// ****************************************************************
// owl-caurosel
// ****************************************************************			
			
$(document).ready(function() {
 
	$("#featured-list").owlCarousel({
 
		items : 4, //4 items above 1000px browser width
		itemsDesktop : [1000,4], //4 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [600,1], //1 items between 600 and 0
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	  
	});
   
});


// ***********************************
// totop
// ***********************************

$(document).ready(function(){
	$().UItoTop({ easingType: 'easeOutQuart' });
});	


// ***********************************
// pageloader
// ***********************************
$(window).load(function(){
	if($(".preloader").length > 0){
		$('.preloader').fadeOut(1000); // set duration in brackets
	}
});


// ***********************************
// stop video when modal close
// ***********************************

$(document).ready(function(){
  $("#video-modal").on('hide.bs.modal', function(evt){
    var player = $(evt.target).find('iframe'),
        vidSrc = player.prop('src');
    player.prop('src', ''); // to force it to pause
    player.prop('src', vidSrc);
  });
});

	
// ***********************************
// Backstretch - Slider on Background
//
//  Note :  make sure  use this  http://bootstrapwizard.info/Theme/Fullscreen/images/bg4.jpg"  when on server  but you can simply use  "images/bg1.jpg"  if you are on localhost
//
// ***********************************								  
			 
$("body").backstretch([
   "images/bg1.jpg",
   "images/bg2.jpg",
   "images/bg3.jpg"
], {duration: 5000, fade: 1000});
							  


// ***********************************
// magnificPopup
// ***********************************	

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
	enabled:true
  }
});


// ****************************************************************
// wow - for animation together with animate.css
// ****************************************************************	
	
$(document).ready(function(){
	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       150
	  }
	);
	wow.init();
});

		


