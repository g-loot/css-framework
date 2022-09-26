import React, { useEffect, useRef, useState } from "react";

function DigitalClock({ mode, pause, standby }) {
    const [display, setDisplay] = useState(`${mode.duration}:00`);
    const [duration, setDuration] = useState(mode.duration * 60 - 1);
    const [currentMode, setCurrentMode] = useState(mode);
    let countdown;
    countdown = useInterval(() => {
        let minutes, seconds

        // if (!pause) {
        setDuration(duration => duration - 1)
        // console.log(duration + 1)
        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        setDisplay(
            `${minutes}:${seconds}`
        );
        document.title = `${minutes}:${seconds}`
        // }
        if (standby) {
            setDuration(mode.duration * 60 - 1)
            setDisplay(
                `${mode.duration}:00`
            )
        }
        else {
            // countdown = setInterval(timer, 1000);
            if (duration < 0) {
                // alert('f')
                clearInterval(countdown)
            }
        }

        // return () => {
        //     clearInterval(countdown);
        // };
    }, !pause && duration >= 0 ? 1000 : null, mode, duration, standby, currentMode);

    function useInterval(callback, delay, mode, duration) {
        const savedCallback = useRef();
        let id;

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            console.log(mode)
            // setDisplay(prevDisplay => {
            //     console.log('prevDisplay', prevDisplay)
            //     return `${prevDisplay}`
            // })
            // setDuration(prevDuration => {
            //     console.log('prevDuration', prevDuration, duration)
            //     return prevDuration
            // })

            if (currentMode.code !== mode.code || standby) {
                setDisplay(`${mode.duration}:00`)
                setDuration(mode.duration * 60 - 1)
                setCurrentMode(mode)
            }
            console.log(duration === 0, 'hhhhhhhh')

            function tick() {
                savedCallback.current();
            }
            if (delay !== null && !standby) {
                id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay, mode, duration, standby, currentMode]);
    }

    return (

        <>{ display }</>


    );
}

export default DigitalClock;
