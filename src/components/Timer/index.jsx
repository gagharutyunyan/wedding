import { useEffect, useRef, useState } from 'react';

import './index.scss';

const eventDate = new Date('2025-04-28T14:00:00-06:00');

export const Timer = () => {
    return (
        <div className="timer">
            <p>Осталось</p>
            <Time />
            <div className="timer_labels">
                <span>DAYS</span>
                <span>HOURS</span>
                <span>MINUTES</span>
                <span>SECONDS</span>
            </div>
        </div>
    );
};

const Time = () => {
    const [timer, setTimer] = useState({
        day: '0',
        hour: '0',
        minute: '0',
        second: '0',
    });
    const intervalRef = useRef();

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            const now = new Date();
            const difference = eventDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimer({
                day: String(days),
                hour: String(hours).padStart(2, '0'),
                minute: String(minutes).padStart(2, '0'),
                second: String(seconds).padStart(2, '0'),
            });
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            stopTimer();
        }

        startTimer();
    }, []);

    return (
        <div className="timer_time">
            <span>{timer.day}</span> <span>:</span> <span>{timer.hour}</span> <span>:</span>
            <span>{timer.minute}</span> <span>:</span>
            <span>{timer.second}</span>
        </div>
    );
};
