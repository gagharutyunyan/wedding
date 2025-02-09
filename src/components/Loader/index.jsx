import './index.scss';

export const Loader = () => {
    return (
        <div className="load-wrapper">
            <div className="load-content">
                <div className="load">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
            <div className="loading-text mont">Идет загрузка</div>
        </div>
    );
};
