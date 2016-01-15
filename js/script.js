$(document).ready(function(){

	// Navigation trigger

	$(".menu-trigger").on("click", function(){
        $(this).toggleClass('menu-trigger--open');
        $('.nav--mobile__menu').toggleClass('nav--mobile__menu--open');
        $('.is-drilldown').toggleClass('is-drilldown--open');
    });



	

	// Script settings for scroll effect on navigation

	var myElement = document.getElementById('navigation');

	var headroom  = new Headroom(myElement, {
		"offset": 100,
		"tolerance": 5
	});
	
	headroom.init();




	// Owl Carousel

	$(".featured-articles--carousel").owlCarousel({
      items : 3,

      pagination: true,
      lazyLoad: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  	});


  	$(".reports--carousel").owlCarousel({
      items : 3,
      pagination: true,
      navigation: true,
      navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      lazyLoad: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  	});




    // if ($('.sidebar').css('color') === '#ffffff') {
    //   $('footer').before($('.sidebar'));
    //   $('.articles').after($('#sidebar--banner1'));
    //   $('.reports').after($('#sidebar--banner2'));
    // };
    


    $('.back-to-top').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },800);
    return false;
  });



});


