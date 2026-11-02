/* ===== STICKY NAV ACTIVITY START ===== */
$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass('secondary');
    } else {
        if ($("nav").hasClass('secondary')) {
            $("nav").removeClass('secondary');
        }
    }
});
/* ===== STICKY NAV ACTIVITY END ===== */
$(document).ready(function() {
    $(".text").typed({
        strings: [
            "<strong>i love</strong><strong class='primary'> codings.</strong>",
            "<strong>and to</strong><strong class='primary'> share !!.</strong>"
        ],
        typeSpeed: 0,
        loop: true
    });
});
$(document).ready(function () {
  
  // ... your other scripts/initializations ...

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });

});