import React from "react";
import Nav from "./components/Navigation"
import CharacterCard from "./components/characters"
import characters from "./characters.json";

class App extends React.Component {
    state = {
        characters: characters
    }

    
    componentDidMount() {
        console.log(characters);
    }


    render() {
        return (
            <>
            <Nav />
            {this.state.characters.map(characters =>
            <CharacterCard 
                key = {characters.id}
                name = {characters.name}
                image = {characters.image}
            />)}
            </>
        )
    }
}

export default App;