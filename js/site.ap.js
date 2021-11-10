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

  $('.nav-toggle').on('click', function(){

    $('.navigation').toggleClass('nav-open');
    $('.nav-toggle').toggleClass('active');

  });

  $('.nav-menu li a.drop-link').on('click', function(){

    var relVal = $(this).attr('rel');
    if(!$(this).parent().hasClass('active')){
      $('.nav-menu li').removeClass('active');
      $('.sub__menu__block').slideUp();
      $(this).parent().addClass('active');
      $(this).parent().parent().parent().parent().find('#'+relVal).slideDown();
    }
    else{
      $(this).parent().removeClass('active');
      $(this).parent().parent().parent().parent().find('#'+relVal).slideUp();
    }
  });

  $('.nav-menu .nav-link.drop-down.mob a.drop-link-mob').on('click', function(){

    var relVal = $(this).attr('rel');
    $('.nav-menu .nav-link.drop-down.mob').removeClass('active');
    $('.sub__menu__mob').slideUp();
    $(this).parent().addClass('active');
    $(this).parent().find('#'+relVal).slideToggle();

  });

  $('.roleTab li a').on('click', function(){
    var relValue = $(this).attr('rel');
    $('.roleTab li').removeClass('current');
    $('.roleContent').removeClass('current');
    $(this).parent().addClass('current');
    $(this).parent().parent().parent().find('#'+relValue).addClass('current');

  });

  $('.tabList li a').on('click', function(){
    var relValue = $(this).attr('rel');
    $('.tabList li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).parent().addClass('current');
    $(this).parent().parent().parent().parent().parent().parent().find('#'+relValue).addClass('current');

  });

  $(function() {
    $(".accordion > .accordion-item .accordion-thumb").click(function() {
      $(this).parent().siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent().toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    });
  });

 $('.career-in ul li').slice(0, 10).css('display', 'flex');
  $(".loadMore a").on('click', function (e) {
    e.preventDefault();
    $(".career-in ul li:hidden").slice(0, 10).css('display', 'flex');
  });

});


