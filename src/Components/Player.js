import React from "react";

export default function Player(props) {
  //   console.log("WHAT ARE PROPS?????", props);
  const { name, score } = props;
  return (
    <div>
      <h4>Player: {name} </h4>
      <p>SCORE: {score}</p>
      <button onClick={() => props.updateScore(props.id)}>+</button>
    </div>
  );
}
