<script>
$(function(){
  $('#js-hamburger').on('click', function(){
    $('#header__nav').toggleClass('open');
    $(this).toggleClass('open');
  });

  setTimeout(function(){
    $(".hero-text h1").fadeIn(1000);
  }, 1000);
});
</script>


