import React from "react";

function Team(props) {

    return (
        <div className={ props.zone }>
            <h2 className={ props.zone + '__name' }>{props.name}</h2>
            <div className={ props.zone + '__score' }>{ props.score }</div>
        </div>
    );
}

export default Team;