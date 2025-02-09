import { useLoader } from './hooks';
import { Audio, Loader, PreviewPoster, Video, Visibility } from './components';

import './App.css';

function App() {
    const { isReady, isPosterOpened, onOpenPoster } = useLoader();

    return (
        <>
            <Visibility visible={!isReady}>
                <Loader />
            </Visibility>
            <Visibility visible={isReady}>
                <Audio />
                <Visibility visible={!isPosterOpened}>
                    <PreviewPoster onOpenPoster={onOpenPoster} />
                </Visibility>
                <Visibility visible={isPosterOpened}>
                    <Video />
                    <div style={{ height: 200 }}>helllo</div>
                </Visibility>
            </Visibility>
        </>
    );
}

export default App;
