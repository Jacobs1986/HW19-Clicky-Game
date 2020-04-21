import React from "react";

function Navigation(props) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="brand">Memory Game!</li>
                    <li>Click on an image to start the game!</li>
                    <li>Score: {props.score}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;