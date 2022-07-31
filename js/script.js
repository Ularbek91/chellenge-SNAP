const header__burger = document?.querySelector('.header__burger');
const header__nav = document?.querySelector('.header__nav');

header__burger?.addEventListener('click', () => {
    header__burger?.classList.toggle('burger--active');
    header__nav.classList.toggle('header__nav--visible');
});


