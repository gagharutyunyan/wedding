import { useEffect, useState } from 'react';

export const useLoader = () => {
    const [isPosterOpened, setIsPosterOpened] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const onOpenPoster = () => setIsPosterOpened(true);

    useEffect(() => {
        function showApp() {
            setIsReady(true);
        }

        document.addEventListener('readystatechange', function () {
            // Проверка загрузки медиаэлементов
            function checkMediaLoaded() {
                const mediaElements = document.querySelectorAll('video, audio');
                for (let i = 0; i < mediaElements.length; i++) {
                    if (!mediaElements[i].readyState || mediaElements[i].readyState < 1) {
                        return false;
                    }
                }
                return true;
            }

            // Запуск проверки загрузки медиа каждые 500 мс
            const checkInterval = setInterval(() => {
                if (checkMediaLoaded()) {
                    showApp();
                }
                clearInterval(checkInterval);
            }, 500);
        });

        // Принудительное скрытие через 6 секунд
        const forceHideTimeout = setTimeout(() => {
            showApp();
            clearTimeout(forceHideTimeout);
        }, 3500);
    }, []);

    return { isReady, isPosterOpened, onOpenPoster };
};
