const menuButton = document?.querySelector('[data-menuButton]');
const menuNav = document?.querySelector('[data-menuNav]');
const body = document.body;
const menuNavItems = menuNav?.querySelectorAll('a');
const menuNavList = document?.querySelector('[data-menuNavList]');
const menuScroll = document?.querySelector('[data-menuScroll]');

menuButton?.addEventListener('click', () => {
    body.classList.toggle('stop__scroll');
    menuNavList.classList.toggle('menuNavListVisibility');
    menuButton?.classList.toggle('menuButton__active');
    menuNav?.classList.toggle('menuNav__visible');
    menuScroll?.classList.toggle('menuScrollActive');
})
menuNavItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop__scroll');
        menuButton?.classList.remove('menuButton__active');
        menuNav?.classList.remove('menuNav__visible');
        menuNavList.classList.remove('menuNavListVisibility');
        menuScroll?.classList.remove('menuScrollActive');
    })
})