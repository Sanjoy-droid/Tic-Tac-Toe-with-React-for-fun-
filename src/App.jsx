import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe";
import SpecialTicTac from "./Components/SpecialTicTac";
import MyComponent from "./Components/MyComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<TicTacToe />} />
          <Route
            exact
            path="/special-tic-tac-toe"
            element={<SpecialTicTac />}
          />
          {/* <MyComponent /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
