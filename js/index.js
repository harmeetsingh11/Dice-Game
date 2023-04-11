// Roll the Dice Button
var rollButton = document.querySelector('.roll-btn');
rollButton.addEventListener('click', startRoll);

function startRoll() {
  // FOR DICE 1

  // Generates random number between 1 to 6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  // Gets the random dice image from dice1.png - dice6.png
  var randomDiceimage1 = 'images/dice' + randomNumber1 + '.png';

  // Change the image to the random dice image.
  var image1 = document
    .querySelectorAll('img')[0]
    .setAttribute('src', randomDiceimage1);

  // FOR DICE 2

  // Generates random number between 1 to 6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Gets the random dice image from dice1.png - dice6.png
  var randomDiceimage2 = 'images/dice' + randomNumber2 + '.png';

  // Change the image to the random dice image.
  var image2 = document
    .querySelectorAll('img')[1]
    .setAttribute('src', randomDiceimage2);

  // RESULT

  // Player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player1 wins!🏆';
  }

  // Player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player2 wins!🏆';
  }

  // Draw
  else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}
