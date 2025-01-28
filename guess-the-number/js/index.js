const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const guessField = document.querySelector('#attemptInput');
const guessSubmit = document.querySelector('#attemptSubmit');

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
  let attempts = 1;
  const value = parseInt(guessField.value, 10);
  if (value === randomNumber) {
    alert("Adivinaste el número!");
  } else {
    attempts++;
    alert("Intenta de nuevo");

  }
}