const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// rl.question("how do you like node?\n", answer => {
//   console.log(`Your answer: ${answer}`)
// })

// variable to hold questions
const questions = ["What’s your favorite way to spend a day off?", "What was your favorite age growing up?", "What's your favorite ice cream topping?"]

//var to store answers
const collectAnswers = (questions, done) => {
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

//function call: collect answers
collectAnswers(questions, answers => {
  console.log(`Thank you for your answers`)
  console.log(answers);
  process.exit()
})