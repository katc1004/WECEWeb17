$(document).ready(function () {
    // define an array of images
    var images = ['images/indexheader/WECE1.jpg', 'images/indexheader/WECE2.jpg', 'images/indexheader/WECE3.jpg'];

    // start at 1, because 0 is already accounted for in css
    var index = 1;

    // slideshow
    function slides() {
        $('#mainsubsection').fadeOut(1000, function () {
            $(this).css('background-image', 'url(' + images[index++ % images.length] + ')');
        }).fadeIn(1000);
    }
    setInterval(slides, 7000);
});
