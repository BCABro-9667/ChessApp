import React, { useState, useEffect } from 'react';
import '../stylesheet/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function DateTime() {
    const [currentTime, setCurrentTime] = useState({
        date: '',
        time: '',
        greeting: ''
    });

    const getGreeting = (hours) => {
        if (hours >= 5 && hours < 12) {
            return 'Good Morning 🌄';
        } else if (hours >= 12 && hours < 17) {
            return 'Good Afternoon ☀️';
        } else if (hours >= 17 && hours < 21) {
            return 'Good Evening 🌆';
        } else {
            return 'Good Night 🌙';
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            const hours = istTime.getHours();
            const minutes = istTime.getMinutes();
            const seconds = istTime.getSeconds();

            setCurrentTime({
                date: istTime.toLocaleDateString(),
                time: istTime.toLocaleTimeString('en-GB', { hour12: true }).toUpperCase(),
                greeting: getGreeting(hours)
            });
        }, 1000);

        // Cleanup the timer
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="">
                <div className="timeContainer">
                    <FontAwesomeIcon icon={faCloudSun} className="weatherIcon" />
                    <span>{currentTime.date}</span>
                    <span>|</span>
                    <span>{currentTime.time}</span>
                    <span>({currentTime.greeting})</span>
                </div>
               
            </div>
        </>
    );
}

export default DateTime;
