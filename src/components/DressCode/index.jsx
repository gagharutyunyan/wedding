import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Palette } from '../Palette';

import './index.scss';

export const DressCode = () => {
    return (
        <div className="dress-code">
            <div className="animate-appear">
                <div className="dress-code_title">
                    <span className="great">Dress Code</span>
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
            <div className="dress-code_subtitle great">Девушки:</div>
            <div className="dress-code_poster">
                <Swipe />
            </div>
            <div className="dress-code_subtitle great">Парни:</div>
            <div className="dress-code_poster">
                <Swipe2 />
            </div>
        </div>
    );
};

const Swipe = () => {
    return (
        <Swiper
            speed={700}
            autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            cardsEffect={{
                perSlideRotate: 3,
            }}
            effect="cards"
            modules={[EffectCards, Autoplay]}
            className="swiper-dress-code"
        >
            <SwiperSlide>
                <img src="/04465b5e966b92fb51d2b0bfbdd7bd6f.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/e659fb4c162b1b00646386baf8a835e7.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/20e60b25748991dad9c96a66af57263b.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/ea8b197196e0aa2cf2f0e01c207dee5f.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/7109e59100a33ae9cea804092bbbd14c.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/93b29de5b997cb6e500e907e9556c24d.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/77cbf5113dc736778d399a23c50791a7.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/5bf4a32591d7a2a101d62b9eff493aa8.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/2d0588128d9d6d559524adc06b554b58.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};

const Swipe2 = () => {
    return (
        <Swiper
            speed={700}
            autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            cardsEffect={{
                perSlideRotate: 3,
            }}
            effect="cards"
            modules={[EffectCards, Autoplay]}
            className="swiper-dress-code swiper-dress-code2"
        >
            <SwiperSlide>
                <img src="/8af87d162df0145142ec12cb650721ab.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/de4ede490d2a878197703403a95bf67a.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/f17c83e5a8c1c26aff7224c93652a476.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/4238da9473a386b1a8f946da810b1eef.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/804e3e173fe409d95b866a220725619a.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/2be7ed0c39165376f2b5063d5c487f2d.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/f986b52a16b4311e462e2213944c4e29.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/b1fef8dfed03a9396c597020f9ee3004.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};
