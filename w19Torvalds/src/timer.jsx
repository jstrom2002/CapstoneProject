import React,{useState} from 'react';
import "./timer.css";

var gameOn = false;
var secondsAdded = 0;
var seconds;
class Timer extends React.Component{

  constructor(){
    super();
    this.state = { time: {}, seconds: 10, color: 'darkgrey'};
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
  }

// Convert time to minutes and seconds
  convertToSeconds(sec){
    let divisor_for_minutes = sec % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {"m": minutes, "s": seconds};
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.convertToSeconds(this.state.seconds);
    timeLeftVar += secondsAdded;
    this.setState({ time: timeLeftVar });
  }

// Start the timer
  startTimer(){
    // If timer is not set, set the interval
    gameOn = true;
    if(this.timer === 0 && this.state.seconds > 0){
      // 1000 ms = 1 second
      this.timer = setInterval(this.startCountDown, 1000);

    }
  }

// Start the timers countdown
  startCountDown() {
    seconds = this.state.seconds - 1;
    if(seconds >= 0){
      if(seconds<=10){
        this.setState({color: 'red'})
      }
      this.setState({
        time: this.convertToSeconds(seconds),
        seconds: seconds
      });
    }
    // Resets the timer, color and state back to default when seconds hits 0
    // Uncomment for consistent resetting of the timer
    else{
      if(gameOn === true){
        this.setState({time: this.convertToSeconds(10), seconds: 10, color: 'darkgrey'});
        clearInterval(this.timer);
        this.timer = 0;
        gameOn = false;
      }
    }

  }

  render(){
    return(
      <fieldset>
        <div className="component-timer">

          <div class="startbtn">
            <button class="timerButton" id="timerButton"
                    onClick={this.startTimer}>
              START
            </button>
          </div>

          <div class="timer">
            m: {this.state.time.m} s: {this.state.time.s}
          </div>
        </div>
      </fieldset>
    );
  }
}


export default Timer;
export {gameOn, seconds};
