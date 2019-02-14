$(document).ready(function() {

  function scroll() {
    var scrollPosition = $(document).scrollTop();
    var sectionHeight = $('main').outerHeight();
    $('main').scrollTop(sectionHeight * (scrollPosition / 100));
  }

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
  scroll();

  $(window).scroll(function() {
    scroll();
  });
  
});
