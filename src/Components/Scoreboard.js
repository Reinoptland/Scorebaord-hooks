import React, { useState } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";

const initialState = [
  {
    id: 1,
    name: "Rein",
    score: 1
  },
  {
    id: 2,
    name: "Wouter",
    score: 10
  },
  { id: 3, name: "Matias", score: 5 }
];

export default function Scoreboard() {
  const [players, setPlayers] = useState(initialState);

  function updateScore(id) {
    const updatedPlayers = players.map(player => {
      if (player.id === id) {
        return { name: player.name, id: player.id, score: player.score + 1 };
      } else {
        return player;
      }
    });

    setPlayers(updatedPlayers);
  }

  function createPlayer(name) {
    console.log("HELLO AM I BEING CALLED?? AND WHAT IS NAME", name);
    const newPlayer = { name: name, score: 0, id: players.length + 1 };

    const newPlayers = [...players, newPlayer];
    console.log(newPlayers);
    setPlayers(newPlayers);
  }

  const sortedPlayers = [...players]
    // .filter(player => {
    //   if (player.score > 3) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
    .sort((playerA, playerB) => playerB.score - playerA.score);

  return (
    <div>
      <AddPlayer createPlayer={createPlayer} />
      {sortedPlayers.map(player => {
        return (
          <Player
            key={player.id}
            updateScore={updateScore}
            id={player.id}
            name={player.name}
            score={player.score}
          />
        );
      })}
    </div>
  );
}
