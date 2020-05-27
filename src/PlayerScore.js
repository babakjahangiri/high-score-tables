import React from "react";

const PlayerScore = (props) => {
  return (
    <div className="player-score__container">
      <p>HIGH SCORES: {props.countryName}</p>
      {props.scores
        .sort((a, b) => (a.s > b.s ? -1 : 1))
        .map((scores, index) => {
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
