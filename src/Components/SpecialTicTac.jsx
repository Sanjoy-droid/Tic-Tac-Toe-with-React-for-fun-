import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SpecialTicTac = () => {
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

  // queue declaration
  const [queue, setQueue] = useState([]);
  const [num, setNum] = useState(0);
  const limit = 6;

  // Function to enqueue an item
  const enqueue = (item) => {
    setQueue([...queue, item]);
  };

  const [index, setIndex] = useState(0);
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

      // implementing queue funtionality
      let itemId = e.target.id[7];
      let removeItemId = "button-";
      enqueue(itemId);

      if (queue.length > limit - 1) {
        // discard first element in queue
        removeItemId = removeItemId + String(queue[num]);
        setNum(num + 1);

        const removeButton = document.getElementById(removeItemId);
        removeButton.innerText = "";
        removeButton.disabled = false;
      }

      checkWinner();
    }
  };

  //   New Game
  const handleNewGame = () => {
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
    setQueue([]);
    setNum(0);
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.innerText = "";
      button.disabled = false;
    });
  };
  return (
    <>
      <div className="bg-gray-700 h-[150vh]">
        <div className="flex justify-center items-center space-x-28">
          <p className=" h-20 w-60 ml-96  text-3xl text-yellow-100  py-8">
            !Draw Tic Tac Toe
          </p>
          <Link to="/tic-tac-toe">
            <div className="mr-10 mt-6 h-14 w-48 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md flex justify-center items-center">
              Play Normal Tic Tac Toe
            </div>
          </Link>
        </div>
        <div className="row mt-2 " onClick={handleButtonClick}>
          {/* First Row */}
          <div className="column  flex justify-center items-center   pt-10 space-x-1">
            <button
              id="button-0"
              className="w-20 h-20 bg-blue-600 border-2 border-black rounded-xl"
              disabled={disableButtons}
            ></button>
            <button
              id="button-1"
              className="w-20 h-20 bg-blue-600 border-2 border-black rounded-xl"
              disabled={disableButtons}
            ></button>
            <button
              id="button-2"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
          {/* Second Row */}
          <div className=" flex justify-center items-center space-x-1 mt-1  ">
            <button
              id="button-3"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-4"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-5"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
          {/* Third Row */}
          <div className=" flex justify-center items-center space-x-1 mt-1">
            <button
              id="button-6"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-7"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
            <button
              id="button-8"
              className="w-20 h-20 bg-blue-600 rounded-xl border-2 border-black"
              disabled={disableButtons}
            ></button>
          </div>
        </div>
        {/* Winner or Draw */}

        {winner !== null && (
          <div className="h-20 w-64 bg-amber-500 flex justify-center items-center text-4xl rounded-xl mt-8 mx-auto">
            <div className="winner flex justify-center items-center text-center ">
              {"Winner: " + winner}
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
        {/* Special Rules  */}
        <div className="flex  items-center ml-60 mt-16 space-x-10">
          <div>
            <p className="h-14  mx-auto text-3xl text-white  py-8">Rules</p>
          </div>
          <div className="w-96 h-52 rounded-lg bg-lime-500 p-4 font-medium">
            <p>
              If a player makes more than 3 moves, their oldest moves will be
              automatically discarded. This ensures that there are always 3 or
              fewer symbols of each player on the board. All the other rule is
              Same for Normal Tic Tac Toe. Applying this rule to this game
              ensures that it will never result in a Draw!!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialTicTac;
