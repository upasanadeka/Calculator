import React, { Component } from 'react'
import '../../App.css'
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
import { whileStatement } from '@babel/types';

export class Keypad extends Component {

    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name);
    }


    render() {
        return (
            <div className="buttons">
                <button name='(' onClick={this.buttonPressed} style={gbtn}>(</button>
                <button name='CE' onClick={this.buttonPressed} style={gbtn}>CE</button>
                <button name=')' onClick={this.buttonPressed} style={gbtn}>)</button>
                <button name='C' onClick={this.buttonPressed} style={orbtn}>C</button>
                <button name='1' onClick={this.buttonPressed}>1</button>
                <button name='2' onClick={this.buttonPressed}>2</button>
                <button name='3' onClick={this.buttonPressed}>3</button>
                <button name='+' onClick={this.buttonPressed} style={orbtn}>+</button>
                <button name='4' onClick={this.buttonPressed}>4</button>
                <button name='5' onClick={this.buttonPressed}>5</button>
                <button name='6' onClick={this.buttonPressed}>6</button>
                <button name='-' onClick={this.buttonPressed} style={orbtn}>-</button>
                <button name='7' onClick={this.buttonPressed}>7</button>
                <button name='8' onClick={this.buttonPressed}>8</button>
                <button name='9' onClick={this.buttonPressed}>9</button>
                <button name='*' onClick={this.buttonPressed}  style={orbtn}>x</button>
                <button name='.' onClick={this.buttonPressed}>.</button>
                <button name='0' onClick={this.buttonPressed}>0</button>
                <button name='=' onClick={this.buttonPressed}>=</button>
                <button name='/' onClick={this.buttonPressed} style={orbtn}>/</button>
            </div>
        )
    }
}

const orbtn = {
    backgroundColor: 'rgb(240, 124, 15)',
    color: 'white'
  }

const gbtn = {
    backgroundColor: 'grey'
}
export default Keypad
