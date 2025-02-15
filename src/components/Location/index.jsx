import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';

import 'swiper/css/effect-creative';
import './index.scss';

export const Location = () => {
    return (
        <div className="location">
            <div className="location_poster">
                <Swipe />
            </div>
            <div className="location_content">
                <div className="location_title welcome_title">
                    <div className="welcome_title_line"></div>
                    <span className="animate-appear great">Royal</span>
                </div>
                <div className="location_content_paragraph_1 animate-appear mont">
                    Наша свадьба пройдет в архитектурном комплексе , настоящем замке XIV века «Royal»
                </div>
                <div className="location_content_paragraph_2 animate-appear mont">
                    В лучших традициях королевской Франции прямо с порога вы переместитесь на несколько веков
                    назад.
                </div>
                <div className="location_btn-container mont">
                    <a href="https://yandex.ru/maps/-/CHqbyAPc" target="_blank" className="location_btn">
                        Перейти на карту
                    </a>
                </div>
            </div>
        </div>
    );
};

const Swipe = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                swiperRef.current.swiper.autoplay.start();
            }
        });
        const swiper = document.querySelector('.swiper-location');
        observer.observe(swiper);
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            speed={1000}
            autoplay={{
                delay: 4000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            effect="creative"
            grabCursor={true}
            modules={[EffectCreative, Autoplay]}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            className="swiper-location"
        >
            <SwiperSlide>
                <img src="/royal_1.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/royal_2.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/royal_3.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};
