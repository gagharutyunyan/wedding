import { useEffect, useState } from 'react';

export const usePlayAudio = () => {
    const [audio, setAudio] = useState(null);

    const playAudio = () => {
        if (audio) {
            audio.volume = 0.3;
            audio.play();
        }
    };

    const pauseAudio = () => {
        if (audio) {
            audio.pause();
        }
    };

    useEffect(() => {
        const audio = document.getElementById('audio');
        setAudio(audio);

        // Остановка и восстановление музыки при изменении видимости страницы
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
    }, [audio]);

    return { playAudio, pauseAudio };
};
