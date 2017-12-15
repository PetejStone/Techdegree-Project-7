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


//Constant variables for the game
  const startButton = document.querySelector('.btn__reset');
  const gameButtons = document.querySelectorAll('button');
  const qwerty = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');

//Listens for the startButton to be clicked and sets the overlay display to 'none'
//revealing the game board
  startButton.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
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


//Variable with the class name 'letter' added to the name 'correct'
let correct = document.querySelectorAll('.letter');



// For loop that loops through the number of classes titled 'correct' and
// gets the value of their text content. Also creates a new variable named
// 'show' which will be used to add the class name 'show' to all 'correct' classes
///containing that letter

for (let i = 0; i < correct.length; i += 1) {
   let correctAnswer = correct[i].textContent;
   let show = correct[i];

// For loop that loops through the game buttons length and listens for a 'click'
// on each one.
//Also set the value to Upper Case on both so that the user did not have to
//worry about case sensitive answers
///guess value is logged to console if correct












  for (let i = 0; i < gameButtons.length; i += 1) {
   gameButtons[i].addEventListener('click', () => {
     event.target.className = 'chosen';
     event.target.disabled = 'true';
         if (event.target.textContent.toUpperCase() === correctAnswer.toUpperCase()) {
           let letterFound = event.target.textContent;
           let checkLetter = letterFound
           show.className = 'show'; //loops through all the correct items that = the event.target  and adds the class name 'show'
           return checkLetter
        } else {
          checkLetter = null;
        }
       })
     }

//checking the checkLetter function



//Same as above, except it listens for keyboard presses and sets those values
// to uppercase without worrying about case sensitivity, then adds the class name 'show'
     window.addEventListener('keypress',() => {
           if (event.key.toUpperCase() === letterFound.toUpperCase()) {
            return letterFound;
            show.className = 'show';

          } else {
            return null;
          }
         })
}
















// for (let i = 0; i < correct.length; i += 1) {
//    let guess = correct[i].textContent;
//    let show = correct[i]
//
//   for (let i = 0; i < gameButtons.length; i += 1) {
//    gameButtons[i].addEventListener('click', () => {
//          if (event.target.textContent.toUpperCase() === guess.toUpperCase()) {
//           console.log(guess);
//           show.className = 'show';
//
//          }
//        })
//      }
//
//
//      window.addEventListener('keypress', () => {
//            if (event.key.toUpperCase() === guess.toUpperCase()) {
//             console.log(guess);
//             show.className = 'show';
//
//            }
//          })
// }






// for (let i = 0; i < correct.length; i += 1) {
//   if (correct[i] === guess) {
//     correct[i].className = 'show';
//   }
// }






///// This function only returns letters that are found in phrase One of the arrary
//// Possible use of 'match' in future refactoring

  // for (let i = 0; i < gameButtons.length; i += 1) {
  //   gameButtons[i].addEventListener('click', () => {
  //     if (phrases.One.match(event.target.textContent) ) {
  //       console.log(event.target.textContent);
  //     }else {
  //       console.log('sorry');
  //     }
  //
  //   })
  // }

//Object.values(phrases)[i]  <---Good for looping through array to be used above




/////function returns the button clicked to the console

// for (let i = 0; i < gameButtons.length; i += 1) {
//   gameButtons[i].addEventListener('click', () => {
//     console.log(gameButtons[i].textContent);
//
//   })
// }
