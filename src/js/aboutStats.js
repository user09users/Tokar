import useTocarServices from "../services/services";

const aboutStats = () => {
    if (window.location.pathname === '/' ||
        window.location.pathname === '/about' ||
        window.location.pathname === '/about.html'
    ) {
        // Or whatever page URL is
        //  catalog.js code here

        const { getData } = useTocarServices();

        getData('http://localhost:3000/aboutStats')
            .then(data => {
                data.forEach(({ titlePrefix, titleHighlight, titleSuffix, text }) => {
                    const aboutStatsCard = document.createElement('div');
                    aboutStatsCard.classList.add('about__item');
                    aboutStatsCard.innerHTML = `
                     <div class="about__item-title">${titlePrefix}<span class="title-fw400">${titleHighlight}</span>${titleSuffix}</div>
                    <span class="divider"></span>
                    <p class="about__item-text text-fw300">${text}</p>
                `;

                    document.querySelector('.about__items').appendChild(aboutStatsCard);
                });
            });

    };
};

export default aboutStats;