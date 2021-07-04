import React, { Component } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  render() {
    return (
      <div>
        <span className="badge bg-info m-2">{this.props.id}</span>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          <RemoveIcon />
        </button>

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          <AddIcon />
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          <DeleteSweepIcon />
        </button>
      </div>
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
