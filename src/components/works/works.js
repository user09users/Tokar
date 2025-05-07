import useTocarServices from "../../services/services";

const works = () => {
    if (window.location.pathname === '/works.html' || window.location.pathname === '/works') {
        const { getData } = useTocarServices();

        getData('http://localhost:3000/works')
            .then(data => {
                data.forEach(({ title, area, image, alt, link, class: classBig }) => {
                    const worksCard = document.createElement('div');
                    worksCard.classList.add('works__card');
                    if (classBig) {
                        worksCard.classList.add('big');
                    }
                    worksCard.innerHTML = `
                    <img src="${image}" alt="${alt}" class="works__card-img">
                    <div class="works__card-content">
                        <h3 class="works__card-title title-card">${title}</h3>
                        <div class="works__card-wrapper">
                            <a href="${link}" class=" works__card-btn button-works">Подробнее</a>
                            <div class="works__card-size">
                                <div><img src="/src/icons/sizes/area.svg" alt="width-height"></div>
                                <span>${area} m2</span>
                            </div>
                        </div>
                    </div>
                    `;

                    document.querySelector('.works__wrapper').appendChild(worksCard);
                });
            });
    };
};



export default works;