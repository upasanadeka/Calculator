import React, { Component } from 'react'

export class Calc extends Component {

    constructor (props) {
            super(props);
            this.state ={
              num1:0,
              num2:0,
              result:0
            };
            this.handlenum1 = this.handlenum1.bind(this);
            this.handlenum2 = this.handlenum2.bind(this);
            this.addNum = this.addNum.bind(this);
            this.subNum = this.subNum.bind(this);
            this.divNum = this.divNum.bind(this);
            this.multNum = this.multNum.bind(this);
          }
          
          handlenum1 (e) {
            this.setState ({ num1: Number(e.target.value) });
          }
        
          handlenum2 (e) {
            this.setState ({ num2: Number(e.target.value) });
          }
        
          addNum (e) {
            let x = this.state.num1 + this.state.num2
            this.setState ({result:x})
          }

          subNum (e) {
            let x = this.state.num1 - this.state.num2
            this.setState ({result:x})
          }

          divNum (e) {
            let x = this.state.num1 / this.state.num2
            this.setState ({result:x})
          }

          multNum (e) {
            let x = this.state.num1 * this.state.num2
            this.setState ({result:x})
          }
    render() {
        return (
            <div>
                <input type="number" placeholder="first number" onChange={this.handlenum1} style={getStyle}/>
                <input type="number" placeholder="second number" onChange={this.handlenum2} style={getStyle}/>
                <select style={btnStyle}>
                    <option value="none">None</option>
                    <option value="add" onClick={this.addNum}>Add (+)</option>
                    <option value="sub" onClick={this.subNum}>Subtract (-)</option>
                    <option value="div" onClick={this.divNum}>Divide (/)</option>
                    <option value="multiply" onClick={this.multNum}>Multiply (x)</option>
                </select>
                <input type="number" value={this.state.result} readOnly style={reStyle}/>
            </div>
        )
    }
}

const getStyle = {
  marginRight: '1em',
  align: 'center',
  padding: '10px 40px',
  position: 'relative',
  marginLeft: '2em',
  top: '50px'
}

const reStyle = {
  marginLeft: '6em',
  padding: '10px 40px',
  position: 'relative',
  top: '50px'
}
const btnStyle = {
  background: 'light grey',
  padding: '5px 5px',
  position: 'relative',
  top: '50px',
  left: '35px'
  
}
export default Calc
