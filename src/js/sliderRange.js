/* const sliderRange = () => {
    const slider = document.getElementById('customRange');
    const rangeLabel = document.getElementById('rangeValue');

    function updateSliderUI() {
        const min = +slider.min;
        const max = +slider.max;
        const val = +slider.value;

        const percent = ((val - min) / (max - min)) * 100;
        slider.style.setProperty('--percent', percent + '%');

        const sliderWidth = slider.offsetWidth;
        const pos = (percent / 100) * (sliderWidth - 20) + 10;

        rangeLabel.style.left = `${pos}px`;
        rangeLabel.textContent = val.toLocaleString("en-US");
    }

    slider.addEventListener('input', updateSliderUI);
    window.addEventListener('resize', updateSliderUI);
    updateSliderUI();
}
export default sliderRange;

 */

const sliderRange = () => {
    const sliders = document.querySelectorAll('.styled-slider');

    sliders.forEach(slider => {
        /*    const rangeLabel = slider.parentElement.querySelector('.value-indicator, .range-label'); */
        const rangeLabel = slider.closest('.slider-container').querySelector('.value-indicator, .range-label');

        function updateSliderUI() {
            const min = +slider.min;
            const max = +slider.max;
            const val = +slider.value;
            const percent = ((val - min) / (max - min)) * 100;
            const sliderWidth = slider.offsetWidth;

            // move label
            const pos = (percent / 100) * (sliderWidth - 20) + 10;
            if (rangeLabel) {
                rangeLabel.style.left = `${pos}px`;
                rangeLabel.textContent = val.toLocaleString("en-US");
            }

            // optional: custom property for additional styles
            slider.style.setProperty('--percent', percent + '%');
        }

        slider.addEventListener('input', updateSliderUI);
        window.addEventListener('resize', updateSliderUI);
        updateSliderUI();
    });
};

export default sliderRange;
