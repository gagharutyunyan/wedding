import './index.scss';

export const PhotoVideo = () => {
    return (
        <div className="photo-video">
            <div className="animate-appear">
                <div className="photo-video_title">
                    <div className="photo-video_title_line"></div>
                    <span className="">Photo & Video</span>
                </div>
                <div className="photo-video_description mont ">
                    Так же мы создали телеграмм-чат нашего праздника, где можно будет поделиться фотографиями
                    и видео после свадьбы
                </div>
            </div>
            <div className="wedding-location_btn-container mont">
                <a href="https://yandex.ru/maps/-/CHqNrBkp" target="_blank" className="wedding-location_btn">
                    Вступить в чат
                </a>
            </div>
            <div className="photo-video_poster">
                <img src="/DSC00754_resized.jpg" alt="" />
            </div>
        </div>
    );
};
