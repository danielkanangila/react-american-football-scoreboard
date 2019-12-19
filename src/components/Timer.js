import React from 'react';

function Timer(props) {
    const formartTime = time => {
        if (time < 10) {
        time = `0${time}`;
        }
        return time;
    };
    return (
        <div className="timer">
            {formartTime(props.minutes)}:{formartTime(props.secondes)}
        </div>
    )
}

export default Timer;