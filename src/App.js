import React from "react";
import HighScoreTable from "./HighScoreTable.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <span>High Scores per Country</span>
      <HighScoreTable key="hspc" />
    </div>
  );
}

export default App;
