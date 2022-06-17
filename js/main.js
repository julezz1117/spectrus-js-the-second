// select an input, then start everything
navigator.mediaDevices.getUserMedia({ audio: true }).then(initialise).catch(console.log);

let audioSystem;

function initialise(stream) { // eslint-disable-line no-unused-vars
  audioSystem = new AudioSystem(document.querySelector('#div'), stream);
  startLoop(audioSystem.update.bind(audioSystem));
}

//  add spacebar to pause
const spaceBar = 32;
window.onkeydown = function (gfg) {
  if (gfg.keyCode === spaceBar) {
    audioSystem.spec.pauseToggle();
  }
};
