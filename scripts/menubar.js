$(document).ready(function () {

    //assign variables
    $menubutton = $('#menubutton , #menutext');
    $menu = $('#sidebar');

    //our flags
    // scrollornot tells us if it's 0 == within [0,5] or 1 == (5,infinity)
    // menuornot tells us if it's 0 == menu is not visible, or 1 == menu is visible
    // mousein tells us if the mouse is currently in the header (1) or not (0)
    var scrolledornot = 0;
    var menuornot = 0;
    var mousein = 0;

    //by default, the menu is hidden
    $menu.hide();

    $menubutton.click(function () {
        //check if it's visible or not, toggles the menu
        if ($('#sidebar').is(':visible')) {
            // if so then we are collapsing the menu, therefore check if scrolledornot == 0 && if mousein == 0 so the header can go back to being transparent
            if (scrolledornot == 0 && mousein == 0) {
                $('#header').removeClass('scrolled');
            }

            // else we hide the menu and update the flag
            $menu.hide();
            menuornot = 0;
        } else {
            // we are now showing the menu, update the flag
            $menu.show();
            menuornot = 1;

            // when menu is open, we have to change the header to white
            $('#header').addClass('scrolled');
        }

        return false;
    });

    //if we click outside of the menu, it hides it
    $(window).click(function () {
        $menu.hide();

        // check if it's at the top of the screen and the mouse isn't in the header
        if (scrolledornot == 0 && mousein == 0) {
            $('#header').removeClass('scrolled');
        }

        //update flag
        menuornot = 0;
    });

    // looks at how far you've scrolled
    $(window).scroll(function () {
        // check if (5, infinity) and allow the fade into white, update flag
        if ($(window).scrollTop() >= 5) {
            $('#header').addClass('scrolled');
            scrolledornot = 1;
        } else {

            //we only want it to go back to being transparent when [0,5] and when there is no menu, and mouse is not in the header
            if (menuornot == 0 && mousein == 0) {
                $('#header').removeClass('scrolled');
            }

            //update flag regardless
            scrolledornot = 0;
        }
    });

    // this is a hoverable menubar
    $('#header').mouseenter(function () {
        $('#header').addClass('scrolled');

        //update flag
        mousein = 1;
    });

    $('#header').mouseleave(function () {
        if (scrolledornot == 0 && menuornot == 0) {
            $('#header').removeClass('scrolled');
        }

        //update flag
        mousein = 0;
    });


});
