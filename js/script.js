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



    // Gallery Synced Carousel

    var sync1 = $("#gallery-image--slider");
    var sync2 = $("#gallery-thumbs--slider");
   
    sync1.owlCarousel({
      singleItem : true,
      slideSpeed : 1000,
      navigation: true,
      navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
      pagination:false,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
    });
   
    sync2.owlCarousel({
      items : 10,
      itemsDesktop      : [1199,10],
      itemsDesktopSmall     : [979,8],
      itemsTablet       : [768,6],
      itemsMobile       : [520,4],
      pagination:true,
      responsiveRefreshRate : 100,
      afterInit : function(el){
        el.find(".owl-item").eq(0).addClass("synced");
      }
    });
   
    function syncPosition(el){
      var current = this.currentItem;
      $("#gallery-thumbs--slider")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if($("#gallery-thumbs--slider").data("owlCarousel") !== undefined){
        center(current)
      }
    }
   
    $("#gallery-thumbs--slider").on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo",number);
    });
   
    function center(number){
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for(var i in sync2visible){
        if(num === sync2visible[i]){
          var found = true;
        }
      }
   
      if(found===false){
        if(num>sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", num - sync2visible.length+2)
        }else{
          if(num - 1 === -1){
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if(num === sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", sync2visible[1])
      } else if(num === sync2visible[0]){
        sync2.trigger("owl.goTo", num-1)
      }
      
    }



});



