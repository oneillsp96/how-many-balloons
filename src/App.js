import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balloonCount: 100 }
  }

  render() {
    let balloons = [];
    for (let i = 0; i < this.state.balloonCount; i++) {
      let randomHue = Math.floor(Math.random() * 359) + 1;
      balloons.push(<div className="balloon" style={{ background: `hsl(${randomHue}, 40%, 65%)`, animationDuration: "3.5s" }}></div>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How Many Balloons?</h1>
        </header>


        {
          balloons
        }


      </div >
    )
  }
}

export default App;
