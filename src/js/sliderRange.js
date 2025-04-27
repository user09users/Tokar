
const sliderRange = () => {
    const sliders = document.querySelectorAll('.styled-slider');

    sliders.forEach(slider => {
        const rangeLabel = slider.parentElement.querySelector('.value-indicator');

        function updateSliderUI() {
            const min = +slider.min;
            const max = +slider.max;
            const val = +slider.value;
            const percent = ((val - min) / (max - min)) * 100;
            const sliderWidth = slider.offsetWidth;
            const pos = (percent / 100) * (sliderWidth - 20) + 10;

            if (rangeLabel) {
                rangeLabel.style.left = `${pos}px`;
                rangeLabel.textContent = val.toLocaleString("en-US");
            }

            slider.style.setProperty('--percent', percent + '%');
        }

        slider.addEventListener('input', updateSliderUI);
        window.addEventListener('resize', updateSliderUI);
        updateSliderUI(); // Init
    });
};

export default sliderRange;