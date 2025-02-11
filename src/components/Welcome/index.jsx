import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './index.scss';

export const Welcome = () => {
    return (
        <div className="welcome">
            <div className="animate-appear">
                <div className="welcome_title">
                    <div className="welcome_title_line"></div>
                    <span className="">Dear Guests!</span>
                </div>
                <div className="welcome_description mont ">
                    <div className="welcome_description_1">
                        Случилось невероятное - наша безграничная любовь дала повод собрать всех родных и
                        близких вместе!
                    </div>
                    <div className="welcome_description_2">
                        С радостью и большой любовью хотим пригласить вас разделить с нами трогательный и
                        важный момент нашей жизни!
                    </div>
                </div>
            </div>
            <div className="welcome_poster">
                <Swipe />
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
        const swiper = document.querySelector('.swiper-welcome');
        observer.observe(swiper);
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            speed={700}
            autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            effect="cube"
            grabCursor={true}
            modules={[EffectCube, Autoplay]}
            className="swiper-welcome"
        >
            <SwiperSlide>
                <img src="/welcome_poster_1.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/welcome_poster_2.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/welcome_poster_3.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/welcome_poster_4.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};
