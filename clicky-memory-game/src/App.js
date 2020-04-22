import React from "react";
import Nav from "./components/Navigation"
import CharacterCard from "./components/characters"
import characters from "./characters.json";

class App extends React.Component {
    state = {
        characters: characters,
        score: 0
    }

    shuffle = array => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array
    }

    imageClick = (index) => {
        if (!characters[index].clicked) {
            characters[index].clicked = true
            this.setState({ score: this.state.score + 1});
            this.setState({ characters: this.shuffle(characters) });
        } else {
            console.log("GAME OVER");
            characters.forEach(reset => {
                reset.clicked = false
            })
            this.setState({ characters: this.shuffle(characters) });
        }
    }

    componentDidMount() {
        this.setState({ characters: this.shuffle(characters) });
    }

    render() {
        return (
            <>
                <Nav 
                    score = {this.state.score}
                />
                {this.state.characters.map((characters, index) =>
                    <CharacterCard
                        imageClick={this.imageClick}
                        index={index}
                        key={characters.id}
                        id={characters.id}
                        name={characters.name}
                        image={characters.image}
                        clicked={characters.clicked}
                    />)}
            </>
        )
    }
}

export default App;