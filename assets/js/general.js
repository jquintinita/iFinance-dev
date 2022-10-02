var slider = document.getElementById("amountRange");
var output = document.getElementById("amountTotalrange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value ;
}


$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
});


$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('nav .menu-nav a, .footer-link a').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  