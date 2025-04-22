import { mainSlider } from "./slider";

const cardPageSlider = () => {
    const thumbs = document.querySelectorAll('.cardSlider__thumbs-thumb');

    if (!mainSlider) return;

    // Sync thumbnails on click
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainSlider.slideToLoop(index);
        });
    });

    // Highlight active thumb on slide change
    mainSlider.on('slideChange', () => {
        const realIndex = mainSlider.realIndex;
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === realIndex);
        });
    });

    // Set first one active by default
    if (thumbs.length) thumbs[0].classList.add('active');
};

export default cardPageSlider;
