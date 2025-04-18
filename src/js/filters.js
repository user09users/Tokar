const filters = () => {
    const filtersMenu = document.querySelector('.filters')
    const filters = document.querySelector('.searchPanel__wrapper-item');
    const cancel = document.querySelector('.filters__header-cancel');
    const filtersBtn = document.querySelectorAll('.filters__filter-header');

    filters.addEventListener('click', () => {
        filtersMenu.classList.add('active');
        document.body.style.overflow = "hidden";
    });

    cancel.addEventListener('click', () => {
        filtersMenu.classList.remove('active');
        document.body.style.overflow = "";
    });

    filtersBtn.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            if (parent && parent.querySelector('.filters__filter-content')) {
                parent.classList.toggle('active');
            } else {
                return;
            }
        })
    })

}

export default filters;