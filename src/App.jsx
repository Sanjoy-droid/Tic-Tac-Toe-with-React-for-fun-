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
          <Route exact path="/" element={<SpecialTicTac />} />
          <Route exact path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
