import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: ["I", "am", "writing", "an", "Array"]
    };
  }
  render() {
    return (
      <div className="App">
        <h2>
          <ul>{this.state.array[0]}</ul>
          <ul>{this.state.array[1]}</ul>
          <ul>{this.state.array[2]}</ul>
          <ul>{this.state.array[3]}</ul>
          <ul>{this.state.array[4]}</ul>
        </h2>
      </div>
    );
  }
}

export default App;
