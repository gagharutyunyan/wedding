export const Container = ({ children }) => {
    return (
        <div className="center">
            <div className="app-container">
                <div>{children}</div>
            </div>
        </div>
    );
};
