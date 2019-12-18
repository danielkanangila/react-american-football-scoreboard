//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Team from "./components/Team";
import Timer from "./components/Timer";
import ActionButtons from "./components/ActionButtons";

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
          <Timer />
          <Team name="Tigers" zone="away" score={awayScore} />
        </div>
        <BottomRow />
      </section>
      <ActionButtons handleScore={handleScore} />
    </div>
  );
}

export default App;
