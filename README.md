# Tic-Tac-Toe Game
This is a web-based implementation of the classic Tic-Tac-Toe game. The game allows two players to play against each other (Player vs Player) or one player to challenge an AI opponent (Player vs AI). The AI is powered by the Minimax algorithm with alpha-beta pruning, ensuring optimal and strategic gameplay.

Features - 
=> Two Game Modes:
Player vs Player: Two players can take turns playing the game on the same device.
Player vs AI: Play against a challenging AI opponent that uses strategic decision-making powered by the Minimax algorithm.

Minimax Algorithm:
The AI opponent uses the Minimax algorithm, a strategy used in game theory to determine the optimal move by evaluating all possible outcomes. This ensures the AI makes the best possible move to maximize its chances of winning while minimizing the player's chances. The implementation also includes Alpha-Beta Pruning to improve efficiency by reducing the number of moves the AI needs to evaluate.

=> Responsive Design: The game is designed to work smoothly on both desktop and mobile devices.

=> Interactive UI: The game board highlights the player's move, and the winner is announced at the end of the game.

=> Reset and New Game Options: Easily start a new game or reset the current one at any time.

Technologies Used
1.HTML: For structuring the game board and layout.
2.CSS: For styling the game and creating a modern, clean design.
3.JavaScript: For implementing the game logic, including the Minimax algorithm for AI.

How to Play

Player vs Player
Open the game in your browser.
Select "Player vs Player" mode.
Player 1 (O) and Player 2 (X) take turns clicking on the grid to make their move.
The first player to get three in a row (horizontally, vertically, or diagonally) wins the game.
If all squares are filled without a winner, the game ends in a draw.

Player vs AI
Open the game in your browser.
Select "Player vs AI" mode.
Player 1 (O) makes the first move, followed by the AI (X).
The AI calculates its moves using the Minimax algorithm, ensuring that it makes the best possible move.
The game continues until there is a winner or a draw.
