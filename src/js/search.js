const search = () => {
    try {
        const input = document.getElementById('search');
        const filtersCategoryButton = document.querySelectorAll('.filtersCategoryButton');
        const container = document.querySelector('.catalogSecondPage__wrapper');
        const sortBtns = document.querySelectorAll('.sortBtn');
        const areaSlider = document.querySelector('input[type="range"][id="myRange"]');
        const priceSlider = document.querySelector('input[type="range"][id="priceRange"]');
        const allItems = Array.from(container.querySelectorAll('.catalogSecondPage__item'));
        const createBlock = document.querySelector('.catalogSecondPage__create');
        const moreBlock = document.querySelector('.catalogSecondPage__more');
        const mobileSearch = document.querySelector('.searchPanel__wrapper-item-search');
        const mobileSearchBlock = document.querySelector('.catalogSecondPage__search');


        let activeCategories = [];
        let searchQuery = '';
        let areaValue = parseInt(areaSlider.value);
        let priceValue = parseInt(priceSlider.value);
        let currentSort = null;

        mobileSearch.addEventListener('click', () => {
            mobileSearchBlock.classList.toggle('visible'); // Use CSS to show/hide
        });

        const applyAllFilters = () => {
            let filteredItems = allItems.filter(item => {
                const title = item.querySelector('.catalogSecondPage__item-title').textContent.toLowerCase();
                const cardCategories = item.dataset.category.split(',').map(c => c.trim().toLowerCase());
                const itemArea = parseInt(item.dataset.area);
                const itemPrice = parseInt(item.dataset.price);

                const matchesSearch = title.includes(searchQuery);
                const matchesCategory = activeCategories.length === 0 || activeCategories.some(cat => cardCategories.includes(cat));
                const matchesArea = itemArea >= areaValue;
                const matchesPrice = itemPrice >= priceValue;

                return matchesSearch && matchesCategory && matchesArea && matchesPrice;
            });

            // Sort if a sort type is active
            if (currentSort) {
                filteredItems.sort((a, b) => {
                    if (currentSort === 'Алфавиту') {
                        return a.querySelector('.catalogSecondPage__item-title span').textContent.localeCompare(
                            b.querySelector('.catalogSecondPage__item-title span').textContent
                        );
                    } else if (currentSort === 'Цене') {
                        return parseInt(a.dataset.price) - parseInt(b.dataset.price);
                    } else if (currentSort === 'Популярности') {
                        return parseInt(b.dataset.popularity) - parseInt(a.dataset.popularity);
                    }
                });
            }

            // Clear and re-append filtered (and sorted) items
            container.innerHTML = '';
            filteredItems.forEach(item => container.appendChild(item));

            if (createBlock) container.appendChild(createBlock);
            if (moreBlock) container.appendChild(moreBlock);
        };

        const handleCategoryButtons = () => {
            filtersCategoryButton.forEach(btn => {
                btn.addEventListener('click', () => {
                    const btnName = btn.textContent.toLowerCase().trim();

                    if (activeCategories.includes(btnName)) {
                        btn.classList.remove('active');
                        activeCategories = activeCategories.filter(cat => cat !== btnName);
                    } else {
                        btn.classList.add('active');
                        activeCategories.push(btnName);
                    }

                    applyAllFilters();
                });
            });
        };

        const handleSearch = () => {
            input.addEventListener('input', () => {
                searchQuery = input.value.toLowerCase();
                applyAllFilters();
            });
        };

        const handleRangeSliders = () => {
            areaSlider.addEventListener('input', () => {
                areaValue = parseInt(areaSlider.value);
                applyAllFilters();
            });

            priceSlider.addEventListener('input', () => {
                priceValue = parseInt(priceSlider.value);
                applyAllFilters();
            });
        };

        const handleSortButtons = () => {
            sortBtns.forEach(sortBtn => {
                sortBtn.addEventListener('click', () => {
                    const sortType = sortBtn.textContent.trim();

                    if (currentSort === sortType) {
                        // Unset sort
                        sortBtns.forEach(btn => btn.classList.remove('active'));
                        currentSort = null;
                    } else {
                        // Set new sort
                        sortBtns.forEach(btn => btn.classList.remove('active'));
                        sortBtn.classList.add('active');
                        currentSort = sortType;
                    }

                    applyAllFilters();
                });
            });
        };

        handleSearch();
        handleCategoryButtons();
        handleRangeSliders();
        handleSortButtons();
    } catch { };
};

export default search;
