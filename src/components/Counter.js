import React, { Component } from 'react'
import '../App.css'
export class Counter extends Component {

  constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
      }
      
    
      increment = () => {
        
          this.setState({ count: this.state.count + 1})
          console.log("incremented")
        }

      decrement = () => {
          this.setState({ count: this.state.count - 1})
          console.log("decremented")
        }

  render() {
    return (
      <div style={btnStyle}>
        <button className = "counter" onClick={this.decrement}>-</button>
        <button className = "counter" onClick={this.increment}>+</button>
        <h2 style={textStyle}>{this.state.count}</h2>
    
      </div>
    )
  }
}

const textStyle = {
  padding: '40px 70px',
  textAlign: 'center'
}

const btnStyle = {
  margin: '60px',
  textAlign: 'center',  
}
export default Counter

