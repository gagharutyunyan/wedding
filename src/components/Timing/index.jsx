import './index.scss';

export const Timing = () => {
    return (
        <div className="timing">
            <div className="timing_title">ТАЙМИНГ</div>
            <ul className="timing_list">
                <li className="timing_list_item">
                    <div className="timing_list_item-left">15:00</div>
                    <div className="timing_list_item-right">Lorem ipsum dolor.</div>
                </li>
                <li className="timing_list_item">
                    <div className="timing_list_item-left">15:00</div>
                    <div className="timing_list_item-right">Lorem ipsum dolor sit.</div>
                </li>
                <li className="timing_list_item">
                    <div className="timing_list_item-left">15:00</div>
                    <div className="timing_list_item-right">Lorem ipsum dolor sit amet.</div>
                </li>
                <li className="timing_list_item">
                    <div className="timing_list_item-left">15:00</div>
                    <div className="timing_list_item-right">Lorem ipsum dolor.</div>
                </li>
            </ul>
        </div>
    );
};
