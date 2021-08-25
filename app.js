// import functions
const pigImage = document.getElementById('pig-image')
const pigAudio = document.getElementById('horse-sound')
const pigSpan = document.getElementById('pig-span')

const elImage = document.getElementById('el-image')
const elAudio = document.getElementById('cat-sound')
const elSpan = document.getElementById('el-span')

const birdImage = document.getElementById('bird-image')
const birdAudio = document.getElementById('dog-sound')
const birdSpan = document.getElementById('bird-span')

let pigClicks = 0;
let elClicks = 0;
let birdClicks = 0;

// reference needed DOM elements


// set event listeners 
pigImage.addEventListener('click', () => {
    pigAudio.play();
  pigClicks ++
  pigSpan.textContent = 'You have clicked the pig ' + pigClicks + ' times!';

});

elImage.addEventListener('click', () => {
    elAudio.play();
    elClicks ++
    elSpan.textContent = 'You have clicked the elephant ' + elClicks + ' times!';

});

birdImage.addEventListener('click', () => {
    birdAudio.play();
    birdClicks ++
    birdSpan.textContent = 'You have clicked the bird ' + birdClicks + ' times!'
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
