// import React, { Component } from 'react'

// export class Timer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             seconds: 0,
//             isOn: false
//         };
//         this.tick = this.tick.bind(this);
//         this.pause = this.pause.bind(this);
//         this.reset = this.reset.bind(this);
//         this.stop =  this.stop.bind(this);
//     }

//     tick () {
//         this.interval = setInterval(() => { this.setState({ 
//             seconds: this.state.seconds + 1,
//             isOn: true}) }, 1000)
//     }

//     // componentDidMount() {
//     //    this.interval=setInterval(() => this.tick(), 1000)
//     // }

//     pause() {
//         // this.interval = setInterval(() => { this.setState({ 
//         //     seconds: this.state.seconds,
//         //     isOn: false}) }, 0)
//         this.setState ({seconds:this.state.seconds})
//     }

//     reset() {
//         this.interval = this.setState({
//             seconds: 0
//         })
//     }

//     stop() {
//         this.setState({ seconds: clearInterval(this.state.seconds) })
//         this.setState({seconds: 0})
       
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }

//     render() {
//         return (
//             <div style={textStyle}>
//                 Seconds : {this.state.seconds}
//                <div>
//                 <button type="submit" value="click" onClick={this.tick} style={btnStyle}>Start</button>
//                 <button type="submit" value="click" onClick={this.pause} style={btnStyle}>Pause</button>
//                 <button type="submit" value="click" onClick={this.reset} style={btnStyle}>Reset</button>
//                 <button type="submit" value="click" onClick={this.componentWillUnmount} style={btnStyle}>Stop</button>

//               </div>
//             </div>
//         )
//     }
// }

// const textStyle = {
//     textAlign: 'center',
//     fontSize: '30px',
//     paddingTop: '300px'
// }

// const btnStyle = {
//     background: 'light grey',
//     padding: '10px 20px',
//     // top: '50px',
//     // left: '35px',
//     textAlign: 'center',
//     margin: '2em'
//   }

// export default Timer

import React, { Component } from 'react';

export class Timer extends Component {

    constructor(props){
        super(props)
        this.state = {
          time: 0,
          isOn: false,
          start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
      }
      startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
        }), 1);
      }
      stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
      }
      resetTimer() {
        this.setState({time: 0, isOn: false})
      }


    render() {
 
    let start = (this.state.time === 0) ?
      <button onClick={this.startTimer} style={btnStyle}>Start</button> :
      null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <button onClick={this.stopTimer} style={btnStyle}>Stop</button>
    let resume = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button onClick={this.startTimer} style={btnStyle}>Resume</button>
    let reset = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button onClick={this.resetTimer} style={btnStyle}>Reset</button>
      


        return (

            
            <div  style = {btnStyle}>
              <h3 style={textStyle}>Timer: {ms(this.state.time)}</h3>
              {start}
              {resume}
              {stop}
              {reset}
            </div>
        )
    }
}

const ms = require('pretty-ms')


const textStyle = {
    textAlign: 'center',
    fontSize: '30px',
    paddingTop: '200px'
}

const btnStyle = {
    background: 'light grey',
    padding: '10px 20px',
    // top: '50px',
    // left: '35px',
    textAlign: 'center',
    margin: '2em',
  }

export default Timer
