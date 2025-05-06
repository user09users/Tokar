import useTocarServices from "../services/services";


const variations = () => {
    if (window.location.pathname === '/' ||
        window.location.pathname === '/works' ||
        window.location.pathname === '/works.html'
    ) {

        const { getData } = useTocarServices();

        getData('http://localhost:3000/variations')
            .then(data => {
                data.forEach(({ image, alt, title, links }) => {
                    let linksHTML = '';
                    links.forEach(link => {
                        linksHTML +=
                            `
                          <li>
                                <a href="#">
                                    <span class="icon-right-open-big"></span>
                                    <div class="text-fw300">${link}</div>
                                </a>
                            </li>
                        `;
                    });
                    const variationsCard = document.createElement('div');
                    variationsCard.classList.add('variations__item');
                    variationsCard.innerHTML = `
                    <div class="variatons__item-img">
                        <img src="${image}" alt="${alt}">
                    </div>
                    <div class="variations__item-content">
                        <h3 class="variations__item-title title-fw400 ">${title}</h3>
                        <ul class="variations__list">
                          ${linksHTML}
                        </ul>
                    </div>
                `;

                    document.querySelector('.variations__wrapper').appendChild(variationsCard);
                });
            });

    };
}

export default variations;