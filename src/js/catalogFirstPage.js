import useTocarServices from "../services/services";

const catalogFirstPage = () => {
    if (window.location.pathname === '/') {

        const { getData } = useTocarServices();

        getData('http://localhost:3000/catalogFirstPage')
            .then(
                data => {
                    data.forEach(({ title, description, image, alt, linkText, linkHref, layout }) => {
                        const firstPageCard = document.createElement('div');
                        if (layout) {
                            firstPageCard.classList.add(layout);
                        }
                        firstPageCard.classList.add('catalogFirstPage__item');
                        firstPageCard.innerHTML = `
                         <img src="${image}" alt="${alt}""
                        class="catalogFirstPage__item-img">
                    <div class="catalogFirstPage__item-wrapper">
                        <div class="title-fz400">${title}</div>
                        <p class="catalogFirstPage__item-text text-fw300">
                           ${description}"
                        </p>
                        <a href="${linkHref}"" class="button-circe">
                            <div class="button-circe__circle">
                                <span class="icon-right-open-big"></span>
                            </div>
                            <div class="button-circe__text">${linkText}</div>
                        </a>
                    </div>
                    `;

                        document.querySelector('.catalogFirstPage__wrapper').appendChild(firstPageCard);
                    });
                });
    }
}

export default catalogFirstPage;