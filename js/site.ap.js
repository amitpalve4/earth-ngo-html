// JavaScript Document

$(document).ready(function(){
    
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
   
  });

  if($('.ap__banner__slider').length > 0){
    $('.ap__banner__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade:true,
      speed: 1000,
     
      // autoplay: true,
      // autoplaySpeed: 1500,

    });
  }

  if($('.ap__teamListing').length > 0){
    $('.ap__teamListing').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 1500,

    });
  }

});


