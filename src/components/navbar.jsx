import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          Navbar {""}
          <span className="badge bg-pill bg-secondary">
            {this.props.totalCounters}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
