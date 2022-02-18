window.addEventListener('load', init);
window.onload = function() 
{
    document.getElementById("my_audio").play();
}

// Decide levels of class
const Class = 
{
  low: 40,
  middle: 20,
  high: 5
};

// Change class level
const Level = Class.middle;


// Initialize the Game
let time = Level;
let score = 0;
let startGame;

// DOM Elements
const words = document.querySelector('#word-input');
const currentInput = document.querySelector('#current-input');
const scoreDisplay = document.querySelector('#score');
const timer = document.querySelector('#time');
const seconds = document.querySelector('#seconds');
const message = document.querySelector('#message');


// List down all the vocabularies in array
const vocabulary = ['welcome','hello', 'health', 'dessert', 'school', 'mark', 'night', 'day', 'memory', 'university', 'garden', 'star', 'moon', 'sun', 'mother', 'father', 
			'sister', 'brother', 'tree', 'children', 'family', 'weight', 'height', 'sunlight', 'dream', 'intern', 'cloud', 'rain', 'flash', 'plant', 'flower',
			'life', 'food', 'snack', 'zoom', 'computer', 'phone', 'time', 'energy', 'car', 'bicycle', 'motor', 'pencil', 'pen', 'eraser', 'dress', 'cloth'];

// Start Game
function init() 
{
  // Show time
  seconds.innerHTML = Level;
  // Pick the word
  displayWord(vocabulary);
  //Match the word
  words.addEventListener('input', matching);
  // Countdown for each second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checker, 50);
}

// Start matching the word
function matching() 
{
  if (wordMatch()) 
  {
    startGame = true;
    displayWord(vocabulary);
    words.value = '';
    score++;
  }
  
  // Ensure that the lowest value of score is 0
  if (score === -1) 
  {
    scoreDisplay.innerHTML = 0;
  } else 
  {
    scoreDisplay.innerHTML = score;
  }
}

// Match current input to the word
function wordMatch() 
{
  if (words.value === currentInput.innerHTML) 
  {
    message.innerHTML = 'Correct!';
    return true;
	Audio("correct.mp3");
  } else 
  {
    message.innerHTML = '';
    return false;
  }
}


// Display random word
function displayWord(vocabulary) 
{
  // Randomly generate word index
  const randIndex = Math.floor(Math.random() * vocabulary.length);
  // Display the word randomly
  currentInput.innerHTML = vocabulary[randIndex];
}

// Countdown the time
function countdown() 
{
  // Ensure time does not run out until it stops at 0
  if (time > 0)
  {
    // Decrement of time
    time--;
  } else if (time === 0) 
  {
    // Time is out
    startGame = false;
  }
  // Show the time
  timer.innerHTML = time;
}

// Check status of game
function checker() 
{
  if (!startGame && time === 0) 
  {
    message.innerHTML = 'Time is out!';
    score = -1;
  }
}