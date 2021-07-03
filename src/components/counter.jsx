import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    image: "https://picsum.photos/400",
    names: ["MukhammadBobur", "Bakhtiyor", "Mukhtasar", "Maftuna"],
  };

  render() {
    return (
      <React.Fragment>
        <figure>
          <figcaption>
            <img src={this.state.image} alt="" />
            <p>These are the random photos</p>
          </figcaption>
        </figure>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;
