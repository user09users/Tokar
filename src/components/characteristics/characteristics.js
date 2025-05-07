import useTocarServices from "../../services/services";


const characteristicsSection = document.querySelector('.characteristics .container');
const wrapper = document.querySelector('.characteristics__wrapper');

const characteristics = () => {
    if (window.location.pathname === '/cardPage' || window.location.pathname === '/cardPage.html') {
        const { getData } = useTocarServices();

        getData('http://localhost:3000/characteristics')
            .then(data => {
                const sizesWrapper = document.createElement('div');
                sizesWrapper.classList.add('characteristics__sizes');
                wrapper.appendChild(sizesWrapper);

                const infoWrapper = document.createElement('div');
                infoWrapper.classList.add('characteristics__info');
                wrapper.appendChild(infoWrapper);

                const descrWrapper = document.createElement('div');
                descrWrapper.classList.add('characteristics__info-descr');
                infoWrapper.appendChild(descrWrapper);

                data.forEach(({ sizes, info, images }) => {
                    // SIZES
                    sizes.forEach(({ image, alt, text }) => {
                        const sizesItem = document.createElement('div');
                        sizesItem.classList.add('characteristics__size');
                        sizesItem.innerHTML = `
                            <img class="characteristics__size-img" src="${image}" alt="${alt}">
                            <div class="characteristics__size-text">${text}</div>
                        `;
                        sizesWrapper.appendChild(sizesItem);
                    });

                    // INFO
                    const { image: infoImgSrc, alt: infoImgAlt, name, technologies, construction_time, links: infoLinks } = info;
                    const { image: techImg, alt: techAlt, text: techText } = technologies;
                    const { image: timeImg, alt: timeAlt, text: timeText } = construction_time;
                    // Add image
                    const infoImg = document.createElement('img');
                    infoImg.classList.add('characteristics__info-img');
                    infoImg.src = infoImgSrc;
                    infoImg.alt = infoImgAlt;
                    infoWrapper.insertBefore(infoImg, descrWrapper);

                    // Add name
                    const nameElement = document.createElement('div');
                    nameElement.classList.add('characteristics__info-name', 'title-fw400');
                    nameElement.textContent = name;
                    descrWrapper.appendChild(nameElement);

                    // Technologies (object)
                    const techItem = document.createElement('div');
                    techItem.classList.add('characteristics__info-tech');
                    techItem.innerHTML = `
                        <img src="${techImg}" alt="${techAlt}">
                        <div>
                            Технологии: <br>
                            <span>${techText}</span>
                        </div>
                    `;
                    descrWrapper.appendChild(techItem);

                    // Construction time (object)
                    const timeItem = document.createElement('div');
                    timeItem.classList.add('characteristics__info-time');
                    timeItem.innerHTML = `
                        <img src="${timeImg}" alt="${timeAlt}">
                        <div>
                            Сроки строительства: <br>
                            <span>${timeText}</span>
                        </div>
                    `;
                    descrWrapper.appendChild(timeItem);

                    const linksUl = document.createElement('div');
                    linksUl.classList.add('characteristics__info-ul');


                    infoLinks.forEach(({ text, url }) => {
                        const infoLink = document.createElement('li');
                        infoLink.classList.add('characteristics__info-li');
                        infoLink.innerHTML = `
                                                    <span class="icon-right-open-big"></span>
                            <a href="${url}">${text}</a>
                    `;
                        linksUl.appendChild(infoLink);
                    });
                    infoWrapper.appendChild(linksUl);

                    const characteristicsImages = document.createElement('div');
                    characteristicsImages.classList.add('characteristics__images');

                    if (Array.isArray(images)) {
                        images.forEach(({ title, src, alt, extraSrc, extraAlt }) => {
                            const characteristicsImage = document.createElement('div');
                            characteristicsImage.classList.add('characteristics__image');
                            characteristicsImage.innerHTML = `
            <h3 class="title-fw800">${title}</h3>
            <img src="${src}" alt="${alt}">
        `;
                            if (extraSrc && extraAlt) {
                                const extraImg = document.createElement('img');
                                extraImg.src = extraSrc;
                                extraImg.alt = extraAlt;
                                characteristicsImage.appendChild(extraImg);
                            }
                            characteristicsImages.appendChild(characteristicsImage);
                        });

                        characteristicsSection.appendChild(characteristicsImages);
                    }
                });
            });
    }
}

export default characteristics;
