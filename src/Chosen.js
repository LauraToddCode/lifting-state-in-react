import React from "react";

function Chosen(props) {
    return (
        <div id="chosenContainer">
            <p>Chosen option:</p>
            <p>{props.choice}</p>
        </div>
    )
}

export default Chosen;