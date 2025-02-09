import './index.scss';

export const Visibility = ({ visible, children }) => {
    const visibility = visible ? 'visible' : 'hidden';
    return <div className={visibility}>{children}</div>;
};
