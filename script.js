'use strict';

/*
ALGORITHM

When the page loads
1. Players score should be 0;
2. The dice should be hidden
3. Player 1 is active player

Roll Dice Function
1. Display the dice
2. update current score with dice number
3. Accumulate current score with dice number
4. if dice 1 is rolled 
    a. Switch player(Player is active)
    b. update current score to 0

Hold Function
1. update the player score with current score
2. switch player(Player is active)
3. update current score to 0

When a player wins
1. change the background color to winner
2. Hide the dice
3. both roll dice and hol button must be inactive;


New Game function
*/

// Select Elements
const diceEl = document.querySelector('.dice');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let score1El = document.querySelector('#score--0');
let score2El = document.querySelector('#score--1');
let currentScore1El = document.querySelector('#current--0');
let currentScore2El = document.querySelector('#current--1');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

let score, currentScore, playerScore1, playerScore2, activePlayer, playing;
const initValues = () => {
  score = 0;
  currentScore = 0;
  playerScore1 = 0;
  playerScore2 = 0;
  activePlayer = 0;
  playing = true;
  document.querySelector('#score--0').textContent = playerScore1;
  document.querySelector('#score--1').textContent = playerScore2;
  currentScore1El.textContent = currentScore;
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player1.classList.add('player--active');
  console.log('working');

  console.log(score1El, score2El);
};

initValues();

const winner = () => {
  player1.classList.add('player--winner');
  player1.classList.remove('player--active');
  console.log('working');
  diceEl.classList.add('hide-dice');
  playing = false;
};

// Roll Dice Function
// 1. Display the dice
// 2. update current score with dice number
// 3. Accumulate current score with dice number
// 4. if dice 1 is rolled
//     a. Switch player(Player is active)
//     b. update current score to 0

const switchPlayer = () => {
  // update current score to zero

  // playerScore = currentScore;
  currentScore = 0;
  currentScore1El.textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.remove('player--active');
  score1El = document.querySelector(`#score--${activePlayer}`);
  player1 = document.querySelector(`.player--${activePlayer}`);
  currentScore1El = document.querySelector(`#current--${activePlayer}`);
  player1.classList.add('player--active');
  // update current score to zero
};

rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hide-dice');
    diceEl.src = `dice-${dice}.png`;
    currentScore += dice;
    currentScore1El.textContent = currentScore;
    if (dice === 1) {
      // switch player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    if (activePlayer === 0) {
      playerScore1 += currentScore;
      score1El.textContent = playerScore1;
    } else {
      playerScore2 += currentScore;
      score1El.textContent = playerScore2;
    }
    if (playerScore1 >= 10 || playerScore2 >= 10) {
      winner();
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', initValues);
