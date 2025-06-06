import { useEffect, useRef } from 'react';

const SliderWithLabel = ({ min, max, step, value, setValue }) => {
    const inputRef = useRef(null);
    const labelRef = useRef(null);
    useEffect(() => {
        const updateSliderUI = () => {
            if (!inputRef.current || !labelRef.current) return;

            const slider = inputRef.current;
            const label = labelRef.current;
            const minVal = +slider.min;
            const maxVal = +slider.max;
            const val = +slider.value;
            const percent = ((val - minVal) / (maxVal - minVal)) * 100;

            const sliderWidth = slider.offsetWidth;
            const pos = (percent / 100) * (sliderWidth - 20) + 10;

            label.style.left = `${pos}px`;
            label.textContent = val.toLocaleString('ru-RU');

            slider.style.setProperty('--percent', `${percent}%`);
        };

        updateSliderUI(); // on mount
        window.addEventListener('resize', updateSliderUI);

        return () => window.removeEventListener('resize', updateSliderUI);
    }, [value]);

    return (
        <div className="slider-wrapper">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                ref={inputRef}
                onChange={(e) => setValue(Number(e.target.value))}
                className="styled-slider"
            />
            <div ref={labelRef} className="value-indicator" />
        </div>
    );
};

export default SliderWithLabel;
