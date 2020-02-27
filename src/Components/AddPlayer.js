import React, { useState } from "react";

export default function AddPlayer(props) {
  // Do i have my callback prop?
  console.log("WHAT ARE PROPS OF ADDPLAYER", props);

  const [name, setName] = useState("");

  function submitPlayer(event) {
    event.preventDefault();
    console.log("WHAT IS MY NAME?", name);
    props.createPlayer(name);
    setName("");
  }

  return (
    <form>
      <label>Name</label>
      <input
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
        type="text"
        placeholder="hello who dis?"
      ></input>
      <button onClick={submitPlayer}>ADD PLAYER</button>
    </form>
  );
}
