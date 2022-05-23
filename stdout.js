// writable stream that outputs a write method
// similar global process to console.log, but we have more controll. where we deside what the spacing is and default is one-line. where console.log is multiline default
const questions = ["What's you name", "what would you rather be doing", "what's your fave programming language"]

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`)
  process.stdout.write(` > \n`)
}

ask()
const answers = []
// process.stdin.on('event', handler => {this is a binary, so convert it to string or whatever you need})
process.stdin.on("data", data => {
  
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
  }
)
process.on("exit", () => {
  const [n, a, l] = answers;
  process.stdout.write(`Go ${a} now ${n}, and then write code in ${l} later`)

})

