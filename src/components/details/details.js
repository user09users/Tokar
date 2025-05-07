import useTocarServices from "../../services/services";



const details = () => {
    if (window.location.pathname === '/contacts.html' ||
        window.location.pathname === '/contacts'
    ) {
        const { getData } = useTocarServices();
        getData('http://localhost:3000/details')
            .then(data => {

                const detailsWraper = document.querySelector('.details__wrapper');
                data.forEach(({ label, value }) => {
                    const detailsItem = document.createElement('div');
                    detailsItem.classList.add('details__block');
                    detailsItem.innerHTML = `
                    <img src="/src/icons/details-mark.svg" alt="details-mark" class="details__block-img">
                    <div class="details__block-subblock">
                        <div class="details__block-text">${label}<br>
                            <span>${value}</span>
                        </div>
                    </div>
                `;

                    detailsWraper.appendChild(detailsItem);


                });
            });


    }
}

export default details;