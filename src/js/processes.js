import useTocarServices from "../services/services";

const processes = () => {
    if (window.location.pathname === '/cardPage.html' ||
        window.location.pathname === '/cardPage'
    ) {

        const { getData } = useTocarServices();

        getData('http://localhost:3000/processes')
            .then(data => {
                data.forEach(({ title, subtitle, steps }) => {
                    let processesHTML = '';
                    steps.forEach(({ image, alt, text }) => {
                        processesHTML += `
                        <li class="processes__item">
                        <img class="processes__item-img" src="${image}"
                            alt="${alt}">
                        <div class="processes__item-text">${text}
                        </div>
                    </li>
                    `;
                    });
                    const processesBlock = document.createElement('div');
                    processesBlock.classList.add('processes__block');
                    processesBlock.innerHTML = `
                       <div class="processes__block-wrapper">
                    <div class="processes__block-header">
                        <div>${title}</div>
                        <span class="icon-down-open processes__arrow"></span>
                    </div>
                    <div class="processes__block-subtitle title-fw700">${subtitle}</div>
                </div>
                <ul class="processes__block-content">
                  ${processesHTML}
                </ul>
                `;

                    document.querySelector('.processes__wrapper').appendChild(processesBlock);
                });
            });

    }
}

export default processes;