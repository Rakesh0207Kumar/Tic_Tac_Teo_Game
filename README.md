# Tic_Tac_Teo_Game

# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to play the classic Tic-Tac-Toe game, with a reset and new game functionality.

## Features

- Two-player Tic-Tac-Toe game
- Displays the winner
- Reset game functionality
- New game functionality

## Installation

To run this game locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/tic-tac-toe-game.git
    ```

2. Navigate to the project directory:
    ```sh
    cd tic-tac-toe-game
    ```

3. Open the `index.html` file in your browser to start the game.

## Usage

- Click on any box to make a move. The game alternates between player "O" and player "X".
- When a player wins, a message will be displayed.
- Click the "Reset Game" button to clear the board and start a new game.
- Click the "New Game" button to start a new game.

## Code Overview

### HTML

The HTML file sets up the structure of the game, including the heading, game board, message container, and buttons.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Tic_Tac_Toe.css">
</head>
<body>
    <div class="msg-container hide">
        <p id="msg">Winner</p>
        <button id="newGamebtn">New Game</button>
    </div>
    <main>
        <h1 id="heading">Tic_Tac_Toe Game</h1>
        <div class="container">
            <div class="game">
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
                <button class="box"></button>
            </div>
        </div>
        <button id="resetbtn">Reset Game</button>
    </main>
    <script src="Tic_Tac_Toe.js"></script>
</body>
</html>
