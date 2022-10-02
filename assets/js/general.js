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
  });