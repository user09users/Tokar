const accordion = (blockSelector, headerSelector, contentSelector, subtitleSelector) => {
    const blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block => {
        const header = block.querySelector(headerSelector);
        const content = contentSelector ? block.querySelector(contentSelector) : null;
        const subTitle = subtitleSelector ? block.querySelector(subtitleSelector) : null;

        if (!header) return;

        header.addEventListener('click', () => {

            block.classList.toggle('active');
            header.classList.toggle('active');
            if (content) content.classList.toggle('active');
            if (subTitle) subTitle.classList.toggle('active');
        });
    });
};

accordion('.processes__block', '.processes__block-header', '.processes__block-content', '.processes__block-subtitle');
accordion('.menu__item', '.menu__item-name', '.menu__item-content');
accordion('.footer__mobile-item', '.footer__mobile-item-header', '.footer__mobile-item-content');
accordion('.filters__filter', '.filters__filter-header', '.filters__filter-content');

export default accordion;