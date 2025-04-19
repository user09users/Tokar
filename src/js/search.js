const search = () => {

    const input = document.getElementById('search');
    const filtersCategoryButton = document.querySelectorAll('.filtersCategoryButton');
    const container = document.querySelector('#catalogSecondPage__wrapper');
    const items = Array.from(container.querySelectorAll('.catalogSecondPage__item'));
    const sortBtns = document.querySelectorAll('.sortBtn');
    const areaSlider = document.querySelector('input[type="range"][id="myRange"]');
    const priceSlider = document.querySelector('input[type="range"][class="styled-slider"][id="priceRange"]');

    const name = () => {

        input.addEventListener('input', () => {
            const value = input.value.toLowerCase();

            items.forEach(card => {
                const title = card.querySelector('.catalogSecondPage__item-title');
                const text = title.textContent.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

    };

    let activeCategories = [];

    const buttonActive = () => {
        filtersCategoryButton.forEach(btn => {
            btn.addEventListener('click', () => {
                const btnName = btn.textContent.toLowerCase().trim();

                // Toggle active class and update activeCategories array
                if (activeCategories.includes(btnName)) {
                    btn.classList.remove('active');
                    activeCategories = activeCategories.filter(filter => filter !== btnName);
                } else {
                    btn.classList.add('active');
                    activeCategories.push(btnName);
                }

                // Now filter using all selected categories
                filterByCategories(activeCategories);
            });
        });
    };

    const filterByCategories = (categories) => {
        if (categories.length === 0) {
            // No filter selected: show everything
            items.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }

        items.forEach(card => {
            const cardCategories = card.dataset.category.split(',').map(c => c.trim().toLowerCase());

            // Check if at least one of the active filters matches this card
            const match = categories.some(cat => cardCategories.includes(cat));

            card.style.display = match ? 'block' : 'none';
        });
    };


    document.querySelectorAll('.filters__filter-items .filters__filter-item').forEach(item => {
        item.addEventListener('click', () => {
            const value = item.textContent.trim();

            if (value === 'Алфавиту') sortItems('alpha');
            if (value === 'Цене') sortItems('price');
            if (value === 'Популярности') sortItems('popular');
        });
    });

    sortBtns.forEach(sortBtn => {
        sortBtn.addEventListener('click', () => {
            sortBtn.classList.toggle('active');
        });
    });



    const sortItems = (type) => {

        const sorted = items.sort((a, b) => {
            if (type === 'alpha') {
                return a.querySelector('.catalogSecondPage__item-title span').textContent.localeCompare(
                    b.querySelector('.catalogSecondPage__item-title span').textContent
                );
            } else if (type === 'price') {
                return parseInt(a.dataset.price) - parseInt(b.dataset.price);
            } else if (type === 'popular') {
                return parseInt(b.dataset.popularity) - parseInt(a.dataset.popularity);
            }
        });

        const createBlock = document.querySelector('.catalogSecondPage__create');
        const moreBlock = document.querySelector('.catalogSecondPage__more');
        // Clear and append sorted
        container.innerHTML = '';
        sorted.forEach(item => container.appendChild(item));

        [createBlock, moreBlock].forEach(block => {
            if (block) container.appendChild(block);
        })

    };


    const filterByRange = () => {
        const areaValue = parseInt(areaSlider.value);
        const priceValue = parseInt(priceSlider.value);
        const items = document.querySelectorAll('.catalogSecondPage__item');

        items.forEach(item => {
            const itemArea = parseInt(item.dataset.area);
            const itemPrice = parseInt(item.dataset.price);

            const matchesArea = itemArea >= areaValue;
            const matchesPrice = itemPrice >= priceValue;

            item.style.display = (matchesArea && matchesPrice) ? 'block' : 'none';
        });
    };

    areaSlider.addEventListener('input', filterByRange);
    priceSlider.addEventListener('input', filterByRange);

    name();
    buttonActive();
};

export default search;

