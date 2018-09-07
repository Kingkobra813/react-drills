import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
    };
  }

  handleUserName = user => {
    this.setState({ userName: user });
  };

  handlePassword = pass => {
    this.setState({ password: pass });
  };

  handleLogin = () => {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={e => this.handleUserName(e.target.value)}
        />
        <input
          type="text"
          onChange={e => this.handlePassword(e.target.value)}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
