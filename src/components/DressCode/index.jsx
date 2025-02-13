import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Palette } from '../Palette';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
            }}
            zoom={true}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="swiper-dress-code"
        >
            <SwiperSlide>
                <img src="/db18333e28b241d4ae234eff585962c2.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/c44b468ec2e05453e94da1932183130d.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/ba90a116a6a1851d8a362dc0615e67f4.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/0412ef6d185258bb9044f451f681219e.jpg" alt="welcome" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/2be7ed0c39165376f2b5063d5c487f2d.jpg" alt="welcome" />
            </SwiperSlide>
        </Swiper>
    );
};
