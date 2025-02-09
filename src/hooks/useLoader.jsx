import { useEffect, useState } from 'react';

export const useLoader = () => {
    const [isPosterOpened, setIsPosterOpened] = useState(false);

    const onOpenPoster = () => setIsPosterOpened(true);

    useEffect(() => {
        document.addEventListener('readystatechange', function () {
            const loadWrapper = document.querySelector('.load-wrapper');
            const app = document.querySelector('.application');

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

            // Функция скрытия прелоадера
            function hideLoader() {
                loadWrapper.style.display = 'none';
            }

            function showApp() {
                app.style.visibility = 'visible';
            }

            // Запуск проверки загрузки медиа каждые 500 мс
            const checkInterval = setInterval(() => {
                if (checkMediaLoaded()) {
                    hideLoader();
                    showApp();
                }
                clearInterval(checkInterval);
            }, 500);

            // Принудительное скрытие через 6 секунд
            const forceHideTimeout = setTimeout(() => {
                hideLoader();
                showApp();
                clearTimeout(forceHideTimeout);
            }, 6000);
        });
    }, []);

    return { isPosterOpened, onOpenPoster };
};
