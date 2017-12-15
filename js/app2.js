const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startButton = document.querySelector('.btn__reset');
const gameButtons = document.querySelectorAll('button');



startButton.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
})

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
//Gets random phrase from array
let random = Math.floor(Math.random()*Object.values(phrases).length)+1;

//Function selects a random phrase fron the array and splits it into characters
function getRandomPhraseArray(arr) {
    let newPhrase = Object.values(arr)[random].split('');
    return newPhrase;
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

function buttonEvent(btns){
  for (i=0; i < gameButtons.length; i+=1){
    btns[i].addEventListener('click', () => {
      let clickEvent = event.target.textContent;
      console.log(clickEvent);
      // return clickEvent;
    })
  }
}
const buttonClick = buttonEvent(gameButtons);
  //check letter function

  function checkLetter(buttonClick) {
    let correct = document.querySelectorAll('.letter');
    let show = correct[i];
    for (i = 0; i < correct.length; i += 1){
      if (buttonClick === correct[i].textContent){
        correct[i].className = 'show';
        let letterFound = correct[i].textContent;
        console.log(correct[i].textContent);

      } else {
        return null;
      }
    }}
