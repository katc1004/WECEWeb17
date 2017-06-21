$(document).ready(function () {

    //assign variables
    $menubutton = $('#menubutton , #menutext');
    $menu = $('#sidebar');

    //our flags
    // scrollornot tells us if it's 0 == within [0,5] or 1 == (5,infinity)
    // menuornot tells us if it's 0 == menu is not visible, or 1 == menu is visible
    var scrolledornot = 0;
    var menuornot = 0;

    //by default, the menu is hidden
    $menu.hide();

    $menubutton.click(function () {
        //check if it's visible or not, toggles the menu
        if ($('#sidebar').is(':visible')) {
            // if so then we are collapsing the menu, therefore check if scrolledornot == 0 so the header can go back to being transparent
            if (scrolledornot == 0) {
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

        //update flag
        menuornot = 0;
    });

    $(window).scroll(function () {
        // check if (5, infinity) and allow the fade into white, update flag
        if ($(window).scrollTop() >= 5) {
            $('#header').addClass('scrolled');
            scrolledornot = 1;
        } else {

            //we only want it to go back to being transparent when [0,5] and when there is no menu
            if (menuornot == 0) {
                $('#header').removeClass('scrolled');
            }
            
            //update flag regardless
            scrolledornot = 0;
        }
    });

});
