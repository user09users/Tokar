const hamburger = () => {
    const hamburger = document.querySelector('.header__mobile-hamburger');
    const close = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const items = document.querySelectorAll('.menu__item');
    const itemsFooter = document.querySelectorAll('.footer__mobile-item');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = "";
    });

    // Only toggle accordion when clicking on the name
    items.forEach(item => {
        const name = item.querySelector('.menu__item-name');
        const content = item.querySelector('.menu__item-content');

        if (name && content) {
            name.addEventListener('click', () => {
                content.classList.toggle('active');
                name.classList.toggle('active');
                item.classList.toggle('active');
            });
        }
    });

    // Footer items, same logic
    itemsFooter.forEach(item => {
        const content = item.querySelector('.footer__mobile-item-content');

        item.addEventListener('click', (e) => {
            // Only toggle if the clicked element is NOT inside the content
            if (!content.contains(e.target)) {
                content.classList.toggle('active');
                item.classList.toggle('active');
            }
        });
    });
};

export default hamburger;