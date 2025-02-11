import './index.scss';

export const Timing = () => {
    return (
        <div className="timing">
            <div className="welcome_title">
                <div className="welcome_title_line"></div>
                <span className="animate-appear">Plan of the day</span>
            </div>
            <ul className="timing_list mont">
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left">12:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">ВЕНЧАНИЕ В ЦЕРКВИ, ВОРОНЕЖ</div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left h-33">15:30</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">СБОР ГОСТЕЙ</div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left">16:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">СВАДЕБНАЯ ЦЕРЕМОНИЯ</div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left mont">17:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">ПРАЗДНИЧНЫЙ УЖИН</div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left h-23">23:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">ЗАВЕРШЕНИЕ ТОРЖЕСТВА</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
