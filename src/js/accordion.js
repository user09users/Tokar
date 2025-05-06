const accordion = (blockSelector, headerSelector, contentSelector, subtitleSelector) => {
    const blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block => {
        // Prevent duplicate listeners
        if (block.dataset.accordionInitialized) return;

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

        // Mark as initialized
        block.dataset.accordionInitialized = 'true';
    });
};

const initAccordion = () => {
    accordion('.processes__block', '.processes__block-header', '.processes__block-content', '.processes__block-subtitle');
    accordion('.menu__item', '.menu__item-name', '.menu__item-content');
    accordion('.footer__item', '.footer__item-header', '.footer__item-content');
    accordion('.filters__filter', '.filters__filter-header', '.filters__filter-content');
};

//  Run once initially
document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
});

//  Also run on DOM updates
const observer = new MutationObserver(() => {
    initAccordion(); // Re-apply to any new elements
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

export default accordion;
