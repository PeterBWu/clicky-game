import React, { Component } from "react";
import Header from "./components/Header";
import GameArea from "./components/GameArea";
import Footer from "./components/Footer";
import './index.css'

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    clickedId: [],
    cards: [
      {
        id: 0,
        src: "https://picsum.photos/id/237/300/300"
      },
      {
        id: 1,
        src: "https://picsum.photos/id/27/300/300"
      },
      {
        id: 2,
        src: "https://picsum.photos/id/239/300/300"
      },
      {
        id: 3,
        src: "https://picsum.photos/id/137/300/300"
      },
      {
        id: 4,
        src: "https://picsum.photos/id/227/300/300"
      },
      {
        id: 5,
        src: "https://picsum.photos/id/247/300/300"
      },
      {
        id: 6,
        src: "https://picsum.photos/id/37/300/300"
      },
      {
        id: 7,
        src: "https://picsum.photos/id/23/300/300"
      },
      {
        id: 8,
        src: "https://picsum.photos/id/235/300/300"
      },
      {
        id: 9,
        src: "https://picsum.photos/id/22/300/300"
      },
      {
        id: 10,
        src: "https://picsum.photos/id/257/300/300"
      },
      {
        id: 11,
        src: "https://picsum.photos/id/277/300/300"
      }
    ],
    userMessage: "Click on a Tile to start! Just don't click on the same tile twice!"
  };
  handleClick = id => {
    if (this.state.clickedId.includes(id)) {
      const highScore =
        this.state.currentScore > this.state.topScore
          ? this.state.currentScore
          : this.state.topScore;

      this.setState({
        clickedId: [],
        currentScore: 0,
        topScore: highScore,
        cards: this.state.cards.concat().sort(() => Math.random() - 0.5),
        userMessage: "Incorrect! Start Over!!"
      });
    } else {
      if (this.state.clickedId.length === this.state.cards.length-1){
        this.setState({
          currentScore: 0,
          clickedId: [],
          topScore: this.state.cards.length,
          cards: this.state.cards.concat().sort(() => Math.random() - 0.5),
          userMessage: "You Win!!!"
        });
      return;        
      }
      this.setState({
        currentScore: this.state.currentScore + 1,
        clickedId: [...this.state.clickedId, id],
        cards: this.state.cards.concat().sort(() => Math.random() - 0.5),
        userMessage: "Correct! Continue clicking!!"
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="container">
          <GameArea handleClick={this.handleClick} cards={this.state.cards} userMessage={this.state.userMessage} />
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
