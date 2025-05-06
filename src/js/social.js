import useTocarServices from "../services/services";

const social = () => {
    const { getData } = useTocarServices();

    getData('http://localhost:3000/social')
        .then(data => {
            let socialItems = '';

            data.forEach(({ name, href, icon, alt }) => {
                socialItems += `
                    <li class="social__list-item ${name}">
                        <a href="${href}" class="${name}">
                            <img src="${icon}" alt="${alt}">
                        </a>
                    </li>
                `;
            });

            const createSocial = (pushWrapper, createClass, socialClass) => {
                const socialBlock = document.createElement('div');
                socialBlock.classList.add(createClass);
                socialBlock.innerHTML = `
        <div class="${socialClass}">
            <div class="social__title">Связаться напрямую:</div>
            <ul class="social__list">
                ${socialItems}
            </ul>
        </div>
        <a href="tel:+380671755630" class="menu__tel"> +3 80 (67) 175 56 30</a>
        <div class="menu__date">с 09:00 до 18:00 (пн-вс)</div>
        <button data-openModal class="button">Заказать звонок</button>
    `;

                document.querySelector(pushWrapper).appendChild(socialBlock);
            };

            createSocial('.menu__wrapper', 'menu__contacts', "menu__social");
            createSocial('.footer__wrapper', 'footer__contacts', "footer__social");

        })
        .catch(err => console.error('Error loading social block:', err));
};

export default social;
