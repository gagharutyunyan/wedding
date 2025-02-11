import { useEffect } from 'react';
import { useLoader } from './hooks';
import { Audio, Container, PreviewPoster, Timing, Video, Visibility, Welcome } from './components';

import './App.css';

function App() {
    const { isPosterOpened, onOpenPoster } = useLoader();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear-animation');
                }
            });
        });

        const squares = document.querySelectorAll('.animate-appear');

        squares.forEach((element) => observer.observe(element));
    }, [isPosterOpened]);

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
