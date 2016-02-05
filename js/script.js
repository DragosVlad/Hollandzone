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



    checkSize();
    $(window).resize(checkSize);
    function checkSize(){
        if (window.matchMedia('(max-width: 1024px)').matches){
           
            $('footer').before($('#sidebar'));
            $('.articles').after($('#sidebar--banner1'));
            $('.reports').after($('#sidebar--banner2'));


            $('.january a').html('Jan');
            $('.february a').html('Feb');
            $('.march a').html('Mar');
            $('.april a').html('Apr');
            $('.may a').html('May');
            $('.june a').html('Jun');
            $('.july a').html('Jul');
            $('.august a').html('Aug');
            $('.september a').html('Sep');
            $('.octomber a').html('Oct');
            $('.november a').html('Nov');
            $('.december a').html('Dec');

        } else {
          $('.main-content').after($('#sidebar'));
          $('.sidebar--box__recent').after($('#sidebar--banner1'));
          $('.sidebar--box__calendar').after($('#sidebar--banner2'));


          $('.january a').html('January');
          $('.february a').html('February');
          $('.march a').html('March');
          $('.april a').html('April');
          $('.may a').html('May');
          $('.june a').html('June');
          $('.july a').html('July');
          $('.august a').html('August');
          $('.september a').html('September');
          $('.octomber a').html('Octomber');
          $('.november a').html('November');
          $('.december a').html('December');
        };



    }; // End function checkSize()



    


    $('.back-to-top').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },800);
    return false;
  });



});



