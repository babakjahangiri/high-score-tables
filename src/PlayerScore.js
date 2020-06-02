import React from "react";

const PlayerScore = (props) => {
  let sortedScores = props.scores;

  if (props.orderType === "DESC") {
    sortedScores = sortedScores.sort((a, b) => (a.s < b.s ? 1 : -1));
  }
  if (props.orderType === "ASC") {
    sortedScores = sortedScores.sort((a, b) => (a.s > b.s ? 1 : -1));
  }

  return (
    <div className="player-score__container">
      <p>HIGH SCORES: {props.countryName}</p>
      {sortedScores.map((scores, index) => {
        return (
          <div key={index} className="player-score_row">
            <div>{scores.n.toUpperCase()} :</div>
            <div>{scores.s}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerScore;
