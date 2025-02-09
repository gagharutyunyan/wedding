import { useLoader } from './hooks';
import { Audio, Loader, PreviewPoster, Video, Visibility } from './components';

import './App.css';

function App() {
    const { isPosterOpened, onOpenPoster } = useLoader();

    return (
        <>
            <Loader />
            <div className="application">
                <Audio />
                <Visibility visible={!isPosterOpened}>
                    <PreviewPoster onOpenPoster={onOpenPoster} />
                </Visibility>
                <Visibility visible={isPosterOpened}>
                    <Video />
                    <div style={{height: 200}}>
                        helllo
                    </div>
                </Visibility>
            </div>
        </>
    );
}

export default App;
