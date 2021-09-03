'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;
let highScore = 0;
//function to set the message box
function messageBlock(message) {
  document.querySelector('.message').textContent = message;
}
let score = 20;
//function to set the score
function setScore(score) {
  document.querySelector('.score').textContent = score;
}
//Check Button On Click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //Making sure the user inputs something in the INPUT BOX
  if (!guess) {
    // document.querySelector('.message').textContent = 'No input detected 😢';
    messageBlock('No input detected 😢');
  }
  //When the Player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Yay you got it right';
    messageBlock('Yay you got it right');
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score >= highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? messageBlock(`Too High`) : messageBlock(`Too Low`);
      score--;
      // document.querySelector('.score').textContent = score;
      setScore(score);

      document.querySelector('body').style.backgroundColor = '#20B7B4';
    } else {
      score--;
      // document.querySelector('.score').textContent = score;
      setScore(score);
      messageBlock(`you lost the game 🤦‍♂️`);
      // document.querySelector('.message').textContent = 'You Lost The Game 🤦‍♂️';
      document.querySelector('body').style.backgroundColor = '#F33838';
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
//Again Button On click Listener
document.querySelector('.again').addEventListener('click', function () {
  //score reset
  score = 20;
  // document.querySelector('.score').textContent = score;
  setScore(score);
  //random number reset
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //background reset
  document.querySelector('body').style.backgroundColor = '#222';
  //Number Box width reset
  document.querySelector('.number').style.width = '15rem';
  //Number Box visibility reset
  document.querySelector('.number').textContent = '?';
  //message box reset
  // document.querySelector('.message').textContent = 'Start guessing...';
  messageBlock('Start guessing...');
  //input box reset
  document.querySelector('.guess').value = '';
  //incrementing count value
  // count++;
});
//Using key board to check the number
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);

    //Making sure the user inputs something in the INPUT BOX
    if (!guess) {
      // document.querySelector('.message').textContent = 'No input detected 😢';
      messageBlock('No input detected 😢');
    }
    //When the Player wins
    else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = 'Yay you got it right';
      messageBlock('Yay you got it right');
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score >= highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        guess > secretNumber
          ? messageBlock(`Too High`)
          : messageBlock(`Too Low`);
        score--;
        // document.querySelector('.score').textContent = score;
        setScore(score);

        document.querySelector('body').style.backgroundColor = '#20B7B4';
      } else {
        score--;
        // document.querySelector('.score').textContent = score;
        setScore(score);
        messageBlock(`you lost the game 🤦‍♂️`);
        // document.querySelector('.message').textContent = 'You Lost The Game 🤦‍♂️';
        document.querySelector('body').style.backgroundColor = '#F33838';
        document.querySelector('.number').textContent = secretNumber;
      }
    }
  }
});
//previous game logic included within the check button onclick
//when guess is high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;

//     document.querySelector('body').style.backgroundColor = '#20B7B4';
//   } else {
//     score--;
//     document.querySelector('.score').textContent = score;

//     document.querySelector('.message').textContent = 'You Lost The Game 🤦‍♂️';
//     document.querySelector('body').style.backgroundColor = '#F33838';
//     document.querySelector('.number').textContent = secretNumber;
//   }
// }
// //when guess is low
// else if (guess < secretNumber) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.message').textContent = 'Too Low';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('body').style.backgroundColor = '#6920B6';
//   } else {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = 'You Lost The Game 🤦‍♂️';
//     document.querySelector('body').style.backgroundColor = '#F33838';
//     document.querySelector('.number').textContent = secretNumber;
//   }
// }
