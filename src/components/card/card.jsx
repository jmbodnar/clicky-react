import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  updateClicked = () => {
    const { clicked } = this.state;
    return this.setState({ clicked: !clicked });
  };

  render() {
    return (
      <input
        // ----- For debuggning ----- //
        // data-clicked={this.state.clicked}
        type="image"
        className="card"
        src={this.props.imageUrl}
        alt={this.props.alt}
        onClick={event => {
          this.props.clicked(this.props.alt);
          this.updateClicked();
        }}
      />
    );
  }
}

export default Card;
