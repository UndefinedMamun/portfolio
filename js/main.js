const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let menuShow = false;

menuBtn.addEventListener('click', function () {
    if (!menuShow) {
        menuBtn.classList.add('show');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');

        navItems.forEach((item) => {
            item.classList.add('show');
        });

        menuShow = true;
    } else {
        menuBtn.classList.remove('show');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');

        navItems.forEach((item) => {
            item.classList.remove('show');
        });

        menuShow = false;
    }
})