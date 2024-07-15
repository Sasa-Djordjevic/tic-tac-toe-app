import React, { useState } from "react";

import { Colors } from "./constants/colors";
import Snackbar from "react-native-snackbar";

import AppContainer from "./components/UI/AppContainer";
import HeaderTitle from "./components/HeaderTitle";
import GridList from "./components/grid/GridList";
import ButtonUI from "./components/UI/ButtonUI";
import ScoreBoard from "./components/score/ScoreBoard";

const App = () : React.JSX.Element => {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [firstPlay, setFirstPlay] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));
  const [playerScoreO, setPlayerScoreO] = useState<number>(0);
  const [playerScoreX, setPlayerScoreX] = useState<number>(0);

  const reloadGame = () => {

    if (firstPlay) {
      setIsCross(false);
    } else {
      setIsCross(true);
    }

    setFirstPlay(!firstPlay);
    
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const reloadScore = () => {
    setPlayerScoreO(0);
    setPlayerScoreX(0);
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      if (gameState[0] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
      if (gameState[3] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
      if (gameState[6] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      if (gameState[0] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
      if (gameState[1] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
      if (gameState[2] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      if (gameState[0] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
      if (gameState[2] === "cross") {
        setPlayerScoreX( prevValue => prevValue + 1);
      } else {
        setPlayerScoreO( prevValue => prevValue + 1);
      }
      
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner.toUpperCase(),
        backgroundColor: Colors.backgroundGrey,
        textColor: Colors.primaryWhite
      });
    }

    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);

    } else {
      return Snackbar.show({
        text: "THE POSITION IS ALREADY FILLED",
        backgroundColor: Colors.primaryRed,
        textColor: Colors.primaryWhite
      });
    }

    checkIsWinner();
  };

  return (
    <AppContainer>
        <HeaderTitle gameWinnerData={gameWinner} isCrossData={isCross} />
        <GridList gameState={gameState} onChangeItem={onChangeItem} />
        <ButtonUI 
          gameWinner={gameWinner} 
          onPressFun={reloadGame} 
          btnText="Reload The Game" 
          customStyle="new"
        />
        <ScoreBoard playerScoreO={playerScoreO} playerScoreX={playerScoreX} />
        {!(playerScoreO === 0 && playerScoreX === 0) && 
          <ButtonUI 
            onPressFun={reloadScore} 
            btnText="Reload The Score" 
            customStyle="score"
          />
        }
    </AppContainer>
  );
};

export default App;