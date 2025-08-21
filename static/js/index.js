window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

  // Initialize all carousels
  bulmaCarousel.attach('#carousel-fine-grained', {
    slidesToScroll: 1,
    slidesToShow: 1, // Show 1 image at a time
    infinite: true,
    autoplay: true,
    loop: true,
  });
  bulmaCarousel.attach('#carousel-qualitative', {
    slidesToScroll: 1,
    slidesToShow: 1, // Show 1 image at a time
    infinite: true,
    autoplay: true,
    loop: true,
  });

  // Check if there are any navbar burgers
})
