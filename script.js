
$(function(){
  $('#js-hamburger').on('click', function(){
    $('#js-nav').toggleClass('open');
    $(this).toggleClass('open');
  });
  setTimeout(function(){
    $(".hero-text h1").css({opacity:0, display:'block'}).animate({opacity:1},1000);
  },1000);
});




