import useTocarServices from "../../services/services";


const reason = () => {
    if (window.location.pathname === '/' ||
        window.location.pathname === '/about' ||
        window.location.pathname === '/about.html'
    ) {
        const { getData } = useTocarServices();
        getData('http://localhost:3000/reasons')
            .then(data => {
                data.forEach(({ icon, alt, text }) => {
                    const reasonCard = document.createElement('li');
                    reasonCard.classList.add('reason__item');
                    reasonCard.innerHTML = `
               <img src="${icon}" alt="${alt}" class="reason__item-img">
                        <p class="reason__item-text text-fw300">${text.replace(/\n/g, '<br>')}</p>
            `;

                    document.querySelector('.reason__list').appendChild(reasonCard);
                });
            });
    }
}

export default reason;