const filters = () => {
    const filtersMenu = document.querySelector('.filters')
    const filters = document.querySelector('.searchPanel__wrapper-item');
    const cancel = document.querySelector('.filters__header-cancel');
    const filtersBtn = document.querySelectorAll('.filters__filter-header');

    try {
        filters.addEventListener('click', () => {
            filtersMenu.classList.add('active');
            document.body.style.overflow = "hidden";
        });

        cancel.addEventListener('click', () => {
            filtersMenu.classList.remove('active');
            document.body.style.overflow = "";
        });
    } catch { };

}

export default filters;