const cp = require("child_process")

const questionApp = cp.spawn("node", ["../questions.js"])

questionApp.stdin.write("Olga \n")
questionApp.stdin.write("Olga \n")
questionApp.stdin.write("Olga \n")

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`)
})

questionApp.on("close", ()=> {
  console.log(`questionApp process exited`)
})