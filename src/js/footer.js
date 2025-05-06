import useTocarServices from "../services/services";

const footer = () => {
    // Or whatever page URL is
    //  catalog.js code here

    const { getData } = useTocarServices();

    getData('http://localhost:3000/navigation')
        .then(data => {
            data.forEach(({ category, links }) => {
                let linksHTML = '';
                links.forEach(({ name, url }) => {
                    linksHTML += `
                                    <li class="text-fw300">
                                        <a href="${url}">
                                            ${name}
                                        </a>
                                    </li>
`;
                });

                const footerBlock = document.createElement('li');
                footerBlock.classList.add('footer__item');
                footerBlock.innerHTML = `
                                <div class="footer__item-header footer__item-header-event">
                                    <span class="footer__item-corner"><span class="icon-down-open"></span></span>
                                    <div class="footer__item-name footer__item-name_white">${category}</div>
                                    <span class="footer__item-corner"><span class="icon-down-open"></span></span>
                                </div>
                                <ul class="footer__item-content">
                                ${linksHTML}
                                </ul>
            `;
                document.querySelector('.footer__items-wrapper').appendChild(footerBlock);
            });
        });

}

export default footer;