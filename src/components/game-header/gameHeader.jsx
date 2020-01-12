import React, { Component } from "react";

class GameHeader extends Component {
  render() {
    return (
      <header className="game-header">
        <div>
          Current Clicks: <span>{this.props.clicks}</span>
        </div>
        <div>
          Current Best: <span>{this.props.best}</span>
        </div>
        <div>
          Total Wins: <span>{this.props.wins}</span>
        </div>
      </header>
    );
  }
}

export default GameHeader;
