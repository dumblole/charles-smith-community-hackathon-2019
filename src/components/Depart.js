import React, { Component } from "react";
import ReactSVG from "react-svg";
import { Link } from "react-router-dom";
import Plane from "./Plane";

class App extends Component {

  render() {
    return (
      <Plane data={this.props.location.state}  />
    );
  }
}

export default App;
