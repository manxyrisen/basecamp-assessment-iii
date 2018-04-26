import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Greeter firstName="Bryan" lastName="Espinosa" />
         <Riches total="500.00" />
         <Sweetness lbsOfSugar="10"/>
      </div>
    );
  }
}

class Greeter extends Component {
   render() {
      let name = this.props.firstName + ' ' + this.props.lastName;
      let greeting = "Welcome " + name;
      return (
         <div>{ greeting }</div>
      );
   }
}

class Riches extends Component {
  render() {
    let purchaseAmount = 200.00;
    let accountTotal = this.props.total;
    return (
     <div> {accountTotal-=purchaseAmount}</div>
    )

  }
}

class Sweetness extends Component {
  render()  {
    let sugarForCake = 1;
    let sugarTotal = this.props.lbsOfSugar;
    
    return (
      <div> {sugarTotal-=sugarForCake}
         <div>
      {"you have"+" "+sugarTotal+ " lbs of sugar left" }
          </div>
      </div>
    )
  }
}



export default App;
