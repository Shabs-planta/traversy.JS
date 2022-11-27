/* 
GAME FUNCTION:
- Player most guess a number between a "min" and "max"
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if losses
- Let player choose to play again
 */


// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;


// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessInput = document.querySelector('#guess-input'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UImessage = document.querySelector('.message');

// assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// play Again event listener 
UIgame.addEventListener('mousedown', function(e){
   if(e.target.className === 'play-again'){
      window.location.reload();
   }
})

// listen for guess
UIguessBtn.addEventListener('click', submitBtn);
function submitBtn(e){
   let guess = parseInt(UIguessInput.value);
   // console.log(guess);

   if(isNaN(guess) || guess < min || guess > max){
      // change borderColor
      // UIguessInput.style.borderColor = 'red';
      setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }

   // Check if won
   if (guess === winningNum){
      // Game over won

      // // disable input
      // UIguessInput.disabled = true;
      // // change borderColor
      // UIguessInput.style.borderColor = 'green';
      // // set message
      // setmessage(`${winningNum} is correct YOU WIN`, 'green');

      // UIguessInput.value = '';

      gameOver(true, `${winningNum} is correct YOU WIN!`);

   }
   else {
      // wrong number
      guessesLeft -= 1;

      if (guessesLeft === 0){
         // game over lost
         
         // // disable input
         // UIguessInput.disabled = true;
         // // change borderColor
         // UIguessInput.style.borderColor = 'red';
         // // set message
         // setmessage(`Game over, you lost,${winningNum} is the correct number`, 'red');

         gameOver(false, `Game over, you lost!, ${winningNum} is the correct number`)
      }
      else {
         // game continues - answer wrong

         // change borderColor
         UIguessInput.style.borderColor = 'red';

         // clear guess input
         UIguessInput.value = '';

         // tell users its wrong
         setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

      }
   }

}
function gameOver(won, msg){
   let color;
   won === true ? color = 'green' : color = 'red';


    // disable input
    UIguessInput.disabled = true;
    // change borderColor
    UIguessInput.style.borderColor = color;
    // Set textcolor
    UImessage.style.color = color;
    // set message
    setMessage(msg);

   //  change button value
   UIguessBtn.value = 'Play again';
   // add className
   UIguessBtn.className += 'play-again';

}

// funtion of Random number
function getRandomNumber(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

// set message function.
function setMessage(msg, color){
   UImessage.style.color = color;
   UImessage.textContent = msg;
}
