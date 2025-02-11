import './index.scss';

export const Video = () => {
    return (
        <div className="video_container">
            <video className="video_preview" preload="auto" muted playsInline autoPlay="autoplay" loop="loop">
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <div className="video_content">
                <div className="video_content_title">
                    <span className="video_content_title_1 great">Gagik</span>
                    <span className="video_content_title_2 great">and</span>
                    <span className="video_content_title_3 great">Jessica</span>
                </div>
                <div className="video_content_subtitle outfit">Wedding Day</div>
                <div className="video_content_paragraph ">[ so this is love ]</div>
                <div className="video_content_date outfit">28 / 04 / 25</div>
                <span className="loader_down"></span>
            </div>
        </div>
    );
};
