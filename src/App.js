//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Team from "./components/Team";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ] = useState(0);

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
      <section className="scoreboard">
        <div className="topRow">
          <Team name="Lions" zone="home" score={homeScore} />
          <div className="timer">00:03</div>
          <Team name="Tigers" zone="away" score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ handleScore } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ handleScore } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ handleScore } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ handleScore } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
