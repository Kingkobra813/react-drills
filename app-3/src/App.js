import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleOnChange = val => {
    this.setState({ filterString: val });
  };

  render() {
    let displayFoods = this.state.foods
      .filter((elm, index) => {
        return elm.includes(this.state.filterString);
      })
      .map((elm, index) => {
        return <h2 key={index}>{elm}</h2>;
      });

    return (
      <div className="App">
        <input
          onChange={e => this.handleOnChange(e.target.value)}
          type="text"
        />
        {displayFoods}
      </div>
    );
  }
}

export default App;
