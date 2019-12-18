//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import ActionButtons from "./components/ActionButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ] = useState(0);
  const [secondes, setSecondes] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondes(seconde => seconde + 1);
        if (secondes === 59) {
          setMinutes(minute => minute + 1);
          setSecondes(0);
        }
      }, 1000);
    }

    if (minutes >= 60 && secondes === 0) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [isRunning, secondes, minutes]);

  const handleScore = e => {
    const from =  e.target.getAttribute('class');
    const points = from.includes('touchdown') ? 7 : 3;
    let newScore = 0;

    if (from.includes('home')) {
      newScore = homeScore + points;
      setHomeScore(newScore)
    } else if (from.includes('away')) {
      newScore = awayScore + points;
      setAwayScore(newScore);
    }
  }

  return (
    <div className="container">
      <Scoreboard 
      homeScore={ homeScore } 
      awayScore={ awayScore }
      minutes={minutes}
      secondes={secondes} />
      <ActionButtons handleScore={ handleScore } />
    </div>
  );
}

export default App;
