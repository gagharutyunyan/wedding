import { useLoader } from './hooks';
import { Audio, PreviewPoster, Video, Visibility } from './components';

import './App.css';

function App() {
    const { isPosterOpened, onOpenPoster } = useLoader();

    return (
        <>
            {!isPosterOpened && <PreviewPoster onOpenPoster={onOpenPoster} />}
            <Visibility visible={isPosterOpened}>
                <Video />
                <div style={{ height: 200 }}>helllo</div>
            </Visibility>
            <Audio />
        </>
    );
}

export default App;
