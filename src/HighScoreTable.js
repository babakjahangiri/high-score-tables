import React from "react";
import PlayerScore from "./PlayerScore.js";
import allCountryScores from "./data/scores";

const HighScoreTable = (props) => {
  return (
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
              />
            </div>
          );
        })}
    </div>
  );
};

export default HighScoreTable;
