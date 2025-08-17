# Mastermind_v2

A retro-themed, web-based version of the classic code-breaking game of logic and deduction. This application is built with a real-time multiplayer focus using Firebase and features a nostalgic terminal aesthetic.

## Features

* **Dual Game Modes:**
    * **Single Player:** Test your code-breaking skills against "The Machine."
    * **Multiplayer:** Create or join public game lobbies to challenge friends or other players in real-time.

* **Real-time Multiplayer Lobby:**
    * Browse a list of available public games.
    * Create your own game lobby and become the "Master."
    * Join existing games using a unique Lobby Code.

* **User Authentication & Profiles:**
    * Secure sign-in using Google Authentication via Firebase.
    * Users can edit their display names, which are reflected across the game.

* **Comprehensive Gameplay:**
    * **Master & Guesser Roles:** In multiplayer, one player acts as the Game Master, controlling settings and game flow, while others guess the code.
    * **Classic Feedback:** Receive "Bulls" (correct digit in the correct position) and "Cows" (correct digit in the wrong position) for each guess.
    * **Hint System:** Stuck on a puzzle? Use a hint to reveal a correct digit, but it will cost you a turn and has a cooldown.

* **Customizable Game Settings (for the Master):**
    * **Code Length:** Adjust the length of the secret code (from 3 to 8 digits).
    * **Number of Rounds:** Set the total number of rounds for a game.
    * **Turn Timer:** Add pressure with a configurable timer for each turn.
    * **Advanced Mode:** Increase the difficulty by allowing duplicate digits in the secret code.
    * **Unlimited Rounds:** Play continuously until the game is manually ended.

* **Stats and Leaderboard:**
    * Track your personal statistics, including wins, games played, and win rate.
    * Compete for the top spot on the global leaderboard, which ranks players by wins.

* **Engaging User Experience:**
    * A unique, retro terminal theme styled with Tailwind CSS.
    * Interactive sound effects for various in-game actions.
    * Visual flair with animations and a confetti celebration for winners.
    * Progressive Web App (PWA) enabled for a reliable experience and offline accessibility.

## How to Play

1.  **Sign In:** Start by signing in with your Google account.
2.  **Choose a Mode:** Select either Single Player or Multiplayer.
3.  **The Goal:** The objective is to guess the secret code. The code is a sequence of digits (0-9).
4.  **Making a Guess:** Enter a sequence of digits and submit your guess.
5.  **Feedback:**
    * **BULL (●):** Indicates a correct digit in the correct position.
    * **COW (●):** Indicates a correct digit but in the wrong position.
6.  **Winning:**
    * The first player to guess the code wins the round.
    * Scores are accumulated over multiple rounds to determine the final winner.
    * In multiplayer, if no one guesses the code within the allotted turns, the Game Master wins the round.

## Technologies Used

* **Frontend:** HTML, Tailwind CSS, JavaScript
* **Backend & Real-time Database:** Google Firebase (Firestore, Realtime Database, Authentication)
* **Sound Effects:** Tone.js
* **Visual Effects:** canvas-confetti.js
