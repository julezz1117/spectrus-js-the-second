let startTime; let
  previousTimeStamp;
let callback;
let dt;

function animFrameLoop(timestamp) { // eslint-disable-line no-unused-vars
  if (startTime === undefined) {
    startTime = timestamp;
    previousTimeStamp = timestamp;
  }

  dt = (timestamp - previousTimeStamp) / 1000;
  callback(dt);

  previousTimeStamp = timestamp;
  window.requestAnimationFrame(animFrameLoop);
}

function startLoop(callFunc) { // eslint-disable-line no-unused-vars
  callback = callFunc;
  window.requestAnimationFrame(animFrameLoop);
}
