const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100)
  // console.log(`waiting ${currentTime / 1000} seconds`)
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting...${p}%`)
}
console.log(`setting a ${waitTime / 1000} second delay`)
const timerFinished = () => {
  clearInterval(interval) // clearInterval is a built in node function
  process.stdout.clearLine(); //clearLine() is built in
  process.stdout.cursorTo(0); // cursorTo() is built in
  process.stdout.write(`done \n`)
}

const interval = setInterval(incTime, waitInterval)
setTimeout(timerFinished, waitTime)