const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startButton = document.querySelector('.btn__reset');

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
