import { useState } from 'react';

export const useLoader = () => {
    const [isPosterOpened, setIsPosterOpened] = useState(false);

    const onOpenPoster = () => setIsPosterOpened(true);

    return { isPosterOpened, onOpenPoster };
};
