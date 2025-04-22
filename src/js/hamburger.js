const hamburger = () => {
    const hamburger = document.querySelector('.header__mobile-hamburger');
    const close = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = "";
    });
};

export default hamburger;