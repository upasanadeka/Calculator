import React, { Component } from 'react';
// import Calc from './components/Calc';
//import Counter from './components/Counter';
// import Click from './components/Click';
// import Add from './components/Add';
// import Hello from './components/Hello';
// import Timer from './components/Timer';
 import Keypad from './components/Calculator/Keypad';
 import Output from './components/Calculator/Output';

 export class App extends Component {

  state = {
    result :''
  }

  buttonPressed = (buttonName) => {
    if (buttonName === "=" ){
      this.calculate()
    }
    else 

    if (buttonName === 'C') {
      this.reset()
    }

    else if(buttonName === 'CE') {
      this.backspace()
    }
    else
     this.setState({
      result: this.state.result + buttonName
    });
  };


  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  calculate = () => {
    try {
      this.setState ({
      result: (eval(this.state.result) || "") + ""
    }); }  catch(e) {
      this.setState({
        result: 'Error'
      })
    }
  }
  render() {

    return (
      <div className="App" style={newStyle}>
        <h1>Simple Calculator</h1>
        <div  className="calc-body">
        {/* <Counter/> */}
        {/* <Calc/> */}
        {/* <Click/> */}
        {/* <Add/> */}
        {/* <Hello/> */}
        {/* <Timer/> */}
        <Output result = {this.state.result} />
        <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    )
  }
}

const newStyle = {
  textAlign: 'center',
  
}

export default App

