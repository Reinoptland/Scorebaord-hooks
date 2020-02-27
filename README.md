# Features

- display names of players
- display scores
- 'Change' scores
- Sort / Order players by score
- Sort by name
- Adding another player

# Data

Player: Object

    - Score: Number (dynamic)
    - Id: Number (..? dynamic but static once the player is created)
    - Name: String (..? dynamic but static once the player is created)

Players: Array of players (dynamic: because we can add players)

# Components

- Player components
- "Container" -> Scoreboard -> Renders Player components
- Component to add players (Form)

# Where do we store our data?

- Player component (child)

  - props: id, name, score, updateScore (callback prop)

- Scoreboard (parent)

  - state: array of players
  - function updateScore, addPlayer

- AddPlayer (form)
  - props: addPlayer (callback prop)
  - state: name

# Todolist

- Display scores, names

  - Components: Player, Scoreboard
  - Pass data to players as props (hardcode)

- Change scores

  - Manage the players as state in scoreboard
  - Render players based on the data in scoreboard .map
  - Make callback to updateScore
  - Pass down the callback
  - Make a button in Player
  - When the gets clicked, call updateScore callback

- Sort players by score

  - we need the score of each player
  - we need to write a function to sort the players
  - array.sort

- Add a player
  - Form (component)
  - Input
  - Button
  - We need a name from the user (event listener and handler)
  - We need a callback prop to add a player
  - Create a new player object
  - We need to update the array of players
