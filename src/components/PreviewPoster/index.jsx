import { Finger } from '../Finger';
import './index.scss';

export const PreviewPoster = ({ onOpenPoster }) => {
    return (
        <div className="poster">
            <div className="poster_content">
                <div className="poster_title outfit">
                    <span>G</span> <span className="poster_title_line">|</span> <span>J</span>
                </div>
                <div className="poster_subtitle great">She said, yes!</div>
                <div className="poster_paragraph">Разблокируйте приглашение</div>
                <Finger onOpenPoster={onOpenPoster} />
            </div>
        </div>
    );
};
