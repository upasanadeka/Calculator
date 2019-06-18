import React, { Component } from 'react'

export class Hello extends Component {
  state = {
  text : "Hello World !!!"
  }

  constructor(props) {
    super(props);
    this.text = "Hello World!"
  }
  
  componentDidMount() {
    this.setState ({text:"Hi Welcome"}) 
    
  }
    render() {
        return (
            <div>
               <p>1. Normal way: Hello World !</p>
               <p>2. By props : {this.text}</p>
               <p>3. By states : {this.state.text}</p>
            </div>
        )
    }
}

export default Hello
