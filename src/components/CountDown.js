import React from "react";
import { useState } from "react";
// import PlayerQuestions from "./PlayerQuestions";

const CountDown = ({ minutes = 0, seconds = 0, handleCountdownFinish, handleNextButton, currentQuestions }) => {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);


    const tick = () => {
        if (paused || over ) return;
        if (m === 0 && s === 0) {
            setOver(true);
        } else if (s == 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };

    const resetTimer = () => {
        setTime([ parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        setOver(false);
        handleCountdownFinish();
    };

    const timesUp = () => {
        setOver(false);
        setPaused(true);
        handleCountdownFinish();
        resetTimer();
    }

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    React.useEffect(() => {
        resetTimer();
        
    }, [currentQuestions]);

    handleNextButton(resetTimer);

    return (
        <div>
            
            <p>{`${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>

        <div>
            {/* Call a function here that has time up logic */}
            {/* {over ? "Time's up!" : ''} */}
            {over ? timesUp()  : ''}

        </div>
            <button onClick={() => setPaused(!paused)}>
                {paused ? 'Resume' : 'Pause'}
            </button>
            <button onClick={() => resetTimer()}>
                Restart
            </button>
        </div>
    );
};

export default CountDown;