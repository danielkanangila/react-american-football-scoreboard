import React from "react";
import BottomRow from "../BottomRow";
import Team from "./Team";
import Timer from "./Timer";

function Scoreboard(props) {
    return(
        <section className="scoreboard">
            <div className="topRow">
            <Team name="Lions" zone="home" score={ props.homeScore } />
            <Timer minutes={props.minutes} secondes={props.secondes} />
            <Team name="Tigers" zone="away" score={ props.awayScore } />
            </div>
            <BottomRow />
        </section>
    );
}

export default Scoreboard;