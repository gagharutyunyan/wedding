import './index.scss';

export const Timing = () => {
    return (
        <div className="timing">
            <div className="welcome_title">
                <span className="animate-appear great">Plan of the day</span>
            </div>
            <ul className="timing_list mont">
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left">12:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">
                            <span>
                                ВЕНЧАНИЕ В ЦЕРКВИ, <strong>ВОРОНЕЖ</strong>
                            </span>
                        </div>
                        <div className="timing_list_item-bottom">
                            Одно из самый главных таинств, в котором Бог дает свое благословение на создание
                            нашей семьи
                        </div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left h-33">15:30</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">
                            <span>
                                СБОР ГОСТЕЙ, <strong>ROYAL</strong>
                            </span>
                        </div>
                        <div className="timing_list_item-bottom">
                            Теплая обстановка объятий, знакомства и ожидания нас
                        </div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left">16:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">СВАДЕБНАЯ ЦЕРЕМОНИЯ</div>
                        <div className="timing_list_item-bottom">
                            Вы станете свидетелями трогательного момента
                        </div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left mont">17:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">ПРАЗДНИЧНЫЙ УЖИН</div>
                        <div className="timing_list_item-bottom">
                            Будет много танцев, веселья, поздравлений и, конечно любви
                        </div>
                    </div>
                </li>
                <li className="timing_list_item animate-appear">
                    <div className="timing_list_item-left h-23">23:00</div>
                    <div className="timing_list_item-right1 outfit">
                        <div className="timing_list_item-right">ЗАВЕРШЕНИЕ ТОРЖЕСТВА</div>
                        <div className="timing_list_item-bottom">
                            Мы будем благодарны каждому за счастливые моменты этого дня
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
