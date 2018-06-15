import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balloonCount: 0 }
    this.changeBalloonNumber = this.changeBalloonNumber.bind(this);
  }

  changeBalloonNumber(balloonNumber){
    this.setState({balloonCount: Math.ceil(balloonNumber)});
  }

  render() {
    let balloons = [];
    for (let i = 0; i < this.state.balloonCount; i++) {
      let randomHue = Math.floor(Math.random() * 359) + 1;
      balloons.push(<div className="balloon" style={{ background: `hsl(${randomHue}, 40%, 65%)`, animationDuration: "3.5s" }}></div>);
    }

  if (this.state.balloonCount != 0){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How Many Balloons?</h1>
          <h4>Answering the age old question of how many balloons it would take to lift something.</h4>
          <WeightInput changeBalloonNumber = {this.changeBalloonNumber}/>
        </header>
        <h1>It would take {this.state.balloonCount} balloons</h1>

        {
          balloons
        }


      </div >
    )
    }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How Many Balloons?</h1>
          <h4>Answering the age old question of how many balloons it would take to lift something.</h4>
          <WeightInput changeBalloonNumber = {this.changeBalloonNumber}/>
        </header>


      </div >
    )
  }
  }
}

class WeightInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: 'kg',
      weight: 0
    };
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUnitChange(){
    if(this.state.unit === 'lbs'){
      this.setState({unit: 'kg'});
    }
    else{
      this.setState({unit: 'lbs'});
    }
    
  }

   handleWeightChange(event) {
    this.setState({weight: event.target.value});
    console.log(this.state.weight);
  }

  handleSubmit(){
  if(this.state.weight < 0)
      {

      }
  else{
    if(this.state.unit == 'kg')
      {
        let pAir = 1.225; //kg/m^3
        let pHe = 0.1625; //lg/m^3
        let Vb = 5; //NNEEEEEDD BALLLOOOON VOLUME
        let mb = 0.012; //kg
        let g = 9.807; //m/s^2

        let N = this.state.weight /((g*Vb*(pAir-pHe))-(mb*g));
        console.log(N);
        this.props.changeBalloonNumber(N);
      }
    else
      {
        let pAir = 0.0023768924; //slug/ft^3
        let pHe = 0.000315302053; //slug/ft^3
        let Vb = 2;  //NNEEEEEDD BALLLOOOON VOLUME
        let mb = 0.00082226119; //slugs
        let g = 32.17; // ft/s^2

        let N = this.state.weight /((g*Vb*(pAir-pHe))-(mb*g));
        console.log(N);
        this.props.changeBalloonNumber(N);
      }  
  }   
  }
render() {
    return (
      <div>

  <label>
    Weight:
    <input type="text" id = "weightInput" value = {this.state.weight} onChange={this.handleWeightChange}/>
  </label>
  <UnitToggle handleChange = {this.handleUnitChange} option1 = 'kg' option2 = 'lbs' selectedOption = {this.state.unit}/>
  <input type="button" value="Submit" id = "weightSubmit" onClick = {this.handleSubmit}/>
  

</div>
    );
}
}

class UnitToggle extends Component {
   constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }
  

  render() {
    if(this.props.selectedOption == this.props.option1)
      {
      return (
        <div id = "unitSwitchContainer">
        <button className = "inactiveUnitButton" onClick={this.handleChange}>
          {this.props.option2}
        </button>
        <button className = "activeUnitButton" onClick={this.handleChange}>
          {this.props.option1}
        </button>
        </div>
      );
      }
    else{
      return (
        <div id = "unitSwitchContainer">
        <button className = "activeUnitButton" onClick={this.handleChange}>
          {this.props.option2}
        </button>
        <button className = "inactiveUnitButton" onClick={this.handleChange}>
          {this.props.option1}
        </button>
        </div>
      );
    }
  }
}
export default App;
