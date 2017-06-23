//Credit to W3 Schools (https://www.w3schools.com/howto/howto_js_slideshow.asp) for some parts of the code

$(document).ready(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    //prev and net button
    $('a.prev').click(function () {
        showSlides(slideIndex += -1);
    });

    $('a.next').click(function () {
        showSlides(slideIndex += 1);
    });

    //dots, EDIT IF NUMBER OF SLIDES CHANGE
    $('span.dot1').click(function () {
        currentSlide(1);
    });

    $('span.dot2').click(function () {
        currentSlide(2);
    });

    $('span.dot3').click(function () {
        currentSlide(3);
    });

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = $(".Slides");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            $('.dot' + (i + 1)).css('background-color', '#c4c4c4');
        }

        slides[slideIndex - 1].style.display = "block";
        $('.dot' + (slideIndex)).css('background-color', '#444444');

    }
});
