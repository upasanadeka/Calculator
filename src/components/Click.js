import React, { Component } from 'react'

export class Click extends Component {
constructor(props) {
  super(props);
  this.state = { value: true };
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState({
    value : !this.state.value })
  }


    render() {
        return (
            <div>
                <h1 style={getStyle}>{this.state.value ? "Hi" : "Welcome to this Page"}</h1>
                <button type="submit" style={btnStyle} pointer="cursor" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}


const btnStyle = {
    background: 'light grey',
    padding: '20px 70px',
    margin: '80px 680px',
    textAlign: 'center'
  }
  
  const getStyle = {
    textAlign: 'center',
    
  }
  
export default Click

