$(document).ready(function () {
    var first = $('tr:odd td:nth-child(1)');
    var second = $('tr:odd td:nth-child(2)');
    
    // by default if screen size is small, we want to put it in the correct order
    if ($(window).width() <= 550) {
        first.each(function () {
            $(this).insertAfter($(this).next());
        });
    }

    $(window).resize(function () {

        if ($(window).width() <= 550) {
            /* only switch if first is before second */
            if (first.next(second)) {
                first.each(function () {
                    $(this).insertAfter($(this).next());
                });
            }

        } else {
            /* only switch if second is before first */
            if (second.next(first)) {
                second.each(function () {
                    $(this).insertAfter($(this).next());
                });
            }
        }

    });
});
