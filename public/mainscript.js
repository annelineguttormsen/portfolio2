window.onload = function() {
    const hbIcon = document.querySelector(".header__menuicon");
    const menu = document.querySelector(".menu");

    hbIcon.addEventListener("click",toggleMenu);

    function toggleMenu() {
        menu.style.right = "0px";
    }
}