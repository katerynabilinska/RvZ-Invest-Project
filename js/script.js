$('.mouse-paralax').on('mousemove', (e) => {
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.mouse-paralax-item-').css(
        'transform',
        'translate(-'+ x * 40 +'px, -' + y * 40 + 'px)'
    );

    $('.mouse-paralax-item').css(
        'transform',
        'translate('+ x * 40 +'px, ' + y * 40 + 'px)'
    );

});

function nextSlide() {showSlides(slideIndex += 1);}

function previousSlide() {showSlides(slideIndex -= 1);}

function currentSlide(n) {showSlides(slideIndex = n);}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let slide of slides) {slide.style.display = "none";}

    slides[slideIndex - 1].style.display = "block";    
}

let slideIndex = 0;

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-item");

  for (i = 0; i < x.length; i++) { x[i].style.display = "none";}

  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}

  x[slideIndex-1].style.display = "block";
  
  setTimeout(carousel, 5000);
}