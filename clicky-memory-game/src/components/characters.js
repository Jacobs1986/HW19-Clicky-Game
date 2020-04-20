import React from "react";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} srce={props.image} />
            </div>
        </div>
    )
}

export default CharacterCard;