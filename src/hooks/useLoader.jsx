import { useState } from 'react';

export const useLoader = () => {
    const [isPosterOpened, setIsPosterOpened] = useState(false);
    const [isAllReady, setIsAllReady] = useState(false);

    const onScrollReady = () => setIsAllReady(true);
    const onOpenPoster = () => setIsPosterOpened(true);

    return { isPosterOpened, onOpenPoster, isAllReady, onScrollReady };
};
