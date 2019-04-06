import React, {useEffect, useState} from 'react'
import Board from './components/board'
import Homescreen from './homescreen'
import initializeDeck from './deck'
import Timer, {gameOn, seconds} from './timer'

let numPairs = 5;

export default function App() {
  const [cards, setCards] = useState([]);
  const [cards2, setCards2] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false );
  const [game, setGame] = useState(6);
  const [homescreenDisplay, setHomescreenDisplay] = useState("inline");
  const [isGameOn, startGame] = useState(false);
  const [gamesPlayed, addGame] = useState(0);

  useEffect(() => {

    resizeBoard();
    setCards(initializeDeck(numPairs))
    setCards2(initializeDeck(numPairs));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeBoard);
    return () => window.removeEventListener('resize', resizeBoard)
  });

  useEffect( () => {
    preloadImages1()
  }, cards);
  useEffect( () => {
    preloadImages2()
  }, cards2);


  const handleClick = (id) => {
    if(gameOn===true){
      setDisabled(true);
      if(flipped.length === 0){
        setFlipped([id]);
        setDisabled(false);
      } else {
        if(sameCardClicked(id)) {
          setDisabled(false);
          return
        }
        setFlipped([flipped[0], id]);

        if(isMatch(id)){
          setSolved([...solved, flipped[0], id]);
          resetCards();
          if (solved.length === (numPairs*2)-2) {
            nextLevel();
          }
        } else {
          setTimeout(resetCards, 750)
        }
      }
    }
  };



  const preloadImages1 = () =>
    cards.map(card => {
      new Image().src = `/img/${card.type}.jpg`;
      return cards
    });
  const preloadImages2 = () =>
    cards2.map(card => {
      new Image().src = `/img/${card.type}.jpg`;
      return cards
    });

  const sameCardClicked = (id) => flipped.includes(id);

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };
  const nextLevel = () => {
    setGame(game + 2);
    console.log(game);
    startGame(true);
    setSolved([]);
    numPairs += 2;
    setCards(initializeDeck(numPairs));
    setCards2(initializeDeck(numPairs));
  };

  const resizeBoard = () => {
  /*  setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),)*/
  };

  // Sets a new game
  useEffect(()  => {
    if(seconds ==0){
      resetCards();
      setHomescreenDisplay("block");//bring back the main screen
      document.getElementById("homescreen__box").style.display = "inline";
      setGame(1);
      //addGame(gamesPlayed+1);//add one to gamesPlayed count
      startGame(true);
      setSolved([]);
      setCards(initializeDeck(5));
      setCards2(initializeDeck(5));
      Timer.gameOn = true;
    }
  });




  return (
    <div class="wrapper"
         style={{
           display: "block",
           "margin-left":""+dimension/2+"px",
           "margin-right":""+dimension+"px",
           position: "relative",
           width:""+Math.abs(475-dimension)+"%"
         }}
    >
      <Board
        dimension={dimension} cards={cards2}
        flipped={flipped} handleClick={handleClick}
        disabled={disabled} solved={solved}
        cardRot={180} boardRot={0}
        style={{
          width: "100%",
          height: "100%",
          top:"0%",
          position: "absolute",
          "padding-top": "0",
          "padding-bottom": "90px"
        }}
      />
      <div class = "timerDiv" id="timerDiv"
           style={{
             width: "100%",
             height: "100%",
             top: ""+Math.abs(dimension-100)+"px",
             border: "0",
             position: "absolute",
             "padding-top": "0",
             "padding-bottom": "0",
             "border-radius": "4px"
           }}
      >
        <Timer/>
      </div>
      <fieldset
        style={{
          display: "block",
          width: "100%",
          top: ""+Math.abs(dimension+80)+"px",
          border: "0",
          position: "absolute",
          "padding-top": "0",
          "padding-bottom": "0",
          "border-radius": "4px"
        }}
      >
        <Board
        dimension={dimension} cards={cards2}
        flipped={flipped} handleClick={handleClick}
        disabled={disabled} solved={solved}
        carRot={360} boardRot={0} />
      </fieldset>
      <Homescreen id="gameHomescreen" class="gameHomescreen"
        isGameOn={isGameOn} gamesWon={gamesPlayed}
        homescreenDisplay={homescreenDisplay}
        isDisabled={disabled}
        localTimer={document.getElementById("gameTimer")}
      />
    </div>
  )
}

