$(document).ready(function () {
  $(".card-container.owl-carousel").owlCarousel({
    loop: true, // Enable looping
    items: 1, // Show one testimonial per row
    dots: true, // Enable dots navigation
    nav: false, // Enable arrows navigation
    margin: 30, // Adjust the space between testimonial items
  });
});
