import { useLoader } from './hooks';
import { Audio, Container, PreviewPoster, Timing, Video, Visibility, Welcome } from './components';

import './App.css';

function App() {
    const { isPosterOpened, onOpenPoster } = useLoader();

    return (
        <>
            {!isPosterOpened && <PreviewPoster onOpenPoster={onOpenPoster} />}
            <Visibility visible={isPosterOpened}>
                <Container>
                    <Video />
                    {isPosterOpened && <Welcome />}
                    <Timing />
                </Container>
            </Visibility>
            <Audio />
        </>
    );
}

export default App;
