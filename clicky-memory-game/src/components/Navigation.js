import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="brand">Memory Game!</li>
                        <li>Click on an image to start the game!</li>
                        <li>Score</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;