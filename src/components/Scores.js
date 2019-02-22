import React from "react"

function Scores(props) {
    return (
        <div className="targetScore">
            <h3>Target Score: {props.targetScore}</h3>
            <h3>Your Score: {props.score}</h3>
        </div>
    );
}

export default Scores