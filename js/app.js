

  const startButton = document.querySelector('.btn__reset');
  const gameButtons = document.querySelectorAll('button');
  const qwerty = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');

  //Phrases

  const phrases = {
    One: 'Peter Piper picked a pack of pickled relish',
    Two: 'I shot the sherif, but I did not shoot the dog',
    Three: 'Mele Kalikimaka a Hauoli Makahiki Hou',
    Four: 'Mary had a little llama',
    Five: 'I hate Mondays',
    Six: 'There once was a man from Nantucket',
    Seven: 'To be or not to be, that is the inquiry',
    Nine: 'Rudolph the blue nose reindeer',
    Ten: 'Jack and Jill climbed up the ladder',
  };

  startButton.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
  })

for (let i = 0; i < gameButtons.length; i += 1) {
  gameButtons[i].addEventListener('click', () => {
    console.log(gameButtons[i].textContent);
  })
}
