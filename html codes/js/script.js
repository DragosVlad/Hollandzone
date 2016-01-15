$(document).ready(function(){

	$(".menu-trigger").on("click", function(){
        $(this).toggleClass('menu-trigger--open');
        $('.nav--mobile__menu').toggleClass('nav--mobile__menu--open');
    });



	

	// Script settings for scroll effect on navigation

	var myElement = document.getElementById('navigation');

	var headroom  = new Headroom(myElement, {
		"offset": 205,
		"tolerance": 5
	});
	
	headroom.init();


});


