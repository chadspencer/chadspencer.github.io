$(document).ready(function() {
  function nav() {
    $("nav span").each(function(index) {
      $(this).click(function() {
        var scrollOffset = 100 * (index + 1);
        $("body").addClass("scrolling");
        if (navigator.userAgent.match(/iPad|iPhone|iPod|Android|Windows Phone/i)) {
          function customScrollTo(to, duration) {
            var start = window.pageYOffset,
              change = to - start,
              currentTime = 0,
              increment = 20;

            var animateScroll = function() {
              currentTime += increment;
              var val = Math.easeInOutQuad(
                currentTime,
                start,
                change,
                duration
              );
              window.scrollTo(0, val);

              if (currentTime < duration) {
                setTimeout(animateScroll, increment);
              }
            };
            animateScroll();
          }

          function removeBodyClass() {
            $("body").removeClass("scrolling")
          }

          Math.easeInOutQuad = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };

          customScrollTo(scrollOffset, 250);
          setTimeout(removeBodyClass, 250);
        } else {
          $("html, body").animate(
            {
              scrollTop: scrollOffset
            },
            500,
            function() {
              $("body").removeClass("scrolling");
            }
          );
        }
      });
    });
  }
  nav();

  function scroll() {
    var scrollPosition = $(document).scrollTop();
    var sectionHeight = $("main").outerHeight();
    $("main").scrollTop(sectionHeight * (scrollPosition / 100) + 1);
  }
  scroll();

  $(window).scroll(function() {
    scroll();
  });

});
