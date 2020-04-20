import React from "react";
import Nav from "./components/Navigation"
import CharacterCard from "./components/characters"
import characters from "./characters.json";

class App extends React.Component {
    state = {
        characters: characters
    }

    imageClick = (id) => {
        let characterIndex = id - 1;
        if (!characters[characterIndex].clicked) {
            characters[characterIndex].clicked = true;
            this.setState({characters: characters})
        } else {
            console.log("GAME OVER")
        }
    }

    render() {
        return (
            <>
            <Nav />
            {this.state.characters.map(characters =>
            <CharacterCard
                imageClick = {this.imageClick}
                key = {characters.id}
                id = {characters.id}
                name = {characters.name}
                image = {characters.image}
                clicked = {characters.clicked}
            />)}
            </>
        )
    }
}

export default App;