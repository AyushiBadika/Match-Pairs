# Memory Match Game

This is a simple memory match game implemented in JavaScript. Players must find matching pairs of symbols by clicking on tiles to reveal them.

## Features

- 4x4 grid of tiles
- Random selection of symbols for each game
- Tracks number of attempts
- Restart functionality

## How to Use

1. Clone the repository:

- git clone https://github.com/AyushiBadika/Match-Pairs

2. Open the `index.html` file in your web browser to play the game.
3. Alternatively, if you're integrating this into an existing project:

- Include the JavaScript code in your project.
- Ensure you have the following HTML elements in your page:
  - A container element with the class `container`
  - An element with the class `noOfAttempts` to display the number of attempts
  - A button element with the class `btn` to restart the game

4. The game will start automatically when the page loads.
5. Click on tiles to reveal symbols and find matching pairs.
6. Use the restart button to begin a new game at any time.

## Game Rules

1. Click on a tile to reveal its symbol.
2. Click on another tile to reveal its symbol.
3. If the symbols match, they will remain visible.
4. If the symbols don't match, they will be hidden again after a short delay.
5. Continue until all pairs are matched.
6. The game tracks the number of attempts you make.

## Customization

- You can modify the `symbols` array to include different emojis or characters.
- Adjust the `rows` and `columns` variables to change the grid size.

## Functions

- `selectingSymbols()`: Randomly selects symbols for the game.
- `shuffleArray(array)`: Randomizes the order of symbols.
- `createDivs()`: Creates the game board and sets up event listeners.
- `gameFunctionality(index)`: Handles the game logic when a tile is clicked.
- `matchPairs()`: Checks for matching pairs and updates the game state.

## Restarting the Game

Click the restart button to reset the game board, shuffle the symbols, and reset the attempt counter.
