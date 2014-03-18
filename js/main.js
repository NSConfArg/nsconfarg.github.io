$(document).ready(function() {
  // get basic measures
  $wwidth = $(window).width();
  $wheight = $(window).height();
  $header = $('header#main').height();

  // // based on scroll, toggle header
  // $(window).scroll(function() {
  //   var y = $(window).scrollTop();
  //   if ( y > $wheight ) {
  //     if ($('header#main').is(':hidden')){
  //      $('header#main').fadeIn('slow');
  //     }
  //   } else if (y < $wheight) {
  //     if ($('header#main').is(':visible')){
  //       $('header#main').fadeOut('slow');
  //     }
  //   };
  // });

  // Smooth scrolling
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Nav location based on scroll
  $(window).scroll(function () {
    var x = $(this).scrollTop();
    $('nav ul li a').each(function (event) {
      if (x >= $($(this).attr('href')).offset().top - $header) {
        $('nav ul li a').not(this).removeClass('here');
        $(this).addClass('here');
      }
    });
  });

  // WOW SUCH SCROLL MUCH MAGIC COOL LOOKS
  new WOW().init();

});
