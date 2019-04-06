import React from 'react';
import './homescreen.css';
import PropTypes from "prop-types";
import Timer from './timer'

export default function Homescreen({ isGameOn, gamesWon, homescreenDisplay, isDisabled, localTimer}){

  return (
    <div className="homescreen__box" id="homescreen__box">
      <div className="homescreen__title"><h1>Space&nbsp;  Matcher</h1></div>
      <div className="homescreen__stats" id="homescreen__stats">
        Games Played: <strong>{gamesWon}</strong>
      </div>
      <div className="homescreenInstructions" id={"homescreenInstructions"}>
        <p>INSTRUCTIONS:<br></br>
          Touch the cards on the row nearest to you to match cards.<br></br>
        Match all the cards in your row to advance to the next level.
        </p>
      </div>
      <button
        className="homescreen__shuffle-button" id="homescreen__stats"
        style={{
          display: homescreenDisplay
        }}
        onClick={  function(){
          isGameOn=true;
          isDisabled=false;
          if (homescreenDisplay === "none") {
            homescreenDisplay = "block";
          } else {
            homescreenDisplay = "none";
            if(localTimer){
              localTimer.timer = setInterval(localTimer.startCountDown, 1000);
            }
          }

          var x = document.getElementById("homescreen__box");
          if (x.style.display === "none") {
            x.style.display = "inline";
          } else {
            x.style.display = "none";
          }
        }}
      >Start</button>
    </div>
  )
}

Homescreen.propTypes = {
  isGameOn: PropTypes.bool.isRequired,
  gamesWon: PropTypes.number.isRequired,
  homescreenDisplay: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  localTimer: PropTypes.func.isRequired
}