import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Palette } from '../Palette';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './index.scss';

export const DressCode = () => {
    return (
        <div className="dress-code">
            <div className="animate-appear">
                <div className="dress-code_title">
                    <div className="dress-code_title_line"></div>
                    <span className="">Dress Code</span>
                </div>
                <div className="dress-code_description mont ">
                    Нам будет особенно приятно, <br />
                    если вы поддержите стиль <br />
                    нашей свадьбы в своих образах
                </div>
            </div>
            <div className="dress-code_palette">
                <Palette />
            </div>
            <div className="dress-code_poster">
                <Swipe />
            </div>
        </div>
    );
};

const Swipe = () => {
    return (
        <Swiper
            speed={1500}
            autoplay={{
                delay: 1000000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            zoom={true}
            cardsEffect={{
                perSlideRotate: 5,
            }}
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="swiper-dress-code"
        >
            <SwiperSlide>
                <img src="/5bf4a32591d7a2a101d62b9eff493aa8.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/2d0588128d9d6d559524adc06b554b58.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/5747dcd918f9b4ea7dcc0ab938ef55d5.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/b1fef8dfed03a9396c597020f9ee3004.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/f986b52a16b4311e462e2213944c4e29.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};
