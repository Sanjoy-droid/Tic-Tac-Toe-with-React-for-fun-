import React, { useState, useRef } from "react";

const TicTacToe = () => {
  const winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const [winner, setWinner] = useState(null);
  const [disableButtons, setDisableButtons] = useState(false);
  const [turnO, setTurnO] = useState(true);
  const [moves, setMoves] = useState(0);

  const newGameButtonRef = useRef(null);

  // Winner Check

  const checkWinner = () => {
    for (let i of winArray) {
      let item1 = document.getElementById(`button-${i[0]}`).innerText;
      let item2 = document.getElementById(`button-${i[1]}`).innerText;
      let item3 = document.getElementById(`button-${i[2]}`).innerText;

      if (item1 !== "" && item1 === item2 && item2 === item3) {
        setWinner(item1);
        setDisableButtons(true);
        break;
      }
    }
  };

  const handleButtonClick = (e) => {
    if (disableButtons) return;
    if (e.target.tagName === "BUTTON") {
      const buttonText = winner ? winner : turnO ? "O" : "X";
      e.target.innerText = buttonText;
      e.target.style.fontSize = "34px";
      e.target.disabled = true;
      setTurnO(!turnO);
      setMoves(moves + 1);

      checkWinner();

      if (!winner && moves === 8) {
        // All moves made and no winner
        handleDraw();
      }
    }
  };

  //   Draw Handling
  const handleDraw = () => {
    setWinner("Draw");
    setDisableButtons(true);
  };

  //   New Game
  const handleNewGame = () => {
    console.log("New game button clicked");
    setWinner(null);
    setDisableButtons(false);
    setTurnO(true);
    setMoves(0);
    ClearBoard();

    if (newGameButtonRef.current) {
      newGameButtonRef.current.innerText = "New Game";
    }
  };

  // Clear Board
  const ClearBoard = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.innerText = "";
      button.disabled = false;
    });
  };

  return (
    <>
      <div className="bg-gray-700 h-[100vh]">
        <p className="h-20 w-80 mx-auto text-3xl text-yellow-100 text-center py-8">
          Welcome to Tic Tac Toe
        </p>
        <div className="row mt-2" onClick={handleButtonClick}>
          {/* First Row */}
          <div className="column  flex justify-center items-center   pt-10 space-x-1">
            <button
              id="button-0"
              className="w-20 h-20 bg-purple-400 border-2 border-black rounded-xl"
              disabled={disableButtons}
            ></button>
            <button
              id="button-1"
              className="w-20 h-20 bg-purple-400 border-2 border-black rounded-xl"
              disabled={disableButtons}
            ></button>
            <button
              id="button-2"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
          {/* Second Row */}
          <div className=" flex justify-center items-center space-x-1 mt-1  ">
            <button
              id="button-3"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-4"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-5"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
          {/* Third Row */}
          <div className=" flex justify-center items-center space-x-1 mt-1">
            <button
              id="button-6"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-7"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-8"
              className="w-20 h-20 bg-purple-400 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
        </div>
        {/* Winner or Draw */}

        {winner !== null && (
          <div className="h-20 w-64 bg-amber-500 flex justify-center items-center text-4xl rounded-xl mt-8 mx-auto">
            <div className="winner flex justify-center items-center text-center ">
              {winner === "Draw" ? "Draw" : "Winner: " + winner}
            </div>
          </div>
        )}

        {/* New Game  */}
        <p className="text-white text-xl ml-36 ">First Turn: O</p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          <button
            className="w-28 h-10 rounded-lg bg-green-600"
            type="button"
            onClick={handleNewGame}
            ref={newGameButtonRef}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
