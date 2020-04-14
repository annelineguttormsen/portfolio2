$(function() {
    const menuBtn = $(".header__menuicon");
    const menu = $(".menu");

    console.log(menuBtn, menu);

    menuBtn.on("click", function() {
        menu.toggleClass(".menu--open");
        console.log("hei");
    });
});