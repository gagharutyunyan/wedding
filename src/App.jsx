import { useEffect } from 'react';
import { useLoader } from './hooks';
import {
    Audio,
    Container,
    DressCode,
    Location,
    PreviewPoster,
    Timing,
    Video,
    Visibility,
    WeddingLocation,
    Welcome,
} from './components';

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
            <PreviewPoster onOpenPoster={onOpenPoster} isPosterOpened={isPosterOpened} />
            <Visibility visible={isPosterOpened}>
                <Container>
                    <Video />
                    {isPosterOpened && <Welcome />}
                    <Timing />
                    <WeddingLocation />
                    {isPosterOpened && <Location />}
                    {isPosterOpened && <DressCode />}
                </Container>
            </Visibility>
            <Audio />
        </>
    );
}

export default App;
