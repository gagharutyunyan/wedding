import './index.scss';

export const WeddingLocation = () => {
    return (
        <div className="wedding-location">
            <div className="wedding-location_content">
                <div className="wedding-location_title welcome_title">
                    <span className="animate-appear great">Church of St. Sarkis</span>
                </div>
                <div className="wedding-location_content_paragraph_1 animate-appear mont">
                    Венчание произойдет в Церкви Святого Саркиса (Сурб Саркис), <strong>г. Воронеж</strong> - церковь
                    Ново-Нахичеванской и
                    Российской епархий Армянской Апостольской Церкви.
                </div>
                <div className="wedding-location_btn-container mont">
                    <a
                        href="https://yandex.ru/maps/-/CHqNrBkp"
                        target="_blank"
                        className="wedding-location_btn"
                    >
                        Перейти на карту
                    </a>
                </div>
            </div>
            <div className="wedding-location_poster">
                <img src="/church.jpg" alt="" />
            </div>
        </div>
    );
};
