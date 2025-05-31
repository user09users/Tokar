import { useEffect, useRef } from 'react';
import { initializeSwiper } from 'utils/slider';

function useThumbsSlider(slides, slider, sliderNav) {
    const thumbsRef = useRef([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!slides || slides.length === 0) return;

        swiperRef.current = initializeSwiper(slider, sliderNav);
        const swiperInstance = swiperRef.current;

        thumbsRef.current.forEach((thumb, index) => {
            if (!thumb) return;
            thumb.onclick = () => swiperInstance.slideToLoop(index);
        });

        swiperInstance.on('slideChange', () => {
            const realIndex = swiperInstance.realIndex;
            thumbsRef.current.forEach((thumb, i) => {
                if (thumb) thumb.classList.toggle('active', i === realIndex);
            });
        });

        thumbsRef.current[0]?.classList.add('active');

        return () => {
            thumbsRef.current.forEach((thumb) => {
                if (thumb) thumb.onclick = null;
            });
            if (swiperInstance) swiperInstance.destroy();
        };
    }, [slides]);

    return { thumbsRef };
}

export default useThumbsSlider;
