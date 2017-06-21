$(document).ready(function () {

    //assign variables
    $menubutton = $('#menubutton');
    $menu = $('#sidebar');

    //by default, the menu is hidden
    $menu.hide();
    $menubutton.click(function () {
        //check if it's visible or not, toggles the menu
        if ($('#sidebar').is(':visible')) {
            $menu.hide();
        } else {
            $menu.show();
        }
        return false;
    });

    //if we click outside of the menu, it hides it
    $(window).click(function () {
        $menu.hide();
    });

    /*$(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            $('#header').addClass('.transparent');
        } else {
            $('#header').removeClass('.transparent');
        }
    });*/
});
