import useTocarServices from "../../services/services";

import search from "../filters/search";

const create = document.querySelector('.catalogSecondPage__create');

const catalogSecondPage = () => {
    if (window.location.pathname === '/catalog.html' || window.location.pathname === '/catalog') {
        // Or whatever page URL is
        //  catalog.js code here

        const { getData } = useTocarServices();

        getData('http://localhost:3000/catalog')
            .then(data => {
                data.forEach(({ title, subtitle, category, area, price, popularity, dimensions, image }) => {
                    const catalogCard = document.createElement('div');
                    catalogCard.classList.add('catalogSecondPage__item');

                    catalogCard.dataset.category = category;
                    catalogCard.dataset.area = area;
                    catalogCard.dataset.price = price;
                    catalogCard.dataset.popularity = popularity;
                    catalogCard.innerHTML = `
                            <img class="catalogSecondPage__item-img" src="${image}"
                                alt="barcelona">
                            <div class="catalogSecondPage__item-content">
                               <h3 class="catalogSecondPage__item-title">${title} <span>${subtitle}</span></h3>
                                <div class="catalogSecondPage__item-content-wrapper">
                                    <div class="catalogSecondPage__item-size">
                                        <div><img src="/src/icons/sizes/area.svg" alt="area"></div>
                                        <span>${dimensions}</span>
                                    </div>
                                    <div class="catalogSecondPage__item-size">
                                        <div><img src="/src/icons/sizes/length.svg" alt="length"></div>
                                        <span>${area} м2</span>
                                    </div>
                                    <a href="#" class="button-item catalogSecondPage__item-btn">Ознакомиться</a>
                                    <div class="catalogSecondPage__item-price">${price} грн</div>
                                </div>
                            </div>
                `;

                    document.querySelector('.catalogSecondPage__wrapper').insertBefore(catalogCard, create);
                });
                search();
            });
    }
}

export default catalogSecondPage;