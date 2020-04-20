import React from "react";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick ={() => {props.imageClick()}}/>
            </div>
        </div>
    )
}

export default CharacterCard;