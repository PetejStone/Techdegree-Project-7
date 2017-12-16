
//Phrases defined at top so I can use them in variables below
const phrases = [
  'Peter Piper picked a pack of pickled relish',
  'I shot the sherif but I did not shoot the dog',
  'Mele Kalikimaka a Hauoli Makahiki Hou',
  'Mary had a little llama',
  'I hate Mondays',
  'There once was a man from Nantucket',
  'To be or not to be that is the inquiry',
  'Rudolph the blue nose reindeer',
  'Jack and Jill climbed up the ladder',
];


//Random number to be generated between 1 and the number of objects in the arrary
// Missed variable set to 'zero' to start the game
  let random = Math.floor(Math.random()*Object.values(phrases).length)+1;
  let missed = 0;
  let heartsMissing = 0;


//Constant variables for the game
  const startButton = document.querySelector('.btn__reset');
  const title = document.querySelector('.title');
  const gameButtons = document.querySelectorAll('button');
  const qwerty = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');
  const show = document.getElementsByClassName('show');
  const overlay = document.querySelector('#overlay')
  const images = document.getElementsByTagName('img');
//Listens for the startButton to be clicked and sets the overlay display to 'none'
//revealing the game board
  startButton.addEventListener('click', () => {

    overlay.style.display = 'none';
  })

//Function selects a random phrase fron the array and splits it into characters
  function getRandomPhraseArray(arr) {
      let newPhrase = Object.values(arr)[random].split('');
      return newPhrase
    }
//Calls function above, get's it's return value and sets it to a new variable
  getRandomPhraseArray(phrases);
  const phraseArray = getRandomPhraseArray(phrases);

//Function that adds the random phrase and creates a list item for each letter
  function addPhraseToDisplay(arr) {

    for (let i = 0; i < phraseArray.length; i += 1) {
      let li = document.createElement('li');
      li.textContent = phraseArray[i]
      phrase.children[0].appendChild(li);
       if (li.textContent !== ' ') {
         li.className = 'letter';
    } else { li.className = 'space';
   }
  }
}

//calling function above by using the phrase array as an argument
  addPhraseToDisplay(phraseArray);

//variable to be used in function. Selects all 'letters'
const correct = document.querySelectorAll('.letter');

//checkLetter Function
  function checkLetter(buttonClicked) {
    //Set to upperCase so user doesn't have to worry about case sensitive answers
    const letterClicked = buttonClicked.textContent.toUpperCase();
    let letterFound = false; // <-- Default value set to false

      for (let i = 0; i < correct.length; i +=1 ){
          if (letterClicked === correct[i].textContent.toUpperCase()) {
              correct[i].classList.add('show');
              letterFound = true;
          }
          //Ternary shorthand---
         //if letterFound is true, then return the letterClicked, if not true,
        // return 'null'
      } return letterFound ? letterClicked : null;
    }


function checkWin() {
  if (show.length === correct.length){
    overlay.className = 'win';
    overlay.style.display = '';
    title.textContent = 'Congrats! You Won!';
    startButton.addEventListener('click', () => {
      location.reload();
    });
  } if (missed === 5) {
    overlay.className = 'lose';
    overlay.style.display = '';
    title.textContent = 'Bummer, try again!';
    startButton.textContent = 'Try Again';
    startButton.addEventListener('click', () => {
      location.reload();
    });
  }

}
//Event Listener
   window.addEventListener('click', () => {
         if (event.target.tagName === 'BUTTON') { //listens for btns only
           event.target.className = 'chosen';
           event.target.disabled = 'true';

           let letterFound = checkLetter(event.target);

           if (letterFound === null){
             missed += 1;
             for (let i = 0; i<=images.length; i + 1){
               if (letterFound === null)
                images[i].src = 'images/lostHeart.png';

             }
          }
          checkWin();


      }
     }
    );









///////////Function for using keyboard on laptop/computer, couldn't get 'missed'
///////////variable to work. Saving for future refactor

  // for (let i = 0; i < gameButtons.length; i += 1) {
  //   let letterFound = false;
  //   for (let i = 0; i < correct.length; i += 1) {
  //       window.addEventListener('keypress', () => {
  //          if (event.key.toUpperCase() === correct[i].textContent.toUpperCase()) {
  //           correct[i].classList.add('show');
  //         }
  //             if (event.key === gameButtons[i].textContent) {
  //               gameButtons[i].disabled = 'true';
  //               gameButtons[i].className = 'chosen';
  //               letterFound = 'true';
  //               return letterFound;
  //         }
  //
  //       })
  //     }
  // }

//Object.values(phrases)[i]  <---Good for looping through array to be used above

/////function returns the button clicked to the console

// for (let i = 0; i < gameButtons.length; i += 1) {
//   gameButtons[i].addEventListener('click', () => {
//     console.log(gameButtons[i].textContent);
//
//   })
// }
