import React, { useState } from "react";
import PlayerScore from "./PlayerScore.js";
import allCountryScores from "./data/scores";

const HighScoreTable = (props) => {
  const [order, setOrder] = useState("ASC");

  function changeOrder() {
    if (order === "ASC") {
      setOrder("DESC");
    }
    if (order === "DESC") {
      setOrder("ASC");
    }
  }
  return (
    <React.Fragment>
      <p>
        <button name="btn_order" onClick={changeOrder}>
          {order === "ASC" ? "Ascending" : "Descending"}
        </button>
      </p>
      <div>
        {allCountryScores
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((countryScore, index) => {
            return (
              <div key={index} className="high-score-table__container">
                <PlayerScore
                  key={`${countryScore.name}+${index}`}
                  countryName={countryScore.name}
                  scores={countryScore.scores}
                  orderType={order}
                />
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default HighScoreTable;
