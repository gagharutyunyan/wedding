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
import { PhotoVideo } from './components/PhotoVideo/index.jsx';
import { Contacts } from './components/Contacts/index.jsx';

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
                    <WeddingLocation />
                    {isPosterOpened && <Location />}
                    {isPosterOpened && <DressCode />}
                    <PhotoVideo />
                    <Contacts />
                </Container>
            </Visibility>
            <Audio />
        </>
    );
}

export default App;
