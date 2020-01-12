import React, { Component } from "react";
import GameHeader from "./components/game-header/";
import Card from "./components/card";

class Game extends Component {
  state = {
    clicks: 0,
    best: 0,
    wins: 0,
    cards: [
      {
        imageUrl: "./assets/images/img01.jpg",
        alt: "one"
      },
      {
        imageUrl: "./assets/images/img02.jpg",
        alt: "two"
      },
      {
        imageUrl: "./assets/images/img03.jpg",
        alt: "three"
      },
      {
        imageUrl: "./assets/images/img04.jpg",
        alt: "four"
      },
      {
        imageUrl: "./assets/images/img05.jpg",
        alt: "five"
      },
      {
        imageUrl: "./assets/images/img06.jpg",
        alt: "six"
      },
      {
        imageUrl: "./assets/images/img07.jpg",
        alt: "seven"
      },
      {
        imageUrl: "./assets/images/img08.jpg",
        alt: "eight"
      },
      {
        imageUrl: "./assets/images/img09.jpg",
        alt: "nine"
      },
      {
        imageUrl: "./assets/images/img10.jpg",
        alt: "ten"
      },
      {
        imageUrl: "./assets/images/img11.jpg",
        alt: "eleven"
      },
      {
        imageUrl: "./assets/images/img12.jpg",
        alt: "twelve"
      }
    ],
    clicked: []
  };

  checkClicked = alt => {
    const { clicked, best, clicks, cards } = this.state;
    if (clicked.includes(alt)) {
      alert(
        `That's a duplicate. \nYour current best is ${best}.\nLet's play again!`
      );
      this.setState({ clicks: 0 });
      this.setState({ clicked: [] });
      this.setState({ cards: this.shuffle(cards) });
      return;
    } else if (clicks + 1 === 12) {
      this.processWin();
    } else {
      clicked.push(alt);
      this.setState({ clicks: clicks + 1 });
      this.checkBest(clicks + 1);
      this.setState({ cards: this.shuffle(cards) });
    }
  };

  processWin = () => {
    const { wins, cards } = this.state;
    this.setState({ wins: wins + 1 });
    this.setState({ clicks: 0 });
    this.setState({ clicked: [] });
    this.setState({ best: 0 });
    this.setState({ cards: this.shuffle(cards, true) });
  };

  checkBest = clicks => {
    if (this.state.best < clicks) {
      this.setState({ best: clicks });
    }
  };

  shuffle = (items, win = false) => {
    let copy = items.slice();
    let idx = copy.length;
    let rnd;

    while (idx) {
      rnd = Math.floor(Math.random() * idx--);
      [copy[idx], copy[rnd]] = [copy[rnd], copy[idx]];
    }
    return copy;
  };

  render() {
    const cards = this.state.cards.map(card => {
      return (
        <Card
          alt={card.alt}
          imageUrl={card.imageUrl}
          clicked={this.checkClicked}
          key={card.alt}
        />
      );
    });
    return (
      <div className="game mb-4">
        <GameHeader
          clicks={this.state.clicks}
          best={this.state.best}
          wins={this.state.wins}
        />
        <div className="game-board">{[cards]}</div>
      </div>
    );
  }
}

export default Game;
