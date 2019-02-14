$(document).ready(function() {

  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    function nav() {
      $('nav span').each(function( index ) {
        $(this).click(function() {
          $('body').addClass('scrolling');
          $('html, body').animate({
            scrollTop: 100 * (index + 1)
          }, 500, function() {
            $('body').removeClass('scrolling');
          });
        });
      });
    }
    nav();
  }
  
  function scroll() {
    var scrollPosition = $(document).scrollTop();
    var sectionHeight = $('main').outerHeight();
    $('main').scrollTop(sectionHeight * (scrollPosition / 100));
  }
  scroll();

  $(window).on('scroll', function(e) {
    scroll();
  });
  
});
