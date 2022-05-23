const collectAnswers = require("./lib/collectAnswers.js");
const questions = [
  "Whats your favorite way to spend a day off?",
  "What was your favorite age growing up?",
  "What's your favorite ice cream topping?",
];

//function call: collect answers
const answerEvent = collectAnswers(questions, (answers) => {
  console.log(`Thank you for your answers`);
  console.log(` ${answers}`);
  process.exit();
});

answerEvent.on("answer", answer => console.log(`Her answered: ${answer}`))