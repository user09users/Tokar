const hamburger = () => {
    const hamburger = document.querySelector('.header__mobile-hamburger');
    const close = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.menu__item');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    });
    close.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = "";
    });
    items.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.menu__item-content');
            if (content) {
                content.classList.toggle('active');
                item.classList.toggle('active');
            }
        });
    });
}

export default hamburger;