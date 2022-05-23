const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports = (questions, done = f => f) => {
  const answers = []
  const [firstQ] = questions

  const qA = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], qA)
    } else {
      done(answers)
    }
  }

  rl.question(firstQ, qA)
}
