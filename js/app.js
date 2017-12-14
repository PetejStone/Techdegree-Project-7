//Phrases defined at top so I can use them in variables below
const phrases = {
  One: 'Peter Piper picked a pack of pickled relish',
  Two: 'I shot the sherif but I did not shoot the dog',
  Three: 'Mele Kalikimaka a Hauoli Makahiki Hou',
  Four: 'Mary had a little llama',
  Five: 'I hate Mondays',
  Six: 'There once was a man from Nantucket',
  Seven: 'To be or not to be that is the inquiry',
  Eight: 'Rudolph the blue nose reindeer',
  Nine: 'Jack and Jill climbed up the ladder',
};

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

  getRandomPhraseArray(phrases);
  const phraseArray = getRandomPhraseArray(phrases);

  function addPhraseToDisplay(arr) {

    for (let i = 0; i < phraseArray.length; i += 1) {
      let li = document.createElement('li');
      li.textContent = phraseArray[i]
      phrase.appendChild(li);
       if (li.textContent !== ' ') {
         li.className = 'letter';
    } else { li.className = 'space';
   }
  }
}
  addPhraseToDisplay(phraseArray);

let correct = document.querySelectorAll('.letter');


for (let i = 0; i < correct.length; i += 1) {
   let guess = correct[i].textContent;
   let show = correct[i]

  for (let i = 0; i < gameButtons.length; i += 1) {
   gameButtons[i].addEventListener('click', () => {
         if (event.target.textContent.toUpperCase() === guess.toUpperCase()) {
          console.log(guess);
          show.className = 'show';

         }
       })
     }


     window.addEventListener('keypress', () => {
           if (event.key.toUpperCase() === guess.toUpperCase()) {
            console.log(guess);
            show.className = 'show';

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
