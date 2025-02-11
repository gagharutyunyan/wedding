import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

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
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
                    <SwiperSlide>
                        <img src="/wedding/welcome_poster_1.jpg" alt="welcome" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/wedding/welcome_poster_2.jpg" alt="welcome" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/wedding/welcome_poster_3.jpg" alt="welcome" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/wedding/welcome_poster_4.jpg" alt="welcome" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
