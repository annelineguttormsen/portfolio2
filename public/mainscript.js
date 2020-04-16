$(function() {
    //variables for the hamburger menu button and the menu
    const $menuBtn = $(".header__menuicon");
    const $menu = $(".menu");
    const $menuClose = $(".menu__icon");

    //when hamburger menu icon is clicked it opens the menu
    //this will put a focus on the menu
    //if menu triggers a blur event it will toggle the --open class
    $menuBtn.on("click", openMenu);
    $menu.on("blur",function() {
        setTimeout(closeMenu,100)
    });
    $menuClose.on("click",()=> {
        $menu.removeClass("menu--open");
        $menu.blur();
    });

    function openMenu() {
        $menu.addClass("menu--open");
        $menu.focus();
    }

    function closeMenu() {
        $menu.removeClass("menu--open");
    }
});