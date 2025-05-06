import { mainSlider } from "./slider";
import useTocarServices from "../services/services";

const cardPageSlider = () => {

    const { getData } = useTocarServices();
    const showCardImages = (selector) => {

        getData(`http://localhost:3000/${selector}`)
            .then(data => {
                const wrapper = document.querySelector('.swiper-wrapper');
                const thumbsContainer = document.querySelector('.cardSlider__thumbs');

                if (!wrapper || !thumbsContainer) return;

                // Create slides dynamically
                data.forEach(({ src, alt }) => {
                    const slide = document.createElement('div');
                    slide.classList.add('swiper-slide', 'cardSlider__img');
                    slide.innerHTML = `<img src="${src}" alt="${alt}">`;
                    wrapper.appendChild(slide);

                    const thumb = document.createElement('img');
                    thumb.classList.add('cardSlider__thumbs-thumb');
                    thumb.src = src;
                    thumb.alt = alt;
                    thumbsContainer.appendChild(thumb);
                });

                // Rebuild the loop properly
                mainSlider.update();
                mainSlider.loopDestroy();
                mainSlider.loopCreate();

                const thumbs = document.querySelectorAll('.cardSlider__thumbs-thumb');

                // Add click events for thumbs after updating loop
                thumbs.forEach((thumb, index) => {
                    thumb.addEventListener('click', () => {
                        const loopedIndex = index % mainSlider.slides.length;
                        mainSlider.slideToLoop(loopedIndex);
                    });
                });

                // Update the active class on slide change
                mainSlider.on('slideChange', () => {
                    const realIndex = mainSlider.realIndex;
                    thumbs.forEach((thumb, i) => {
                        thumb.classList.toggle('active', i === realIndex);
                    });
                });

                thumbs[0]?.classList.add('active');
            });
    };
    if (
        window.location.pathname === '/cardPage' ||
        window.location.pathname === '/cardPage.html'
    ) {
        showCardImages('cardPageSlides');
    }
    else if (window.location.pathname === '/cases' ||
        window.location.pathname === '/cases.html') {
        showCardImages('casesCardPageSlides');
    }

    else {
        return
    };
};

export default cardPageSlider;
